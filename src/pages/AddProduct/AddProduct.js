import React from 'react';
import Button from '@material-ui/core/Button';
import fields from './fields';

import Form from '../../components/Form';

const AddProduct = () => (
  <div>
    <h1>Add Product</h1>
    <Form
      fields={fields}
      onSubmit={(value) => {
        console.warn(value);
      }}
    >
      <Button variant="contained" color="primary" type="submit" onClick={() => {}}>
        Add Product
      </Button>
    </Form>
  </div>
);

export default AddProduct;
