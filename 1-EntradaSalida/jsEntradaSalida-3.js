/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = document.getElementById('elNombre').value;
	alert (nombre);
	/*document.getelementbyID lo que logra es traerme
	del HTML un elemento nombrado por la ID, como
	lo unico importante del elemento es el valor y
	no el elemento utilizamos ".value" como para
	retirar solo el valor del elemento*/
}


