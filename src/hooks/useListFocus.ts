import { useCallback, useState, useEffect } from 'react';
import { UseFormSetFocus, FieldValues, Path } from 'react-hook-form';

export const useListFocus = <T extends FieldValues>(focusedInput: UseFormSetFocus<T>, key: Path<T>) => {
  const [size, setSize] = useState(0);
  const [currentFocus, setCurrentFocus] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentFocus !== null) {
          setCurrentFocus(currentFocus < size - 1 ? currentFocus + 1 : 0);
        } else {
          setCurrentFocus(0);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentFocus !== null) {
          setCurrentFocus(currentFocus > 0 ? currentFocus - 1 : size - 1);
        } else {
          setCurrentFocus(size - 1);
        }
      } else {
        setCurrentFocus(null);
        focusedInput(key);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setSize] as [number, React.Dispatch<React.SetStateAction<number>>];
};

export default useListFocus;
