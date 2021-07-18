import React from "react";
import {Container, Stack, Text, StackDivider, Icon} from "@chakra-ui/react";
import {BiRightArrow} from "react-icons/bi";

import HeaderImage from "/assets/header.jpg";
const Header: React.FC = () => {
  return (
    <Stack
      backgroundImage={HeaderImage}
      backgroundPosition="50% 30%"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 100%"
      //filter="grayscale(100%)"
      //filter="hue-rotate(185deg) blur(2px)"
      height="100vh"
      justifyContent="center"
    >
      <Container color="white" maxWidth="container.md">
        <Stack paddingBottom={6}>
          <Text fontSize="3xl" fontWeight="900" textAlign="center">
            Conocé las obras en desarrollo
          </Text>
        </Stack>
        <Stack
          direction="row"
          divider={<StackDivider backgroundColor="white" width={0.5} />}
          justifyContent="center"
        >
          <Stack justifyContent="center" paddingLeft={4} paddingRight={2} width={60}>
            <Text fontSize="xl" fontWeight="600" lineHeight={1.2} textAlign="right">
              Te brindamos información para que puedas conocer el avance de las obras en marcha
            </Text>
          </Stack>
          <Stack alignContent="center" direction="row" justifyContent="center" spacing={0}>
            <Stack alignItems="center" direction="row" paddingLeft={6} spacing={0}>
              <Icon as={BiRightArrow} color="blue.300" height={9} width={9} />
              <Stack alignItems="center" spacing={0}>
                <Text fontSize="4xl" fontWeight="900">
                  55
                </Text>
                <Text fontSize="lg" fontWeight="900">
                  Finalizadas
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="center" direction="row" paddingLeft={8}>
              <Icon as={BiRightArrow} color="blue.300" height={9} width={9} />
              <Stack alignItems="center" spacing={0}>
                <Text fontSize="4xl" fontWeight="900">
                  208
                </Text>
                <Text fontSize="lg" fontWeight="900">
                  En ejecución
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
