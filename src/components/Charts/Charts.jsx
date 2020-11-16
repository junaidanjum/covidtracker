
import React from 'react';
import { Line } from 'react-chartjs-2'

import styles from './Charts.module.css'
const Charts = ({dailyData}) => {
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
    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default Charts;