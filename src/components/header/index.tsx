import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import logoWhite from '../../../public/images/logo-white.png';

const Header: React.FC = () => {
  return (
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <Image width={240} src={logoWhite} alt={'Ovasave'}/>
        </div>
      </header>
  );
};

export default Header;