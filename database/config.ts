import mongoose from "mongoose";

export const conectarDB = async():Promise<void>=>{
        try{
            await mongoose.connect("mongodb+srv://nucbaTest:AYtxPeD1fsQ1HceF@nombredecluster.5tgay2n.mongodb.net/")
            console.log("Base de datos online")
        }catch(error){
            console.error(error)
            throw new Error("Error a la hora de iniciar la base de datos")
        }
}