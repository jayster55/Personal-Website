import React, { Component } from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import banner from './img/bridge.png';


export default class ImpossibleList extends Component {

  render() {
    return (
      <Card style={{marginTop: "30px", marginLeft: "30px", marginRight: "30px"}}>
        <CardMedia>
          <img src={banner} alt="banner"/>
        </CardMedia>
        <CardTitle title="The Impossible List" subtitle="THE SECRET OF GETTING AHEAD IS GETTING STARTED - MARK TWAIN" />
        <CardText>
          This is similar to a bucket list, but for active growth rather than passive encouragement. The following list is my ongoing checklist of goals that are important to me.
        </CardText>


        <CardTitle title="Recently Completed" />
        <CardText>
          <ul>
            <li> Ski Delirium Dive (Sunshine, AB) (Completed: February 19, 2017)</li>
            <li> Achieve 8% body fat (Completed: September 18, 2016) </li>
            <li> Bench Press 135lbs for 8 reps (Completed: August 5, 2016) </li>
            <li> Make something that helps people [The 30 Day Spend] (Completed: August 4, 2016)</li>
            <li> Do a backflip off of some platform into water (10ft+) (Completed: August 3, 2016)</li>
            <li> Learn to surf behind a boat with no rope (Completed: August 1, 2016)</li>
          </ul>
        </CardText>

        <CardTitle title="Fitness & Health Goals" />
        <CardText>
          <ul>
            <li> <strike>Achieve 8% body fat</strike> (Completed: September 18, 2016) </li>
            <li> <b>Hit all novice strength standards for my bodyweight (In Progress) </b></li>
            <li> <b>Run a 5K (under 30min)</b></li>
            <li> <b>Handstand Walk 10m</b></li>
            <li> <b>Complete a Bouldering Course</b></li>
            <li> <b>Achieve Lean Body Mass of 165lbs</b></li>
            <li> <b>Dunk a basketball</b></li>
            <li> <b>Break 11s in 100m dash</b></li>
            <li> <strike>Go gluten-free for a month</strike> (Completed: May 25, 2016)</li>
            <li> <b>Go fast-food-free for a month</b></li>
            <li> <strike>Take cold showers for a month</strike> (June 29, 2016)</li>
          </ul>
        </CardText>

        <CardTitle title="Professional Goals" />
        <CardText>
          <ul>
            <li><strike></strike>Work at a tech company (Completed: May 2, 2016)</li>
            <li><b>Work at a ‘Holy Trinity’ Company (Apple or Google or Facebook)</b></li>
            <li><strike></strike>Learn HTML and CSS (Completed: February 24, 2016)</li>
            <li><strike>Make this website</strike>(Completed: May 10, 2016)</li>
            <li><strike>Learn JavaScript</strike> (Completed: April 26, 2016)</li>
            <li><b>Learn AngularJS</b></li>
            <li><strike>Learn Git</strike> (Completed: May 4, 2016)</li>
            <li><strike>Learn Ruby</strike> (Completed: April 28, 2016)</li>
            <li><strike>Learn SQL</strike> (Completed: May 5, 2016)</li>
            <li><b>Learn basics of Java</b></li>
            <li><b>Learn basics of PHP</b></li>
            <li><b>Learn basics of Python</b></li>
            <li><b>Start a venture</b></li>
            <li><strike>Make something that helps people</strike> [The 30 Day Spend] (Completed: August 4, 2016)</li>
            <li><b>Start a social venture</b></li>
            <li><strike>Create an app/website</strike> (Completed: May 20, 2016)</li>
            <li><b>Create a monetizable app/website</b></li>
            <li><b>Create a monetizable app/website that is a charitable non-profit</b></li>
            <li><b>Be on a Board of Directors</b></li>
            <li><b>Be a Chairman of the Board</b></li>
            <li><b>Live and work in California</b></li>
          </ul>
        </CardText>


        <CardTitle title="Creative Goals" />
        <CardText>
          <ul>
            <li><b>Make a YouTube video that gets over 1 million views</b></li>
            <li><b>Make an electronic track </b></li>
            <li><b>Make an entire rap album </b></li>
            <li><b>Learn to DJ </b></li>
          </ul>
        </CardText>

        <CardTitle title="Skill Goals" />
        <CardText>
          <ul>
            <li><b>Become fluent in German</b></li>
            <li><b>Get all 416 Completion Badges in CodeAcademy (do every project, course, quiz, etc) (In Progress: 144/416)</b></li>
            <li><b>Become fluent in Spanish</b></li>
            <li><strike>Hit a 3 bullseyes in a row from 20m (Archery) </strike>(Completed: June 10, 2016)</li>
            <li><strike>Learn axe throwing</strike> (Completed: July 10, 2016)</li>
            <li><b>Light a fire without assistance (ie without matches, lighter, flint and steel)</b></li>
            <li><b>Learn salsa dancing</b></li>
            <li><b>Learn to do an airflair (Breakdancing)</b></li>
            <li><strike>Ski Delirium Dive (Sunshine, AB)</strike> (Completed: February 19, 2017) </li>
            <li><b>Learn Muay Thai and compete in a registered fight</b></li>
          </ul>
        </CardText>

        <CardTitle title="Fun/Insane Goals" />
        <CardText>
          <ul>
            <li><b>Bungee Jump</b></li>
            <li><b>Skydive</b></li>
            <li><b>Climb a mountain</b></li>
            <li><strike>Learn to surf behind a boat with no rope</strike> (Completed: August 1, 2016)</li>
            <li><b>Learn to sail</b></li>
            <li><strike>Do a backflip off of some platform into water (10ft+)</strike> (Completed: August 3, 2016)</li>
            <li><b>Do a backflip on Skis</b></li>
            <li><b>Do a backflip on flat ground</b></li>
          </ul>
        </CardText>

        <CardTitle title="Events to Attend" />
        <CardText>
          <ul>
            <li><b>St.Patrick’s Day in Dublin, Ireland</b></li>
            <li><b>Mardi Gras in New Orleans, USA</b></li>
            <li><b>Carnival de Nice in Nice, France</b></li>
            <li><b>Oktoberfest in Munich, Germany</b></li>
            <li><b>New Year’s Eve in NYC, USA</b></li>
            <li><b>New Year’s Eve in Dubai, UAE</b></li>
            <li><b>Spring Break in Punta Cana, Dominican Republic</b></li>
            <li><b>World Domination Summit in Portland, Oregon</b></li>
          </ul>
        </CardText>

        <CardTitle title="Travel Goals" />
        <CardText>
          <ul>
            <li><b>Visit UAE</b></li>
            <li><b>Visit Japan</b></li>
            <li><b>Visit China</b></li>
            <li><b>Visit Ireland</b></li>
            <li><b>Visit NYC</b></li>
            <li><b>Visit Mexico</b></li>
            <li><b>Visit 100 Countries (In Progress: 10/100)</b></li>
          </ul>
        </CardText>

        <CardTitle title="Life Goals" />
        <CardText>
          <ul>
            <li><b>Live to 90</b></li>
            <li><b>Graduate from uni</b></li>
            <li><b>Be very self-sufficient</b></li>
            <li><b>Be location independent</b></li>
            <li><b>Die in amazing shape</b></li>
          </ul>
        </CardText>
      </Card>


    );
  }
}