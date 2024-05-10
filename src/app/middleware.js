import { NextResponse } from "next/server";


const protectedRoutes = ["/", "/login", "/register", "/dashboard"];

export default function middleware(req) {
  console.log("🚀 ~ middleware ~ req:", req)
  // if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
  //   const absoluteURL = new URL("/", req.nextUrl.origin);
  // }
  return NextResponse.redirect(new URL("/", req.nextUrl.origin).toString());
}
