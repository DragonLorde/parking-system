import userModel from "../models/user.model";
import { IUserServiseProps } from "./model/userServise.model";

export const createUserServise = async (user: IUserServiseProps) => {
    const createdUser = await userModel.create(user)
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
    if(!user) {
        return {"status": "none user"}
    }
    const createdUser = await userModel.findOne(user)
    if(createdUser.password == user.password) {
        return createdUser

    }
    return {
        "status": false
    }
}


