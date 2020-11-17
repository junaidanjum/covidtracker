import React from 'react';
import { FormControl, NativeSelect } from '@material-ui/core'

import styles from './CountryPicker.module.css'

const CountryPicker = ({country, handleCountry}) => {
    // console.log("Country", country);
    return (
        <FormControl className={styles.formcontrol}> 
            <NativeSelect onChange={(e)=> handleCountry(e.target.value)}>
                <option value=""> Global </option>
                {country.map(( country, i ) => <option value={country.name} key={i}> {country.name} </option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;