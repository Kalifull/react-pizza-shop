import { useState, useRef } from 'react';

import useActions from '../useActionsHook';

const useInput = (initialValue: string) => {
  const { setSearchValue } = useActions();

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClickClear = () => {
    setInputValue('');
    setSearchValue({ search: '' });
    inputRef.current?.focus();
  };

  const searchInput = {
    ref: inputRef,
    value: inputValue,
    onChange: handleChangeValue,
  };

  return {
    searchInput,
    handleClickClear,
  };
};

export default useInput;
