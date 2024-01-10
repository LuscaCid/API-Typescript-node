// iniciando projeto
//console.log('hello world  ')

import express from 'express'

const app = express()
app.use(express.json())
const PORT : number = 3333

app.get('/:id', (request, response) => {
    return response.status(200).json({id  : request.params, word :request.body})
})

app.listen(PORT, () => {
    console.log("Running on port", PORT)
})