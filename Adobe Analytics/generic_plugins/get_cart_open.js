/*
 * Plugin: getCartOpen v 1.1 - returns events string with scOpen added
 * the first time scAdd occurs during a visit.
 */
s.getCartOpen=new Function("c",""
+"var s=this,t=new Date,e=s.events?s.events:'',i=0;t.setTime(t.getTim"
+"e()+1800000);if(s.c_r(c)||e.indexOf('scOpen')>-1){if(!s.c_w(c,1,t))"
+"{s.c_w(c,1,0)}}else{if(e.indexOf('scAdd')>-1){if(s.c_w(c,1,t)){i=1}"
+"else if(s.c_w(c,1,0)){i=1}}}if(i){e=e+',scOpen'}return e");