import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from '../Pages/Home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "#1e88e5",
    secondaryColor: "#1e88e5",
  },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Home />
        </MuiThemeProvider>
    );
  }
}

export default App;
