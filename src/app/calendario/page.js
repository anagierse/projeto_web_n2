'use client';

import React, { useState, useEffect } from "react";
import Menu from "@/components/menu";
import styles from "./page.module.css";
import { addNight, getNight, updateNight } from "../utils/api";
import { v4 as uuid } from "uuid";


export default function Calendario() {
  const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
  const mesesCom30Dias = [4, 6, 9, 11];

  const [mesSelecionado, setMesSelecionado] = useState(1); // Valor padrão para janeiro
  const [dias, setDias] = useState([]);
  const [horasDormidas, setHorasDormidas] = useState("Não dormiu"); // Adicionando o estado horasDormidas
  const [qualidadeSono, setQualidadeSono] = useState("péssima"); // Adicionando o estado qualidadeSono
  const [nights, setNights] = useState(null);
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [horas, setHoras] = useState("");
  const [qualidade, setQualidade] = useState("");
  const [showUpdateButton, setShowUpdateButton] = useState(false); // Adicionando a variável de estado showUpdateButton


  useEffect(() => {
    getNight()
      .then((data) => setNights(data))
      .catch((error) => console.error("Error fetching nights:", error));
  }, []);

  

  function changeHoras(event) {
    setHoras(event.target.value);
  }

  function changeQualidade(event) {
    setQualidade(event.target.value);
  }

  function changeDia(event) {
    setDia(event.target.value);
  }

  function changeMes(event) {
    setMes(event.target.value);
    
  }

  
  function handleAddNight(event) {
    event.preventDefault();
    let id = uuid();
    
    let n = { id, dia, mes: mesSelecionado, horas, qualidade };
  
    if (nights && nights.length > 0) {
      const nightExists = nights.some((night) => night.dia === dia && night.mes === mesSelecionado);
      
      if (nightExists) {
        const existingNight = nights.find((night) => night.dia === dia && night.mes === mesSelecionado);
        n.id = existingNight.id; // Adiciona o ID existente para atualização
        handleUpdateNight(n);
      } else {
        addNight(n)
          .then((status) => {
            if (status === 201) {
              getNight()
                .then((data) => setNights(data))
                .catch((error) => console.error("Error fetching nights:", error));
            }
          })
          .catch((error) => console.error("Error adding night:", error));
      }
    } else {
      addNight(n)
        .then((status) => {
          if (status === 201) {
            getNight()
              .then((data) => setNights(data))
              .catch((error) => console.error("Error fetching nights:", error));
          }
        })
        .catch((error) => console.error("Error adding night:", error));
    }
  }
  
  function handleUpdateNight(nightToUpdate) {
    updateNight(nightToUpdate)
      .then((status) => {
        if (status === 200) {
          getNight()
            .then((data) => setNights(data))
            .catch((error) => console.error("Error fetching nights:", error));
        }
      })
      .catch((error) => console.error("Error updating night:", error));
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
      <article className={styles.formulario}>
  <div>
    <h2>Registrar noite de sono</h2>
    <div>
      <label htmlFor="mes">Que mês deseja registrar: </label>
      <select
        id="mes"
        name="mes"
        onChange={changeMes}
      >
        <option value={1}>janeiro</option>
        <option value={2}>fevereiro</option>
        <option value={3}>março</option>
        <option value={4}>abril</option>
        <option value={5}>maio</option>
        <option value={6}>junho</option>
        <option value={7}>julho</option>
        <option value={8}>agosto</option>
        <option value={9}>setembro</option>
        <option value={10}>outubro</option>
        <option value={11}>novembro</option>
        <option value={12}>dezembro</option>
      </select>
      <label htmlFor="dia">Dia do mês: </label>
      <select id="dia" name="dia" onChange={changeDia}>
        {dias.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <label htmlFor="horas">Quantas horas dormiu: </label>
      <select
        id="horas"
        name="horas"
        onChange={changeHoras}
      >
          <option value="Não dormiu">Não dormiu</option>
              <option value="Até 1 hora">Até 1 hora</option>
              <option value="1-2 horas">1-2 horas</option>
              <option value="2-3 horas">2-3 horas</option>
              <option value="3-4 horas">3-4 horas</option>
              <option value="4-5 horas">4-5 horas</option>
              <option value="5-6 horas">5-6 horas</option>
              <option value="6-7 horas">6-7 horas</option>
              <option value="7-8 horas">7-8 horas</option>
              <option value="8-9 horas">8-9 horas</option>
              <option value="9-10 horas">9-10 horas</option>
              <option value="10-11 horas">10-11 horas</option>
              <option value="11-12 horas">11-12 horas</option>
              <option value="+12 horas">+12 horas</option>
      </select>
      <label htmlFor="qualidade">Como foi a qualidade do seu sono: </label>
      <select
        id="qualidade"
        name="qualidade"
        onChange={changeQualidade}
      >
        <option value="péssima">péssima</option>
              <option value="ruim">ruim</option>
              <option value="mediana">mediana</option>
              <option value="boa">boa</option>
              <option value="ótima">ótima</option>
      </select>
    </div>
  </div>
  <button onClick={handleAddNight}>Enviar</button>
</article>
</>
  );
}