class Contacto
{
    // Creación del constructor
    //   -n: Nombre, t: Teléfono
    constructor(n,t)
    {
    	this.nombre = n;
    	this.telefono = t;
    }

    Escribir()
    {
    	var resultado;

    	resultado = document.getElementById('Resultado');
    	resultado.innerHTML = 
    	   "Nombre: "   + this.nombre + "<br>" + 
    	   "Teléfono: " + this.telefono + "<br>";
    }

    CambiarTelefono(nuevoT)
    {
    	this.telefono = nuevoT;
    }

    CambiarNombre(nuenoN)
    {
    	this.nombre = nuenoN;
    }
}

// Objetos globales 
var c1; // Objeto de la clase Contacto

function CrearContacto() 
{
	c1 = new Contacto("Pepe",1111),
	c1.Escribir();
}

function ModificarContacto() 
{
	var valorNombre,
	    valorTelefono;

	valorNombre = document.getElementById('nombre').value;
	valorTelefono = document.getElementById('telefono').value;
	c1.CambiarNombre(valorNombre);
	c1.CambiarTelefono(valorTelefono);
	c1.Escribir();
}