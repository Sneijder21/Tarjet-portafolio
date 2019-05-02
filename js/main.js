$(document).ready(function(){

alert('Bienvenido a mi pagina WEB www.ghostrider.org');
// objeto de banner
var banner = {
	padre: $('#banner'),
	// contar el numero del slide acceder 1ro al padre luego al hijo luego el tamaño
	numeroSlides: $('#banner').children('.slider').length,
	posicion:1
}
// banner info
var info = {
	padre: $('#info'),
	// contar el numero del slide acceder 1ro al padre luego al hijo luego el tamaño
	numeroSlides: $('#info').children('.slide').length,
	posicion:1
}

// kiero k encuentre tus ijos y al 1ro le cambies codec css
banner.padre.children('.slider').first().css({
	'left':0
});

info.padre.children('.slide').first().css({
	'left':0
});
// esta funcion se encarga de calcular cuanto va medir el banner
var altoBanner =function(){
	var alto=banner.padre.children('.slider').outerHeight();
	banner.padre.css({
		'height': alto + 'px'
	});
	console.log(alto);
}

var altoInfo =function(){
	var alto=info.padre.children('.active').outerHeight();
	info.padre.animate({
		'height': alto + 'px'
	});
	console.log(alto);
}
var altoContenedor =function(){
	var altoVentana=$(window).height();
	if (altoVentana<=$('#contenedor').outerHeight()+200) {
		$('#contenedor').css({
			'height': ''
		});
	}else{
		$('#contenedor').css({
			'height': altoVentana + 'px'
		});
	}
}
// llamar a la funcion para ejecutar
altoBanner();
altoInfo();
altoContenedor();
// cuando la ventana cambie de tamaño se ejecute la sig funcion
//solo c ejecuta cuando ay un cambio d pantalla 
$(window).resize(function(){
	altoBanner();
	altoInfo();
	altoContenedor();
});

// agregar botones dinamicamente
$('#info').children('.slide').each(function(){
	$('#botones').append('<span>');
});
$('#botones').children('span').first().addClass('active');
// consultar el numero de sliders
console.log(banner.numeroSlides);

// ----------------------------------------
// ------------Banner
// ----------------------------------------
		//Boton  Siguiente 
$('#banner-next').on('click', function(e){
	e.preventDefault();

	// usar condicional para la animacion
	if ( banner.posicion < banner.numeroSlides) {
		// nos aseguramos de que las demas slider empiecen 
		// desde la derecha
		banner.padre.children().not('active').css({
			'left': '100%'
		});
		// quitamos la clase active y se la ponemos al sig elemento
		// y lo animamos
		$('#banner .active').removeClass('active').next().addClass('active').animate({
		'left': '0'
	});
	// animamos el slide anterior para que se deslaza 
	// hacia la izq
		$('#banner .active').prev().animate({
			'left': '-100%'
		});
	// incremental
	banner.posicion=banner.posicion+1;
	} else{
	// hacemos k el slide activo(es decir el ultimo), se anime hacia la derecha
	$('#banner .active').animate({
		'left': '-100%'
	});
	// seleccionamos todos los k no tengan la clase active
	// y los posicionamos a la derecha
	banner.padre.children().not('active').css({
			'left': '100%'
		});
		// eliminamos la clase active y se la ponemos al 1er element
		// // despues lo animamos
	$('#banner .active').removeClass('active');
	banner.padre.children('.slider').first().addClass('active').animate({
		'left': '0'
	});
	// reseteamos la posicion a 1
	banner.posicion=1;

	// cierre del else
	}
});

// ----------------------------------------
		//Boton  Anterior
$('#banner-prev').on('click',function(e){
	e.preventDefault();
	// condicional
	if (banner.posicion>1) {
		banner.padre.children().not('active').css({
			'left': '-100%'
		});
		$('#banner .active').animate({
			'left': '100%'
		});

		$('#banner .active').removeClass('active').prev().addClass('active').css({
			'left':0
		});
		banner.posicion=banner.posicion-1;	
	}
	else{
		// -punto
		banner.padre.children().not('.active').css({
			'left': '-100%'
		});

		$('#banner .active').animate({
			'left': '100%'
		});

		$('#banner .active').removeClass('active');
		banner.padre.children().last().addClass('active').animate({
			'left': 0
		});
		banner.posicion = banner.numeroSlides;
	}
	
});




// ----------------------------------------
// ------------Info
// ----------------------------------------
		//Boton  Siguiente 
$('#info-next').on('click', function(e){
	e.preventDefault();

	// usar condicional para la animacion
	if ( info.posicion < info.numeroSlides) {
		// nos aseguramos de que las demas slider empiecen 
		// desde la derecha
		info.padre.children().not('active').css({
			'left': '100%'
		});
		// quitamos la clase active y se la ponemos al sig elemento
		// y lo animamos
		$('#info .active').removeClass('active').next().addClass('active').animate({
		'left': '0'
	});
	// animamos el slide anterior para que se deslaza 
	// hacia la izq
		$('#info .active').prev().animate({
			'left': '-100%'
		});

		// acceder a botones para cambiar
	$('#botones').children('.active').removeClass('active').next().addClass('active');
	// incremental
	info.posicion=info.posicion+1;
	} else{
	// hacemos k el slide activo(es decir el ultimo), se anime hacia la derecha
	$('#info .active').animate({
		'left': '-100%'
	});
	// seleccionamos todos los k no tengan la clase active
	// y los posicionamos a la derecha
	info.padre.children().not('active').css({
			'left': '100%'
		});
		// eliminamos la clase active y se la ponemos al 1er element
		// // despues lo animamos
	$('#info .active').removeClass('active');
	info.padre.children('.slide').first().addClass('active').animate({
		'left': '0'
	});

	$('#botones').children('.active').removeClass('active');
	$('#botones').children('span').first().addClass('active');
	// reseteamos la posicion a 1
	info.posicion=1;

	// cierre del else
	}
	altoInfo();
});

// ----------------------------------------
		//Boton  Anterior
$('#info-prev').on('click',function(e){
	e.preventDefault();
	// condicional
	if (info.posicion>1) {
		info.padre.children().not('active').css({
			'left': '-100%'
		});
		$('#info .active').animate({
			'left': '100%'
		});

		$('#info .active').removeClass('active').prev().addClass('active').css({
			'left':0
		});
// botones
		$('#botones').children('.active').removeClass('active').prev().addClass('active');
		info.posicion=info.posicion-1;	
	}
	else{
		// -punto
		info.padre.children().not('active').css({
			'left': '-100%'
		});

		$('#info .active').animate({
			'left': '100%'
		});

		$('#info .active').removeClass('active');
		info.padre.children().last().addClass('active').animate({
			'left': 0
		});

		$('#botones').children('.active').removeClass('active');
		$('#botones').children('span').last().addClass('active');		
		info.posicion = info.numeroSlides;
	}
	altoInfo();
});

//cierre del 1er
});