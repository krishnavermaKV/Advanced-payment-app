"use client"
import styles from "./page.module.css";
import { useBalance } from "@repo/store/useBalance" 

export default function Home() {
    const balance = useBalance();
  return (
    <div className={styles.page}>
        {/* {balance} */}
        nothing
    </div>
  );
}
