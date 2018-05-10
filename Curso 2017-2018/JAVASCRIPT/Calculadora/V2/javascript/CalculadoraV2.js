function ObtenerOperando(idOperando) 
{
	var miOperando;

	miOperando = document.getElementById(idOperando);
	return parseInt(miOperando.value);
}
function RealizaOperacion(tipoOperacion)
{
	// 1. Obtener valor primer  operando
	// 2. Obtener valor segundo operando
	// 3. Realizar la operación con lo operandos 
	//    y según el valor de tipoOperacion 
	// 4. Guardar el resultado
	var valor1, valor2, valor;

	valor1 = ObtenerOperando('Operando1');
	valor2 = ObtenerOperando('Operando2');
	if (tipoOperacion == '+')
		valor = valor1 + valor2;
	else if (tipoOperacion == '-')
		valor = valor1 - valor2;
	else if (tipoOperacion == '*')
		valor = valor1 * valor2;
	else if (tipoOperacion == '/')
		valor = valor1 / valor2;
	else 
		valor = 0;
	document.getElementById('Resultado').innerHTML = valor;
}

