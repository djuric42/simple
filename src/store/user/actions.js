export const setCurrentYear = year => ({
	type: 'USER_SET_CURRENT_YEAR',
	year
});

export const setRegionToCompanyOverview = () => ({
	type: 'USER_SET_REGION_TO_COMPANY_OVERVIEW'
})

export const setCurrentRegion = id => ({
	type: 'USER_SET_CURRENT_REGION',
	id
});

export const toggleRegionExpand = index => ({
	type: 'USER_TOGGLE_REGION_EXPAND',
	index
})

export const getConsumerData = () => ({
	type: 'USER_GET_CONSUMER_DATA',
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