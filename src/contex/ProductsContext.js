import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import productsReducer, { initialState } from '../reducers/productsReducer';

export const ProductContext = createContext();

const ProductContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const loadProducts = async () => {
    dispatch({ type: 'LOAD_PRODUCTS_REQUEST' });
    try {
      const res = await fetch('http://localhost:3004/products');
      const data = await res.json();
      dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'LOAD_PRODUCTS_FAIL', payload: err });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        products: state.data,
        loadProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductContextWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProductContextWrapper;
