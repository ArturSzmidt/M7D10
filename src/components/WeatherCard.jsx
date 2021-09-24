import moment from 'moment';
import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from 'semantic-ui-react';

const kelvinToFarenheit = (k) => {
  return (k - 273.15).toFixed(2);
};

const WeatherCard = ({
  temperature,
  city,
  sunrise,
  sunset,
  humidity,
  data,
}) => (
  <>
    {/* <Header
      as="h3"
      content=""
      // style={style.h3}
      textAlign="center"
    /> */}
    <Grid celled container stackable>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment>
            <h1>{city}</h1>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <h1>{moment().format('MMMM Do YYYY, h:mm a')}</h1>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>
            <h3>{kelvinToFarenheit(temperature)} ℃</h3>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <h3>{data.current?.weather[0].description}</h3>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <h3>{humidity} %</h3>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment>
            <p>{new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <p>
              {new Date(sunset ? sunset * 1000 : '').toLocaleTimeString(
                'en-IN'
              )}
            </p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default WeatherCard;
