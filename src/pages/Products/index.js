import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import { ProductContext } from '../../contex/ProductsContext';

export const Index = ({
  history,
  loadProducts,
  deleteProductRequest,
  products: { loading, data: products, error },
}) => {
  // const { products, loading, error, loadProducts } = useContext(ProductContext);
  useEffect(() => {
    if (products.length <= 0) {
      loadProducts();
    }
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <div>
      <h1>Products Page</h1>
      <Button
        data-testid="btn-add-product"
        variant="contained"
        color="primary"
        onClick={() => history.push('addProduct')}
      >
        Add Product
      </Button>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Product Price</TableCell>
              <TableCell align="right">Manufacturer</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((x) => (
              <TableRow key={x.id}>
                <TableCell component="th" scope="row">
                  {x.productName}
                </TableCell>
                <TableCell align="right">{x.productPrice}</TableCell>
                <TableCell align="right">{x.manufacturer}</TableCell>
                <TableCell>
                  <div>
                    <IconButton
                      data-testid={`btn-edit-product-${x.id}`}
                      aria-label="edit"
                      onClick={() => {
                        history.push(`/updateProduct/${x.id}`);
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => deleteProductRequest(x.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Index.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loadProducts: PropTypes.func.isRequired,
  products: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        productPrice: PropTypes.number.isRequired,
        manufacturer: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    error: PropTypes.instanceOf(Error),
  }).isRequired,
  deleteProductRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  loadProducts: () => dispatch({ type: 'LOAD_PRODUCTS_REQUEST' }),
  deleteProductRequest: (payload) => dispatch({ type: 'DELETE_PRODUCT_REQUEST', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
