"use client";
import React from "react";
import styles from "./MobileMenu.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItem } from "@/app/types";

export default function MobileMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const currentPath = usePathname();

  return (
    <>
      <nav className={styles.menu}>
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
              <Link href={href}>
                <div className={styles.icon}>
                  <Image
                    src={icon}
                    width={40}
                    height={40}
                    alt="Logo UPB"
                    priority={true}
                  />
                </div>
              </Link>
              {submenu && (
                <nav className={styles.submenu}>
                  <ul>
                    {submenu.map(({ href, title }) => (
                      <Link key={title} href={href}>
                        <li
                          className={
                            href === currentPath || currentPath.includes(href)
                              ? styles.selected
                              : ""
                          }
                        >
                          <span>{title}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </nav>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
