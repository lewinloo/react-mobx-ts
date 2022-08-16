import { useReducer } from 'react';
import { useLatest } from 'ahooks';
import useSafeDispatch from './useSafeDispatch';

export default function useStatePlus<T>(initailValue: T) {
  const ref = useLatest(initailValue);
  const [state, dispatch] = useReducer(
    (s: T, action: Partial<T>) => ({ ...s, ...action }),
    ref.current
  );
  const setState = useSafeDispatch(dispatch);
  return [state, setState] as const;
}
