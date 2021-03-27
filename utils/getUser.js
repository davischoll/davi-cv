const getUser = async(username) => {
  const resUser = await fetch('https://api.github.com/users/' + username)
  const user = await resUser.json()
  
  const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
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

  return {user, repos}
}

export default getUser
