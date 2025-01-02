import { useEffect,useState } from "react";

// custom hooks

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
    },[currency])  //it will call api when currency will change

    return data
}

export default useCurrencyInfo;  //we are returning function like useState()