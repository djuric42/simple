const initialState = {
	loading: true,
	regions: [],
	plants: []
};

const powerplants = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMER_POWERPLANTS': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMER_POWERPLANTS_SUCCESS': {
			return {
				...action.payload.data,
				loading: false
			}
		}
		case 'CLEAR_POWERPLANTS_DATA': {
			return {
				...initialState,
				loading: true
			}
		}
		default:
			return state;
	}
}

export default powerplants
