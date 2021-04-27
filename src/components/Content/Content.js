import Dashboard from "./../Dashboard/Dashboard";
import style from "./Content.module.scss";

export default function Content() {
  return (
    <div className={style.content}>
      <Dashboard />
    </div>
  );
}
