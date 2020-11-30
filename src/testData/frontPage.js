export const frontPage = {
	customer: 'Big Fish AS',
	map: [
		{
			code: 'NO',
			name: "Norway",
			value: 100,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'SE',
			name: "Sweden",
			value: 80,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'DK',
			name: "Denmark",
			value: 10,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		},
		{
			code: 'GB',
			name: "United Kingdoms",
			value: 90,
			info: {
				totalPurchased: 200,
				totalRenewable: 200,
				inderectEmissions: 200,
				mixEmission: 200,
				savings: 200
			}
		}
	],
	powerplants: [
		{
			name: 'Godfarfoss',
			url: '//react.becour.com/powerplants/godfarfoss',
			text: 'Godfarfoss is located in the middle of the mountainous parts of Norway, between the municipalities Hol, and Nore – Uvdal, in the southeastern part of the country.',
			imageUrl: 'https://react.becour.com/wp-content/uploads/2020/05/Favorittwater-3229727_1920-1024x683.jpg'
		},
		{
			name: 'Øvre Forsland',
			url: '//react.becour.com/powerplants/ovre-forsland',
			text: 'The hydropower plant, located in Forslandsdalen in Norway, produces 33 GWh every year. It’s been nominated for several prizes for its architectural and environmental solutions.',
			imageUrl: 'https://react.becour.com/wp-content/uploads/2019/07/F_illustrasjon_bygg-e1568718930472-1024x577.jpg'
		},
		{
			name: 'Geithusfoss',
			url: '//react.becour.com/powerplants/geithusfoss',
			text: 'Geithusfoss power plant is a hydroelectric power plant at the outlet of the Bergsjøen at Geithus Modum municipality in Viken county.',
			imageUrl: 'https://react.becour.com/wp-content/uploads/2020/03/Geithusfoss-12-2007-07-07-Flyfototo-143-1024x681.jpg'
		},
		{
			name: 'Skravlåga',
			url: '//react.becour.com/powerplants/skravlaga',
			text: 'Skravlåga is a modern, reservoir power plant in the municipality of Wefsn, Nordland County.',
			imageUrl: 'https://react.becour.com/wp-content/uploads/2019/10/Skravl%C3%A5ga-sm%C3%A5kraftverk-1024x768.jpg'
		},
	],
	tiles: {
		renewable: 200,
		nonRenewable: 80,
		avoidedEmissions: 200,
		chart: {
			series: [
				{
					name: 'Renewable',
					data: [24, 21, 12, 32, 42, 23, 53, 42, 12, 32, 63, 12]
				},
				{
					name: 'Non-renewable',
					data: [12, 22, 0, 15, 18, 3, 5, 0, 6, 10, 22, 17]
				}
			]
		}
	}
}