"use client";
import React, { useState, useEffect } from "react";
import LateralMenu from "../ui/components/LateralMenu";
import MobileMenu from "../ui/components/MobileMenu";
import { MenuItem } from "../types";
import TopMenu from "../ui/components/TopMenu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({
  children,
  placeholder,
}: {
  children: React.ReactNode;
  placeholder?: string;
}) {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const currentPath = usePathname();

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
        {windowWidth <= 768 ? (
          <>
            <MobileMenu menuItems={menuItems} />
            {currentPath.includes("/home") && (
              <Link href={"/crear-post"}>
                <Image
                  src={"/icons/posts-color.png"}
                  width={80}
                  height={80}
                  alt="Ícono crear post"
                  priority={true}
                  className="icon-create-post-mobile"
                />
              </Link>
            )}
          </>
        ) : (
          <LateralMenu menuItems={menuItems} />
        )}
        <TopMenu windowWidth={windowWidth} placeholder={placeholder} />
        {children}
      </div>
    )
  );
}
