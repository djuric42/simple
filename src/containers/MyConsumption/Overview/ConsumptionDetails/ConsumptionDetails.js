import React from 'react'
import './ConsumptionDetails.css'
import {connect} from 'react-redux'
import EnergyDisclosure from './EnergyDisclosure'
import Details from './Details'


const ConsumptionDetails = ({energyDisclosure, details, loading}) => {
	return(
		<div className="ConsumptionDetails">
			<div className="section">
				<EnergyDisclosure energyDisclosure={energyDisclosure} />
			</div>
			<div className="section">
				<Details details={details} />
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.consumption.loading,
	energyDisclosure: state.consumption.energyDisclosure,
	details: state.consumption.details
})

export default connect(mapStateToProps, null)(ConsumptionDetails)