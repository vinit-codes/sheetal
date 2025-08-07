"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/hooks/useCartStore";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const wixClient = useWixClient();
  const { counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // Disable scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleCartClick = () => {
    setOpen(false);
    setTimeout(() => {
      setIsCartOpen(true);
    }, 300); // Delay to let menu close before opening cart
  };

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="fixed bg-black text-white left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-8 text-xl z-30">
          <Link href="/" onClick={() => setOpen(false)}>
            Homepage
          </Link>
          <Link href="/profile" onClick={() => setOpen(false)}>
            Profile
          </Link>

          <button className="relative" onClick={handleCartClick}>
            <span>Cart</span>
            <span className="absolute -top-4 -right-4 w-6 h-6 bg-white text-black rounded-full text-sm flex items-center justify-center">
              {counter}
            </span>
          </button>

          <button onClick={() => setOpen(false)}>Close Menu</button>
        </div>
      )}

    {isCartOpen && <CartModal closeCart={() => setIsCartOpen(false)} />}

    </div>
  );
};

export default Menu;
