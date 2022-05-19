import userModel from "../models/user.model";
import { IUserServiseProps } from "./model/userServise.model";



export const createUserServise = async (user: IUserServiseProps) => {
    const userData = {
        data: null,
        status: null
    }
    const createdUser = await userModel.create(user)
    userData.data = createdUser
    userData.status = true
    return userData
}

//https://api.multiavatar.com/8878745

export const getUsersServise = async () => {
    const createdUser = await userModel.find()
    return createdUser
}

export const getUserServise = async (userId: string) => {
    if(!userId) {
        return {"status": "none ID"}
    }
    const createdUser = await userModel.findById(userId)
    return createdUser
}

export const validateUserServise = async (user: IUserServiseProps) => {

    const userData = {
        data: null,
        status: null
    }

    if(!user.login || !user.password) {
        userData.data = {"error": "none user"}
        userData.status = false 
        return userData
    }
    const createdUser = await userModel.findOne(user)
    if(createdUser) {
        if(createdUser.password == user.password) {
            userData.data = createdUser
            userData.status = true 
            return userData
        }
    }
    
    return {
        "status": false
    }
}


