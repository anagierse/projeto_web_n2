import Link from "next/link";
import styles from "./Menu.module.css";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav className={styles.menu}> 
      <ul>
        <li><MenuItem text="Home" route="/" icon="https://cdn.icon-icons.com/icons2/3242/PNG/512/cabin_destination_house_winter_wood_icon_197559.png" /></li>
        <li><MenuItem text="Calendário" route="/calendario" icon="https://cdn.icon-icons.com/icons2/517/PNG/512/clock_time_icon-icons.com_51107.png" /></li>
        <li><MenuItem text="Relatorio" route="/relatorio" icon="https://cdn.icon-icons.com/icons2/4169/PNG/512/study_education_book_read_address_book_icon_261868.png" /></li>
        <li><MenuItem text="Login" route="/login" icon="https://cdn.icon-icons.com/icons2/3609/PNG/512/climate_forecast_weather_night_starry_star_moon_icon_226632.png" /></li>
      </ul>
    </nav>
  );
}