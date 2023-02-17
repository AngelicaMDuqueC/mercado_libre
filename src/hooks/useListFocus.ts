import { useCallback, useState, useEffect, RefObject } from 'react';
import { FieldValues, Path, PathValue, UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'utils';

export const useListFocus = <T extends FieldValues>(
  ref: RefObject<HTMLDivElement>,
  listValues: PathValue<T, Path<T>>[],
  formMethods: UseFormReturn<T>,
  key: Path<T>
) => {
  const { setValue, setFocus, watch } = formMethods;
  const [currentFocus, setCurrentFocus] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState<PathValue<T, Path<T>> | null>(null);
  const [size, setSize] = useState(0);
  const inputValue = watch(key);

  const navigate = useNavigate();
  const handleNavigate = (value: any) => {
    const searchPath = PATHS.get('SEARCH');
    const path = `${searchPath}${encodeURIComponent(value)}`;
    navigate(path);
  };

  const handleManual = (value: PathValue<T, Path<T>>) => {
    setValue(key, value);
    handleNavigate(value);
    setCurrentFocus(null);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (currentFocus !== null) {
            const newFocusIndex = currentFocus < size - 1 ? currentFocus + 1 : 0;
            setCurrentFocus(newFocusIndex);
            setValue(key, listValues[newFocusIndex]);
          } else {
            setCurrentFocus(0);
            setValue(key, listValues[0]);
          }
          break;

        case 'ArrowUp':
          e.preventDefault();
          if (currentFocus !== null) {
            const newFocusIndex = currentFocus > 0 ? currentFocus - 1 : size - 1;
            setCurrentFocus(currentFocus > 0 ? currentFocus - 1 : size - 1);
            setValue(key, listValues[newFocusIndex]);
          } else {
            setCurrentFocus(size - 1);
            setValue(key, listValues[size - 1]);
          }
          break;

        case 'Enter':
          e.preventDefault();
          setCurrentFocus(null);
          setSelectedValue(inputValue);
          handleNavigate(inputValue);
          break;
        default:
          setCurrentFocus(null);
          setFocus(key);
          break;
      }
    },
    [size, currentFocus, setCurrentFocus, listValues]
  );

  useEffect(() => {
    const element = ref.current;
    element?.addEventListener('keydown', handleKeyDown, false);
    return () => {
      element?.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [selectedValue, handleManual, currentFocus, setSize] as [
    PathValue<T, Path<T>>,
    any,
    number,
    React.Dispatch<React.SetStateAction<number>>
  ];
};

export default useListFocus;
