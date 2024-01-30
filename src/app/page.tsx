import Image from "next/image";
import styles from "./page.module.css";
import { ItemsList } from "./components/ItemsList/ItemsList";
export default function Home() {
  return (
    <main className={styles.main}>
     <ItemsList/>
    </main>
  );
}
