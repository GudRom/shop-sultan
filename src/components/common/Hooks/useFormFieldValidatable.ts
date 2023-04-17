import { useCallback, useState } from "react";
import { useValidateForm } from "./useValidateForm";
import { valid } from "../Interfaces/IValidConclusion";
import { IEvent } from "../Interfaces/IEvent";

export const useFormFieldValidatable = (
  initialValue: any,
  validations: valid | null
) => {
  const [isFault, setIsFault] = useState(false);
  const [value, setValue] = useState(initialValue);

  const validate = useValidateForm(value, validations);

  const onChange = useCallback((e: IEvent) => {
    setValue(e.target.value);
  }, []);

  const clearField = useCallback(() => {
    setValue(initialValue);
  }, []);

  const setCurrentGoodInfo = useCallback((goodInfo: any) => {
    setValue(goodInfo);
  }, []);

  const onBlur = useCallback(() => setIsFault(true), []);

  return {
    value,
    onChange,
    onBlur,
    clearField,
    ...validate,
    isFault,
    setIsFault,
    setCurrentGoodInfo,
  };
};
