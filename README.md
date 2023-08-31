La idea de esta clase es migrar el nucbazAPI a una base de datos relacional con Prisma.

Al igual que la clase pasada, debemos tener levantado el pgAdmin y la DB de Postgres.

Vamos a partir de la API que ya tenemos terminada y funcionando

Comenzamos instalando y ejecutando el Prisma CLI



npm install prisma --save-dev

npx prisma

npx prisma init



Como ahora vamos conectar con nuestra DB a traves de Prisma, tenemos que configurar la misma en el schema.prisma y la variable de entorno correspondiente en el .env

Pasamos los modelos que teníamos realizados en mongoose a modelos de prisma. Actualmente los modelos deben estar si o si en el schema.prisma. No podemos declararlos fuera e importarlos sin ayuda de alguna liberia externa, por lo tanto, realizamos los modelos en este archivo (schema.prisma)

Una vez que tenemos los modelos, realizamos la migracion para crear las tablas en la DB



npx prisma migrate dev --name init



Hora de interactuar con nuestra base de datos. Instalamos el Prisma Client



npm install @prisma/client



Podemos levantar nuestra API desde este momento

Borramos todo lo referido a la conexion a DB de server.ts

Traemos y exportamos el Prismaclient. Lo hacemos de esta manera para levantar solo una instancia del cliente e prisma y no tener que estar desconectando con cada interaccion a la DB.

Comenzamos a entrar controlador por controlador a cambiar las interacciones con la DB de cada uno. El routeo y las validaciones siguen intactas ya que, lo unico que cambio, es la DB y la interaccion con la misma.

Tener en cuenta que, en ciertas ocasiones, los middlewares tambien interactuan con la base de datos. Aqui tambien deberemos cambiar la interaccion de mongoose por la de prisma.

Tener en cuenta que algunas interfaces deberán ser editadas. Por ejemplo, aquellas en las que el tipo sea "ObjectId", habra que ir cambiandolas por string o number. O bien, crear una nueva interface para usarla en esta migracion.

NOTA IMPORTANTE EN CUANTO AL ARRAY DE ITEMS Debemos tener en cuenta que, en un caso real, los "productos" (items en este caso) deberian estar alojados en su propia tabla, cada uno con su ID, por lo que deberíamos recibir solo un array de ID en lugar de un array de objetos.

Se recomienda comenzar con la migracion de los controladores de "auth", seguir con los de "orders" y terminar con los de "issues".