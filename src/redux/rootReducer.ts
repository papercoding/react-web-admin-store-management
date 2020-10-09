import { combineReducers } from "redux";

import appConfigsReducer from "../features/AppConfigs/AppConfigsSlice";

const rootReducer = combineReducers({
  appConfigs: appConfigsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
