import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next"
import { counterActions } from "store/reduxToolkit/counter";
import classes from "./CounterToolkit.module.css";

const CounterToolkit = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const {t} = useTranslation(["components"])

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
      <h1>{t('CounterToolkit.title')}</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} className="btn btn-success">
          {t('CounterToolkit.like')}
        </button>
        <button onClick={increaseHandler} className="btn btn-success">
          {t('CounterToolkit.likePlus')}
        </button>
        <button onClick={decrementHandler} className="btn btn-danger">
          {t('CounterToolkit.unlike')}
        </button>
      </div>
      <button onClick={toggleCounterHandler} className="btn btn-warning">
        {t('CounterToolkit.toggleCounter')}
      </button>
    </main>
  );
};

export default CounterToolkit;
