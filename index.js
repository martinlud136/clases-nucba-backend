import inquirer from 'inquirer';
import { save, get, obtenerUsuarioDelArchivo } from './readWritePromises.js';
import {promtUser, promtObtenerNombre} from "./promtUser.js"



const main = async()=>{
    let promptCorriendo = true
    while(promptCorriendo){
        const opciones = await inquirer.prompt([
            {
              type: 'list',
              name: 'choices',
              message: "Selecciona una opcion",
              choices:[
                {value: 1, name: "Agregar nuevo usuario"},
                {value: 2, name: "Obtener usuarios"},
                {value: 3, name: "Buscar usuario por nombre"},
                {value: 99, name: "Exit"}
              ]
            },
          ])
    
        switch(opciones.choices){
            case 1:
                await createNewUser();
                break
            case 2:
                await getAllUsers()
                break
            case 3:
                await obtenerUsuarioPorNombre()
            case 99:
                promptCorriendo = false
                break
            default:
                promptCorriendo= false
                break
        }
    }
}

main()

const createNewUser = async () =>{

    const user = await promtUser()

    const userJson = await get("./users.json")

    const newUserData = [...userJson, user]

    save("./users.json", newUserData)
}

const getAllUsers = async()=>{
    const users = await get("./users.json")
    console.log(users)
}

const obtenerUsuarioPorNombre= async()=>{
    const nombre = await promtObtenerNombre()
    const usuario = await obtenerUsuarioDelArchivo(nombre)
    console.log(usuario)
}