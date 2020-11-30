import React from 'react'
import Select from 'react-select'

const PointSelect = ({points}) => {

	const selectPoint = selected => {
		console.log(selected)
	}

	return(
		<div className="PointSelect">
			<label htmlFor="points">Filter by consumption location</label>
			<Select
				className="basic-single"
				classNamePrefix="select"
				placeholder="Whole country"
				onChange={selectPoint}
				isClearable={true}
				isSearchable={true}
				name="points"
				options={points}
			/>
		</div>
	)
}

export default PointSelect