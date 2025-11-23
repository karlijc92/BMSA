// Airtable API integration for BMSA
const AIRTABLE_API_KEY = 'patyOpxmTru71Iq22';
const AIRTABLE_BASE_ID = 'app2fHXLKL2sS6Fso';
const AIRTABLE_TABLE_NAME = 'tblEgS2LNCasnwpev';

export interface UserRecord {
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
  subscriptionPlan?: string;
  subscriptionStatus?: string;
}

export interface SupplementQuery {
  userEmail: string;
  category: string;
  query: string;
  response?: string;
  timestamp: string;
}

export class AirtableService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;
  }

  private async makeRequest(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Airtable API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async createUserRecord(userData: UserRecord) {
    try {
      const response = await this.makeRequest(`/${AIRTABLE_TABLE_NAME}`, {
        method: 'POST',
        body: JSON.stringify({
          records: [
            {
              fields: {
                'First Name': userData.firstName,
                'Last Name': userData.lastName,
                'Email': userData.email,
                'Created At': userData.createdAt || new Date().toISOString(),
                'Subscription Plan': userData.subscriptionPlan || 'Pending',
                'Subscription Status': userData.subscriptionStatus || 'Active'
              }
            }
          ]
        })
      });

      return response;
    } catch (error) {
      console.error('Error creating user record:', error);
      throw error;
    }
  }

  async logSupplementQuery(queryData: SupplementQuery) {
    try {
      const response = await this.makeRequest(`/${AIRTABLE_TABLE_NAME}`, {
        method: 'POST',
        body: JSON.stringify({
          records: [
            {
              fields: {
                'User Email': queryData.userEmail,
                'Category': queryData.category,
                'Query': queryData.query,
                'Response': queryData.response || '',
                'Timestamp': queryData.timestamp,
                'Type': 'Supplement Query'
              }
            }
          ]
        })
      });

      return response;
    } catch (error) {
      console.error('Error logging supplement query:', error);
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const response = await this.makeRequest(`/${AIRTABLE_TABLE_NAME}?filterByFormula={Email}="${email}"`);
      return response.records?.[0] || null;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  }

  async updateUserSubscription(email: string, plan: string, status: string) {
    try {
      const user = await this.getUserByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }

      const response = await this.makeRequest(`/${AIRTABLE_TABLE_NAME}/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          fields: {
            'Subscription Plan': plan,
            'Subscription Status': status
          }
        })
      });

      return response;
    } catch (error) {
      console.error('Error updating user subscription:', error);
      throw error;
    }
  }
}

export const airtableService = new AirtableService();