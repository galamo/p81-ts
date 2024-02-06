import { useEffect, useState, useTransition } from "react";
// import CountryItem from "./ui-components/countryCard";

import { getCountries } from "../../../service/countries.service";
import {
  Country,
  CountryCard,
  RegionsStrings,
} from "../../../ui-components/countryCard";

function CountriesPage() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    async function getData() {
      const result = await getCountries();
      setCountries([...result, ...result, ...result]);
    }
    getData();
  }, []);

  function handler({ target }: { target: HTMLInputElement }) {
    startTransition(() => {
      setInput(target.value);
    });
  }

  const filteredCountries = input
    ? countries.filter((c) =>
        c?.name?.common.toLowerCase().includes(input.toLowerCase())
      )
    : countries;
  return (
    <>
      <div>
        <input type="text" value={input} onChange={handler} />
      </div>
      <div style={{ height: "100px" }}>
        {isPending ? <h1>Loading....</h1> : <div></div>}
      </div>
      <div>
        {filteredCountries.map((item, index) => {
          return (
            <CountryCard
              key={item?.name?.common + index}
              region={item.region as Capitalize<RegionsStrings>}
              country={{
                name: {
                  common: item?.name?.common,
                  official: item?.name?.official,
                },
                region: "Asia",
                flag: item?.flags?.png,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default CountriesPage;
