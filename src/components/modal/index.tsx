import React from "react";
import styles from "./modal.module.css";

interface IModal {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: IModal) => {

    if (!isOpen) return null;

    return (
        <div className={styles.modalMain}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
}

export default Modal;