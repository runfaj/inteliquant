//// edit these as needed ////
    var flash_data_source = "my_data_source";
    var sl_data_source = "my_data_source";
    var max_flash = 20;
    var max_sl = 20;
    var force_check = 0;
//// end edit section ////
 

(
function (a, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, v) {
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
        return true;
    };
    v = function(w,x,y,z,Z) {
        w = navigator.userAgent;
        x = navigator.appVersion;
        y = x.indexOf('MSIE ');
        z = w.indexOf('Opera ');
        if (z > 0)
            Z = parseFloat(w.substring(z + 6));
        else if (y > 0) {
            Z = parseInt(x.substring(y + 5));
            if (Z > 3)
                Z = parseFloat(x.substring(y + 5))
        }
        return Z;
    }
    g = 'utag_ria';
    e = e ? e : 20;
    d = d ? d : 20;
    h = '';
    i = -1;
    k = '';
    l = '';
    m = r(g);
    n = m.substring(0, m.indexOf('|'));
    o = m.substring(m.indexOf('|') + 1, m.length);
    if (q(g+'_cc', 'true')) {
        if (m && !f) {
            // add to udo
            if (a) b[a] = n;
            if (c) b[c] = o;
            return false;
        }
        if (!n && a) {
            if (navigator.plugins && navigator.plugins.length) {
                p = navigator.plugins['Shockwave Flash'];
                if (p) {
                    i = 0;
                    s = p.description;
                    if (s) i = s.substring(16, s.indexOf('.'));
                }
            } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
                p = navigator.mimeTypes['application/x-shockwave-flash'];
                if (p && p.enabledPlugin) i = 0;
            }
            if (i <= 0 && navigator.appName == 'Microsoft Internet Explorer' && navigator.userAgent.indexOf('Win') != -1 && execScript) {
                result = false; // can't put this in param list because of scoping issues with the execScript
                for (var s = d; s >= -1 && result != true; s--) {
                    execScript('on error resume next: result = IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.' + s + '"))', 'VBScript');
                    i = s;
                }
            }
            k = i == -1 ? 'flash not detected' : i == 0 ? 'flash enabled (no version)' : 'flash ' + i;
        }
        if (!o && c && v() >= 4.1) {
            try {
                p = new ActiveXObject("AgControl.AgControl");
                for (var s = e; s > 0; s--) {
                    for (var j = 9; j >= 0; j--) {
                        if (p.isVersionSupported(s + "." + j)) {
                            h = s + "." + j;
                            break;
                        }
                    }
                    if (h) break;
                }
            } catch (e) {
                try {
                    p = navigator.plugins["Silverlight Plug-In"];
                    h = p.description.substring(0, p.description.indexOf(".") + 2);
                } catch (e) {}
            }
            l = h == '' ? 'silverlight not detected' : 'silverlight ' + h;
        }
        if ((k && a) || (l && c)) {
            q(g, k + '|' + l);
            // add to udo
            if (k) b[a] = k;
            if (l) b[c] = l;
        }
    }
})(flash_data_source,sl_data_source,max_flash,max_sl,force_check);