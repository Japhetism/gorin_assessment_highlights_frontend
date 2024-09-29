import React from "react";
import styles from "./topbar.module.css";
import Button from "../button";

const TopBar = () => {
    return (
        <div className={styles.topbarMain}>
            <div>
                <p className={styles.topbarTitle}>
                    <span>Property Highlights</span>
                </p>
            </div>
            <div>
                <Button text="Add Highlight" />
            </div>
        </div>
    )
}

export default TopBar;