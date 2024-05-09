"use client";
import React from "react";
import styles from "./LateralMenu.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function LateralMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const currentPath = usePathname();
  const menuItems = [
    {
      href: "/home/general",
      icon: "/icons/home.png",
      submenu: [
        { href: "/general/opcion1", title: "Opción 1" },
        { href: "/general/opcion2", title: "Opción 2" },
      ],
    },
    {
      href: "/",
      icon: "/icons/location.png",
    },
    {
      href: "/registro",
      icon: "/icons/contacts.png",
    },
    {
      href: "/registro",
      icon: "/icons/qa.png",
    },
  ];

  const handleSubmenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <>
      <aside className={styles.container}>
        <Link href={"/home/general"}>
          <div style={{ marginTop: "20px" }}>
            <Image
              src="/img/logoUPB.png"
              width={180}
              height={60}
              alt="Logo UPB"
              priority={true}
            />
          </div>
        </Link>
        <nav>
          <ul>
            {menuItems.map(({ href, icon, submenu }) => (
              <li
                key={href}
                className={href === currentPath ? styles.active : ""}
              >
                {submenu ? (
                  <div className={styles.submenu} onClick={handleSubmenu}>
                    <Image
                      src={icon}
                      width={50}
                      height={50}
                      alt="Logo UPB"
                      priority={true}
                    />
                    {showSubMenu && (
                      <ul >
                        {submenu.map(({ href, title }) => (
                          <li key={title}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={href}>
                    <Image
                      src={icon}
                      width={50}
                      height={50}
                      alt="Logo UPB"
                      priority={true}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
