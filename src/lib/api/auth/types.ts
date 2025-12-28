/**
 * API types for authentication
 */

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    user: {
      id: string;
      name: string;
      email: string;
    };
    token: string;
  };
  message?: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterResponse {
  data: {
    user: {
      id: string;
      name: string;
      email: string;
    };
    token: string;
  };
  message?: string;
}

