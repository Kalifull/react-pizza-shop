import { useState, useEffect, useRef } from 'react';

const useOutside = (initialVisibility: boolean) => {
  const sortRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(initialVisibility);

  const handleClickOutside = (event: MouseEvent) => {
    if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return { sortRef, isShow, setIsShow };
};

export default useOutside;
