import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';

const fields = [
  {
    name: 'productName',
    label: 'Product Name',
    component: TextInput,
    validate: (value) => {
      let error;
      if (!value) {
        error = 'Required';
      }
      return error;
    },
    value: '',
  },
  {
    name: 'productPrice',
    label: 'Product Price',
    component: TextInput,
    validate: (value) => {
      let error;
      if (!value) {
        error = 'Required';
      }
      return error;
    },
    value: 0,
  },
  {
    name: 'manufacturer',
    label: 'Manufacturer',
    component: SelectInput,
    options: [
      {
        value: 'apple',
        text: 'Apple',
      },
      {
        value: 'samsung',
        text: 'Samsung',
      },
      {
        value: 'xiomi',
        text: 'Xiomi',
      },
    ],
    validate: (value) => {
      let error;
      if (!value) {
        error = 'Required';
      }
      return error;
    },
    value: '',
  },
];

export default fields;
