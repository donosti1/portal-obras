import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import parse from "html-react-parser";
import {Box, Flex, Link, Stack, Text} from "@chakra-ui/react";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import obrasRaw from "../obras.json";
import {AppContext} from "../AppContext";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
interface IObras {
  tipoRepresentacion: number;
  tipoObra: number;
  id_marc: number;
  polylineRunRep: [number, number][];
  obra: string;
  lat: number;
  long: number;
  partido: number;
  localidad: number;
  barrio: number;
  fotoAntes: string;
  fotoDespues: string;
  link: string;
  popupText: string;
  fechaInicio: string;
  fechaFinProyectada: string;
  monto: number;
  avance: number;
  contratista: number;
}

const HomeScreen: React.FC = (props) => {
  const {state} = React.useContext(AppContext);
  const {partidoFiltered, localidadFiltered, barrioFiltered, ubicacionCercana} = {...state};

  //const venues: Venue = venuesRaw;
  const item = obrasRaw as IObras[];

  const limeOptions = {color: "lime"};
  const LocationMarker = () => {
    const [position, setPosition] = useState<null | boolean>(null);
    const map = useMap();
    let lat = -34.441796;
    let long = -58.6453;

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        lat = e.latlng.lat;
        long = e.latlng.lng;

        map.flyTo(e.latlng, map.getZoom());
        setPosition(true);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={[lat, long]}>
        <Popup>Usted está aquí</Popup>
      </Marker>
    );
  };

  return (
    <>
      <MapContainer
        center={[-34.441796, -58.6453]}
        scrollWheelZoom={false}
        style={{height: "500px"}}
        zoom={12.4}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {item
          .filter((obra) =>
            partidoFiltered == 0
              ? obra.partido != null
              : localidadFiltered == 0
              ? obra.partido == partidoFiltered
              : barrioFiltered == 0
              ? obra.localidad == localidadFiltered
              : obra.barrio == barrioFiltered,
          )
          .map((it: any) => {
            if (it.tipoRepresentacion == 1) {
              return (
                <Marker key={it.id_marc} position={[it.lat, it.long]}>
                  <Popup>
                    {parse(it.popupText)}
                    <br />
                    <a href={it.link}>Ver</a>
                  </Popup>
                </Marker>
              );
            } else if (it.tipoRepresentacion == 2) {
              return (
                <Polyline key={it.id_marc} pathOptions={limeOptions} positions={it.polylineRunRep}>
                  <Popup>
                    {parse(it.popupText)}
                    <br />
                    <a href={it.link}>Ver</a>
                  </Popup>
                </Polyline>
              );
            }
          })}
        {ubicacionCercana && <LocationMarker />}
      </MapContainer>
      <Stack height={48} />
    </>
  );
};

export default HomeScreen;
