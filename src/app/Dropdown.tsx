import React, {useEffect, useState, useContext} from "react";
import {Select, FormLabel, Flex, Stack, Button} from "@chakra-ui/react";

import partidos from "./partidos.json";
import {AppContext} from "./AppContext";

const DropdownCascade = () => {
  const {dispatch} = useContext(AppContext);
  const {state} = React.useContext(AppContext);
  const {ubicacionCercana} = {...state};

  const [localidades, setLocalidades] = useState(
    partidos.map((e) =>
      e.localidades.map((loc) => {
        return (
          <option key={loc.id_loc} value={loc.id_loc}>
            {loc.name}
          </option>
        );
      }),
    ),
  );
  const [barrios, setBarrios] = useState(
    partidos.map((e) =>
      e.localidades.map((loc) =>
        loc.barrios.map((bar) => {
          return (
            <option key={bar.id_bar} value={bar.id_bar}>
              {bar.name}
            </option>
          );
        }),
      ),
    ),
  );

  const [selectedPartido, setSelectedPartido] = useState("0");
  const [selectedLocalidad, setSelectedLocalidad] = useState("0");
  const [selectedBarrio, setSelectedBarrio] = useState("0");
  const changePartido = (event: any) => {
    setSelectedPartido(event.target.value);
    dispatch({
      type: "FILTRAR_PARTIDO",
      payload: event.target.value,
    });
    if (event.target.value == 0) {
      setLocalidades(
        partidos.map((e) =>
          e.localidades.map((loc) => {
            return (
              <option key={loc.id_loc} value={loc.id_loc}>
                {loc.name}
              </option>
            );
          }),
        ),
      );
      setSelectedLocalidad("0");
      setSelectedBarrio("0");

      return;
    }
    setLocalidades(
      partidos
        .filter((part) => part.id_part == event.target.value)
        .map((part) =>
          part.localidades.map((loc) => {
            return (
              <option key={loc.id_loc} value={loc.id_loc}>
                {loc.name}
              </option>
            );
          }),
        ),
    );
  };
  const changeLocalidad = (event: any) => {
    setSelectedLocalidad(event.target.value);
    dispatch({
      type: "FILTRAR_LOCALIDAD",
      payload: event.target.value,
    });
    if (event.target.value == 0) {
      setBarrios(
        partidos.map((e) =>
          e.localidades.map((loc) =>
            loc.barrios.map((bar) => {
              return (
                <option key={bar.id_bar} value={bar.id_bar}>
                  {bar.name}
                </option>
              );
            }),
          ),
        ),
      );
      setSelectedBarrio("0");

      return;
    }
    setBarrios(
      partidos
        .filter((part) => part.id_part == selectedPartido)
        .map((e) =>
          e.localidades
            .filter((loc) => loc.id_loc == event.target.value)
            .map((loc) =>
              loc.barrios.map((bar) => {
                return (
                  <option key={bar.id_bar} value={bar.id_bar}>
                    {bar.name}
                  </option>
                );
              }),
            ),
        ),
    );
  };
  const changeBarrio = (event: any) => {
    setSelectedBarrio(event.target.value);
    dispatch({
      type: "FILTRAR_BARRIO",
      payload: event.target.value,
    });
  };
  const handleLocationButtonClick = (event: any) => {
    //setSelectedBarrio(event.target.value);
    alert("Próximamente");
    dispatch({
      type: "FILTRAR_CERCANIA",
      payload: !ubicacionCercana,
    });
  };

  /* useEffect(() => {}); */

  return (
    <Flex
      alignContent="center"
      alignItems="center"
      color="whiteAlpha.900"
      direction="row"
      id="filterBar"
      justifyContent="space-around"
    >
      <Stack alignItems="center" direction="row">
        <FormLabel marginBottom={0}>Partido</FormLabel>
        <Select backgroundColor="initial" value={selectedPartido} onChange={changePartido}>
          <option key="0" value="0">
            Todas las obras
          </option>
          {partidos.map((e) => {
            return (
              <option key={e.id_part} value={e.id_part}>
                {e.name}
              </option>
            );
          })}
        </Select>
      </Stack>
      <Stack alignItems="center" direction="row">
        <FormLabel marginBottom={0}>Localidad</FormLabel>
        <Select
          _placeholder={{color: "white"}}
          disabled={selectedPartido == "0"}
          value={selectedLocalidad}
          onChange={changeLocalidad}
        >
          <option key="0" value="0">
            Todas las obras
          </option>
          {localidades}
        </Select>
      </Stack>
      <Stack alignItems="center" direction="row">
        <FormLabel marginBottom={0}>Barrio</FormLabel>
        <Select disabled={selectedLocalidad == "0"} value={selectedBarrio} onChange={changeBarrio}>
          <option key="0" value="0">
            Todas las obras
          </option>

          {barrios}
        </Select>
      </Stack>
      <Stack alignItems="center" direction="row">
        <Button
          _hover={{color: "secondary.500", backgroundColor: "whiteAlpha.900"}}
          backgroundColor={ubicacionCercana ? "whiteAlpha.900" : "initial"}
          color={ubicacionCercana ? "black" : "white"}
          variant="outline"
          onClick={handleLocationButtonClick}
        >
          Mi ubicación
        </Button>
      </Stack>
    </Flex>
  );
};

export default DropdownCascade;
