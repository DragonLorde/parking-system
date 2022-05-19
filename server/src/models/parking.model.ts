import { model, Schema } from "mongoose"

const ParkingSchema = new Schema({
    locathion: {
        type: String,
    },
    name: {
        type: String,
    },
    lenght: {
        type: Number,
    },
    reserved: {
        type: Array,
    }
})

export default model("parking" , ParkingSchema)