import { useDeferredValue, useEffect, useMemo, useState } from "react";

export default function FilterDefferedValue() {
  const [input, setInput] = useState("");

  function handler({ target }: { target: HTMLInputElement }) {
    setInput(target.value);
  }
  return (
    <>
      <input type="text" value={input} onChange={handler} />
      <List input={input} />
    </>
  );
}

function List({ input }: { input: string }) {
  const size = 30000;
  const defferedInput = useDeferredValue(input);
  const list = useMemo(() => {
    const tempList = [];
    for (let index = 0; index < size; index++) {
      tempList.push(<div key={index}> {defferedInput} </div>);
    }
    return tempList;
  }, [defferedInput]);

  useEffect(() => {
    console.log(`input: ${input}, defferedInput: ${defferedInput}`);
  }, [input, defferedInput]);

  return <div>{list}</div>;
}
