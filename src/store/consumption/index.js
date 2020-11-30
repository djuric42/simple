const initialState = {
	loading: true,
	overview: {
		totalConsumption: 0,
		totalRenewable: 0,
		totalNonRenewable: 0,
		totalAvoidedEmissions: 0,
	},
	energyDisclosure: {
		renewable: {
			total: 0,
			wind: 0,
			solar: 0,
			hydro: 0
		},
		nuclear: 0,
		fossil: 0
	},
	details: {
		renewable: 0,
		totalPurchased: 0,
		totalInderectEmissions: 0,
		referenceMixEmissions: 0,
		totalSavings: 0
	},
	consumptionLocations: []
};

const consumption = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_CONSUMPTION_DATA': {
			return {
				...state,
				loading: true
			}
		}
		case 'GET_CONSUMPTION_DATA_SUCCESS': {
			return {
				...action.payload.data,
				loading: false
			}
		}
		case 'CLEAR_CONSUMPTION_DATA': {
			return initialState
		}
		default:
			return state;
	}
}

export default consumption