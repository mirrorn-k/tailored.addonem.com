"use client";

import { Link, Element } from "react-scroll";
import React from "react";

const ElementWrapper = ({
  name,
  sx,
  children,
}: {
  name: string;
  sx?: React.CSSProperties;
  children?: React.ReactNode;
}) => (
  <Element name={name} style={{ width: "100%", ...sx }}>
    {children}
  </Element>
);

export default ElementWrapper;

export const LinkWrapper = ({
  to,
  sx,
  children,
}: {
  to: string;
  sx?: React.CSSProperties;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      className="scroll-link"
      to={to}
      smooth={true}
      duration={500}
      style={{
        cursor: "pointer",
        ...sx,
      }}
    >
      {children}
    </Link>
  );
};
