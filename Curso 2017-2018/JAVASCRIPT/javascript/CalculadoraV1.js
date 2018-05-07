function ObtenerDato1()
{
	var miResultado;
	var miDato;
    
	miDato = document.getElementById('Dato1');
	miResultado = document.getElementById('Resultado');
    miResultado.innerHTML = 
      "El valor del dato es " + miDato.value;
}
