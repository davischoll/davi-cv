import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-semibold'>Olá! Eu sou o Davi Scholl</h1>

      <h3 className='text-xl font-semibold'>Meus repositórios de códigos no Github</h3>
      <p>Github status: Public Repos: {user.public_repos}</p>
      {repos.map(repo => {
        return (
          <div key={repo.id} className='rounded bg-gray-200 mx-5 my-3 p-3 hover:shadow-md'>
            <h3 className='font-semibold text-lg'>{repo.full_name}</h3>
            <p>Language: {repo.language}</p>
            <p>Descrição: {repo.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const resUser = await fetch('https://api.github.com/users/davischoll')
  const user = await resUser.json()
  
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
      repos,
      user
    }
  }
}

export default Index
