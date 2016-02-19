/*
* Plugin Get Visit Number
*/
s.getVisitNum=new Function(""
+"var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s"
+"_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var"
+" i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvis"
+"it=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'"
+"true',e);return str;}else return 'unknown visit number';}else{if(st"
+"r){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e)"
+";e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w"
+"(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2"
+",'true',e);return 1;}}");