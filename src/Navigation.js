import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './Home';
injectTapEventPlugin();


export default class Navigation extends Component {

  render() {
    return (
      <Tabs>
        <Tab label="About Me">
          <Home />
        </Tab>
        <Tab label="Technical Expertise" />
        <Tab label="Projects" />
        <Tab label="Impossible List" />
      </Tabs>
    );
  }
}