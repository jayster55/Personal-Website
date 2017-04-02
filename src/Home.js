import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Barbell from 'material-ui/svg-icons/places/fitness-center';

import Guy from 'material-ui/svg-icons/action/face';
import GradHat from 'material-ui/svg-icons/social/school';
import Barbell from 'material-ui/svg-icons/places/fitness-center';

import profile from './img/profilephoto.jpg';
import UW from './img/uw.png';
import WLU from './img/wlu.png';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

export default class Home extends Component {

  render() {
    return (
      <Grid style={{marginTop: "10px"}}>
        <Row middle="xs">
          <Col md={5}>
           <Card>
            <CardMedia>
              <img src={profile}/>
            </CardMedia>
            <CardTitle 
              title="I am Jared Gee" 
              subtitle="Full Stack Developer, Self-Mastery Blogger, Graphic Designer, Web App Creator, Fitness Fanatic"/>
          </Card>
          </Col>
          <Col md={7}>
            <Card>
              <CardHeader
                title={
                  <div>
                    About Me
                    <Guy />
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  I have a passion for all things computer-related. 
                  I continue to strive for success and visual appeal in my programs,
                  artwork, and side projects.
                </div>
              </CardText>
            </Card>

            <Card>
              <CardHeader
                title={
                  <div>
                    Academia
                    <GradHat />
                  </div>
                }
              />
              <CardText>
                <Row middle="xs" style={{marginLeft: "50px"}}>
                  <Col center="xs" xs>
                    <img src={UW}/>
                  </Col>
                  <Col center="xs" xs>
                    <img src={WLU}/>
                  </Col>
                </Row>
                <div style={{marginLeft: "15px"}}>
                  I am currently pursuing a Bachelor's degree of Computer Science at the 
                  University of Waterloo and a Bachelor's degree of Business Administration 
                  at Wilfrid Laurier University through the joint Double degree program.
                </div>
              </CardText>
            </Card>

            <Card>
              <CardHeader
                title={
                  <div>
                    Scholarships & Awards
                    <ActionFlightTakeoff />
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  I received the 2015 Alexandar Rutherford High School 
                  Achievement Scholarship, along with the 2015 President's Scholarship at the University of Waterloo.
                  I obtained a Finalist position in the BDO New Venture 
                  Competition, a Semi-Finalist position in the Pepsico Pitch Competition, 
                  and a Semi-Finalist position in the Blackberry Messenger Case Competition. 
                  All three events were hosted by Wilfrid Laurier University
                </div>
              </CardText>
            </Card>
            
            <Card>
              <CardHeader
                title={
                  <div>
                    Hobbies
                    <Barbell />
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  When I'm not working hard at school, 
                  I'm still working hard everywhere else: 
                  you can find me pumping iron at the gym, 
                  perfecting my prose on my blog, or making new friends at events and activities.
                </div>
              </CardText>
            </Card> 
          </Col>
        </Row>
      </Grid>
    );
  }
}