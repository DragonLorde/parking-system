import { Request, Response } from "express"
import { createParkingServise, getAllParkingServise, getParkingServise, setParkingSeetServise, clearParkingSeetServise } from "../servise/parkingServise"

export const createParking = async (req: Request, res: Response) => {
    try {
        const newParking = await createParkingServise(req.body)
        res.status(200).json(newParking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getParking = async (req: Request, res: Response) => {
    try {
        const parking = await getParkingServise(req.params.id)
        res.status(200).json(parking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const getAllParking = async (req: Request, res: Response) => {
    try {
        const parkings = await getAllParkingServise()
        res.status(200).json(parkings)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const setParkingSeet = async (req: Request, res: Response) => {
    try {
        const parking = await setParkingSeetServise(req.body)
        res.status(200).json(parking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}

export const clearParkingSeet = async (req: Request, res: Response) => {
    try {
        const parking = await clearParkingSeetServise(req.body)
        res.status(200).json(parking)
    } catch(erro) {
        console.log(erro)
        res.sendStatus(400)
    }
}