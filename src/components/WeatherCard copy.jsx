import moment from 'moment';
import React from 'react';
import { Card, Feed } from 'semantic-ui-react';

const WeatherCard = ({ temperature, city, sunrise, sunset, humidity }) => (
  <Card>
    <Card.Content>
      <Card.Header className="weather-card-child">{city}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h5 className="weather-card-child">
              {moment().format('MMMM Do YYYY, h:mm a')}
            </h5>
            <div className="weather-card">
              <div className="weather-card-child">
                {Math.floor(temperature)} ℃
              </div>
              <div className="weather-card-child"> {humidity} %</div>
            </div>
            <div className="weather-card">
              <div className="weather-card-child">
                {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div className="weather-card-child">
                {new Date(sunset ? sunset * 1000 : '').toLocaleTimeString(
                  'en-IN'
                )}
              </div>
            </div>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
);

export default WeatherCard;
