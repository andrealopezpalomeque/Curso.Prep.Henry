// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var arr = nombre.split("");       //split separa cada uno de los caracteres del string
  arr[0]= arr[0].toUpperCase();
  return arr.join("");
  
}
// return nombre[0].toUpperCase() + nombre.slice(1); // ESTA ES OTRA FORMA

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb ();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb (n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // numero = [1,2,3,4]
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
    
  }
  cb (suma);
}
  //otra forma
  // var suma = numeros.reduce(function(acc,curr){   //un reduce devuelve el valor unico de un array
  //   return acc + curr;
  // },0) // acumulador desde 0
  // cb (suma)
// }

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (var i = 0;i < array.length;i++) {
    cb (array[i]);
    
  }
}
// //otra forma
//   array.forEach(function(element){
//     cb(element)
//   }); 
// }
function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var resultado = array.map(function(e) { // map recorre el array y a resultado le agrego lo que diga el callback. no modifica el array original a diferencia del for
    return cb (e);
  }) ;
  return resultado;
}
// ejemplo
// function sumar1 (n){
//   return n + 1
// }
// console.log(map([1,2,3,4],sumar1)); ---> [2,3,4,5]

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  for (i=0; i< array.length; i++){
    if (array[i][0] === "a"){
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
