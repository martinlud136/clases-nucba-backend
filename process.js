//objeto global process, informacion y datos del proceso actual
//leer opciones y banderas desde llamados de terminal

//funcion argv, (variables arguments --> la variable de los argumentos)

console.log(process.argv)

[
    '/usr/bin/node',  //qui nos muestra donde se encuentra isntalado node
    '/home/martin/martin/nucba/clases-nucba-backend/process.js' //  aqui nos muestra donde se encuentra el archivo que acabamos de correr
]

//si escribimos node process.js -nombre carlos

[
    '/usr/bin/node',
    '/home/martin/martin/nucba/clases-nucba-backend/process.js',
    '-nombre',
    'carlos'
  ]

//funcion para extraer el valor de la funcion que paso el usuario

function leerOpcion(opcion){
    const index = process.argv.findIndex(arg=>arg === opcion)
    if(index === -1){
        return false
    }
    return  process.argv[index + 1 ]
}

const nombre = leerOpcion("-nombre")

console.log(`El nombre es: ${nombre}`) //nos da autamaticamente la nueva linea


//---------stdin stdout---------------//
//el objeto global process tiene otros dos metodos que nos permiten leer y escribir en la terminal stdin stdout

process.stdout.write("Cual es el apellido: \n")

//escuchando el input del usuario
process.stdin.on("data", function(data){
    process.stdout.write(`El nombre completo es ${nombre} ${data} \n`)
   //hasta aca el proceso no termina
   process.exit();
})

//opcion para realizar las dos solicitudes en simultaneo

function question(prompt) {
    return new Promise((resolve) => {
      process.stdout.write(prompt);
      
      process.stdin.on("data", (data) => {
        const input = data.toString().trim();
        resolve(input);
      });
    });
  }
  
  async function main() {
    const nombre = await question("¿Cuál es el nombre? ");
    const apellido = await question("¿Cuál es el apellido? ");
  
    process.stdout.write(`El nombre y apellido es: ${nombre} ${apellido} \n`);
    process.exit();
  }
  
  main();
  