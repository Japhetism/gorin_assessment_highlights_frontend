import React from "react";
import styles from "./button.module.css";

interface IButton {
    text: string;
}

const Button = ({ text }: IButton) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

export default Button;