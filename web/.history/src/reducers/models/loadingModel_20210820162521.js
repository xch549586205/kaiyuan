import { call, put, takeEvery } from "redux-saga/effects";

const initialState = {
  loading: "",
};

const loadingModel = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return {
        loading: true,
      };
    case "HIDE_LOADING":
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default loadingModel;
function* loginSaga(action) {
  try {
    yield
  } catch (error) {
  } finally {
  }
}

export function* loadingModelSaga() {
  yield takeEvery("LOGIN", loginSaga);
}
