import React, {useState} from "react";
import {useLocation, withRouter} from "react-router-dom";
import {Container, Stack, Text, Box} from "@chakra-ui/react";

import {AppProvider} from "./AppContext";
import Navbar from "./Navbar";
import Header from "./Header";
import FilterBar from "./FilterBar";
//import Mapa from "./screens/Home";
import Routes from "./routes";

const App: React.FC = () => {
  const {pathname} = useLocation();
  let headerHeight = "100vh";
  let showFilterBar = true;

  if (pathname != "/") {
    headerHeight = "60vh";
    showFilterBar = false;
  }
  //pathname != "/" ? setHeaderHeight("40vh") : setHeaderHeight("100vh");

  return (
    <AppProvider>
      <Stack spacing={0}>
        <Stack height={headerHeight} spacing={0}>
          <Navbar />
          <Header />
        </Stack>
        {showFilterBar && <FilterBar />}
        <Routes />
      </Stack>
    </AppProvider>
  );
};

export default App;
