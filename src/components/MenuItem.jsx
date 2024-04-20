import Link from "next/link";
import styles from "./MenuItem.module.css";

export default function MenuItem({ text, route, icon }) {
  var image = "";
  if (icon != null) {
    image = <img src={icon} alt={text} />;
  }

  return (
    <Link href={route}>
      <div className={styles.menuItem}>
        {image}
        <span>{text}</span>
      </div>
    </Link>
  );
}