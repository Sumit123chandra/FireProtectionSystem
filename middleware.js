import { NextResponse } from "next/server";

export function middleware(req) {
  const isAdmin = req.cookies.get("admin-auth")?.value;

  // Protect all admin routes except login
  if (req.nextUrl.pathname.startsWith("/admin") && 
      !req.nextUrl.pathname.startsWith("/admin/login") &&
      !isAdmin) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
