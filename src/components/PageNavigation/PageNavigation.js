import React from 'react'
import './PageNavigation.css'
import Loader from '../Loader/Loader'
import {NavLink} from 'react-router-dom'
import {setCurrentYear} from '../../store/user/actions'
import {connect} from 'react-redux'
import PointSelect from './PointSelect'

const PageNavigation = ({points, loading = null, navigation, yearsAvailable, currentYear, setCurrentYear, currentRegion}) => {
	return(
		<header className="PageNavigation content-box">
			<h1>
				{currentRegion.id === 'all' ? <span>Company overview</span> : <span>{currentRegion.name}</span> }
				{
					loading &&
					<Loader loading={loading} />
				}
			</h1>
			{
				navigation && navigation.length > 0 &&
					<nav className="PageNavigation-navigation">
						<ul>
							{
								navigation.map((item, i) =>
									<li key={i}>
										<NavLink exact to={item.path}>{item.title}</NavLink>
									</li>
								)
							}
						</ul>
					</nav>
			}
			{
				yearsAvailable && yearsAvailable.length > 0 &&
					<nav className="PageNavigation-years">
						<ul>
							{
								yearsAvailable.map(year =>
									<li key={year}>
										<button onClick={() => setCurrentYear(year) } className={year === currentYear ? 'active' : ''}>{year}</button>
									</li>
								)
							}
						</ul>
					</nav>
			}
			{
				points &&
				<PointSelect points={points} />
			}
		</header>
	)
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current,
	yearsAvailable: state.user.years.available,
	currentYear: state.user.years.current
})

export default connect(mapStateToProps, {setCurrentYear})(PageNavigation)