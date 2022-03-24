import type { ImageProps } from "next/image";

export type ImageLinkProps = {
  src: ImageProps["src"];
  href: string;
  alt: string;
  height: number;
  width: number;
};
