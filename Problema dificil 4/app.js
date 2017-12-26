/*
*Creo una función llamada smallest, la que me devuelve 
*el número más pequeño dentro de todos los que se
*encuentran en el array
*/
function smallest(arr){
	/*
	* var masPequeño, va almecenando el número más
	*pequeño a medida que el ciclo va recorriendo el arreglo
	*/
var masPequeño = 0;
/*
*El ciclo recorre el arreglo dado
*/
	for(var i=0; i<arr.length; i++){
		/*
		*[masPequeño] va a ser mi posición y la base de comparacion
		*/
		if(arr[i] < arr[masPequeño]){
			/*
			*Al partir en cero, va comparando todos los numeros
			*/
			masPequeño = i;
		}
	}
	return masPequeño;
}

console.log(smallest([10,20,1,11,3]));