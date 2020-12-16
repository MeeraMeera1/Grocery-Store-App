import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import produceReducer from "./produce";

//createStore - creates a redux store (let's go shopping boo)

//combineReducers - creates one reducer from multiple reducers as slices of state

/*
applyMiddleware - a store enhancer that will allow you to attach middlewares
(a middleware is a function called before any action hits the root reducer)
*/

/*
compose - another store enhancer that will allow you to use more than one store 
enhancer
*/

const rootReducer = combineReducers ({
    //create space in the Redux store for the produce 
    //add a key in the redux store for handling the produce information
    //this key will be the produce slice of state 
    produce: produceReducer,
});

//used when app is in development
let enhancer;

if (process.env.NODE_ENV !== "production") {
    //logger varaible set to the default export of the imported redux-logger package
    //imported using require instead of ES6
    const logger = require("redux-logger").default;
    //composeEnhancers variable is set to the Redux dev tools extensions store enhancer
    const composeEnhancers =
    //this is a compose function from redux 
    /*
        the Redux compose function : takes in store enhancers as its arguments 
        and combines them to create a single store ehancer.
     */
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        //applyMiddleware invoked with the loaded logger enhancer is set to the 
        //combined store enchancer.
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;