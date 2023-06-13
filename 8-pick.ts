interface Producto {
    id:number
    nombre: string
    precio: number
    categoria: string
    descripcion: string
}

type InfoProducto = Pick<Producto, "nombre" | "precio" | "descripcion">

const producto: InfoProducto ={
    nombre: "camiseta",
    precio: 50,
    descripcion: "descripcion"
}
console.log(producto)