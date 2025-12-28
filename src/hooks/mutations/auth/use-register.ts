import { useMutation } from "@tanstack/react-query";
import { register } from "@/lib/api/auth";
import type { RegisterRequest } from "@/lib/api/auth/types";

export function useRegister() {
  return useMutation({
    mutationFn: (credentials: RegisterRequest) => register(credentials),
  });
}

