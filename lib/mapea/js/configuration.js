/**
 * Mapea API
 * Version 4.2.0
 * Date 29-11-2017
 */
(function (M) {
   /**
    * The Mapea URL
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('MAPEA_URL', 'lib/mapea/');

   /**
    * The path to the Mapea proxy to send
    * jsonp requests
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('PROXY_URL', '/api/proxy');

   /**
    * The path to the Mapea proxy to send
    * jsonp requests
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('PROXY_POST_URL', '/proxyPost');

   /**
    * The path to the Mapea templates
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('TEMPLATES_PATH', 'files/templates/');

    /**
    * Pixels width for mobile devices
    *
    * @private
    * @type {Number}
    */
   M.config('MOBILE_WIDTH', 768);

   /**
    * The path to the Mapea theme
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('THEME_URL', 'assets/');

   /**
    * The Geosearch URL
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_URL', 'http://geobusquedas-sigc.juntadeandalucia.es');

   /**
    * The Geosearch core
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_CORE', 'sigc');

   /**
    * The Geosearch handler
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_HANDLER', '/search?');

   /**
    * The Geosearch distance
    * @const
    * @type {int}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_DISTANCE', '600');

   /**
    * The Geosearchbylocation spatial field
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_SPATIAL_FIELD', 'geom');

   /**
    * The Geosearch rows
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCH_ROWS', '20');

   /**
    * The Geosearch rows
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('GEOSEARCHBYLOCATION_ROWS', '100');

   /**
    * Predefined WMC files. It is composed of URL,
    * predefined name and context name.
    * @type {object}
    * @public
    * @api stable
    */
   M.config('predefinedWMC', {
      /**
       * Predefined WMC URLs
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'urls': 'lib/mapea/files/wmc/romero_mapa_orto.xml'.split(','),

      /**
       * WMC predefined names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'predefinedNames': 'romero_mapa'.split(','),

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'names': 'mapa'.split(',')
   });

   /**
    * TODO
    * @type {object}
    * @public
    * @api stable
    */
   M.config('tileMappgins', {
      /**
       * Predefined WMC URLs
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'tiledNames': 'base,SPOT_Andalucia,orto_2010-11_25830,CallejeroCompleto,orto_2010-11_23030'.split(','),

      /**
       * WMC predefined names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'tiledUrls': 'http://www.callejerodeandalucia.es/servicios/base/gwc/service/wms?,http://www.callejerodeandalucia.es/servicios/base/gwc/service/wms?,http://www.ideandalucia.es/geowebcache/service/wms?,http://www.juntadeandalucia.es/servicios/mapas/callejero/wms-tiled?,http://www.ideandalucia.es/geowebcache/service/wms?'.split(','),

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'names': 'CDAU_base,mosaico_spot_2005,orto_2010-11,CallejeroCompleto,orto_2010-11'.split(','),

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'urls': 'http://www.callejerodeandalucia.es/servicios/base/wms?,http://www.juntadeandalucia.es/medioambiente/mapwms/REDIAM_SPOT_Andalucia_2005?,http://www.ideandalucia.es/wms/ortofoto2010?,http://www.juntadeandalucia.es/servicios/mapas/callejero/wms?,http://www.ideandalucia.es/wms/ortofoto2010?'.split(',')
   });

   /**
    * Default projection
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('DEFAULT_PROJ', 'EPSG:25830*m');

   /**
    * Predefined WMC files. It is composed of URL,
    * predefined name and context name.
    * @type {object}
    * @public
    * @api stable
    */
   M.config('geoprint', {
      /**
       * Printer service URL
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'URL': 'http://geoprint-sigc.juntadeandalucia.es/geoprint/pdf',

      /**
       * WMC predefined names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'DPI': 150,

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'FORMAT': 'pdf',

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'TEMPLATE': 'A4 horizontal (Leyenda en una hoja)',

      /**
       * WMC context names
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'FORCE_SCALE': false,

      /**
       * TODO
       * @const
       * @type {boolean}
       * @public
       * @api stable
       */
      'LEGEND': true
   });

   /**
    * Predefined WMC files. It is composed of URL,
    * predefined name and context name.
    * @type {object}
    * @public
    * @api stable
    */
   M.config('panels', {
      /**
       * TODO
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'TOOLS': 'measurebar,getfeatureinfo'.split(','),

      /**
       * TODO
       * @const
       * @type {Array<string>}
       * @public
       * @api stable
       */
      'EDITION': 'drawfeature,modifyfeature,deletefeature,editattribute,savefeature,clearfeature'.split(',')
   });

   /**
    * Searchstreet service URL
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('SEARCHSTREET_URL', 'http://ws079.juntadeandalucia.es/EXT_PUB_CallejeroREST/geocoderMunProvSrs');

   /**
    * Autocomplete municipality service URL
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('SEARCHSTREET_URLCODINEAUTOCOMPLETE', 'http://ws079.juntadeandalucia.es/EXT_PUB_CallejeroREST/autocompletarDireccionMunicipio');

   /**
    * service URL check code INE
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('SEARCHSTREET_URLCOMPROBARINE', 'http://ws079.juntadeandalucia.es/EXT_PUB_CallejeroREST/comprobarCodIne');

   /**
    * Normalizar searchstreet service URL
    * @const
    * @type {string}
    * @public
    * @api stable
    */
   M.config('SEARCHSTREET_NORMALIZAR', 'http://ws079.juntadeandalucia.es/EXT_PUB_CallejeroREST/normalizar');

   /**
    * Minimum number of characters to start autocomplete
    * @const
    * @type {number}
    * @public
    * @api stable
    */
    M.config('AUTOCOMPLETE_MINLENGTH', '3');

    /**
     * TODO
     *
     * @private
     * @type {Number}
     */
    M.config('AUTOCOMPLETE_DELAYTIME', '750');

    /**
     * Number of results to show
     *
     * @private
     * @type {Number}
     */
    M.config('AUTOCOMPLETE_LIMIT', '10');

    /**
     * TODO
     *
     * @private
     * @type {String}
     */
    M.config('MAPBOX_URL', 'https://api.mapbox.com/v4/');

    /**
     * TODO
     *
     * @private
     * @type {String}
     */
    M.config('MAPBOX_EXTENSION', 'png');

    /**
     * TODO
     *
     * @private
     * @type {String}
     */
    M.config('MAPBOX_TOKEN_NAME', 'access_token');

    /**
     * TODO
     *
     * @private
     * @type {String}
     */
    M.config('MAPBOX_TOKEN_VALUE', 'pk.eyJ1Ijoic2lnY29ycG9yYXRpdm9qYSIsImEiOiJjaXczZ3hlc2YwMDBrMm9wYnRqd3gyMWQ0In0.wF12VawgDM31l5RcAGb6AA');

    /**
     * Number of pages for the plugin AttributeTable
     *
     * @private
     * @type {String}
     */
    M.config('ATTRIBUTETABLE_PAGES', '5');
})(window.M);
