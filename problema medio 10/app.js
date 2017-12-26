/*
*El array contiene los nombres de los amigos
*/
var friends = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"];
/*
*Sit es el nombre de mi función, la que llamará al número
*De asiento que le corresponde a cada uno de los amigos
*/
function sit(name){
	/*
	*El for itera por cada una de las posiciones del arreglo
	*/
	for(var i = 0; i <friends.length; i++){
		/*
		*El if me indica que la posicion de cada uno de los amigos,
		*Correspondera al nombre (name) que yo ingrese al
		* llamar a mi function
		*/
		if(friends[i] === name){
			/*
			* Si el amigo tiene asiento, retorna el indice +1
			*/
			return i+1;
		}
	}

	/*
	*Si el amigo por el contrario No tiene asiento, retorna 0
	*/
	return 0;
}
console.log(sit("Ale"));