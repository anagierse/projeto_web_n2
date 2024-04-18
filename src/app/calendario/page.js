"use client";

import React, { useState } from "react";
import Link from "next/link";
import Menu from "@/components/menu";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";


export default function calendario() {
  const [buttonText, setButtonText] = useState("Começar timer");
  const [buttonClicked, setButtonClicked] = useState(false);

  const Click = () => {
    if (buttonClicked) {
      setButtonText("Começar timer");
    } else {
      setButtonText("Parar timer");
    }
    setButtonClicked(!buttonClicked);
  };

  return (
    <section>
      <Menu />
      <div className="circuloMaior">
        <div className="circuloMenor">
          <button className="botaoTimer" onClick={Click}>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
