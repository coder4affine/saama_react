/* eslint-disable implicit-arrow-linebreak */
import { connect } from 'react-redux';
import AddProduct from './AddProduct';

const mapStateToProps = (state) => ({ products: state.products.data });

const mapDispatchToPros = (dispatch) => ({
  addProductRequest: (payload) =>
    dispatch({
      type: payload.id ? 'UPDATE_PRODUCT_REQUEST' : 'ADD_PRODUCT_REQUEST',
      payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToPros)(AddProduct);
