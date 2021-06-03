import React from 'react'

import styles from '../../pages/home.module.scss'

const Repo = ({ repo }) => {
  return (
    <div className={styles.repo}>
      <h3><a href={"https://github.com/" + repo.full_name} target="blank">{repo.full_name}</a></h3>
      <p>Language: {repo.language}</p>
      <p>{repo.description}</p>
    </div>
  )
}

export default Repo
