function CalcularEtapa() 
{
	var campoEdad,
	    campoResultado,
	    valorEdad;

	campoResultado = document.getElementById('Resultado');
	campoEdad = document.getElementById('Edad');
	valorEdad = parseInt(campoEdad.value);
	switch(valorEdad) 
	{
		case 1: 
		case 2: 
		case 3: 
		case 4: 
		  campoResultado.innerHTML = "Infancia";
		  break;

		case 13: 
		  campoResultado.innerHTML = "Adolescencia";
		  break;
		case 17: 
		  campoResultado.innerHTML = "Juventud";
		  break;
		case 23: 
		  campoResultado.innerHTML = "Adulto";
		  break;
	}
 }
