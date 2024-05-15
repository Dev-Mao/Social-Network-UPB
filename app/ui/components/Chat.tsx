"use client";
import React from "react";
import { useState } from "react";
import styles from "./Chat.module.css";
import Image from "next/image";

export default function ChatView({ name }: { name: string }) {
  const [sendedMessages, setSendedMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() !== "") {
      setSendedMessages([...sendedMessages, message]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.chat}>
        <div className={styles.info}>
          <Image
            src={"/icons/author.png"}
            width={45}
            height={45}
            alt="Ícono Autor"
            priority={true}
          />
          <h3>{name}</h3>
          <Image
            src={"/icons/message.png"}
            width={35}
            height={35}
            alt="Ícono de mensajes"
            priority={true}
          />
        </div>
        <div className={styles.sendedMessages}>
          <div className={styles.sendedMessage}>
            {sendedMessages.length > 0 &&
              sendedMessages.map((sendedMessage, index) => (
                <div key={index}>{sendedMessage}</div>
              ))}
          </div>
        </div>
        <div className={styles.newMessage}>
          <input
            type="text"
            placeholder="Escribe un mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            required
          />
          <Image
            src={"/icons/send.png"}
            width={45}
            height={40}
            alt="Ícono de enviar"
            priority={true}
            onClick={sendMessage}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </section>
  );
}
