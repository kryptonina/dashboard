import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import RenderLegend from "./../RenderLegend/RenderLegend";
import style from "../LineChart/LineChart.module.scss";

export default function Chart (props) {
  const data = props.data;
  const COLORS = ['#FC605D', '#3F85FC', '#33ACFD', '#CFD7DF', '#99A1B3'];
  const axesText = { fill: '#848FA4', fontSize: '14px' , fontWeight: '700'};

  return (
    <LineChart className={style.chart} width={900} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, .16)" />
      <XAxis dataKey="year" tick={axesText} />
      <YAxis tick={axesText} width={20}/>
      <Legend content={RenderLegend}/>
      {Object.keys(data[0]).map((key, index) => {
        if (key !== 'year') {
          return <Line
            type="monotone"
            dataKey={key}
            key={key}
            stroke={COLORS[(index - 1) % COLORS.length]}
            fill='#3C4252'
            dot={{ strokeWidth: 1.5, r: 2.5 }}
          />
        }
        return null;
      })}
    </LineChart>
  );
}
