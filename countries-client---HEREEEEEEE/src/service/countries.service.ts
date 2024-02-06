import { Country } from "../ui-components/countryCard";

export async function getCountries(): Promise<Array<Country>> {
  const countries: Awaited<Response> = await fetch(
    "https://restcountries.com/v3.1/all"
  );
  const result = await countries.json();
  return result.filter(
    (item: Country) => !item.name.common.includes("Palestine")
  ) as Array<Country>;
}

async function itsNotAhookPromise(addMoreItems: boolean) {
  let value: Awaited<ReturnType<typeof getCountries>> = [];
  if (addMoreItems) {
    value.push({} as Country);
  } else {
    value.push({} as Country);
  }
  //   const arrayOfCountries: Awaited<ReturnType<typeof getCountries>> = [];
  //   const result: Awaited<ReturnType<typeof getCountries>> = await getCountries();
  //   console.log(result);
}
itsNotAhookPromise(true);
