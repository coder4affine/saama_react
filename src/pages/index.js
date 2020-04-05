/* eslint-disable implicit-arrow-linebreak */
import 'isomorphic-fetch';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, waitFor, fireEvent } from '@testing-library/react';
import Products from '../index';
import customHistory from '../../../history';
import configureStore from '../../../configureStore';

const renderWithRedux = (component, { store = configureStore } = {}) => ({
  ...render(
    <Provider store={store}>
      <Router history={customHistory}>{component}</Router>
    </Provider>,
  ),
  store,
});

const pushFunction = jest.fn();

const mockHistory = {
  push: pushFunction,
};

describe('Products', () => {
  it('snapshot for loading', () => {
    const { container } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });

    expect(container).toMatchSnapshot();
  });

  it('snapshot for success', async () => {
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

    const mockAPI = jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    const { container } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });
    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    expect(container).toMatchSnapshot();
  });

  it('should redirect to add products page', async () => {
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

    const mockAPI = jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    const { getByTestId } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });
    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    // console.warn(container);

    fireEvent.click(getByTestId('btn-add-product'));

    expect(pushFunction).toHaveBeenCalledTimes(1);
    expect(pushFunction).toHaveBeenCalledWith('addProduct');
  });

  it('should redirect to add products page', async () => {
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

    const mockAPI = jest.spyOn(global, 'fetch').mockImplementationOnce(() => mockFetchPromise);
    const { getByTestId } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });
    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    // console.warn(container);

    fireEvent.click(getByTestId('btn-add-product'));

    expect(pushFunction).toHaveBeenCalledTimes(2);
    expect(pushFunction).toHaveBeenCalledWith('addProduct');
  });
});

describe('Products page load fail', () => {
  it('snapshot for fail', async () => {
    const mockAPI = jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Api Fail'));
    const { container } = renderWithRedux(<Products history={mockHistory} />, {
      store: configureStore,
    });
    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1));

    expect(container).toMatchSnapshot();
  });
});
