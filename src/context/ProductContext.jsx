import {createContext, useContext} from "react"

export const ProductContext = createContext();

export const ProvideProductContext = ({children}) => {
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const consumeProduct = () => 
    { 
        return useContext(ProductContext)
    }