import React, { Component } from 'react';

import {Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, fetchDaily, fetchCountry, fetchContent } from './api/index'
import coronaImage from '../src/images/image.jpg'


class App extends Component {

    state = {
        data: {},
        daily: {},
        country: [],
        thiscountry: ''
    }

    async componentDidMount() {
        const fetchedDaily = await fetchDaily();
        const fetchedData = await fetchData();
        const fetchedCountry = await fetchCountry();
        fetchContent();
        // console.log(fetchedCountry);
        this.setState({data: fetchedData, daily: fetchedDaily, country: fetchedCountry});
    }

    handleCountry = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({data: fetchedData, thiscountry: country})
    }

    render() {
        const { data, daily, country, thiscountry } = this.state;
        console.log(this.state.thiscountry);
        return (
                <div className={styles.container}>
                <img src={coronaImage} alt='COVID-19' className={styles.image}/>
                Created by Zaahid Riyaz
                <Cards data={data} />
                <CountryPicker country={country} handleCountry={this.handleCountry}/>
                <Charts dailyData={daily} data={data} thiscountry={thiscountry}/>
                </div>
        );
    }
}

export default App;