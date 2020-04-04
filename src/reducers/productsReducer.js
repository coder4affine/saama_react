const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
    case 'ADD_PRODUCT_REQUEST':
    case 'UPDATE_PRODUCT_REQUEST':
    case 'DELETE_PRODUCT_REQUEST':
      return { ...state, loading: true };
    case 'LOAD_PRODUCTS_FAIL':
    case 'ADD_PRODUCT_FAIL':
    case 'UPDATE_PRODUCT_FAIL':
    case 'DELETE_PRODUCT_FAIL':
      return { ...state, loading: false, error: payload };

    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, loading: false, data: payload };

    case 'ADD_PRODUCT_SUCCESS':
      return { ...state, loading: false, data: [payload, ...state.data] };

    case 'UPDATE_PRODUCT_SUCCESS':
      return {
        ...state,
        loading: false,
        data: state.data.map((x) => {
          if (x.id === payload.id) {
            return payload;
          }
          return x;
        }),
      };

    case 'DELETE_PRODUCT_SUCCESS':
      return { ...state, loading: false, data: state.data.filter((x) => x.id !== payload) };

    default:
      return state;
  }
};
