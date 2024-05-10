"use client";
import React, { useState, useEffect } from "react";
import LateralMenu from "../ui/components/LateralMenu";
import MobileMenu from "../ui/components/MobileMenu";
import { MenuItem } from "../types";
import TopMenu from "../ui/components/TopMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const menuItems: MenuItem[] = [
    {
      href: "/home/general",
      icon: "/icons/home.png",
      submenu: [
        { href: "/home/general", title: "General" },
        { href: "/home/quejas", title: "Quejas" },
        { href: "/home/buitreos", title: "Buitreos" },
      ],
    },
    {
      href: "/ubicacion",
      icon: "/icons/location.png",
    },
    {
      href: "/contactos",
      icon: "/icons/contacts.png",
    },
    {
      href: "/preguntas",
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
    windowWidth > 0 && (
      <div className="home-section">
        {windowWidth <= 780 ? (
          <MobileMenu menuItems={menuItems} />
        ) : (
          <LateralMenu menuItems={menuItems} />
        )}
        <TopMenu windowWidth = {windowWidth}/>
        {children}
      </div>
    )
  );
}
