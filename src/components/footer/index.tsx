import React from 'react';
import styles from './styles.module.scss';
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2023 Ovasave. All rights reserved.</div>
      <div className={styles.socials}>
        <Link className={styles.link} href={'https://www.linkedin.com/company/ovasave/?viewAsMember=true'} target={'_blank'}>
          <img src="/images/linkedin.svg" alt="ovasave linkedin" />
        </Link>
        <Link className={styles.link} href={'https://www.facebook.com/Ovasave/'} target={'_blank'}>
          <img src="/images/fb.svg" alt="ovasave facebook" />
        </Link>
        <Link className={styles.link} href={'https://www.instagram.com/ovasave_/'} target={'_blank'}>
          <img src="/images/insta.svg" alt="ovasave instagram" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;