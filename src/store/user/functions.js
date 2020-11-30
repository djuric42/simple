export const getCurrentRegion = (regions, id) => {
	let regionArray = [];
	let returnObject;
	if(regions.length > 0) {
		regions.forEach(region => {
			regionArray.push(region)
			if(region.children) {
				region.children.forEach(child => regionArray.push(child))
			}
		})
	}

	regionArray.forEach(region => {
		if(region.id === id) {
			returnObject = {
				name: region.name,
				id: region.id,
				points: region.points ? region.points : false
			}
		}
	})

	return returnObject
}