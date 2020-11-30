import React from 'react'
import './ConsumptionChart.css'
import { connect } from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { chart } from '../../../../testData/frontPageChart'

const ConsumptionChart = ({ loading }) => {

	let options = {
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		plotOptions: {
			areaspline: {
				stacking: 'normal',
				fillOpacity: .75,
				lineWidth: 0,
				marker: {
					enabled: false
				}
			},
			column: {
				borderWidth: 0,
				stacking: 'normal',
				borderRadius: 0
			},
			spline: {
				marker: {
					enabled: false
				}
			}
		},
		colors: ['#58BEBB', '#48AD4E', '#666'],
		xAxis: {
			labels: {
				enabled: true
			},
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			crosshair: true
		},
		yAxis: {
			title: {
				text: ''
			},
			gridLineWidth: 0,
			labels: {
				enabled: false
			}
		},
		chart: {
			type: 'column'
		},
		tooltip: {
			shared: true,
			valueSuffix: ' GWh'
		},
		series: chart,
		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						enabled: true
					}
				}
			}]
		}
	}

	return (
		<div className="ConsumptionChart">
			{
				loading
					? <Loader />
					: chart.length > 0
						? <div className="ConsumptionChart-chart">
							<HighchartsReact
								highcharts={Highcharts}
								constructorType={'chart'}
								options={options}
							/>
						</div>
						: <p>No data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.user.loading,
	chart: state.user.tiles.chart.series
})

export default connect(mapStateToProps, null)(ConsumptionChart)