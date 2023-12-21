import React from 'react';
import Link from "next/link";
import styles from './styles.module.scss';

const About: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.subtitle}>Why Ovasave?</h2>
      <p className={styles.about}>At <Link className={styles.link} href={'https://www.ovasave.com/'} target={'_blank'}>Ovasave</Link>, we talk about our fertility—loudly—because it’s been a mystery for way too long. Through a network of the region’s best fertility clinics and an integrated digital platform, we’ll help you understand your fertility and press pause on your biological clock.</p>
      <p className={styles.about}>Get started now and order our at-home AMH test which includes a free teleconsultation with a fertility doctor. You can also book a free intro call to find out more about fertility testing and egg freezing.</p>
    </section>
  )
};

export default About;