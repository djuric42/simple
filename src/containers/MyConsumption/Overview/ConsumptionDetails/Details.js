import React from 'react'
import CountUp from 'react-countup'

const Details = ({details}) => {
	const {
		renewable,
		totalPurchased,
		totalInderectEmissions,
		referenceMixEmissions,
		totalSavings
	} = details
	return(
		<div className="ConsumptionDetails-Details">
			<h3>Total saved emissions</h3>
			<table className="details">
				<tbody>
					<tr>
						<td>Renewable</td>
						<td><CountUp end={renewable} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />%</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total purchased</td>
						<td><CountUp end={totalPurchased} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} /> GWh</td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<td>Total inderect emissions</td>
						<td><CountUp end={totalInderectEmissions} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />kg CO<sub>2</sub></td>
					</tr>
					<tr>
						<td>Reference mix emissions</td>
						<td><CountUp end={referenceMixEmissions} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />kg CO<sub>2</sub></td>
					</tr>
					<tr className="seperator"></tr>
					<tr>
						<th>Total savings inderect emissions</th>
						<th><CountUp end={totalSavings} duration={1} seperator="&nbsp;" redraw={false} preserveValue={true} />kg CO<sub>2</sub></th>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Details