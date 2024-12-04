import { Schema, model } from mongoose
import { Model } from mongoose
const EsquemaCarros = new Schema({
    marca:String,
    motor:Number,
    modelo: Number
})

export const ModeloCarros = new model("tabla de carros", EsquemaCarros)



