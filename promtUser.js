import inquirer from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
  }
];

const nombre = [
  {
    type: 'input',
    name: 'search_name',
    message: "Ingrese el nombre que desea buscar",
  },
];

export const promtUser = ()=>{
    return new Promise((resolve, reject)=>{
      try{
        inquirer.prompt(questions)
        .then(res=>{
          resolve(res)
        })
      }catch(error){
        reject(error)
      }
    }) 
}

export const promtObtenerNombre= ()=>{
  return new Promise((resolve, reject)=>{
    try{
      inquirer.prompt(nombre)
      .then(res=>{
        resolve(res)
      })
    }catch(error){
      reject(error)
    }
  }) 
}