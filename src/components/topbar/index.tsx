import React from "react";
import styles from "./topbar.module.css";
import Button from "../button";

interface ITopBar {
    onClick: (isModalOpen: boolean) => void;
}

const TopBar = ({ onClick }: ITopBar) => {
    return (
        <div className={styles.topbarMain}>
            <div>
                <p className={styles.topbarTitle}>
                    <span>Property Highlights</span>
                </p>
            </div>
            <div>
                <Button text="Add Highlight" onClick={() => onClick(true)} />
            </div>
        </div>
    )
}

export default TopBar;