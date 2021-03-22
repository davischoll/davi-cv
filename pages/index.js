import React from 'react'

const Index = (props) => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <div>{props.currentDate}</div>
      {props.repos.map(repo => {
        return (
          <div key={repo.id}>
            <h3>{repo.full_name}</h3>
            <p>Language: {repo.language}</p>
            <p>Descrição: {repo.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const resRepos = await fetch('https://api.github.com/users/davischoll/repos?sort=updated')
  const originalReposList = await resRepos.json()

  // MODELO PARA REMOVER ALGUM REPOSITÓRIO:

  const dontShowReposList = ['davischoll/mini-car-phone-holder', 'davischoll/db-access']

  //  VAI FILTRAR OS REPÓSITÓRIOS QUE NÃO SÃO FORK: "fork": true,
  const isNotFork = repo => !repo.fork
  //  VAI FILTRAR OS REPÓSITÓRIOS QUE ESTÃO NA LISTA DO VETOR:
  const dontShowRepos = repo => dontShowReposList.indexOf(repo.full_name) === -1
  
  const extractData = repo => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
    description: repo.description
  })

  const repos = originalReposList
                  .filter(isNotFork)
                  .filter(dontShowRepos)
                  .map(extractData)

  return {
    props: {
      currentDate: new Date().toString(),
      repos
    }
  }
}

export default Index
