import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Barbell from 'material-ui/svg-icons/places/fitness-center';
import GradHat from 'material-ui/svg-icons/social/school';
import DeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import DevMode from 'material-ui/svg-icons/device/developer-mode';
import profile from '../img/profilephoto.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import banner from '../img/bridge.png';
import FontIcon from 'material-ui/FontIcon';

export default class Home extends Component {

  render() {
    return (
      <div>
      <AppBar title="Jared Gee's Portfolio" showMenuIconButton={false}/>

      

      <Grid>
        <Row middle="xs">
          <Col md={12}>
            <Card style={{marginTop: "30px", marginLeft: "10px", marginRight: "10px", marginBottom: "30px"}}>
              <CardMedia>
                <img src={banner} alt="banner"/>
              </CardMedia>
            </Card>
          </Col>
        </Row>
        <Row middle="xs">
          <Col md={4}>
            <Card style={{marginTop: "10px", marginBottom: "10px", marginRight: "30px", marginLeft: "30px"}}>
            <CardTitle
              title="I am Jared Gee"
              subtitle="Full Stack Developer, Music Producer, Graphic Designer, Fitness Addict, Creation Fanatic"/>
            <CardActions style={{marginLeft: "auto", marginRight: "auto"}}>
              <RaisedButton
                style={{marginLeft: "5px", marginBottom: "10px"}}
                href="./Resume.pdf"
                target="_blank"
                label="Check Out My Resume"
                primary
              />
            </CardActions>
           </Card>
          </Col>


          <Col md={7}>
            <Card style={{marginTop: "10px", marginRight: "30px", marginLeft: "30px"}}>
              <CardHeader
                title={
                  <div>
                    About Me
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  I have a strong passion for creating things.
                  I always aim for effectiveness and visual appeal in my programs,
                  artwork, and side projects.
                </div>
              </CardText>
            </Card>

            <Card style={{marginRight: "30px", marginLeft: "30px"}}>
              <CardHeader
                title={
                  <div>
                    Academia
                    <GradHat />
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  I am currently pursuing a Bachelor's degree of Computer Science at the
                  University of Waterloo and a Bachelor's degree of Business Administration
                  at Wilfrid Laurier University through the joint Double degree program.
                </div>
              </CardText>
            </Card>

            <Card style={{marginRight: "30px", marginLeft: "30px"}}>
              <CardHeader
                title={
                  <div>
                    Projects
                    <DevMode style={{height: "20px", marginTop: "10px"}} />
                  </div>
                }
              />
              <CardText>
                <div style={{marginLeft: "15px"}}>
                  See my projects on GitHub and my music on YouTube.
                </div>
              </CardText>
              <CardActions style={{marginLeft: "auto", marginRight: "auto"}}>
              <RaisedButton
                style={{marginLeft: "5px", marginBottom: "10px"}}
                href="https://github.com/jayster55"
                target="_blank"
                label="GitHub"
                icon={<DeviceHub />}
                primary
              />
              <RaisedButton
                style={{marginLeft: "5px", marginBottom: "10px"}}
                href="https://www.youtube.com/channel/UCC8okc1rOMf5-8IH352QwKA"
                target="_blank"
                label="YouTube"
                icon={<PlayArrow />}
                primary
              />
            </CardActions>
            </Card>

            <Card style={{marginRight: "30px", marginLeft: "30px", marginBottom: "40px"}}>
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
                  I love producing music, editing videos, powerlifting, wakeboarding, alpine skiing,
                  and rugby.
                </div>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}