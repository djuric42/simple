import React, { useState, useEffect } from 'react'
import { exportCSV } from './exportCSV'
import './Table.css'

const Checkbox = ({checked, onChange}) => {
	let id = Math.random().toString(36).substring(7);
	return(
		<div className="Checkbox">
			<label htmlFor={id}>
				<input id={id} checked={checked} onChange={onChange} type="checkbox" />
				<span className="box"></span>
			</label>
		</div>
	)
}

const TableContent = ({ headers, rows, select, selectRow, selectAllRows, allSelected }) => {

	return (
		<table>
			<thead>
				<tr>
					{select && <th className="select-box"><Checkbox checked={allSelected} onChange={selectAllRows} /></th>}
					{headers.map((title, headIndex) => <th key={headIndex}>{title}</th>)}
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, rowIndex) =>
						<tr key={rowIndex}>
							{select &&
								<td className="select-box">
									<Checkbox checked={row.selected} onChange={e => selectRow(e, rowIndex)} />
								</td>
							}
							{
								row.items.map((cell, cellIndex) =>
									<td key={cellIndex}>
										{
											`${cell}` === '#' || `${cell}`.includes('http')
												?
												cell !== '#' && <a className="download-button" rel="noreferrer" href={cell} target="_blank" title="download pdf">Download</a>
												: `${cell}`
										}
									</td>
								)
							}
						</tr>
					)
				}
			</tbody>
		</table>
	)
}

const Table = ({ headers, rows, select }) => {

	const [allSelected, setAllSelected] = useState(false);
	const [exportAvailable, setExportAvailable] = useState(false)
	const [tableRows, setTableRows] = useState([]);

	useEffect(() => {
		if(rows.length > 0) {
			let tempList = []
			rows.forEach((row, id) => {
				tempList.push({
					id: id,
					selected: false,
					items: row
				})
			})
			setTableRows(tempList)
		}
	}, [rows])

	useEffect(() => {
		setExportAvailable(tableRows.some(row => { return row.selected }))
		setAllSelected(tableRows.every(row => { return row.selected }))
	},[tableRows])

	const selectRow = (e, index) => {
		let tempList = Array.from(tableRows)
		tempList[index].selected = !tempList[index].selected
		setTableRows(tempList)
	}

	const selectAllRows = () => {
		let tempList = Array.from(tableRows)
		if(!allSelected) {
			tempList.forEach((row) => row.selected = true)
		} else {
			tempList.forEach(row => row.selected = false)
		}
		setTableRows(tempList)
		setAllSelected(!allSelected)
	}

	const submitForm = e => {
		e.preventDefault()

		let indexList = [];
		tableRows.forEach(row => {
			if(row.selected) {
				indexList.push(row.id)
			}
		})

		// Sort selected items
		let documentList = []
		indexList.sort()
		indexList.forEach(index => {
			documentList.push(rows[index])
		})

		// Create CSV and download
		exportCSV(headers, documentList)

	}

	if (select) {
		return (
			<form className="form-select" onSubmit={submitForm}>
				<button disabled={!exportAvailable} className="export-button" type="submit">Export CSV</button>
				<div className="Table">
					<TableContent headers={headers} rows={tableRows} select={true} selectRow={selectRow} selectAllRows={selectAllRows} allSelected={allSelected} />
				</div>
			</form>
		)
	} else {
		return (
			<div className="Table">
				<TableContent headers={headers} rows={rows} />
			</div>
		)
	}
}

export default Table