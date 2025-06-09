import express from 'express'
import cors from 'cors'

// app configuration
const app = express()
const PORT = 4000

// middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})