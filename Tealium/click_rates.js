// change these variables
    //required
    var data_source_name = "";
    
    //optional
    var track_milemark      = 0;    // 0 (default) doesn't track. Change to 1 to track
    var milemark_count      = 3;

    /*
        NOTE: if you only want to do this extension on certain pages,
        add custom logic to the //////// section below
    */
    
// end changes



if (!utag.ut) utag.ut = {};
if (!utag.ut.ct_i) utag.ut.ct_i = 0;

//////// add javascript load rule here
    /* to NOT track a certain page, add your logic and change the
       utag.ut.ct_i to 1.
       
       An example might be to exclude any page where the URL
       doesn't contain the value "shop"
       
         if (document.URL.toLowerCase().indexOf('shop') == -1) {
            utag.ut.ct_i = 1;
         }
       
       This could be very powerful in conjunction with a seperate cookie
       extension that only tracks the first page of a visit.
    */
    /////////////
    // add code in place of this line //
    
////////

(function (p,m,n,c,F,i,q,r) {
    if (utag.ut.ct_i <= 0) {
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
        c = "utag_cf";
        if (b[p] && b[p]!="") {  // if data source exists and has value
            b['_click_rate_track'] = "Click Through"; // add click-through event
            if (r(c)) {
                i = parseInt(r(c))+1; // increment a cookie every time visitor lands on page with that query param
                q(c, i);
                if (i == n && m) {
                    b['_click_rate_milemark'] = "1"; // add event when count reachs a certain number
                };
            } else {
                q(c, 1);
            }
        } else {  // data source doesn't exist or no value
            if (r(c) >= 1) {
                q(c, 0);
                b['_click_rate_track'] = "Click Past"; // add click-past event
            }
        }
        utag.ut.ct_i = utag.ut.ct_i + 1; // increment to stop link calls on the same page from firing duplicate events
    }
})(data_source_name,track_milemark,milemark_count)
