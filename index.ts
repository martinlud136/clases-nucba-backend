import jwt from "jsonwebtoken"

interface IObetoAGuardar {
    id:number,
    username: string,
    isAdmin:boolean
}

const objetoAGuardar: IObetoAGuardar = {
    id: 1234,
    isAdmin: false,
    username: "LioMessi"
}

const miClaveSecreta = "clavemuysecreta"

const tokenFirmado = jwt.sign(objetoAGuardar, miClaveSecreta)

// console.log({tokenFirmado})

const tokenFirmadoConExpiración = jwt.sign(objetoAGuardar, miClaveSecreta, {
    expiresIn: "30m"
})

// console.log({tokenFirmadoConExpiración})

const tokenConCasoDeError = jwt.sign(objetoAGuardar, miClaveSecreta,{
    expiresIn: "30m"
},(err, token)=>{
    if(err){
        console.log("Se rompio el token")
        console.log(err)
    }else{
        // console.log("Token generado correctamente")
        console.log(token)
    }
})
// console.log({tokenConCasoDeError})

const generarJWT = (dataAGuardar: IObetoAGuardar) =>{
    return new Promise((res,rej)=>{
        jwt.sign(objetoAGuardar, miClaveSecreta,{
            expiresIn: "30m"
        },(err, token)=>{
            if(err){
                console.log("Se rompio el token")
                rej("se rompio el token")
            }else{
                // console.log("Token generado correctamente")
                res(token)
            }
        })
    })
}

(
    async()=>{
        const respuesta = await generarJWT(objetoAGuardar)
        console.log({respuesta})   
    }
)()


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaXNBZG1pbiI6ZmFsc2UsInVzZXJuYW1lIjoiTGlvTWVzc2kiLCJpYXQiOjE2ODkwMzI4MDEsImV4cCI6MTY4OTAzNDYwMX0.BmD1MgxZUUnQ2hx3ljY0htnhndhhWCaiy8Fsn-QoHis'

const dataVerificada = jwt.verify(token, miClaveSecreta)

console.log({dataVerificada})

//Cantidad de vueltas de hasheo que vamos a utilizar. Por defecto es 10. Mientras mas alto el numero, mas seguro, pero mas va a tardar.
// Mostrar la Casi inmediatez de dejarlo por defecto y mostrar como tarda un poco mas con 15

//Los métodos Sync pueden bloquear la ejecucion del programa, pero son mas simples de usar
//Hay métodos async que trabajan por detras con promesas. Permiten que otras tareas se ejecuten mientras se general los salt o se comparan los datos.

//Lós metodos asincronos tienen la misma lógica que los metodos sincronos, con la unica diferencia que deberian utilizarse con async/await.

import bcryptjs from "bcryptjs"

const contraseñaAEncriptar = "Micontraseñasupersegura";

//metodo sincrono

const salt = bcryptjs.genSaltSync(15)

console.log("salt")
console.log(salt)

const contraseñaEncriptada = bcryptjs.hashSync(contraseñaAEncriptar, salt)

console.log("Contraseña encriptada")
console.log(contraseñaEncriptada)

const contraseñaValida = bcryptjs.compareSync(contraseñaAEncriptar, contraseñaEncriptada)

console.log("Mi contraseña es valida?")
console.log(contraseñaValida);

//metodo asyncrono

(async()=>{
        const asyncSalt = await bcryptjs.genSalt(15)

        console.log("asyncSalt")
        console.log(asyncSalt)

        const asyncContraseñaEncriptada = await bcryptjs.hash(contraseñaAEncriptar, asyncSalt)
        
        console.log("async Contraseña Encriptada")
        console.log(asyncContraseñaEncriptada)

        const asyncContraseñaValida = await bcryptjs.compare(contraseñaAEncriptar, asyncContraseñaEncriptada)

        console.log("async mi contraseña es valida?")
        console.log(asyncContraseñaValida)

})()



