import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import CountUp from 'react-countup'

const EnergyDisclosure = ({energyDisclosure}) => {

	const {
		renewable: {
			total,
			wind,
			solar,
			hydro
		},
		nuclear,
		fossil
	} = energyDisclosure

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		chart: {
			type: 'pie'
		},
		tooltip: {
			enabled: true,
			headerFormat: '<strong>{point.key}</strong><br/>',
			pointFormat: '<br>{point.y}%</br>',
	  },
		plotOptions: {
			pie: {
				 allowPointSelect: true,
				 cursor: 'pointer',
				 dataLabels: {
					 format: '{point.y}%',
					  enabled: false,
				 },
				 showInLegend: false
			}
	  },
		series: [{
			name: 'Energy Source',
			innerSize: '30%',
			data: [
				{
					name: 'Wind',
					color: '#48AD4E',
					y: wind
				},
				{
					name: 'Hydro',
					color: '#48AD4E',
					y: hydro
				},
				{
					name: 'Solar',
					color: '#48AD4E',
					y: solar
				},
				{
					name: 'Nuclear',
					color: '#666',
					y: nuclear
				},
				{
					name: 'Fossil',
					color: '#666',
					y: fossil
				},
			]
		}]
	}

	return(
		<div className="ConsumptionDetails-EnergyDisclosure">
			<h3>Energy disclosure</h3>
			<div className="chart">
				<HighchartsReact
					highcharts={Highcharts}
					constructorType={'chart'}
					options={options}
				/>
			</div>
			<table className="details">
				<tbody>
					<tr>
						<th>Renewable</th>
						<th><CountUp end={total} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</th>
					</tr>
					<tr>
						<td>Wind</td>
						<td><CountUp end={wind} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr>
						<td>Solar</td>
						<td><CountUp end={solar} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr>
						<td>Hydro</td>
						<td><CountUp end={hydro} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Nuclear</th>
						<td><CountUp end={nuclear} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr>
						<th>Fossil</th>
						<td><CountUp end={fossil} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default EnergyDisclosure