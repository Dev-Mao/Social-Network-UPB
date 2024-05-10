import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.css";
import Link from "next/link";

export default function TopMenu({ windowWidth }: { windowWidth: number }) {
  const iconSize = windowWidth > 520 ? 40 : 30;
  return (
    <div className={styles.container}>
      {windowWidth <= 768 && (
        <Link href={'/home/general'}> 
          <Image
            src="/img/logoUPB.png"
            width={120}
            height={40}
            alt="Logo UPB"
            priority={true}
          />
        </Link>
      )}
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
      <div className={styles.icons}>
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
          width={iconSize}
          height={iconSize}
          alt="Ícono Mensajes"
          priority={true}
        />
        <Image
          src={"/icons/notifications.png"}
          width={iconSize}
          height={iconSize}
          alt="Ícono Notificaciones"
          priority={true}
        />
        <Image
          src={"/icons/profile.png"}
          width={iconSize}
          height={iconSize}
          alt="Ícono Perfil"
          priority={true}
        />
      </div>
    </div>
  );
}
