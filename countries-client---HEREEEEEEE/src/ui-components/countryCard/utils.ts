import { Country } from ".";
import { RegionsStrings } from ".";
export function calcCountriesPopulation() {
  return 1;
}

type Attr = {
  [key: string]: string;
};

type FunctionResponse = Record<RegionsStrings, { population: number }>;

function calcRegionsPopulation(countries: Array<Country>): FunctionResponse {
  console.log(countries);
  //   countries.reduce((acc: FunctionResponse, currentCountry: Country) => {
  //     console.log(acc, currentCountry);
  //   }, {});
  return {
    asia: { population: 10 },
    africa: { population: 10 },
    europe: { population: 10 },
    america: { population: 10 },
  };
}

console.log(calcRegionsPopulation([]));
