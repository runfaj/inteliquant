(function (a,b,c,e,g,q,r,t,v,u,k) {
    // only do on page loads
    if (a == "view" && typeof performance != "undefined" && typeof performance == "object" && performance.timing) {
        q = utag.loader.SC;
        r = utag.loader.RC;
        e = function(element, event, fn) {
            // event listener attaching
            if (element.addEventListener)
                element.addEventListener(event, fn, false);
            else if (element.attachEvent)
                element.attachEvent('on' + event, fn);
        }
        g = function(number) {
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
        }
        v = function() {
            // make sure defined in scope (precaution)
            if (!q) {q=utag.loader.SC;}
            // make sure performance.timing exists so we can use it
            if (performance && performance.timing) {
                t = performance.timing;
                q("utag_main",{"_timing_url":document.URL,
                               "_timing_dp1":g(t.domainLookupStart-t.navigationStart),
                               "_timing_dp2":g(t.domLoading-t.navigationStart),
                               "_timing_dp3":g(t.domComplete-t.navigationStart),
                               "_timing_dp4":g(t.loadEventEnd-t.navigationStart)});
            } else {
                utag.DB("timing stats not available");
            }
        };
        
        // insert previous page values into udo
        u = r("utag_main");
        if (u["_timing_url"]) {
            b['_timing_url'] = u["_timing_url"];
            b['_timing_domain_lookup'] = u["_timing_dp1"];
            b['_timing_start_dom'] = u["_timing_dp2"];
            b['_timing_end_dom'] = u["_timing_dp3"];
            b['_timing_end_load'] = u["_timing_dp4"];
            
            //delete cookie values as to not falsely report elsewhere
            for(k in u) {
                c = {};
                c[k] = "";
                if (k.indexOf('_timing_') === 0)
                    utag.loader.SC("utag_main",c,"d");
            }
        }
        
        // check to see if already loaded
        if (document.readyState != "complete") {
            // write values after page has completely loaded
            e(window, 'load', v);
        } else {
            // already loaded, so just set the cookies
            v();
        }
    }
})(a,b);