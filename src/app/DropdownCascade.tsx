import React from "react";
import {Select, FormLabel, Flex, Stack, Button} from "@chakra-ui/react";

interface IDCState {
  partidos: any[];
  localidades: any[];
  barrios: any[];
  selectedPartido: string;
  selectedLocalidad: string;
  selectedBarrio: string;
}

class DropdownCascade extends React.Component<{}, IDCState> {
  constructor(props: any) {
    super(props);
    this.state = {
      partidos: [],
      localidades: [],
      barrios: [],
      selectedPartido: "Todas las obras",
      selectedLocalidad: "Todas las obras",
      selectedBarrio: "Todas las obras",
    };
    this.changePartido = this.changePartido.bind(this);
    this.changeLocalidad = this.changeLocalidad.bind(this);
    this.changeBarrio = this.changeBarrio.bind(this);
  }

  componentDidMount() {
    this.setState({
      partidos: [
        {
          id_part: "1",
          name: "Partido A",
          localidades: [
            {
              id_loc: "1",
              name: "Localidad A",
              barrios: [
                {id_bar: "1", name: "Barrio 1"},
                {id_bar: "2", name: "Barrio 2"},
                {id_bar: "3", name: "Barrio 3"},
              ],
            },
            {
              id_loc: "2",
              name: "Localidad B",
              barrios: [
                {id_bar: "4", name: "Barrio 4"},
                {id_bar: "5", name: "Barrio 5"},
                {id_bar: "6", name: "Barrio 6"},
              ],
            },
            {
              id_loc: "3",
              name: "Localidad C",
              barrios: [
                {id_bar: "7", name: "Barrio 7"},
                {id_bar: "8", name: "Barrio 8"},
                {id_bar: "9", name: "Barrio 9"},
              ],
            },
          ],
        },
        {
          id_part: "2",
          name: "Límite Partido A - Partido B",
          localidades: [
            {id_loc: "4", name: "Otra Localidad", barrios: [{id_bar: "10", name: "Otro Barrio"}]},
          ],
        },
        {
          id_part: "3",
          name: "Límite Partido A - Partido C",
          localidades: [
            {id_loc: "5", name: "Otra Localidad", barrios: [{id_bar: "11", name: "Otro Barrio"}]},
          ],
        },
      ],
    });
  }
  changePartido(event: any) {
    this.setState({selectedPartido: event.target.value});
    if (event.target.value === "Todas las obras") {
      this.setState({
        selectedLocalidad: "Todas las obras",
        selectedBarrio: "Todas las obras",
      });

      return;
    }
    this.setState({
      localidades: this.state.partidos.find((partido) => partido.name === event.target.value)
        .localidades,
    });
  }

  changeLocalidad(event: any) {
    this.setState({selectedLocalidad: event.target.value});
    if (event.target.value === "Todas las obras") {
      this.setState({
        selectedBarrio: "Todas las obras",
      });

      return;
    }
    const stats = this.state.partidos.find(
      (partido) => partido.name === this.state.selectedPartido,
    ).localidades;

    this.setState({barrios: stats.find((stat: any) => stat.name === event.target.value).barrios});
  }

  changeBarrio(event: any) {
    this.setState({selectedBarrio: event.target.value});
  }

  render() {
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
          <Select
            backgroundColor="initial"
            value={this.state.selectedPartido}
            onChange={this.changePartido}
          >
            <option key="0">Todas las obras</option>
            {this.state.partidos.map((e) => {
              return <option key={e.id_part}>{e.name}</option>;
            })}
          </Select>
        </Stack>
        <Stack alignItems="center" direction="row">
          <FormLabel marginBottom={0}>Localidad</FormLabel>
          <Select
            _placeholder={{color: "white"}}
            disabled={this.state.selectedPartido == "Todas las obras"}
            value={this.state.selectedLocalidad}
            onChange={this.changeLocalidad}
          >
            <option key="0">Todas las obras</option>
            {this.state.localidades.map((e) => {
              return <option key={e.id_loc}>{e.name}</option>;
            })}
          </Select>
        </Stack>
        <Stack alignItems="center" direction="row">
          <FormLabel marginBottom={0}>Barrio</FormLabel>
          <Select
            disabled={this.state.selectedLocalidad == "Todas las obras"}
            value={this.state.selectedBarrio}
            onChange={this.changeBarrio}
          >
            <option key="0">Todas las obras</option>

            {this.state.barrios.map((e) => {
              return <option key={e.id_bar}>{e.name}</option>;
            })}
          </Select>
        </Stack>
        <Stack alignItems="center" direction="row">
          <Button
            _hover={{color: "secondary.500", backgroundColor: "whiteAlpha.900"}}
            variant="outline"
          >
            Mi ubicación
          </Button>
        </Stack>
      </Flex>
    );
  }
}

export default DropdownCascade;
