import { useId } from "react";

function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChnage,
    currencyOptions=[],      // default empty so app will not crash
    selectCurrency="usd",   // default
    amountDisable=false,    // user can change amount
    currencyDisable=false,  // user can change currency
    className = ""  //default classname will be empty
}) {
   
    // useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    // we will bind it with label and input id used for optimization.
    const amountInputId = useId()

    return (
        // user can modify css
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                        // added unique id from useId()
                        htmlFor={amountInputId}
                >
                    {label}
                </label>
                <input
                    // added unique id from useId()
                    id ={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // setting on change if function will not load then it will call after && function value
                    // we have type casted e.target.value because somtimes it gives string
                    onChange={(e)=>onAmountChnage && onAmountChnage(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
            
        </div>
    );
}

export default InputBox; // we use index.js for large project to export 
// For key we use unique values. If database is connected then we use id,
// keys are for optimization specially used in loops