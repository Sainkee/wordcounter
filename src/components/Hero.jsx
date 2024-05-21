import React from "react";
import { toast } from "react-toastify";
import { useReducer } from "react";

const initial = {
  str: "",
  char: 0,
  word: 0,
  readings: 0,
};

const calReadings = (word) => {
  const readpermin = 200;
  const readings = Math.ceil(word / readpermin);
  return readings;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TEXT_INPUT":
      const words =
        action.payload.trim() === ""
          ? 0
          : action.payload.trim().split(/\s+/).length;
      return {
        ...state,
        str: action.payload,
        char: action.payload.length,
        word: words,
        readings: calReadings(words),
      };
    case "UPPER_CASE":
      return { ...state, str: state.str.toUpperCase() };
    case "LOWER_CASE":
      return { ...state, str: state.str.toLowerCase() };
    case "CLEAR_TEXT":
      return { ...initial };
    case "REMOVE_SPACE":
      return { ...state, str: state.str.replace(/\s+/g, " ").trim() };
    default:
      return state;
  }
};

export default function Hero() {
  const [state, dispatch] = useReducer(reducer, initial);

  const handleButtonClick = (type) => {
    dispatch({ type });
  };

  const handleCopy = () => {
    if (state.str !== "") {
      navigator.clipboard.writeText(state.str);
      toast.success("Copied to clipboard!", { theme: "colored" });
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-semibold mt-[10rem] text-center text-white">
        TextUtils - Word Counter, Character Counter, Remove Extra Space
      </h1>
      <div className="w-[90%] mx-auto">
        <div className="flex justify-center text-white flex-col mx-auto w-full my-10">
          <label htmlFor="textArea" className="text-white my-3 text-xl">
            Enter Your Text Here:
          </label>
          <textarea
            onChange={(e) =>
              dispatch({ type: "TEXT_INPUT", payload: e.target.value })
            }
            value={state.str}
            id="textArea"
            rows="7"
            className="bg-[#3A3B3C] p-5 w-full text-white"
          ></textarea>
        </div>
        <div className="flex flex-wrap text-white text-sm capitalize font-medium gap-5">
          <span
            onClick={() => handleButtonClick("UPPER_CASE")}
            className="cursor-pointer rounded-sm px-4 py-2 bg-blue-600"
          >
            convert uppercase
          </span>
          <span
            onClick={() => handleButtonClick("LOWER_CASE")}
            className="cursor-pointer rounded-sm bg-white px-4 py-2 text-black"
          >
            convert lowercase
          </span>
          <span
            onClick={() => handleButtonClick("CLEAR_TEXT")}
            className="cursor-pointer rounded-sm px-4 py-2 bg-red-500"
          >
            clear text
          </span>
          <span
            onClick={handleCopy}
            className="cursor-pointer rounded-sm px-4 py-2 bg-green-500"
          >
            copy to clipboard
          </span>
          <span
            onClick={() => handleButtonClick("REMOVE_SPACE")}
            className="cursor-pointer rounded-sm bg-gray-500 px-4 py-2"
          >
            remove extra spaces
          </span>
        </div>
        <div className="flex flex-col gap-5 my-5 text-white">
          <p className="text-3xl text-white selection:bg-pink-600 font-bold">
            Summary Of Your Text
          </p>
          <p>Number of words: {state.word}</p>
          <p>Number of characters: {state.char}</p>
          <p>Reading time: {state.readings} minute(s)</p>
        </div>
        <h2 className="text-center text-4xl text-white">Preview Document</h2>
        <textarea
          value={state.str}
          readOnly
          rows={3}
          className="w-full my-2 p-5 text-white bg-[#3A3B3C]"
        ></textarea>
      </div>
    </div>
  );
}
