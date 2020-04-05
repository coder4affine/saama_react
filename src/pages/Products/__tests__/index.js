import 'isomorphic-fetch';
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import customHistory from '../../../history';
import configureStore from '../../../configureStore';
import Products from '../index';

const mockPush = jest.fn();

const mockHistory = {
  push: mockPush,
};

const renderWithRedux = (component, { store = configureStore } = {}) => ({
  ...render(
    <Provider store={store}>
      <Router history={customHistory}>{component}</Router>
    </Provider>,
  ),
  store,
});

describe('Products Component', () => {
  let mockAPI;
  beforeEach(() => {
    const mockSuccessResponse = [
      {
        id: 1,
        productName: 'iphone',
        productPrice: 70000,
        manufacturer: 'Apple',
      },
    ];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    mockAPI = jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
  });

  afterEach(() => {
    mockPush.mockClear();
  });

  test('should render products component', () => {
    const { container } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });

    expect(container).toMatchSnapshot();
  });

  test('should render products after api success', async () => {
    const { container } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });

    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    expect(container).toMatchSnapshot();
  });

  test('should click add product button', async () => {
    const { getByTestId } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });

    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    fireEvent.click(getByTestId('btn-add-product'));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('addProduct');
  });

  test('should click edit product button', async () => {
    const { getByTestId } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });

    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    fireEvent.click(getByTestId('btn-edit-product-1'));
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/updateProduct/1');
  });
});
