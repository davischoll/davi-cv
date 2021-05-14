import React from 'react'
import styles from '../pages/home.module.scss'

const Education = () => {
  return (
    <section className={styles.education}>
      <h2>FORMAÇÃO & CAPACITAÇÃO</h2>
      <div className={styles.educationList}>
        <div className={styles.educationListItem}>
          <h3>Graduação</h3>
          <h4>Análise e Desenvolvimento de Sistemas <canvas className={styles.divisor}></canvas> 2021</h4>
          <p>UNINTER - Curitiba/PR</p>
        </div>
        <div className={styles.educationListItem}>
          <h3>Curso</h3>
          <h4>Fullstack Master <canvas className={styles.divisor}></canvas> 2021</h4>
          <p>Formação continuada com Node.js; Express, Typescript; React; Next.js, Nest.js…</p>
          <p>DEVPLENO - devpleno.com</p>
        </div>
        <div className={styles.educationListItem}>
          <h3>Curso</h3>
          <h4>Welcome To The Django <canvas className={styles.divisor}></canvas> 2020</h4>
          <p>Python 3 + Django</p>
          <p>HENRIQUE BASTOS - henriquebastos.net</p>
        </div>
      </div>
    </section>
  )
}

export default Education
