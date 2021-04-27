import style from "./LeftMenu.module.scss";
import {useSelector} from "react-redux";

export default function LeftMenu() {
  const isMenuVisible = useSelector((state) => state.isMenuVisible);

  return (
    <nav className={`${style.leftMenu} ${isMenuVisible ? '' : style.invisible}`}>
      <ul>
        <li className={style.menuIcon}>
          <i className={`material-icons ${style.icon}`}>description</i>
          <span>Исполнение бюджета</span>
        </li>
        <li>
          <i className={`material-icons ${style.icon}`}>description</i>
          <span>Уровень жизни</span>
        </li>
      </ul>
    </nav>
  );
}
