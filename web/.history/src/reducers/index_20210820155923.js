import { combineReducers } from "redux";
import loginModel from "./models/loginModel";
import buyingTicketsModel from "./models/buyingTicketsModel";
import loadingModel from "./models/loadingModel";
import pageStateModel from "./models/pageStateModel";
import urlParamsModel from "./models/urlParamsModel";
import personalCenterModel from "./models/personalCenterModel";

export default combineReducers({
 
  loadingModel,

});
