import React from 'react'
import {connect} from 'react-redux'
import {setCurrentRegion, toggleRegionExpand, setRegionToCompanyOverview} from '../../store/user/actions'
import { Collapse } from 'react-collapse'
import './SideBarTree.css'

const Children = ({ children, active, setCurrentRegion, currentRegion }) => {
	return (
		<Collapse isOpened={active} theme={{ collapse: 'wrapper', content: 'content' }}>
			<ul>
				{
					children.map((child, i) => <li key={i}><button className={child.id === currentRegion.id ? 'sublink active' : 'sublink'} onClick={() => setCurrentRegion(child.id)}>{child.name}</button></li>)
				}
			</ul>
		</Collapse>
	)
}

const Region = ({ name, children, id, setCurrentRegion, currentRegion, toggleRegionExpand, index, expanded }) => {
	return (
		<div className="SideBarTree-region">
			<button className={expanded ? 'expand active' : 'expand'} onClick={() => toggleRegionExpand(index)}></button>
			<button className={currentRegion.id === id ? 'link active' : 'link'} onClick={() => setCurrentRegion(id)}>{name}</button>
			{
				children.length > 0
				&& <Children children={children} active={expanded} setCurrentRegion={setCurrentRegion} currentRegion={currentRegion} />
			}
		</div>
	)
}

const SideBarTree = ({regions, setCurrentRegion, currentRegion, toggleRegionExpand, setRegionToCompanyOverview}) => {
	return (
		<nav className="SideBarTree">
			<div className="inner">
				<div className="SideBarTree-logo"></div>
				<button className={currentRegion.id === 'all' ? 'companyOverview active' : 'companyOverview'} onClick={() => setRegionToCompanyOverview()}>All regions</button>
				<div className="list">
					{
						regions && regions.length > 0
						&& regions.map((region, i) => <Region key={i} index={i} {...region} currentRegion={currentRegion} setCurrentRegion={setCurrentRegion} toggleRegionExpand={toggleRegionExpand} />)
					}
				</div>
			</div>
		</nav>
	)
}

const mapStateToProps = state => ({
	currentRegion: state.user.regions.current,
	regions: state.user.regions.available
})

export default connect(mapStateToProps, {setCurrentRegion, toggleRegionExpand, setRegionToCompanyOverview})(SideBarTree)