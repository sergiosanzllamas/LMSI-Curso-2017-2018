function CalcularDia()
{
	var campoResultado,
	    fechaActual,
	    diaActual;

	campoResultado = document.getElementById('Resultado');
    // Instanciación del objetro Date.
    fechaActual = new Date();
    // La función getDay devuelve el día de la semana 
    // de la fecha:
    //       0: Domingo    
    //       1: Lunes       
    //       6: Sábado
    diaActual = fechaActual.getDay(); // getDay(fechaActual)
    switch(diaActual)
    {
    	case 1:
    	    campoResultado.innerHTML = "Lunes ";
    	    break;
    	case 2:
    	    campoResultado.innerHTML = "Martes ";
    	    break;
    	case 3:
    	    campoResultado.innerHTML = "Miércoles ";
    	    break;
    	case 4:
    	    campoResultado.innerHTML = "Jueves ";
    	    break;
    	case 5: 
    	    campoResultado.innerHTML = "Viernes ";
            campoResultado.innerHTML += "Entre semana";
            break;
        case 6:
        case 0: 
            campoResultado.innerHTML = "Fin de semana";
            break;
        default:
            campoResultado.innerHTML = "Día no válido";
            break;
    }
}