import { model, Schema } from "mongoose"

const ParkingSchema = new Schema({
    locathion: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lenght: {
        type: Number,
        required: true,
    },
    reserved: {
        type: Array,
        required: true,
        unique: true
    }
})

export default model("parking" , ParkingSchema)