/* Utility Function to help load urls as an img, iframe, or function,
 * then optionally do a callback after the fact.
 *
 * Accepts one argument as an object with the following params:
 * type - Optional. img, iframe, or script. Defaults to script if omitted.
 * src  - Required. the url that you want to load
 * id   - Optional. an id to give to the added element
 * location - Optional. script, body, or head. Defaults to head. If script, does the insertBefore the last script. An "image" type of request appends to the body always. Any other value (e.g. head or body) will append to that tag name child.
 * cb   - Optional. A callback to run on load of the resulting response.
 * log  - Optional. A function for you to add logging. This will be called and passed with a message.
 *
 * Sample Usage:
 * pixelLoader({"type": "img", "src": "url/to/load", log: function(msg){console.log(msg);} });
 */

window.pixelLoader = function(o) {
    var gv = function(a, b, c) {
        b = {};
        for (c in a) {
            if (a.hasOwnProperty(c) && typeof a[c] != "function")
                b[c] = a[c];
        }
        return b
    };

    var b, c, l, a = document;
    if(typeof o.log != "function") {
        o.log = function(msg){};
    }
    if (o.type === "iframe") {
        b = a.createElement("iframe");
        o.attrs = o.attrs || {
            "height": "1",
            "width": "1",
            "style": "display:none"
        };
        for (l in gv(o.attrs)) {
            b.setAttribute(l, o.attrs[l]);
        }
        b.setAttribute("src", o.src);
    } else if (o.type == "img") {
        b = new Image();
        if(typeof o.cb == "function" && typeof b.onload != "undefined") {
            b.onload = o.cb;
        }
        b.src = o.src;
    } else {
        b = a.createElement("script");
        b.language = "javascript";
        b.type = "text/javascript";
        b.async = 1;
        b.charset = "utf-8";
        for (l in gv(o.attrs)) {
            b[l] = o.attrs[l];
        }
        b.src = o.src;
    }
    if (o.id) {
        b.id = o.id
    };
    if (typeof o.cb == "function" && o.type != 'img') {
        if (b.addEventListener) {
            b.addEventListener("load", function() {
                o.cb()
            }, false);
        } else { /* old IE support */
            b.onreadystatechange = function() {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    this.onreadystatechange = null;
                    o.cb()
                }
            };
        }
    }
    l = o.location || "head";
    if(o.type == 'img') {
        l = "body";
    }
    c = a.getElementsByTagName(l)[0];
    if (c) {
        o.log("pixelLoader: "+o.type+": Attach to " + l + ": " + o.src);
        if (l == "script") {
            c.parentNode.insertBefore(b, c);
        } else {
            c.appendChild(b)
        }
    }
};