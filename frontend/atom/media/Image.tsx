// BaseImage.tsx
"use client";

import React, { memo, useMemo, useState } from "react";
import Image, { ImageProps } from "next/image";

export interface BaseImageProps {
  imgProps: Omit<ImageProps, "src" | "alt"> & {
    src: string;
    alt?: string;
  };
}

/**
 * 画像表示の共通ラッパー
 * - SVG は <img> fallback
 * - backend / localhost URL をフロント用パスへ正規化
 */
export const BaseImage = memo<BaseImageProps>(({ imgProps }) => {
  const { src, alt = "Image", ...rest } = imgProps;
  const [svgFailed, setSvgFailed] = useState(false);

  const normalizedSrc = useMemo(
    () => (src ? normalizeMediaUrl(src) : ""),
    [src]
  );
  if (!src) return null;

  const isSvg = normalizedSrc.endsWith(".svg");

  const handleError = () => {
    setSvgFailed(true);
  };

  // SVG は <img> を優先
  if (isSvg && !svgFailed) {
    const { className, style, width, height } = rest;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={`BaseImage BaseImage-svg ${className ?? ""}`}
        src={normalizedSrc}
        alt={alt}
        style={style}
        width={width}
        height={height}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      className="BaseImage"
      src={normalizedSrc}
      alt={alt}
      {...rest}
      // SVG や外部 URL 対策
      unoptimized={isSvg || rest.unoptimized}
    />
  );
});

BaseImage.displayName = "BaseImage";

/**
 * backend / localhost URL をフロント用パスに変換
 */
function normalizeMediaUrl(url: string): string {
  try {
    // 相対パスはそのまま
    if (url.startsWith("/")) return url;

    const u = new URL(url);

    // 本番 backend
    if (u.hostname === "ma-plus-backend.ttnou.com") {
      return `/prod${u.pathname}`;
    }

    // ローカル backend
    if (
      u.hostname === "backend" ||
      u.hostname === "localhost" ||
      u.hostname.startsWith("127.")
    ) {
      return `/local${u.pathname}`;
    }

    return url;
  } catch {
    return url;
  }
}
