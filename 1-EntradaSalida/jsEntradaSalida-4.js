/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;

	nombre = prompt ("Ingrese su nombre");

	document.getElementById ("elNombre").value = nombre;

	/*el valor se guarda de derecha a izquierda
	asi que el orden es importante*/
}

