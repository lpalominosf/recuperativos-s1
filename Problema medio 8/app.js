/*
*Creo mi arreglo:
*/
var arr = [3,77,9,0,12];

/*
*Mi función se llama position, ya que busco
*la posición dentro de mi arreglo
*y que esta me la devuelva
*/
function position(number){
	/*
	*el for recorre todas las posiciones del arreglo
	*arr.length corresponde a la longitud de este
	*/
	for(var i=0; i<arr.length; i++){
		/*
		*El if compara el arreglo y su posición, con el numero que ingresare
		*que corresponde a un numero del mismo arreglo
		*/
		if(arr[i] === number){
			/*
			*este return corresponde a lo que retornara indexOf
			*number sera el número dentro del arreglo
			*y este number será el que yo le pase para que devuelva la posición.
			*/
			return arr.indexOf(number);
		}
	}
}

console.log(position(77));