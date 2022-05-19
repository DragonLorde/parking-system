import { Request, Response } from "express"
import { createUserServise, getUserServise, validateUserServise, getUsersServise } from "../servise/userServise"

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = await createUserServise(req.body)
        res.status(200).json(newUser)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const user = await getUsersServise()
        res.status(200).json(user)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await getUserServise(req.params.id)
        res.status(200).json(user)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const validateUser = async (req: Request, res: Response) => {
    try {
        const user = await validateUserServise(req.body)
        res.status(200).json(user)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}