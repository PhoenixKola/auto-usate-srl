"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

// On the homepage a bare hash anchor scrolls natively; next/link there appends hashes (/#a#top).
export function SectionLink({ section, ...props }: { section: string } & Omit<ComponentProps<"a">, "href">) {
  const pathname = usePathname();
  if (pathname === "/") return <a href={`#${section}`} {...props} />;
  return <Link href={`/#${section}`} {...props} />;
}
