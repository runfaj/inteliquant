// change these variables
    var data_source_name = "";

// end changes

if(a=="view"){
    (function (u,c,p,a,r,q) {
        if (!utag.ut) utag.ut = {};
        r = function (w, x, y, z) {
            // read cookie
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
        q = function (x, y, z) {
            // set cookie
            if (typeof z == "number") z = new Date(z);
            document.cookie = x + "=" + y + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (z?z.toGMTString():"");
            //b["cp."+x] = y; // add cookie to udo
        };
        utag.ut.hppv = function (w,x,y,z,r,q,c) {
            if (!utag.ut.getPPVid)
                return;
            c = "utag_ppv";
            r = function (w, x, y, z) {
                // read cookie
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
            q = function (x, y, z) {
                // set cookie
                if (typeof z == "number")
                    z = new Date(z);
                document.cookie = x + "=" + y + ";path=/;domain=" + utag.cfg.domain + ";expires=" + (z?z.toGMTString():"");
                //b["cp."+x] = y; // add cookie to udo
            };
            w = Math.max(
                    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), 
                    Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), 
                    Math.max(document.body.clientHeight, document.documentElement.clientHeight)
                ),
            x = (window.pageYOffset || (document.documentElement.scrollTop || document.body.scrollTop))
                +(window.innerHeight || (document.documentElement.clientHeight || document.body.clientHeight));
            y = Math.min(Math.round(x / w * 100), 100);
            z = (r(c).indexOf(',') > -1) ? r(c).split(',', 4) : [];
            q(c, ((y > 0) ? (((z.length > 0) ? (z[0]) : escape(utag.ut.getPPVid)) + ',' + ((y > ((z.length > 1) ? parseInt(z[1]) : (0))) ? y : ((z.length > 1) ? parseInt(z[1]) : (0))) + ',' + ((z.length > 2) ? parseInt(z[2]) : (y)) + ',' + ((x > ((z.length > 3) ? parseInt(z[3]) : (0))) ? x : ((z.length > 3) ? parseInt(z[3]) : (0)))) : ''));
        };
        c = "utag_ppv";
        p = p ? p : '-';
        a = (r(c).indexOf(',') > -1) ? r(c).split(',', 4) : [];
        if (a.length < 4) {
            for (i=3; i>0; i--) {
                a[i] = (i < a.length) ? (a[i - 1]) : ('');
            }
            a[0] = '';
        }
        a[0] = unescape(a[0]);
        q(c, escape(p));
        if (!utag.ut.getPPVid) {
            utag.ut.getPPVid = (p) ? (p) : document.location.href;
            q(c, escape(utag.ut.getPPVid));
            if (window.addEventListener) {
                window.addEventListener('load', utag.ut.hppv, false);
                window.addEventListener('scroll', utag.ut.hppv, false);
                window.addEventListener('resize', utag.ut.hppv, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', utag.ut.hppv);
                window.attachEvent('onscroll', utag.ut.hppv);
                window.attachEvent('onresize', utag.ut.hppv);
            }
        }
        
        b[u] = (p != '-') ? (a) : (a[1]);
    })(data_source_name);
}