import fs from "fs"

export const get = (file) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file, "utf-8", (error, contenido)=>{
            if(error){
                reject(error)
            }else{
                resolve(JSON.parse(contenido))
            }
        })
    })
}

export const save = (file, newData) =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(file, JSON.stringify(newData), (error)=>{
            if(error){
                reject(error)
            }else{
                resolve("se escribió el archivo correctamente")
            }
        })
    })
}

export const obtenerUsuarioDelArchivo = async (nombre)=>{
    const users = await get("./users.json")
    const userToReturn = users.filter(user => user.first_name === nombre.search_name)
    return userToReturn[0]
}