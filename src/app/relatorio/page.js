'use client';
import Menu from "@/components/menu";
import styles from "./page.module.css";
import Nights from "@/components/Nights";
import { useEffect, useState } from "react";
import { getNight } from "../utils/api";

export default function Relatorio() {
  const [mesSelecionado, setMesSelecionado] = useState("");
  const [dias, setDias] = useState([]);
  const [nights, setNights] = useState(null);
  const [diaSelecionado, setDiaSelecionado] = useState("");
  const [noiteSelecionada, setNoiteSelecionada] = useState(null);

  const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
  const mesesCom30Dias = [4, 6, 9, 11];

  useEffect(() => {
    getNight()
      .then((data) => {
        const nightsOrdenadas = ordenarPorMesEDia(data);
        setNights(nightsOrdenadas);
      })
  }, []);

  useEffect(() => {
    if (nights && diaSelecionado) {
      const noiteEncontrada = nights.find(night => night.dia === diaSelecionado && night.mes === mesSelecionado);
      setNoiteSelecionada(noiteEncontrada);
    } else {
      setNoiteSelecionada(null);
    }
  }, [nights, diaSelecionado, mesSelecionado]);

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

  function ordenarPorMesEDia(nights) {
    return nights.sort((a, b) => {
      if (a.mes === b.mes) {
        return a.dia - b.dia;
      }
      return a.mes - b.mes;
    });
  }

  return (
    <>
      <Menu />
      <section className={styles.relatorio}>
        {nights 
          ? (nights.map((n) => <Nights night={n} key={`${n.mes}-${n.dia}`} />)) 
          : (<p>Loading...</p>)}
      </section>
    </>
  );
}