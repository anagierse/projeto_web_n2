import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function relatorio() {
  return (
    <section className={styles.relatorio}>
      <Menu />
      <article>
        <p>
          Total de horas dormidas esse mês: 240 h
         </p>
        <p>
          Média de horas dormidas no mês: 8 h  
        </p>
        <p>
          Dia da semana com menor média de sono: Segunda-Feira
         </p>
        <p>
         Dia da semana com maior média de sono: Sábado    
        </p>
        <p>
          De acordo com a sua idade a sua quantidade de sono está abaixo do recomendável para preservação da sua saúde física e mental         
        </p>
      </article>
    </section>
  );
}
