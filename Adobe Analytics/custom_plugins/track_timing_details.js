//NOTE: if pageName or url has semi-colons, this will not work right now

/* Usage:

    Use this plugin to track the previous page's time to dom ready
    as well as the page name it is associated with. There are a few
    optional parameters you can use:
        param 1 = manually specify pagename value. If doesn't exist,
                  defaults to s.pageName, then s.d.URL, then
                  document.URL
        param 2 = cookie name, defaults to "s_td"
        param 3 = cookie delimiter, shouldn't need to be modified ever,
                  defaults to "??"
    This plugin returns an object with two values: pageName and
    domComplete. Sample usage in s.doPlugins might look like so:

        var td = s.trackTimingDetails();
        s.propXX = td.pageName;
        s.propXX2 = td.domComplete;

    In the event you have a browser that doesn't utilize the
    performance.timing browser object, you can also manually
    specify when the page starts loading. You can do so by
    putting a global variable at the top of your page like so:

    window.timingDetailStart = new Date();

    The plugin will look at this value first if specified, then
    attempt to look at performance.timing if not.

*/

s.trackTimingDetails = new Function("a","b","c","try{var d=this;"
    +"if(b=b||'s_td',a=a||d.pageName||d.d.URL||document.URL,c=c|"
    +"|'??',window.timingDetailStart||'undefined'!=typeof performance"
    +"&&'object'==typeof performance&&performance.timing){var e="
    +"function(a,b,c,d){b=a+'=',c=document.cookie.split(';');for"
    +"(var e=0;e<c.length;e++){for(d=c[e];' '==d.charAt(0);)d=d."
    +"substring(1,d.length);if(0==d.indexOf(b))return d.substrin"
    +"g(b.length,d.length)}return''},f=function(a,b,c){'number'="
    +"=typeof c&&(c=new Date(c)),document.cookie=a+'='+b+';path="
    +"/;domain='+location.hostname+';expires='+(c?c.toGMTString("
    +"):'')},g=function(a){return a<25?'0-25ms':a<50?'25-50ms':a"
    +"<100?'50-100ms':a<150?'100-150ms':a<250?'150-250ms':a<500?"
    +"'250-500ms':a<750?'500-750ms':a<1e3?'750ms-1s':a<1500?'1-1"
    +".5s':a<2e3?'1.5-2s':a<3e3?'2-3s':'>3s'},h=function(){if(f|"
    +"|(f=function(a,b,c){'number'==typeof c&&(c=new Date(c)),do"
    +"cument.cookie=a+'='+b+';path=/;domain='+location.hostname+"
    +"';expires='+(c?c.toGMTString():'')}),performance&&performa"
    +"nce.timing){t=performance.timing;var d=a+c;d+=t.domComplet"
    +"e-t.navigationStart,f(b,d,3e4)}else console.log('timing st"
    +"ats not available')},i=e(b);if(i)return{pageName:i.split(c"
    +")[0],domComplete:g(parseInt(i.split(c)[1]))};if(window.timingDe"
    +"tailStart){var j=a+c;j+=(new Date).valueOf()-window.timingDetai"
    +"lStart.valueOf(),f(b,j,3e4)}else!function a(b){b>0&&('unde"
    +"fined'!=typeof performance&&'undefined'!=typeof performanc"
    +"e.timing&&'undefined'!=typeof performance.timing.loadEvent"
    +"End&&0!=performance.timing.loadEventEnd?h():setTimeout(fun"
    +"ction(){a(b-100)},100))}(5e3)}}catch(a){}");




/*********************** source code for reference ******************/
s.trackTimingDetails = function (pn,cn,d) {
    try {
        var s = this;
        cn = cn || 's_td';
        pn = pn || s.pageName || s.d.URL || document.URL;
        d = d || '??';
        if (window.timingDetailStart || (typeof performance != "undefined" && typeof performance == "object" && performance.timing)) {
            var r = function (w, x, y, z) {
                // read cookie (name)
                x = w + "=";
                y = document.cookie.split(';');
                for (var i = 0; i < y.length; i++) {
                    z = y[i];
                    while (z.charAt(0) == ' ')
                        z = z.substring(1, z.length);
                    if (z.indexOf(x) == 0)
                        return z.substring(x.length, z.length);
                }
                return "";
            };
            var q = function (x, y, z) {
                // set cookie (name, value, expires)
                if (typeof z == "number") z = new Date(z);
                document.cookie = x + "=" + y + ";path=/;domain=" + location.hostname + ";expires=" + (z?z.toGMTString():"");
            };
            var g = function(number) {
                // lookup for bucket a number fits in
                if (number < 25) return "0-25ms";
                if (number < 50) return "25-50ms";
                if (number < 100) return "50-100ms";
                if (number < 150) return "100-150ms";
                if (number < 250) return "150-250ms";
                if (number < 500) return "250-500ms";
                if (number < 750) return "500-750ms";
                if (number < 1000) return "750ms-1s";
                if (number < 1500) return "1-1.5s";
                if (number < 2000) return "1.5-2s";
                if (number < 3000) return "2-3s";
                return ">3s";
            };
            var v = function() {
                // make sure defined in scope (precaution)
                if (!q) {
                    q = function (x, y, z) {
                        // set cookie (name, value, expires)
                        if (typeof z == "number") z = new Date(z);
                        document.cookie = x + "=" + y + ";path=/;domain=" + location.hostname + ";expires=" + (z?z.toGMTString():"");
                    };
                }
                // make sure performance.timing exists so we can use it
                if (performance && performance.timing) {
                    t = performance.timing;
                    var c = pn + d;
                    c += t.domComplete - t.navigationStart;
                    q(cn,c,30*1000);
                } else {
                    console.log("timing stats not available");
                }
            };
            
            // insert previous page values into udo
            var u = r(cn);
            if (u) {
                return {
                    pageName: u.split(d)[0],
                    domComplete: g(parseInt(u.split(d)[1]))
                };
            }
            
            if(window.timingDetailStart) {
                var c = pn + d;
                c += new Date().valueOf() - window.timingDetailStart.valueOf();
                q(cn,c,30*1000);
            } else {
                // check to see if already loaded, else wait
                (function check(tL){
                    if (tL > 0) {
                        if (typeof performance != "undefined" && typeof performance.timing != "undefined" && typeof performance.timing.loadEventEnd != "undefined" && performance.timing.loadEventEnd != 0)
                            v();
                        else
                            setTimeout(function(){check(tL-100)},100);
                    }
                })(5000);
            }
        }
    } catch (e) {}
}