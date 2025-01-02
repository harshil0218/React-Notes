import { useState } from "react";
import InputBox from "./components/InputBox.jsx";
import useCurrencyInfo  from "./hooks/useCurrencyInfo.js";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);

  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [result, setResult] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  };

  const convert = () => {
    setResult(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/29102411/pexels-photo-29102411/free-photo-of-one-world-trade-center-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              // not reflect in url
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From"
                        amount = {amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>{
                          setAmount(amount)
                        }}
                        selectCurrency={from}
                        onAmountChnage={(amount)=>{
                          setAmount(amount)
                        }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap               
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"                   
                        amount = {result}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>{
                          setTo(currency)
                        }}
                        selectCurrency={to}
                        amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
