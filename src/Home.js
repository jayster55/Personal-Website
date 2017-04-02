import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
      <Grid style={{marginTop: "40px"}}>
        <Row middle="xs">
          <Col md={5}>
           <Card>
            <CardMedia>
              <img src={profile}/>
            </CardMedia>
            <CardTitle title="I am Jared Gee" />
          </Card>
          </Col>
          <Col md={7}>
            <FontIcon
              className="fa fa-expand"
            />
             <Card>
              <CardText>
                <List>
                  <ListItem primaryText="Full Stack Developer" disabled/>
                  <ListItem primaryText="Self-Mastery Blogger" disabled/>
                  <ListItem primaryText="Graphic Designer" disabled/>
                  <ListItem primaryText="Web App Creator" disabled/>
                  <ListItem primaryText="Fitness Fanatic" disabled/>
                </List>
                <div style={{marginLeft: "15px"}}>
                  I have a passion for all things computer-related. I continue to strive for success and visual appeal in my programs, artwork, and side projects.
                </div>
                  <Row middle="xs" style={{marginLeft: "50px"}}>
                    <Col center="xs" xs>
                      <img src={UW}/>
                    </Col>
                    <Col center="xs" xs>
                      <img src={WLU}/>
                    </Col>
                  </Row>
                <div style={{marginLeft: "15px"}}>
                  I am currently pursuing a Bachelor's degree of Computer Science at the University of Waterloo and a Bachelor's degree of Business Administration at Wilfrid Laurier University through the joint Double degree program.
                </div>

              </CardText>
              <CardActions>
                
                <FlatButton label="Action2" />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Grid>
    );
  }
}