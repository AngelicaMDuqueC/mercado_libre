import React, { ReactElement } from 'react';
import { HEADING_TYPES } from 'utils';
import './CustomHeading.module.scss';

type CustomHeadingProps = {
  type: HeadingLevel;
  customClass?: string;
  children: ReactElement | string | number;
};

export const CustomHeading = ({ type, customClass = '', children }: CustomHeadingProps) => {
  const className = `${HEADING_TYPES.get(type) ?? ''} ${customClass}`;
  return React.createElement(type, { className }, children);
};
