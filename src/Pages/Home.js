import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Barbell from 'material-ui/svg-icons/places/fitness-center';
import GradHat from 'material-ui/svg-icons/social/school';
import Star from 'material-ui/svg-icons/action/stars';
import profile from '../img/profilephoto.jpg';
import RaisedButton from 'material-ui/RaisedButton';

export default class Home extends Component {

  render() {
    return (
      <Grid >
        <Row middle="xs">
          <Col md={5}>

           <Card style={{marginTop: "10px", marginBottom: "10px", marginRight: "30px", marginLeft: "30px"}}>
            <CardMedia>
              <img src={profile} alt="Profile"/>
            </CardMedia>
            <CardTitle
              title="I am Jared Gee"
              subtitle="Full Stack Developer, Self-Mastery Blogger, Graphic Designer, Web App Creator, Fitness Fanatic"/>
            <CardActions style={{marginLeft: "auto", marginRight: "auto"}}>
              <RaisedButton
                style={{marginLeft: "5px", marginBottom: "10px"}}
                href="./Resume.pdf"
                target="_blank"
                label="Check Out My Resume"
                secondary={true}
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
                  I have a passion for all things computer-related.
                  I continue to strive for success and visual appeal in my programs,
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
                    Scholarships & Awards
                    <Star style={{height: "20px", marginTop: "10px"}} />
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