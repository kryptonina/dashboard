import style from "./RenderLegend.module.scss";

export default function renderLegend (props) {
	const COLORS = ['#FC605D', '#3F85FC', '#33ACFD', '#CFD7DF', '#99A1B3', '#313259'];

	return (
		<ul className={style.legend}>
			{props.payload.map((entry, index) =>
				<li key={`item-${index}`} className={style.legendItem}>
					<div
						key={`icon-${index}`}
						className={style.legendIcon}
						style={{backgroundColor: COLORS[index % COLORS.length]}}>
					</div>
					{entry.value}
				</li>
			)}
		</ul>
	);
}