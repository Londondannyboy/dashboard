import "server-only";

import { StackServerApp } from "@stackframe/stack";
import { stackClientApp } from "./client";

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || "https://dashboard-theta-one-45.vercel.app";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/handler/sign-in",
    signUp: "/handler/sign-up",
    signOut: "/handler/sign-out",
    afterSignIn: `${DASHBOARD_URL}/dashboard?appId=relocation`,
    afterSignUp: `${DASHBOARD_URL}/dashboard?appId=relocation`,
    afterSignOut: "/",
  },
});
