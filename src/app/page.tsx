"use client";

import Layout from "@/components/layout";
import TopBar from "@/components/topbar";
import Card from "@/components/card";
import { IHighlight } from "@/fixtures/highlights";
import { useViewModel } from "./useViewmodel";
import styles from "./page.module.css";

export default function Home() {

  const {
    allHighlights,
    handleAddHighlight,
    handleDeleteHighlight
  } = useViewModel();

  return <Layout>
    <TopBar />
    <div className={styles.highlightContainer}>
      {allHighlights.map((item: IHighlight, index: number) => (
        <Card title={item.name} id={item.id} onDelete={(id: string) => handleDeleteHighlight(id)} />
      ))}
    </div>
  </Layout>
}
