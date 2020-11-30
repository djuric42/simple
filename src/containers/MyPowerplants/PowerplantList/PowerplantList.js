import React, {useState} from 'react'
import {connect} from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import './PowerplantList.css'

const Plant = ({name, about, consumption, image}) => {
	return(
		<div className="PowerplantList-Plant">
			<div className="image">
				{
					image
					? <div className="src" />
					: <div className="src no-src" />
				}
			</div>
			<div className="content">
				<p className="title">{name}</p>
				<table>
					<tbody>
						<tr>
							<th>Renewable</th>
							<td>{consumption.renewable}</td>
						</tr>
						<tr>
							<th>Total purchased</th>
							<td>{consumption.totalPurchased}</td>
						</tr>
					</tbody>
				</table>
				<p className="about">{about}</p>
			</div>
		</div>
	)
}

const List = ({powerplants}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [maxRows, setMaxRows] = useState(20)

	const scrollToList = () => {
		let list = document.getElementById('powerplantList')
		document.documentElement.scrollTop = list.offsetTop - 120
	}

	const userSetMaxRows = rows => {
		setCurrentPage(1)
		setMaxRows(rows)
	}

	const renderPagination = () => {
		let pages = Math.ceil(powerplants.length / maxRows)
		let list = []
		for(let i = 1; i <= pages; i++) {
			list.push(
				<li key={`pagination-${i}`}>
					<button className={currentPage === i ? 'paginationItem active' : 'paginationItem'} onClick={() => { scrollToList(); setCurrentPage(i) } }>{i}</button>
				</li>
			)
		}
		return (
			<ul className="paginationList">
				{
					currentPage !== 1 &&
					<li>
						<button onClick={() => { scrollToList(); setCurrentPage(currentPage-1) } } className="paginationItem paginateNavButton prev">Previous</button>
					</li>
				}
				{list}
				{
					currentPage < parseInt(pages) &&
					<li>
						<button onClick={() => { scrollToList(); setCurrentPage(currentPage+1); } } className="paginationItem paginateNavButton next">Next</button>
					</li>
				}
			</ul>
		)
	}

	const renderList = () => {
		let list = []
		if(currentPage === 1) {
			for(let i = 0; i < maxRows; i++) {
				if(powerplants[i]) {
					list.push(<Plant key={`powerplantItem_${i}`} {...powerplants[i]} />)
				}
			}
		} else {
			for(let i = maxRows * (currentPage - 1); i < ((maxRows * (currentPage - 1)) + maxRows); i++) {
				if(powerplants[i]) {
					list.push(<Plant key={`powerplantItem_${i}`} {...powerplants[i]} />)
				}
			}
		}
		return list
	}

	return(
		<div className="PowerplantList-List">
			<div className="info">
				<div className="count">
					<p>Total powerplants: <strong>{powerplants.length}</strong></p>
				</div>
				<div className="maxRowsSelect">
					<p>Results per page</p>
					<select onChange={e => userSetMaxRows(parseInt(e.currentTarget.value))}>
						<option value={20}>20</option>
						<option value={50}>50</option>
						<option value={100}>100</option>
					</select>
				</div>
			</div>
			<div className="list" id="powerplantList">
				{ renderList() }
			</div>
			<div className="pagination">
				{ renderPagination() }
			</div>
		</div>
	)
}

const PowerplantList = ({loading, powerplants}) => {
	return(
		<div className="PowerplantList">
			{
				loading
				? <Loader />
				: <List powerplants={powerplants} />
			}
		</div>
	)
}

const mapStateToProps = state => ({
	loading: state.powerplants.loading,
	powerplants: state.powerplants.plants
})

export default connect(mapStateToProps, null)(PowerplantList)