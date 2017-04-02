import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';



export default class TechnicalExpertise extends Component {

  render() {
    return (
      <div>
        <Grid style={{marginTop: "30px", marginBottom: "30px"}}>
          <Row middle="xs">
            <Col xs>
             <Card>
              <CardTitle 
                title="Front-End" />
              <CardText>
                HTML/CSS, jQuery, Javascript, React + Redux
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Back-End" />
              <CardText>
                Perl (Catalyst Framework, DBIx, TT2), Node.js, Express.js
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Databases" />
              <CardText>
                MongoDB, Postgres, SQL
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Mobile" />
              <CardText>
                React Native, Xcode
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Additional Languages" />
              <CardText>
                C, C++, Scheme, Bash Scripting
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Libraries/Frameworks" />
              <CardText>
                Victory (Formidable), Moment.js, Material UI, React MD, lodash, Native Base
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Technologies" />
              <CardText>
                Git, Github, Emacs, SourceTree, Firebase, GitKraken
              </CardText>
            </Card>

            <Card>
              <CardTitle 
                title="Design" />
              <CardText>
                Photoshop & Illustrator, Sony Vegas Pro, Microsoft Office, Logic Pro X, Adobe Audition
              </CardText>
            </Card>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}
