import React from 'react'
import styles from '../pages/home.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infoLink}>
        <p>Este website foi construído utilizando NextJS com SSR (Server Side Rendering) e ReactJS + Vercel como plataforma.</p>
        <p>Você pode encontrar o código fonte desta página aqui:</p>
        <a href="https://github.com/davischoll/davi-cv" target="blank">https://github.com/davischoll/davi-cv</a>
      </div>
    </footer>
  )
}

export default Footer
