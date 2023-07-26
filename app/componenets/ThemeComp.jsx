"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import {CiDark,CiLight} from "react-icons/ci"
import styles from "/styles/Home.module.css"
import { useRouter } from 'next/router'
const ThemeCopm = () => {
    const [mounted, setMounted] = useState(false)
    const {systemTheme,theme, setTheme} = useTheme()
    useEffect(() => {
        setMounted(true)
    },[])

        const themeMode = theme === "system" ? systemTheme : theme
      
  

  return (
    <div>
        {
            mounted && (
                themeMode === "dark" ?
                <CiLight className={styles.themeButton} onClick={() => setTheme('light')}  size={25} />    :
                <CiDark className={styles.themeButton} onClick={() => setTheme('dark')}  size={25} />
            )
        }
        
    </div>
  )
}

export default ThemeCopm