// iniciando projeto
//console.log('hello world  ')

import express, {Request, Response, NextFunction, response} from 'express'
import { resolve } from 'path'
// nextFunction eh um tipo para trabalhar com middleware onde se passa a proxima funcao
const app = express()
app.use(express.json())
const PORT : number = 3333




interface Product { 
    name : string
    value : number 
    inStock : boolean
}

app.post('/product/', (request, response ) =>{return response.json(request.body.object)})

function productPOST(request : Request, response : Response){
    
    
}
app.all('/user/account/', (request, response) => {
    if(request.method === 'POST'){
        return response.status(201).json({
            message : "metodo post",
            method : request.method
        })
    } else if(request.method === 'GET'){
        return response.status(401).json({
            message : "metodo get",
            method : request.method
        })
    }


})  


//esxpress interfaces

app.get('/app/interfaces', (req : Request, res : Response) => {
    return res.json({message : "typing"})
})


app.get('/users/product/:id', (req: Request, res : Response) => {
    const infoID = req.params.id
})


app.listen(PORT, () => {
    console.log("Running on port", PORT)
})

//treinar execucao de um decorator para a criacao de um usuario e envio para um 
//banco de dados fake 'array'

type User = {
    id : number
    name : string
    email : string
    password : string
    
}
const usersDB : Array<User> = []

interface ISessionsControllers {
    create(request : Request, response : Response) : void
    delete(req : Request<string>, res : Response) : Response
}

class SessionsControllers implements ISessionsControllers{
    create(request : Request, response : Response): Response {
        const user : User = request.body
        const userExists = usersDB.find(arrElement => arrElement.email === user.email) 
        console.log(userExists)
        if(userExists) return response.status(401).json({message : "user already exists"})
        const userObject : User = new UsersClass(user.name, user.password, user.email)
        usersDB.push(userObject)
        return response.status(201).json({
            message : "created",
            database : usersDB
        })
    }

    delete<T extends string>(req : Request<T>, res : Response): Response {
        const userID = Number(req.query.id)
        usersDB.filter(user => user.id !== userID)
        return res.json()
    } 
}
class UsersClass extends SessionsControllers{
    id : number = Math.round(Math.random() * 10000)
    name : string
    email : string
    password : string

    constructor(name : string, password : string, email : string){
        super()
        this.name = name
        this.email = email
        this.password = password
    }
}


const sessionsController= new SessionsControllers()
app.post('/sessions/register', sessionsController.create)
app.post('/users/viewall', (req : Request, res : Response) => {
    return res.json(usersDB)
})