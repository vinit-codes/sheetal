import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
import { members } from "@wix/members";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
      // orders,
      // members,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};

// 🌐 wixClientServer — Wix SDK Setup for Server-Side Usage (SSR)
//
// What this file does:
// - Creates a fresh Wix client instance for server-side functions (e.g., API routes, getServerSideProps)
// - Authenticates using `refreshToken` stored in browser cookies
//
// Why it’s useful:
// ✅ Secure access to Wix APIs (products, collections, orders, etc.) during SSR or API calls
// ✅ Avoids using client-side context — this version is scoped to server code
//
// How to use it:
// const wixClient = await wixClientServer();
// const productList = await wixClient.products.queryProducts().find();
//
// Notes:
// - Only call this on the **server** (Next.js Server Actions, Route Handlers, etc.)
// - `refreshToken` is read from Next.js's `cookies()` helper (secure on the server)
// - You can enable modules like `orders`, `members` by uncommenting them
