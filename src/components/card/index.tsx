import React from "react";
import { HighlightIcon } from "../../../public/icons";
import { DeleteIcon } from "../../../public/icons";
import styles from "./card.module.css";

interface ICard {
    title: string;
    id: string;
    onDelete: (id: string) => void;
}

const Card = ({ title, id, onDelete }: ICard) => {
    return (
        <div className={styles.cardMain}>
            <div className={styles.highlightIcon}>
                <HighlightIcon />
            </div>
            <div className={styles.cardAction}>
                <div className={styles.highlightDescription}>
                    {title}
                </div>
                <div>
                    <button className={styles.deleteButton} onClick={() => onDelete(id)}>
                        <DeleteIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;