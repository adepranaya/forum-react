import { useState } from 'react';

function useTogglePw(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue, setValue];
}

export default useTogglePw;
