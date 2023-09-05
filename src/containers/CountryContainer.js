import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const loadData = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
       loadData();
    },[]);

    const markAsVisited = (countryName) => {
        if (!visitedCountries.includes(countryName)) {
          setVisitedCountries([...visitedCountries, countryName]);
        }
      };
    
      const visitedCountryList = visitedCountries.map((country) => (
        <li key={country}>{country}</li>
      ));
    
    
    return(
        <>
            <h1>Countries</h1>
            {countries.length > 0 ? (
            <>
            <CountryList countries={countries} markAsVisited={markAsVisited} />
            <div>
                <h2>Visited Countries</h2>
                <ul>{visitedCountryList}</ul>
            </div>
            </>
        ) : ( 
             <p>loading...</p>
            )}
        </>
    );
};
export default CountryContainer;