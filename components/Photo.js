import Image from "next/image";

export default function Photo({ src, alt = "", priority = false, sizes = "100vw", className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={86}
      className={`photo ${className}`}
    />
  );
}
