function EscribirNumeros() 
{
	var campoResultado,
	    numero,
	    contador;

	campoResultado = document.getElementById('Resultado');
	numero = parseInt(document.getElementById('Numero').value);
	// Escribir los número del 1 al numero: 
	//     - Con while
	contador = 1;
    while (contador<=numero)
    {
    	campoResultado.innerHTML += " " + contador++;
    }
	//     - Con do-while
	contador = 1;
	do
	{
  	  campoResultado.innerHTML += " " + contador++;
    }while (contador<=numero)
}
