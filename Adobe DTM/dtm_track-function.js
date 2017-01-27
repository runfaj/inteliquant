/* function dtm_track
 *   @param type -- Required. The type of call. Defaults to "view".
 *   @param obj -- Optional. An object of data elements for mapping to a tag.
 *
 *   @description This function is used for tracking some event dynamically.
 *     This is used in conjunction with a special process in direct call
 *     rules and js object data elements.
 *
 *     -- The <type> param --
 *     All direct call rules will have the string in the format of <type>.
 *     So, you might have "view". In SiteCatalyst, for example, you would
 *     put this string and then init an s.t() call because it is a "view".
 *
 *     -- The <obj> param --
 *     All data elements passed into the <obj> param of this function should
 *     be created in dtm as js objects named "dtm_layer.<element_name>".
 *     Each possible item in the object should be created as a data element
 *     and then mapped in the associated direct call rule.
 *
 *     -- The <lookAtExisting> param --
 *
 *     This is an optional flag that can be enabled by marking it as "true"
 *     without quotes. If enabled, this will take the existing page data layer
 *     and merge it into the given obj, keeping the obj variables as higher
 *     priority. The data layer will then reset back to normal after the tracking
 *     call has been made.
 *     
 *     -- Debugging -- 
 *     If you'd like to view the output of these calls as they happen, enable
 *     the debug cookie in the console with the following:
 *         document.cookie="dtm_debug=true";
 *
 *     -- Additional Info --
 *     This code also will initialize a page with an empty dtm_layer object if
 *     one isn't defined already. In addition, a global cloning function is
 *     created called "dtm_clone". It will clone the following js types: string,
 *     object, boolean, array, date, number, function. It will NOT copy anything
 *     that has prototype methods defined. It will also not copy anything that
 *     is cylic or recursive in nature. If done, a stack overflow error will
 *     result. This method can be called on any variable like so:
 *         myClonedVar = dtm_clone(myOldVar);
 *
 *     In addition, there is a setTimeout at the bottom of this utility to wait
 *     until the direct call rules have had a chance to initialize. You may choose
 *     to adjust this value to meet your needs (default is 300 ms).
 */

function dtm_clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
 
window.dtm_layer = window.dtm_layer || {};
if(!dtm_layer.dtm_event_type) dtm_layer.dtm_event_type = "view";

window.dtm_track = function(type,obj,lookAtExisting) {
  try {
    var hasTracked = "";
    if (typeof _satellite == "undefined") hasTracked = "NOT ";
    if (typeof type == "undefined" || type == null || !type) type = "view";
  
    var temp = window.dtm_clone(window.dtm_layer);
    var temp_cache = _satellite.dataElementSafe.pageviewCache || {};
    window.dtm_layer = obj || {};
    _satellite.dataElementSafe.pageviewCache = {};

    if(lookAtExisting) {
      for(var key in temp) {
        if(!dtm_layer[key])
          dtm_layer[key] = temp[key];
      }
    }
  
    if (typeof console != "undefined" && console.log
        && typeof _satellite.readCookie('dtm_debug') != "undefined"
        && (_satellite.readCookie('dtm_debug') == "true"
            || _satellite.readCookie('dtm_debug') == true)) {
      console.log("dtm " + hasTracked + "tracked '" + type + "'", obj);
    }

    dtm_layer.dtm_event_type = type;
  
    if (hasTracked != "NOT ")
      _satellite.track(type);
  
    setTimeout(function(){
      window.dtm_layer = window.dtm_clone(temp);
      _satellite.dataElementSafe.pageviewCache = window.dtm_clone(temp_cache);
      delete temp;
      delete temp_cache;
    },300);
  } catch (e) {
    if(typeof console != "undefined" && console.log)
        console.log("dtm_track error. Message: ",e.message," Passed obj: ",obj);
  }
  return true;
};