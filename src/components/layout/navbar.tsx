"use client";

import React, { useState } from "react";
import Image from "next/image";
import { NavPill } from "./nav-pill";
import { UserProfile } from "./user-profile";

const NAV_ITEMS = [
  "Home",
  "Payments",
  "Balances",
  "Customers",
  "Products",
  "Billing",
  "Reports",
  "Connect",
];

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <header className="flex items-center justify-between py-2 border-b border-border-card/60 mb-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 relative rounded-lg overflow-hidden shadow-2xs">
          <Image
            src="/logo.png"
            alt="Aven Logo"
            width={32}
            height={32}
            className="object-cover"
            priority
          />
        </div>
        <span className="font-bold text-lg tracking-tight text-content-primary">
          aven
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <NavPill
            key={item}
            label={item}
            isActive={activeTab === item}
            onClick={() => setActiveTab(item)}
          />
        ))}
      </nav>

      <UserProfile />
    </header>
  );
}
