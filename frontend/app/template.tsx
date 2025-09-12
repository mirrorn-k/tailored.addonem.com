"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "@/packages/transition/Context";
import * as CoverFirst from "@/packages/transition/cover/First";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isTransitioning, setIsTransitioning } = useTransition();

  // パスが変わったら → ページがマウントされたとみなしてカバーを閉じる
  useEffect(() => {
    if (isTransitioning) {
      setIsTransitioning(false);
    }
  }, [pathname]); // ← pathname が変わった瞬間に走る

  return (
    <>
      <CoverFirst.default />
      {children}
    </>
  );
}
