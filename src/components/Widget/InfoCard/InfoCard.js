import style from "./InfoCard.module.scss";

export default function InfoCard(props) {
  return <div className={style.infoCard}>
    {
      props.value ?
      <div className={style.mainInfo}>
        <span className={style.value}>{props.value}</span>
        <span className={style.unit}> {props.unit}</span>
      </div> : null
    }
    {
      props.additional ?
      <div className={style.additionalInfo}>
        <span>{props.additional}</span>
        {
          props.icon ?
          <i className="material-icons">{props.icon}</i> : null
        }
      </div> : null
    }
    {
      props.description ?
      <div className={style.description}>{props.description}</div> : null
    }
  </div>;
}
