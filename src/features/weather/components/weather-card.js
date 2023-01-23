import React from "react";
import { HourChart } from "../../charts/index";

import './weather-card.css';

const iconSet = new Map();
iconSet.set("01d", "☀️");
iconSet.set("01n", "☀️");
iconSet.set("02d", "⛅");
iconSet.set("02n", "⛅");
iconSet.set("03d", "☁️");
iconSet.set("03n", "☁️");
iconSet.set("04d", "☁️");
iconSet.set("04n", "☁️");
iconSet.set("09d", "🌧️");
iconSet.set("09n", "🌧️");
iconSet.set("10d", "🌦️");
iconSet.set("10n", "🌦️");
iconSet.set("11d", "⛈️");
iconSet.set("11n", "⛈️");
iconSet.set("13d", "❄️");
iconSet.set("13n", "❄️");
iconSet.set("50d", "🌫️");
iconSet.set("50n", "🌫️");

// util functions
const getDate = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const options = {
        weekday: "short",
        hour: "numeric",
        minute: "numeric"
    };

    return date.toLocaleString("en-US", options);
}

const roundDegree = (degree) => {
    return Math.round(degree);
}

export default function WeatherCard({dayData, hourData}) {
    const getWeatherIcon = (id) => {
        let icon;
        if (iconSet.get(id)) {
            icon = iconSet.get(id);
        }
        return icon;
    }

    return (
        <div className="weather-card container">
            <div className="weather-card-header">
                <div></div>
                <div>
                    Vienna<br />
                    <span className="time-line">{getDate(dayData.dt)}</span>
                </div>
                <div></div>
            </div>
            <div className="weather-card-sub-header">
                {getWeatherIcon(dayData.weather[0].icon)}
                {dayData.weather[0].main}
            </div>
            <div className="weather-card-content">
                <div>
                    <div>
                        <span className="main-temp">{roundDegree(dayData.main.temp)}°</span>
                    </div>
                </div>
                <div className="min-max">
                    {roundDegree(dayData.main.temp_min)}°C<br />
                    <hr />
                    {roundDegree(dayData.main.temp_max)}°C<br />
                </div>
            </div>
            <div className="weather-card-footer">
                <div>
                    <div>🌄 {0}°</div>
                    <div className="sub-text">Morning</div>
                </div>
                <div>
                    <div>🌅 {0}°</div>
                    <div className="sub-text">Evening</div>
                </div>
                <div>
                    <div>🌙 {0}°</div>
                    <div className="sub-text">Night</div>
                </div>
            </div>
            <div className="weather-card-footer">
                {hourData.length > 0 &&
                    <HourChart hourData={hourData}></HourChart>
                }
            </div>
        </div>       
    );
}