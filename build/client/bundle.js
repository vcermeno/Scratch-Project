!function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={0:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([124,1]),r()}({124:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),c=r(171),i=r(172),l=r(54),u=r(159),s=r(178),d=r(160),p=r(161),m=r(125),f=r(158);function v(e){var t=e.topic,r=e.getFunc;return a.a.createElement(m.a,{button:!0,onClick:function(e){return r(t)}},a.a.createElement(f.a,{primary:t}))}var b=r(45),h=r.n(b),g=function(e){return function(t){h.a.get("http://localhost:3000/resource/".concat(e.toLowerCase())).then((function(e){t({type:"GET RESOURCE",payload:e.data})}))}},E=r(18),y=Object(u.a)((function(e){return{drawer:{width:200,flexShrink:0},drawerPaper:{width:200},drawerContainer:{overflow:"auto"}}}));var O=Object(E.b)((function(e){return{topics:e.topics,currentTopic:e.currentTopic}}),(function(e){return{getResources:function(t){var r;e(g(t)),e((r=t,function(e){e({type:"UPDATE TOPIC",payload:r})}))}}}))((function(e){var t=y();return Object(n.useEffect)((function(){e.getResources(e.currentTopic)}),[]),a.a.createElement(s.a,{classes:{paper:t.drawerPaper},className:t.drawer,variant:"permanent"},a.a.createElement(d.a,null),a.a.createElement("div",{className:t.drawerContainer},a.a.createElement(p.a,null,e.topics.map((function(t){return a.a.createElement(v,{topic:t,key:t,getFunc:e.getResources})})))))})),w=r(179),j=r(164),T=r(181),k=r(176),S=r(165),C=r(166),P=r(177),R=r(167),D=r(81),x=r.n(D);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var U=Object(u.a)((function(e){return{floatedAdd:{position:"fixed",bottom:50,right:60},floatedForm:{position:"absolute"},extendedIcon:{marginRight:e.spacing(1)},paper:{position:"absolute",padding:e.spacing(5),boxShadow:e.shadows[5],outline:0,width:500,backgroundColor:e.palette.background.paper,top:"40%",left:"50%",transform:"translate(-50%, -50%)","& > *":{margin:e.spacing(1,0)}},formControl:{minWidth:175}}})),I=Object(E.b)((function(e){return{techs:e.topics}}),(function(e){return{addResource:function(t){var r;e((r=t,function(e){h.a.post("http://localhost:3000/resource/".concat(r.name),r).then((function(t){e({type:"ADD RESOURCE",payload:t.data})}))}))}}}))((function(e){var t=U(),r=e.techs,o=N(Object(n.useState)(!1),2),c=o[0],i=o[1],u=N(Object(n.useState)(""),2),s=u[0],d=u[1],p=N(Object(n.useState)(""),2),m=p[0],f=p[1],v=N(Object(n.useState)(""),2),b=v[0],h=v[1],g=N(Object(n.useState)(""),2),E=g[0],y=g[1],O=function(){i(!c)},D=function(e){var t=e.target.value;switch(e.target.name){case"name":d(t);break;case"desc":f(t);break;case"url":h(t);break;case"tech":y(t)}},A=a.a.createElement("div",{className:t.paper},a.a.createElement(l.a,{variant:"h5"},"Add a Resource"),a.a.createElement(w.a,{required:!0,fullWidth:!0,name:"name",label:"Title",variant:"outlined",value:s,onChange:D}),a.a.createElement(w.a,{required:!0,name:"desc",label:"Description",multiline:!0,fullWidth:!0,rows:4,value:m,variant:"outlined",onChange:D}),a.a.createElement(w.a,{required:!0,name:"url",label:"URL",fullWidth:!0,value:b,variant:"outlined",onChange:D}),a.a.createElement(j.a,{required:!0,variant:"outlined",className:t.formControl},a.a.createElement(T.a,null,"Tech"),a.a.createElement(k.a,{name:"tech",value:E,onChange:D,label:"Tech"},r.map((function(e,t){return a.a.createElement(S.a,{key:t,value:e.toLowerCase()},e)})))),a.a.createElement("div",null,a.a.createElement(C.a,{variant:"contained",color:"primary",size:"large",onClick:function(t){if(t.preventDefault(),""===s||""===m||""===b||""===E?(console.log("All form fields are required"),0):(console.log("Form is validated!"),1)){var r={name:s,description:m,url:b,tech:E,liked:!1,likes:0};console.log("Sending the following resource to db:"),console.log(r),e.addResource(r),setTimeout((function(){console.log("Resetting form and closing modal"),d(""),f(""),h(""),y(""),i(!1)}),250)}}},"SUBMIT")));return a.a.createElement("div",null,a.a.createElement("div",{className:t.floatedAdd,onClick:O},a.a.createElement(R.a,{color:"primary","aria-label":"add",variant:"extended"},a.a.createElement(x.a,{className:t.extendedIcon}),"ADD RESOURCE")),a.a.createElement("div",{className:t.floatedForm},a.a.createElement(P.a,{open:c,onClose:O},A)))})),W=r(175),B=Object(u.a)({itemHeader:{marginTop:15,marginBottom:15}}),M=function(e){var t=B(),r=e.currentTopic;return a.a.createElement("div",null,a.a.createElement(W.a,{className:t.itemHeader},a.a.createElement(l.a,{variant:"h4",component:"h4",align:"center"},r," Resources")))},_=r(168),z=r(169),V=r(170),q=r(82),F=r.n(q),J=r(83),H=r.n(J),L=Object(u.a)({itemWrap:{background:"#fdfdfd",marginBottom:15,minWidth:350},itemActions:{justifyContent:"space-between",display:"flex"},itemDiv:{marginTop:8,marginBottom:8}}),G=function(e){var t=L();return a.a.createElement(_.a,{className:t.itemWrap},a.a.createElement(z.a,null,a.a.createElement(W.a,null,a.a.createElement(l.a,{variant:"h6"},e.name)),a.a.createElement(l.a,{variant:"body1"},e.description),a.a.createElement(V.a,{className:t.itemDiv}),a.a.createElement("div",{className:t.itemActions},a.a.createElement(C.a,{size:"small",color:"primary"},a.a.createElement("a",{href:e.url,target:"_blank"},"Visit Resource")),a.a.createElement(C.a,{size:"small",onClick:function(){e.liked?e.downvote(e.id,e.tech):e.upvote(e.id,e.tech)}},e.likes,e.liked?a.a.createElement(F.a,null):a.a.createElement(H.a,null)))))},$=function(e){var t=e.resources.map((function(t,r){return a.a.createElement(G,{name:t.name,url:t.url,description:t.description,likes:t.likes,id:t._id,key:r,tech:t.tech,upvote:e.upvote,downvote:e.downvote,liked:t.liked})}));return a.a.createElement("div",null,t)},K=Object(u.a)((function(e){return{shiftDown:{marginTop:e.spacing(10)}}})),Q=Object(E.b)((function(e){return{resources:e.resources,currentTopic:e.currentTopic}}),(function(e){return{getResource:function(t){e(g(t))},upvote:function(t,r){var n,a;e((n=t,a=r,function(e){h.a.put("http://localhost:3000/resource/upvote",{id:n,tech:a}).then((function(t){e({type:"UPVOTE",payload:t.data})}))}))},downvote:function(t,r){var n,a;e((n=t,a=r,function(e){h.a.put("http://localhost:3000/resource/downvote",{id:n,tech:a}).then((function(t){e({type:"DOWNVOTE",payload:t.data})}))}))}}}))((function(e){var t=K();return a.a.createElement("div",{className:t.shiftDown},a.a.createElement(M,{currentTopic:e.currentTopic}),a.a.createElement($,{resources:e.resources,upvote:e.upvote,downvote:e.downvote}),a.a.createElement(I,null))})),X=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,padding:e.spacing(2)},header:{display:"inline"},subHeader:{display:"inline",marginLeft:e.spacing(2),fontSize:15}}})),Y=function(e){var t=X();return a.a.createElement(c.a,{maxWidth:"lg",className:t.root},a.a.createElement(i.a,{position:"fixed",className:t.appBar},a.a.createElement(l.a,{variant:"h4",align:"left",className:t.header},"</DevShark>",a.a.createElement(l.a,{variant:"inherit",className:t.subHeader},"Developer Resource Aggregator"))),a.a.createElement("div",{className:t.offset}),a.a.createElement(O,null),a.a.createElement(Q,null))},Z=function(){return a.a.createElement(Y,null)},ee=r(174),te=r(35),re=r(84),ne=r(85);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){ce(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie={resources:[{name:"",id:0,likes:0,url:"",description:"",liked:!1}],currentTopic:"Javascript",topics:["Javascript","React","Redux","Angular","Vue","MongoDB","Jest","Enzyme","Puppeteer","Typescript","Node","Express"]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET RESOURCE":return oe(oe({},e),{},{resources:t.payload});case"UPDATE TOPIC":return oe(oe({},e),{},{currentTopic:t.payload});case"ADD RESOURCE":case"UPVOTE":case"DOWNVOTE":return oe(oe({},e),{},{resources:t.payload});default:return e}},ue=[ne.a],se=Object(te.createStore)(le,Object(re.composeWithDevTools)(te.applyMiddleware.apply(void 0,ue))),de=r(87),pe=r(173),me=r(86),fe=r.n(me).a,ve=Object(de.a)({palette:{primary:fe}});Object(o.render)(a.a.createElement(pe.a,{theme:ve},a.a.createElement(E.a,{store:se},a.a.createElement(ee.a,null),a.a.createElement(Z,null))),document.getElementById("root"))}});