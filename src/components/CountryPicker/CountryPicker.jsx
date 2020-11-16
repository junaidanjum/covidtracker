import React from 'react';

const CountryPicker = ({country, handleCountry}) => {
    console.log("Country", country);
    return (
        country.length ? 
        <div>
            {country.map((item) => {
                return (
                    <p onClick={handleCountry(item.name)}> {item.name} </p>
                )
            })}
        </div> : null
        
    );
};

export default CountryPicker;