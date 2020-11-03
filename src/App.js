import React, { Component } from 'react';

import {Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import fetchData from './api/index'


class App extends Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
    
        this.setState({data: fetchedData});
    }

    render() {
        const { data } = this.state;
        return (
                <div className={styles.container}>
                <Cards data={data} />
                <Charts/>
                <CountryPicker/>
                </div>
        );
    }
}

export default App;