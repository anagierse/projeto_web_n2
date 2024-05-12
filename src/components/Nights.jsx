import styles from "./night.module.css"

export default function Nights({night}){
    return (
        <article className="{styles.night}">
            <p><strong>Dia: {night.dia} de {night.mes}</strong></p>
            <p><small>Quantidade de horas dormidas: {night.horas}</small></p>
            <p><small>Qualidade do sono: {night.qualidade}</small></p>
            </article>
    )
}