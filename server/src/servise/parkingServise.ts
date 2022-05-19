import parkingModel from "../models/parking.model"
import { IServiseProps } from './model/servise.model'

export const createParkingServise = async (parkingData) => {
    
    console.log(parkingData);
    
    if(Object.keys(parkingData).length === 0) {
        return {
            data: null,
            status:false,
        }
    }
    const createdParking = await parkingModel.create(parkingData)
    const data = {
        data: createdParking,
        status: true,
    }
    return data
}


export const getParkingServise = async (parkingId: string) => {
    if(!parkingId) {
        return {"status": "none ID"}
    }
    const createdUser = await parkingModel.findById(parkingId)
    return createdUser
}

export const getAllParkingServise = async () => {
    const createdUser = await parkingModel.find()
    return createdUser
}

export const setParkingSeetServise = async (parkingData: IServiseProps) => {
    const filter = { _id: parkingData.id }
    const prev = await parkingModel.findById(parkingData.id)
    prev.reserved.push(parkingData.index)
    console.log(prev.reserved)
    
    const update = { "reserved": prev.reserved }
    const UpdateParkingData = await parkingModel.findByIdAndUpdate(filter, update)
    await UpdateParkingData.save()
    const UpdatedParkingData = await parkingModel.findById(filter)
    return UpdatedParkingData
}

export const clearParkingSeetServise = async (parkingData: IServiseProps) => {
    const filter = { _id: parkingData.id }
    const update = { "reserved": [{
        index:0,
        regNumber: '',
        "name": '',
    }] }
    const UpdateParkingData = await parkingModel.findByIdAndUpdate(filter, update)
    await UpdateParkingData.save()
    const UpdatedParkingData = await parkingModel.findById(filter)
    return UpdatedParkingData
}



