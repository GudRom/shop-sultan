import { FC, memo } from "react";
import { useAppDispatch } from "../../../../store/hook";
import { addGood, setIsLocalStore } from "../../../../store/slices/goodSlice";
import { useFormFieldValidatable } from "../../../common/Hooks/useFormFieldValidatable";
import { GoodElement } from "../../../common/Interfaces/IGoodElement";
import "./AddGoodForm.scss";
import FormInput from "./FormInput/FormInput";

interface Props {
  closePopup: () => void;
}

const AddGoodForm: FC<Props> = memo(({ closePopup }) => {
  const urlField = useFormFieldValidatable("", { isEmpty: true, isURL: true });
  const nameField = useFormFieldValidatable("", {
    isEmpty: true,
    minLength: 3,
  });
  const productTypeField = useFormFieldValidatable("", null);
  const costField = useFormFieldValidatable(0, { isEmpty: true, minValue: 1 });
  const brandField = useFormFieldValidatable("", { minLength: 2 });
  const producerField = useFormFieldValidatable("", { minLength: 2 });
  const barcodeField = useFormFieldValidatable(0, {
    isEmpty: true,
    minLength: 6,
    maxLength: 12,
  });
  const weightField = useFormFieldValidatable(0, {
    isEmpty: true,
    minValue: 1,
  });
  const weightTypeField = useFormFieldValidatable("", { isEmpty: true });
  const descriptionField = useFormFieldValidatable("", null);
  const fieldsArray = [
    urlField,
    nameField,
    productTypeField,
    costField,
    brandField,
    producerField,
    barcodeField,
    weightField,
    weightTypeField,
    descriptionField,
  ];

  let buttonDisableCondition =
    urlField.isButtonDisabled ||
    nameField.isButtonDisabled ||
    costField.isButtonDisabled ||
    barcodeField.isButtonDisabled ||
    weightField.isButtonDisabled ||
    weightTypeField.isButtonDisabled;

  let addedGoodsArr: GoodElement[] = [];

  const dispatch = useAppDispatch();

  const refreshForm = (): void => {
    fieldsArray.forEach((field) => {
      field.clearField();
      field.setIsFault(false);
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const formData: GoodElement = {
      url_img: urlField.value,
      name: nameField.value,
      type_weight: weightTypeField.value,
      weight: weightField.value,
      barcode: barcodeField.value,
      brand: brandField.value,
      producer: producerField.value,
      description: descriptionField.value,
      cost: costField.value,
      type_product: productTypeField.value,
    };

    if (localStorage.goods) {
      addedGoodsArr = [...JSON.parse(localStorage.goods)];
    }
    addedGoodsArr.push(formData);
    dispatch(addGood(formData));
    dispatch(setIsLocalStore(true));
    localStorage.setItem("goods", JSON.stringify(addedGoodsArr));
    closePopup();
    refreshForm();
  };

  return (
    <form action="dialog" className="add-form" onSubmit={handleSubmit}>
      <p className="add-form__title">Внесите данные, чтобы добавить товар:</p>
      <ul className="add-form__inputs-list">
        <FormInput
          type={"url"}
          nameID={"url_img"}
          labelText="Url картинки:"
          value={urlField.value}
          onChange={urlField.onChange}
          onBlur={urlField.onBlur}
          isFault={urlField.isFault}
          emptyErrorText={urlField.emptyErrorText}
          urlErrorText={urlField.urlErrorText}
        />
        <FormInput
          type={"text"}
          nameID={"name"}
          labelText="Название:"
          value={nameField.value}
          onChange={nameField.onChange}
          onBlur={nameField.onBlur}
          isFault={nameField.isFault}
          emptyErrorText={nameField.emptyErrorText}
          minLengthErrorText={nameField.minLengthErrorText}
        />
        <FormInput
          type={"text"}
          nameID={"type_product"}
          labelText="Тип продукта:"
          value={productTypeField.value}
          onChange={productTypeField.onChange}
          onBlur={productTypeField.onBlur}
        />
        <FormInput
          type={"number"}
          nameID={"cost"}
          labelText="Цена:"
          value={costField.value}
          onChange={costField.onChange}
          onBlur={costField.onBlur}
          isFault={costField.isFault}
          emptyErrorText={costField.emptyErrorText}
          minValueErrorText={costField.minValueErrorText}
        />
        <FormInput
          type={"text"}
          nameID={"brand"}
          labelText="Бренд:"
          value={brandField.value}
          onChange={brandField.onChange}
          onBlur={brandField.onBlur}
          isFault={brandField.isFault}
          minLengthErrorText={brandField.minLengthErrorText}
        />
        <FormInput
          type={"text"}
          nameID={"producer"}
          labelText="Производитель:"
          value={producerField.value}
          onChange={producerField.onChange}
          onBlur={producerField.onBlur}
          isFault={producerField.isFault}
          minLengthErrorText={producerField.minLengthErrorText}
        />
        <FormInput
          type={"number"}
          nameID={"barcode"}
          labelText="Штрихкод:"
          value={barcodeField.value}
          onChange={barcodeField.onChange}
          onBlur={barcodeField.onBlur}
          isFault={barcodeField.isFault}
          emptyErrorText={barcodeField.emptyErrorText}
          minLengthErrorText={barcodeField.minLengthErrorText}
          maxLengthErrorText={barcodeField.maxLengthErrorText}
        />

        <FormInput
          type={"number"}
          nameID={"weight"}
          labelText="Объем:"
          value={weightField.value}
          onChange={weightField.onChange}
          onBlur={weightField.onBlur}
          isFault={weightField.isFault}
          emptyErrorText={weightField.emptyErrorText}
          minValueErrorText={weightField.minValueErrorText}
        />

        <li className="add-form__input-list-item">
          <label className="add-form__label" htmlFor="">
            Ед. изм.:
            <select
              className="add-form__input"
              name="type_weight"
              id="type_weight"
              required
              value={weightTypeField.value}
              onChange={weightTypeField.onChange}
              onBlur={weightTypeField.onBlur}
            >
              <option className="add-form__option" value=""></option>
              <option className="add-form__option" value="г">
                г
              </option>
              <option className="add-form__option" value="мл">
                мл
              </option>
            </select>
          </label>
          {weightTypeField.isFault && weightTypeField.emptyErrorText ? (
            <span className="add-form__error">
              {weightTypeField.emptyErrorText}
            </span>
          ) : null}
        </li>
        <li className="add-form__input-list-item add-form__input-list-item_center">
          <textarea
            className="add-form__text-area"
            name="description"
            id="description"
            cols={30}
            rows={10}
            placeholder="Описание"
            value={descriptionField.value}
            onChange={descriptionField.onChange}
            onBlur={descriptionField.onBlur}
          ></textarea>
        </li>
      </ul>
      <button
        className={`add-form__submit ${
          buttonDisableCondition ? "add-form__submit_disabled" : null
        }`}
        disabled={buttonDisableCondition}
      >
        Добавить
      </button>
    </form>
  );
});

export default AddGoodForm;
