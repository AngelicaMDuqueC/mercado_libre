import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Search } from 'components/Search';
import { placeholder } from 'utils';
import styles from './Layout.module.scss';

/**
 * Layout of the app
 * @returns ReactNode
 */
export const Layout = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={layoutRef} className={styles.layout} data-testid="layout-div">
      <Header hearClass={styles.header} logoClass={styles.header__logo} data-testid="header">
        <div className={styles.header__search}>
          <Search placeholder={placeholder} />
        </div>
      </Header>
      <main className={`${styles.main__content}`} data-testid="main-content">
        <Outlet context={{ test: 'test' }} />
      </main>
    </div>
  );
};
