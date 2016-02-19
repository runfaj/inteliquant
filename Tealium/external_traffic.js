// change these as needed
    // required
        var query_param = "data source name"; //e.g. qp.CMP
        var channel_domain = "";        //ex.: Social Media|facebook.com,twitter.com,digg.com,linkedin.com,myspace.com
        var channel_parameter = "";   //ex.: External Campaign|CMP
        var channel_pattern = "";        //ex.: Email|EM>Social Media|SM>Paid Search|PPC>Affiliates|AFL>Display Ads|DSP>Shopping Comparison|SCC>Content|CON>Text Messages|TXT
    // optional
        var delimiter = "";
        var link_filters = "";
        var extra_search_engines = "";
        var referral_url_or = "";
        var direct_load = 1;
        var once_per_session = 1;

// end changes
 
(function (f,l,n,W,DD,K,J,R,e,d,Z,c,g,h,i,j,k,m,o,p,q,r,s,t,u,A,B,C,D,E,F,G,H,I,L,M,N,O,P,Q,S,U,X) {
    function newFunc7(paramValue,plusSign){var a=new Array,i=0,j;if(paramValue){if(paramValue.split){a=paramValue.split(plusSign);}else if(!plusSign){for(i=0;i<paramValue.length;i++){a[a.length]=paramValue.substring(i,i+1);}}else{while(i>=0){j=paramValue.indexOf(plusSign,i);a[a.length]=paramValue.substring(i,j<0?paramValue.length:j);i=j;if(i>=0){i+=plusSign.length;}}}}return a};
    function newFunc6(a,spaceChar){var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join){x=a.join(spaceChar);}else{for(i=1;i<j;i++){x+=spaceChar+a[i]}}}}return x};
    function newFunc5(paramValue,plusSign,spaceChar){return newFunc6(newFunc7(paramValue,plusSign),spaceChar)};
    function newFunc4(paramValue){if(paramValue){var browserCompatibilityTest=0;paramValue=''+paramValue;if(browserCompatibilityTest.toPrecision){browserCompatibilityTest=3;}else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();browserCompatibilityTest=(i=='%U0100'?1:(i=='%C4%80'?2:0));}return(browserCompatibilityTest==3?decodeURIComponent(paramValue):unescape(newFunc5(paramValue,'+',' ')));}return paramValue;}
    function newFunc3(remainingParamList,nextParam){if(remainingParamList){var indexEqualSign=remainingParamList.indexOf('='),paramName=indexEqualSign<0?remainingParamList:remainingParamList.substring(0,indexEqualSign),paramValue=indexEqualSign<0?'True':remainingParamList.substring(indexEqualSign+1);if(paramName.toLowerCase()==nextParam.toLowerCase()){return newFunc4(paramValue);}}return'';}
    function newFunc2(allParams,paramDelim,nextParam){var remainingParamList=allParams,indexOfNextParam=0,indexParamDelim,finalValue;while(remainingParamList){indexParamDelim=remainingParamList.indexOf(paramDelim);indexParamDelim=indexParamDelim<0?remainingParamList.length:indexParamDelim;remainingParamList=remainingParamList.substring(0,indexParamDelim);finalValue=newFunc3(remainingParamList,nextParam);if(finalValue){return finalValue;}indexOfNextParam+=indexParamDelim+paramDelim.length;remainingParamList=indexOfNextParam<allParams.length?allParams.substring(indexOfNextParam,allParams.length):'';}return'';}
    function newFunc1(nextParam,url,hashFlag){var finalValue='',allParams,paramStartChar=hashFlag==1?'#':'?',indexStartChar=url.indexOf(paramStartChar);if(nextParam&&indexStartChar>-1){allParams=url.substring(indexStartChar+1);finalValue=newFunc2(allParams,'&',nextParam);}return finalValue;}
    F = function (params,delim,url,hashFlag){var paramValues='',indexOfComma,nextParamValue;delim=delim?delim:'';url=url?url:(document.URL?document.URL:window.location);if(url=='f'){url=window.top.location;}while(params){indexOfComma=params.indexOf(',');indexOfComma=indexOfComma<0?params.length:indexOfComma;nextParamValue=newFunc1(params.substring(0,indexOfComma),url+'',hashFlag);if(nextParamValue){nextParamValue=nextParamValue.indexOf('#')>-1?nextParamValue.substring(0,nextParamValue.indexOf('#')):nextParamValue;}if(nextParamValue){paramValues+=paramValues?delim+nextParamValue:nextParamValue;}params=params.substring(indexOfComma==params.length?indexOfComma:indexOfComma+1);}return paramValues;}
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
    s = function(v,w,x,y,z) {
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
    B = function (x, y, z) {
            var i = x.indexOf(y);
            while (x && i >= 0) {
                x = x.substring(0, i) + z + x.substring(i + y.length);
                i = x.indexOf(y, i + z.length)
            }
            return x
        };
    I = "search.about.com|terms|About.com>alltheweb.com|query,q|All The Web>altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc.de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>business.com/search|query|Business.com>clix.pt|question|Clix>cuil.com|q|Cuil>daum.net,search.daum.net|q|Daum>eniro.|search_word|Eniro>goo.ne.jp,search.mobile.goo.ne.jp|MT|Goo (Jp.)>google.,googlesyndication.com|q,as_q|Google>icqit.com|q|icq>ixquick.com|query|ixquick>bing.com|q|Microsoft Bing>lycos.|query|Lycos>mail.ru/search,go.mail.ru/search|q|Mail.ru>bing.com|q|Microsoft Bing>myway.com|searchfor|MyWay.com>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>searchalot.com|query,q|Searchalot>seznam|w|Seznam.cz>busca.uol.com.br|q|UOL Busca>usseek.com|string|Usseek>virgilio.it|qs|Virgilio>web.de|su|Web.de>yahoo.com,yahoo.co.jp|p,va|Yahoo!>yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.earthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";
    L = 0;
    
    if (e) {
        e = "utag_cm_dl";
        L = 1;
        if (r(e)) L = 0;
        if (!q(e, 1, new Date().setTime(new Date().getTime() + 1800000))) q(e, 1);
        if (!r(e)) L = 0;
    }
    
    g = (K ? K : document.referrer).toLowerCase();
    if (!g) h = 1;
    i = g.indexOf('?') > -1 ? g.indexOf('?') : g.length;
    j = g.substring(0, i);
    k = s(R.toLowerCase(), ',');
    for (m = 0; m < k.length; m++) {
        Q = j.indexOf(k[m]) == -1 ? '' : g;
        if (Q) O = Q;
    }
    
    if (!O && !h) {
        p = g;
        U = g.indexOf('//');
        X = g.indexOf('/', (U > -1 ? U + 2 : 0));
        t = g.substring((U > -1 ? U + 2 : 0), (X > -1 ? X : i)).toLowerCase();
        u = t;
        P = 'Referrers';
        S = I + '>' + J;
        if (d == 1) {
            j = B(j, 'oogle', '%');
            j = B(j, 'ahoo', '^');
            g = B(g, 'as_q', '*');
        }
        A = s(S, '>');
        for (i = 0; i < A.length; i++) {
            D = s(A[i], '|');
            E = s(D[0], ',');
            for (G = 0; G < E.length; G++) {
                H = j.indexOf(E[G]);
                if (H > -1) {
                    if (D[2]) N = u = D[2];
                    else N = t;
                    if (d == 1) {
                        N = B(N, '#', ' - ');
                        g = B(g, '*', 'as_q');
                        N = B(N, '^', 'ahoo');
                        N = B(N, '%', 'oogle');
                    }
                    i = s(D[1], ',');
                    for (k = 0; k < i.length; k++) {
                        M = F(i[k],'',g).toLowerCase();
                        if (M) break;
                    }
                }
            }
        }
    }
    
    if (!O) {
        O = F(W.replace("qp.","").toLowerCase(),DD) || F(W.replace("qp.","").toUpperCase(),DD);
        if (O) {
            u = O;
            if (M) P = 'Paid Search';
            else P = 'Paid Non-Search';
        }
        if (!O && N) {
            u = N;
            P = 'Natural Search'
        }
    }
    
    if (h == 1 && !O && L == 1) u = P = t = p = 'Direct Load';
    X = M + u + t;
    
    if (Z) {
        k = r('utag_cm');
        if (X) q('utag_cm', X);
        X = k ? '' : X;
    }
    
    if (f && X) {
        k = s(f, '>');
        for (m = 0; m < k.length; m++) {
            C = s(k[m], '|');
            S = s(C[1], ',');
            for (i = 0; i < S.length; i++) {
                if (j.indexOf(S[i].toLowerCase()) > -1) P = C[0];
            }
        }
    }
    
    if (l && X) {
        k = s(l, '>');
        for (m = 0; m < k.length; m++) {
            C = s(k[m], '|');
            S = s(C[1], ',');
            for (i = 0; i < S.length; i++) {
                if (F(S[i])) P = C[0];
            }
        }
    }
    
    if (n && X) {
        k = s(n, '>');
        for (m = 0; m < k.length; m++) {
            C = s(k[m], '|');
            S = s(C[1], ',');
            for (i = 0; i < S.length; i++) {
                h = O.toLowerCase();
                if (h.indexOf(S[i].toLowerCase()) == 0) P = C[0];
            }
        }
    }
    
    if (X) M = M ? M : N ? 'Keyword Unavailable' : 'n/a';
    
    b['_et_referrer'] =         X && p ? p : '';
    b['_et_referring_domain'] = X && t ? t : '';
    b['_et_partner'] =          X && N ? N : '';
    b['_et_campaign_id'] =      X && O ? O : '';
    b['_et_campaign'] =         X && u ? u : '';
    b['_et_keywords'] =         X && M ? M : '';
    b['_et_channel'] =          X && P ? P : '';
})(channel_domain,channel_parameter,channel_pattern,query_param,delimiter,referral_url_or,extra_search_engines,link_filters,direct_load,0,once_per_session);
