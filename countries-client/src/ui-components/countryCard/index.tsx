export { calcCountriesPopulation } from "./utils";
import countryJson from "./c.json";
import style from "./index.module.css";
const singleCountry = countryJson[0];
export type Country = typeof singleCountry;
// type CountryProps = Partial<Country>;

type CountryName = Partial<
  Omit<Country, "name"> & {
    name: CountryNamePick;
  }
>;

type CountryNamePick = Pick<Country["name"], "official" | "common">;

// type CountryNamePickNested = Pick<Country, "name">;
// type CountryNamePickedNestedName = Pick<
//   CountryNamePickNested,
//   "official" | "common"
// >;
//  validate nested pick

export type RegionsStrings = "asia" | "africa" | "europe" | "america";

type ResionsUI = Capitalize<RegionsStrings>;

type CountryProps = Partial<CountryName>;

const cName: CountryName = {
  name: { official: "", common: "" },
};

console.log(cName);

export function CountryCard(props: {
  country: CountryProps;
  region: ResionsUI;
}) {
  const { country } = props;
  return (
    <div className={style.country}>
      <h1>{country.name?.common} </h1>
      <h2>{country.region} </h2>
      <img src={country.flag} height={100} width={100} />
    </div>
  );
}
