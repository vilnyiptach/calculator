import React from "react";
export default function App() {
  const [result, setResult] = React.useState(0);

  function adding() {
    setResult(prevResult => prevResult + 1);
  }
  function substract() {
    setResult(prevResult => prevResult - 1);
  }
  function division() {
    setResult(prevResult => prevResult / 2);
  }

  function multiplier() {
    setResult(prevResult => prevResult * 2);
  }

  function step() {
    setResult(
      prevResult => prevResult * prevResult
    );
  }
  function reset() {
    setResult(() => 0);
  }
  return (
    <div>
      <div className="w-60 h-80 bg-blue-200 m-10 rounded-xl shadow-md	relative">
        <div className="monitor w-52 h-20 bg-yellow-200 m-4 rounded-xl absolute t-0 font-extrabold text-6xl flex justify-end p-1 shadow-2xl">
          {result}
        </div>
        <div className="buttons absolute border-2 border-black w-52 h-48 top-28 left-4 flex flex-wrap p-3 rounded-xl">
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5 rounded-tl-xl"
            onClick={adding}
          >
            +
          </button>
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5 "
            onClick={substract}
          >
            -
          </button>
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5 rounded-tr-xl "
            onClick={division}
          >
            /2
          </button>
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5"
            onClick={multiplier}
          >
            *2
          </button>
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5"
            onClick={step}
          >
            **2
          </button>
          <button
            className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5"
            onClick={reset}
          >
            C
          </button>
          <button className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5 rounded-bl-xl">
            1
          </button>
          <button className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5">
            2
          </button>
          <button className="  border-2 border-black h-25 w-14 font-extrabold font-6xl m-0.5 rounded-br-xl">
            3
          </button>
        </div>
      </div>
    </div>
  );
}


