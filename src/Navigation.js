import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SwipeableViews from 'react-swipeable-views';


import Home from './Home';
import TechnicalExpertise from './TechnicalExpertise';
import Projects from './Projects';

injectTapEventPlugin();


export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="About Me" value={0} />
          <Tab label="Technical Expertise" value={1} />
          <Tab label="Projects" value={2} />
          <Tab label="Impossible List" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Home />
          </div>
          <div >
            <TechnicalExpertise />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}