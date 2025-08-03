"use client";

import { useContext } from "react";
import { WixClientContext } from "@/context/wixContext";

export const useWixClient = () => {
  const context = useContext(WixClientContext);

  if (!context) {
    throw new Error(
      "❌ useWixClient must be used within a <WixClientContextProvider>. You probably forgot to wrap your app in it."
    );
  }

  return context;
};

// 🧩 useWixClient Hook — Access Wix Client from Context
//
// What this hook does:
// - Safely retrieves the Wix SDK client instance from React context
//
// Why it’s useful:
// ✅ Allows any component to use Wix APIs (cart, products, etc.) without prop drilling
// ✅ Ensures you're inside <WixClientContextProvider> — throws a clear error if not
//
// How to use it in a component:
// const wixClient = useWixClient();
// await wixClient.currentCart.getCurrentCart();
//
// Notes:
// - Make sure your app is wrapped with <WixClientContextProvider>
// - Will throw an error if used outside the provider
