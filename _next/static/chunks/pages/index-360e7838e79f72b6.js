(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9750:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var o=n(9499),i=n(7294),r=n(9367),c=n(7379),a=0,l=1,s=n(5893);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={spectator:"\u89b3\u6226\u8005",waiting:"\u5bfe\u6226\u76f8\u624b\u5f85\u6a5f\u4e2d",PLWhite:"\u30d7\u30ec\u30a4\u30e4\u30fc[\u767d]",PLBlack:"\u30d7\u30ec\u30a4\u30e4\u30fc[\u9ed2]"},p=c.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background-color:#cff;"]),g=c.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["align-items:center;width:66vh;height:65.9vh;background-color:#0d0;border:1vh solid black;"]),b=c.ZP.div.withConfig({displayName:"pages__Sqaure",componentId:"sc-eccczk-2"})(["position:relative;display:inline-block;width:8vh;height:8vh;font-size:12vh;line-height:4.5vh;text-align:center;vertical-align:bottom;border:0.2vh solid black;"]),f=c.ZP.div.withConfig({displayName:"pages__Disc",componentId:"sc-eccczk-3"})(["width:5vh;height:5vh;margin:auto;background-color:",";border-radius:50%;"],(function(e){var t=e.disc;return 0===t?"white":1===t?"black":""})),m=(0,c.ZP)(f).withConfig({displayName:"pages__BoardDisc",componentId:"sc-eccczk-4"})(["position:absolute;top:0;right:0;bottom:0;left:0;width:5vh;height:5vh;"]),v=(0,c.ZP)(m).withConfig({displayName:"pages__PutableMarker",componentId:"sc-eccczk-5"})(["width:2vh;height:2vh;background-color:",";"],(function(e){var t=e.turnColor,n=e.gameState;return"White"===t&&"duringAGame"===n?"white":"Black"===t&&"duringAGame"===n?"black":""})),w=c.ZP.div.withConfig({displayName:"pages__GameMsg",componentId:"sc-eccczk-6"})(["position:fixed;top:5vh;width:66vh;padding:0.2vh;margin:0 0 3vh;font-size:4vh;font-weight:bold;line-height:7vh;color:black;text-align:center;background:#eee;border:0.3vh solid #222;border-radius:0.5em;span.white{color:white;text-shadow:1px 1px 0 black,-1px -1px 0 black,-1px 1px 0 black,1px -1px 0 black,0 1px 0 black,0 -1px 0 black,-1px 0 0 black,1px 0 0 black;}"]),k=(0,c.ZP)(w).withConfig({displayName:"pages__DiscCount",componentId:"sc-eccczk-7"})(["top:initial;bottom:4vh;display:flex;width:initial;padding:0.8vh;line-height:4.5vh;"]),x=c.ZP.div.withConfig({displayName:"pages__Modal",componentId:"sc-eccczk-8"})(["position:absolute;top:30%;right:30%;bottom:30%;left:30%;z-index:2;display:",";flex-direction:column;align-items:center;background:whitesmoke;border-radius:1.5em;"],(function(e){return e.isShow?"None":"flex"})),y=c.ZP.label.withConfig({displayName:"pages__ModalLable",componentId:"sc-eccczk-9"})(["margin-top:8%;font-size:270%;color:black;text-align:center;"]),C=c.ZP.div.withConfig({displayName:"pages__ModalBack",componentId:"sc-eccczk-10"})(["position:fixed;top:0;right:0;bottom:0;left:0;z-index:1;display:",";width:100%;height:100%;background-color:rgb(0 0 0 / 80%);"],(function(e){return e.isShow?"":"None"})),_=c.ZP.button.withConfig({displayName:"pages__ModalButton",componentId:"sc-eccczk-11"})(["display:",";width:40%;height:30%;margin-top:10%;font-size:300%;background-color:#ddd;border:0.1vh solid black;border-radius:1.5em;:hover{background-color:#ccc;}"],(function(e){return e.isBtnShow?"":"None"})),P=c.ZP.div.withConfig({displayName:"pages__ButtonArea",componentId:"sc-eccczk-12"})(["position:fixed;right:1vh;bottom:1vh;display:",";flex-direction:column;height:15vh;padding:1vh;background-color:#dff;border:solid 0.2vh black;border-radius:1.5em;"],(function(e){return e.isShow?"flex":"None"})),S=c.ZP.button.withConfig({displayName:"pages__ActButton",componentId:"sc-eccczk-13"})(["width:20vh;height:8vh;font-size:4vh;background-color:",";border-bottom:solid 0.6vh #555;border-radius:1.5em;:active{border-bottom:solid 0.1vh #555;box-shadow:0 0 0.1vh rgb(0 0 0 / 30%);}"],(function(e){return e.backColor})),j=c.ZP.label.withConfig({displayName:"pages__ButtonLabel",componentId:"sc-eccczk-14"})(["margin:0.5vh 0;font-size:2vh;text-align:center;"]),N=c.ZP.div.withConfig({displayName:"pages__UserStateArea",componentId:"sc-eccczk-15"})(["position:fixed;bottom:1vh;left:1vh;display:",";flex-direction:column;padding:1vh;font-size:3.6vh;color:",";background-color:",";border-left:solid 0.5vh gray;box-shadow:0 3px 5px rgb(0 0 0 / 22%);"],(function(e){return e.isShow?"flex":"None"}),(function(e){return"PLBlack"===e.userStateKey?"white":"black"}),(function(e){var t=e.userStateKey;return"PLWhite"===t?"white":"PLBlack"===t?"black":"whitesmoke"})),z=c.ZP.label.withConfig({displayName:"pages__ConnectCountLabel",componentId:"sc-eccczk-16"})(["position:fixed;top:1vh;left:1vh;padding:1vh 2vh;font-size:3vh;text-align:center;background-color:whitesmoke;border-radius:1.5em;box-shadow:0 3px 5px rgb(0 0 0 / 22%);"]),O=function(){var e={board:Array.from(new Array(8),(function(){return new Array(8).fill(9)})),msg:"Reversi",turnColor:"Black",numberOfDisc:{White:2,Black:2},gameState:"playerWanted"},t=(0,i.useState)(h({},e)),n=t[0],c=t[1],d=(0,i.useState)("spectator"),O=d[0],B=d[1],Z=(0,i.useState)(!1),I=Z[0],E=Z[1],L=(0,i.useState)(!0),A=L[0],D=L[1],W=(0,i.useState)(null),M=W[0],R=W[1],G=(0,i.useState)(0),K=G[0],T=G[1],U=(0,i.useRef)(null);(0,i.useEffect)((function(){return U.current=(0,r.io)("https://reversiserver.herokuapp.com/",{reconnection:!1,withCredentials:!0}),U.current.on("gameInfo",(function(e){for(var t=function(){var t=r[i];t in e&&c((function(n){return h(h({},n),{},(0,o.Z)({},t,e[t]))}))},i=0,r=Object.keys(n);i<r.length;i++)t()})),U.current.on("showAlert",(function(e){var t=e.alertMsg;window.alert(t)})),U.current.on("userState",(function(e){var t=e.newUserState;B(t)})),U.current.on("connectCount",(function(e){var t=e.newConnectCount;T(t)})),U.current.on("connect",(function(){R(!0)})),U.current.on("connect_error",(function(){R(!1),window.alert("\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\n\u3082\u3046\u4e00\u5ea6\u8aad\u307f\u8fbc\u307f\u306a\u304a\u3057\u3066\u304f\u3060\u3055\u3044\u3002")})),function(){U.current.disconnect()}}),[]);var X=function(e,t){var n="";switch(e){case"playerWanted":"spectator"===t?n="entry":"waiting"===t&&(n="entryCancel");break;case"duringAGame":n="gameCancel";break;case"gameResult":n="gameResultEnd"}return n},q=function(e,t){var n=X(e,t);return""!==n?{entry:{label:"\u53c2\u52a0\u306f\u3053\u3061\u3089\u304b\u3089",btn:"Entry",btnColor:"#ddd"},entryCancel:{label:"\u53c2\u52a0\u306e\u30ad\u30e3\u30f3\u30bb\u30eb",btn:"exit",btnColor:"#ccc"},gameCancel:{label:"\u5bfe\u6226\u3092\u4e2d\u6b62\u3059\u308b",btn:"Cancel ",btnColor:"#c0c0c0"},gameResultEnd:{label:"\u7d50\u679c\u767a\u8868\u306e\u7d42\u4e86",btn:"Reset",btnColor:"#e6e6fa"}}[n]:{label:"label",btn:"btn",btnColor:""}},F=function(e){return"0".concat(e).slice(-2)};return(0,s.jsxs)(p,{children:[(0,s.jsx)(C,{isShow:A,children:(0,s.jsxs)(x,{isShow:I,children:[(0,s.jsx)(y,{children:null===M?"\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u4e2d":M?"\u63a5\u7d9a\u5b8c\u4e86!":"\u30b5\u30fc\u30d0\u30fc\u306b\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093"}),(0,s.jsx)(_,{id:"inputName",type:"submit",isBtnShow:M,onClick:function(){E(!0),D(!1)},children:"Start"})]})}),(0,s.jsxs)(z,{children:["\u73fe\u5728\u306e\u63a5\u7d9a\u4eba\u6570\uff1a",K,"\u4eba"]}),(0,s.jsxs)(w,{children:[" ",n.msg]}),(0,s.jsx)(g,{children:n.board.map((function(e,t){return e.map((function(e,o){return(0,s.jsxs)(b,{onClick:function(){!function(e,t,o){8===o&&("Black"===n.turnColor&&"PLBlack"===O||"White"===n.turnColor&&"PLWhite"===O)&&U.current.emit("putDisc",{x:e,y:t})}(o,t,e)},children:[" ",8===e?(0,s.jsx)(v,{disc:9,turnColor:n.turnColor,gameState:n.gameState}):(0,s.jsx)(m,{disc:e})]},"".concat(o,"-").concat(t))}))}))}),(0,s.jsxs)(k,{children:[(0,s.jsx)(f,{disc:a}),"\uff1a",F(n.numberOfDisc.White)," -"," ",F(n.numberOfDisc.Black),"\uff1a ",(0,s.jsx)(f,{disc:l})]}),(0,s.jsxs)(P,{isShow:"duringAGame"!==n.gameState||"PLWhite"===O||"PLBlack"===O,children:[(0,s.jsx)(j,{children:q(n.gameState,O).label}),(0,s.jsx)(S,{backColor:q(n.gameState,O).btnColor,onClick:function(){return function(e,t){var n={entry:{confirm:"\u30a8\u30f3\u30c8\u30ea\u30fc\u3057\u307e\u3059\u304b\uff1f",emit:"entry"},entryCancel:{confirm:"\u30a8\u30f3\u30c8\u30ea\u30fc\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u304b?\n\u203b\u89b3\u6226\u8005\u306b\u306a\u308a\u307e\u3059\u3002",emit:"entryCancel"},gameCancel:{confirm:"\u30b2\u30fc\u30e0\u3092\u4e2d\u6b62\u3057\u307e\u3059\u304b?\n\u203b\u5bfe\u6226\u7d50\u679c\u3078\u79fb\u884c\u3057\u307e\u3059\u3002",emit:"cancel"},gameResultEnd:{confirm:"\u5bfe\u6226\u7d50\u679c\u306e\u8868\u793a\u3092\u7d42\u4e86\u3057\u307e\u3059\u304b?\n\u203b\u53c2\u52a0\u753b\u9762\u306b\u79fb\u884c\u3057\u307e\u3059\u3002",emit:"reset"}},o=X(e,t);""!==o&&(window.confirm(n[o].confirm)?U.current.emit(n[o].emit):window.alert("\u30ad\u30e3\u30f3\u30bb\u30eb\u3055\u308c\u307e\u3057\u305f\u3002"))}(n.gameState,O)},children:q(n.gameState,O).btn})]}),(0,s.jsxs)(N,{isShow:M,userStateKey:O,children:["State : ",u[O]]})]})}},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9750)}])}},function(e){e.O(0,[910,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);