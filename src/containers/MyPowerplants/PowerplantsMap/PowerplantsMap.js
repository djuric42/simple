import React from 'react'
import './PowerplantsMap.css'
import {connect} from 'react-redux'
import HighChartsMap from './HighChartsMap'


const PowerplantsMap = ({powerplants, regions, loading}) => {
	return(
		<div className="PowerplantsMap">
			<HighChartsMap powerplants={powerplants} regions={regions} />
		</div>
	)
}

const mapStateToProps = state => ({
	powerplants: state.powerplants.plants,
	regions: state.powerplants.regions,
	loading: state.powerplants.loading
})

export default connect(mapStateToProps, null)(PowerplantsMap)