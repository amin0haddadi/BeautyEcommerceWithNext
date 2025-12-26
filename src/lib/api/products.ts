import type { Product } from "@/types";
import { api } from "./client";

/**
 * API functions for product-related operations
 * All functions make real API calls to the backend
 */

export async function getProducts(): Promise<Product[]> {
  try {
    return await api.get<Product[]>("/products");
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    return await api.get<Product>(`/products/${id}`);
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    return null;
  }
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    if (category === "all") {
      return await api.get<Product[]>("/products");
    }
    return await api.get<Product[]>(`/products?category=${encodeURIComponent(category)}`);
  } catch (error) {
    console.error(`Failed to fetch products by category ${category}:`, error);
    throw error;
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    return await api.get<Product[]>(`/products/search?q=${encodeURIComponent(query)}`);
  } catch (error) {
    console.error(`Failed to search products with query "${query}":`, error);
    throw error;
  }
}

