import { useCallback, useState } from "react";

export const useCheckboxFields = (initialValue: string[] = []) => {
  const [checked, setChecked] = useState(initialValue);

  const handleCheck = useCallback(
    (e: { target: { checked: boolean; value: string } }) => {
      let updatedList: string[] = [...checked];
      if (e.target.checked) {
        updatedList = [...checked, e.target.value];
      } else {
        updatedList.splice(checked.indexOf(e.target.value), 1);
      }
      setChecked(updatedList);
    },
    [checked]
  );
  return { checked, handleCheck, setChecked };
};
