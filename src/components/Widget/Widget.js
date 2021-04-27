import style from "./Widget.module.scss";
import HorizontalBarChart from "./HorizontalBarChart/HorizontalBarChart";
import InfoCard from "./InfoCard/InfoCard";
import PieChart from "./PieChart/PieChart";
import LineChart from "./LineChart/LineChart";
import {useState} from "react";

export default function Widget (props) {
	const {type, height, title, withTabs} = props;
	const isTabsWidget = withTabs === true && props.props && props.props.data;
	const [activeTab, setActiveTab] = useState(isTabsWidget ? Object.keys(props.props.data)[0] : null);
  const getChart = () => {
  	let result = null;
  	let componentProps = {...props.props};
		if (isTabsWidget) {
			componentProps = {...componentProps, data: componentProps.data[activeTab]};
		}
  	if (type === 'horizontalBar') {
  		result = <HorizontalBarChart {...componentProps}/>;
  	}
  	if (type === 'infoCard') {
  		result = <InfoCard {...componentProps}/>;
  	}
  	if (type === 'pie') {
  		result = <PieChart {...componentProps}/>;
  	}
  	if (type === 'line') {
  		result = <LineChart {...componentProps}/>;
  	}
  	return result;
  };
  const renderTabs = () =>
  	<div className={style.tabs}>
  		{Object.keys(props.props.data).map((key) =>
  			<div
  				key={key}
  				className={`${style.tab} ${key === activeTab ? style.active : ''}`}
  				onClick={() => {setActiveTab(key)}}
  			>
  				{key}
  			</div>)
  		}
  	</div>;

  return <div
  	className={style.chartContainer}
  	style={{height: height || 'unset'}}
  >
  	<div className={style.title}>
  		{title}
			{isTabsWidget ? renderTabs() : []}
  	</div>
    <div className={style.chart}>
			{getChart()}
		</div>
  </div>;
}
