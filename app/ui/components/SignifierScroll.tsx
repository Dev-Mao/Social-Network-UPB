"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./SignifierScroll.module.css";

export default function SignifierScroll({containerId}: {containerId: string}) {
  useEffect(() => {
    const container = document.getElementById(containerId);
    const scrollIcon = document.getElementById("scroll-indicator");

    const scrollHandler = () => {
      if (
        container &&
        scrollIcon &&
        container.scrollHeight > container.clientHeight
      ) {
        scrollIcon.style.display = "block";
      } else if (scrollIcon) {
        scrollIcon.style.display = "none";
      }
      if (
        container &&
        scrollIcon &&
        (Math.ceil(container.scrollHeight - container.scrollTop) ===
          container.clientHeight ||
          Math.floor(container.scrollHeight - container.scrollTop) ===
            container.clientHeight)
      ) {
        scrollIcon.style.display = "none";
      }
    };

    if (container) {
      container.addEventListener("scroll", scrollHandler);
    }
    scrollHandler();

    return () => {
      if (container) {
        container.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [containerId]);

  return (
    <div>
      <Image
        src={"/icons/scroll.png"}
        width={70}
        height={70}
        alt="Ícono scroll"
        priority={true}
        id="scroll-indicator"
        className={styles.scrollIndicator}
      />
    </div>
  );
}
