import React from 'react'
import './ConsumptionMap.css'
import { connect } from 'react-redux'
import Loader from '../../../../components/Loader/Loader'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map"
import mapData from "@highcharts/map-collection/custom/world.geo.json";
highchartsMap(Highcharts);

const ConsumptionMap = ({ map, loading }) => {

	let options = {
		chart: {
			map: 'custom/world',
			plotBorderWidth: 0
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		mapNavigation: {
			enabled: true,
			enableMouseWheelZoom: false,
			buttonOptions: {
				 verticalAlign: 'bottom'
			}
	  },
	  legend: {
		enabled: false
	  },
		colorAxis: {
			min: 0,
			stops: [
				[0, '#F6F6F6'],
				[.2, '#96051C'],
				[.8, '#D86F23'],
				[1, '#48AD4E']
			]
		},
		series: [{
			name: 'Renewable Energy',
			mapData: mapData,
			data: map,
			tooltip: {
				valueSuffix: ' %'
			},
			joinBy: ['iso-a2', 'code']
		}]
	}

	return (
		<div className="ConsumptionMap">
			{
				loading
				? <Loader />
				: map.length > 0
					?  <div className="ConsumptionMap-map">
							<HighchartsReact
								className="map"
								highcharts={Highcharts}
								constructorType={'mapChart'}
								options={options}
							/>
						</div>
					: <p>No map data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	map: state.user.map,
	loading: state.user.loading
})

export default connect(mapStateToProps, null)(ConsumptionMap)