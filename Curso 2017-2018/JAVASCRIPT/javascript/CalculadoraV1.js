function ObtenerOperando(idOperando) 
{
	var miOperando;



	miOperando = document.getElementById(idOperando);
	if ( length(miOperando.value) > 0 ) 
	  return parseInt(miOperando.value);
	else
	  return 1000;
}
function Sumar() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 + valorOperando2; 
	miResultado.innerHTML = valor;
}

function Restar() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 - valorOperando2; 
	miResultado.innerHTML = valor;
}
function Multiplicar() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 * valorOperando2; 
	miResultado.innerHTML = valor;
}
function Dividir() 
{
	var miResultado,
	    valorOperando1,
	    valorOperando2,
	    valor;

	miResultado = document.getElementById('Resultado');
    valorOperando1 = ObtenerOperando('Operando1');
    valorOperando2 = ObtenerOperando('Operando2');
	valor = valorOperando1 / valorOperando2; 
	miResultado.innerHTML = valor;
}
