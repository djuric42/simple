import React from 'react'
import './ConsumptionPie.css'
import {connect} from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const ConsumptionPie = ({renewable, nonRenewable, loading}) => {

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
			pointFormat: '{series.name}<b>{point.y}</b>',
			valueSuffix: ' %',
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
			name: '',
			innerSize: '30%',
			data: [{
				name: 'Renewable',
				color: '#48AD4E',
				y: Math.round(renewable / (renewable + nonRenewable) * 100)
			},
			{
				name: 'Non renewable',
				color: '#666',
				y: Math.round(nonRenewable / (renewable + nonRenewable) * 100)
			}]
		}]
	}

	return(
		<div className="ConsumptionPie">
			<div className="pie">
				{
					loading
					? <Loader />
					: renewable !== null && nonRenewable !== null
						?  <HighchartsReact
								highcharts={Highcharts}
								constructorType={'chart'}
								options={options}
							/>
						: <p>No data</p>
				}
			</div>
			<div className="ConsumptionPie-content">
				{
					!loading && renewable &&
						<>
							<p className="percent">{Math.round(renewable / (renewable + nonRenewable) * 100)}%</p>
							<p className="title">Renewable<br/>energy</p>
						</>
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	renewable: state.user.tiles.renewable,
	nonRenewable: state.user.tiles.nonRenewable,
	loading: state.user.loading
})

export default connect(mapStateToProps, null)(ConsumptionPie)