import { memo } from "react";
import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import "./font.css";
import { NumberInput, ValidatedOptions } from "@patternfly/react-core";
import { useDispatch } from "react-redux";
import { actions as strActions } from "./store/StrategiesSlice";
import { actions as occu_actions } from "./store/Occupational";
const NumberInputWithStatus = ({ id, i, type }) => {
  const max = 3;
  const min = 0;
  const [validated, setValidated] = React.useState(ValidatedOptions.success);
  const [value, setValue] = React.useReducer(
    (state, newVal) => Math.max(min, Math.min(max, Number(newVal))),
    0
  );
  const dispatch = useDispatch();

  const onPlus = () => {
    const newVal = (value || 0) + 1;
    setValue(newVal);
    validate(newVal);
    const payload = { type: "inc", id, i };
    if (type === "occu") {
      dispatch(occu_actions.addOneScore(payload));
      return;
    }
    dispatch(strActions.updateStrategy(payload));
    console.log("onePlus");
  };
  const onMinus = () => {
    const newVal = (value || 0) - 1;
    setValue(newVal);
    validate(newVal);
    const payload = { type: "dec", id, i };
    if (type === "occu") {
      console.log("updating occupational payload: ", payload);
      dispatch(occu_actions.addOneScore(payload));
      return;
    }
    dispatch(strActions.updateStrategy(payload));
  
    console.log("oneMinus");
  };
  const onChange = (event) => {
    const value = event.target.value;
    setValue(value === "" ? value : +value);
    validate(value);
  };
  const validate = (newVal) => {
    const diff = Math.abs(3 - newVal);
    if (diff > 1) {
      setValidated(ValidatedOptions.error);
    } else if (diff > 0) {
      setValidated(ValidatedOptions.warning);
    } else {
      setValidated(ValidatedOptions.success);
    }
  };
  return (
    <>
      <NumberInput
        validated={validated}
        value={value}
        min={0}
        max={3}
        onMinus={onMinus}
        onPlus={onPlus}
        onChange={onChange}
        inputName="input"
        inputAriaLabel="number input"
        minusBtnAriaLabel="minus"
        plusBtnAriaLabel="plus"
      />
    </>
  );
};

export default memo(NumberInputWithStatus);
