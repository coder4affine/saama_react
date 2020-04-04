/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import fields from './fields';

import Form from '../../components/Form';

const AddProduct = ({ addProductRequest, match, products }) => {
  const { id } = match?.params;
  const [initialValues, setInitialValues] = useState(undefined);
  useEffect(() => {
    if (id) {
      setInitialValues({ initialValues: products.find((x) => x.id === Number(id)) });
    }
  }, []);

  return (
    <div>
      <h1>{`${id ? 'Update' : 'Add'} Product`}</h1>
      <Form fields={fields} onSubmit={addProductRequest} enableReinitialize {...initialValues}>
        <Button variant="contained" color="primary" type="submit" onClick={() => {}}>
          {`${id ? 'Update' : 'Add'} Product`}
        </Button>
      </Form>
    </div>
  );
};

AddProduct.propTypes = {
  addProductRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  products: PropTypes.array.isRequired,
};

export default AddProduct;
