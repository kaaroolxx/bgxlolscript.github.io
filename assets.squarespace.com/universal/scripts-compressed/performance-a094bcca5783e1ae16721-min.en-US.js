(self.webpackChunkextract_css=self.webpackChunkextract_css||[]).push([[52730],{326467:function(O,n,f){var m=f(544256);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},i.apply(this,arguments)}var y,j=function(t){return{app:"a",data:{__encoding_config__:t,__encoding_key__:"d"},event:"e",pageLoadId:"pl",ts:"t"}},L=i({context:{__encoding_config__:{accountId:"accountId",ampEnabled:"ampEnabled",authenticUrl:"authenticUrl",cloneable:"cloneable",collectionType:"collectionType",createdOn:"createdOn",developerMode:"developerMode",impersonatedSession:"impersonatedSession",inFrame:"inFrame",isHstsEnabled:"isHstsEnabled",isInternal:"isInternal",language:"language",memberId:"memberId",pageType:"pageType",platform:"platform",templateId:"templateId",timeZone:"timeZone",websiteId:"websiteId",websiteType:"websiteType"},__encoding_key__:"ctx"},supportLevel:"sl",visibilityStateOnDCL:"vs"},{analyticsId:"aid",connection:{__encoding_config__:{downlink:"do",effectiveType:"ef",rtt:"rtt",saveData:"sd"},__encoding_key__:"con"},deliveryType:"dt",display:{__encoding_config__:{devicePixelRatio:"dpr",screenHeight:"sh",screenWidth:"sw",viewportHeight:"vh",viewportWidth:"vw"},__encoding_key__:"disp"},hardware:{__encoding_config__:{deviceMemory:"dm",hardwareConcurrency:"hc"},__encoding_key__:"hdw"},hash:"h",hostname:"hn",marketingId:"mid",memberId:"mem",pathname:"p",version:"v"},{cumulativeLayoutShift:"cl",decodedBodySize:"db",domainLookup:"dml",domContentLoadedEventEnd:"de",domContentLoadedEventStart:"ds",encodedBodySize:"eb",firstContentfulPaint:"fcp",firstInputDelay:"fid",largestContentfulPaint:"lcp",loadEventEnd:"le",loadEventStart:"l",tcpConnection:"tcp",tlsConnection:"tls"}),H={duration:"d",endMarkDetail:"e",measureDetail:"m",name:"n",startMarkDetail:"s",startTime:"st"};(function(t){t.Element="element",t.Event="event",t.FirstInput="first-input",t.LongTask="longtask",t.LargestContentfulPaint="largest-contentful-paint",t.LayoutShift="layout-shift",t.Mark="mark",t.Measure="measure",t.Navigation="navigation",t.Paint="paint",t.Resource="resource"})(y||(y={}));var U,F=/(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;function h(t,e){var r={};return Object.keys(e).forEach(function(o){var l,_,v,T=e[o],w=t[o]||t,A=typeof w,k=A==="string";if(k||A==="object"||w==="undefined"){if(k)l=w,_=typeof(v=T)=="boolean"?v?1:0:typeof v=="number"&&isFinite(v)?v.toString(36):v;else{var S=w.__encoding_skip__,C=w.__encoding_config__,B=w.__encoding_fn__;if(!S&&!C&&!t)throw new Error("Invalid encoding map");l=S?o:w.__encoding_key__,_=C?h(C,T):B?B(T):T}l&&(r[""+l]=_)}}),r}function R(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceObserver"))return!1;try{var t=new window.PerformanceObserver(function(){return null});t.observe({entryTypes:[y.Mark]}),t.disconnect()}catch(e){return!1}return!0}function Y(){var t;return typeof((t=window.navigator)==null?void 0:t.sendBeacon)=="function"&&!F.test(window.navigator.userAgent)}var N=[];function J(){N.length&&(function(t,e){if(!Y()||!navigator.sendBeacon(t,e)){var r=new XMLHttpRequest;r.open("POST",t,!0),r.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),r.send(e)}}("/api/1/performance/records",JSON.stringify(N)),N=[])}function re(t,e){var r;if(!(r=e?h(e,t):i({raw:!0},t)))throw new Error("Data is empty");N.push(r)}var V,W,X=function(t){return function(){t&&t.apply(void 0,[].slice.call(arguments))}},Z=function(t){return function(){var e=arguments;return new Promise(function(r,o){try{t.apply(void 0,[function(l){r(l)}].concat([].slice.call(e)))}catch(l){o(l)}})}},$=function(t){return Z(setTimeout)(t)},ee=function(){return Z(function(t){var e=function r(o){o.type!=="pagehide"&&document.visibilityState!=="hidden"||(t(o),removeEventListener("visibilitychange",r,!0),removeEventListener("pagehide",r,!0))};window.addEventListener("visibilitychange",e,!0),window.addEventListener("pagehide",e,!0)})()},g=function(t){document.readyState==="complete"?window.setTimeout(t,0):window.addEventListener("pageshow",t,{once:!0})},d=function(t){try{return Promise.resolve(Z(g)).then(function(){var e=window.performance.getEntriesByType(y.Navigation)[0],r=e!=null?e:function(){var l={entryType:y.Navigation,startTime:0},_=performance.timing;for(var v in _)if(v!=="navigationStart"&&v!=="toJSON"){var T=Math.max(_[v]-_.navigationStart,0);l[v]=T}return l}(),o=r[t];if(!(typeof o!="number"||o<0))return Math.round(o)})}catch(e){return Promise.reject(e)}},I=function(t,e){if(typeof t=="number"&&typeof e=="number"&&t>=e)return t-e},P=function(t){return Promise.all([d("domainLookupEnd"),d("domainLookupStart")]).then(function(e){t({domainLookup:I(e[0],e[1])})})},G=function(t){return Promise.all([d("connectEnd"),d("connectStart")]).then(function(e){t({tcpConnection:I(e[0],e[1])})})},c=function(t){m.getCLS(function(e){var r;t({cumulativeLayoutShift:(r=e==null?void 0:e.value)!=null?r:void 0})})},a=function(t){return d("decodedBodySize").then(function(e){t({decodedBodySize:e})})},s=function(t){return d("domContentLoadedEventEnd").then(function(e){t({domContentLoadedEventEnd:e})})},E=function(t){return d("domContentLoadedEventStart").then(function(e){t({domContentLoadedEventStart:e})})},u=function(t){return d("encodedBodySize").then(function(e){t({encodedBodySize:e})})},b=function(t){m.getFCP(function(e){t({firstContentfulPaint:e?Math.round(e.value):void 0})})},p=function(t){m.getFID(function(e){t({firstInputDelay:e?Math.round(e.value):void 0})})},M=function(t){m.getLCP(function(e){t({largestContentfulPaint:e?Math.round(e.value):void 0})})},D=function(t){return d("loadEventEnd").then(function(e){t({loadEventEnd:e})})},ie=function(t){return d("loadEventStart").then(function(e){t({loadEventStart:e})})},pe=function(t){return d("responseStart").then(function(e){t({responseStart:e})})},Ee=function(t){return Promise.all([d("connectEnd"),d("secureConnectionStart")]).then(function(e){t({tlsNegotiation:I(e[0],e[1])})})},Re={__proto__:null,getDomainLookup:P,getTcpConnection:G,getCumulativeLayoutShift:c,getDecodedBodySize:a,getDomContentLoadedEventEnd:s,getDomContentLoadedEventStart:E,getEncodedBodySize:u,getFirstContentfulPaint:b,getFirstInputDelay:p,getLargestContentfulPaint:M,getLoadEventEnd:D,getLoadEventStart:ie,getResponseStart:pe,getTlsNegotiation:Ee};function fe(t){Object.values(Re).forEach(function(e){try{var r=function(o,l){try{var _=Promise.resolve(e(t)).then(function(){})}catch(v){return l(v)}return _&&_.then?_.then(void 0,l):_}(0,function(o){var l,_;(l=window)==null||(_=l.SQUARESPACE_SENTRY)==null||_.captureException==null||_.captureException(o)});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(o){return Promise.reject(o)}})}function ge(t){var e=new RegExp("(^| )"+t+"=([^;]+)"),r=document.cookie.match(e);return r?r[2]:""}function Le(t){var e={};for(var r in t)typeof t[r]!="function"&&(e[r]=t[r]);return e}(function(t){t.Beacon="beacon",t.XHR="xhr"})(V||(V={}));var le=function(t){var e=t.spanName,r=t.tracer,o=t.startTime,l=t.spanAttributes,_=l===void 0?{}:l;W===void 0&&(W=new Map);var v=r.startSpan(e,{startTime:o});v.setAttributes(_),W.set(e,v)},we=function(t){var e=t.spanName,r=t.spanAttributes,o=r===void 0?{}:r;if(W!==void 0&&W.has(e)){var l=W.get(e);l.setAttributes(o),l.end(),W.delete(e)}},he=function(t){var e,r;typeof((e=window)==null||(r=e.SQUARESPACE_SENTRY)==null?void 0:r.captureException)=="function"?window.SQUARESPACE_SENTRY.captureException(t):console.warn("@sqs/rum-collector: user timing exception: "+t)};function _e(){return y.Mark in window.performance&&y.Measure in window.performance}var ae,Se=new Set,Ne=["serverTiming","workerTiming"],Ie=["media-www.sqspcdn.com","images.squarespace-cdn.com","static1.squarespace.com"],ye=function(t){try{var e=function(o){return{appName:o.appName||"",context:o.context||{},enabled:typeof o.enabled!="boolean"||o.enabled,captureException:X(o.captureException)}}(t);if(!e.enabled)return Promise.resolve();var r="";return Promise.resolve(function(o,l){try{var _=Promise.resolve(new Promise(function(v,T){var w=new XMLHttpRequest;w.onreadystatechange=function(){if(w.readyState===XMLHttpRequest.DONE)if(w.status===200)try{v(JSON.parse(w.response))}catch(A){T(A)}else w.status!==0&&T(new Error("XHR request DONE with unexpected status: "+w.status))},w.ontimeout=function(){T(new Error("Metric settings request timeout"))},w.open("GET","/api/1/performance/settings",!0),w.timeout=3e4,w.send()})).then(function(v){if(!(r=v.pageLoadId))throw new Error("Unable to resolve pageLoadId");var T=function(w,A){return function(k,S,C){re({app:w,data:k,event:S,pageLoadId:A,ts:Date.now()},C)}}(e.appName,r);(function(w,A){Promise.resolve(function(k){try{var S=function(B){var te,ce,ue,de,oe,z,Q;return B===void 0&&(B={}),{context:B,analyticsId:ge("SS_ANALYTICS_ID"),marketingId:ge("SS_MID"),memberId:(te=window.Static)==null||(ce=te.SQUARESPACE_CONTEXT)==null||(ue=ce.authenticatedAccount)==null?void 0:ue.id,version:"4.3.0",connection:{downlink:(de=navigator.connection)==null?void 0:de.downlink,effectiveType:(oe=navigator.connection)==null?void 0:oe.effectiveType,rtt:(z=navigator.connection)==null?void 0:z.rtt,saveData:(Q=navigator.connection)==null?void 0:Q.saveData},deliveryType:Y()?V.Beacon:V.XHR,display:{devicePixelRatio:window.devicePixelRatio,screenHeight:window.screen.height,screenWidth:window.screen.width,viewportHeight:window.innerHeight,viewportWidth:window.innerWidth},hardware:{deviceMemory:navigator.deviceMemory,hardwareConcurrency:navigator.hardwareConcurrency},hash:window.location.hash||"",hostname:window.location.hostname||"",pathname:window.location.pathname||"/"}}(k),C={};return fe(function(B){Object.assign(C,B)}),Promise.resolve(Promise.race([$(6e4),ee()])).then(function(){return i({},S,C)})}catch(B){return Promise.reject(B)}}(A)).then(function(k){w(k,"page_speed",j(L))})})(T,e.context),function(w){if(window.PerformanceMeasure&&window.PerformanceMark){var A=function(k){k.map(Le).forEach(function(S){if(typeof(C=S.name)=="string"&&C.substring(0,4)==="rum-"){var C,B=S.name+"|"+S.duration;Se.has(B)||(w(S,"user",j(H)),Se.add(B))}})};A(window.performance.getEntriesByType(y.Measure)),R()?new window.PerformanceObserver(function(k){return A(k.getEntries())}).observe({entryTypes:[y.Measure]}):document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&A(window.performance.getEntriesByType(y.Measure))})}}(T),function(w){try{if(!R())return Promise.resolve();ae||m.getLCP(function(S){ae=S==null?void 0:S.value});var A=new Map;document.querySelectorAll("img[data-src]").forEach(function(S){var C=S.getAttribute("data-src");S instanceof HTMLImageElement&&C&&A.set(C,S)});var k=function(S){return function(C){var B,te=C.resource,ce=C.deliverMetrics,ue=C.domImages;try{if(!(te instanceof PerformanceResourceTiming&&(B=te.name,Ie.some(function(z){return B.includes(z)}))))return Promise.resolve();var de=te.name.replace(/\?format=.*/,""),oe=ue.get(de);return oe===void 0?Promise.resolve():Promise.resolve(function(z,Q){try{for(var Ae=function(x){var ne,K=Number((ne=x.getAttribute("data-image-resolution"))==null?void 0:ne.replace("w",""));if(!Number.isNaN(K))return K;var q=x.src.indexOf("format=");if(q===-1)return NaN;var se=x.src.slice(q+7).replace(/w.*/,"");return Number(se)}(Q),De=Q.naturalWidth,ke=Q.naturalHeight,Be=Q.width,Fe=Q.height,je=ae===void 0||z.responseEnd<ae,me=function(x,ne){if(x==null)return{};var K,q,se={},Pe=Object.keys(x);for(q=0;q<Pe.length;q++)ne.indexOf(K=Pe[q])>=0||(se[K]=x[K]);return se}(z.toJSON(),Ne),ve=0,Te=Object.entries(me);ve<Te.length;ve++){var Ce=Te[ve],Oe=Ce[1];typeof Oe=="number"&&(me[Ce[0]]=Math.floor(Oe))}var Ue=new Promise(function(x){var ne=new IntersectionObserver(function(K){K.forEach(function(q){if(q.target===Q)return ne.disconnect(),x(i({visibleOnLoad:q.isIntersecting,observationTime:Math.floor(q.time),intersectionRatio:q.intersectionRatio,squarespaceSize:Ae,naturalHeight:ke,naturalWidth:De,height:Fe,width:Be,loadedBeforeLCP:je},me))})});ne.observe(Q)});return Promise.resolve(Ue)}catch(x){return Promise.reject(x)}}(te,oe)).then(function(z){ce(z,"image")})}catch(z){return Promise.reject(z)}}({resource:S,deliverMetrics:w,domImages:A})};performance.getEntriesByType(y.Resource).forEach(k),new PerformanceObserver(function(S){S.getEntries().forEach(k)}).observe({entryTypes:[y.Resource]}),Promise.resolve()}catch(S){return Promise.reject(S)}}(T),window.addEventListener("load",function(){U=window.setTimeout(J,3e4)}),document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&(window.clearTimeout(U),J())})})}catch(v){return l(v)}return _&&_.then?_.then(void 0,l):_}(0,function(o){e.captureException(o,{pageLoadId:r,parsedOptions:e})}))}catch(o){return Promise.reject(o)}},Me={action:"load",actor:"user",event_owner_team:"web_performance",event_source:"web",object_type:"website"},be=Object.freeze({cumulativeLayoutShift:"cumulative_layout_shift",decodedBodySize:"decoded_body_size_bytes",domContentLoadedEventEnd:"dom_content_loaded_event_end_ms",domContentLoadedEventStart:"dom_content_loaded_event_start_ms",domainLookup:"domain_lookup_ms",encodedBodySize:"encoded_body_size_bytes",firstContentfulPaint:"first_contentful_paint_ms",firstInputDelay:"first_input_delay_ms",largestContentfulPaint:"largest_contentful_paint_ms",loadEventEnd:"load_event_end_ms",loadEventStart:"load_event_start_ms",responseStart:"response_start_ms",tcpConnection:"tcp_connection_ms",tlsNegotiation:"tls_negotiation_ms"});n.RUM_PREFIX="rum-",n.default=function(){return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."),ye.apply(void 0,[].slice.call(arguments))},n.getCumulativeLayoutShift=c,n.getDecodedBodySize=a,n.getDomContentLoadedEventEnd=s,n.getDomContentLoadedEventStart=E,n.getDomainLookup=P,n.getEncodedBodySize=u,n.getFirstContentfulPaint=b,n.getFirstInputDelay=p,n.getLargestContentfulPaint=M,n.getLoadEventEnd=D,n.getLoadEventStart=ie,n.getPerformanceMetrics=fe,n.getResponseStart=pe,n.getTcpConnection=G,n.getTlsNegotiation=Ee,n.init=ye,n.mark=function(t,e){e===void 0&&(e={});try{if(!_e())return;var r="rum-"+t;if(window.performance.clearMarks(r),window.performance.mark(r,{detail:e.detail,startTime:e.startTime}),e.tracer!==void 0){var o=window.performance.getEntriesByName(r,y.Mark).slice(-1);le({spanName:t,tracer:e.tracer,startTime:o[0].startTime,spanAttributes:e.spanAttributes})}}catch(l){he(l)}},n.measure=function(t,e){e===void 0&&(e={requireStart:!1});try{if(!(_e()&&"performance"in window&&"getEntries"in window.performance&&"getEntriesByType"in window.performance&&"getEntriesByName"in window.performance))return;var r="rum-"+t,o={detail:e.detail,duration:e.duration};if(o.start=e.start===void 0?r:typeof e.start=="string"?"rum-"+e.start:e.start,o.end=typeof e.end=="string"?"rum-"+e.end:e.end,e.requireStart&&(typeof o.start=="number"||window.performance.getEntriesByName(o.start,y.Mark).length===0))return;if(e.tracer!==void 0){var l=i({measureName:r},e.spanAttributes);typeof o.start=="number"?(le({spanName:r,tracer:e.tracer,startTime:o.start}),we({spanName:r,spanAttributes:l})):(window.performance.getEntriesByName(o.start,y.Mark).length===0&&le({spanName:o.start,tracer:e.tracer,startTime:0}),we({spanName:o.start,spanAttributes:l}))}(function(v,T){try{window.performance.measure(v,T)}catch(k){var w=typeof T.start=="string"?T.start:v,A=typeof T.end=="string"?T.end:void 0;try{window.performance.measure(v,w,A)}catch(S){if(!(S instanceof DOMException))throw S;try{window.performance.measure(v,"navigationStart")}catch(C){if(!(C instanceof DOMException))throw C;window.performance.measure(v)}}}})(r,o);var _=function(v){var T=window.performance.getEntriesByName(v,y.Measure);return T[T.length-1]}(r);return _}catch(v){he(v)}},n.trackEventsV2Factory=function(t,e){var r;return e===void 0&&(r=window.location.hostname.substr(window.location.hostname.indexOf(".")+1),e=/^stage.sqsp.net/g.test(r)||/^qa\d+.sqsp.net/g.test(r)?"staging":/(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g.test(r)?"dev":"prod"),new t({customSchemaName:"Performance",sourceEnvironment:e},Me)},n.trackLoadPerformance=function(t){try{var e={};return fe(function(r){Object.entries(r).forEach(function(o){var l=o[0],_=o[1];Object.prototype.hasOwnProperty.call(be,l)&&(e[be[l]]=_)})}),Promise.resolve(Promise.race([$(6e4),ee()])).then(function(){t(e)})}catch(r){return Promise.reject(r)}}},427321:function(O,n,f){"use strict";var m=f(875832),i=m(f(346797)),y=f(326467),j=m(f(672325)),L=m(f(768918)),H=f(196842);function U(g,d){var I=Object.keys(g);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(g);d&&(P=P.filter(function(G){return Object.getOwnPropertyDescriptor(g,G).enumerable})),I.push.apply(I,P)}return I}function F(g){for(var d=1;d<arguments.length;d++){var I=arguments[d]!=null?arguments[d]:{};d%2?U(Object(I),!0).forEach(function(P){(0,i.default)(g,P,I[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(I)):U(Object(I)).forEach(function(P){Object.defineProperty(g,P,Object.getOwnPropertyDescriptor(I,P))})}return g}var h=window.Static&&window.Static.SQUARESPACE_CONTEXT,R=window.top!==window,Y=Object.freeze((0,i.default)({},L.default.COMMERCE_CART_V2,"commerce-cart"));function N(){var g=window.location&&window.location.pathname||"";return!R&&/^\/config(\/.*)?$/.test(g)}function J(){return{inFrame:R,templateId:h.templateId||"",impersonatedSession:!!h.impersonatedSession,pageType:typeof h.pageType=="number"?h.pageType:-1}}function re(){var g=h.website,d=g===void 0?{}:g;return{authenticUrl:d.authenticUrl||"",cloneable:!!d.cloneable,developerMode:!!d.developerMode,isHstsEnabled:!!d.isHstsEnabled,language:d.language||"",timeZone:d.timeZone||"",websiteId:d.id||"",websiteType:d.websiteType||-1}}function V(){var g=h.websiteSettings,d=g===void 0?{}:g;return{ampEnabled:!!d.ampEnabled}}function W(){var g=h.collection,d=g===void 0?{}:g;return{collectionType:d.type||-1}}function X(){return window.Squarespace&&"SECTION_CONTEXT"in window.Squarespace}function Z(){return h.hasOwnProperty("templateVersion")?h.templateVersion.replace(".","_"):X()?"8":null}function $(g){var d=N(),I=Y[h.pageType],P={appName:I||"v".concat(g,"-").concat(d?"config":"user-sites"),context:F(F(F(F({},J()),re()),V()),W()),captureException:function(u,b){(0,H.withScope)(function(p){p.setTag("project","rum-collector"),b!==void 0&&p.setExtra("extras",b),(0,H.captureException)(u)})}};if(d){var G=h.website.siteStatus.value===j.default.INTERNAL,c=h.authenticatedAccount,a=c.createdOn,s=c.id;P.context.isInternal=G,P.context.createdOn=a,P.context.memberId=s}return P}function ee(){if(h){var g=Z();if(g===null)return;var d=$(g);(0,y.init)(d)}}ee()},196842:function(O,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withScope=n.isSentryConnected=n.configureScope=n.captureMessage=n.captureException=n.captureEvent=void 0;var f,m,i,y,j;n.withScope=j,n.configureScope=y,n.captureEvent=i,n.captureException=m,n.captureMessage=f;var L=function(F){for(var h,R=arguments.length,Y=new Array(R>1?R-1:0),N=1;N<R;N++)Y[N-1]=arguments[N];return(h=console).log.apply(h,["[Sentry] ".concat(F)].concat(Y)),"some-error-identifier"},H=!1;n.isSentryConnected=H,window.SQUARESPACE_SENTRY?(n.isSentryConnected=H=!0,n.captureMessage=f=window.SQUARESPACE_SENTRY.captureMessage,n.captureException=m=window.SQUARESPACE_SENTRY.captureException,n.captureEvent=i=window.SQUARESPACE_SENTRY.captureEvent,n.configureScope=y=window.SQUARESPACE_SENTRY.configureScope,n.withScope=j=window.SQUARESPACE_SENTRY.withScope):(console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."),n.captureMessage=f=L,n.captureException=m=L,n.captureEvent=i=L,n.configureScope=y=function(){},n.withScope=j=function(){})},544256:function(O,n,f){"use strict";f.r(n),f.d(n,{getCLS:function(){return Y},getFCP:function(){return W},getFID:function(){return I},getLCP:function(){return P},getTTFB:function(){return G}});var m,i,y,j,L=function(c,a){return{name:c,value:a===void 0?-1:a,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},H=function(c,a){try{if(PerformanceObserver.supportedEntryTypes.includes(c)){if(c==="first-input"&&!("PerformanceEventTiming"in self))return;var s=new PerformanceObserver(function(E){return E.getEntries().map(a)});return s.observe({type:c,buffered:!0}),s}}catch(E){}},U=function(c,a){var s=function E(u){u.type!=="pagehide"&&document.visibilityState!=="hidden"||(c(u),a&&(removeEventListener("visibilitychange",E,!0),removeEventListener("pagehide",E,!0)))};addEventListener("visibilitychange",s,!0),addEventListener("pagehide",s,!0)},F=function(c){addEventListener("pageshow",function(a){a.persisted&&c(a)},!0)},h=typeof WeakSet=="function"?new WeakSet:new Set,R=function(c,a,s){var E;return function(){a.value>=0&&(s||h.has(a)||document.visibilityState==="hidden")&&(a.delta=a.value-(E||0),(a.delta||E===void 0)&&(E=a.value,c(a)))}},Y=function(c,a){var s,E=L("CLS",0),u=function(p){p.hadRecentInput||(E.value+=p.value,E.entries.push(p),s())},b=H("layout-shift",u);b&&(s=R(c,E,a),U(function(){b.takeRecords().map(u),s()}),F(function(){E=L("CLS",0),s=R(c,E,a)}))},N=-1,J=function(){return document.visibilityState==="hidden"?0:1/0},re=function(){U(function(c){var a=c.timeStamp;N=a},!0)},V=function(){return N<0&&(N=J(),re(),F(function(){setTimeout(function(){N=J(),re()},0)})),{get timeStamp(){return N}}},W=function(c,a){var s,E=V(),u=L("FCP"),b=function(D){D.name==="first-contentful-paint"&&(M&&M.disconnect(),D.startTime<E.timeStamp&&(u.value=D.startTime,u.entries.push(D),h.add(u),s()))},p=performance.getEntriesByName("first-contentful-paint")[0],M=p?null:H("paint",b);(p||M)&&(s=R(c,u,a),p&&b(p),F(function(D){u=L("FCP"),s=R(c,u,a),requestAnimationFrame(function(){requestAnimationFrame(function(){u.value=performance.now()-D.timeStamp,h.add(u),s()})})}))},X={passive:!0,capture:!0},Z=new Date,$=function(c,a){m||(m=a,i=c,y=new Date,d(removeEventListener),ee())},ee=function(){if(i>=0&&i<y-Z){var c={entryType:"first-input",name:m.type,target:m.target,cancelable:m.cancelable,startTime:m.timeStamp,processingStart:m.timeStamp+i};j.forEach(function(a){a(c)}),j=[]}},g=function(c){if(c.cancelable){var a=(c.timeStamp>1e12?new Date:performance.now())-c.timeStamp;c.type=="pointerdown"?function(s,E){var u=function(){$(s,E),p()},b=function(){p()},p=function(){removeEventListener("pointerup",u,X),removeEventListener("pointercancel",b,X)};addEventListener("pointerup",u,X),addEventListener("pointercancel",b,X)}(a,c):$(a,c)}},d=function(c){["mousedown","keydown","touchstart","pointerdown"].forEach(function(a){return c(a,g,X)})},I=function(c,a){var s,E=V(),u=L("FID"),b=function(M){M.startTime<E.timeStamp&&(u.value=M.processingStart-M.startTime,u.entries.push(M),h.add(u),s())},p=H("first-input",b);s=R(c,u,a),p&&U(function(){p.takeRecords().map(b),p.disconnect()},!0),p&&F(function(){var M;u=L("FID"),s=R(c,u,a),j=[],i=-1,m=null,d(addEventListener),M=b,j.push(M),ee()})},P=function(c,a){var s,E=V(),u=L("LCP"),b=function(D){var ie=D.startTime;ie<E.timeStamp&&(u.value=ie,u.entries.push(D)),s()},p=H("largest-contentful-paint",b);if(p){s=R(c,u,a);var M=function(){h.has(u)||(p.takeRecords().map(b),p.disconnect(),h.add(u),s())};["keydown","click"].forEach(function(D){addEventListener(D,M,{once:!0,capture:!0})}),U(M,!0),F(function(D){u=L("LCP"),s=R(c,u,a),requestAnimationFrame(function(){requestAnimationFrame(function(){u.value=performance.now()-D.timeStamp,h.add(u),s()})})})}},G=function(c){var a,s=L("TTFB");a=function(){try{var E=performance.getEntriesByType("navigation")[0]||function(){var u=performance.timing,b={entryType:"navigation",startTime:0};for(var p in u)p!=="navigationStart"&&p!=="toJSON"&&(b[p]=Math.max(u[p]-u.navigationStart,0));return b}();if(s.value=s.delta=E.responseStart,s.value<0)return;s.entries=[E],c(s)}catch(u){}},document.readyState==="complete"?setTimeout(a,0):addEventListener("pageshow",a)}},768918:function(O,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f;(function(i){i.MAIN_CONTENT=1,i.CONTENT_COLLECTION=1,i.PAGE=2,i.SPLASH_PAGE=3,i.CONTENT_ITEM=50,i.NOT_FOUND=100,i.ERROR=101,i.SEARCH=102,i.LOCK_SCREEN=103,i.POPUP_OVERLAY=104,i.PROTECTED_CONTENT=105,i.MEMBER_AREA_ACCESS_DENIED=106,i.SHOW_CART=200,i.CHECKOUT=201,i.ORDER_CONFIRMED=202,i.DONATE=203,i.CONTRIBUTION_CONFIRMED=204,i.COMMERCE_CART_V2=205,i.SUBSCRIPTION_CONFIRMED=206,i.ORDER_RECEIVED=207,i.MEMBERSHIP_CONFIRMED=208,i.REVIEWS_REQUEST=209,i.DIGITAL_PRODUCT_COMPOSER_PREVIEW=210,i.ORDER_STATUS=211,i.NEWSLETTER_UNSUBSCRIBE=300,i.COMMERCE_EMAIL_PREVIEW=301})(f||(f={}));var m=f;n.default=m,O.exports=n.default},672325:function(O,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f;(function(i){i.EXPIRED=1,i.PASTDUE=2,i.TRIAL=3,i.BETA=4,i.REMOVED=5,i.INTERNAL=6,i.COMPED=7,i.PAID=8,i.V5_LINKED=11,i.ACTIVE_PARKING_PAGE=12,i.RESOLD=13,i.RESOLD_GRACE_PERIOD=14,i.ENTERPRISE=15})(f||(f={}));var m=f;n.default=m,O.exports=n.default},346797:function(O){function n(f,m,i){return m in f?Object.defineProperty(f,m,{value:i,enumerable:!0,configurable:!0,writable:!0}):f[m]=i,f}O.exports=n,O.exports.__esModule=!0,O.exports.default=O.exports},875832:function(O){function n(f){return f&&f.__esModule?f:{default:f}}O.exports=n,O.exports.__esModule=!0,O.exports.default=O.exports}},function(O){var n=function(m){return O(O.s=m)},f=n(427321)}]);
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-66f3b3aae1e2ff4d67409-min.en-US.js.map
