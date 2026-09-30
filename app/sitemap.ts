import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contatti/", "/privacy/", "/cookie-policy/", "/note-legali/", "/garanzia-legale/", "/disclaimer/"].map((path, index) => ({ url: `${company.siteUrl}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : path === "/contatti/" ? .8 : .3 }));
}
