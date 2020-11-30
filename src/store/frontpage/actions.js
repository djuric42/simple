export const removeLoader = () => ({
	type: 'REMOVE_LOADER'
});

export const frontPageGetConsumerData = () => ({
	type: 'FRONT_PAGE_GET_CONSUMER_DATA',
	payload: {
		request: {
			url: '/getConsumerInfo',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		}
	}
})