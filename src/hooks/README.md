# React Query Hooks

This directory contains custom React Query hooks for data fetching.

## Available Hooks

### Products

- `useProducts()` - Fetch all products
- `useProduct(id)` - Fetch a single product by ID
- `useProductsByCategory(category)` - Fetch products by category
- `useSearchProducts(query)` - Search products by query string

## Usage Examples

### Basic Product List

```tsx
"use client";

import { useProducts } from "@/hooks/use-products";

export function ProductList() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Single Product

```tsx
"use client";

import { useProduct } from "@/hooks/use-products";

export function ProductDetails({ productId }: { productId: string }) {
  const { data: product, isLoading } = useProduct(productId);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return <div>{product.name}</div>;
}
```

### Category Filtering

```tsx
"use client";

import { useProductsByCategory } from "@/hooks/use-products";

export function CategoryProducts({ category }: { category: string }) {
  const { data: products } = useProductsByCategory(category);

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Search

```tsx
"use client";

import { useState } from "react";
import { useSearchProducts } from "@/hooks/use-products";

export function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products } = useSearchProducts(searchQuery);

  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
      />
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

## Creating New Hooks

1. Add API function in `src/lib/api/[resource].ts`
2. Create hook in `src/hooks/use-[resource].ts`
3. Use query keys pattern for cache management

Example:

```tsx
// src/lib/api/categories.ts
export async function getCategories() {
  return api.get<Category[]>("/categories");
}

// src/hooks/use-categories.ts
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/lib/api/categories";

export const categoryKeys = {
  all: ["categories"] as const,
  lists: () => [...categoryKeys.all, "list"] as const,
};

export function useCategories() {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
  });
}
```

