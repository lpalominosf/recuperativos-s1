/*
*Creo una función que rotará los elementos de mi arreglo
*/
function rotateElements(array ,times){
	/*
	*
	*/
  array = array.slice();
  /*
	* times-- recorre los números al revés
  */
  while(times--){
  	/*
		*.shift saca el primer numero de mi arreglo
  	*/
    var numberShifted = array.shift();
    /*
		*.push va agregando los números al final
    */
    array.push(numberShifted)
  }

  /*
	*Retorna arreglo nuevo
  */
  return array;
}

/*
*Si no se define en un arreglo previo, no funciona (al menos a mi no me funciona)
*/
var arr = [1,2,3,4,5,6];
console.log(rotateElements(arr, 4));