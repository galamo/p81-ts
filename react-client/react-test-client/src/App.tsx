import { FormEvent, useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

