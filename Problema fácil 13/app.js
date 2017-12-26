/*
*La función anagram tiene dos parámetros, uno es la palabra1
*Y la otra es la palabra2
*/
function anagram(word1, word2){
	/*
	*.split hace que se separen las palabras en un array
	*.sort las ordena y .join las junta, el if compara ambas palabras ingresadas dentro
	* de la función, si word2 es un anagrama de word1 retorna true
	* en caso contrario retornar false
	*/
		if(word1.split("").sort().join("") === word2.split("").sort().join("")){
			return true;
		}
		return false;
}

/*
*En estos console.log ingrese palabras distintas a anagramas
*para comprobar que la función esté retornando lo que pido
*/
console.log(anagram("casa", "cosa"));
console.log(anagram("anagrama", "nagarama"));