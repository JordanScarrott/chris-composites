import type { Auth, User } from './interface';
import { MockAuthClient } from './mockAuthClient';

// In a real app, you might have other clients like a real API client.
// const client = new RealAuthApiClient();
const client = new MockAuthClient();

class AuthAdapter implements Auth {
  async isLoggedIn(): Promise<boolean> {
    return Promise.resolve(client.isLoggedIn());
  }

  async getUser(): Promise<User | null> {
    return Promise.resolve(client.getUser());
  }

  getLogInUrl(): string {
    return client.getLoginUrl();
  }

  getLogOutUrl(): string {
    return client.getLogoutUrl();
  }
}

let authAdapterInstance: Auth;

export function getAuthAdapter(): Auth {
  if (!authAdapterInstance) {
    authAdapterInstance = new AuthAdapter();
  }
  return authAdapterInstance;
}
