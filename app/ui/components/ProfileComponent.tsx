import React from "react";
import Image from "next/image";
import styles from "./ProfileComponent.module.css";

export default function ProfileComponent() {
  const user = { name: "John Doe", Id: "#135613651" };

  const schedule: {
    [key: string]: {
      day: string;
      room: string;
      block: string;
    }[];
  } = {
    "08:00-10:00": [
      { day: "L", room: "S205", block: "B9" },
      { day: "J", room: "S205", block: "B9" },
    ],
    "10:00-12:00": [
      { day: "M", room: "S502", block: "B11" },
      { day: "W", room: "S502", block: "B9" },
      { day: "V", room: "S708", block: "B11" },
    ],
    "12:00-14:00": [
      { day: "M", room: "S402", block: "B11b" },
      { day: "J", room: "S310", block: "B9" },
      { day: "V", room: "S401", block: "B9" },
    ],
    "14:00-16:00": [{ day: "J", room: "S302", block: "B11" }],
  };

  const days: string[] = ["L", "M", "W", "J", "V", "S"];
  return (
    <div className={styles.container}>
      <header>
        <Image
          src={"/icons/profile-picture.png"}
          width={250}
          height={250}
          alt="Ícono Autor"
          priority={true}
        />
        <div>
          <h2>{user.name.toUpperCase()}</h2>
          <span>{user.Id}</span>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(schedule).map((timeSlot) => (
            <tr key={timeSlot}>
              {days.map((day) => {
                const scheduleEntry = schedule[timeSlot].find(
                  (entry) => entry.day === day
                );
                return (
                  <td
                    key={day}
                    className={scheduleEntry ? styles.selected : ""}
                  >
                    {scheduleEntry && (
                      <>
                        {scheduleEntry.room} <br /> {scheduleEntry.block}
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
