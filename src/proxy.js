import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/facilities") {
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/add-facility",
    "/manage-facilities",
    "/my-bookings",
    "/facilities/:path*",
  ],
};