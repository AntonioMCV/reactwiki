import React, { useState, useReducer, useEffect } from "react";
import classes from "./LoginUseEffect.module.css";

//usamos estas funciones para validar cada vez que se usa el useReducer del mail o password
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const LoginUseReducer = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  //usamos useReducer para dar un estado inicial y una funcion a realizar cada vez que se cambia dicho estado
  const [emailState, dispachEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispachPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  //Para no tener dos variables con el mismo nombre se pueden asignar alias emailIsValid y passwordIsValid
  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid (
        emailIsValid && passwordIsValid
      )
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier)
    }

  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispachEmail({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailIsValid && passwordIsValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispachPassword({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailIsValid && passwordIsValid
    );
  };

  const validateEmailHandler = () => {
    dispachEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispachPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.login}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button
            type="submit"
            className={classes.button}
            disabled={!formIsValid}
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginUseReducer;
