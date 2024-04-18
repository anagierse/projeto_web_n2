import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function relatorio() {
  return (
    <section className="container">
      <Menu />
      <article className="retangulo">
        <TextoRelatorio
          texto="Total de horas dormidas esse mês: 240 h"
          classe="pRelatorio"
        />
        <TextoRelatorio
          texto="Média de horas dormidas no mês: 8 h"
          classe="pRelatorio"
        />
        <TextoRelatorio
          texto="Dia da semana com menor média de sono: Segunda-Feira"
          classe="pRelatorio"
        />
        <TextoRelatorio
          texto="Dia da semana com maior média de sono: Sábado"
          classe="pRelatorio"
        />
        <TextoRelatorio
          texto="De acordo com a sua idade a sua quantidade de sono está abaixo do recomendável para preservação da sua saúde física e mental"
          classe="pRelatorio"
        />
      </article>
    </section>
  );
}

function TextoRelatorio({ texto, classe }) {
  return <p className={classe}>{texto}</p>;
}
