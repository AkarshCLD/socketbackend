const express = require('express')
const cors=require("cors")
const app = express();

app.use(cors({
    // origin:["https://prepbytes.com","https://collegedekho.com","http://localhost:3000","http://localhost:3001"]
    origin:"*"
}))
app.use(express.json())
app.get('/home', (req, res) => {
  res.send('this is our home page')
})
app.post('/login', (req, res) => {
  const data = req.body
  console.log(data) // undefined if your are not using body pareser.
  res.send('this is your login page')
})
app.put('/updateProfile', (req, res) => {
  const data = req.body
  console.log(data) // undefined if your are not using body pareser.
  res.send('this is your login page')
})
app.delete('/deleteProduct/:id', (req, res) => {
  // dynamic routing
  const data = req.params.id
  console.log(data) // undefined if your are not using body pareser.
  res.send('this is your login page')
})

app.listen(4000, () => {
  console.log('server is running in the prot no.4000')
})
