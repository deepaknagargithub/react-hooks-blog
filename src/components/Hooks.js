import { useState } from "react";

function useFromInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default useFromInput;
