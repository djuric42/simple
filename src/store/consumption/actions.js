export const getConsumptionData = (year, region) => ({
	type: 'GET_CONSUMPTION_DATA',
	payload: {
		request: {
			url: '/getConsumerConsumption',
			params: {
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

export const clearConsumptionData = () => ({
	type: 'CLEAR_CONSUMPTION_DATA'
})