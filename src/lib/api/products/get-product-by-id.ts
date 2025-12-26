import type { Product } from "@/types";
import { api } from "../client";
import type { ApiProduct } from "./types";
import { transformApiProduct } from "./transformers";

/**
 * Get a single product by ID
 * Note: API might return the product directly or wrapped in { data: ... }
 */
export async function getProductById(id: string): Promise<Product | null> {
  try {
    // Try to get product - API might return ApiProduct directly or wrapped
    const response = await api.get<ApiProduct | { data: ApiProduct }>(`/products/${id}`);
    
    // Handle both response formats
    const apiProduct: ApiProduct = "data" in response ? response.data : response;
    
    return transformApiProduct(apiProduct);
  } catch (error) {
    console.error(`Failed to fetch product ${id}:`, error);
    return null;
  }
}

