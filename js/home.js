function $$(id){
	return document.getElementById(id);
}

var listaContenidos = ['#home_certificados','#home_tramites','#home_consultas',
'#home_notificaciones','#home_informacion','#home_ayuda'];
var listaFilaContenido = ['#home_fila1','#home_fila2','#home_fila3'];
$(function(){
	
	$('#home_main').sortable();
	$('#home_main').disableSelection();
	listaFilaContenido.forEach(function(lista){
		connectWith: '.par_Home';
		$(lista).sortable();
		$(lista).disableSelection();
	});


	/*
	listaContenidos.forEach(function(contenido){
		$(contenido).draggable({
			containment:'#home_main',
			start: function(){
				console.log(event.clientX);
				console.log(event.clientY);
			},
			stop: function(){
				console.log(event.clientX);
				console.log(event.clientY);	
			}
		});
	});

	listaFilaContenido.forEach(function(lista){
		$(lista).droppable({

		});
	});
	*/
});
