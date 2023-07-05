import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ALL_COUNTRIES } from "../config";
import List from "../components/List";
import Card from "../components/Card";
import Controls from "../components/Controls";

const HomePage = ({ countries, setCountries }) => {
    const [filtredCountry, setFiltredCountry] = useState(countries);
    const navigate = useNavigate();
    useEffect(() => {
        if (!countries.length)
        axios.get(ALL_COUNTRIES).then(
        ({data}) => setCountries(data)
        )
    }, []);
    useEffect(() => {
        handlelSearch();
    }, [countries]);
    const handlelSearch = (search, region) => {
        let data = [...countries];
        if (region) {
            data = data.filter(c => c.region.includes(region));
        }
        if (search){
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
        }
        setFiltredCountry(data);
    };
    return (
        <>
            <Controls onSearch={handlelSearch} />
            <List>
            {
                filtredCountry.map(c => {
                const countryInfo = {
                    img: c.flags.png,
                    name: c.name,
                    info: [
                    {
                        title: "Population",
                        description: c.population.toLocaleString()
                    },
                    {
                        title: "Region",
                        description: c.region
                    },
                    {
                        title: "Capital",
                        description: c.capital
                    }
                    ]
                };
                return (
                    <Card key={c.name} onClick={() => navigate(`/countries-frontend-mentor/country/${c.name}`)} {...countryInfo}/>
                )
                })
            }
            </List>
        </>
    );
}
 
export default HomePage;