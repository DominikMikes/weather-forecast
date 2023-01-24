import React, { useContext, useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { WeatherContext } from "../../weather/components/weather";

export default function HourChart() {
    const [chartData, setChartData] = useState();
    const hourData = useContext(WeatherContext);
    useEffect(() => {
        let tempData = [];
        if (hourData) {
            hourData.forEach(hour => {
                let hourX = new Date(hour.dt * 1000).getHours();
                let tempY = Math.round(hour.main.temp);
                tempData.push({
                    name: hourX.toString() + ' H',
                    Temp: tempY,
                    hour: hourX.toString()
                });
            });
            setChartData(tempData);
        }
    }, [hourData]);

    return(
        <LineChart width={300} height={200} data={chartData} style={{marginLeft: '-3rem', fontSize: '1rem'}}>
            <Line type="monotone" dataKey="Temp" stroke="#ccc" strokeDasharray="5 10"/>
            <YAxis dataKey="Temp" stroke="#ccc" style={{opacity: .5, fontSize: '12px'}} strokeDasharray="0"/>
            <XAxis dataKey="name" stroke="#ccc" style={{opacity: .5, fontSize: '12px'}} strokeDasharray="0" />
            <Tooltip wrapperStyle={{ width: 100, color: '#333' }} />
        </LineChart>   
    );
}