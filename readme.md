Con la DB Postgres levantada (Y limpia, sin tablas) y pgAdmin4 abierto

Vamos a crear un proyecto nuevo y levantar el package.json con un `npm init -y`

Instalamos dependencias:
`npm install prisma typescript @types/node --save-dev`

Iniciamos y configuramos TS:
`tsc --init`

Nos traemos el CLI de Prisma:
`npx prisma`

Creamos el Prisma Schema:
`npx prisma init`

Completamos los datos de la variable de entorno "DATABASE_URL" con los datos de la base que tenemos levantada en docker

Empezamos creando el schema de la DB en el schema.prisma siguiendo con la temática camada/alumno

Migramos estos modelos a la DB con el prisma migrate:
`npx prisma migrate dev --name init`

Con esto vamos a generar la carpeta migrations y el migration.sql en donde vamos a poder ver el codigo sql generado por nuestro comando. Ademas, las tablas van a haberse creado en la base de datos (ver pgAdmin)

Vamos a instalar Prisma Clienmt para poder generar las queries que van a interactuar con la base de datos
`npm install @prisma/client`

Creamos un index.ts y realizamos las consultas