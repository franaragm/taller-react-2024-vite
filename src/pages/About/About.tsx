import React from 'react';
import styles from './About.module.scss';

const About: React.FC = () => (
  <div className={styles.about}>
    <h1 className={styles.title}>About This App</h1>
    <p>This is an example application built with CRA React.</p>
  </div>
);

export default About;
