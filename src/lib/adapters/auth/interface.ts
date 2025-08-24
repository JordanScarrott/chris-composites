import type { User } from '../../shared/dtos/user.dto';

export type { User };

export interface Auth {
  isLoggedIn(): Promise<boolean>;
  getUser(): Promise<User | null>;
  getLogInUrl(): string;
  getLogOutUrl(): string;
}
