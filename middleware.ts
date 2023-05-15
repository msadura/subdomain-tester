import { getValidSubdomain } from "@/lib/getValidSubdomain";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;
  // Skip api routes
  if (url.pathname.includes("/api/")) return;

  const host = req.headers.get("host");
  const subdomain = getValidSubdomain(host);
  console.log("🔥", subdomain);

  // Skip main app url (TODO: verify this logic)
  if (subdomain === "app") return;

  if (subdomain) {
    // Subdomain available, rewriting
    console.log(
      `>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`
    );
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
