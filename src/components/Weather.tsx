import React, { FC } from "react";
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const fahrenheit = Math.round((data.main.temp * 1.8 - 459.67));
  const celsius = Math.round((data.main.temp - 273.15));

  return (
    <section className="section forecast-section">
      <div className="container">
        <h1 style={{marginBottom: '50px', color: 'rgb(158, 238, 238)', textAlign: 'center'}}>{data.name} - {data.sys.country} <span>{`(${new Date().toLocaleTimeString()})`}</span></h1>
        <div className="level">
          <div className="level-item">
            <div>
              <p className="heading block-title">{data.weather[0].description}</p>
              <img className="level-item__img" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" width='75px' height='75px' />
            </div>
          </div>

          <div className="level-item">
          <div className="">
          <p className="heading block-title">temperature</p>
            <div>
              <p className="description">{fahrenheit}<sup>&#8457;</sup></p>
              <p className="description">{celsius}<sup>&#8451;</sup></p>
            </div>
            </div>
          </div>

          <div className="level-item">
            <div>
              <p className="heading block-title">Humidity</p>
              <p className="description">{data.main.humidity}%</p>
            </div>
          </div>
          <div className="level-item">
          <div className="">
            <p className="heading block-title">Pressure</p>
            <p className="description">{data.main.pressure}mb</p>
          </div>
          </div>
          <div className="level-item">
          <div className="">
            <p className="heading block-title">Wind</p>
            <p className="description">{data.wind.speed} m/s</p>
          </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Weather;
