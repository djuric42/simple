const testTotalRenewable = parseFloat((Math.random() * 1000).toFixed(2));
const testTotalNonRenewable = parseFloat((Math.random() * 1000).toFixed(2));
const testAvoided = parseFloat((Math.random() * 100).toFixed(2));
const testTotal = parseFloat((testTotalRenewable + testTotalNonRenewable).toFixed(2));

const testPieTotal = parseInt(Math.random() * (60 - 40) + 40);
const testPieFractal = parseInt(testPieTotal / 3);
const testNonRenewablePie = parseInt(Math.random() * (40 - 10) + 10);
const testPieNuclear = parseInt(Math.random() * (testNonRenewablePie - 0) + 0);
const testFossil = parseInt(testNonRenewablePie - testPieNuclear)

export const consumptionInfo = {
	overview: {
		totalConsumption: testTotal,
		totalRenewable: testTotalRenewable,
		totalNonRenewable: testTotalNonRenewable,
		totalAvoidedEmissions: testAvoided,
	},
	energyDisclosure: {
		renewable: {
			total: testPieTotal,
			wind: parseInt(testPieFractal + 10),
			solar: parseInt(testPieFractal - 10),
			hydro: testPieFractal
		},
		nuclear: testPieNuclear,
		fossil: testFossil
	},
	details: {
		renewable: 100,
		totalPurchased: 200000,
		totalInderectEmissions: 0,
		referenceMixEmissions: 41674,
		totalSavings: 41674
	},
	consumptionLocations: [
		{
			name: 'Helsingbord',
			consumptionVolume: 800000,
			plannedVolume: 20000,
			purchasedRE: 100
		},
		{
			name: 'Stockholm',
			consumptionVolume: 830000,
			plannedVolume: 10000,
			purchasedRE: 90
		},
		{
			name: 'Malmö',
			consumptionVolume: 800000,
			plannedVolume: 20000,
			purchasedRE: 100
		},
	]
}