"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegisterContent() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo registration - just redirect
    router.push("/");
  };

  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">ایجاد حساب کاربری</h1>
        <p className="text-muted-foreground">
          به خانم خانما بپیوندید برای پیشنهادهای ویژه و به‌روزرسانی‌ها
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">نام</label>
            <Input
              placeholder="نام خود را وارد کنید"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">نام خانوادگی</label>
            <Input
              placeholder="نام خانوادگی خود را وارد کنید"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">ایمیل</label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">رمز عبور</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            باید حداقل ۸ کاراکتر باشد
          </p>
        </div>

        <Button type="submit" className="w-full" size="lg">
          ایجاد حساب کاربری
        </Button>
      </form>

      <p className="text-center text-xs text-muted-foreground mt-6">
        با ایجاد حساب کاربری، شما با{" "}
        <Link href="/terms" className="text-primary hover:underline">
          شرایط استفاده
        </Link>{" "}
        و{" "}
        <Link href="/privacy" className="text-primary hover:underline">
          حریم خصوصی
        </Link>{" "}
        ما موافقت می‌کنید
      </p>

      <p className="text-center text-sm text-muted-foreground mt-8">
        قبلاً حساب کاربری دارید؟{" "}
        <Link href="/login" className="text-primary hover:underline">
          ورود
        </Link>
      </p>
    </>
  );
}

