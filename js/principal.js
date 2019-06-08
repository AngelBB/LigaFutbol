//Creacion de futbolistas
var futbolista1=new Futbolista('Juan Carlos',21+"-"+04+"-"+1989,'portero',1,1500);
var futbolista2=new Futbolista('Armando Lozano',8+"-"+04+"-"+1985,'defensa',4,1550);
var futbolista3=new Futbolista('Iago Bouzon',16+"-"+01+"-"+1985,'defensa',2,1550);
var futbolista4=new Futbolista('Abel Gomez',28+"-"+07+"-"+1986,'centrocampista',6,1600);
var futbolista5=new Futbolista('Joselu',5+"-"+12+"-"+2000,'centrocampista',8,2000);
var futbolista6=new Futbolista('Benja',10+"-"+10+"-"+1987,'delantero',15,2000);

//Creacion de equipos
var equipo1=new Equipo('Cordoba CF',3,3,4);
var equipo2=new Equipo('Granada CF',1,5,2);
var equipo3=new Equipo('Malaga CF',2,4,2);

//Creacion de la Liga
var LigaAndalucia=new Liga('Liga Andalucia',2014);


//Asociamos los datos
equipo1.annadeJugador2(futbolista1);
equipo1.annadeJugador2(futbolista2);

equipo2.annadeJugador2(futbolista3);

equipo3.annadeJugador2(futbolista4);
equipo3.annadeJugador2(futbolista5);
equipo3.annadeJugador2(futbolista6);

LigaAndalucia.annadeEquipo2(equipo1);
LigaAndalucia.annadeEquipo2(equipo2);
LigaAndalucia.annadeEquipo2(equipo3);

//Creamos un menú
do{
var opcion=parseInt(prompt("Introduce una de las siguientes opciones: \n\n"+
					"1.Mostrar informacion sobre la liga \n"+
					"2.Añadir equipos liga y mostrar \n"+
					"3.Buscar un equipo y ver detalles\n"+
					"4.Mostrar campeon de liga\n"+
					"5.Mostrar jugadores Sub18\n"+
					"6.Mostrar porteros máximos goleadores\n"+
					"7.Mostrar presupuesto liga\n"+
					"8.Salir\n"
					)
				);
				
				
				switch(opcion){
				
					case 1: alert(LigaAndalucia.mostrarInfoLiga());
					break;
					
					case 2: LigaAndalucia.pedirDatosEquiposYannadir();
							LigaAndalucia.annadeJugadoresEquipo(prompt("Introduce el nombre del equipo al que deseas añadir jugadores"));
							alert(LigaAndalucia.mostrarInfoLiga());
					break;
					
					case 3: alert((LigaAndalucia.buscarEquipo(prompt("Introduce el nombre equipo a buscar"))).mostrarInfoEquipo());
					break;
					
					case 4: alert(LigaAndalucia.campeonLiga().mostrarInfoEquipo());
					break;
					
					case 5: var futbolistas=LigaAndalucia.jugadoresSub18();
								for(var i=0;i<futbolistas.length;i++){
								
									alert(futbolistas[i].mostrarInfoFutbolista());
								
								}
					break;
					
					case 6:	var porteros=(LigaAndalucia.porterosGoleadores()).slice();
								for(var i=0;i<porteros.length;i++){
								
									alert(porteros[i].mostrarInfoFutbolista());
								
								}
					break;
					
					case 7: alert(LigaAndalucia.calcularPresupuestoLiga());
					break;
					
					case 8: alert("Has salido de la aplicación ");
					break;
					
					default: alert('Error inesperado')
					break;
				
				}
	}while(opcion!=8);			
				
				
				
				
				
				
				
				