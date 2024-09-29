"use client";

import Layout from "@/components/layout";
import TopBar from "@/components/topbar";
import Card from "@/components/card";
import { IHighlight } from "@/fixtures/highlights";
import { useViewModel } from "./useViewmodel";
import styles from "./page.module.css";
import Modal from "@/components/modal";
import Button from "@/components/button";

export default function Home() {

  const {
    allHighlights,
    isModalOpen,
    hightlightName,
    setIsModalOpen,
    setHightlightName,
    handleCloseModal,
    handleAddHighlight,
    handleDeleteHighlight,
  } = useViewModel();

  return <Layout>
    <TopBar onClick={setIsModalOpen} />
    <div className={styles.highlightContainer}>
      {allHighlights.map((item: IHighlight, index: number) => (
        <Card title={item.name} id={item.id} onDelete={(id: string) => handleDeleteHighlight(id)} />
      ))}
    </div>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <h2>Add New Highlight</h2>
      <div>
        <div className={styles.inputContainer}>
          <input required type="text" className={styles.input} placeholder="Highlight Name" onChange={(e) => setHightlightName(e.target.value)} />
        </div>
        <div className={styles.buttons}>
          <button disabled={hightlightName === ""} className={`${styles.button} ${styles.buttonAdd}`} onClick={() => handleAddHighlight()}>Add</button>
          <button className={styles.button} onClick={() => handleCloseModal()}>Cancel</button>
        </div>
      </div>
    </Modal>
  </Layout>
}
