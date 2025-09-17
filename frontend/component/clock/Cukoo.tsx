"use client";
import React from "react";
import Image from "next/image";
import { CuckooClock } from "@/packages/ui/components/cuckooClock/Index";

const Main = () => {
  return (
    <CuckooClock
      mode="interval"
      intervalMs={6000}
      pendulum={{
        type: "pendulum",
        periodMs: 2000,
        lengthPx: 70,
      }}
      debug
    >
      <Image
        src="/tmp/キングダム大沢.jpeg"
        alt="avatar"
        objectFit="cover"
        objectPosition="center"
        fill={true}
      />
    </CuckooClock>
  );
};

export default Main;
