import type { Auth } from './index';
import { MockAuth } from './mock';

// In a real application, you would use environment variables
// to determine which auth provider to use.
const AUTH_PROVIDER = 'mock';

let authInstance: Auth;

export function getAuthAdapter(): Auth {
  if (!authInstance) {
    if (AUTH_PROVIDER === 'mock') {
      authInstance = new MockAuth();
    } else {
      // Here you would instantiate your real auth provider,
      // e.g., import { FirebaseAuht } from './firebase'
      // authInstance = new FirebaseAuth();
      throw new Error('Invalid auth provider');
    }
  }
  return authInstance;
}
