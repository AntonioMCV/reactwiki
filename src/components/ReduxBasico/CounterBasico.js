import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next"
import classes from "./CounterBasico.module.css";

const CounterBasico = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const {t} = useTranslation(["components"])

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter + " pb-5"}>
      <h1>{t('CounterToolkit.title')}</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button className="btn btn-success" onClick={incrementHandler}>
          {t('CounterToolkit.like')}
        </button>
        <button className="btn btn-success" onClick={increaseHandler}>
          {t('CounterToolkit.likePlus')}
        </button>
        <button className="btn btn-danger" onClick={decrementHandler}>
          {t('CounterToolkit.unlike')}
        </button>
      </div>
      <button className="btn btn-warning" onClick={toggleCounterHandler}>
        {t('CounterToolkit.toggleCounter')}
      </button>
    </main>
  );
};

export default CounterBasico;
