import Country from "./Country"


const CountryList = ({countries, markAsVisited}) => {

    const mappedCountries = countries.map(country => {
        return <li>
            <Country country={country} key={country.id}/>
            <button className="mark-visited-button" onClick={() => markAsVisited(country.name.common)}>
              Mark as Visited
            </button>
            </li>
    })


    return(
        <>
            <ul>
                {mappedCountries}
            </ul>
            
        </>
    )
}


export default CountryList;