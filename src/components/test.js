import { createStore, applyMiddleware } from "redux";

const test = () => {
  const reducer = (state) => state;

  const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action.type);
    console.info("dispatching", action);
    console.groupEnd(action.type);

    return next(action);
  };

  const enhancer = applyMiddleware(loggerMiddleware);

  const store = createStore(reducer, enhancer);

  return <></>;
};

export default test;
