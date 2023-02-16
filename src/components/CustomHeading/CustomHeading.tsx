import React, { ReactElement } from 'react';
import { HEADING_TYPES } from 'utils';
import './CustomHeading.module.scss';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
type CustomHeadingProps = {
  type: HeadingLevel;
  customClass?: string;
  children: ReactElement | string | number;
};

export const CustomHeading = ({ type, customClass = '', children }: CustomHeadingProps) => {
  const className = `${HEADING_TYPES.get(type) ?? ''} ${customClass}`;
  return React.createElement(type, { className }, children);
};
