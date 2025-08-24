import type { Auth, User } from './interface';
import { MockAuthClient } from './mockAuthClient';

const client = new MockAuthClient();

class AuthAdapter implements Auth {
  async isLoggedIn(): Promise<boolean> {
    return Promise.resolve(client.isLoggedIn());
  }

  async getUser(): Promise<User | null> {
    const rawUser = client.getRawUser();

    // If there's no user, return null.
    if (!rawUser) {
      return Promise.resolve(null);
    }

    // Translate the raw data from the client into the application's User DTO.
    const userDto: User = {
      name: rawUser.user_name,
      email: rawUser.user_email,
    };

    return Promise.resolve(userDto);
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
