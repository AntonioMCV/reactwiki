import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "store/reduxToolkit/counter";
import classes from "./CounterToolkit.module.css";

const CounterToolkit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>ReduxToolkit Me gusta Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} className="btn btn-success">
          Me gusta
        </button>
        <button onClick={increaseHandler} className="btn btn-success">
          Me gusta mucho
        </button>
        <button onClick={decrementHandler} className="btn btn-danger">
          No me gusta
        </button>
      </div>
      <button onClick={toggleCounterHandler} className="btn btn-warning">
        Toggle Counter
      </button>
    </main>
  );
};

export default CounterToolkit;
