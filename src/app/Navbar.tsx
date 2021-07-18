import React from "react";
import {Container, Stack, Text, Box, Image, Input, Icon} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {GiNewspaper} from "react-icons/gi";
import {HiOutlineOfficeBuilding, HiDocumentSearch, HiOutlineSearch} from "react-icons/hi";
import {WiHorizonAlt} from "react-icons/wi";

//import logo from "../assets/logo.png";

const Navbar: React.FC = (props) => {
  //  const {pathname} = useLocation();
  const [navbarHeight, setNavbarHeight] = React.useState<string>("");
  const [searchWidth, setSearchWidth] = React.useState<string>("80px");
  const [isShownSubMenuGestion, setIsShownSubMenuGestion] = React.useState(false);
  const [isShownSubMenuTramites, setIsShownSubMenuTramites] = React.useState(false);
  const [isShownSubMenuDescubri, setIsShownSubMenuDescubri] = React.useState(false);
  const handleSearchFocus = () => setSearchWidth("180px");
  const handleSearchBlur = () => setSearchWidth("80px");

  //const searchRef = React.useRef();

  /*const handleSearchChange = (event:any) => setSearchValue(event.target.value)*/
  return (
    <Stack
      ref={(el) => {
        if (!el) return;
        setNavbarHeight(el.getBoundingClientRect().height + "px");
      }}
      spacing={0}
    >
      <Box backgroundColor="whiteAlpha.900" paddingY={1}>
        <Container maxWidth="container.xl">
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Stack alignItems="center" direction="row">
              <Link to="/">
                {
                  //<Image flex={1} height={20} objectFit="contain" src={logo} width={320} />
                }
              </Link>
              <Stack direction="row">
                <Stack
                  _hover={{cursor: "pointer", backgroundColor: "blackAlpha.200"}}
                  alignItems="center"
                  backgroundColor="whiteAlpha.900"
                  borderColor="secondary.500"
                  borderRadius="20"
                  borderWidth={2}
                  color="secondary.500"
                  direction="row"
                  paddingX={4}
                  paddingY={0}
                  spacing={1}
                  onMouseEnter={() => setIsShownSubMenuGestion(true)}
                  onMouseLeave={() => setIsShownSubMenuGestion(false)}
                >
                  <Icon as={HiOutlineOfficeBuilding} color="secondary.500" height={6} width={6} />
                  <Text color="secondary.500" fontSize={12} fontWeight="900">
                    Menu 1
                  </Text>
                </Stack>

                <Stack
                  _hover={{cursor: "pointer", backgroundColor: "blackAlpha.200"}}
                  alignItems="center"
                  backgroundColor="whiteAlpha.900"
                  borderColor="secondary.500"
                  borderRadius="9999"
                  borderWidth={2}
                  color="secondary.500"
                  direction="row"
                  paddingX={4}
                  paddingY={1}
                  spacing={1}
                  onMouseEnter={() => setIsShownSubMenuTramites(true)}
                  onMouseLeave={() => setIsShownSubMenuTramites(false)}
                >
                  <Icon as={HiDocumentSearch} color="secondary.500" height={8} width={8} />
                  <Text color="secondary.500" fontSize={12} fontWeight="900">
                    Menu 2
                  </Text>
                </Stack>
                <Stack
                  _hover={{cursor: "pointer", backgroundColor: "blackAlpha.200"}}
                  alignItems="center"
                  backgroundColor="whiteAlpha.900"
                  borderColor="secondary.500"
                  borderRadius="9999"
                  borderWidth={2}
                  color="secondary.500"
                  direction="row"
                  paddingX={4}
                  paddingY={2}
                  spacing={1}
                  onMouseEnter={() => setIsShownSubMenuDescubri(true)}
                  onMouseLeave={() => setIsShownSubMenuDescubri(false)}
                >
                  <Icon as={WiHorizonAlt} color="secondary.500" height={8} width={8} />
                  <Stack spacing={0}>
                    <Text
                      color="secondary.500"
                      fontSize={12}
                      fontWeight="900"
                      lineHeight={1}
                      spacing={0}
                    >
                      Menu
                    </Text>
                    <Text color="secondary.500" fontSize={12} fontWeight="900" lineHeight={1}>
                      Line Break
                    </Text>
                  </Stack>
                </Stack>
                <Link to="novedades">
                  <Stack
                    _hover={{cursor: "pointer", backgroundColor: "blackAlpha.200"}}
                    alignItems="center"
                    backgroundColor="whiteAlpha.900"
                    borderColor="secondary.500"
                    borderRadius="9999"
                    borderWidth={2}
                    color="secondary.500"
                    direction="row"
                    paddingX={4}
                    paddingY={2}
                    spacing={1}
                  >
                    <Icon as={GiNewspaper} color="secondary.500" height={8} width={8} />
                    <Text color="secondary.500" fontSize={12} fontWeight="900">
                      Menu 4
                    </Text>
                  </Stack>
                </Link>
              </Stack>
            </Stack>
            <Stack
              alignItems="center"
              backgroundColor="whiteAlpha.900"
              borderColor="blackAlpha.700"
              borderRadius="9999"
              borderWidth={2}
              color="blackAlpha.700"
              direction="row"
              paddingX={6}
              spacing={3}
            >
              <Input
                _placeholder={{color: "blackAlpha.700"}}
                fontSize={18}
                padding={2}
                placeholder="Buscar"
                size="md"
                transition="all 2s"
                variant="unstyled"
                /*onChange={handleSearchChange} */ width={searchWidth}
                onBlur={handleSearchBlur}
                onFocus={handleSearchFocus}
              />
              <Icon as={HiOutlineSearch} height={6} spacing={3} width={6} />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box backgroundColor="secondary.500" boxShadow="sm" paddingY={4}>
        <Container maxWidth="container.xl">
          <Text color="white" fontSize={18} fontWeight="900">
            PORTAL OBRAS
          </Text>
        </Container>
      </Box>
      <Box
        backgroundColor="primary.500"
        style={{position: "absolute", top: navbarHeight}}
        width="100%"
        zIndex="9999"
      >
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          {isShownSubMenuGestion && <Text color="blackAlpha.700">MENU 1</Text>}
          {isShownSubMenuTramites && <Text color="blackAlpha.700">MENU 2</Text>}
          {isShownSubMenuDescubri && <Text color="blackAlpha.700">MENU 3</Text>}
        </Container>
      </Box>
    </Stack>
  );
};

export default Navbar;
