import React from "react";
import styles from "./layout.module.css";

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Layout;