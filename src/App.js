import React, { Component } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import HCardBuilder from "./components/HCardBuilder";

const theme = {
  font: {
    sans: '"Merriweather Sans", sans-serif',
    sansSerif: '"Merriweather", sans-serif'
  },
  color: {
    darkBlue: "#2c3e50",
    primary: "#3498db",
    secondary: "#627b8b"
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <HCardBuilder />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
