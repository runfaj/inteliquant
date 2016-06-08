// change these as needed
    // required
        var stacking_variable = "data source name";
        var expiration = 30;
        var value_number = 4;
        var delimiter = ">";
        var return_variable = "data source name";
        var cookie_name = "name_of_storage_cookie";
    // optional
        var duplicates = 0;
        
    /*
     * REQUIRED: once the above has been changed, scroll down to the section
     * that starts with "//////". You will replace this section with conditions
     * that would be required to reset this cookie. This requires some javascript
     * knowledge.
     *
     * For example, if I wanted to reset this once I reach a confirmation
     * page and I have that as anytime the page_type is "confirmation",
     * my condition would look like so:
     *
     *    if (b['page_type'].toLowerCase() == "confirmation") {
     *        s = 1;
     *    }
     *
     * Any time you want it to reset, you would just have a condition in an
     * if statement and then "s = 1" to enable the reset flag.
     */
     
// end changes

(function(a, e, f, k, B, m, n, u, s, t, d, c, g, h, S,r,q,R,j,o) {
    e = parseInt(e);
    if (typeof(m) === 'undefined') m = 0;
    
    // helper functions - S:split, r:read cookie, q:write cookie, j:join
    S = function (v, w, x, y, z) {
        x = 0,
        z = new Array;
        while (v) {
            y = v.indexOf(w);
            y = y > -1 ? y : v.length;
            z[x++] = v.substring(0, y);
            v = v.substring(y + w.length);
        }
        return z
    };
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
    j = function (y,z,w,x,v) {
        w = z && z.wrap ? z.wrap : '';
        v = '';
        for (x = 0; x < y.length; x++) {
            if (typeof(y[x]) == 'object')
                v += j(y[x], z);
            else
                v += w + y[x] + w;
            if (x < y.length - 1)
                v += (z && z.delim ? z.delim : '');
        }
        return (z && z.front ? z.front : '') + v + (z && z.back ? z.back : '');
    };
    
    s=0;
    //////
    // add tealium conditions here. If condition(s) is met, then s=1;
    // ##UT_condition_magic##
    //////

    if (!b[a] || b[a] == '') {
        if (s) q(n, '');
        return '';
    }
    o = escape(b[a]);
    t = new Array();
    d = new Array();
    h = new Array();
    c = r(n);
    g = 0;
    if (c && c != '') {
        t = S(c, '],[');
        for (u = 0; u < t.length; u++) {
            t[u] = S(t[u].replace(/\[|\]|\'/g, ''), ',');
        }
    }
    if (m == 0 && t.length > 0 && t[t.length - 1][0] == b[a])
        t[t.length - 1] = [o, new Date().getTime()];
    else
        t[t.length] = [o, new Date().getTime()];
    for (u = (t.length - f < 0 ? 0 : t.length - f); u < t.length; u++) {
        if ((Math.round((new Date().getTime() - t[u][1]) / 86400000)) < e) {
            h[g] = unescape(t[u][0]);
            d[g] = [t[u][0], t[u][1]];
            g++;
        }
    }
    q(n, j(d, {
        delim : ',',
        front : '[',
        back : ']',
        wrap : "'"
    }), new Date().setFullYear(new Date().getFullYear() + 5));
    if (s) q(n, '');
    
    // see notes at top for B
    b[B] = j(h, {delim : k});
})(stacking_variable,expiration,value_number,delimiter,return_variable,duplicates,cookie_name);