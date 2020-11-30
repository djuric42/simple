import React from 'react'


// Components
import Welcome from './Welcome/Welcome'
import StatusSummary from './StatusSummary/StatusSummary'
import HomePowerplants from './HomePowerplants/HomePowerplants'

const Home = () => {

	return (
		<main className="Home">
			<Welcome />
			<StatusSummary />
			<HomePowerplants />
		</main>
	)
}

export default Home