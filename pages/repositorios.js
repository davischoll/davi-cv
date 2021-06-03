import React from 'react'

const Repositorios = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-semibold'>Rota REPOSITÓRIOS</h1>

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

export default Repositorios
