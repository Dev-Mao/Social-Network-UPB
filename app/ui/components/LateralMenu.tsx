"use client";
import React from "react";
import styles from "./LateralMenu.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { MenuItem } from "@/app/types";

export default function LateralMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const currentPath = usePathname();
  const [showSubMenu, setShowSubMenu] = useState<boolean>(
    currentPath.includes("/home")
  );

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
            {menuItems.map(({ href, icon, submenu }, index) => (
              <li
                key={index}
                className={
                  href === currentPath || currentPath.includes(href)
                    ? styles.active
                    : ""
                }
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
                    <div className={styles.dropDown}>
                      <Image
                        src={"/icons/drop-down.png"}
                        width={50}
                        height={50}
                        alt="Logo UPB"
                        priority={true}
                        className={`drop-down
                        ${showSubMenu && " open"}`}
                      />
                    </div>
                    {showSubMenu && (
                      <ul>
                        {submenu.map(({ href, title }) => (
                          <Link key={title} href={href}>
                            <li
                              className={
                                href === currentPath ||
                                currentPath.includes(href)
                                  ? styles.selected
                                  : ""
                              }
                            >
                              <span>{title}</span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={href}>
                    <div className={styles.option}>
                      <Image
                        src={icon}
                        width={50}
                        height={50}
                        alt="Logo UPB"
                        priority={true}
                      />
                    </div>
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
