'use client';

import { useEffect, useState } from "react";
import styles from "./Nights.module.css"
import { deleteNight, getNight } from "@/app/utils/api";

function getMesName(mes) {
  const mesNames = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  return mesNames[mes - 1];
}


export default function Nights({ night }) {
    const [feriado, setFeriado] = useState(null);

    useEffect(() => {
        async function checkFeriado(dia, mes, ano) {
            try {
                const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
                const response = await fetch(url);
                const data = await response.json();

                const diaStr = dia.toString().padStart(2, '0');
                const mesStr = mes.toString().padStart(2, '0');
                const dateString = `${ano}-${mesStr}-${diaStr}`;

                const matchingFeriado = data.find(feriado => feriado.date.startsWith(dateString));

                setFeriado(matchingFeriado);
            } catch (error) {
                console.error("Error fetching feriados:", error);
            }
        }

        const ano = night.ano || 2024; 
        checkFeriado(night.dia, night.mes, ano); 
    }, [night.dia, night.mes, night.ano]); 

    function handleDeleteNight(id) {
        deleteNight(id)
            .then((status) => {
                if (status === 200) {
                    window.location.reload();
                }
            })
    }
    

    return (
        <article className={styles.night}>
            <p><strong>Dia: {night.dia} de {getMesName(parseInt(night.mes))}</strong></p>
            {feriado ? (
                <p><strong>Feriado: {feriado.name} ({feriado.type})</strong></p>
            ) : (
                <p><strong>Não há feriado neste dia</strong></p>
            )}
            <p><small>Quantidade de horas dormidas: {night.horas}</small></p>
            <p><small>Qualidade do sono: {night.qualidade}</small></p>
            <button className={styles.botao} onClick={() => handleDeleteNight(night.id)}>
                <img src="https://super.so/icon/dark/trash-2.svg" alt="Excluir" />
            </button>
        </article>
    );
}