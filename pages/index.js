import React from 'react'
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

import getUser from '../utils/getUser'
import styles from './home.module.scss'

const Index = ({ repos, user }) => {
  return (
    <div className={styles.container}>
      <body>
      <div className={styles.header}>

        <div className={styles.headerInfo}>
            <h2>DAVI SCHOLL</h2>
            <h1>DESENVOLVEDOR FULLSTACK</h1>
            <div className={styles.boxContact}>
              <h3>CONTATO</h3>
              <div className={styles.iconsContact}>
                <a href="https://www.linkedin.com/in/davischoll/" target="_blank"><FaLinkedin size={44} color="#343746"/></a>
                <a href="https://www.github.com/davischoll/" target="_blank"><FaGithubSquare size={44} color="#343746"/></a>
                <a href="https://www.instagram.com/davischoll/" target="_blank"><FaInstagramSquare size={44} color="#343746"/></a>
              </div>
              <p><b>E-mail</b>: davis@bandavide.com.br</p>
            </div>
        </div>
        
        <img src="/davi-removebg.png" alt="Foto Davi"/>
        
      </div>
      <section className={styles.aboutMe}>
        <p>Estudante de tecnologia, em aprendizado constante e busca por ser melhor. Iniciando o caminho do desenvolvimento de software e a cada dia mais apaixonado por isso. Alguma experiência com infraestrutura de TI e suporte técnico.
           Satisfação ao colaborar de maneira ativa onde possa colocar em prática conhecimentos, habilidades e experiência de vida em favor das organizações e das pessoas, contribuindo sempre para o benefício e crescimento de todos ao meu redor.</p>
        <p>Um pouco músico e um pouco de várias outras coisas também... Gosto de gente, de bons amigos e boas conversas! Valorizo lugares calmos e tranquilos, para uma ótima leitura e reflexão.
           Adoro esta época, deste mundo tecnológico e virtual em que estamos vivendo, onde podemos, com a tecnologia, facilitar a vida das pessoas e desburocratizar um monte de coisas que nos tomam tempo. E, assim, poder viver sempre o melhor da vida, colocando todos os dias as prioridades em primeiro lugar.</p>
      </section>
      <div className='container mx-auto mt-10'>
        <p>Github status: Public Repos: {user.public_repos}</p>
        {repos.map(repo => {
          return (
            <div key={repo.id} className='rounded bg-gray-200 mx-5 my-3 p-3 hover:shadow-md'>
              <h3 className='font-semibold text-lg'>{repo.full_name}</h3>
              <p>Language: {repo.language}</p>
              <p>{repo.description}</p>
            </div>
          )
        })}
      </div>
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
