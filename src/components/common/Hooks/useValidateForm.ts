import { useEffect, useState } from "react";
import { REGEX_URL } from "../../../utils/config";

export const useValidateForm = (value: any, validations: any) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [urlErrorText, setUrlErrorText] = useState("");
  const [emptyErrorText, setEmptyErrorText] = useState("");
  const [minValueErrorText, setMinValueErrorText] = useState("");
  const [minLengthErrorText, setMinLengthErrorText] = useState("");
  const [maxLengthErrorText, setMaxLengthErrorText] = useState("");

  useEffect(() => {
    if (validations) {
      for (const validation in validations) {
        switch (validation) {
          case "minLength":
            value.length < validations[validation]
              ? setMinLengthErrorText(
                  `Мало символов. Нужно минимум ${validations[validation]}`
                )
              : setMinLengthErrorText("");
            break;

          case "maxLength":
            value.length < validations[validation]
              ? setMaxLengthErrorText("")
              : setMaxLengthErrorText(
                  `Много символов. Максимум ${validations[validation]}`
                );
            break;

          case "minValue":
            value > validations[validation]
              ? setMinValueErrorText("")
              : setMinValueErrorText("Нужно немного больше");
            break;

          case "isEmpty":
            value
              ? setEmptyErrorText("")
              : setEmptyErrorText("Это поле обязательное");
            break;

          case "isURL":
            REGEX_URL.test(value)
              ? setUrlErrorText("")
              : setUrlErrorText("Не похоже на URL-ссылку");
            break;
        }
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (
      urlErrorText ||
      minLengthErrorText ||
      minValueErrorText ||
      maxLengthErrorText ||
      emptyErrorText
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [
    urlErrorText,
    minLengthErrorText,
    minValueErrorText,
    maxLengthErrorText,
    emptyErrorText,
  ]);

  return {
    urlErrorText,
    emptyErrorText,
    minLengthErrorText,
    minValueErrorText,
    maxLengthErrorText,
    isButtonDisabled,
  };
};
