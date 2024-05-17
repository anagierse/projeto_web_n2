'use client'
import { useEffect, useState } from "react";
import styles from "./Nights.module.css"
import { deleteNight, getNight } from "@/app/utils/api";

function getMonthName(month) {
    const monthNames = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    return monthNames[month - 1]; // Subtraia 1 porque os índices do array começam em 0
  }
  
  export default function Nights({ night }) {
    function handleDeleteNight(id) {
      deleteNight(id)
        .then((status) => {
          if (status === 200) {
            // Atualiza a página após a deleção ser realizada com sucesso
            window.location.reload();
          }
        })
        .catch((error) => console.error("Error deleting night:", error));
    }
    return (
        <article className="{styles.night}">
  <p><strong>Dia: {night.dia} de {getMonthName(parseInt(night.mes))}</strong></p>            <p><small>Quantidade de horas dormidas: {night.horas}</small></p>
            <p><small>Qualidade do sono: {night.qualidade}</small></p>
            <button className={styles.botao} onClick={() => handleDeleteNight(night.id)}>
                <img src="https://super.so/icon/dark/trash-2.svg" alt="Excluir" />
              </button>
            </article>
    )
}