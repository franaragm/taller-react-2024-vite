import React from 'react';
import styles from './Home.module.scss';
import Button from '@components/Button';
import Card from '@components/Card';

const Home: React.FC = () => {
  
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Welcome to My App</h1>
      <p>Click the button below to test it:</p>
      <Button text="Click Me" onClick={handleClick} />

      <div className={styles.cardContainer}>
        <Card 
          title="Card 1" 
          content="This is the first card with an image."
          imageUrl="https://via.placeholder.com/300"
          buttonText="View More"
          onClick={() => alert('Card 1 clicked!')}
        />
        <Card 
          title="Card 2" 
          content="This is the second card without an image."
        />
        <Card 
          title="Card 3" 
          content="Another card with an image."
          imageUrl="https://via.placeholder.com/300"
        />
        <Card 
          title="Card 4" 
          content="This is the fourth card."
          buttonText="View More"
          onClick={() => alert('Card 4 clicked!')}
        />
      </div>
    </div>
  );
};

export default Home;
