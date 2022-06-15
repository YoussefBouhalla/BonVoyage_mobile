import { combineReducers } from "redux";
import OurToursSearchReducer from "./OurToursSearchReducer";
import CitiesReducer from "./CitiesReducer";

const allReducers = combineReducers({
    OurToursSearch : OurToursSearchReducer,
    cities: CitiesReducer
})

export default allReducers; 