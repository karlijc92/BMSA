import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rwicndsgbtqpytmyrbxu.supabase.co";
const supabaseAnonKey = "sb_publishable_dp2X-rkqUF1TZyJt10yoZA_uSjjt-oT";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
