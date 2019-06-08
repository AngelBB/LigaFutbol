//Metodos de Equipo

//Con este metodo mostramos el equipo y los futbolistas que lo componen . Devolvemos una cadena
function mostrarInfoEquipo(){

var informacion="Nombre del Equipo: "+this.nombreEquipo+"\n"+
				"Posicion en la liga: "+this.posicionLiga+"\n"+
				"Goles en contra: "+this.golesEnContra+"\n"+
				"Goles a favor: "+this.golesAfavor+"\n\n"+
				"--------------------------------------\n\n";

				//Ahora sacamos la info de los futbolistas y lo concatenaremos a la variable informacion
				/*IMPORTANTE poner el this porque estamos haciendo referencia a un metoto del  mismo objeto.
				 * No estamos llamando a un metodo de otro objeto.*/
				if(this.hayJugadores()){
					for(var i=0;i<this.jugadores.length;i++){
					
						informacion=informacion.concat((this.jugadores[i]).mostrarInfoFutbolista());
						
					}
				}
				
				return informacion=informacion.concat("-----------------------------\n\n");
}


//Este metodo añade un jugador al equipo por parametros
function annadeJugador1(nombre_futbolista,fecha_nac,demarcacion,goles,sueldo){

	this.jugadores.push(new Futbolista(nombre_futbolista,fecha_nac,demarcacion,goles,sueldo));
	
}

//En este metodo vamos a añadir un futbolista creado previamente .
function annadeJugador2(Futbolista){

	this.jugadores.push(Futbolista);

}

//En este metodo vamos a añadir igualmente un jugador pero a traves de prompt
function pedirDatosJugadoresYannadir(){

var numero_jugadores=parseInt(prompt("¿ Cuantos jugadores desea introducir ?"));

	for(var i=0;i<numero_jugadores;i++){

		var nom=prompt("Introduce el nombre");
		var f_nac=prompt("Introduce la fecha nacimiento DD-MM-AAAA");
		var demarcacion=prompt("Introduce la demarcacion");
		var goles=prompt("Introduce los goles marcados");
		var sueldo=prompt("Introduce el sueldo del jugador");

			/*IMPORTANTE poner el this porque estamos haciendo referencia a un metoto del  mismo objeto.
			 * No estamos llamando a un metodo de otro objeto.*/
			this.annadeJugador1(nom,f_nac,demarcacion,goles,sueldo);

	}

}

//vamos a calcular la inversion total por cada jugador
function calcularInversion(){

var cantidad_total=0.0;

/*IMPORTANTE poner el this porque estamos haciendo referencia a un metoto del  mismo objeto.
* No estamos llamando a un metodo de otro objeto.*/
if(this.hayJugadores()){

	for(var i=0;i<this.jugadores.length;i++){

		cantidad_total+=(this.jugadores[i].sueldo);
		
	}

}

	return parseFloat(cantidad_total);

}


//Vamos a hallar por cada demarcacion cuantos goles se han marcado.
//Receibiremos  una cadena indicando la  demarcacion correspondiente
function calcularGolesPorDemarcacion(demarc){

var total_goles=0;

/*IMPORTANTE poner el this porque estamos haciendo referencia a un metoto del  mismo objeto.
* No estamos llamando a un metodo de otro objeto.*/
	if(this.hayJugadores()){

		for(var i=0;i<this.jugadores.length;i++){
		
			//comprobamos que el jugador tenga la demarcacion que buscamos
			if((this.jugadores[i]).demarcacion == demarc){
				total_goles=(this.jugadores[i].goles)+total_goles;
			}//if
			
		}//for

			return total_goles;
	}//if 

}

//Nos servira para comprobar que el equipo no este vacio y haya por lo menos un jugador
function hayJugadores(){

	var hay=false;
	if(this.jugadores.length!=0){
		
		hay=true;
	}
	
	return hay;

}


//Constructor de equipo
function Equipo(nom,pos_liga,gol_contra,gol_afavor){

//Metodos
	this.mostrarInfoEquipo=mostrarInfoEquipo;
	this.annadeJugador1=annadeJugador1;
	this.annadeJugador2=annadeJugador2;
	this.pedirDatosJugadoresYannadir=pedirDatosJugadoresYannadir;
	this.calcularInversion=calcularInversion;
	this.calcularGolesPorDemarcacion=calcularGolesPorDemarcacion;
	this.hayJugadores=hayJugadores;
//Propiedades
	this.jugadores=new Array();
	this.nombreEquipo=String(nom);
	this.posicionLiga=parseInt(pos_liga);
	this.golesEnContra=parseInt(gol_contra);
	this.golesAfavor=parseInt(gol_afavor);
	
	
}



