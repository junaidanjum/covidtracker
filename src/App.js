import React, { Component } from 'react';

import {Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, fetchDaily } from './api/index'


class App extends Component {

    state = {
        data: {},
        daily: {}
    }

    async componentDidMount() {
        const fetchedDaily = await fetchDaily();
        const fetchedData = await fetchData();
    
        this.setState({data: fetchedData, daily: fetchedDaily});
    }

    render() {
        const { data, daily } = this.state;
        // console.log(typeof(daily));
        return (
                <div className={styles.container}>
                <Cards data={data} />
                <Charts dailyData={daily} />
                <CountryPicker/>
                </div>
        );
    }
}

export default App;