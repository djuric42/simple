export const getConsumerDocuments = (year, region) => ({
	type: 'GET_CONSUMER_DOCUMENTS',
	payload: {
		request: {
			url: '/getConsumerDocuments',
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