import { useCallback, useState } from "react";

export const useFormField = (initialValue: any) => {
  const [formData, setformData] = useState(initialValue);
  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      console.log(name, value);
      setformData({ ...formData, [name]: value });
    },
    [formData]
  );
  const refreshData = () => {
    setformData(initialValue);
  };
  return { formData, onChange, refreshData };
};
