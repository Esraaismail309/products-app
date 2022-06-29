import { createStore } from "redux";
import { rootReducer } from "./RootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, composeEnhancers);
export default store