import { useState, useCallback } from "react";

export interface UseShowableProps {
  initialShouldShow?: boolean;
}

export interface UseShowableReturn {
  shouldShow: boolean;
  setShouldShow: (shouldShow: boolean) => void;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

export function useShowable({
  initialShouldShow = false,
}: UseShowableProps = {}): UseShowableReturn {
  const [shouldShow, setShouldShow] = useState(initialShouldShow);
  const show = useCallback(() => setShouldShow(true), [setShouldShow]);
  const hide = useCallback(() => setShouldShow(false), [setShouldShow]);
  const toggle = useCallback(() => {
    if (shouldShow) hide();

    show();
  }, [shouldShow, show, hide]);

  return {
    shouldShow,
    setShouldShow,
    hide,
    show,
    toggle,
  } as const;
}
