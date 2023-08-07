import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter + ' pb-5'}>
      <h1>Redux Me gusta Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button className="btn btn-success" onClick={incrementHandler}>Me gusta</button>
        <button className="btn btn-success" onClick={increaseHandler}>Me gusta mucho!</button>
        <button className="btn btn-danger" onClick={decrementHandler}>No me gusta</button>
      </div>
      <button className="btn btn-warning" onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
