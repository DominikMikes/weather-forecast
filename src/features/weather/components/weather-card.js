import React from "react";
import { HourChart } from "../../charts/index";

import './weather-card.css';

const iconSet = new Map();
iconSet.set("01d", "☀️");
iconSet.set("02d", "⛅");
iconSet.set("03d", "☁️");
iconSet.set("04d", "☁️");
iconSet.set("09d", "🌧️");
iconSet.set("10d", "🌦️");
iconSet.set("11d", "⛈️");
iconSet.set("13d", "❄️");
iconSet.set("50d", "🌫️");

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
                        <span className="main-temp">{roundDegree(dayData.temp.day)}°</span>
                    </div>
                </div>
                <div className="min-max">
                    {roundDegree(dayData.temp.min)}°C<br />
                    <hr />
                    {roundDegree(dayData.temp.max)}°C<br />
                </div>
            </div>
            <div className="weather-card-footer">
                <div>
                    <div>🌄 {roundDegree(dayData.temp.morn)}°</div>
                    <div className="sub-text">Morning</div>
                </div>
                <div>
                    <div>🌅 {roundDegree(dayData.temp.eve)}°</div>
                    <div className="sub-text">Evening</div>
                </div>
                <div>
                    <div>🌙 {roundDegree(dayData.temp.night)}°</div>
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

// export default class WeatherCard extends React.Component<MyProps, MyState> {
// 	data: WeatherApi.Daily
// 	constructor(props: any) {
// 		super(props);
// 		this.data = this.props.dayData;
// 		iconSet.set("01d", "☀️");
// 		iconSet.set("02d", "⛅");
// 		iconSet.set("03d", "☁️");
// 		iconSet.set("04d", "☁️");
// 		iconSet.set("09d", "🌧️");
// 		iconSet.set("10d", "🌦️");
// 		iconSet.set("11d", "⛈️");
// 		iconSet.set("13d", "❄️");
// 		iconSet.set("50d", "🌫️");
// 	}
// 	getWeatherIcon(id: string) {
// 		let icon;
// 		if (iconSet.get(id)) {
// 			icon = iconSet.get(id);
// 		}
// 		return icon;
// 	}
// 	getDate(timeStamp: number) {
// 		const date = new Date(timeStamp * 1000);
// 		var options = {
// 			weekday: "short",
// 			hour: "numeric",
// 			minute: "numeric"
// 		} as const;

// 		return date.toLocaleString("en-US", options);
// 	}
// 	roundDegree(degree: number) {
// 		return Math.round(degree);
// 	}
// 	render() {
// 		return (
// 			<div className="weather-card container">
// 				<div className="weather-card-header">
// 					<div></div>
// 					<div>
// 						Vienna<br />
// 						<span className="time-line">{this.getDate(this.data.dt)}</span>
// 					</div>
// 					<div></div>
// 				</div>
// 				<div className="weather-card-sub-header">
// 					{this.getWeatherIcon(this.data.weather[0].icon)}
// 					{this.data.weather[0].main}
// 				</div>
// 				<div className="weather-card-content">
// 					<div>
// 						<div>
// 							<span className="main-temp">{this.roundDegree(this.data.temp.day)}°</span>
// 						</div>
// 					</div>
// 					<div className="min-max">
// 						{this.roundDegree(this.data.temp.min)}°C<br />
// 						<hr />
// 						{this.roundDegree(this.data.temp.max)}°C<br />
// 					</div>
// 				</div>
// 				<div className="weather-card-footer">
// 					<div>
// 						<div>🌄 {this.roundDegree(this.data.temp.morn)}°</div>
// 						<div className="sub-text">Morning</div>
// 					</div>
// 					<div>
// 						<div>🌅 {this.roundDegree(this.data.temp.eve)}°</div>
// 						<div className="sub-text">Evening</div>
// 					</div>
// 					<div>
// 						<div>🌙 {this.roundDegree(this.data.temp.night)}°</div>
// 						<div className="sub-text">Night</div>
// 					</div>
// 				</div>
// 				<div className="weather-card-footer">
// 					{/* {this.props.hourData.length > 0 && */}
// 						<HourChart hourData={this.props.hourData}></HourChart>
// 					{/* } */}
// 				</div>
// 			</div>
// 		);
// 	}
// }