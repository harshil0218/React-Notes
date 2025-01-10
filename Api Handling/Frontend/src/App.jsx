import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import  useDebounce from "./hooks/useDebounce";
/* To avoid multiple requests of change in UI. Follow these steps:
1. Create a AbortController
2. pass signal to the request
3. handle axios cancel error

Note :- learn about debouncing concept . AbortController used to handel race condition means
that from request 1,2,3 response of 3rd request is shown last so user will see UI of last request */
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 1000);
  useEffect(() => {
    // used to cancel the request
    const controller = new AbortController();

    // ()() -> this is Immediately Invoked Function Expression (IIFE)
    // ; before IIFE for safety purpose in case the code before this line doesn't end with a semicolon
    ;(async () => {
      try {
        // setError to false before making the request
        setError(false);
        // data is loading
        setLoading(true);
        const response = await axios.get("api/products?search=" + debouncedSearch, {
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        // data is loaded
        setLoading(false);
      } catch (error) {
        // if the request is cancelled, then don't set the error
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // cleanup function that cleans old request when a new request is made
    return () => {
      controller.abort();
    }
  }, [search]);

  // const [products,error,loading] = customReactQuery('api/productsl')
  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      <h1>Hello guys!!</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <h1>Something went wrong</h1>}
      {loading && <h1>Loading...</h1>}

      <h2>Number of proucts are: {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // ()() -> this is Immediately Invoked Function Expression (IIFE)
//     // ; before IIFE for safety purpose in case the code before this line doesn't end with a semicolon
//     (async () => {
//       try {
//         // setError to false before making the request
//         setError(false);
//         // data is loading
//         setLoading(true);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         // data is loaded
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [products, error, loading];
// }
