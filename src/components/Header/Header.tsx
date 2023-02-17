import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'utils';

type HeaderProps = {
  hearClass?: string;
  logoClass?: string;
};
/**
 * Hader of the app
 * @param {ReactNode} children All elements to put inside the header
 * @param title alt for the image
 * @param hearClass css class to customizar  header tag
 * @param logoClass css class to customizar  header logo
 * @returns
 */
export const Header = ({ children, hearClass, logoClass }: PropsWithChildren<HeaderProps>) => {
  const homePath: string = PATHS.get('HOME') || '/';
  return (
    <header className={hearClass}>
      <Link to={homePath} className={logoClass}>
        <span className={logoClass} />
      </Link>
      {children}
    </header>
  );
};
