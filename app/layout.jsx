import React from 'react'
import styles from "styles/Home.module.css"
import ColorProviders from './ColorProvider'
import Head from './Head'
import Footer from './componenets/Footer'
import "/styles/globals.css"
const Layout = ({children}) => {
  return (
    <html >
        <head>
            <title>Next Blog</title>
        </head>
        <body>
      
        <ColorProviders>    
            <Head/>
            {children}
       
          </ColorProviders>  
        </body>
    </html>
  )
}

export default Layout