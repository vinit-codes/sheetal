"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";
import { redirects } from "@wix/redirects";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
      currentCart,
       redirects,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});
export type WixClient = typeof wixClient;
export const WixClientContext = createContext<WixClient>(wixClient);
export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};

// ⚙️ Wix Client Context Setup (with OAuth & Cart Access)
//
// What this file does:
// - Creates a Wix client instance with SDK modules: products, collections, cart, redirects
// - Handles authentication using stored refreshToken (from cookies)
// - Exposes the `wixClient` globally using React Context
//
// Why it's useful:
// ✅ Allows any component to access Wix APIs (like products, cart, collections) via context
// ✅ Authenticates the user silently using refreshToken stored in cookies
// ✅ Clean setup for a Headless Wix + Next.js project
//
// How to use it:
// 1. Wrap your app with <WixClientContextProvider>
// 2. Access client with: const wixClient = useContext(WixClientContext)
//
// Notes:
// - Refresh token is read from cookies and used to silently re-authenticate
// - Client ID is pulled from .env (NEXT_PUBLIC_WIX_CLIENT_ID)
// - Modules like currentCart are now available as `wixClient.currentCart` etc.
