import { Express, Request, Response } from 'express'
import { clearParkingSeet, createParking, getAllParking, getParking, setParkingSeet } from '../controller/parkingController'
import { createUser, getAllUser, getUser, validateUser } from '../controller/userContoller'

const router = (app: Express) => {
    app.get('/healthcheck' , (req: Request, res: Response) => res.sendStatus(200))
    app.get('/getUser/:id', getUser)
    app.get('/getAllUser', getAllUser)

    app.get('/getParking/:id', getParking)
    app.get('/getAllParking', getAllParking)
    
    app.post('/createUser' , createUser)
    app.post('/validateUser' , validateUser)

    app.post('/createdParking', createParking)
    app.post('/seetParking' , setParkingSeet)
    app.post('/claerParkingSeet', clearParkingSeet)
}

export default router
