import React, { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function HourChart({hourData}) {
    const [chartData, setChartData] = useState();
    useEffect(() => {
        let tempData = [];
        let showAll = (hourData.length <= 5);
        if (hourData) {
            hourData.forEach(hour => {
                let hourX = new Date(hour.dt * 1000).getHours();
                let tempY = Math.round(hour.temp);
                if (showAll || hourX % 5 === 0) {
                    tempData.push({
                        name: hourX.toString() + ' H',
                        Temp: tempY,
                        hour: hourX.toString()
                    });
                }
            });
            setChartData(tempData);
        }
    }, [hourData]);

    return(
        <LineChart width={300} height={200} data={chartData} style={{marginLeft: '-3rem', fontSize: '1rem'}}>
            <Line type="monotone" dataKey="Temp" stroke="#ccc" strokeDasharray="4 4"/>
            <YAxis dataKey="Temp" stroke="#ccc" style={{opacity: .2}} strokeDasharray="0"/>
            <XAxis dataKey="name" stroke="#ccc" style={{opacity: .2}} strokeDasharray="0" />
            <Tooltip wrapperStyle={{ width: 100, color: '#ccc' }} />
        </LineChart>   
    );
}