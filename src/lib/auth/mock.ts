import type { Auth, User } from './index';

const mockUser: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Set to true to simulate a logged-in user, false for a logged-out user.
const LOGGED_IN = true;

export class MockAuth implements Auth {
  async isLoggedIn(): Promise<boolean> {
    return Promise.resolve(LOGGED_IN);
  }

  async getUser(): Promise<User | null> {
    return Promise.resolve(LOGGED_IN ? mockUser : null);
  }

  getLogInUrl(): string {
    return '/login'; // Or a dummy URL
  }

  getLogOutUrl(): string {
    return '/logout'; // Or a dummy URL
  }
}
