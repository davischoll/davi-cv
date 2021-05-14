import React from 'react'
import getUser from '../utils/getUser'

import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import Head from 'next/head'

import styles from './home.module.scss'

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
          <p>Estudante de tecnologia, em aprendizado constante e busca por ser melhor. Iniciando o caminho do desenvolvimento de software e a cada dia mais apaixonado por isso. Alguma experiência com infraestrutura de TI e suporte técnico.</p>
          <p>Um pouco músico e um pouco de várias outras coisas também... Gosto de gente, de bons amigos e boas conversas! Valorizo lugares calmos e tranquilos, para uma ótima leitura e reflexão.
            Adoro o presente, neste mundo tecnológico e virtual em que estamos, onde podemos, com a tecnologia, facilitar a vida das pessoas e desburocratizar um monte de coisas. E, assim, poder viver sempre o melhor da vida, colocando todos os dias as prioridades em primeiro lugar.</p>
          <p>Encontro satisfação ao colaborar de maneira ativa, colocando em prática conhecimentos, habilidades e experiência de vida em favor das organizações e das pessoas, contribuindo sempre para o benefício e crescimento de todos ao meu redor.</p>
        </section>

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

        <section className={styles.githubRepos}>
          <p className={styles.githubStatus}><b>Github status</b>: Public Repos: {user.public_repos}</p>
          <div className={styles.reposList}>
            {repos.map(repo => {
              return (
                <div key={repo.id} className={styles.repo}>
                  <h3><a href={"https://github.com/" + repo.full_name} target="blank">{repo.full_name}</a></h3>
                  <p>Language: {repo.language}</p>
                  <p>{repo.description}</p>
                </div>
              )
            })}
          </div>
        </section>
        
        <footer className={styles.footer}>
          <div className={styles.infoLink}>
            <p>Este website foi construído utilizando NextJS com SSR (Server Side Rendering) e ReactJS + Vercel como plataforma.</p>
            <p>Você pode encontrar o código fonte desta página aqui:</p>
            <a href="https://github.com/davischoll/davi-cv" target="blank">https://github.com/davischoll/davi-cv</a>
          </div>
        </footer>
      </body>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('davischoll')

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}

export default Index
