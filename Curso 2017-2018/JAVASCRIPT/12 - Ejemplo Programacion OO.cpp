class Contacto
{
	// Atributos de Contacto
	public char nombre[30];
	public long telefono;

	// Métodos de Contacto
    public Contacto(char n[30],long t)
    {
    	strcpy(this.nombre,n);
    	this.telefono = t;
    	listanumero = malloc(3*sizeof(int));
    }

    public ~Contacto()
    {
    	// SÓLO EXISTE EN C++ (Con supervisión de adulto)
    	this.telefono = 0;
    	memset(this.nombre,'\0',30);
    	free(listanumero);
    }

    void Escribir()
    {
	   printf("Nombre: %s Telefono: %ld",
		      this.nombre,this.telefono);
    }
    
    void CambiarTelefono(long nt)
    {
	  this.telefono = nt;
    }
}

int main()
{
	Contacto c1;

	c1 = new Contacto("Pepe",1111);
	c1.Escribir();
	c1.CambiarTelefono(2222);
}




