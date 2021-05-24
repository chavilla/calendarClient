import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducers";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  // toDo : AuthReducer,
  // toDo : CalendarReducer,
  calendar: calendarReducer,
});
