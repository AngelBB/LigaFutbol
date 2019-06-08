//METODOS del Objeto Futbolista

//Devolvemos la informacion del futbolista a traves de una cadena
function mostrarInfoFutbolista(){

var informacion="Nombre: "+this.nombre+"\n"+
				"Fecha de nacimiento: "+this.fecha_nacimiento.getDate()+"-"+
										(this.fecha_nacimiento.getMonth()+1)+"-"+
										this.fecha_nacimiento.getFullYear()+"\n"+
				"Demarcacion: "+this.demarcacion+"\n"+
				"Goles: "+this.goles+"\n"+
				"Sueldo: "+this.sueldo+" €\n\n";
				
				
				return informacion;
}




function calcularEdadFutbolista(){

var fecha_actual=new Date();//sacamos el año actual 
var edad=((fecha_actual.getFullYear())-(this.fecha_nacimiento.getFullYear()));//sacamos el año de nacimiento

	return edad;

}

//CONSTRUCTOR de futbolista
function Futbolista(nomb,fec_nac,demarc,goles_temp,salario){

//Metodos
	this.mostrarInfoFutbolista=mostrarInfoFutbolista;
	this.calcularEdadFutbolista=calcularEdadFutbolista;
	
//Propiedades
	this.nombre=String(nomb);
	fec_nac=fec_nac.split("-");
	this.fecha_nacimiento=new Date(fec_nac[2],fec_nac[1]-1,fec_nac[0]);
	this.demarcacion=demarc.toLocaleLowerCase();
	this.goles=parseInt(goles_temp);
	this.sueldo=parseFloat(salario);
	
}







