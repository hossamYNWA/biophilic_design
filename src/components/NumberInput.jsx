import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import "./font.css";
import { NumberInput, ValidatedOptions } from "@patternfly/react-core";
export const NumberInputWithStatus = () => {
  const max = 3;
  const min = 0;
  const [validated, setValidated] = React.useState(ValidatedOptions.success);
  const [value, setValue] = React.useReducer(
    (state, newVal) => Math.max(min, Math.min(max, Number(newVal))),
    0
  );
  const onPlus = () => {
    const newVal = (value || 0) + 1;
    setValue(newVal);
    validate(newVal);
  };
  const onMinus = () => {
    const newVal = (value || 0) - 1;
    setValue(newVal);
    validate(newVal);
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
