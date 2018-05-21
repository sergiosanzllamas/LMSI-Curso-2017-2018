typedef struct
{
	char nombre[30];
	long telefono;
} Contacto;

void CrearContacto(
	Contacto *c,char n[30],long t)
{
	strcpy(c->nombre,n);
    c->telefono = t; 
}

void EscribirContacto(Contacto c)
{
	printf("Nombre: %s Telefono: %ld",
		c.nombre,c.telefono);

}

void CambiarTelefono(Contacto *c,long nt)
{
	c->telefono = nt;
}

Contacto c1;

main()
{
	

	CrearContacto(&c1,"Pepito",1111);
	EscribirContacto(c1);
	CambiarTelefono(&c1,22222);
}