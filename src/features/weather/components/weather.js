import React, { useEffect, useState } from "react";
import WeatherCard from "./weather-card";

import './weather.css';

export default function Weather() {
    const [weather, setWeather] = useState();
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('./dummyWeather20210512.json');
            if (response.ok) {
                const data = await response.json();            
                setWeather(data);
            }
        };

        fetchData()
        .catch((err) => console.error(err));
    }, []);

    const getWeatherCards = (day, idx) => {
        let hourData = [];
        const dayDate = new Date(day.dt * 1000);

        weather.hourly.forEach(hour => {
            const hourDate = new Date(hour.dt * 1000);
            if (dayDate.getDate() === hourDate.getDate()) {
                hourData.push(hour);
            }
        });        
        return <WeatherCard key={idx} dayData={day} hourData={hourData}></WeatherCard>;
    };

    return (
        <div className="weather-card-wrapper">
            {!weather
            ? <div>No weather data loaded.</div>
            : weather.daily.map((day, idx) => {
                return getWeatherCards(day, idx);
            })}            
        </div>
    );
}

// export default class Weather extends React.Component<MyProps, MyState> {
//     dailyWeatherCards: any
//     // constructor(props: any) {
//     //     super(props);        
//     // }
//     async componentDidMount() {
//         const response = await fetch('./dummyWeather20210512.json');
//         if (response.ok) {
//             const data = await response.json();            
//             this.setState({ weather: data });
//         }
//     }
//     renderDailyWeatherCards() {
//         if (this.state && this.state.weather) {
//             return this.state.weather.daily.map((day, idx) => {
//                 let hourData: WeatherApi.Hourly[] = [];
//                 const dayDate = new Date(day.dt * 1000);

//                 this.state.weather.hourly.forEach(hour => {
//                     const hourDate = new Date(hour.dt * 1000);
//                     if (dayDate.getDate() === hourDate.getDate()) {
//                         hourData.push(hour);
//                     }
//                 });
                
//                 return <WeatherCard key={idx} dayData={day} hourData={hourData}></WeatherCard>
//             });
//         } else {
//             return <div>No weather data loaded.</div>;
//         }        
//     }
//     render() {
//         this.dailyWeatherCards = this.renderDailyWeatherCards();
//         return (
//             <div className="weather-card-wrapper">
//                 {this.dailyWeatherCards}
//             </div>
//         );
//     }
// }