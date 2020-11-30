const initialState = {
	loading: true,
	tradeConfirmations: [],
	billingHistory: [],
	contracts: [],
	reportingData: []
};

const documents = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMER_DOCUMENTS': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMER_DOCUMENTS_SUCCESS': {
			return {
				...state,
				loading: false,
				tradeConfirmations: action.payload.data.tradeConfirmations ? action.payload.data.tradeConfirmations : [],
				billingHistory: action.payload.data.billingHistory ? action.payload.data.billingHistory : [],
				contracts: action.payload.data.contracts ? action.payload.data.contracts : [],
				reportingData: action.payload.data.reportingData ? action.payload.data.reportingData : []
			}
		}
		default:
			return state;
	}
}

export default documents
