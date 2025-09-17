"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "@/packages/transition/Context";

export const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { isTransitioning, setIsTransitioning, setIsFirstLoad } =
    useTransition();

  // パスが変わったら → ページがマウントされたとみなしてカバーを閉じる
  useEffect(() => {
    setIsTransitioning(false);
    if (!isTransitioning) {
      setIsFirstLoad(true);
    }
  }, [pathname]); // ← pathname が変わった瞬間に走る

  return <>{children}</>;
};
