import React from 'react'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import Table from '../../../components/Table/Table'

const TradeConfirmations = ({tradeConfirmations, loading}) => {

	let table = {
		headers: ['Tradedate', 'Trade', 'Power plant', 'Delivery profile', 'Volume (MWh)', 'Price per MWh', 'PDF'],
		rows: []
	}

	if(tradeConfirmations.length > 0) {
		tradeConfirmations.forEach(({tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf}) => {
			table.rows.push([tradeDate, trade, powerplant, deliveryProfile, volume, price, pdf])
		})
	}

	return(
		<div className="TradeConfirmations">
			{
				loading
				? <Loader />
				: table.rows.length > 0
					? <Table {...table} select={true} />
					: <p>No table data</p>
			}
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.documents.loading,
	tradeConfirmations: state.documents.tradeConfirmations
})

export default connect(mapStateToProps, null)(TradeConfirmations)