import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios"


const AppContext = createContext();

const API = "http://localhost:3000/product";

const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
            console.log("Products:", data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);




    return <AppContext.Provider value= {{ myName:"anish mainali"}}>
        {children}
    </AppContext.Provider>
};


//custom hooks


const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider , AppContext, useProductContext } ; 