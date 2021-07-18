var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,l=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&i(e,t,a[t]);if(o)for(var t of o(a))r.call(a,t)&&i(e,t,a[t]);return e},c=(e,o)=>a(e,t(o));import{R as d,S as s,B as p,C as m,L as g,I as u,H as b,T as h,a as E,W as f,G as y,b as z,c as k,d as x,e as R,r as v,F as _,f as O,g as A,h as w,i as C,j as F,k as I,M as S,l as B,m as T,P as j,n as P,o as L,u as W,p as D,q as M,s as N,t as H,v as U,w as Y,x as q,y as X,z as $,A as Z,D as V,E as G,J}from"./vendor.b1e09671.js";const K=(e,a)=>{switch(a.type){case"FILTRAR_PARTIDO":return c(l({},e),{partidoFiltered:a.payload,localidadFiltered:0,barrioFiltered:0});case"FILTRAR_LOCALIDAD":return c(l({},e),{localidadFiltered:a.payload,barrioFiltered:0});case"FILTRAR_BARRIO":return c(l({},e),{barrioFiltered:a.payload});case"FILTRAR_CERCANIA":return c(l({},e),{ubicacionCercana:a.payload});default:return e}},Q={ubicacionCercana:!1,partidoFiltered:0,localidadFiltered:0,barrioFiltered:0},ee=d.createContext({state:Q,dispatch:()=>null}),ae=e=>{const[a,t]=d.useReducer(K,Q);return d.createElement(ee.Provider,{value:{state:{ubicacionCercana:a.ubicacionCercana,partidoFiltered:a.partidoFiltered,localidadFiltered:a.localidadFiltered,barrioFiltered:a.barrioFiltered},dispatch:t}},e.children)},te=e=>{const[a,t]=d.useState(""),[o,n]=d.useState("80px"),[r,i]=d.useState(!1),[l,c]=d.useState(!1),[x,R]=d.useState(!1);return d.createElement(s,{ref:e=>{e&&t(e.getBoundingClientRect().height+"px")},spacing:0},d.createElement(p,{backgroundColor:"whiteAlpha.900",paddingY:1},d.createElement(m,{maxWidth:"container.xl"},d.createElement(s,{alignItems:"center",direction:"row",justifyContent:"space-between"},d.createElement(s,{alignItems:"center",direction:"row"},d.createElement(g,{to:"/"}),d.createElement(s,{direction:"row"},d.createElement(s,{_hover:{cursor:"pointer",backgroundColor:"blackAlpha.200"},alignItems:"center",backgroundColor:"whiteAlpha.900",borderColor:"secondary.500",borderRadius:"20",borderWidth:2,color:"secondary.500",direction:"row",paddingX:4,paddingY:0,spacing:1,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1)},d.createElement(u,{as:b,color:"secondary.500",height:6,width:6}),d.createElement(h,{color:"secondary.500",fontSize:12,fontWeight:"900"},"Menu 1")),d.createElement(s,{_hover:{cursor:"pointer",backgroundColor:"blackAlpha.200"},alignItems:"center",backgroundColor:"whiteAlpha.900",borderColor:"secondary.500",borderRadius:"9999",borderWidth:2,color:"secondary.500",direction:"row",paddingX:4,paddingY:1,spacing:1,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1)},d.createElement(u,{as:E,color:"secondary.500",height:8,width:8}),d.createElement(h,{color:"secondary.500",fontSize:12,fontWeight:"900"},"Menu 2")),d.createElement(s,{_hover:{cursor:"pointer",backgroundColor:"blackAlpha.200"},alignItems:"center",backgroundColor:"whiteAlpha.900",borderColor:"secondary.500",borderRadius:"9999",borderWidth:2,color:"secondary.500",direction:"row",paddingX:4,paddingY:2,spacing:1,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1)},d.createElement(u,{as:f,color:"secondary.500",height:8,width:8}),d.createElement(s,{spacing:0},d.createElement(h,{color:"secondary.500",fontSize:12,fontWeight:"900",lineHeight:1,spacing:0},"Menu"),d.createElement(h,{color:"secondary.500",fontSize:12,fontWeight:"900",lineHeight:1},"Line Break"))),d.createElement(g,{to:"novedades"},d.createElement(s,{_hover:{cursor:"pointer",backgroundColor:"blackAlpha.200"},alignItems:"center",backgroundColor:"whiteAlpha.900",borderColor:"secondary.500",borderRadius:"9999",borderWidth:2,color:"secondary.500",direction:"row",paddingX:4,paddingY:2,spacing:1},d.createElement(u,{as:y,color:"secondary.500",height:8,width:8}),d.createElement(h,{color:"secondary.500",fontSize:12,fontWeight:"900"},"Menu 4"))))),d.createElement(s,{alignItems:"center",backgroundColor:"whiteAlpha.900",borderColor:"blackAlpha.700",borderRadius:"9999",borderWidth:2,color:"blackAlpha.700",direction:"row",paddingX:6,spacing:3},d.createElement(z,{_placeholder:{color:"blackAlpha.700"},fontSize:18,padding:2,placeholder:"Buscar",size:"md",transition:"all 2s",variant:"unstyled",width:o,onBlur:()=>n("80px"),onFocus:()=>n("180px")}),d.createElement(u,{as:k,height:6,spacing:3,width:6}))))),d.createElement(p,{backgroundColor:"secondary.500",boxShadow:"sm",paddingY:4},d.createElement(m,{maxWidth:"container.xl"},d.createElement(h,{color:"white",fontSize:18,fontWeight:"900"},"PORTAL OBRAS"))),d.createElement(p,{backgroundColor:"primary.500",style:{position:"absolute",top:a},width:"100%",zIndex:"9999"},d.createElement(m,{alignSelf:"center",maxWidth:"container.xl",paddingX:0},r&&d.createElement(h,{color:"blackAlpha.700"},"MENU 1"),l&&d.createElement(h,{color:"blackAlpha.700"},"MENU 2"),x&&d.createElement(h,{color:"blackAlpha.700"},"MENU 3"))))};const oe=()=>d.createElement(s,{backgroundImage:"./assets/header.jpg",backgroundPosition:"50% 30%",backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",height:"100vh",justifyContent:"center"},d.createElement(m,{color:"white",maxWidth:"container.md"},d.createElement(s,{paddingBottom:6},d.createElement(h,{fontSize:"3xl",fontWeight:"900",textAlign:"center"},"Conocé las obras en desarrollo")),d.createElement(s,{direction:"row",divider:d.createElement(x,{backgroundColor:"white",width:.5}),justifyContent:"center"},d.createElement(s,{justifyContent:"center",paddingLeft:4,paddingRight:2,width:60},d.createElement(h,{fontSize:"xl",fontWeight:"600",lineHeight:1.2,textAlign:"right"},"Te brindamos información para que puedas conocer el avance de las obras en marcha")),d.createElement(s,{alignContent:"center",direction:"row",justifyContent:"center",spacing:0},d.createElement(s,{alignItems:"center",direction:"row",paddingLeft:6,spacing:0},d.createElement(u,{as:R,color:"blue.300",height:9,width:9}),d.createElement(s,{alignItems:"center",spacing:0},d.createElement(h,{fontSize:"4xl",fontWeight:"900"},"55"),d.createElement(h,{fontSize:"lg",fontWeight:"900"},"Finalizadas"))),d.createElement(s,{alignItems:"center",direction:"row",paddingLeft:8},d.createElement(u,{as:R,color:"blue.300",height:9,width:9}),d.createElement(s,{alignItems:"center",spacing:0},d.createElement(h,{fontSize:"4xl",fontWeight:"900"},"208"),d.createElement(h,{fontSize:"lg",fontWeight:"900"},"En ejecución")))))));var ne=[{id_part:"1",name:"Partido A",localidades:[{id_loc:"1",name:"Localidad A",barrios:[{id_bar:"1",name:"Barrio 1"},{id_bar:"2",name:"Barrio 2"},{id_bar:"3",name:"Barrio 3"}]},{id_loc:"2",name:"Localidad B",barrios:[{id_bar:"4",name:"Barrio 4"},{id_bar:"5",name:"Barrio 5"},{id_bar:"6",name:"Barrio 6"}]},{id_loc:"3",name:"Localidad C",barrios:[{id_bar:"7",name:"Barrio 7"},{id_bar:"8",name:"Barrio 8"},{id_bar:"9",name:"Barrio 9"}]}]},{id_part:"2",name:"Límite Partido A - Partido B",localidades:[{id_loc:"4",name:"Otra Localidad",barrios:[{id_bar:"10",name:"Otro Barrio"}]}]},{id_part:"3",name:"Límite Partido A - Partido C",localidades:[{id_loc:"5",name:"Otra Localidad",barrios:[{id_bar:"11",name:"Otro Barrio"}]}]}];const re=()=>{const{dispatch:e}=v.exports.useContext(ee),{state:a}=d.useContext(ee),{ubicacionCercana:t}=l({},a),[o,n]=v.exports.useState(ne.map((e=>e.localidades.map((e=>d.createElement("option",{key:e.id_loc,value:e.id_loc},e.name)))))),[r,i]=v.exports.useState(ne.map((e=>e.localidades.map((e=>e.barrios.map((e=>d.createElement("option",{key:e.id_bar,value:e.id_bar},e.name)))))))),[c,p]=v.exports.useState("0"),[m,g]=v.exports.useState("0"),[u,b]=v.exports.useState("0");return d.createElement(_,{alignContent:"center",alignItems:"center",color:"whiteAlpha.900",direction:"row",id:"filterBar",justifyContent:"space-around"},d.createElement(s,{alignItems:"center",direction:"row"},d.createElement(O,{marginBottom:0},"Partido"),d.createElement(A,{backgroundColor:"initial",value:c,onChange:a=>{if(p(a.target.value),e({type:"FILTRAR_PARTIDO",payload:a.target.value}),0==a.target.value)return n(ne.map((e=>e.localidades.map((e=>d.createElement("option",{key:e.id_loc,value:e.id_loc},e.name)))))),g("0"),void b("0");n(ne.filter((e=>e.id_part==a.target.value)).map((e=>e.localidades.map((e=>d.createElement("option",{key:e.id_loc,value:e.id_loc},e.name))))))}},d.createElement("option",{key:"0",value:"0"},"Todas las obras"),ne.map((e=>d.createElement("option",{key:e.id_part,value:e.id_part},e.name))))),d.createElement(s,{alignItems:"center",direction:"row"},d.createElement(O,{marginBottom:0},"Localidad"),d.createElement(A,{_placeholder:{color:"white"},disabled:"0"==c,value:m,onChange:a=>{if(g(a.target.value),e({type:"FILTRAR_LOCALIDAD",payload:a.target.value}),0==a.target.value)return i(ne.map((e=>e.localidades.map((e=>e.barrios.map((e=>d.createElement("option",{key:e.id_bar,value:e.id_bar},e.name)))))))),void b("0");i(ne.filter((e=>e.id_part==c)).map((e=>e.localidades.filter((e=>e.id_loc==a.target.value)).map((e=>e.barrios.map((e=>d.createElement("option",{key:e.id_bar,value:e.id_bar},e.name))))))))}},d.createElement("option",{key:"0",value:"0"},"Todas las obras"),o)),d.createElement(s,{alignItems:"center",direction:"row"},d.createElement(O,{marginBottom:0},"Barrio"),d.createElement(A,{disabled:"0"==m,value:u,onChange:a=>{b(a.target.value),e({type:"FILTRAR_BARRIO",payload:a.target.value})}},d.createElement("option",{key:"0",value:"0"},"Todas las obras"),r)),d.createElement(s,{alignItems:"center",direction:"row"},d.createElement(w,{_hover:{color:"secondary.500",backgroundColor:"whiteAlpha.900"},backgroundColor:t?"whiteAlpha.900":"initial",color:t?"black":"white",variant:"outline",onClick:a=>{alert("Próximamente"),e({type:"FILTRAR_CERCANIA",payload:!t})}},"Mi ubicación")))},ie=()=>d.createElement(p,{backgroundColor:"secondary.500",boxShadow:"sm",paddingY:4},d.createElement(m,{maxWidth:"container.xl"},d.createElement(h,{color:"white",fontSize:16,fontWeight:"700",marginBottom:4},"Encontrá las obras filtrando las opciones"),d.createElement(re,null)));var le=[{tipoRepresentacion:2,tipoObra:1,id_marc:1,polylineRunRep:[[-34.441,-58.645],[-34.45,-58.668]],obra:"Hegoak ebaki banizkio",lat:-34.441,long:-58.645,partido:1,localidad:1,barrio:1,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/1",popupText:"Bainan, honela Ez zen gehiago txoria izango Bainan, honela Ez zen gehiago txoria izango",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:2,tipoObra:1,id_marc:2,polylineRunRep:[[-34.427,-58.5699],[-34.434,-58.575],[-34.433,-58.59]],obra:"Nerea izango zen,",lat:-34.4356,long:-58.5799,partido:1,localidad:1,barrio:1,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/2",popupText:"Eta nik... Txoria nuen maite. Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:3,polylineRunRep:1,obra:"Ez zuen aldegingo.",lat:-34.45,long:-58.668,partido:1,localidad:1,barrio:2,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/3",popupText:"Ez zuen aldegingo. Bainan, honela Ez zen gehiago txoria izango Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:4,polylineRunRep:1,obra:"Hegoak ebaki banizkio",lat:-34.448,long:-58.689,partido:1,localidad:1,barrio:2,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/4",popupText:"Bainan, honela Ez zen gehiago txoria izango Bainan, honela Ez zen gehiago txoria izango",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:5,polylineRunRep:1,obra:"Nerea izango zen,",lat:-34.4356,long:-58.5799,partido:1,localidad:1,barrio:3,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/5",popupText:"Eta nik... Txoria nuen maite. Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:2,tipoObra:1,id_marc:6,polylineRunRep:[[-34.47,-58.682],[-34.44,-58.668]],obra:"Ez zuen aldegingo.",lat:-34.46,long:-58.682,partido:1,localidad:2,barrio:4,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/6",popupText:"Ez zuen aldegingo. Bainan, honela Ez zen gehiago txoria izango Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:7,polylineRunRep:1,obra:"Hegoak ebaki banizkio",lat:-34.445,long:-58.68,partido:1,localidad:2,barrio:6,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/7",popupText:"Bainan, honela Ez zen gehiago txoria izango Bainan, honela Ez zen gehiago txoria izango",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:2,tipoObra:1,id_marc:8,polylineRunRep:[[-34.43,-58.63],[-34.4329833,-58.6177182]],obra:"Nerea izango zen,",lat:-34.4748,long:-58.63879,partido:1,localidad:3,barrio:7,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/8",popupText:"Eta nik... Txoria nuen maite. Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:9,polylineRunRep:1,obra:"Ez zuen aldegingo.",lat:-34.435,long:-58.638,partido:1,localidad:3,barrio:8,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/9",popupText:"Ez zuen aldegingo. Bainan, honela Ez zen gehiago txoria izango Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:10,polylineRunRep:1,obra:"Hegoak ebaki banizkio",lat:-34.4329833,long:-58.6177182,partido:2,localidad:4,barrio:10,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/10",popupText:"Bainan, honela Ez zen gehiago txoria izango Bainan, honela Ez zen gehiago txoria izango",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:11,polylineRunRep:1,obra:"Nerea izango zen,",lat:-34.427,long:-58.5699,partido:2,localidad:4,barrio:10,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/11",popupText:"Eta nik... Txoria nuen maite. Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:12,polylineRunRep:1,obra:"Ez zuen aldegingo.",lat:-34.4177,long:-58.6187,partido:2,localidad:4,barrio:10,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/12",popupText:"Ez zuen aldegingo. Bainan, honela Ez zen gehiago txoria izango Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:13,polylineRunRep:1,obra:"Hegoak ebaki banizkio",lat:-34.4277,long:-58.62187,partido:3,localidad:5,barrio:11,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/13",popupText:"Bainan, honela Ez zen gehiago txoria izango Bainan, honela Ez zen gehiago txoria izango",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:14,polylineRunRep:1,obra:"Nerea izango zen,",lat:-34.4485,long:-58.698,partido:3,localidad:5,barrio:11,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/14",popupText:"Eta nik... Txoria nuen maite. Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4},{tipoRepresentacion:1,tipoObra:1,id_marc:15,polylineRunRep:1,obra:"Ez zuen aldegingo.",lat:-34.4251,long:-58.681,partido:3,localidad:5,barrio:11,fotoAntes:"Obra1-1.jpg",fotoDespues:"Obra1-2.jpg",link:"obras/15",popupText:"Ez zuen aldegingo. Bainan, honela Ez zen gehiago txoria izango Eta nik... Txoria nuen maite.",fechaInicio:"2021-07-16",fechaFinProyectada:"2021-07-16",monto:1e5,avance:35,contratista:4}];let ce=C.icon({iconUrl:F,shadowUrl:I});C.Marker.prototype.options.icon=ce;const de=e=>{const{state:a}=d.useContext(ee),{partidoFiltered:t,localidadFiltered:o,barrioFiltered:n,ubicacionCercana:r}=l({},a),i=le,c={color:"lime"},p=()=>{const[e,a]=v.exports.useState(null),t=W();let o=-34.441796,n=-58.6453;return v.exports.useEffect((()=>{t.locate().on("locationfound",(function(e){o=e.latlng.lat,n=e.latlng.lng,t.flyTo(e.latlng,t.getZoom()),a(!0)}))}),[t]),null===e?null:d.createElement(T,{position:[o,n]},d.createElement(j,null,"Usted está aquí"))};return d.createElement(d.Fragment,null,d.createElement(S,{center:[-34.441796,-58.6453],scrollWheelZoom:!1,style:{height:"500px"},zoom:12.4},d.createElement(B,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i.filter((e=>0==t?null!=e.partido:0==o?e.partido==t:0==n?e.localidad==o:e.barrio==n)).map((e=>1==e.tipoRepresentacion?d.createElement(T,{key:e.id_marc,position:[e.lat,e.long]},d.createElement(j,null,P(e.popupText),d.createElement("br",null),d.createElement("a",{href:e.link},"Ver"))):2==e.tipoRepresentacion?d.createElement(L,{key:e.id_marc,pathOptions:c,positions:e.polylineRunRep},d.createElement(j,null,P(e.popupText),d.createElement("br",null),d.createElement("a",{href:e.link},"Ver"))):void 0)),r&&d.createElement(p,null)),d.createElement(s,{height:48}))};C.icon({iconUrl:F,shadowUrl:I});const se=()=>{const e=le,{id:a}=D(),t=e.filter((e=>e.id_marc==Number(a)));let o;return t[0].fotoAntes,ne.map((e=>e.localidades.map(((e,a)=>Number(e.id_loc)==t[0].localidad?o=e.name:null)))),d.createElement(p,{paddingY:4},d.createElement(m,{maxWidth:"container.xl"},d.createElement(s,null,d.createElement(h,{color:"black",fontSize:"6xl",fontWeight:"900",textAlign:"center"},"Obra: ",t[0].obra),d.createElement(s,{direction:"row"},d.createElement(s,{width:96},d.createElement(s,{height:72},d.createElement(h,{color:"black",fontSize:18,fontWeight:"900"},"Ubicación"),d.createElement(S,{center:[-34.441796,-58.6453],scrollWheelZoom:!1,style:{height:"500px"},zoom:11},d.createElement(B,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((e=>1==e.tipoRepresentacion?d.createElement(T,{key:e.id_marc,position:[e.lat,e.long]},d.createElement(j,null,t[0].obra)):2==e.tipoRepresentacion?d.createElement(L,{key:e.id_marc,positions:e.polylineRunRep},d.createElement(j,null,t[0].obra)):void 0)))),d.createElement(s,null,d.createElement(h,{color:"black",fontSize:18,fontWeight:"900"},"Comparación"),d.createElement(M,{itemOne:d.createElement(N,{alt:"Image one",srcSet:"https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80",style:{filter:"grayscale(1)"}}),itemTwo:d.createElement(N,{alt:"Image two",src:"https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80",srcSet:"https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1500&q=80"})}))),d.createElement(s,{spacing:4,width:"100%"},d.createElement(h,{color:"black",fontSize:18,fontWeight:"900",textAlign:"center"},"Localidad: ",o),d.createElement(s,{padding:4},d.createElement(h,{color:"black",fontSize:18,fontWeight:"900"},"Descripción de la obra:"),d.createElement(h,{color:"black",fontSize:16},"Tipo de obra: ",t[0].tipoObra),d.createElement(h,{color:"black",fontSize:16},"Fecha de inicio: ",new Date(t[0].fechaInicio).toLocaleDateString()),d.createElement(h,{color:"black",fontSize:16},"Finalización proyectada:"," ",new Date(t[0].fechaFinProyectada).toLocaleDateString()),d.createElement(h,{color:"black",fontSize:16},"Monto:"," ",t[0].monto.toLocaleString("es-ar",{style:"currency",currency:"ARS"})),d.createElement(h,{color:"black",fontSize:16},"Avance: ",t[0].avance),d.createElement(h,{color:"black",fontSize:16},"Contratista: ",t[0].contratista)))))),d.createElement(m,{maxWidth:"container.xl"}),d.createElement(s,{height:96}))},pe=()=>d.createElement(H,null,d.createElement(U,{exact:!0,component:de,path:"/portal-obras/"}),d.createElement(U,{component:se,path:"/portal-obras/obras/:id"}),d.createElement(Y,{to:"/"})),me=()=>{const{pathname:e}=q();let a="100vh",t=!0;return"/"!=e&&(a="60vh",t=!1),d.createElement(ae,null,d.createElement(s,{spacing:0},d.createElement(s,{height:a,spacing:0},d.createElement(te,null),d.createElement(oe,null)),t&&d.createElement(ie,null),d.createElement(pe,null)))};var ge=X({styles:{global:{body:{color:"blackAlpha.900"}}},colors:{primary:{50:"#FFF9BD",100:"#FFF693",200:"#FFF693",300:"#FFF583",400:"#FFF372",500:"#fff159",600:"#E6D950",700:"#CCC147",800:"#BFB543",900:"#BFB543"},secondary:c(l({},$.colors.messenger),{100:$.colors.messenger[50],50:"rgba(65,137,230,.15)"}),success:$.colors.whatsapp,error:$.colors.red,warning:$.colors.orange},sizes:{container:{xl:"1200px"}},fonts:{body:"Proxima Nova",heading:"Proxima Nova"},components:{Link:{variants:{unstyled:({colorScheme:e="blackAlpha"})=>({color:`${e}.700`,_hover:{color:`${e}.800`,textDecoration:"none"}}),color:({colorScheme:e="secondary"})=>({color:`${e}.500`,_hover:{color:`${e}.600`,textDecoration:"none"}})},defaultProps:{variant:"color"}},Button:{sizes:{lg:{fontSize:"md"}},variants:{ghost:({colorScheme:e="secondary"})=>({backgroundColor:`${e}.50`,":hover, :focus":{backgroundColor:`${e}.100`}})}},Input:{parts:["field"],defaultProps:{focusBorderColor:"secondary.500"},variants:{filled:{field:{borderRadius:"sm",color:"blackAlpha.800",backgroundColor:"white",":hover, :focus":{backgroundColor:"white"}}},outline:{field:{borderColor:"gray.300"}}}}}});Z.render(d.createElement(d.Fragment,null,d.createElement(V,{initialColorMode:ge.config.initialColorMode}),d.createElement(G,null,d.createElement(J,{theme:ge},d.createElement(me,null)))),document.getElementById("root"));
