import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [filterText, setFilterText] = useState("");

    const loadData = async () =>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        jsonData.splice(47, 1); //splice Israel!!
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
        <li className="visited-country" key={country}>{country}</li>
      ));

      const handleFilterTextChange = (event) => {
        setFilterText(event.target.value);
      }

      const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterText.toLowerCase())
      );
     
    
    return(
        <>
            <h1>Countries</h1>
            <form>
            <label>
                    Filter Countries: 
                    <input
                        type="text"
                        value={filterText}
                        onChange={handleFilterTextChange}
                    />
                </label>
            </form>
            {countries.length > 0 ? (
            <>
            <CountryList countries={filteredCountries} markAsVisited={markAsVisited} />
            <div className="visited-list">
                <h2>Visited Countries</h2>
                <ul>{visitedCountryList}</ul>
            </div>
            </>
        ) : ( 
             <p>loading...</p>
            )}
        </>
    );
        }
export default CountryContainer;