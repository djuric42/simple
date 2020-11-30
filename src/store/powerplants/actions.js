export const getConsumerPowerplants = (category, year, region) => ({
	type: 'GET_CONSUMER_POWERPLANTS',
	payload: {
		request: {
			url: '/getConsumerPowerplants',
			params: {
				category: category,
				year: year,
				region: region
			},
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})

export const clearPowerplantsData = () => ({
	type: 'CLEAR_POWERPLANTS_DATA'
})