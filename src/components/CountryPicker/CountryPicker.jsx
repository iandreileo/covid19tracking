import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const countriesList = await fetchCountries();
            setCountries(countriesList);
        }
        fetchData();
    },[setCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((country, i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;