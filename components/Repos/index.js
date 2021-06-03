import React from 'react'

import styles from '../../pages/home.module.scss'
import Repo from './Repo'

const Repos = ({ repos, user }) => {
  return (
    <section className={styles.githubRepos}>
      <p className={styles.githubStatus}><b>Github status</b>: Public Repos: {user.public_repos}</p>
      <div className={styles.reposList}>
        {repos.map(repo => {
          return (
            <Repo key={repo.id} repo={repo}/>
          )
        })}
      </div>
    </section>
  )
}

export default Repos
