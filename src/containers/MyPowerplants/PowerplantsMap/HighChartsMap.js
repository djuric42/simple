import React from 'react'
import proj4 from 'proj4'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import mapData from "@highcharts/map-collection/custom/world.geo.json";

if (typeof window !== "undefined") {
	window.proj4 = window.proj4 || proj4;
}
require('highcharts/modules/map')(Highcharts)
require('highcharts/modules/marker-clusters')(Highcharts)

const HighChartMaps = ({ powerplants, regions }) => {

	let options = {
		chart: {
			map: 'custom/world',
			plotBorderWidth: 0,
		},
		title: {
			text: ''
		},
		credits: {
			enabled: false
		},
		colorAxis: [
			{
				min: 0,
				stops: [
					[0, '#F6F6F6'],
					[.2, '#96051C'],
					[.8, '#D86F23'],
					[1, '#48AD4E']
				]
			},
			{
				maxColor: '#181A31',
				minColor: '#58BEBB'
			}
		],
		plotOptions: {
			map: {
				colorAxis: 0
			},
			mappoint: {
				colorAxis: 1,
				cluster: {
					enabled: true,
					allowOverlap: false,
					animation: {
						duration: 450
					},
					layoutAlgorithm: {
						type: 'grid',
						gridSize: 70
					},
					zones: [{
						from: 1,
						to: 4,
						marker: {
							radius: 13
						}
					}, {
						from: 5,
						to: 9,
						marker: {
							radius: 15
						}
					}, {
						from: 10,
						to: 15,
						marker: {
							radius: 17
						}
					}, {
						from: 16,
						to: 20,
						marker: {
							radius: 19
						}
					}, {
						from: 21,
						to: 100,
						marker: {
							radius: 21
						}
					}]
				}
			}
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
		series: [
			{
				name: 'Renewable Energy',
				data: regions,
				mapData: mapData,
				tooltip: {
					valueSuffix: ' %'
				},
				joinBy: ['iso-a2', 'code']
			},
			{
				name: 'Powerplants',
				data: powerplants,
				type: 'mappoint',
				enableMouseTracking: true,
				colorKey: 'clusterPointsAmount',
				tooltip: {
					headerFormat: '',
					pointFormat: `
						<p>Renewable: {point.consumption.renewable}</p><br/>
						<p>Purchased: {point.consumption.totalPurchased}</p>
					`
				}
			}
		]
	}
	return (
		<div className="HighChartMaps">
			<HighchartsReact
				className="map"
				highcharts={Highcharts}
				constructorType={'mapChart'}
				options={options}
			/>
		</div>
	)
}

export default HighChartMaps