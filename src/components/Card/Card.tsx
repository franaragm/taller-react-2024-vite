import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  content: string;
  imageUrl?: string;
  onClick?: () => void;
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  onClick,
  buttonText,
}) => {
    
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic en el botón dispare el clic del card
    if (onClick) {
      onClick(); // Ejecuta la acción pasada como prop
    }
  };

  return (
    <div
      className={`${styles.card} ${!onClick ? styles.noClickable : ''}`}
      onClick={onClick}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={title} className={styles.image} />
      ) : null}
      <div className={`${styles.body} ${styles.centeredBody}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
      </div>
      {buttonText && onClick && (
        <div className={styles.footer}>
          <button className={styles.button} onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
