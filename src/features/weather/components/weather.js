import React, { useEffect, useState, createContext } from "react";
import WeatherCard from "./weather-card";

import './weather.css';

export const WeatherContext = createContext();

export default function Weather() {
    const [weather, setWeather] = useState();
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('./dummyWeather20230123.json'); //dummyWeather20210512.json
            if (response.ok) {
                const data = await response.json();            
                setWeather(data);
            }
        };

        fetchData()
        .catch((err) => console.error(err));
    }, []);

    const getWeatherCards = () => {
        let dayData = [];
        let lastDate;

        weather.list.forEach(data => {
            const dayDate = new Date(data.dt * 1000);
            lastDate = (lastDate) ? lastDate : dayDate;

            if (dayDate.getDate() === lastDate.getDate()) {
                if (!dayData[dayDate.getDate().toString()]) {
                    dayData[dayDate.getDate().toString()] = [];
                }
                dayData[dayDate.getDate().toString()].push(data);
            }
            lastDate = dayDate;
        });
        return dayData.map((day) => {
            return (
                <WeatherContext.Provider value={day} key={day[0].dt}>
                    <WeatherCard></WeatherCard>
                </WeatherContext.Provider>
                );
        });        
    };

    return (
        <div className="weather-card-wrapper">
            {!weather
            ? <div>No weather data loaded.</div>
            : getWeatherCards()
            }            
        </div>
    );
}