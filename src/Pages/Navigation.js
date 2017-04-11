import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SwipeableViews from 'react-swipeable-views';
import Home from './Home';
import ImpossibleList from './ImpossibleList';
import Projects from './Projects';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin();


export default class Navigation extends Component {

  state = {
    open: false,
    view: "about",
  }

  view() {
    if(this.state.view === "about") {
      return <Home />;
    } else if (this.state.view === "projects") {
      return <Projects />;
    } else {
      return <ImpossibleList />;
    }
  };

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar title="Jared Gee's Portfolio" onTouchTap={this.handleToggle}/>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar showMenuIconButton={false} title="Menu" />
          <MenuItem
            onTouchTap={() => this.setState({open: false, view: "about"})}>
            About
          </MenuItem>
          <MenuItem
            onTouchTap={() => this.setState({open: false, view: "projects"})}>
            Projects
          </MenuItem>
          <MenuItem
            onTouchTap={() => this.setState({open: false, view: "goals"})}>
            Goals
          </MenuItem>
          </Drawer>

          {this.view()}

      </div>
    );
  }
}