"use client"
import React from 'react'
import styles from "/styles/Home.module.css"
import ThemeCopm from './componenets/ThemeComp'
import Link from 'next/link'
import { useTheme } from 'next-themes'
const Head = () => {
  const {setTheme, theme} = useTheme()

const themeoMode= theme;
  return (
    <header className={styles.header2}>
    <div className={styles.header}>
    <div className={styles.leftSection}>
      <div className={styles.logo}>Blog</div>
    </div>
    <div className={styles.rightSection}>
      <Link href={"/"}>
      <h3 className={themeoMode === "dark" ? styles.headTitle : styles.headTitle2}>Home</h3>
      </Link>
      <ThemeCopm/>
    </div>
  </div>

  </header>
  )
}

export default Head