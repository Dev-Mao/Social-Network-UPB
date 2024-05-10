"use client";
import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.css";
import Link from "next/link";
import { useState } from "react";

export default function TopMenu({ windowWidth }: { windowWidth: number }) {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      {windowWidth <= 768 && (
        <Link href={"/home/general"}>
          <Image
            src="/img/logoUPB.png"
            width={120}
            height={40}
            alt="Logo UPB"
            priority={true}
          />
        </Link>
      )}
      {windowWidth > 520 && (
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Buscar post por título o palabra clave"
          />
          <Image
            src={"/icons/search.png"}
            width={30}
            height={30}
            alt="Ícono Buscar"
            priority={true}
            className={styles.searchIcon}
          />
        </div>
      )}
      <div className={styles.icons}>
        {windowWidth <= 520 && (
          <div className={styles.searchContainer}>
            <Image
              src={"/icons/search-white.png"}
              width={40}
              height={40}
              alt="Ícono Buscar"
              priority={true}
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
            {showSearchBar && (
              <svg width="50" height="31" className={styles.triangle}>
                <polygon
                  points="0,50 25,0 50,50"
                  fill="#00031c"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            )}
          </div>
        )}
        {windowWidth > 768 && (
          <Image
            src={"/icons/posts.png"}
            width={40}
            height={40}
            alt="Ícono Posts"
            priority={true}
          />
        )}
        <Image
          src={"/icons/message.png"}
          width={40}
          height={40}
          alt="Ícono Mensajes"
          priority={true}
        />
        <Image
          src={"/icons/notifications.png"}
          width={40}
          height={40}
          alt="Ícono Notificaciones"
          priority={true}
        />
        <Image
          src={"/icons/profile.png"}
          width={40}
          height={40}
          alt="Ícono Perfil"
          priority={true}
        />
      </div>
      {windowWidth <= 520 && showSearchBar && (
        <div className={styles.searchMobile}>
          <div className={styles.popUp}>
            <input
              type="text"
              placeholder="Buscar post por título o palabra clave"
            />
            <button>Buscar</button>
          </div>
        </div>
      )}
    </div>
  );
}
