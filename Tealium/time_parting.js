// change the following variables as needed
    var timezone = '-6';
    
// end changes

(function (a, q, c, d, e, f, g, h, i, k, l, m, n, p) {
    try {
        c = new Date();
        q = c.getFullYear();
        d = new Date('1/1/2000');
        e = 15;
        f = 8;
        if (d.getDay() == 6 && d.getMonth() == 0 && typeof a != "undefined" && a != "" && a != null) {
            a = parseInt(a);
            if (q == 2009) {
                e = 8;
                f = 1;
            }
            g = e - new Date('3/1/' + q).getDay();
            h = f - new Date('11/1/' + q).getDay();
            if (c > new Date('3/' + g + '/' + q) && c < new Date('11/' + h + '/' + q)) {
                a = a + 1;
            }
            i = new Date((c.getTime() + (c.getTimezoneOffset() * 60000)) + (3600000 * a));
            k = i.getHours();
            l = i.getMinutes();
            m = i.getDay();
            n = 'AM';
            p = '00';
            if (l > 15 && l < 30) {
                p = '15';
            } else if (l > 30 && l < 45) {
                p = '30';
            } else if (l > 45 && l < 60) {
                p = '45';
            }
            if (k >= 12) {
                n = 'PM';
                k = k - 12;
            } else if (k == 0) {
                k = 12;
            }
            b["_timeparting_time"] = k + ':' + p + n;
            b["_timeparting_day"] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][m];
            b["_timeparting_type"] = (m == 6 || m == 0) ? "Weekend" : "Weekday";
        }
    } catch (err) {}
})(timezone);