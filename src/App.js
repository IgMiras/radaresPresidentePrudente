import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { radars } from './radars';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function App() {
	const electronicBumpIcon = new Icon({
		iconUrl: require('./assets/bump.png'),
		iconSize: [38, 38], // size of the icon
	});

	const trafficLightRadarIcon = new Icon({
		iconUrl: require('./assets/traffic-lights.png'),
		iconSize: [38, 38], // size of the icon
	});

	const fixedRadarIcon = new Icon({
		iconUrl: require('./assets/speed-radar.png'),
		iconSize: [38, 38], // size of the icon
	});

	return (
		<div className='App'>
			<MapContainer center={{ lat: -22.121265, lng: -51.3834 }} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>

				<MarkerClusterGroup>
					{radars.map((radar) => {
						if (radar.popUp === 'Lombada Eletronica') {
							return (
								<Marker
									position={radar.geocode}
									icon={electronicBumpIcon}
								>
									<Popup>{radar.popUp}</Popup>
								</Marker>
							);
						}
						if (radar.popUp === 'Radar Semaforico') {
							return (
								<Marker
									position={radar.geocode}
									icon={trafficLightRadarIcon}
								>
									<Popup>{radar.popUp}</Popup>
								</Marker>
							);
						}
						if (radar.popUp === 'Radar Fixo') {
							return (
								<Marker
									position={radar.geocode}
									icon={fixedRadarIcon}
								>
									<Popup>{radar.popUp}</Popup>
								</Marker>
							);
						}
					})}
				</MarkerClusterGroup>
			</MapContainer>
		</div>
	);
}

export default App;
