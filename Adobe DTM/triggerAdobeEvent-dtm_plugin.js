//IMPORTANT! Please read.
//Two versions are provided below. The first is the Adobe plugin.
//The second version is the expanded version for readability.
//Only copy/paste lines 8-56 when implementing this plugin.



/**
 * function triggerAdobeEvent  v1.2 - 2016-10-24
 * Used to trigger any Adobe event on various conditions and add the
 * event to the scoped s.events variable. This also updates the s.linkTrackEvents variable.
 *
 * Params:
 * eventNumber: Required. The event number or name to be triggered.
 * dataElement: Optional. The dtm variable to look at.
 * triggerValue: Optional. The value to look at in the dtm variable.
 * option: Optional. "true" to do an exact match. Otherwise, provided
 *      value is used as serialization value.
 * optionDelim: Optional. Used if you want the serialization value to
 *      be delimited by something other than an equals "=1234"
 *
 * Returns:
 * Boolean: true if event added successfully, false otherwise.
 *
 * Usage:
 * Trigger event as is, with no conditions:
 *      triggerAdobeEvent("event30");
 * Trigger event when dtm variable is populated:
 *      triggerAdobeEvent("event30", "customerName");
 * Trigger event when dtm variable contains value:
 *      triggerAdobeEvent("event30", "customerName", "Bob");
 * Trigger event when dtm variable equals:
 *      triggerAdobeEvent("event30", "customerName", "Bob", true);
 * Trigger event with specific value:
 *      triggerAdobeEvent("event30", "customerName", "", "123456");
 **/
s.triggerAdobeEvent = new Function('eventNumber', 'dataElement',
    'triggerValue', 'option', 'optionDelim', 'var s = this; function optIsTrue()'
    +'{return option && option === true || (typeof option == "string" && option.'
    +'toLowerCase() === "true");}function apl'
    +'(list, value, optserialize) {if(!list || list == "") list ='
    +'value; else list = list += "," + value; if(optserialize && '
    +'!optIsTrue()) list += (optionDelim ? optionDelim : "=") + optserialize; return list;}if('
    +'!eventNumber) {_satellite.notify("Event Number not specified'
    +' in triggerEvent",1); return false;} var temp = '
    +'eventNumber.toString().trim().toLowerCase(); if(temp.'
    +'indexOf("event")!=0) {if(!isNaN(temp)) {eventNumber ='
    +'"event" + eventNumber;}} if(!dataElement) { s.events = '
    +'apl(s.events, eventNumber, option);s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);return true;} else {'
    +'var value = _satellite.getVar(dataElement) || "";if(!trigger'
    +'Value) {if(value !== "") {s.events = apl(s.events, event'
    +'Number, option);s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);return true;}} else {if(optIsTrue()) {'
    +'if(value.toString() === triggerValue.toString()) {s.events'
    +'= apl(s.events, eventNumber);s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);return true;}} else {if(value.'
    +'toString().indexOf(triggerValue.toString())>-1) {s.events '
    +'=apl(s.events, eventNumber);s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);return true;}}}}return false;');






/** source code for above plugin **/
/*
function triggerAdobeEvent(eventNumber, dataElement, triggerValue, option, optionDelim) {
    var s = this;
    function optIsTrue() {
        return option && option === true || (typeof option == "string" && option.toLowerCase() === "true");
    }
    function apl(list, value, optserialize) {
        if(!list || list == "") list = value;
        else list = list += "," + value;
        if(optserialize && !optIsTrue()) list += (optionDelim ? optionDelim : "=") + optserialize;
        return list;
    }
    if(!eventNumber) {
        _satellite.notify("Event Number not specified in triggerEvent",1);
        return false;
    }
    var temp = eventNumber.toString().trim().toLowerCase();
    if(temp.indexOf("event")!=0) {
        if(!isNaN(temp)) {
            eventNumber = "event" + eventNumber;
        }
    }

    if(!dataElement) {
        s.events = apl(s.events, eventNumber, option);
        s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);
        return true;
    } else {
        var value = _satellite.getVar(dataElement) || "";
        if(!triggerValue) {
            if(value !== "") {
                s.events = apl(s.events, eventNumber, option);
                s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);
                return true;
            }
        } else {
            if(optIsTrue()) {
                if(value.toString() === triggerValue.toString()) {
                    s.events = apl(s.events, eventNumber);
                    s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);
                    return true;
                }
            } else {
                if(value.toString().indexOf(triggerValue.toString())>-1) {
                    s.events = apl(s.events, eventNumber);
                    s.linkTrackEvents = apl(s.linkTrackEvents, eventNumber);
                    return true;
                }
            }
        }
    }
    return false;
}
*/
