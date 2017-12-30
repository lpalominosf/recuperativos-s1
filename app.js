//PROBLEMA DIFICIL 1
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

//PROBLEMA DIFICIL 4
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

//PROBLEMA MEDIO 8
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

//PROBLEMA MEDIO 10
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

//PROBLEMA FACIL 11
/*
* Función validar promedio, lo que hará es que al 
* yo pasarle las notas me entregará la alerta
* diciendo si el alumno aprueba o no
*/
function validarPromedio(notas){
  /*
  *var suma parte en 0 para que pueda sumar todas
  *las notas que le pasaremos
  */
  var suma = 0;
  for(var i = 0; i<notas.length; i++){
    suma += notas[i];
    
    /*
    *+= hace que el array se sume entre si
    */
    
  }

  /*
  *la variable guarda la suma de las notas por la longitud del array
  *dividiendo sus datos y entregando un promedio
  *si el promedio es igual o mayor a 4 la alerta entrega "Aprobado!! :)"
  *de lo contrario la alerta muestra "Rebrobado :c"
  */
  var promedio = suma/notas.length;
  if(promedio >= 4){
      alert("Aprobado!! :)");
    }else{
      alert("Reprobado :c");
    }
}

console.log(validarPromedio([3,3,1,2,2,4,2,1,2,3]));

//PROBLEMA FACIL 12
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

//PROBLEMA FACIL 13
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

