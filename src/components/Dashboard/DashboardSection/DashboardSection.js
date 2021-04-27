import style from "./DashboardSection.module.scss";
import {useState} from 'react';

export default function DashboardSection(props) {
  const [visible, setVisible] = useState(true);
  
  return <div className={style.section}>
    <div className={style.header} onClick={() => setVisible(!visible)}>
      <div className={style.title}>
        <i className={`material-icons ${style.icon}`}>description</i>
        <span>{props.title}</span>
       </div>
       <div className={style.line}></div>
    </div>
    {visible ? props.content : null}
  </div>;
}
