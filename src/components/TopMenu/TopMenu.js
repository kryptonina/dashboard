import style from "./TopMenu.module.scss";
import {useDispatch, useSelector} from "react-redux";

export default function TopMenu() {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.isMenuVisible);
  
  return (
    <nav className={style.topMenu}>
      <ul>
        <li className={style.menuIcon}>
          <i
            className={`material-icons ${style.icon}`}
            onClick={() => { dispatch({ type: "changeMenuVisibility", payload: !isMenuVisible })}}
           >
            menu
          </i>
        </li>
        <li>
          <i className={`material-icons ${style.icon}`}>view_in_ar</i>
        </li>
      </ul>
    </nav>
  );
}
