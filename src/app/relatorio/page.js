import Link from "next/link";
import Menu from "@/components/menu";
import styles from "./page.module.css";


export default function relatorio() {
   
  return (
    <section className={styles.relatorio}>
      <Menu />
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
    </section>
  );
}
