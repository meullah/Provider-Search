# App.js
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MySearchScreen from "./components/Screens/SearchScreen";
import MyMapContainer from "./components/Maps/mapcontainer";
export default class App extends React.Component {
  render() {
    return (
      // <SearchScreen />
      <Switch>
        <Route path="/searchDoctor" exact component={MyMapContainer} />
        <Route path="/" exact component={MySearchScreen} />
      </Switch>
    );
  }
}
