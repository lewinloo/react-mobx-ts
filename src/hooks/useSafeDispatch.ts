import { useCallback } from 'react';
import useMountedRef from './useMountedRef';

function useSafeDispatch<T = any>(dispatch: (...args: T[]) => void) {
  const mountedRef = useMountedRef();
  return useCallback(
    (...args: T[]) => (mountedRef.current ? dispatch(...args) : void 0),
    [mountedRef, dispatch]
  );
}

export default useSafeDispatch;
