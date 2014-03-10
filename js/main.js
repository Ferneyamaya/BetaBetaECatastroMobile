document.getElementById('btnMenu').onclick = function(){
	var menu = document.querySelector( '#lista_central' );

	if(menu){
		if(menu.className == 'lista_opciones'){
			menu.className = 'lista_opciones_ver';
		}else{
			menu.className = 'lista_opciones';
		}
		
	}

}