import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookies = request.cookies;
  const res = NextResponse.next();

  if (cookies.get("refreshToken")) {
    return res;
  }

  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();
  res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
};  

// 🛡️ middleware.ts — Wix Visitor Token Auto-Initializer (Runs on Every Request)
//
// What this middleware does:
// - Checks if the browser has a `refreshToken` cookie
// - If NOT present, it creates a *new anonymous visitor token* using Wix OAuth
// - Stores the `refreshToken` in a secure cookie so Wix APIs can be used later
//
// Why it’s useful:
// ✅ Ensures every visitor gets a valid Wix session even if not logged in
// ✅ Enables features like adding to cart, browsing products, etc. anonymously
// ✅ Required for headless eCommerce to work without manual login
//
// How it works:
// - Runs on every request (middleware feature in Next.js)
// - If refreshToken already exists → does nothing
// - If not → generates a new visitor session & sets cookie
//
// Notes:
// - Needed for headless stores to enable cart/session per visitor
// - Works with SSR & client-side requests by ensuring the token is in place
