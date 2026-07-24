import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

function buffer(readable) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readable.on("data", (chunk) => chunks.push(chunk));
    readable.on("end", () => resolve(Buffer.concat(chunks)));
    readable.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const sig = req.headers["stripe-signature"];
  const rawBody = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;

    if (email) {
      const { error } = await supabaseAdmin
        .from("bmsa_profiles")
        .upsert(
          { email, is_subscribed: true },
          { onConflict: "email" }
        );

      if (error) {
        console.error("Failed to update subscription status:", error);
      }
    }
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object;
    const customer = await stripe.customers.retrieve(subscription.customer);
    const email = customer.email;

    if (email) {
      await supabaseAdmin
        .from("bmsa_profiles")
        .update({ is_subscribed: false })
        .eq("email", email);
    }
  }

  res.status(200).json({ received: true });
}
