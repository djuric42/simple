import React, {useEffect} from 'react'
import './MyPowerplants.css'
import {connect} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {useParams} from 'react-router-dom'
import PageNavigation from '../../components/PageNavigation/PageNavigation'
import SideBarTree from '../../components/SideBarTree/SideBarTree'
import {getConsumerPowerplants, clearPowerplantsData} from '../../store/powerplants/actions'
import PowerplantsMap from './PowerplantsMap/PowerplantsMap'
import PowerplantList from './PowerplantList/PowerplantList'

const MyPowerplants = ({region, year, getConsumerPowerplants, clearPowerplantsData, loading}) => {

	const {id} = useParams()

	useEffect(() => {
		let category = id ? id : 'all'
		getConsumerPowerplants(category, year, region)
	}, [id, year, region, getConsumerPowerplants])

	useEffect(() => {
		return () => {
			clearPowerplantsData()
		}
	}, [clearPowerplantsData])

	return (
		<main className="MyPowerplants container-sidebar">
			<SideBarTree />
			<PageNavigation
				title="My powerplants"
				navigation={[
					{
						path: `/my-powerplants/`,
						title: 'All technologies'
					},
					{
						path: `/my-powerplants/wind-power`,
						title: 'Wind power'
					},
					{
						path: `/my-powerplants/solar-power`,
						title: 'Solar power'
					},
					{
						path: `/my-powerplants/hydro-power`,
						title: 'Hydro power'
					},
				]}
			/>
			<div className="MyPowerplants-header">
				<h1>
					{region.id === 'all' ? 'Company overview' : region.name}
					{loading && <Loader />}
				</h1>
			</div>
			<PowerplantsMap />
			<PowerplantList />
		</main>
	)
}

const mapStateToProps = state => ({
	loading: state.powerplants.loading,
	year: state.user.years.current,
	region: state.user.regions.current,
})

export default connect(mapStateToProps, {getConsumerPowerplants, clearPowerplantsData})(MyPowerplants)