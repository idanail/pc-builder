import React from "react";

//Npm imports
import { Router, LocationProvider } from "@reach/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Consts/GlobalStyle";

//Component imports
import HomePage from "./Components/HomePage/HomePage";
import MainShowCase from "./Components/MainShowCase/MainShowCase";

//Const imports
import theme from "./Consts/Theme";
import { Paths } from "./Consts/Paths";

//context provider
import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentDetails from "./Components/ComponentDetails/ComponentDetails";
import MyItems from "./Components/MyItems/MyItems";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <LocationProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
              <HomePage path={Paths.paths.homePage} />
              <MainShowCase
                path={Paths.paths.main.replace(
                  "{COMPONENT}",
                  ":currentComponent"
                )}
              ></MainShowCase>
              <ComponentDetails
                path={Paths.paths.details
                  .replace("{COMPONENT}", ":currentComponent")
                  .replace("{DETAILS}", ":componentDetails")}
              />
              <MyItems path={Paths.paths.myItems} />
            </Router>
          </ThemeProvider>
        </LocationProvider>
      </GlobalContextProvider>
    </div>
  );
}

export default App;
