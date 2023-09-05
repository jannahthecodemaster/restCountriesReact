
const Country = ({country}) => {

    return(
        <>
            <ul>
            <h2 className="country-title">{country.name.common}</h2>
            <p>
                {country.capital}
                {country.flag}
                {country.continent}
            </p>
            </ul>
    
        </>
    )
}
export default Country;