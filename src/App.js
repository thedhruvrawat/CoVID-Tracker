import React from 'react';

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css';
import { fetchData } from './api';

import corona from './images/corona.png'

export default class App extends React.Component {
    state = {
        data: {},
        country: ''
    }


    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData});
        // console.log(data);
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
    }

    render() {
        const { data, country } = this.state;


        return (
            <div className={styles.container}>
                <img className={styles.image} src={corona} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
