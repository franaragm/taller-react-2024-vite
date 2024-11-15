import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
    <button className={styles.button} onClick={onClick}>
        {text}
    </button>
);

export default Button;