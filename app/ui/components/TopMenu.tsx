"use client";
import React from "react";
import Image from "next/image";
import styles from "./TopMenu.module.css";
import Link from "next/link";
import { useState } from "react";
import { limit } from "firebase/firestore";

export default function TopMenu({ windowWidth }: { windowWidth: number }) {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const allNotifications = [
    "Notificación 1",
    "Notificación 2",
    "Notificación 3",
    "Notificación 4",
    "Notificación 5",
    "Notificación 6",
    "Notificación 7",
    "Notificación 8",
    "Notificación 9",
    "Notificación 10",
    "Notificación 11",
  ];

  const [notifications, setNotifications] = useState(allNotifications);

  const handleShowSearchBar = () => {
    setShowNotifications(false);
    setShowSearchBar(!showSearchBar);
  };

  const handleShowNotifications = () => {
    setShowSearchBar(false);
    setShowNotifications(!showNotifications);
  };

  const removeNotification = (selected: string) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification !== selected
    );
    setNotifications(updatedNotifications);
  };
  
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
          <div className={styles.popUpContainer}>
            <Image
              src={"/icons/search-white.png"}
              width={40}
              height={40}
              alt="Ícono Buscar"
              priority={true}
              onClick={handleShowSearchBar}
            />
            {showSearchBar && (
              <svg width="50" height="31" className={styles.triangle}>
                <polygon
                  points="0,50 25,0 50,50"
                  fill="#00031c"
                  stroke="white"
                  strokeWidth="2"
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
        <div className={styles.popUpContainer}>
          <Image
            src={"/icons/notifications.png"}
            width={40}
            height={40}
            alt="Ícono Notificaciones"
            priority={true}
            onClick={handleShowNotifications}
          />
          {showNotifications && notifications.length > 0 && (
            <svg width="50" height="31" className={styles.triangle}>
              <polygon
                points="0,50 25,0 50,50"
                fill="#00031c"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          )}
          {notifications.length > 0 && <div className={styles.circle}> </div>}
        </div>
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
      {showNotifications && notifications.length > 0 && (
        <div className={styles.notifications}>
          <div className={styles.popUp}>
            <ul>
              {notifications.map((notification) => (
                <li key={notification}>
                  {notification}{" "}
                  <Image
                    src={"/icons/close.png"}
                    width={30}
                    height={30}
                    alt="Ícono Cerrar"
                    priority={true}
                    onClick={() => removeNotification(notification)}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
