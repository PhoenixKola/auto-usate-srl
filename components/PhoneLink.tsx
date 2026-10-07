import type { ReactNode } from "react";
import { phoneContact } from "@/lib/company";

// Dials only when a real number is configured; until then it leads to the homepage contact section.
export function PhoneLink({ className, children, label }: { className?: string; children: ReactNode; label?: string }) {
  if (phoneContact.ready) {
    return <a className={className} href={phoneContact.href} aria-label={label ? `${label}: ${phoneContact.display}` : undefined}>{children}</a>;
  }
  return <a className={className} href="#contatti" aria-label={label ? `${label} — numero in arrivo, vai ai contatti` : undefined}>{children}</a>;
}
