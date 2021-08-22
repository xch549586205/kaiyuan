//所有的loading逻辑
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
    yield put({
      type: "SHOW_LOADING",
    });
    const {
      data: { errcode, data },
    } = yield call(Api.loginApi, {
      ...params,
    });
    if (errcode === 200) {
      Cookies.set("LVBOYUAN_TOKEN", JSON.stringify(data.token), { expires: 7 });
      yield put({
        type: "UPDATE_TOKEN",
        data: {
          token: data.token,
        },
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    yield put({
      type: "HIDE_LOADING",
    });
  }
}

export function* loginModelSaga() {
  yield takeEvery("LOGIN", loginSaga);
}
