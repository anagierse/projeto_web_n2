import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div>
      <Menu />
      <main>
        <article className="articleHome">
          <p className="pHome">
            Se você busca rastrear sua qualidade e quantidade de sono esse é o
            site perfeito para você, com um timer inteligente que registra
            quanto tempo você dorme e baseado nisso produz um relatório das suas
            últimas noites de sono. É um projeto feito por estudantes para
            estudantes, você vai poder descobrir como suas noites mal dormidas
            afetam seu dia-a-dia especialmente nos estudos, em 2021 foi
            publicado um artigo na revista “Sleep Science” que interliga a
            qualidade de sono com uma a qualidade de vida, associando doenças
            como ansiedade e depressão com a má qualidade do sono
          </p>
        </article>
      </main>
    </div>
  );
}
