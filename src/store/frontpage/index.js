const initialState = {
	loading: true,
	map: [],
	powerplants: [],
	tiles: {
		renewable: null,
		nonRenewable: null,
		avoidedEmissions: null,
		chart: {
			series: []
		}
	}
};

const frontpage = (state = initialState, action) => {
	switch (action.type) {
		case 'REMOVE_LOADER': {
			return {
				...state,
				loading: false
			}
		}
		case 'FRONT_PAGE_GET_CONSUMER_DATA': {
			return {
				...state,
				loading: true
			}
		}
		case 'FRONT_PAGE_GET_CONSUMER_DATA_SUCCESS': {
			return {
				...state,
				loading: false,
				customer: action.payload.data.customer ? action.payload.data.customer : false,
				map: action.payload.data.map ? action.payload.data.map : [],
				powerplants: action.payload.data.powerplants ? action.payload.data.powerplants : [],
				tiles: action.payload.data.tiles ? action.payload.data.tiles : state.tiles
			}
		}
		default:
			return state;
	}
}

export default frontpage