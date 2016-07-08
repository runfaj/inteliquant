//// Plugin --

s.getTimeToComplete=new Function("v","cn","e",""
                   +"var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='"
                   +"stop')s.ttcr=1;x.setTime(x.getTime()+e*86400000);if(v=='start'){s.c"
                   +"_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s"
                   +".c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th="
                   +"3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un="
                   +"'hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='sec"
                   +"onds';}v=v*r/u;return (Math.round(v)/r)+' '+un;}}return '';");




//// In doPlugins --

if(start_condition) {
  s.prop1 = s.getTimeToComplete("start",cookie_name,cookie_days);
}

if(end_condition) {
  s.prop1 = u.o.getTimeToComplete("stop",cookie_name,cookie_days);
}