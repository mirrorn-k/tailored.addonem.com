"use client";
import Link, { LinkProps } from "next/link";
import React from "react";
import { useContexts, Dir } from "@/context/Transition";

type Props = LinkProps & {
  children: React.ReactNode;
  dir?: Dir; // ← この遷移に使いたい方向
  className?: string;
};

export default function NavLink({ dir = "up", children, ...rest }: Props) {
  const { setNextDir } = useContexts();
  return (
    <Link
      {...rest}
      onClick={(e) => {
        setNextDir(dir);
        // 既存 onClick があれば呼ぶ
        if (typeof rest.onClick === "function") rest.onClick(e);
      }}
    >
      {children}
    </Link>
  );
}
