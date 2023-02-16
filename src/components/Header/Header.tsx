import type { PropsWithChildren } from 'react';

type HeaderProps = {
  hearClass?: string;
  logoClass?: string;
};
/**
 * Layout of the app
 * @param {ReactNode} children All elements to put inside the layout
 * @returns
 */
export const Header = ({ children, hearClass, logoClass }: PropsWithChildren<HeaderProps>) => {
  return (
    <header className={hearClass}>
      <span className={logoClass} />
      {children}
    </header>
  );
};
