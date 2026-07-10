import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  widthClass?: "w-1/2" | "w-full";
};

export function SectionImage({
  src,
  alt,
  width,
  height,
  className = "",
  widthClass = "w-1/2",
}: SectionImageProps) {
  const sizes =
    widthClass === "w-full"
      ? "(min-width: 1024px) 50vw, 100vw"
      : "(min-width: 1024px) 25vw, 50vw";

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`h-auto ${widthClass} ${className}`}
      sizes={sizes}
    />
  );
}
