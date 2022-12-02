import { useState, useMemo, useCallback } from "react";

export interface Option<T> {
  key: string;
  data: T;
}

export interface UseSelectionProps<T> {
  initialSelection?: Option<T> | Option<T>[];
  onSelect?: (option: Option<T>) => void;
}

const { isArray } = Array;

export function useSelection<T>(props: UseSelectionProps<T> = {}) {
  const { onSelect, initialSelection = [] } = props;
  const [selection, setSelection] = useState<Option<T>[]>(
    isArray(initialSelection) ? initialSelection : [initialSelection]
  );
  const selectionKeys = useMemo(
    () => selection.map((i) => i?.key),
    [selection]
  );

  const isSelected = useCallback(
    (key: string) => selectionKeys.includes(key),
    [selectionKeys]
  );

  const toggleSelection = useCallback(
    (option: Option<T>) => {
      setSelection([option]);

      if (typeof onSelect === "function") onSelect(option);
    },
    [selection, isSelected, onSelect]
  );

  return {
    isSelected,
    selection,
    selectionKeys,
    setSelection,
    toggleSelection,
  } as const;
}
