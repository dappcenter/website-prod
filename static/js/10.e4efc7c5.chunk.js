(this["webpackJsonp@minimal/material-kit-react"]=this["webpackJsonp@minimal/material-kit-react"]||[]).push([[10],{2492:function(e,t,a){"use strict";var r=a(3),i=a(26),o=a(184),n=a(30),l=a(0),c=a(2432),s=a(294),p={pageview:function(e){!function(e,t){window.gtag&&window.gtag("config",e,t)}(s.a||"",e)},event:function(e,t){!function(e,t){window.gtag&&window.gtag("event",e,t)}(e,t)}},d=a(1),u=["children","title"],b=Object(l.forwardRef)((function(e,t){var a=e.children,s=e.title,b=void 0===s?"":s,m=Object(i.a)(e,u),h=Object(n.g)().pathname,x=Object(l.useCallback)((function(){p.pageview({page_path:h})}),[]);return Object(l.useEffect)((function(){x()}),[x]),Object(d.jsxs)(c.a,Object(r.a)(Object(r.a)({ref:t},m),{},{children:[Object(d.jsx)(o.a,{children:Object(d.jsx)("title",{children:b})}),a]}))}));t.a=b},2581:function(e){e.exports=JSON.parse('{"version":8,"name":"Basic","metadata":{"mapbox:autocomposite":true},"sources":{"mapbox":{"url":"mapbox://mapbox.mapbox-streets-v7","type":"vector"}},"sprite":"mapbox://sprites/mapbox/basic-v8","glyphs":"mapbox://fonts/mapbox/{fontstack}/{range}.pbf","layers":[{"id":"background","type":"background","paint":{"background-color":"#dedede"},"interactive":true},{"id":"landuse_overlay_national_park","type":"fill","source":"mapbox","source-layer":"landuse_overlay","filter":["==","class","national_park"],"paint":{"fill-color":"#d2edae","fill-opacity":0.75},"interactive":true},{"id":"landuse_park","type":"fill","source":"mapbox","source-layer":"landuse","filter":["==","class","park"],"paint":{"fill-color":"#d2edae"},"interactive":true},{"id":"waterway","type":"line","source":"mapbox","source-layer":"waterway","filter":["all",["==","$type","LineString"],["in","class","river","canal"]],"paint":{"line-color":"#a0cfdf","line-width":{"base":1.4,"stops":[[8,0.5],[20,15]]}},"interactive":true},{"id":"water","type":"fill","source":"mapbox","source-layer":"water","paint":{"fill-color":"#a0cfdf"},"interactive":true},{"id":"building","type":"fill","source":"mapbox","source-layer":"building","paint":{"fill-color":"#d6d6d6"},"interactive":true},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]},"line-dasharray":[0.36,0.18]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","tunnel"]]],"type":"line","source":"mapbox","id":"tunnel_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]},"line-dasharray":[0.28,0.14]},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["in","structure","none","ford"]]],"type":"line","source":"mapbox","id":"road_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"butt","line-join":"miter"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major case","paint":{"line-color":"#dedede","line-width":{"base":1.6,"stops":[[12,0.5],[20,10]]},"line-gap-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway_link","street","street_limited","service","track","pedestrian","path","link"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_minor","paint":{"line-color":"#efefef","line-width":{"base":1.55,"stops":[[4,0.25],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["in","class","motorway","primary","secondary","tertiary","trunk"],["==","structure","bridge"]]],"type":"line","source":"mapbox","id":"bridge_major","paint":{"line-color":"#fff","line-width":{"base":1.4,"stops":[[6,0.5],[20,30]]}},"source-layer":"road"},{"interactive":true,"layout":{"line-cap":"round","line-join":"round"},"filter":["all",["==","$type","LineString"],["all",["<=","admin_level",2],["==","maritime",0]]],"type":"line","source":"mapbox","id":"admin_country","paint":{"line-color":"#8b8a8a","line-width":{"base":1.3,"stops":[[3,0.5],[22,15]]}},"source-layer":"admin"},{"interactive":true,"minzoom":5,"layout":{"icon-image":"{maki}-11","text-offset":[0,0.5],"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":8,"text-anchor":"top","text-size":11,"icon-size":1},"filter":["all",["==","$type","Point"],["all",["==","scalerank",1],["==","localrank",1]]],"type":"symbol","source":"mapbox","id":"poi_label","paint":{"text-color":"#666","text-halo-width":1,"text-halo-color":"rgba(255,255,255,0.75)","text-halo-blur":1},"source-layer":"poi_label"},{"interactive":true,"layout":{"symbol-placement":"line","text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-transform":"uppercase","text-letter-spacing":0.1,"text-size":{"base":1.4,"stops":[[10,8],[20,14]]}},"filter":["all",["==","$type","LineString"],["in","class","motorway","primary","secondary","tertiary","trunk"]],"type":"symbol","source":"mapbox","id":"road_major_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":2},"source-layer":"road_label"},{"interactive":true,"minzoom":8,"layout":{"text-field":"{name_en}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-max-width":6,"text-size":{"stops":[[6,12],[12,16]]}},"filter":["all",["==","$type","Point"],["in","type","town","village","hamlet","suburb","neighbourhood","island"]],"type":"symbol","source":"mapbox","id":"place_label_other","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Bold","Arial Unicode MS Bold"],"text-max-width":10,"text-size":{"stops":[[3,12],[8,16]]}},"maxzoom":16,"filter":["all",["==","$type","Point"],["==","type","city"]],"type":"symbol","source":"mapbox","id":"place_label_city","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"place_label"},{"interactive":true,"layout":{"text-field":"{name_en}","text-font":["Open Sans Regular","Arial Unicode MS Regular"],"text-max-width":10,"text-size":{"stops":[[3,14],[8,22]]}},"maxzoom":12,"filter":["==","$type","Point"],"type":"symbol","source":"mapbox","id":"country_label","paint":{"text-color":"#666","text-halo-color":"rgba(255,255,255,0.75)","text-halo-width":1,"text-halo-blur":1},"source-layer":"country_label"}]}')},2661:function(e,t){},2664:function(e,t){},2673:function(e,t){},2721:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Y}));var r=a(10),i=a(11),o=a(2464),n=a(2458),l=a(2492),c=a(2446),s=a(2432),p=a(2466),d=a(125),u=a(1),b=[{country:"Bali",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(239) 555-0108"},{country:"London",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(319) 555-0115"},{country:"Prague",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(252) 555-0126"},{country:"Moscow",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(307) 555-0133"}],m=Object(i.a)(c.a.div)((function(e){var t=e.theme;return Object(r.a)({backgroundSize:"cover",backgroundImage:"url(/static/overlay.svg), url(/static/contact/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),h=Object(i.a)("div")((function(e){var t=e.theme;return Object(r.a)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function x(){return Object(u.jsx)(m,{initial:"initial",animate:"animate",variants:d.k,children:Object(u.jsx)(o.a,{maxWidth:"lg",sx:{position:"relative",height:"100%"},children:Object(u.jsxs)(h,{children:[Object(u.jsx)(d.d,{text:"Where",sx:{color:"primary.main"},variants:d.i}),Object(u.jsx)("br",{}),Object(u.jsxs)(s.a,{sx:{display:"inline-flex",color:"common.white"},children:[Object(u.jsx)(d.d,{text:"to",sx:{mr:2}}),Object(u.jsx)(d.d,{text:"find",sx:{mr:2}}),Object(u.jsx)(d.d,{text:"us?"})]}),Object(u.jsx)(n.a,{container:!0,spacing:5,sx:{mt:5,color:"common.white"},children:b.map((function(e){return Object(u.jsxs)(n.a,{item:!0,xs:12,sm:6,md:3,lg:2,sx:{pr:{md:5}},children:[Object(u.jsx)(c.a.div,{variants:d.f,children:Object(u.jsx)(p.a,{variant:"h6",paragraph:!0,children:e.country})}),Object(u.jsx)(c.a.div,{variants:d.i,children:Object(u.jsxs)(p.a,{variant:"body2",children:[e.address,Object(u.jsx)("br",{})," ",e.phoneNumber]})})]},e.country)}))})]})})})}var g=a(2441),j=a(2724),f=a(2474);function y(){return Object(u.jsxs)(g.a,{spacing:5,children:[Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsxs)(p.a,{variant:"h3",children:["Feel free to contact us. ",Object(u.jsx)("br",{}),"We'll be glad to hear from you, buddy."]})}),Object(u.jsxs)(g.a,{spacing:3,children:[Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsx)(j.a,{fullWidth:!0,label:"Name"})}),Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsx)(j.a,{fullWidth:!0,label:"Email"})}),Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsx)(j.a,{fullWidth:!0,label:"Subject"})}),Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsx)(j.a,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})})]}),Object(u.jsx)(d.c,{variants:d.j,children:Object(u.jsx)(f.a,{size:"large",variant:"contained",children:"Submit Now"})})]})}var v=a(3),O=a(23),w=a(4),k=a.n(w),S=a(2496),_=a(0),z=a(35),C=a(2657),R=a.n(C),B=a(51);Object(i.a)(S.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));Object(i.a)(S.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));var F=a(26),W=["onClick"],A=Object(i.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function I(e){var t=e.onClick,a=Object(F.a)(e,W);return Object(u.jsx)(S.f,Object(v.a)(Object(v.a)({},a),{},{children:Object(u.jsx)(A,{viewBox:"0 0 24 24",onClick:t,children:Object(u.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var N=Object(i.a)(S.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function L(e){var t=Object.assign({},e);return Object(u.jsx)(N,Object(v.a)({},t))}var $=["onClose","sx","children"],M=Object(i.a)(S.h)((function(e){var t=e.theme,a="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:a&&"0",left:a&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function T(e){var t=e.onClose,a=e.sx,r=e.children,i=Object(F.a)(e,$);return Object(u.jsx)(M,Object(v.a)(Object(v.a)({tipSize:8,anchor:"bottom",onClose:t,closeButton:!0,closeOnClick:!1,sx:a},i),{},{children:r}))}var U=["sx"],P=Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,background:"red",position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function G(e){var t=e.sx,a=Object(F.a)(e,U);return Object(u.jsx)(P,{sx:t,children:Object(u.jsx)(S.i,Object(v.a)({maxWidth:100,unit:"imperial"},a))})}var E=a(22);a(2739),a(2747),a(2450),Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}}));Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}}));var J=a(2658),V=(a(2468),a(2581));Object(J.a)(V),Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}})),Object(i.a)("div")((function(e){var t=e.theme;return{width:20,height:20,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",marginRight:t.spacing(1),border:"solid 1px ".concat(t.palette.grey[500]),"& input":{width:12,height:12,border:"none",outline:"none",cursor:"pointer",WebkitAppearance:"none",backgroundColor:"transparent","&::-webkit-color-swatch-wrapper":{padding:0},"&::-moz-color-swatch":{border:"none",borderRadius:"50%"},"&::-webkit-color-swatch":{border:"none",borderRadius:"50%"}}}}));a(2707),a(2726),a(2736),Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}}));a(466),a(2740);Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:240,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}}));a(2570),Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}})),Object(i.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",textTransform:"capitalize",justifyContent:"space-between",color:t.palette.common.white,"&:not(:last-child)":{marginBottom:t.spacing(1)}}}));Object(i.a)("div")((function(e){var t=e.theme;return{zIndex:99,minWidth:200,position:"absolute",top:t.spacing(1),right:t.spacing(1),padding:t.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:t.shape.borderRadius,backgroundColor:Object(E.a)(t.palette.grey[900],.72)}}));a(2719),a(2737);a(2680);var D=Object(v.a)(Object(v.a)({},V),{},{sources:Object(v.a)({},V.sources),layers:V.layers.slice()});D.sources["sf-neighborhoods"]={type:"geojson",data:"https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json"},D.layers.push({id:"sf-neighborhoods-fill",source:"sf-neighborhoods",type:"fill",paint:{"fill-outline-color":"#0040c8","fill-color":"#fff","fill-opacity":0}},{id:"sf-neighborhoods-outline",source:"sf-neighborhoods",type:"line",paint:{"line-width":2,"line-color":"#0080ef"}});var H=a(294),q=[{latlng:[33,65],address:"720 Devonshire Ave. Fort Mill, SC 29708",phoneNumber:k.a.phone.phoneNumberFormat()},{latlng:[-12.5,18.5],address:"8559 Valley Court Owosso, MI 48867",phoneNumber:k.a.phone.phoneNumberFormat()}],K=Object(i.a)("div")((function(e){return{zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:e.theme.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}}));function Q(){var e="light"===Object(B.a)().palette.mode,t=Object(_.useState)(null),a=Object(O.a)(t,2),r=a[0],i=a[1],o=Object(_.useState)({latitude:12,longitude:42,zoom:2}),n=Object(O.a)(o,2),l=n[0],c=n[1];return Object(u.jsx)(d.c,{variants:d.f,children:Object(u.jsx)(K,{children:Object(u.jsxs)(S.l,Object(v.a)(Object(v.a)({},l),{},{onViewportChange:c,mapStyle:"mapbox://styles/mapbox/".concat(e?"light":"dark","-v10"),mapboxApiAccessToken:H.b,width:"100%",height:"100%",children:[Object(u.jsx)(G,{}),Object(u.jsx)(L,{}),q.map((function(e){return Object(u.jsx)(I,{latitude:e.latlng[0],longitude:e.latlng[1],onClick:function(){return i(e)}},e.phoneNumber)})),r&&Object(u.jsxs)(T,{longitude:r.latlng[1],latitude:r.latlng[0],onClose:function(){return i(null)},sx:{"& .mapboxgl-popup-content":{bgcolor:"common.white"},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{borderTopColor:"#FFF"},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{borderBottomColor:"#FFF"}},children:[Object(u.jsx)(p.a,{variant:"subtitle2",sx:{mb:.5},children:"Address"}),Object(u.jsx)(p.a,{component:"p",variant:"caption",children:r.address}),Object(u.jsxs)(p.a,{component:"p",variant:"caption",sx:{mt:1,display:"flex",alignItems:"center"},children:[Object(u.jsx)(s.a,{component:z.Icon,icon:R.a,sx:{mr:.5,width:14,height:14}}),r.phoneNumber]})]})]}))})})}var X=Object(i.a)(l.a)((function(e){var t=e.theme;return Object(r.a)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function Y(){return Object(u.jsxs)(X,{title:"Contact us | Minimal-UI",children:[Object(u.jsx)(x,{}),Object(u.jsx)(o.a,{sx:{my:10},children:Object(u.jsxs)(n.a,{container:!0,spacing:10,children:[Object(u.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(y,{})}),Object(u.jsx)(n.a,{item:!0,xs:12,md:6,children:Object(u.jsx)(Q,{})})]})})]})}}}]);
//# sourceMappingURL=10.e4efc7c5.chunk.js.map