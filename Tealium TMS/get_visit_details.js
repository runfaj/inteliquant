// change the following as appropriate
    var visit_timer = 30;
    
// end changes

(function (a, c, d, e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    a = a ? parseInt(a) : 30;
    n = v = 1;
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
    d = new Date();
    e = d.getTime();
    f = 'utag_vnum';
    g = 'utag_invisit';
    o = 'utag_vs';
    p = 'utag_dslv';
    w = 'utag_vi';
    
    // get visit num and new/repeat
    d.setTime(e + a*24*60*60*1000);
    h = r(f);
    if (h) {
        i = h.substring(h.indexOf('&vn=') + 4, h.length);
        k = h.substring(0, h.indexOf('&vn='));
    }
    if (r(g)) {
        if (i) {
            // return same visit num if already in visit
            q(g, 'true', d.setTime(e + 30*60*1000));
            m = i;
            l = (e-(parseInt(k)-(a*24*60*60*1000)) < 30*60*1000) ? "New" : "Repeat";
        } else {
            // in case the cookie has been altered
            m = l = "unknown";
        }
    } else {
        if (i) {
            // increment visit num
            i++;
            q(f, k+'&vn='+i, d.setTime(k));
            q(g, 'true', d.setTime(e + 30*60*1000));
            m = i;
            l = "Repeat";
        } else {
            // set initial visit
            q(f, e + a*24*60*60*1000 +'&vn=1', d);
            q(g, 'true', d.setTime(e + 30*60*1000));
            m = 1;
            l = "New";
            q(w, e, d);
        }
    }
    // visit start and page number
    if (!r(o)) { v = 1; }
    else { n = 0; v=r(o); v++; }
    
    if (!q(o, v, new Date().setTime(new Date().getTime() + 1800000))) q(o, v);
    if (!r(o)) n = v = 0;
    
    // invisit time
    u = "< 1 minute";
    if (r(g) && r(w)) {
        s = Math.round(((new Date().getTime() - parseInt(r(w)))/1000)/60);
        if (s === 1) u = "1 minute";
        else if (s>1) u = s + " minutes";
    }
    
    // days since last visit code
    s = new Date();
    t = new Date();
    c = s.getTime();
    d = 24 * 60 * 60 * 1000;
    s.setTime(c + 3 * 365 * d);
    t.setTime(c + 30 * 60 * 1000);
    f = c - r(p);
    if (r(p).length == 0) {
        q(p, c, s);
        q(p + '_s', 'First Visit', t);
    } else {
        q(p, c, s);
        if (d > 30 * 60 * 1000) {
            if (f > 30 * d) {
                q(p + '_s', 'More than 30 days', t);
            } else if (f < 30 * d + 1 && f > 7 * d) {
                q(p + '_s', 'More than 7 days', t);
            } else if (f < 7 * d + 1 && f > d) {
                q(p + '_s', 'Less than 7 days', t);
            } else if (f < d + 1) {
                q(p + '_s', 'Less than 1 day', t);
            } else {
                q(p, c, -1);
                h = '';
            }
        } else {
            q(p + '_s', r(p + '_s'), t);
        }
    }
    e = r(p + '_s');
    if (e.length == 0)
        h = 'Cookies Not Supported';
    else if (   e != 'First Visit'
             && e != 'More than 30 days'
             && e != 'More than 7 days'
             && e != 'Less than 7 days'
             && e != 'Less than 1 day'
            )
        h = '';
    else
        h = e;
    
    b['_visit_page_num'] = v;
    b['_visit_return'] = h;
    b['_visit_start'] = n;
    b['_visit_number'] = m;
    b['_visit_type'] = l;
    b['_visit_time'] = u;
})(visit_timer);