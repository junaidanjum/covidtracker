
import React from 'react';
import { Line, Bar } from 'react-chartjs-2'

import styles from './Charts.module.css'
const Charts = ({dailyData, data, thiscountry}) => {
    // console.log(dailyData)
    const slicedArray = dailyData.length ? dailyData.slice(Math.max(dailyData.length - 100, 0)) : null
    
    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: slicedArray.map(({date}) => date),
                datasets: [{
                    data: slicedArray.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                }, 
                {
                    data: slicedArray.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: 'rgba(255,0,0,0.5',
                    fill: true
                }]
            }}
        />) : null
    )

    const BarChart = (data.confirmed) ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['blue', 'green', 'red'],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }} 
            options= {{
                legend: {display: false},
                title: {display: true, text: `Current Situation in ${thiscountry}`}

            }}
        
        />
    ) : null

    return (
        <div className={styles.container}>
            {!(thiscountry) ? lineChart : BarChart}
        </div>
    );
};

export default Charts;