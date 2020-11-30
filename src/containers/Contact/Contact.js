import React from 'react'
import './Contact.css'
import Form from './Form'
import People from './People'

const Contact = () => {
	return (
		<main className="Contact">
			<div className="wrapper">
				<Form />
				<People />
			</div>
		</main>
	)
}

export default Contact