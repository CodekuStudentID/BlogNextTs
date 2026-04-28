export interface Login {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: {
    name: string;
    role: string;
  };
}