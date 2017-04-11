import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid';
import thirtydayspend from '../img/30dayspendlogo.png';
import litlist from '../img/litlist.png';
import becometitanic from '../img/logojpeg.jpg';
import github from '../img/githublogo.png';


export default class Projects extends Component {

  render() {
    return (
      <Grid>
        <Row middle="xs">
          <Col xs>
            <Card style={{marginTop: "40px", marginBottom: "40px", marginRight: "40px", marginLeft: "40px"}}>
              <CardMedia >
                <img src={github} alt="github" style={{backgroundColor: "black"}}/>
              </CardMedia>
              <CardTitle title="Github" subtitle="All of my current and previous side-projects, including this website." />
              <CardActions>
                <FlatButton label="Check It Out" href="https://github.com/jayster55" />
              </CardActions>
            </Card>
          </Col>


          <Col xs>
            <Card style={{marginTop: "40px", marginBottom: "40px", marginRight: "40px", marginLeft: "40px"}}>
              <CardMedia >
                <img src={becometitanic} alt="becometitanic"/>
              </CardMedia>
              <CardTitle title="Become Titanic" subtitle="My personal blog for helping others improve all aspects of their lives" />
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