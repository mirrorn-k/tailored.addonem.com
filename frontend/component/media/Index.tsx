import React from "react";
import { BaseImage } from "@/atom/media/Image";
import { tMedia } from "@/types/ttnouMap";

interface MediaImageProps {
  media: tMedia;
  alt?: string;
  fill?: boolean;
  objectFit?: React.CSSProperties["objectFit"];
  priority?: boolean;
  className?: string;
}

/**
 * CMS Media 専用 Image ラッパー
 */
const MediaImage: React.FC<MediaImageProps> = ({
  media,
  alt,
  fill = false,
  objectFit = "contain",
  priority = false,
  className,
}) => {
  if (!media?.url) return null;

  const commonStyle: React.CSSProperties = {
    objectFit,
    maxWidth: fill ? undefined : "100%",
    maxHeight: fill ? undefined : "100%",
  };

  return (
    <BaseImage
      imgProps={{
        src: media.url,
        alt: alt || media.name || "image",
        className,
        priority,
        ...(fill
          ? { fill: true }
          : {
              width: media.width,
              height: media.height,
            }),
        style: commonStyle,
      }}
    />
  );
};

export default MediaImage;
