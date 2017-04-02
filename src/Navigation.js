import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SwipeableViews from 'react-swipeable-views';
import Home from './Home';
import ImpossibleList from './ImpossibleList';
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
          <Tab label="Projects" value={1} />
          <Tab label="Impossible List" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Home />
          </div>
          <div>
            <Projects />
          </div>
          <div>
            <ImpossibleList />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}