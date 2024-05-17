'use client'
import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";
import Nights from "@/components/Nights";
import { useEffect, useState } from "react";
import { getNight } from "../utils/api";


export default function relatorio() {
  const [mesSelecionado, setMesSelecionado] = useState("");
  const [dias, setDias] = useState([]);
  const [nights, setNights] = useState(null);
  const [diaSelecionado, setDiaSelecionado] = useState("");
  const [noiteSelecionada, setNoiteSelecionada] = useState(null);

  const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
  const mesesCom30Dias = [4, 6, 9, 11];


  useEffect(() => {
    getNight()
      .then((data) => setNights(data))
      .catch((error) => console.error("Error fetching nights:", error));
  }, []);

  useEffect(() => {
    if (nights && diaSelecionado) {
      const noiteEncontrada = nights.find(night => night.dia === diaSelecionado && night.mes === mesSelecionado);
      setNoiteSelecionada(noiteEncontrada);
    } else {
      setNoiteSelecionada(null);
    }
  }, [nights, diaSelecionado, mesSelecionado]);

  function changeMes(event) {
    setMesSelecionado(event.target.value);
  }

  function changeDia(event) {
    setMesSelecionado(event.target.value);
  }
  
  function handleDiaSelecionadoChange(event) {
    setDiaSelecionado(event.target.value);
  }


  useEffect(() => {
    validaDias(mesSelecionado);
  }, [mesSelecionado]);

  function validaDias(month) {
    let totalDias;
    if (mesesCom31Dias.includes(month)) {
      totalDias = 31;
    } else if (mesesCom30Dias.includes(month)) {
      totalDias = 30;
    } else {
      totalDias = 28;
    }
    const diasDoMes = Array.from({ length: totalDias }, (_, i) => i + 1);
    setDias(diasDoMes);
  }
  
  return (
    <>
      <Menu />
      <section className={styles.relatorio}>
      { nights 
              ? ( nights.map( (n) => <Nights night={n} /> ) ) 
              : (<p>Loading...</p>) }
      </section>
      </>
  );
}
