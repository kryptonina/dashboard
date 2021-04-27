import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell} from 'recharts';
import style from "./HorizontalBarChart.module.scss";

export default function HorizontalBarChart (props) {
  const data = props.data;
  const COLORS = ['#313259', '#3548B2', '#E91E63', '#FC605D', '#3F85FC', '#33ACFD', '#86CFFF', '#CFD7DF', '#99A1B3', '#FF7714', '#FEA204', '#FBD36C', '#8186FF'];
  const formatLabel = value => `${value}%`;
  
  return (<BarChart
    className={style.chart}
    layout="vertical"
    width={900}
    height={500}
    data={data}
    margin={{
      top: 0,
      right: 25,
      bottom: 0,
      left: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#333846"/>
    <XAxis type="number" />
    <YAxis
      dataKey="name"
      type="category"
      scale="band"
      width={350}
      tick={{ fill: '#6F809D', fontWeight: 500 }}
    />
    <Bar
      dataKey="value"
      barSize={12}
      radius={[0, 5, 5, 0]}
      label={{
        position: 'right',
        formatter: formatLabel,
        fill: 'rgba(255, 255, 255, .8)',
        fontSize: '12px',
        fontWeight: 500
      }}
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Bar>
  </BarChart>);
}
