import React from 'react'
import {connect} from 'react-redux'
import './ConsumptionRegions.css'

const Region = ({name, consumptionVolume, plannedVolume, purchasedRE}) => {

	const percentColor = () => {
		if(purchasedRE >= 90) {
			return 'text-green'
		} else if(purchasedRE >= 65) {
			return 'text-orange'
		} else {
			return 'text-red'
		}
	}

	return(
		<div className="ConsumptionRegions-Region">
			<table>
				<thead>
					<tr>
						<th colSpan="2">{name}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Consumption volume</th>
						<td>{consumptionVolume} MWh</td>
					</tr>
					<tr>
						<th>Planned volume</th>
						<td>{plannedVolume} MWh</td>
					</tr>
					<tr>
						<th>Purchased renewable energy</th>
						<td className={percentColor()}>{purchasedRE}%</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const ConsumptionRegions = ({consumptionLocations}) => {
	return(
		<div className="ConsumptionRegions">
			{ consumptionLocations.length > 0 && <h2>Consumption locations</h2> }
			{
				consumptionLocations.length > 0 &&
				<div className="regions">
					{ consumptionLocations.map(region => <Region key={region.name} {...region} />) }
				</div>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	consumptionLocations: state.consumption.consumptionLocations
})

export default connect(mapStateToProps, null)(ConsumptionRegions)