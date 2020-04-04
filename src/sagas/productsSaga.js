import { all, takeEvery, takeLatest, call, put, fork } from 'redux-saga/effects';
import customHistory from '../history';

function* loadProducts() {
  try {
    const res = yield call(fetch, 'http://localhost:3004/products');
    const products = yield res.json();
    yield put({
      type: 'LOAD_PRODUCTS_SUCCESS',
      payload: products,
    });
  } catch (error) {
    yield put({
      type: 'LOAD_PRODUCTS_FAIL',
      payload: error,
    });
  }
}

function* addProduct({ payload }) {
  try {
    const res = yield call(fetch, 'http://localhost:3004/products', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    const product = yield res.json();
    yield put({
      type: 'ADD_PRODUCT_SUCCESS',
      payload: product,
    });
    yield call(customHistory.goBack);
  } catch (error) {
    yield put({
      type: 'ADD_PRODUCT_FAIL',
      payload: error,
    });
  }
}

function* updateProduct({ payload }) {
  try {
    const res = yield call(fetch, `http://localhost:3004/products/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    const product = yield res.json();
    yield put({
      type: 'UPDATE_PRODUCT_SUCCESS',
      payload: product,
    });
    yield call(customHistory.goBack);
  } catch (error) {
    yield put({
      type: 'UPDATE_PRODUCT_FAIL',
      payload: error,
    });
  }
}

function* deleteProduct({ payload }) {
  try {
    yield call(fetch, `http://localhost:3004/products/${payload}`, {
      method: 'DELETE',
    });
    yield put({
      type: 'DELETE_PRODUCT_SUCCESS',
      payload,
    });
  } catch (error) {
    yield put({
      type: 'DELETE_PRODUCT_FAIL',
      payload: error,
    });
  }
}

function* loadProductsRequest() {
  yield takeEvery('LOAD_PRODUCTS_REQUEST', loadProducts);
}

function* addProductRequest() {
  yield takeLatest('ADD_PRODUCT_REQUEST', addProduct);
}

function* updateProductRequest() {
  yield takeLatest('UPDATE_PRODUCT_REQUEST', updateProduct);
}

function* deleteProductRequest() {
  yield takeLatest('DELETE_PRODUCT_REQUEST', deleteProduct);
}

export default function* root() {
  yield all([
    fork(loadProductsRequest),
    fork(addProductRequest),
    fork(updateProductRequest),
    fork(deleteProductRequest),
  ]);
}
