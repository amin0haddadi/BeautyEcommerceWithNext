import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/types";
import {
  getProducts,
  getProductById,
  getProductsByCategory,
  searchProducts,
} from "@/lib/api/products";

// Query keys for React Query
export const productKeys = {
  all: ["products"] as const,
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  search: (query: string) => [...productKeys.all, "search", query] as const,
};

/**
 * Hook to fetch all products
 */
export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: getProducts,
  });
}

/**
 * Hook to fetch a single product by ID
 */
export function useProduct(id: string) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProductById(id),
    enabled: !!id, // Only run query if id is provided
  });
}

/**
 * Hook to fetch products by category
 */
export function useProductsByCategory(category: string) {
  return useQuery({
    queryKey: productKeys.list({ category }),
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });
}

/**
 * Hook to search products
 */
export function useSearchProducts(query: string) {
  return useQuery({
    queryKey: productKeys.search(query),
    queryFn: () => searchProducts(query),
    enabled: query.length > 0, // Only search if query has content
  });
}

