// Auth come from auth.config
// import { auth } from "@/auth";

import NextAuth from "next-auth";

import authConfig from "@/auth.config";

import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  //   console.log("Route:", nextUrl.pathname);
  //   console.log("Is Logged In:", isLoggedIn);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    console.log("first", 1);
    return;
  }

  if (isAuthRoute) {
    console.log("sec", 2);
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    console.log("third", 3);
    return Response.redirect(new URL("/login", nextUrl));
  }
  
  return;
});

export const config = {
  // Clerk the best matcher
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
