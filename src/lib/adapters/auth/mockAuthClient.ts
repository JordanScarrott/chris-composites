import type { User } from './interface';

const mockUser: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
};

// Set to true to simulate a logged-in user, false for a logged-out user.
const LOGGED_IN = true;

export class MockAuthClient {
  isLoggedIn(): boolean {
    return LOGGED_IN;
  }

  getUser(): User | null {
    return this.isLoggedIn() ? mockUser : null;
  }

  getLoginUrl(): string {
    return '/login-page'; // A dummy URL for the mock
  }

  getLogoutUrl(): string {
    return '/logout-page'; // A dummy URL for the mock
  }
}
