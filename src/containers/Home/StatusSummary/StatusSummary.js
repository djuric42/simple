import React from 'react'
import './StatusSummary.css'
import ConsumptionMap from './ConsumptionMap/ConsumptionMap'
import ConsumptionChart from './ConsumptionChart/ConsumptionChart'
import ConsumptionPie from './ConsumptionPie/ConsumptionPie'

const StatusSummary = () => {
	return(
		<div className="StatusSummary">
			<div className="inner">
				<div className="header">
					<h1>Status summary</h1>
					<p>Your corporate summary based on data from current year Becour has access to.</p>
				</div>
				<div className="content">
					<div className="box map">
						<ConsumptionMap />
					</div>
					<div className="box">
						<ConsumptionChart />
					</div>
					<div className="box">
						<ConsumptionPie />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StatusSummary