import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	const sum = data.reduce((pre, cur) => pre + cur);
	return Math.round(sum / data.length);
}

export default (props) => {
	return(
		<div>
			<Sparklines data={props.data} height={120} width={180}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	);
}