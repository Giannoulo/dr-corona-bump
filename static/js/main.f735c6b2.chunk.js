(this["webpackJsonpdr-corona-bump"]=this["webpackJsonpdr-corona-bump"]||[]).push([[0],{115:function(i,a,t){"use strict";t.r(a);var e=t(0),o=t.n(e),s=t(23),x=t.n(s),r=(t(59),t(4)),n=t(1),k=function(){return Object(n.jsxs)("div",{className:"container",id:"header-row",children:[Object(n.jsx)("div",{id:"header-col",children:"Dr Corona"}),Object(n.jsx)("div",{id:"header-col-small",children:"The Game"})]})},c=t(3),m=t(15),p=Object(m.b)({name:"counter",initialState:{value:0},reducers:{incrementCount:function(i){i.value+=1},resetCount:function(i){i.value=0}}}),y=p.actions,d=y.incrementCount,l=y.resetCount,h=function(i){return i.counter.value},u=p.reducer,f=Object(m.b)({name:"lives",initialState:{lives:3},reducers:{incrementLives:function(i){i.lives+=1},decrementLives:function(i){i.lives-=1},resetLives:function(i){i.lives=3}}}),v=f.actions,b=(v.incrementLives,v.decrementLives),G=v.resetLives,j=function(i){return i.lives.lives},D=f.reducer,A=function(){var i,a=Object(c.c)(h),t=Object(c.c)(j);return Object(n.jsx)("div",{className:"container",id:"controls-div",children:Object(n.jsx)("span",{children:"Score: ".concat((i=a,Math.pow(i,2))," Time: ").concat(20,"s Lives: ").concat(t)})})},E=t(24),S=t.n(E),B=t(53),V=function(i){var a=Object(e.useState)(!1),t=Object(r.a)(a,2),o=t[0],s=t[1],x=Object(c.b)(),k=Object(c.c)(j),m={loop:!1,autoplay:!1,animationData:B,rendererSettings:{preserveAspectRatio:"xMidYMid slice",id:"vomit-icon"}};return Object(n.jsx)("div",{onClick:function(){o||(k>0?x(b()):(x(l()),x(G()))),s(!0)},children:Object(n.jsx)(S.a,{options:m,height:70,width:70,isPaused:!1,isStopped:!o,isClickToPauseDisabled:!0,eventListeners:[{eventName:"complete",callback:function(){return s(!1)}}]})})},O=t(54),g=function(i){var a=Object(e.useState)(!1),t=Object(r.a)(a,2),o=t[0],s=t[1],x=Object(c.b)(),k={loop:!1,autoplay:!1,animationData:O,rendererSettings:{preserveAspectRatio:"xMidYMid slice",id:"tongue-icon"}};return Object(n.jsx)("div",{onClick:function(){o||x(d()),s(!0),setTimeout((function(){i.clickCallback()}),300)},children:Object(n.jsx)(S.a,{className:"vomit-lottie",options:k,speed:4,height:70,width:70,isPaused:!1,isStopped:!o,isClickToPauseDisabled:!0,eventListeners:[{eventName:"complete",callback:function(){return s(!1)}}]})})},w=function(i){var a,t=Array.from({length:i},(function(i){return""}));return t[(a=i,Math.floor(Math.random()*a))]="target",t},T=function(){var i=Object(e.useState)(0),a=Object(r.a)(i,2),t=a[0],o=a[1],s=Object(e.useState)(""),x=Object(r.a)(s,2),k=x[0],c=x[1];return Object(e.useEffect)((function(){var i;c((i=function(){o(t+1)},w(20).map((function(a,t){return"target"===a?Object(n.jsx)(g,{classNameProp:a,clickCallback:i},t):Object(n.jsx)(V,{classNameProp:a},t)}))))}),[t]),Object(n.jsx)("div",{className:"container",id:"game-board-div",children:k})},P=function(){var i=Object(e.useState)("unclicked"),a=Object(r.a)(i,2),t=a[0],o=a[1];return Object(e.useEffect)((function(){"clicked"===t&&setTimeout((function(){o("unclicked")}),90)}),[t]),Object(n.jsxs)("div",{className:"App ".concat(t),onClick:function(){o("clicked")},children:[Object(n.jsx)(k,{}),Object(n.jsx)(A,{}),Object(n.jsx)(T,{})]})},C=Object(m.a)({reducer:{counter:u,lives:D}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));x.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(c.a,{store:C,children:Object(n.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(i){i.unregister()}))},53:function(i){i.exports=JSON.parse('{"v":"5.6.1","fr":24,"ip":0,"op":28,"w":50,"h":50,"nm":"vomited","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Controller","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":0.895},"o":{"x":0.333,"y":0},"t":2,"s":[25,25,0],"to":[0,0.161,0],"ti":[0,-0.388,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0.042},"t":7,"s":[25,17,0],"to":[0,1.217,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[25,29,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":19,"s":[25,29,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":24,"s":[25,21,0],"to":[0,0,0],"ti":[0,0,0]},{"t":26,"s":[25,25,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"opened eyes 2","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":22,"s":[{"i":[[5.257,0],[0.013,-0.937],[-5.415,-0.045],[0.005,1.016]],"o":[[-5.397,0],[-0.014,1],[5.592,0.047],[-0.023,-0.977]],"v":[[-8.154,-1],[-13.947,0],[-8.099,0.969],[-2.036,0]],"c":true}]},{"t":25,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[-8,-3],[-11,0],[-8,3],[-5,0]],"c":true}]}],"ix":2},"nm":"left","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":22,"s":[{"i":[[5.63,0.016],[0.007,-0.844],[-4.926,-0.016],[-0.032,0.984]],"o":[[-5.759,-0.016],[-0.009,1.172],[4.685,0.016],[-0.032,-0.891]],"v":[[8,-0.969],[2.083,0],[8,0.969],[13.922,0]],"c":true}]},{"t":25,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[8,-3],[5,0],[8,3],[11,0]],"c":true}]}],"ix":2},"nm":"right","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25,21],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":28,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"opened eyes","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[-8,-3],[-11,0],[-8,3],[-5,0]],"c":true}]},{"t":8,"s":[{"i":[[5.257,0],[0.013,-0.937],[-5.415,-0.045],[0.005,1.016]],"o":[[-5.397,0],[-0.014,1],[5.592,0.047],[-0.023,-0.977]],"v":[[-8.154,-1],[-13.947,0],[-8.099,0.969],[-2.036,0]],"c":true}]}],"ix":2},"nm":"left","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[1.657,0],[0,-1.657],[-1.657,0],[0,1.657]],"o":[[-1.657,0],[0,1.657],[1.657,0],[0,-1.657]],"v":[[8,-3],[5,0],[8,3],[11,0]],"c":true}]},{"t":8,"s":[{"i":[[5.63,0.016],[0.007,-0.844],[-4.926,-0.016],[-0.032,0.984]],"o":[[-5.759,-0.016],[-0.009,1.172],[4.685,0.016],[-0.032,-0.891]],"v":[[8,-0.969],[2.083,0],[8,0.969],[13.922,0]],"c":true}]}],"ix":2},"nm":"right","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25,21],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":8,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"closed left eye","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.047,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-12.938,-2.97],[-7.734,-2.968],[-3,-2.967]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[0,0],[-3.688,0.001],[0,0]],"o":[[0,0],[3.406,-0.001],[0,0]],"v":[[-13.625,-3.565],[-7.938,-0.968],[-2.344,-3.561]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[{"i":[[0,0],[-3.688,0.001],[0,0]],"o":[[0,0],[3.406,-0.001],[0,0]],"v":[[-13.625,-3.565],[-7.938,-0.968],[-2.344,-3.561]],"c":false}]},{"t":22,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-12.938,-2.97],[-7.734,-2.968],[-3,-2.967]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":8,"op":22,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"closed right eye","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[15.938,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":8,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-12.938,-2.97],[-7.734,-2.968],[-3,-2.967]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[0,0],[-3.688,0.001],[0,0]],"o":[[0,0],[3.406,-0.001],[0,0]],"v":[[-13.625,-3.565],[-7.938,-0.968],[-2.344,-3.561]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":20,"s":[{"i":[[0,0],[-3.688,0.001],[0,0]],"o":[[0,0],[3.406,-0.001],[0,0]],"v":[[-13.625,-3.565],[-7.938,-0.968],[-2.344,-3.561]],"c":false}]},{"t":22,"s":[{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-12.938,-2.97],[-7.734,-2.968],[-3,-2.967]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-1],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":8,"op":22,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"mouth top part overlay","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[0.216,0.466],[2.6,0],[0.604,-1.441]],"o":[[-0.603,-1.394],[-2.601,0],[-0.267,0.633]],"v":[[4.52,0.001],[0.016,-3.064],[-4.49,0.001]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[0.437,0.987],[5.571,0],[1.301,-3.012]],"o":[[-1.292,-2.916],[-5.573,0],[-0.572,1.324]],"v":[[9.684,0.003],[0.033,-6.411],[-9.62,0.003]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[{"i":[[0.437,0.987],[5.571,0],[1.301,-3.012]],"o":[[-1.292,-2.916],[-5.573,0],[-0.572,1.324]],"v":[[9.684,0.003],[0.033,-6.411],[-9.62,0.003]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[0.437,0.987],[5.571,0],[1.301,-3.012]],"o":[[-1.292,-2.916],[-5.573,0],[-0.572,1.324]],"v":[[9.684,0.003],[0.033,-6.411],[-9.62,0.003]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[0.437,0.987],[5.571,0],[1.301,-3.012]],"o":[[-1.292,-2.916],[-5.573,0],[-0.572,1.324]],"v":[[9.684,0.003],[0.033,-6.411],[-9.62,0.003]],"c":true}]},{"t":23,"s":[{"i":[[0.216,0.466],[2.6,0],[0.604,-1.441]],"o":[[-0.603,-1.394],[-2.601,0],[-0.267,0.633]],"v":[[4.52,0.001],[0.016,-3.064],[-4.49,0.001]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[24.996,36.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":3,"s":[120,120]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":5,"s":[80,80]},{"t":10,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":19,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"vomit mask","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.252,18.661],[16.713,20.201],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-13.938,23]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.252,18.661],[16.713,20.201],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-13.938,23]],"c":true}]},{"t":23,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[24.996,36.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":3,"s":[120,120]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":5,"s":[80,80]},{"t":10,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"vomit","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.663,"y":0.653},"o":{"x":0.322,"y":0.305},"t":10,"s":[0,-18,0],"to":[0,3,0],"ti":[0,-8.833,0]},{"i":{"x":0.835,"y":1},"o":{"x":0.425,"y":0.501},"t":13.716,"s":[0,0,0],"to":[0,8.833,0],"ti":[0,-5.833,0]},{"t":22,"s":[0,35,0]}],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[{"i":[[-8,0],[0,-3.063],[0.023,-3.335],[1.03,-0.038],[-0.039,-3.008],[2.86,0],[-2.137,5.188],[1.998,-0.087],[0.688,3.375]],"o":[[7,0],[0,2.975],[-0.227,1.727],[-3.375,0.125],[0.027,1.933],[-5.5,0],[1.176,-2.813],[-5.75,0.25],[-0.399,-1.96]],"v":[[0,-14.5],[6.313,-7.875],[10.102,0.085],[7.25,2.625],[5,8.993],[1.773,14.625],[-0.738,5.75],[-2.938,-0.688],[-6.563,-9.813]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":14,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[0,-1.031],[-0.039,-3.008],[2.86,0],[4.199,-1.602],[0,2],[0,3]],"o":[[7,0],[0,2.975],[-0.895,0.321],[0,2],[0.027,1.933],[-5.5,0],[-3.449,1.055],[0,-5.478],[0,-2]],"v":[[0,-14.5],[9,-7.5],[5.102,-0.602],[4,1.5],[7,11.18],[2.898,14.5],[-2.301,6.5],[-5,-0.5],[-9,-9.5]],"c":true}]},{"t":21,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[4.5,-1.562],[-2.125,-4.367],[2.86,0],[-0.574,2.313],[0.179,1.992],[1.265,2.72]],"o":[[7,0],[0,2.975],[-3.602,0.79],[-1.889,0.656],[0.846,1.738],[-5.5,0],[1.176,-2.937],[-0.625,-6.937],[-1.25,-2.687]],"v":[[0.5,-14.25],[5.25,-4.625],[7.102,9.523],[0.625,6.75],[2.375,14.805],[-0.102,22.625],[-3.551,15.875],[-6.625,8.875],[-3.25,-3.25]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25,32.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":21,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"mouth mask","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.663,"y":0.653},"o":{"x":0.322,"y":0.305},"t":10,"s":[0,-18,0],"to":[0,3,0],"ti":[0,-8.833,0]},{"i":{"x":0.835,"y":1},"o":{"x":0.425,"y":0.501},"t":13.716,"s":[0,0,0],"to":[0,8.833,0],"ti":[0,-5.833,0]},{"t":22,"s":[0,35,0]}],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[{"i":[[-8,0],[0,-3.063],[0.023,-3.335],[1.03,-0.038],[-0.039,-3.008],[2.86,0],[-2.137,5.188],[1.998,-0.087],[0.688,3.375]],"o":[[7,0],[0,2.975],[-0.227,1.727],[-3.375,0.125],[0.027,1.933],[-5.5,0],[1.176,-2.813],[-5.75,0.25],[-0.399,-1.96]],"v":[[0,-14.5],[6.313,-7.875],[10.102,0.085],[7.25,2.625],[5,8.993],[1.773,14.625],[-0.738,5.75],[-2.938,-0.688],[-6.563,-9.813]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":14,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[0,-1.031],[-0.039,-3.008],[2.86,0],[4.199,-1.602],[0,2],[0,3]],"o":[[7,0],[0,2.975],[-0.895,0.321],[0,2],[0.027,1.933],[-5.5,0],[-3.449,1.055],[0,-5.478],[0,-2]],"v":[[0,-14.5],[9,-7.5],[5.102,-0.602],[4,1.5],[7,11.18],[2.898,14.5],[-2.301,6.5],[-5,-0.5],[-9,-9.5]],"c":true}]},{"t":21,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[4.5,-1.562],[-2.125,-4.367],[2.86,0],[-0.574,2.313],[0.179,1.992],[1.265,2.72]],"o":[[7,0],[0,2.975],[-3.602,0.79],[-1.889,0.656],[0.846,1.738],[-5.5,0],[1.176,-2.937],[-0.625,-6.937],[-1.25,-2.687]],"v":[[0.5,-14.309],[5.25,-4.684],[7.102,9.464],[0.625,6.691],[2.375,14.746],[-0.102,22.566],[-3.551,15.816],[-6.625,8.816],[-3.25,-3.309]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[25,32.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":10,"op":21,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"mouth 2","parent":1,"tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.502,6.411],[8.713,3.951],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-6.438,5.25]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.502,6.411],[8.713,3.951],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-6.438,5.25]],"c":true}]},{"t":23,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[24.996,36.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":3,"s":[120,120]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":5,"s":[80,80]},{"t":10,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":10,"op":28,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"mouth 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":6,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.502,6.411],[8.713,3.951],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-6.438,5.25]],"c":true}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":20,"s":[{"i":[[-2.28,0],[-1.326,1.218],[0.437,0.987],[5.571,0],[1.301,-3.012],[-3.558,-1.389]],"o":[[4.836,0],[1.478,-1.358],[-1.292,-2.916],[-5.573,0],[-0.572,1.324],[1.393,0.544]],"v":[[-0.502,6.411],[8.713,3.951],[9.684,0.003],[0.033,-6.411],[-9.62,0.003],[-6.438,5.25]],"c":true}]},{"t":23,"s":[{"i":[[-1.064,0],[-0.618,0.583],[0.216,0.466],[2.6,0],[0.604,-1.441],[-1.66,-0.665]],"o":[[2.257,0],[0.69,-0.649],[-0.603,-1.394],[-2.601,0],[-0.267,0.633],[0.65,0.26]],"v":[[-0.234,3.064],[4.066,1.889],[4.52,0.001],[0.016,-3.064],[-4.49,0.001],[-3.005,2.51]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[24.996,36.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":10,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"circle mask","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.663,"y":0.653},"o":{"x":0.322,"y":0.305},"t":10,"s":[0,-18,0],"to":[0,3,0],"ti":[0,-8.833,0]},{"i":{"x":0.835,"y":1},"o":{"x":0.425,"y":0.501},"t":13.716,"s":[0,0,0],"to":[0,8.833,0],"ti":[0,-5.833,0]},{"t":22,"s":[0,35,0]}],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":10,"s":[{"i":[[-8,0],[0,-3.063],[0.023,-3.335],[1.03,-0.038],[-0.039,-3.008],[2.86,0],[-2.137,5.188],[1.998,-0.087],[0.688,3.375]],"o":[[7,0],[0,2.975],[-0.227,1.727],[-3.375,0.125],[0.027,1.933],[-5.5,0],[1.176,-2.813],[-5.75,0.25],[-0.399,-1.96]],"v":[[0,-14.5],[6.313,-7.875],[10.102,0.085],[7.25,2.625],[5,8.993],[1.773,14.625],[-0.738,5.75],[-2.938,-0.688],[-6.563,-9.813]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":14,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[0,-1.031],[-0.039,-3.008],[2.86,0],[4.199,-1.602],[0,2],[0,3]],"o":[[7,0],[0,2.975],[-0.895,0.321],[0,2],[0.027,1.933],[-5.5,0],[-3.449,1.055],[0,-5.478],[0,-2]],"v":[[0,-14.5],[9,-7.5],[5.102,-0.602],[4,1.5],[7,11.18],[2.898,14.5],[-2.301,6.5],[-5,-0.5],[-9,-9.5]],"c":true}]},{"t":21,"s":[{"i":[[-8,0],[0,-3.063],[2.688,-0.713],[4.5,-1.562],[-2.125,-4.367],[2.86,0],[-0.574,2.313],[0.179,1.992],[1.265,2.72]],"o":[[7,0],[0,2.975],[-3.602,0.79],[-1.889,0.656],[0.846,1.738],[-5.5,0],[1.176,-2.937],[-0.625,-6.937],[-1.25,-2.687]],"v":[[0.5,-14.414],[5.25,-4.789],[7.102,9.359],[0.625,6.586],[2.375,14.641],[-0.102,22.461],[-3.551,15.711],[-6.625,8.711],[-3.25,-3.414]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[25,32.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":12,"op":21,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"circle","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25,25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-12.15],[12.15,0],[0,12.15],[-12.15,0]],"o":[[0,12.15],[-12.15,0],[0,-12.15],[12.15,0]],"v":[[22,0],[0,22],[-22,0],[0,-22]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25,25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0}],"markers":[]}')},54:function(i){i.exports=JSON.parse('{"v":"5.4.4","fr":24,"ip":0,"op":28,"w":50,"h":50,"nm":"tongue-out","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Eyes","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25,25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":2,"s":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,-1],[-5,1]],"c":false}],"e":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,0],[-5,1]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,0],[-5,1]],"c":false}],"e":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,0],[-5,1]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":11,"s":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,0],[-5,1]],"c":false}],"e":[{"i":[[0,0],[2.876,0],[0,0]],"o":[[0,0],[-2.876,0],[0,0]],"v":[[5,1],[0,-1],[-5,1]],"c":false}]},{"t":26}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[16,20],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":2,"s":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,-1],[4.999,1]],"c":false}],"e":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,0],[4.999,1]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":7,"s":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,0],[4.999,1]],"c":false}],"e":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,0],[4.999,1]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":11,"s":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,0],[4.999,1]],"c":false}],"e":[{"i":[[0,0],[-2.876,0],[0,0]],"o":[[0,0],[2.875,0],[0,0]],"v":[[-4.999,1],[0.001,-1],[4.999,1]],"c":false}]},{"t":26}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[33.999,20],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Mouth","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25,25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[6,0],[0,0]],"o":[[0,0],[-6,0],[0,0]],"v":[[10,-0.5],[0,0.5],[-10,-0.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25,30.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Mouth mask","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25,25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[6,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-6,0],[0,0]],"v":[[-23.813,-20.616],[23.5,-20.741],[10,3.402],[0,4.402],[-10,3.402]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.894000004787,0.165000002992,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25,26.599],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Tongue","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":2,"s":[0],"e":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":7,"s":[0],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11,"s":[0],"e":[-11]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":16,"s":[-11],"e":[22.5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[22.5],"e":[-5]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[-5],"e":[0]},{"t":26}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":2,"s":[25,25,0],"e":[25,26,0],"to":[0.009,0.038,0],"ti":[0,-0.016,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":4,"s":[25,26,0],"e":[25,12.25,0],"to":[2.087,-0.399,0],"ti":[0,-2.125,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":7,"s":[25,12.25,0],"e":[25,12.25,0],"to":[0,0.665,0],"ti":[0,-2.125,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":11,"s":[25,12.25,0],"e":[26.375,21.727,0],"to":[0,0.665,0],"ti":[-1.517,-0.691,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":16,"s":[26.375,21.727,0],"e":[25.309,23.598,0],"to":[-0.233,2.097,0],"ti":[2.648,0.007,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":21,"s":[25.309,23.598,0],"e":[25,25,0],"to":[0.727,1.336,0],"ti":[-0.813,0.155,0]},{"t":26}],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-5.642,0],[0,0],[0,0]],"o":[[0,0],[0,0],[5.642,0],[0,0],[0,0]],"v":[[-6,-8.201],[-6,-2.799],[0,8.201],[6,-2.799],[6,-8.201]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25,33.799],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.553,0],[0,0.553],[0,0]],"o":[[0,0],[0,0.553],[0.553,0],[0,0],[0,0]],"v":[[-1,-6.201],[-1,5.201],[0,6.201],[1,5.201],[1,-6.201]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[25,31.799],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Circle","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[25,25,0],"ix":2},"a":{"a":0,"k":[25,25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[12.151,0],[0,-12.151],[-12.151,0],[0,12.151]],"o":[[-12.151,0],[0,12.151],[12.151,0],[0,-12.151]],"v":[[0,-22],[-22,0],[0,22],[22,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[25,25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0}],"markers":[]}')},59:function(i,a,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.f735c6b2.chunk.js.map