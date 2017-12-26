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
	var promedio = suma/notas.length;
	if(promedio >= 4){
			alert("Aprobado!! :)");
		}else{
			alert("Reprobado :c");
		}
}

console.log(validarPromedio([3,3,1,2,2,4,2,1,2,3]));


