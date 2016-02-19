/* 
* Plugin: detectRIA - detect and set Flash, Silverlight versions 
*/ 
s.detectRIA=new Function("cn", "fp", "sp", "mfv", "msv", "sf", "" 
+"cn=cn?cn:'s_ria';msv=msv?msv:2;mfv=mfv?mfv:10;var s=this,sv='',fv=-" 
+"1,dwi=0,fr='',sr='',w,mt=s.n.mimeTypes,uk=s.c_r(cn),k=s.c_w('s_cc'," 
+"'true',0)?'Y':'N';fk=uk.substring(0,uk.indexOf('|'));sk=uk.substrin" 
+"g(uk.indexOf('|')+1,uk.length);if(k=='Y'&&s.p_fo('detectRIA')){if(u" 
+"k&&!sf){if(fp){s[fp]=fk;}if(sp){s[sp]=sk;}return false;}if(!fk&&fp)" 
+"{if(s.pl&&s.pl.length){if(s.pl['Shockwave Flash 2.0'])fv=2;x=s.pl['" 
+"Shockwave Flash'];if(x){fv=0;z=x.description;if(z)fv=z.substring(16" 
+",z.indexOf('.'));}}else if(navigator.plugins&&navigator.plugins.len" 
+"gth){x=navigator.plugins['Shockwave Flash'];if(x){fv=0;z=x.descript" 
+"ion;if(z)fv=z.substring(16,z.indexOf('.'));}}else if(mt&&mt.length)" 
+"{x=mt['application/x-shockwave-flash'];if(x&&x.enabledPlugin)fv=0;}" 
+"if(fv<=0)dwi=1;w=s.u.indexOf('Win')!=-1?1:0;if(dwi&&s.isie&&w&&exec" 
+"Script){result=false;for(var i=mfv;i>=3&&result!=true;i--){execScri" 
+"pt('on error resume next: result = IsObject(CreateObject(\"Shockwav" 
+"eFlash.ShockwaveFlash.'+i+'\"))','VBScript');fv=i;}}fr=fv==-1?'flas" 
+"h not detected':fv==0?'flash enabled (no version)':'flash '+fv;}if(" 
+"!sk&&sp&&s.apv>=4.1){var tc='try{x=new ActiveXObject(\"AgControl.A'" 
+"+'gControl\");for(var i=msv;i>0;i--){for(var j=9;j>=0;j--){if(x.is'" 
+"+'VersionSupported(i+\".\"+j)){sv=i+\".\"+j;break;}}if(sv){break;}'" 
+"+'}}catch(e){try{x=navigator.plugins[\"Silverlight Plug-In\"];sv=x'" 
+"+'.description.substring(0,x.description.indexOf(\".\")+2);}catch('" 
+"+'e){}}';eval(tc);sr=sv==''?'silverlight not detected':'silverlight" 
+" '+sv;}if((fr&&fp)||(sr&&sp)){s.c_w(cn,fr+'|'+sr,0);if(fr)s[fp]=fr;" 
+"if(sr)s[sp]=sr;}}"); s.p_fo=new Function("n","" +"var 
s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" +"new 
Object;return 1;}else {return 0;}"); 