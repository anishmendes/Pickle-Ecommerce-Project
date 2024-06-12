// import { createContext, useContext, useEffect, useReducer, useState } from "react";
// // 
// import reducer from '../reducer/productReducer'

// const AppContext = createContext();

// const API = "http://localhost:3000/product";

// const initialState = {
//     isLoading: false,
//     isError: false,
//     products:[],
//     featureProducts:[],
// }

// const AppProvider = ({ children }) => {
    
//     const [state, dispatch] = useReducer(reducer, initialState);


//     const [products, setProducts] = useState([]);

//     const getProducts = async () => {
          
//         dispatch({type: "SET_LOADING"});
        
//         try {
//             const response = await fetch(API);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch products');
//             }
//             const data = await response.json();
//             setProducts(data);
//             console.log("Products:", data);
//             dispatch({type:"SET_API_DATA", payload:data});



//         } catch (error) {
//            dispatch({ type: "API_ERROR" });
//         }
//     };

//     useEffect(() => {
//         getProducts();
//     }, []);




//     return <AppContext.Provider value= {{ ...state }}>
//         {children}
//     </AppContext.Provider>
// };





import {createContext , useContext, useEffect} from "react";

import axios from "axios"

const AppContext = createContext();

const API = "http://localhost:3000/product";

const AppProvider = ({ children }) =>{


    const getProducts = async (url) => {
     const res = await axios.get(url);
     const products = await res.data;
     console.log(products);
    }

    useEffect( () => {
      getProducts(API);
}, []);

 return <AppContext.Provider value={{myName:"anish mainali"}}>
    {children}
    </AppContext.Provider>

} 



//custom hooks


const useProductContext = () => {
    return useContext(AppContext);
};


export { AppProvider, AppContext, useProductContext };