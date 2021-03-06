import React from 'react'
import Head from 'next/head'
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

import Footer from '../components/Footer'
import Education from '../components/Education'

import styles from './home.module.scss'
import Repos from '../components/Repos'

const Index = ({ repos, user }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Davi Scholl | Fullstack Developer</title>
      </Head>
      <body>
        <header className={styles.header}>
          <div className={styles.headerInfo}>
            <h2>DAVI SCHOLL</h2>
            <h1>DESENVOLVEDOR FULLSTACK</h1>
            <div className={styles.boxContact}>
              <h3>CONTATO</h3>
              <div className={styles.iconsContact}>
                <a href="https://www.linkedin.com/in/davischoll/" target="_blank"><FaLinkedin size={54} color="#343746"/></a>
                <a href="https://www.github.com/davischoll/" target="_blank"><FaGithubSquare size={54} color="#343746"/></a>
                <a href="https://www.instagram.com/davischoll/" target="_blank"><FaInstagramSquare size={54} color="#343746"/></a>
              </div>
              <p><b>E-mail</b>: davis@bandavide.com.br</p>
            </div>
          </div>

          <img src="/davi-removebg.png" alt="Foto Davi"/>
        </header>

        <section className={styles.aboutMe}>
          <p>Estudante de tecnologia, em constante aprendizado e busca por ser alguém melhor. Iniciando o caminho do desenvolvimento de software e a cada dia mais apaixonado por isso.</p>
          <p>Um pouco músico e um pouco de várias outras coisas... Gosto de gente, de bons amigos e boas conversas! Valorizo lugares calmos e tranquilos, para uma ótima leitura e reflexão.
            Adoro o presente mundo, tecnológico e virtual, em que a tecnologia pode facilitar a vida das pessoas e desburocratizar um monte de coisas, nos dando mais tempo para viver as prioridades reais da vida.</p>
        </section>

        <Education />
        <Repos repos={repos} user={user} />
        <Footer />
      </body>
    </div>
  )
}

export async function getServerSideProps(context) {
  const request = await fetch(process.env.API_URL + '/api/getUser')
  const { repos, user } = await request.json()

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index
