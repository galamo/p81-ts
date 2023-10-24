import { useEffect, useState } from "react";
import "./App.css";
// import CountryItem from "./ui-components/countryCard";
import {
  Country,
  CountryCard,
  RegionsStrings,
} from "./ui-components/countryCard";
import { getCountries } from "./service/countries.service";

async function getApplicationData() {
  return 1;
}

const result = await getApplicationData();
console.log(result);

function App() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  useEffect(() => {
    async function getData() {
      const result = await getCountries();
      setCountries(result);
    }
    getData();
  }, []);

  return (
    <>
      <div>
        {countries.map((item) => {
          return (
            <CountryCard
              region={item.region as Capitalize<RegionsStrings>}
              country={{
                name: {
                  common: item?.name?.common,
                  official: item?.name?.official,
                },
                region: "Asia",
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
