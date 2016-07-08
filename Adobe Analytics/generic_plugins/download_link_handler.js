/*
 * Plugin: downloadLinkHandler 0.8 - identify and report download links
 */
s.downloadLinkHandler=new Function("p","e",""
+"var s=this,o=s.p_gh(),h=o.href,n='linkDownloadFileTypes',i,t;if(!h|"
+"|(s.linkType&&(h||s.linkName)))return'';i=h.indexOf('?');t=s[n];s[n"
+"]=p?p:t;if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return e?o:"
+"h;");