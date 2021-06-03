import React from 'react'
import styles from '../../pages/home.module.scss'
import EducationItem from './EducationItem'

const formacoes = [
  {
    tipo: "Graduação",
    nome: "Análise e Desenvolvimento de Sistemas",
    ano: "2021",
    descricao: "",
    instituicao: "UNINTER - Curitiba/PR - uninter.com"
  },
  {
    tipo: "Curso",
    nome: "Fullstack Master",
    ano: "2021",
    descricao: "Formação continuada com Node.js; Express, Typescript; React; Next.js, Nest.js…",
    instituicao: "DEVPLENO - devpleno.com"
  },
  {
    tipo: "Curso",
    nome: "Welcome To The Django",
    ano: "2021",
    descricao: "Python 3 + Django",
    instituicao: "HENRIQUE BASTOS - henriquebastos.net"
  }
]

const Education = () => {
  return (
    <section className={styles.education}>
      <h2>FORMAÇÃO & CAPACITAÇÃO</h2>
      <div className={styles.educationList}>
        {formacoes.map((formacao, i) => (
          <EducationItem key={'i' + i} formacao={formacao} />
        ))}
      </div>
    </section>
  )
}

export default Education
