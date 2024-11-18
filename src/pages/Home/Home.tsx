import React from 'react';
import styles from './Home.module.scss';
import Button from '@components/Button';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p>Click the button below to test it:</p>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Home;
