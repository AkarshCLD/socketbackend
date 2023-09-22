let array = [] // database
const bcrypt = require('bcrypt')
const saltRound = 10
const fetchData = (req, res) => {
  return res.send(array)
}

const Register = (req, res) => {
  const details = req.body
  //   const { email, password, phone, batch } = req.body
 const user= array.find(item => {
    if (details.email === item.email) {
     return item
    }
  })
  if(user){
    return res.send('user already exits')
  }
  const hashPassword = bcrypt.hashSync(details.password, saltRound)
  let temp = {
    email: details.email,
    pass: hashPassword,
    batchID: details.batchId
  }
  array.push(temp)
  return res.send('user registered successfully')
}

const login = (req, res) => {
  return res.send('user login successfully')
}

module.exports = { fetchData, Register, login }
