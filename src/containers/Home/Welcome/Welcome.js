import React from 'react'
import {removeLoader} from '../../../store/frontpage/actions'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import './Welcome.css'

const Welcome = ({ company, renewable, nonRenewable, avoidedEmissions, loading }) => {

	return (
		<section className="Welcome">
			<div className="logo">
				<div className="inner">

				</div>
			</div>
			<div className="content">
				{
					loading
					? <Loader />
					: <p className="company-title">Welcome {company}</p>
				}
				<p>Here you will find your corporate renewable energy overview</p>
			</div>
			<div className="stat">
				<p className="title">Renewable energy</p>
				{
					loading
					? <Loader />
					: <p className="value green">{renewable} GWh</p>
				}
			</div>
			<div className="stat">
				<p className="title">Non-renewable energy</p>
				{
					loading
					? <Loader />
					: <p className="value red">{nonRenewable} GWh</p>
				}
			</div>
			<div className="stat">
				<p className="title">Avoided emissions</p>
				{
					loading
					? <Loader />
					: <p className="value">{avoidedEmissions} tonnes CO2</p>
				}
			</div>
		</section>
	)
}

const mapStateToProps = state => ({
	loading: state.user.loading,
	company: state.user.customer,
	renewable: state.user.tiles.renewable,
	nonRenewable: state.user.tiles.nonRenewable,
	avoidedEmissions: state.user.tiles.avoidedEmissions

})

export default connect(mapStateToProps, {removeLoader})(Welcome)