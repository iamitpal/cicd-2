import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>C:{count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>
  );
}
