import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from "../../api/login";

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
  const { params } = action;
  try {
    
    const {
      data: { errcode, data },
    } = yield call(Api.loginApi, {
      ...params,
    });
   
  } catch (error) {
    console.error(error);
  } finally {
    yield put({
      type: "HIDE_LOADING",
    });
  }
}

export function* loadingModelSaga() {
  yield takeEvery("LOGIN", loginSaga);
}
