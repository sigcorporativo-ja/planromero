const apikey = "pl4n06";
/************************************** SERVICIOS ****************************************/
const entorno = "https://ws198.juntadeandalucia.es/prom/rest/";
const getHermandades = entorno + "hermandades/";
const getDias = entorno + "fechas/";
const getRutas = entorno + "ruta/";
const getFechas = entorno + "fechas/";
const getCamino = entorno + "camino/";
const getPasos = entorno + "pasos/";
const getFechasPaso = entorno + "fechas/paso/";
const getHoras = entorno + "horario/";
const getGPS = entorno + "gps/";
const getColor = entorno + "color/"; //NO USADO
/**/
const bboxContext = {x:{min:96388,max:621889},y:{min:3959795,max:4299792}};
const zoomToPoint = 12;
const updateGPS = 150; //en segundos. 
const timeout = 30; //en segundos. Se usa para detectar si hay algún problema con los servicios no controlado
const attrNotShow = ["the_geom", "geom", "geometry", "color", "sentido"];
/*********************** MENSAJES DE ERROR NO CONTROLADO EN LOS SERVICIOS **********************/
const noGPS = "Actualmente no existen posiciones GPS. Inténtelo más tarde";
/*const noPosicion = "No existe posición para la hermandad seleccionada";*/
const errInesperado = "Ha ocurrido un error inesperado. Vuelva a ejecutar la aplicación";
const errCode = [2,999];
const errMsg = ["No es posible visualizar la ruta. El desplazamiento no se realiza en carreta",
				"No hay posiciones GPS"];
const urlCJI = 'http://www.juntadeandalucia.es/organismos/justiciaeinterior.html';
const urlConsorcioHuelva= "http://www.cthu.es/";
const urlConsorcioSevilla= "http://www.consorciotransportes-sevilla.com/";
const versionApp = "Versión 1.0.0";
const docsPDF = [
	{
		nombre: "Tríptico",
		url: "http://www.juntadeandalucia.es/justiciaeinterior/imgplan/InformaPlanRomero.pdf"
	}
];
const htmlAcercade = `<img src="img/logoJunta.png"/><br>Plan Romero<br>${versionApp}<br><br>Junta de Andalucía<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlCJI}');">Consejería de Justicia e Interior</a>
						<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlConsorcioHuelva}');">Consorcio de transportes de Huelva</a>
						<br>
						<a href="#" onclick="javascript:openUrlExternal('${urlConsorcioSevilla}');">Consorcio de transportes de Sevilla</a>`;

const horaCambioJornada = 15;
const urlWMSCaminosOcupados = 'https://ws199.juntadeandalucia.es/PlanRomero/wms';
const capaCaminosOcupados = 'PlanRomero:PR_125_CAM_OCUPADOS';
const legendURL = "https://ws199.juntadeandalucia.es/imgplan/LeyendaPRomero.png";
window.isApp = /^(?!HTTP)/.test(document.URL.toUpperCase()); //
window.iOS = /IPAD|IPHONE|IPOD/.test(navigator.userAgent.toUpperCase());
var formatDate = function (date, format) {
	//console.log(date);
	switch (format) {
		case "gps":
			return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " +
				('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2);
		
		case "combo":
		default:
			//JGL: añado un 0 al mes ya que el servicio lo devuelve con 2 dígitos
			return date.getDate() + "/0" + (date.getMonth()+1) + "/" + date.getFullYear();
	}
};
M.proxy(false);
