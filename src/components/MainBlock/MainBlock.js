import style from "./MainBlock.module.scss";
import LeftMenu from "./../LeftMenu/LeftMenu";
import Content from "./../Content/Content";

export default function MainBlock() {
  return (
    <div className={style.mainBlock}>
      <LeftMenu />
      <Content />
    </div>
  );
}
