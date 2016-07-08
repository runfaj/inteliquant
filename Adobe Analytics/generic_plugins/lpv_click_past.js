////Plugin --

/*
 * LPV and Click Past -- create bounce rate function in Conversion
 */
s.setLPVandClickPast=new Function("lpv","cp",""
+"var s=this, clickThrough=s.c_r('clickThrough');var clickPast=s.c_r('clickPast');"
+"var ckRfrrUrlPage1=s.c_r('ckRfrrUrlPage1'); var ckRfrrUrlPage2=s.c_r('ckRfrrUrlPage2');"
+"var currRfrrUrl=document.referrer; var currURL=location.href;"
+"var domainName=window.location.hostname; if (currRfrrUrl.match('/' + domainName + '/')"
+" && ckRfrrUrlPage2.match('/' + domainName + '/')){return;} if (clickThrough=='' && clickPast=='') {"
+"    s.events=s.apl(s.events,lpv,',',1);    s.c_w('ckRfrrUrlPage1',currRfrrUrl,0);"
+"    s.c_w('clickThrough','yes',0);    return;} if (clickThrough!=='' && clickPast=='') {"
+"    if (currRfrrUrl == ckRfrrUrlPage1) {return;} if (currRfrrUrl.match('/' + domainName + '/')) {"
+"    s.events=s.apl(s.events,cp,',',1);s.c_w('ckRfrrUrlPage2',currRfrrUrl,0);"
+"    s.c_w('clickPast','yes',0);    return;    } else{s.events=s.apl(s.events,lpv,',',1);"
+"    s.c_w('ckRfrrUrlPage1',currRfrrUrl,0);s.c_w('clickThrough','yes',0);"
+"    s.c_w('ckRfrrUrlPage2','',0);return;}}if (clickPast!==''){if (currRfrrUrl == ckRfrrUrlPage2) { "
+"    return;}if (currRfrrUrl.match('/' + domainName + '/')) {s.events=s.apl(s.events,cp,',',1);"
+"    s.c_w('clickPast','yes',0);    s.c_w('ckRfrrUrlPage2',currRfrrUrl,0);return;}else{"
+"    if ((currRfrrUrl!==''&&ckRfrrUrlPage1!=='')&&(currRfrrUrl == ckRfrrUrlPage1)) { "
+"    return;} s.events=s.apl(s.events,lpv,',',1);s.c_w('clickThrough','yes',0);"
+"    s.c_w('ckRfrrUrlPage1',currRfrrUrl,0);s.c_w('ckRfrrUrlPage2','',0);return;}}");




////Do Plugins --


/* Conversion bounce conversion events */
        s.setLPVandClickPast('event54','event55');