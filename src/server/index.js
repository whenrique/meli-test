import express from "express"
import path from 'path'
import cors from 'cors'

import api from './api/index.js'

const app = express()

app.use(cors())

app.use(express.static(path.join(__dirname, '..', '..', 'build')))
app.use(express.static(path.join(__dirname, '..', '..', 'public')))
app.use('/api', api)

app.listen(8000, () => {
  console.log("server started on port 8000")
})
