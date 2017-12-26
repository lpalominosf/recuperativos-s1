/*
* La función palindrome hara que se ejecute lo que nos pidem, 
*determinar si una palabra ingresada es palindromo o no
*/
function palindrome(word) {
    /*
     *Variable long corresponde a la longitud de la palabra
     *ingresada por el usuario
     * var min corresponde a la palabra ingresada por el
     *usuario convertida a minúsculas
     */
    var min = word.toLowerCase();
    var long = min.length;
    /*
		*Este for recorre toda la palabra ingresada por el usuario
    */
    for (var i = 0; i < long; i++) {
    	/*
			*La condición indica que si la palabra (ya en minusculas)
			*ingresada por el usuario, no es igual a la palabra al revés
    	*entonces retornará falso, de lo contrario retorna true
    	*/
        if (min[i] !== min[long - 1 - i]) {
            return false;
        }
    }return true;
}

console.log(palindrome("Arenera"));
console.log(palindrome("Araña"));