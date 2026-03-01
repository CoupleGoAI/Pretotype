import Image from "next/image";

/**
 * Brand logo rendered from /public/logo.png.
 * Drop-in replacement for the old BrandHeart SVG.
 */
export default function BrandHeart({ size = 20 }: { size?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="CoupleGoAI logo"
            width={size}
            height={size}
            className="shrink-0"
            aria-hidden
        />
    );
}
