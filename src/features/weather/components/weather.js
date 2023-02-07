import React, { useEffect, useState, createContext, useContext } from "react";
import { LocationContext, ThemeContext } from "../../../App";
import WeatherCard from "./weather-card";

import './weather.css';

export const WeatherContext = createContext();

export default function Weather() {
    const [weather, setWeather] = useState();
    const {theme} = useContext(ThemeContext);
    const {searchLocation} = useContext(LocationContext);
    useEffect(() => {
        const fetchData = async() => {
            let file = '';
            if (searchLocation.toLowerCase() === 'vienna') {
                file = './vienna20230207.json';
            } else {
                file = './dummyWeather20230123.json';
            }

            const response = await fetch(file);
            if (response.ok) {
                const data = await response.json();            
                setWeather(data);
            }
        };

        fetchData()
        .catch((err) => console.error(err));
    }, [searchLocation]);

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
                    <WeatherCard theme={theme} city={weather.city}></WeatherCard>
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