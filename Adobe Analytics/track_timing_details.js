if pageName or url has semi-colons, this will not work right now

//pn = optional pageName value
//cn = optional cookieName
//d = optional cookie delimiter
//returns an object of previous page url and domComplete time
//usage for every page:

//var td = s.trackTimingDetails();
//s.propXX = td.url;
//s.propXX2 = td.domComplete;

//then correlate the 2 props in the report



s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

s.trackTimingDetails = new Function('pn', 'cn', 'd', ""
+"var s=this;var n,o,i,a,r,m,c,l,dt=d||'??',e=cn||'s_td"
+"',p=pn||s.pageName||s.d.URL||document.URL,r=function"
+"(e,t,n,o){t=e+'=',n=s.d.cookie.split(';');for(var i="
+"0;i<n.length;i++){for(o=n[i];' '==o.charAt(0);)o=o.s"
+"ubstring(1,o.length);if (0==o.indexOf(t))return o.su"
+"bstring(t.length,o.length)}return ''},a=function(e,t"
+",n) {'number'==typeof n&&(n=new Date(n)),s.d.cookie="
+"e+'='+t+';path=/;domain='+location.hostname+';expire"
+"s='+(n?n.toGMTString():'')},o=function(e,t,n){e.addE"
+"ventListener?e.addEventListener(t,n,!1):e.attachEven"
+"t&&e.attachEvent('on'+t,n)},i=function(e){return 25>"
+"e?'0-25ms':50>e?'25-50ms':100>e?'50-100ms':150>e?'10"
+"0-150ms':250>e?'150-250ms':500>e?'250-500ms':750>e?'"
+"500-750ms':1e3>e?'750ms-1s':1500>e?'1-1.5s':2e3>e?'1"
+".5-2s':3e3>e?'2-3s':'>3s'},c=function(){if(a||(a=fun"
+"ction(e,t,n){'number'==typeof n&&(n=new Date(n)),s.d"
+".cookie=e+'='+t+';path=/;domain='+location.hostname+"
+"';expires='+(n?n.toGMTString():'')}),e||(e='s_td'),p"
+"erformance&&performance.timing){m=performance.timing"
+";var t=p+dt;t+=m.domComplete-m.navigationStart,t+=a(e"
+",t)}else 'undefined'!=typeof console&&console.log&&c"
+"onsole.log('Timing object not available.')};return ("
+"l=r(e))&&(n={},n.url=l.split(dt)[0],n.domComplete=i(l"
+".split(dt)[1])),'complete'!=s.d.readyState?o(window,'"
+"load',c):c(),n||''");