import React from 'react'
import './HomePowerplants.css'
import Loader from '../../../components/Loader/Loader'
import {connect} from 'react-redux'

const Powerplant = ({name, url, text, imageUrl}) => {
	return(
		<div className="HomePowerplants-Powerplant-plant">
			<div className="HomePowerplants-Powerplant-image">
				{
					imageUrl
					? <div className="src" style={{backgroundImage: `url(${imageUrl})`}} />
					: <div className="src no-src" />
				}
			</div>
			<div className="HomePowerplants-Powerplant-content">
				{ name && <h3 dangerouslySetInnerHTML={{__html: name}} />}
				{ text && <p dangerouslySetInnerHTML={{__html: text}} />}
				{ url && <a rel="noopener noreferrer" href={url} target="_blank" className="button">View powerplant</a> }
			</div>
		</div>
	)
}

const HomePowerplants = ({powerplants, loading}) => {
	return(
		<div className="HomePowerplants">
			<div className="HomePowerplants-content">
				<h2>Suggested powerplants based on your consumption</h2>
				<div className="HomePowerplants-items">
					{
						loading
						? <Loader />
						: powerplants.length > 0
							? powerplants.map((powerplant, i) => <Powerplant key={i} {...powerplant} />)
							: <p>No powerplants fetched</p>
					}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.user.loading,
	powerplants: state.user.powerplants
})

export default connect(mapStateToProps, null)(HomePowerplants)