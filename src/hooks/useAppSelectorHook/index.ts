import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { TypeRootState } from '../../store';

const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;

export default useAppSelector;
