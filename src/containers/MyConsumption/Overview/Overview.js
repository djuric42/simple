import React, {useEffect} from 'react'
import {clearConsumptionData} from '../../../store/consumption/actions'
import {connect} from 'react-redux'
import ConsumptionOverview from './ConsumptionOverview/ConsumptionOverview'
import ConsumptionDetails from './ConsumptionDetails/ConsumptionDetails'
import ConsumptionRegions from './ConsumptionRegions/ConsumptionRegions'

const Overview = ({clearConsumptionData}) => {

	useEffect(() => {
		return () => {
			clearConsumptionData()
		}
	},[clearConsumptionData])

	return(
		<>
			<ConsumptionOverview />
			<ConsumptionDetails />
			<ConsumptionRegions />
		</>
	)
}

export default connect(null, {clearConsumptionData})(Overview)