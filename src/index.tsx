import React, { useEffect, useState, useRef } from "react";
import { InputBoxWrapper } from "./styled";
import { observer } from "mobx-react-lite";
import { numberMask } from "./utils/masks";

interface IInputBoxProps {
  value: string;
  size: number;
  isPassword?: boolean;
  isConfirmInput?: boolean;
  onlyNumber?: boolean;
  onChange: (value: string) => void;
}

export const InputBox = observer((props: IInputBoxProps) => {
  const [arrayValue, setArrayValue] = useState<string[]>([]);
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (
      arrayValue.length === 0 &&
      props.value &&
      props.value.length === props.size
    ) {
      setArrayValue(convertValueToArray());
    }
  }, [props.value]);

  const convertValueToArray = () => {
    const stringToArray: string[] = [];

    for (let i = 0; i < props.size; i++) {
      if (i + 1 <= props.value.length) {
        stringToArray[i] = props.value[i];
      } else {
        stringToArray[i] = "";
      }
    }

    return stringToArray;
  };

  const renderInputs = () => {
    const items = [];
    for (let i = 0; i < props.size; i++) {
      items.push(
        <input
          key={i}
          type={props.isPassword ? "password" : "tel"}
          value={arrayValue[i] === " " ? "" : arrayValue[i]}
          onChange={e => {
            let targetValue = "";
            if (e.currentTarget.value && arrayValue[i]) {
              Object.values(
                props.onlyNumber
                  ? numberMask(e.currentTarget.value)
                  : e.currentTarget.value
              ).forEach(j => {
                if (j !== arrayValue[i] && j !== " ") {
                  e.currentTarget.value = j;
                  return;
                }
              });
              if (e.currentTarget.value.length > 1) {
                e.currentTarget.value = e.currentTarget.value[0];
              }
            }
            if (e.currentTarget.value && e.currentTarget.value !== " ") {
              targetValue =
                (props.onlyNumber
                  ? numberMask(e.currentTarget.value[0])
                  : e.currentTarget.value[0]) || "";
              if (targetValue && i < props.size - 1) {
                inputRef.current.form[
                  (props.isConfirmInput ? i + props.size : i) + 1
                ].focus();
              }
            } else if (!arrayValue[i] && i > 0) {
              inputRef.current.form[
                (props.isConfirmInput ? i + props.size : i) - 1
              ].focus();
            }
            handleChange(targetValue || " ", i);
          }}
          onKeyDown={e => {
            if (e.keyCode === 37 && i > 0) {
              inputRef.current.form[
                (props.isConfirmInput ? i + props.size : i) - 1
              ].focus();
            } else if (e.keyCode === 39 && i < props.size - 1) {
              inputRef.current.form[
                (props.isConfirmInput ? i + props.size : i) + 1
              ].focus();
            } else if (
              (e.keyCode === 8 || e.keyCode === 46) &&
              i > 0 &&
              (!arrayValue[i] || arrayValue[i] === " ")
            ) {
              handleChange(" ", i - 1);
              inputRef.current.form[
                (props.isConfirmInput ? i + props.size : i) - 1
              ].focus();
            }
            if (e.keyCode === 46 || (e.keyCode === 8 && arrayValue[i])) {
              handleChange(" ", i);
            }
          }}
          ref={inputRef}
        />
      );
    }
    return items;
  };

  const handleChange = (char: string, index: number) => {
    const result = arrayValue;
    result[index] = char;
    setArrayValue(result);
    props.onChange(result.join("").replace(/\s/g, ""));
  };

  return <InputBoxWrapper>{renderInputs()}</InputBoxWrapper>;
});
