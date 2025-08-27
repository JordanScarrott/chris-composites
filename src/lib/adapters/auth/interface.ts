export interface User {
    name: string;
    email: string;
    avatar?: string;
}

export interface Auth {
    isLoggedIn(): Promise<boolean>;
    getUser(): Promise<User | null>;
    getLogInUrl(): string;
    getLogOutUrl(): string;
}
