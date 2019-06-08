//METODOS DE OBJETO LIGA


//para mostar la informacion de  la liga devolvemos una cadena
function mostrarInfoLiga(){

var informacion="Nombre de la liga: "+this.nombreLiga+"\n"+
				"Año de la liga: "+this.annoLiga+"\n\n"+
				"**************************************\n\n"+
				"**************************************\n\n";
				
				if(this.hayEquipos()){
					for(var i=0;i<this.equiposLiga.length;i++){
					
						informacion=informacion.concat(this.equiposLiga[i].mostrarInfoEquipo());
					
					}
				}				
				
				return informacion;
				
}


//Añadir equipo recibiendo argumentos
function annadeEquipo1(nombre,pos,goles_contra,goles_afavor){

	this.equiposLiga.push(new Equipo(nombre,pos,goles_contra,goles_afavor));

}


//Añadir equipo pervimente creado
function annadeEquipo2(Equipos){

	this.equiposLiga.push(Equipos);

}



//Añadir equipo pidiendo por pantalla
function pedirDatosEquiposYannadir(){

var numEquipos=prompt("Cuantos equipos se van a añadir ?");

	for(var i=0;i<numEquipos;i++){
		
		var nombre=prompt("Nombre del equipo");
		var pos=prompt("Posicion en la liga");
		var goles_contra=prompt("Goles en contra");
		var goles_favor=prompt("Goles a favor");
	
		this.equiposLiga.push(this.annadeEquipo1(nombre,pos,goles_contra,goles_favor));

	}

}


//Para calcular el presupuesto total de la liga.Devolvemos un numero real
function calcularPresupuestoLiga(){

var presupuesto_total=0.0;

	for(var i=0;i<this.equiposLiga.length;i++){
//El metodo calcularinversion() calculara por cada equipo cuanto tiene invertido en total por cada jugador
		presupuesto_total+=(this.equiposLiga[i].calcularInversion());

		
	}

	return parseFloat(presupuesto_total);

}


//Para buscar un equipo y devolver el objeto equipo
function buscarEquipo(nombre_equip){

	for(var i=0;i<this.equiposLiga.length;i++){
		
		if(this.equiposLiga[i].nombreEquipo==nombre_equip){
		
			resultado=i;
		
		}
	}
	if(resultado>=0){ 

		return this.equiposLiga[resultado];
		
	}else{
	
		return null;
}
}

//Para ir añadiendo jugadores al los equipos
function annadeJugadoresEquipo(nombre_equip){

	if(this.buscarEquipo(nombre_equip)!=null){

		this.buscarEquipo(nombre_equip).pedirDatosJugadoresYannadir();
		
		
			return true;
	}else{
	
			return false;
	}

}


//Para ver quien es el campeon de la liga.Devolvemos un objeto clase Equipo
function campeonLiga(){
var cont=0, pos_arr=0;

	for(var i=1;i<this.equiposLiga.length;i++){
	cont=i;
		if(this.equiposLiga[i].posicionLiga>this.equiposLiga[cont--].posicionLiga){
			
			pos_arr=cont;
			
		}else{
		
			pos_arr=i;
			
		}
			
	}
	
		return this.equiposLiga[pos_arr];

}


//Sacamos los jugadores que sean menores de 18 años y los metemos en un array
function jugadoresSub18(){

var Futbolistas=new Array();

	for(var i=0;i<this.equiposLiga.length;i++){
		for(var j=0;j<this.equiposLiga[i].jugadores.length;j++){
			if((this.equiposLiga[i]).jugadores[j].calcularEdadFutbolista()<18){

				Futbolistas.push(this.equiposLiga[i].jugadores[j]);

			}
		}
	}
//Comprobamos si en el array hay algo
if(Futbolistas.length==0){
	return null;
}else{
	return Futbolistas;
}	

}



//Vamos a sacar los porteros que hayan marcado mas goles
function porterosGoleadores(){

var Futbolistas=new Array();
var auxFutbolistas=new Array();
var cont=0,comprobacion=false;
	for(var i=0;i<this.equiposLiga.length;i++){//recorremos los equipos
		for(var j=0;j<this.equiposLiga[i].jugadores.length;j++){//recorrenos los jugadores del equipo en el que nos encontramos
		
			if(this.equiposLiga[i].jugadores[j].demarcacion=='portero'){//Comprobamos que la demarcacion sea la correcta
				comprobacion=true;
				/*Deberiamos sacar un array con todos los porteros y depues compararlos entre ellos,
				seria mas facil*/
					auxFutbolistas.push(this.equiposLiga[i].jugadores[j]);
				
			}
		}
		
	}//AQUI VA BIEN LA COSA
		
	if(comprobacion){
	
	//Vamos a recorrer el arrary auxiliar de Porteros y determinaremos cual es el mas goleador
	var res=new Array();//aqui guardaremos los indices que nos serviran para recorrer el array auxiliar de futbolistas con los porteros mas goleadores
	var aux=0;
	
	if(auxFutbolistas.length>=2){
	
	for(var i=1;i<auxFutbolistas.length;i++){
	aux=i;
	
	alert(aux);
	if(auxFutbolistas[i].goles<auxFutbolistas[aux--].goles){
			res.push(aux); 
			
		}else if(auxFutbolistas[i].goles==auxFutbolistas[aux--].goles){
			res.push(i,aux); 
			
		}else{
			res.push(i);
			
		}
	
	}//se cierra for
	}else{
	
		res.push(0); 
		
	}//se cierra
	
	
	
	
	//Para reutilizar el array anterior llamado Futbolistas lo voy a borrar o mejor dicho, dejarlo vacio
	Futbolistas.length=0;
		
	for(var i=0;i<res.length;i++){
		Futbolistas.push(auxFutbolistas[res[i]]);//sacamos las posiciones con sus respectivos datos y el resultado lo vamos metiendo en Futbolistas
	}
	}//if de comprobacion	
	//Comprobamos si en el array hay algo
	if(Futbolistas.length==0 || typeof(Futbolistas)=='undefined'){
		return null;
	}else{
		return Futbolistas;
	}	

}//se cierra la funcion

//Metodo para comprobrar que hay equipos en la liga
function hayEquipos(){
var hay=false;

	if(this.equiposLiga.length!=0){

		hay=true;

	}

	return hay;

}


//Constructor Liga
function Liga(Nom_liga,anno){

//Metodos
this.mostrarInfoLiga=mostrarInfoLiga;
this.hayEquipos=hayEquipos;
this.annadeEquipo1=annadeEquipo1;
this.annadeEquipo2=annadeEquipo2;
this.pedirDatosEquiposYannadir=pedirDatosEquiposYannadir;
this.calcularPresupuestoLiga=calcularPresupuestoLiga;
this.buscarEquipo=buscarEquipo;
this.annadeJugadoresEquipo=annadeJugadoresEquipo;
this.campeonLiga=campeonLiga;
this.jugadoresSub18=jugadoresSub18;
this.porterosGoleadores=porterosGoleadores;

//Propiedades 
	this.equiposLiga=new Array();
	this.nombreLiga=String(Nom_liga);
	this.annoLiga=parseInt(anno);

}










