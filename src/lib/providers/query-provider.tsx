"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

let ReactQueryDevtools: any = null;
if (process.env.NODE_ENV === "development") {
  try {
    ReactQueryDevtools = require("@tanstack/react-query-devtools").ReactQueryDevtools;
  } catch {
    // Devtools not installed, that's okay
  }
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh longer
            gcTime: 10 * 60 * 1000, // 10 minutes - keep in cache longer (formerly cacheTime)
            refetchOnWindowFocus: false,
            refetchOnMount: false, // Don't refetch if data is still fresh
            refetchOnReconnect: false,
            retry: 1,
            retryDelay: 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {ReactQueryDevtools && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}

