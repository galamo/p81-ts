import { useEffect, useState } from "react";
import { User } from "@serverTypes/lib";
import "./App.css";
// import CountryItem from "./ui-components/countryCard";

const u: User = { u: "s", n: "1" };
console.log(u);

import {
  Country,
  CountryCard,
  RegionsStrings,
} from "./ui-components/countryCard";
import { getCountries } from "./service/countries.service";

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
