import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../css/pages/map-page.css";
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: '/images/map-marker.svg',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    
});

function Mappage () {
    return(
        <div id="page-map">
            
            <aside>

                <header>
                    <img src="/images/map-marker.svg" alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Distrito Federal</strong>
                    <span>Brasília</span>
                </footer>

            </aside>
            <MapContainer center={[-15.798312767276085, -47.87105924404512]} zoom={10} style={{width: "100%", height: "100%"}}>
            <TileLayer attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker icon={iconPerson} position={[-15.798312767276085, -47.87105924404512]}>
                    <Popup>A pretty CSS3 popup.<br /> Easily customizable.</Popup>
                </Marker>
            </MapContainer>                     

            <Link to="" className="exit-map">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
            </Link>

        </div>
         
    )
}

export default Mappage;