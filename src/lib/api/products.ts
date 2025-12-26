import type { Product } from "@/types";
import { products as mockProducts } from "@/data/products";

/**
 * API functions for product-related operations
 * 
 * TODO: Replace mock data with actual API calls when backend is ready
 * Example:
 * import { api } from "./client";
 * export async function getProducts(): Promise<Product[]> {
 *   return api.get<Product[]>("/products");
 * }
 */

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  await delay(300);
  return Promise.resolve(mockProducts);
}

export async function getProductById(id: string): Promise<Product | null> {
  await delay(200);
  const product = mockProducts.find((p) => p.id === id);
  return Promise.resolve(product || null);
}

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  await delay(300);
  if (category === "all") {
    return Promise.resolve(mockProducts);
  }
  const filtered = mockProducts.filter((p) => p.category === category);
  return Promise.resolve(filtered);
}

export async function searchProducts(query: string): Promise<Product[]> {
  await delay(300);
  const lowerQuery = query.toLowerCase();
  const filtered = mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description?.toLowerCase().includes(lowerQuery)
  );
  return Promise.resolve(filtered);
}

