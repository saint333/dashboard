import NextAuth from 'next-auth';
import { authConfig } from './app/authconfig';

// import { auth } from "./app/auth"
// export default auth((req) => { console.log('jiji',req.cookies) })

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}