/**
 * Base API client for making HTTP requests
 * API base URL is configured via NEXT_PUBLIC_API_URL environment variable
 */

import { logger } from "@/lib/logger";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://beauty-center.mrhn.ir/api";

export interface ApiError {
  message: string;
  status: number;
  data?: unknown;
}

export interface ApiErrorResponse {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
}

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  };

  try {
    logger.debug(`API Request: ${options?.method || "GET"} ${endpoint}`);
    
    const response = await fetch(url, config);

    if (!response.ok) {
      // Try to parse error response
      let errorData: ApiErrorResponse = {};
      try {
        errorData = await response.json();
      } catch {
        // If JSON parsing fails, use default message
      }

      const error: ApiError = {
        message: errorData.message || errorData.error || `HTTP error! status: ${response.status}`,
        status: response.status,
        data: errorData,
      };
      
      logger.error(`API Error: ${endpoint}`, {
        status: response.status,
        error: errorData,
      });
      
      throw error;
    }

    const data = await response.json();
    logger.debug(`API Success: ${endpoint}`);
    return data as T;
  } catch (error) {
    // Re-throw ApiError as-is
    if (error && typeof error === "object" && "status" in error) {
      throw error;
    }
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes("fetch")) {
      logger.error(`Network Error: ${endpoint}`, error);
      const networkError: ApiError = {
        message: "اتصال به سرور برقرار نشد. لطفاً اتصال اینترنت خود را بررسی کنید",
        status: 0,
      };
      throw networkError;
    }
    
    // Handle other errors
    logger.error(`API Request Failed: ${endpoint}`, error);
    const apiError: ApiError = {
      message: error instanceof Error ? error.message : "خطای نامشخص در ارتباط با سرور",
      status: 0,
    };
    throw apiError;
  }
}

// Helper methods for different HTTP verbs
export const api = {
  get: <T>(endpoint: string, options?: RequestInit) =>
    apiClient<T>(endpoint, { ...options, method: "GET" }),
  
  post: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),
  
  put: <T>(endpoint: string, data?: unknown, options?: RequestInit) =>
    apiClient<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),
  
  delete: <T>(endpoint: string, options?: RequestInit) =>
    apiClient<T>(endpoint, { ...options, method: "DELETE" }),
};

