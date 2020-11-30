import React from 'react'
import mapStyles from './mapStyles.json'
import { GoogleMap as GoogleMapComponent, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api';

const GoogleMap = ({ powerplants }) => {

	const containerStyle = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: '0',
		left: '0'
	};

	const center = {
		lat: -3.745,
		lng: -38.523
	};
	const locations = [
		{ lat: -31.56391, lng: 147.154312 },
		{ lat: -33.718234, lng: 150.363181 },
		{ lat: -33.727111, lng: 150.371124 },
		{ lat: -33.848588, lng: 151.209834 },
		{ lat: -33.851702, lng: 151.216968 },
		{ lat: -34.671264, lng: 150.863657 },
		{ lat: -35.304724, lng: 148.662905 },
		{ lat: -36.817685, lng: 175.699196 },
		{ lat: -36.828611, lng: 175.790222 },
		{ lat: -37.75, lng: 145.116667 },
		{ lat: -37.759859, lng: 145.128708 },
		{ lat: -37.765015, lng: 145.133858 },
		{ lat: -37.770104, lng: 145.143299 },
		{ lat: -37.7737, lng: 145.145187 },
		{ lat: -37.774785, lng: 145.137978 },
		{ lat: -37.819616, lng: 144.968119 },
		{ lat: -38.330766, lng: 144.695692 },
		{ lat: -39.927193, lng: 175.053218 },
		{ lat: -41.330162, lng: 174.865694 },
		{ lat: -42.734358, lng: 147.439506 },
		{ lat: -42.734358, lng: 147.501315 },
		{ lat: -42.735258, lng: 147.438 },
		{ lat: -43.999792, lng: 170.463352 },
	]

	function createKey(location) {
		return location.lat + location.lng
	 }

	 const options = {
		imagePath: `${process.env.PUBLIC_URL}/map_icons/mapCluster`
	 }

	return (
		<div className="GoogleMap">
			<LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
				<GoogleMapComponent
					mapContainerStyle={containerStyle}
					center={center}
					zoom={2}
					options={{styles: mapStyles}}
				>
					<MarkerClusterer options={options}>
						{(clusterer) =>
							locations.map((location) => (
								<Marker key={createKey(location)} position={location} clusterer={clusterer} />
							))
						}
					</MarkerClusterer>
				</GoogleMapComponent>
			</LoadScript>
		</div>
	)
}

export default GoogleMap
