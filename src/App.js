import React, { Component } from 'react';

import {Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, fetchDaily, fetchCountry } from './api/index'


class App extends Component {

    state = {
        data: {},
        daily: {},
        country: []
    }

    async componentDidMount() {
        const fetchedDaily = await fetchDaily();
        const fetchedData = await fetchData();
        const fetchedCountry = await fetchCountry();
        // console.log(fetchedCountry);
        this.setState({data: fetchedData, daily: fetchedDaily, country: fetchedCountry});
    }

    handleCountry(i) {
        console.log(i)
    }

    render() {
        const { data, daily, country } = this.state;
        // console.log(country);
        return (
                <div className={styles.container}>
                <Cards data={data} />
                <Charts dailyData={daily} />
                <CountryPicker country={country} handleCountry= {this.handleCountry}/>
                </div>
        );
    }
}

export default App;