import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

const events = [{ title: `Ali's lunch`, start: new Date(), color:'pink', groupId: 1 },
{ title: 'Pick up Honor @4', start: new Date(), color: 'red', groupId: 1 },
{ title: 'Meeting', start: new Date(), groupId: 2 }];

const event = (state= events, action) =>{
  if(action.type === 'ADD_EVENT'){
    return [...state, action.payload]
  }
  console.log(state);
  return state;
}


const store = createStore(
  combineReducers({
    event,
  }),
  applyMiddleware(logger)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
