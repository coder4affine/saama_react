import { all, takeLatest, call, put, fork } from 'redux-saga/effects';

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

function* loadProductsRequest() {
  yield takeLatest('LOAD_PRODUCTS_REQUEST', loadProducts);
}

export default function* root() {
  yield all([fork(loadProductsRequest)]);
}
