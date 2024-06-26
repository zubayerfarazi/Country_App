import React from 'react';

const Countries = (props) => {
    const {name, population, region, flag} = props.country;
    const countryStyle={
        border: '1px solid black',
        margin: '10px',
        padding: '10px'
    }

    return (
        <div style={countryStyle}>
            <h3> {name}</h3>
            <img style={{ height:'50px'}} src={flag} alt="" />
            <p>Population: {population}</p>
            <small>Region: {region}</small> <br />
            <button onClick={()=>{props.handleAddClicked(props.country)}}>add country</button>
        </div>
    );
};

export default Countries;