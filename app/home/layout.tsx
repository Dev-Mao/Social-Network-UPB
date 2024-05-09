"use client";
import React, { useState, useEffect } from "react";
import LateralMenu from "../ui/components/LateralMenu";
import MobileMenu from "../ui/components/MobileMenu";
import { MenuItem } from "../types";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const menuItems: MenuItem[] = [
    {
      href: "/home/general",
      icon: "/icons/home.png",
      submenu: [
        { href: "/home/general", title: "General" },
        { href: "/home/quejas", title: "Quejas" },
        { href: "/home/buitreo", title: "Buitreo" },
      ],
    },
    {
      href: "/location",
      icon: "/icons/location.png",
    },
    {
      href: "/contacts",
      icon: "/icons/contacts.png",
    },
    {
      href: "/qa",
      icon: "/icons/qa.png",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-section">
      {windowWidth <= 780 ? (
        <MobileMenu menuItems={menuItems} />
      ) : (
        <LateralMenu menuItems={menuItems} />
      )}
      {children}
    </div>
  );
}
