import { model, Schema } from "mongoose"
import { number } from "zod"

const UserSchema = new Schema({
    login: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    regNumber: {
        type: String,
        required: true,
    },
    pass:{
        type: String,
        required: true
    },
    reservedSite: {
        type: Number,
        required: false
    },
    parkingId: {
        type: String,
        required: false
    }
})

export default model("user", UserSchema)