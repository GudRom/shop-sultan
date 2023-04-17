import { FC, memo } from "react";
import { IEvent } from "../../../../common/Interfaces/IEvent";

interface Props {
  type: string;
  nameID: string;
  labelText: string;
  value: string | number;
  onChange: (e: IEvent) => void;
  onBlur: () => void;
  isFault?: boolean;
  emptyErrorText?: string;
  urlErrorText?: string;
  minLengthErrorText?: string;
  maxLengthErrorText?: string;
  minValueErrorText?: string;
}

const FormInput: FC<Props> = memo(
  ({
    type,
    nameID,
    labelText,
    value,
    onChange,
    onBlur,
    isFault,
    emptyErrorText,
    urlErrorText,
    minLengthErrorText,
    maxLengthErrorText,
    minValueErrorText,
  }: Props) => {
    return (
      <li className="add-form__input-list-item">
        <label className="add-form__label" htmlFor="">
          {labelText}
          <input
            className="add-form__input"
            type={type}
            name={nameID}
            id={nameID}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
        {isFault && emptyErrorText ? (
          <span className="add-form__error">{emptyErrorText}</span>
        ) : null}
        {isFault && urlErrorText ? (
          <span className="add-form__error">{urlErrorText}</span>
        ) : null}
        {isFault && minLengthErrorText ? (
          <span className="add-form__error">{minLengthErrorText}</span>
        ) : null}
        {isFault && minValueErrorText ? (
          <span className="add-form__error">{minValueErrorText}</span>
        ) : null}
        {isFault && maxLengthErrorText ? (
          <span className="add-form__error">{maxLengthErrorText}</span>
        ) : null}
      </li>
    );
  }
);

export default FormInput;
