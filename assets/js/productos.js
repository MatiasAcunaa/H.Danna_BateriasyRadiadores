const carrito = [];

function bateria (marca, precio, voltios, amperes) {
  this.marca = marca;
  this.precio = precio;
  this.voltios = voltios;
  this.amperes = amperes;
}

const bateriaMoura = new bateria ("moura", 30000, 12, 75);
const bateriaPrestolite = new bateria ("prestolite", 25000, 12, 75);
const bateriaVarta = new bateria ("varta", 23000, 12, 70);
const bateriaHeliar = new bateria ("heliar", 20000, 12, 65);
const bateriaVolcano = new bateria ("volcano", 15000, 12, 65);

const baterias = [bateriaMoura, bateriaPrestolite, bateriaVarta, bateriaHeliar, bateriaVolcano];
let resultadoBusqueda = baterias.filter((el) => el.marca.includes('bateria'))

let bateriaElegida = prompt ("Ingrese el numero de la bateria que quiere comprar:\n\n1: Bateria Moura - Precio: 30000\n2: Bateria Prestolite - Precio: 25000\n3: Bateria Varta - Precio: 23000\n4: Bateria Eliar - Precio: 20000\n5: Bateria Volcano - Precio: 15000");

if (bateriaElegida == 1) {
  carrito.push (bateriaMoura);
  alert ("Una bateria Moura fue agregada a su carrito de compras con exito");
}
else if (bateriaElegida == 2) {
  carrito.push (bateriaPrestolite);
  alert ("Una bateria Prestolite fue agregada a su carrito de compras con exito");
}
else if (bateriaElegida == 3) {
  carrito.push (bateriaVarta);
  alert ("Una bateria Varta fue agregada a su carrito de compras con exito");
}
else if (bateriaElegida == 4) {
  carrito.push (bateriaHeliar);
  alert ("Una bateria Heliar fue agregada a su carrito de compras con exito");
}

else if (bateriaElegida == 5) {
  carrito.push (bateriaVolcano);
  alert ("Una bateria volcano fue agregada a su carrito de compras con exito");
}
else {
  alert ("El numero ingresado es incorrecto");
}

alert ("Su carrito de compras tiene " + (carrito.length) + " productos");
