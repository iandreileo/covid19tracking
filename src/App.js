import React, { useEffect, useState } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import {fetchData, fetchDataByCountry} from './api';
import { Typography } from '@material-ui/core';

const App = () => {

    const [data, setData] = useState('');
    const [country, setCountry] = useState('');
    
    const fetchApp = async () => {
        const fetchedData = await fetchData();

        setData(fetchedData);
    }

    const handleCountryChange = async (country) => {
        // console.log(country);
        //set country
        setCountry(country);
        setData(await fetchDataByCountry(country));
        //fetch data by country
        
    }

    useEffect(() => {
        fetchApp();
    }, [])

    return (
        <div className={styles.container}>
            <Typography className={styles.title}>
                COVID19 Tracking App by Ilie Andrei-Leonard
            </Typography>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country} />
        </div>
    );
}

export default App;