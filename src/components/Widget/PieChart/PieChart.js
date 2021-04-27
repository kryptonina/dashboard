import {PieChart, Pie, Cell, Legend, LabelList} from 'recharts';
import RenderLegend from "./../RenderLegend/RenderLegend";
import style from "./PieChart.module.scss";

export default function Chart (props) {
  const data = props.data;
  const COLORS = ['#FC605D', '#3F85FC', '#33ACFD', '#CFD7DF', '#99A1B3', '#313259'];
  const formatLabel = (value) => `${value}%`;
  
  return (
    <PieChart className={style.chart} width={600} height={500}>
      <Pie
        data={data}
        cx={300}
        cy={150}
        innerRadius={100}
        outerRadius={150}
        dataKey="value"
        stroke="#3C4252"
      >
        <LabelList
          formatter={formatLabel}
          position='outside'
          fontSize='24px'
          fontWeight='500'
          stroke="none"
          offset={15}/>
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}
      </Pie>
      <Legend content={RenderLegend}/>
    </PieChart>
  );
}
