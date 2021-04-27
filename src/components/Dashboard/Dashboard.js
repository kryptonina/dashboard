import style from "./Dashboard.module.scss";
import DashboardSection from "./DashboardSection/DashboardSection";
import Grid from "@material-ui/core/Grid";
import Widget from "../Widget/Widget";
import {pieData, horizontalBarData, lineData} from "../../data";

export default function Dashboard() {
  
  return <div className={style.dashboard}>
    <DashboardSection
      title="Исполнение бюджета"
      content={
        <Grid  container spacing={3} alignItems="stretch" className={style.container}>
          <Grid item xs={12} md={7} className={style.widget}>
            <Widget
              type="horizontalBar"
              title="Распределение уровня исполнения программных расходов январь-сентябрь 2018 год"
              height="525px"
              props={{data: horizontalBarData}}
             />
           </Grid>
           <Grid item xs={12} md={5}>
            <Grid
              container
              className={style.rightBlock}
              direction="column"
              justify="space-between"
            >
              <Grid item className={style.widget}>
                <Widget
                  type="infoCard"
                  title="Бюджетные расходы администрации района"
                  height="260px"
                  props={{
                    value: '44 936.30',
                    unit: 'тыс. руб.',
                    description: 'за 1 квартал 2019 года в расчете на 1 000 человек',
                    additional : '18.3%',
                    icon : 'trending_up'
                  }}
                 />
              </Grid>
              <Grid item className={style.widget}>
                <Widget
                  type="infoCard"
                  title="Уровень исполнения агрегированных расходов"
                  height="240px"
                  props={{
                    value: '44 936.30',
                    unit: 'тыс. руб.',
                    description: 'январь-сентябрь 2018 год'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      }
    />
    <DashboardSection
      title="Уровень жизни"
      content={
        <Grid  container spacing={3} alignItems="stretch" className={style.container}>
          <Grid item xs={12} md={5} className={style.widget}>
            <Widget type="pie"
              title="Оценка уровня дохода семей"
              height="525px"
              withTabs={true}
              props={{data: pieData}}
             />
          </Grid>
          <Grid item xs={12} md={7} className={style.widget}>
            <Widget type="line"
              title="Оценка уровня доходов семей"
              height="525px"
              props={{data: lineData}}
             />
          </Grid>
        </Grid>
      }
    />
  </div>;
}
