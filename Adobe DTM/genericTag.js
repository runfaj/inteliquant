//---- GENERIC TAG CONTAINER ----//
//--------- InteliQuant ---------//
//-------------------------------//
//-- read all notes for config --//
//-------------------------------//
/* This is a generic iframe, img, or script source request.
 * All configs are meant for building and firing a single url
 * request. Any custom code on top of that should be added
 * into the marked code section.
 */

/**** configuration section ****/
  var src = "";  //base url, without query string. Omit the "http:" part if needed to match parent domain protocol
  var type = "img";  //iframe, script, or img
  var initializeOnce = false;  //set to true to only load the pixel once, but do the callback every time. Pixel ID is required if set to true.
  var pixelID = "";  //optional, required if initializeOnce is true
  var staticMappings = {
    //put static parameters as "query_param": "value"
  };
  var dynamicMappings = {
    //put dynamic mappings as "query_param": "data element name"
  };
/**** end configurations ****/

/**** code section ****/
  var callback = function(){
    //insert any code to be run AFTER the pixel has loaded here
  };

  //insert any code to be run BEFORE the pixel has loaded here

/**** end code section ****/

/**** DO NOT ALTER SECTION (unless absolutely needed) ****/
var params = [];
var qp_start = "?";
var qp_delim = "&";
var qp_equals = "=";
var gv = function(a, b, c) {
    b = {};
    for (c in a) {
        if (a.hasOwnProperty(c) && typeof a[c] != "function")
            b[c] = a[c];
    }
    return b
};
for(var key in gv(staticMappings)) {
  params.push([key,staticMappings[key]].join(qp_equals));
}
for(var key in gv(dynamicMappings)) {
  if(_satellite.getVar(dynamicMappings[key]))
    params.push([key,_satellite.getVar(dynamicMappings[key])].join(qp_equals));
}
src += qp_start + params.join(qp_delim);

if(initializeOnce && document.getElementById(pixelID) !== null) {
  callback();
} else {
  var obj = {
    "type": type,
    "src": src,
    "log": function(msg){ _satellite.notify(msg,1); },
    "cb": callback
  };
  if(typeof pixelID != "undefined" && pixelID)
    obj["id"] = pixelID;
  pixelLoader(obj);
}