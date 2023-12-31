import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import json from "./settings.json";

console.log(json);

function App() {
  const [count, setCount] = useState();
  const [name, setName] = useState<string>("");
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLButtonElement>();

  function handler({ currentTarget }: FormEvent<HTMLInputElement>): void {
    console.log(currentTarget?.value);
    setName(currentTarget?.value);
  }

  async function getData2<T>(): Promise<T> {
    const d = await fetch("https://restcountries.com/v3.1/all");
    const r = await d.json();
    return r;
  }
  useEffect(() => {
    const element = document.querySelector<HTMLButtonElement>("#takeIt");
    console.log();
  }, []);
  useEffectSubscribe(getData2, setCountries, setCount, search);
  // useEffect(() => {
  //   let isSubscribed = true;
  //   console.log("use effect is running");
  //   async function getData() {
  //     try {
  //       const d = await fetch("https://restcountries.com/v3.1/all");
  //       const r = await d.json();
  //       if (isSubscribed) {
  //         setCountries(r);
  //       }
  //       console.log(r);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData();
  //   return () => {
  //     console.log("cleanup");
  //     isSubscribed = false;
  //     // console.log(isSubscribed);
  //   };
  // }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React {name}</h1>

      <input
        onChange={({ currentTarget }) => setSearch(currentTarget.value)}
        type="text"
      />
      <div className="card">
        <button
          id="takeIt"
          // onClick={() => {
          //   setCountries([]);
          //   setCount(count + 1);
          // }}
        >
          count is {count}
        </button>
        <p>{JSON.stringify(countries)}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

function useEffectSubscribe<K>(
  fn: <T, K>(args?: T) => Promise<K>,
  // setter: <T>(v: T) => never,
  setter: Dispatch<K>,
  setEerror: Dispatch<K>,
  dep: string
): void {
  // const [state, setState] = useState(item);
  useEffect(() => {
    let isSubscribed = true;

    async function asyncApiCall() {
      try {
        const result = await fn();
        if (isSubscribed) {
          setter(result as K);
        }
      } catch (ex) {
        setEerror("error" as K);
      }
    }
    asyncApiCall();
    return () => {
      isSubscribed = false;
    };
  }, [dep]);
}

type Config = {
  name: boolean;
  lastname: boolean;
};
type User = {
  name?: string;
  lastname?: string;
};
const a = getUser({ name: true, lastname: true });
declare function getUser(config: {
  name: true;
  lastname: false;
}): Pick<Required<User>, "name">;

declare function getUser(config: {
  name: false;
  lastname: true;
}): Pick<Required<User>, "lastname">;

declare function getUser(config: { name: false; lastname: false }): {};

declare function getUser(config: {
  name: true;
  lastname: true;
}): Required<User>;

// overloaded

type Widget = { item: string };
// function getWidget(input: string) {
//   if (typeof input === "string") {
//     return { item: "a" };
//   }
// }


declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

const result = getWidget()
// let x: Widget = getWidget(43);
// let arr: Widget[] = getWidget("all of them");



import { FormEvent, useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
type Widget = { item: string };

declare function getWidget(n: number): Widget;
declare function getWidget(s: string): Widget[];

import { getWidget } from "./lib";

// console.log(getWidget());
function Greeter(): JSX.Element {
  return <h1>aa</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("");
  const ref = useRef<HTMLButtonElement>(null);

  function handler({ currentTarget }: FormEvent<HTMLInputElement>): void {
    console.log(currentTarget?.value);
    setName(currentTarget?.value);
  }
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Greeter />
      </div>
      <h1>Vite + React {name}</h1>
      <input onChange={handler} type="text" />
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;


