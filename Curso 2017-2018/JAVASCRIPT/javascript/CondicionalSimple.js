function CalcularEtapa() 
{
	var campoEdad,
	    campoResultado,
	    valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = campoEdad.value;
	if (valorEdad >= 18)
	{
		campoResultado.innerHTML = "Eres mayor de edad";
        campoEdad.value = 0;
    }
	else
		campoResultado.innerHTML = "Eres menor de edad";

}