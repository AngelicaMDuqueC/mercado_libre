import { Header } from 'components/Header/Header';
import { Search } from 'components/Search';
import type { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

/**
 * Layout of the app
 * @param {ReactNode} children All elements to put inside the layout
 * @returns
 */
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header hearClass={styles.header} logoClass={styles.header__logo}>
        <div className={styles.header__search}>
          <Search placeholder={'Hola'} />
        </div>
      </Header>
      <main className={`${styles.main__content}`}>{children}</main>
    </div>
  );
};
