const createTestData = () => {
	let data = [];
	for(let i = 0; i < 12; i++) { data.push( parseFloat((Math.random() * 1000).toFixed(2)) ) }
	return data;
}

let testRenewable = createTestData()
let testNonRenewable = createTestData()
let testTotal = () => {
	let data = []
	testRenewable.forEach((number, index) => {
		data.push(parseFloat((number + testNonRenewable[index]).toFixed(2)) );
	})
	return data
}

export const chart = [
	{
		name: 'Total',
		type: 'spline',
		data:  testTotal(),
	},
	{
		name: 'Renewable',
		data: testRenewable
	},
	{
		name: 'Non-renewable',
		data: testNonRenewable
	}
]