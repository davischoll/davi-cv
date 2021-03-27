import getUser from "../../utils/getUser"

const apiGetUser = async(req, res) => {
  const data = await getUser('davischoll')
  res.send(data)
}

export default apiGetUser
