import React, {useEffect} from 'react'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import {connect} from 'react-redux'
import {getConsumerDocuments} from '../../store/documents/actions'
import {Route} from 'react-router-dom'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import TradeConfirmations from './TradeConfirmations/TradeConfirmations'

const MyDocuments = ({getConsumerDocuments, year, region}) => {

	useEffect(() => {
		getConsumerDocuments(year, region.id)
	}, [year, getConsumerDocuments, region])

	return (
		<main className="MyDocuments container-sidebar">
			<SideBarTree />
			<PageNavigation
				navigation={[
					{
						path: `/my-documents/`,
						title: 'Trade Confirmations'
					},
					{
						path: `/my-documents/billing-history`,
						title: 'Billing history'
					},
					{
						path: `/my-documents/contracts`,
						title: 'Contracts'
					},
					{
						path: `/my-documents/reporting-data`,
						title: 'Reporting'
					},
				]}
			/>
			<Route path="/my-documents/" exact component={TradeConfirmations} />
		</main>
	)
}

const mapStateToProps = state => ({
	year: state.user.years.current,
	region: state.user.regions.current,
})

export default connect(mapStateToProps, {getConsumerDocuments})(MyDocuments)