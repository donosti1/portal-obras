import React, {useContext} from "react";
import {Container, Stack, Text, Box} from "@chakra-ui/react";

import DropdownCascade from "./Dropdown";
const FilterBar: React.FC = () => {
  return (
    <Box backgroundColor="secondary.500" boxShadow="sm" paddingY={4}>
      <Container maxWidth="container.xl">
        <Text color="white" fontSize={16} fontWeight="700" marginBottom={4}>
          Encontrá las obras filtrando las opciones
        </Text>
        <DropdownCascade />
      </Container>
    </Box>
  );
};

export default FilterBar;
