/* import axios from 'axios' */
import React, { useContext, useEffect, useReducer } from 'react'
import products_reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import axios from 'axios';

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading:false,
  single_product_error:false,
  single_product:[],
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {

  const [state,dispatch] = useReducer(products_reducer,initialState)


  const openSidebar = () => {
    dispatch({type: SIDEBAR_OPEN})
  }

   const closeSidebar = () => {
    dispatch({type: SIDEBAR_CLOSE})
  }

  const FetchProduct = async(url) => {
    dispatch({type:GET_PRODUCTS_BEGIN})

    try {
      const response = await axios.get(url)
      const products = response.data
      dispatch({type:GET_PRODUCTS_SUCCESS,payload:products})
    } catch (error) {
      dispatch({type:GET_PRODUCTS_ERROR})
    }
  }

  const FetchSingleProduct = async(url) => {
    dispatch({type:GET_SINGLE_PRODUCT_BEGIN})

    try {
      const response = await axios.get(url)
      const singleProduct = response.data;
      dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct})
      
    } catch (error) {
      dispatch({type:GET_SINGLE_PRODUCT_ERROR})
    }
  }

useEffect(() => {
 FetchProduct(url)
}, [])

  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,FetchSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}