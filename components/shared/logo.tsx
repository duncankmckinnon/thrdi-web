import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className ?? ""}`}>
      <Image
        src="/thrdi-logo-icon.png"
        alt="thirdeye logo"
        width={32}
        height={32}
        priority
        className="rounded-md"
      />
      <span className="font-sans font-semibold text-brand-text-primary">
        thirdeye
      </span>
    </Link>
  );
}
