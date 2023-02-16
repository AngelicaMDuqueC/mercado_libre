import React, { useState, HTMLProps, useEffect, ReactElement, useCallback } from 'react';
import { mergeStrings } from 'utils/index';
import styles from './Button.module.scss';

type BtnSize = 'regular' | 'small';
type BtnType = 'button' | 'submit' | 'reset';
type IconPlace = 'left' | 'right';

type ButtonProps = {
  text?: string;
  icon?: ReactElement<SVGAElement>;
  iconPlace?: IconPlace;
  btnSize?: BtnSize;
  textBnt?: boolean;
  type?: BtnType;
} & HTMLProps<HTMLButtonElement>;

/**
 * Function to join all different classes that can be applied to the buttons
 * @param className Class passed as prop
 * @param btnStyle Selected style for the button
 * @param btnSize Selected size for the button
 * @param interactionMode Type of interaction, mouse interaction or keyboard interaction
 * @param textBnt Checks if the button is a textBtn
 * @param iconPlace Selector for the place of the icon
 * @param icon Flag to check if there is a icon
 * @returns
 */
const generateClasses = (className: string, btnSize: BtnSize, iconPlace: IconPlace, icon = false) =>
  mergeStrings(styles.btn, icon ? styles[`btn__icon--${iconPlace}`] : '', styles[btnSize], className);

/**
 * Component for generate many kind of button based on the design system
 * @param text Text to display in the button
 * @param type Type of button, can be ('button' | 'submit' | 'reset'),
 * @param btnSize Selected size for the button, can be (regular' | 'small')
 * @param icon Icon to display in the button, has to be an SVG ReactElement
 * @param iconPlace Selector for the place of the icon, can be ('left' | 'right')
 * @param className A user specific class to override the default classes
 * @returns ReactElement with the same behavior as an HTML button
 */
export const Button = (props: ButtonProps) => {
  const {
    text,
    type = 'button',
    btnSize = 'regular',
    icon,
    iconPlace = 'right',
    className = '',
    onFocus = () => true,
    onBlur = () => true,
    ...rest
  } = props;
  const [classes, setClasses] = useState(generateClasses(className, btnSize, iconPlace, !!icon));

  const updateClasses = useCallback(
    () => generateClasses(className, btnSize, iconPlace, !!icon),
    [btnSize, className, icon, iconPlace]
  );

  useEffect(() => {
    setClasses(updateClasses());
  }, [btnSize, iconPlace, icon, className, updateClasses]);

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      onFocus={(e) => {
        setClasses(updateClasses());
        onFocus(e);
      }}
      onBlur={(e) => {
        onBlur(e);
      }}
    >
      {text && <span className={styles.btn__span}>{text}</span>}
    </button>
  );
};
