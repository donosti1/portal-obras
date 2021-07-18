import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import HomeScreen from "./screens/HomeMap";
import Detail from "./screens/Detail";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route component={Detail} path="/obras/:id" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
