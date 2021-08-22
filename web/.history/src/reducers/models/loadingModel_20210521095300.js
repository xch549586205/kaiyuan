//所有的loading逻辑

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
