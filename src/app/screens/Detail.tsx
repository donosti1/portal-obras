import React from "react";
import {Box, Container, Flex, Link, Stack, Text} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {MapContainer, TileLayer, Marker, Popup, useMap, Polyline} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

import obrasRaw from "../obras.json";
import partidos from "../partidos.json";
interface IObraMarcador {
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
const Detail: React.FC = () => {
  const obras = obrasRaw as IObraMarcador[];
  const {id} = useParams<{id: string}>();
  const obra = obras.filter((obra) => obra.id_marc == Number(id));

  const fotoAntes = obra[0].fotoAntes;

  let localidad_obra;

  partidos.map((element) =>
    element.localidades.map((e, i) =>
      Number(e.id_loc) == obra[0].localidad ? (localidad_obra = e.name) : null,
    ),
  );

  return (
    <Box paddingY={4}>
      <Container maxWidth="container.xl">
        <Stack>
          <Text color="black" fontSize="6xl" fontWeight="900" textAlign="center">
            Obra: {obra[0].obra}
          </Text>
          <Stack direction="row">
            <Stack width={96}>
              <Stack height={72}>
                <Text color="black" fontSize={18} fontWeight="900">
                  Ubicación
                </Text>
                <MapContainer
                  center={[-34.441796, -58.6453]}
                  scrollWheelZoom={false}
                  style={{height: "500px"}}
                  zoom={11}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {obra.map((it: any) => {
                    if (it.tipoRepresentacion == 1) {
                      return (
                        <Marker key={it.id_marc} position={[it.lat, it.long]}>
                          <Popup>{obra[0].obra}</Popup>
                        </Marker>
                      );
                    } else if (it.tipoRepresentacion == 2) {
                      return (
                        <Polyline key={it.id_marc} positions={it.polylineRunRep}>
                          <Popup>{obra[0].obra}</Popup>
                        </Polyline>
                      );
                    }
                  })}
                </MapContainer>
              </Stack>
              <Stack>
                <Text color="black" fontSize={18} fontWeight="900">
                  Comparación
                </Text>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      alt="Image one"
                      srcSet="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
                      style={{filter: "grayscale(1)"}}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      alt="Image two"
                      src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
                      srcSet="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"
                    />
                  }
                />
              </Stack>
            </Stack>
            <Stack spacing={4} width="100%">
              <Text color="black" fontSize={18} fontWeight="900" textAlign="center">
                Localidad: {localidad_obra}
              </Text>
              <Stack padding={4}>
                <Text color="black" fontSize={18} fontWeight="900">
                  Descripción de la obra:
                </Text>
                <Text color="black" fontSize={16}>
                  Tipo de obra: {obra[0].tipoObra}
                </Text>
                <Text color="black" fontSize={16}>
                  Fecha de inicio: {new Date(obra[0].fechaInicio).toLocaleDateString()}
                </Text>
                <Text color="black" fontSize={16}>
                  Finalización proyectada:{" "}
                  {new Date(obra[0].fechaFinProyectada).toLocaleDateString()}
                </Text>
                <Text color="black" fontSize={16}>
                  Monto:{" "}
                  {obra[0].monto.toLocaleString("es-ar", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </Text>
                <Text color="black" fontSize={16}>
                  Avance: {obra[0].avance}
                </Text>
                <Text color="black" fontSize={16}>
                  Contratista: {obra[0].contratista}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="container.xl" />
      <Stack height={96} />
    </Box>
  );
};

export default Detail;
