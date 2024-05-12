'use client'

import React, { useState, useEffect } from "react";
import Menu from "@/components/menu";
import styles from "./page.module.css";

export default function Calendario() {
  const mesesCom31Dias = [1, 3, 5, 7, 8, 10, 12];
  const mesesCom30Dias = [4, 6, 9, 11];

  const [mesSelecionado, setMesSelecionado] = useState(1); // Valor padrão para janeiro
  const [dias, setDias] = useState([]);
  const [horasDormidas, setHorasDormidas] = useState("Não dormiu"); // Adicionando o estado horasDormidas
  const [qualidadeSono, setQualidadeSono] = useState("péssima"); // Adicionando o estado qualidadeSono

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
              value={mesSelecionado}
              onChange={(e) => setMesSelecionado(parseInt(e.target.value))}
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
            <select id="dia" name="dia">
              {dias.map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>
            <label htmlFor="horas">Quantas horas dormiu: </label>
            <select
              id="horas"
              name="horas"
              value={horasDormidas}
              onChange={(e) => setHorasDormidas(e.target.value)}
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
              value={qualidadeSono}
              onChange={(e) => setQualidadeSono(e.target.value)}
            >
              <option value="péssima">péssima</option>
              <option value="ruim">ruim</option>
              <option value="mediana">mediana</option>
              <option value="boa">boa</option>
              <option value="ótima">ótima</option>
            </select>
          </div>
        </div>
        <button onClick={enviarFormulario}>Enviar</button>
      </article>
    </>
  );
}