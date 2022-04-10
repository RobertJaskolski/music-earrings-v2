import express from 'express'

const app = express()
const PORT = 5000

app.get('/', (_, res) => {
  res.status(200).send({ success: 'true' })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
