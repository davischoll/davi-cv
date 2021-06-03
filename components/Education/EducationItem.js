import React from 'react'
import styles from '../../pages/home.module.scss'

const EducationItem = ({ formacao }) => {

  return (
      <div className={styles.educationListItem}>
        <h3>{formacao.tipo}</h3>
        <h4>{formacao.nome} <canvas className={styles.divisor}></canvas> {formacao.ano}</h4>
        <p>{formacao.descricao}</p>
        <p>{formacao.instituicao}</p>
      </div>
  )
}

export default EducationItem
