import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import thirtydayspend from './img/30dayspendlogo.png';
import litlist from './img/litlist.png';
import becometitanic from './img/logojpeg.jpg';
import github from './img/githublogo.png';


export default class Projects extends Component {

  render() {
    return (
      <Grid style={{marginTop: "30px", marginBottom: "30px"}}>
        <Row top="xs">
          <Col xs>
            <Card>
              <CardMedia >
                <img src={github} alt="github" style={{backgroundColor: "black"}}/>
              </CardMedia>
              <CardTitle title="Github" subtitle="All of my current and previous side-projects, including this website." />
              <CardActions>
                <FlatButton label="Check It Out" href="https://github.com/jayster55" />
              </CardActions>
            </Card>
          </Col>
          <Col xs >
            <Card>
              <CardMedia >
                <img src={thirtydayspend} alt="thirtydayspend"/>
              </CardMedia>
              <CardTitle title="The 30 Day Spend" subtitle="A web application that helps you track items you want to purchase and the value of your savings made from preventing impulse spending."/>
              <CardText>
                HTML/CSS, Javascript, Foundation, jQuery, Local Storage
              </CardText>
              <CardActions>
                <FlatButton label="Check It Out" href="http://the30dayspend.com" />
              </CardActions>
            </Card>
          </Col>
          <Col xs>
            <Card>
              <CardMedia >
                <img src={litlist} alt="litlist"/>
              </CardMedia>
              <CardTitle title="The Lit List" subtitle="The all-inclusive party app that takes real-time, crowdsource data to maximize your nightlife experience."/>
              <CardText>
                Fully developed business model and did market analysis for BDO New Venture Competition.
              </CardText>
            </Card>
          </Col>
          <Col xs>

            <Card>
              <CardMedia >
                <img src={becometitanic} alt="becometitanic"/>
              </CardMedia>
              <CardTitle title="Become Titanic" subtitle="My personal blog for helping others improve all aspects of their lives" />
              <CardText>
                WordPress, Photoshop, Illustrator, Word
              </CardText>
              <CardActions>
                <FlatButton label="Check It Out"  href="http://becometitanic.com"/>
              </CardActions>
            </Card>
          </Col>

        </Row>
      </Grid>
    );
  }
}