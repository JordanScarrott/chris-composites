// This file simulates a client that fetches data from an external source.
// Note that the data structure it returns is different from the application's DTO.

// Set to true to simulate a logged-in user, false for a logged-out user.
const LOGGED_IN = true;

// Simulate a "raw" data object from an external source with its own naming convention.
const rawMockUser = {
  user_name: 'John Doe',
  user_email: 'john.doe@example.com',
  // Note the absence of an avatar property.
};

export class MockAuthClient {
  isLoggedIn(): boolean {
    return LOGGED_IN;
  }

  getRawUser() {
    return this.isLoggedIn() ? rawMockUser : null;
  }

  getLoginUrl(): string {
    return '/login-page'; // A dummy URL for the mock
  }

  getLogoutUrl(): string {
    return '/logout-page'; // A dummy URL for the mock
  }
}
