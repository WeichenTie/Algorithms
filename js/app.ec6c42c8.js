(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],d=0,h=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Algorithms-Visualisation/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11c0":function(e,t,n){"use strict";n("6b70")},1254:function(e,t,n){},"32b2":function(e,t,n){"use strict";n("5afc")},"3a42":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["createElementVNode"])("h1",null,"Pathfinding Visualisation",-1);function i(e,t,n,i,o,u){var s=Object(r["resolveComponent"])("Board");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[a,Object(r["createVNode"])(s)],64)}n("a9e3"),n("99af");var o={class:"grid"},u={class:"board"},s=["id"],c=["id"];function l(e,t){var n=this,a=Object(r["resolveComponent"])("SidebarOptions");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[Object(r["createVNode"])(a,{onOnBrushSelect:t[0]||(t[0]=function(t){return e.selectedBrush=t}),onOnGenerateMaze:e.handleStartMaze,onOnSearch:e.handleStartSearch,onOnStop:t[1]||(t[1]=function(t){return e.isGeneratingMaze=!1}),onOnClear:e.fillBoard,onOnWeightChange:t[2]||(t[2]=function(t){return e.weight=t}),onOnRenderSpeedChange:t[3]||(t[3]=function(t){return e.renderSpeed=Number(t)}),onOnToggleGrid:t[4]||(t[4]=function(t){return e.isGridShowing=Boolean(t)}),onOnToggleAnimation:t[5]||(t[5]=function(t){return e.isAnimating=Boolean(t)}),onOnToggleLiveMode:t[6]||(t[6]=function(t){return e.handleToggleLive(t)})},null,8,["onOnGenerateMaze","onOnSearch","onOnClear"]),Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("table",{style:Object(r["normalizeStyle"])({width:this.cellSize*this.tableSize+"px",height:this.cellSize*this.tableSize+"px",cursor:this.getCursorStyle()})},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(this.board,(function(a,i){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:i,id:"row-"+i},[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(a,(function(a,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("td",{key:o,id:"".concat(i,"-").concat(o),ref_for:!0,ref:"".concat(i,"-").concat(o),class:Object(r["normalizeClass"])("unvisited"),onMousedown:t[7]||(t[7]=function(t){return e.handleMouseDown(t)}),onMouseenter:t[8]||(t[8]=function(t){return e.handleMouseEnter(t)}),onMouseup:t[9]||(t[9]=function(t){return e.handleMouseUp()}),style:Object(r["normalizeStyle"])({width:n.cellSize+"px",height:n.cellSize+"px",border:n.isGridShowing?"#1f1f1f5b 1px dotted":"none"})},null,44,c)})),128))],8,s)})),128))],4)])])}var d=n("1da1"),h=(n("96cf"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("ac1f"),n("1276"),n("5377"),n("a434"),n("caad"),n("2532"),n("159b"),function(e){return Object(r["pushScopeId"])("data-v-938df944"),e=e(),Object(r["popScopeId"])(),e}),f={class:"sidebar"},p=h((function(){return Object(r["createElementVNode"])("h2",null,"Tools",-1)})),b={class:"option"},g=h((function(){return Object(r["createElementVNode"])("label",{for:"wall-brush"},"Wall",-1)})),m={class:"option"},v=h((function(){return Object(r["createElementVNode"])("label",{for:"weight-brush"},"Weight",-1)})),w={class:"option"},O=h((function(){return Object(r["createElementVNode"])("label",{for:"flag-brush"},"Flag",-1)})),x={class:"option"},j=h((function(){return Object(r["createElementVNode"])("label",{for:"start-node-brush"},"Start Node",-1)})),k={class:"option"},S=h((function(){return Object(r["createElementVNode"])("label",{for:"end-node-brush"},"End Node",-1)})),V={class:"option"},y=h((function(){return Object(r["createElementVNode"])("label",{for:"eraser-brush"},"Eraser",-1)})),E={class:"option"},M=h((function(){return Object(r["createElementVNode"])("label",{for:"drag-brush"},"Drag Tool",-1)})),N={class:"option"},z=h((function(){return Object(r["createElementVNode"])("h2",null,"General Settings",-1)})),P={class:"option"},B=h((function(){return Object(r["createElementVNode"])("label",{for:"renderSpeed"},"Simulation Speed: ",-1)})),R=Object(r["createStaticVNode"])('<option value="0" data-v-938df944>Instant</option><option value="10" data-v-938df944>Faster</option><option value="50" data-v-938df944>Fast</option><option value="100" data-v-938df944>Normal</option><option value="500" data-v-938df944>Slow</option><option value="-1" data-v-938df944>Step</option>',6),T=[R],L={class:"option"},C=h((function(){return Object(r["createElementVNode"])("label",{for:"live-mode"},"Live Mode:",-1)})),A={class:"option"},D=h((function(){return Object(r["createElementVNode"])("label",{for:"grid-view"},"Toggle Grid:",-1)})),F={class:"option"},G=h((function(){return Object(r["createElementVNode"])("label",{for:"toggle-animations"},"Toggle Animations:",-1)})),$=Object(r["createStaticVNode"])('<h2 data-v-938df944>Algorithm Settings</h2><div class="option" data-v-938df944><label data-v-938df944>Maze Generation: </label><select data-v-938df944><option value="10" data-v-938df944>Randomised Prims Algorithm</option></select></div><div class="option" data-v-938df944><label data-v-938df944>Pathfinder: </label><select data-v-938df944><option value="0" data-v-938df944>Breadth First Search</option><option value="10" data-v-938df944>Depth First Search</option></select></div><div class="option" data-v-938df944><label data-v-938df944>Graph: </label><select data-v-938df944></select></div>',4),I={class:"run-algo"},_=h((function(){return Object(r["createElementVNode"])("div",null,null,-1)})),U=h((function(){return Object(r["createElementVNode"])("div",null,null,-1)}));function W(e,t,n,a,i,o){var u=Object(r["resolveComponent"])("VueSlider"),s=Object(r["resolveComponent"])("PillToggleSwitchVue");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,[p,Object(r["createElementVNode"])("form",null,[Object(r["createElementVNode"])("div",b,[g,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"wall-brush",class:"brush-button",checked:"",onChange:t[0]||(t[0]=function(t){return e.$emit("on-brush-select","wall")})},null,32)]),Object(r["createElementVNode"])("div",m,[v,Object(r["createVNode"])(u,{modelValue:i.weight,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.weight=e}),min:1,max:100,width:"150px",onChange:t[2]||(t[2]=function(t){return e.$emit("on-weight-change",Number(i.weight))})},null,8,["modelValue"]),Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"weight-brush",class:"brush-button",onChange:t[3]||(t[3]=function(t){return e.$emit("on-brush-select","weight")})},null,32)]),Object(r["createElementVNode"])("div",w,[O,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"flag-brush",class:"brush-button",onChange:t[4]||(t[4]=function(t){return e.$emit("on-brush-select","flag")})},null,32)]),Object(r["createElementVNode"])("div",x,[j,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"start-node-brush",class:"brush-button",onChange:t[5]||(t[5]=function(t){return e.$emit("on-brush-select","start-node")})},null,32)]),Object(r["createElementVNode"])("div",k,[S,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"end-node-brush",class:"brush-button",onChange:t[6]||(t[6]=function(t){return e.$emit("on-brush-select","end-node")})},null,32)]),Object(r["createElementVNode"])("div",V,[y,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"eraser-brush",class:"brush-button",onChange:t[7]||(t[7]=function(t){return e.$emit("on-brush-select","unvisited")})},null,32)]),Object(r["createElementVNode"])("div",E,[M,Object(r["createElementVNode"])("input",{type:"radio",name:"brush",id:"drag-brush",class:"brush-button",onChange:t[8]||(t[8]=function(t){return e.$emit("on-brush-select","drag")})},null,32)]),Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("button",{onClick:t[9]||(t[9]=Object(r["withModifiers"])((function(t){return e.$emit("on-clear","unvisited")}),["prevent"]))},"Clear Board")])]),Object(r["createElementVNode"])("form",null,[z,Object(r["createElementVNode"])("div",P,[B,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{class:"drop-down",id:"renderSpeed","onUpdate:modelValue":t[10]||(t[10]=function(e){return i.renderSpeed=e}),onChange:t[11]||(t[11]=function(t){return e.$emit("on-render-speed-change",i.renderSpeed)})},T,544),[[r["vModelSelect"],i.renderSpeed]])]),Object(r["createElementVNode"])("div",L,[C,Object(r["createVNode"])(s,{id:"live-mode",onOnToggle:t[12]||(t[12]=function(t){return e.$emit("on-toggle-live-mode",t)}),initialValue:!1})]),Object(r["createElementVNode"])("div",A,[D,Object(r["createVNode"])(s,{id:"grid-view",onOnToggle:t[13]||(t[13]=function(t){return e.$emit("on-toggle-grid",t)}),initialValue:!0})]),Object(r["createElementVNode"])("div",F,[G,Object(r["createVNode"])(s,{id:"toggle-animations",onOnToggle:t[14]||(t[14]=function(t){return e.$emit("on-toggle-animation",t)}),initialValue:!0})])]),Object(r["createElementVNode"])("form",null,[$,Object(r["createElementVNode"])("div",I,[Object(r["createElementVNode"])("button",{onClick:t[15]||(t[15]=Object(r["withModifiers"])((function(t){return e.$emit("on-generate-maze")}),["prevent"]))},"Generate Maze"),_,Object(r["createElementVNode"])("button",{onClick:t[16]||(t[16]=Object(r["withModifiers"])((function(t){return e.$emit("on-search")}),["prevent"]))},"Search"),U,Object(r["createElementVNode"])("button",{onClick:t[17]||(t[17]=Object(r["withModifiers"])((function(t){return e.$emit("on-stop")}),["prevent"]))},"Stop")])])])}var q=n("4971"),J=n.n(q);n("3e39");function X(e,t,n,a,i,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createElementVNode"])("span",{class:"toggle-wrapper",role:"checkbox",onClick:t[0]||(t[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)})},[Object(r["createElementVNode"])("span",{class:Object(r["normalizeClass"])(["toggle-background",o.backgroundStyles])},null,2),Object(r["createElementVNode"])("span",{class:"toggle-indicator",style:Object(r["normalizeStyle"])(o.indicatorStyles)},null,4)])])}var H={props:{initialValue:Boolean},data:function(){return{value:this.initialValue}},computed:{backgroundStyles:function(){return{"gold-mid":this.value,"gray-lighter":!this.value}},indicatorStyles:function(){return{transform:this.value?"translateX(14px)":"translateX(0)"}}},methods:{toggle:function(){this.value=!this.value,this.$emit("on-toggle",this.value)}}},K=(n("11c0"),n("6b0d")),Q=n.n(K);const Y=Q()(H,[["render",X]]);var Z=Y,ee={components:{VueSlider:J.a,PillToggleSwitchVue:Z},data:function(){return{weight:1,renderSpeed:10}}};n("9000");const te=Q()(ee,[["render",W],["__scopeId","data-v-938df944"]]);var ne=te,re=n("2909");function ae(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=!1,a=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isGeneratingMaze){n.next=5;break}clearTimeout(a),t(),n.next=20;break;case 5:if(0!==e.renderSpeed){n.next=12;break}return clearTimeout(a),n.next=9,s();case 9:t(),n.next=20;break;case 12:if(-1!==e.renderSpeed){n.next=19;break}return clearTimeout(a),n.next=16,s();case 16:t(),n.next=20;break;case 19:o()?(clearTimeout(a),t()):a=setTimeout((function(){return r()}),e.renderSpeed);case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=setTimeout((function(){return r()}),e.renderSpeed)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){while(!t());r=!0},o=function(){for(var n=0;n<e.stepSize;n++)if(t())return r=!0,!0;return!1},u=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=setInterval(Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isGeneratingMaze){n.next=5;break}t(),clearInterval(r),n.next=20;break;case 5:if(0!==e.renderSpeed){n.next=12;break}return clearInterval(r),n.next=9,s();case 9:t(),n.next=20;break;case 12:if(-1===e.renderSpeed){n.next=19;break}return clearInterval(r),n.next=16,s();case 16:t(),n.next=20;break;case 19:e.shouldStep&&(o()&&(t(),clearInterval(r)),e.shouldStep=!1);case 20:case"end":return n.stop()}}),n)}))),20)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.renderSpeed){t.next=4;break}i(),t.next=11;break;case 4:if(-1!==e.renderSpeed){t.next=9;break}return t.next=7,u();case 7:t.next=11;break;case 9:return t.next=11,a();case 11:r&&n();case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{runAlgorithm:s,instantLoop:i}}var ie=ae;function oe(e){return ue.apply(this,arguments)}function ue(){return ue=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"wall",r=0,a=function(){if(r>=t.tableSize)return!0;for(var e=0;e<t.tableSize;e++)t.forceDraw([r,e],n);return r+=1,r>=t.tableSize},e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}var se=oe;function ce(e){return le.apply(this,arguments)}function le(){return le=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,u,s,c,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=function(e){t.forceDraw(e,"unvisited")},i=function(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]},a=function(e,n){var a=[];return r(e[1]+2,e[0])&&t.board[e[0]][e[1]+2]===n&&a.push([e[0],e[1]+2]),r(e[1]-2,e[0])&&t.board[e[0]][e[1]-2]===n&&a.push([e[0],e[1]-2]),r(e[1],e[0]+2)&&t.board[e[0]+2][e[1]]===n&&a.push([e[0]+2,e[1]]),r(e[1],e[0]-2)&&t.board[e[0]-2][e[1]]===n&&a.push([e[0]-2,e[1]]),a},r=function(e,n){return e>0&&e<t.tableSize-1&&n>0&&n<t.tableSize-1},n=function(e){return e[0]*t.tableSize+e[1]},l.length>1&&void 0!==l[1]?l[1]:function(){return"wall"},e.t0=ie,e.t1=t,e.next=10,se(t,"wall");case 10:return e.t2=e.sent,e.next=13,(0,e.t0)(e.t1,e.t2).runAlgorithm();case 13:u=[-1,-1];while(!r(u[1],u[0]))u=[2*Math.floor(Math.random()*t.tableSize/2)-1,2*Math.floor(Math.random()*t.tableSize/2)-1];return s=new Map,[].concat(Object(re["a"])(a(u,-1)),[u]).forEach((function(e){return s.set(n(e),e)})),o(u),c=function(){for(var e=[],r=s.values(),c=r.next();!c.done;c=r.next())e.push(c.value);u=e[Math.floor(Math.random()*e.length)],s.delete(n(u));var l=a(u,0);if(l.length>0){var d=l[Math.floor(Math.random()*l.length)];o(d),o(u),o(i(d,u))}return a(u,-1).forEach((function(e){return s.set(n(e),e)})),0===s.size&&(t.draw([(t.tableSize-1)/2,(t.tableSize-1)/2-10],"start-node"),t.draw([(t.tableSize-1)/2,(t.tableSize-1)/2+10],"end-node"),!0)},e.abrupt("return",c);case 20:case"end":return e.stop()}}),e)}))),le.apply(this,arguments)}var de=ce;var he=n("d4ec"),fe=n("bee2");n("4e82");var pe=n("b85c"),be=(n("6062"),n("6b83")),ge=n.n(be);function me(e,t,n){function r(t){return t[0]*e.tableSize+t[1]}function a(t){var n=t%e.tableSize,r=(t-n)/e.tableSize;return[r,n]}function i(e,t){var n=d.get(e),r=d.get(t);return n.g+n.h-(r.g+r.h)}function o(e){return Math.abs(e[0]-n[0])+Math.abs(e[1]-n[1])}function u(t,n){return t>=0&&t<e.tableSize&&n>=0&&n<e.tableSize}function s(t){var n=a(t);function i(n){return d.get(t).g+e.board[n[0]][n[1]]>=0?e.board[n[0]][n[1]]+1:1}function s(e){d.has(r(e))||d.set(r(e),{g:1/0,f:1/0,h:o(e)});var n=i(e);if(n<d.get(r(e)).g){f.set(r(e),t);var a=d.get(r(e));a.g=n,a.f=n+a.h,l.has(r(e))||(c.queue(r(e)),l.add(r(e)),f.set(r(e),t))}}u(n[1]+1,n[0])&&-1!==e.board[n[0]][n[1]+1]&&s([n[0],n[1]+1]),u(n[1]-1,n[0])&&-1!==e.board[n[0]][n[1]-1]&&s([n[0],n[1]-1]),u(n[1],n[0]+1)&&-1!==e.board[n[0]+1][n[1]]&&s([n[0]+1,n[1]]),u(n[1],n[0]-1)&&-1!==e.board[n[0]-1][n[1]]&&s([n[0]-1,n[1]])}var c=new ge.a({comparator:function(e,t){return i(e,t)}}),l=new Set,d=new Map,h=0,f=new Map;c.queue(r(t)),d.set(r(t),{g:0,h:o(t),f:o(t)}),l.add(r(t));var p=function(){if(0===c.length)return null;var t=c.dequeue();if(l.delete(r(t)),t===r(n)){var i=[];i.push(a(t));var o=f.get(t);while(null!=o){var u=a(o);i.push(u),h+=e.board[u[0]][u[1]],o=f.get(o)}if(!e.isLive){var d,p=Object(pe["a"])(i);try{for(p.s();!(d=p.n()).done;){var b=d.value;e.highlightAlgoDetailCell(b,"temp1")}}catch(g){p.e(g)}finally{p.f()}}return{path:i,weight:h}}return 0!==e.flags.length&&e.isLive||e.highlightAlgoDetailCell(a(t),"temp2"),s(t),!1};return p}var ve=me;n("f770");function we(e,t){var n=null,r=function(){var e=t();return!1!==e&&(null===e?(!0,!0):(!0,n=e,!0))},a=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isPathFinding){n.next=5;break}clearTimeout(a),t(),n.next=20;break;case 5:if(0!==e.renderSpeed){n.next=12;break}return clearTimeout(a),n.next=9,s();case 9:t(),n.next=20;break;case 12:if(-1!==e.renderSpeed){n.next=19;break}return clearTimeout(a),n.next=16,s();case 16:t(),n.next=20;break;case 19:u()?(clearTimeout(a),t()):a=setTimeout((function(){return r()}),e.renderSpeed);case 20:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=setTimeout((function(){return r()}),e.renderSpeed)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){while(!r());!0},o=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=setInterval(Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isPathFinding){n.next=5;break}t(),clearInterval(r),n.next=20;break;case 5:if(0!==e.renderSpeed&&!e.isLive){n.next=12;break}return clearInterval(r),n.next=9,s();case 9:t(),n.next=20;break;case 12:if(-1===e.renderSpeed){n.next=19;break}return clearInterval(r),n.next=16,s();case 16:t(),n.next=20;break;case 19:e.shouldStep&&(u()&&(t(),clearInterval(r)),e.shouldStep=!1);case 20:case"end":return n.stop()}}),n)}))),20)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){for(var t=0;t<e.stepSize;t++)if(r())return!0,!0;return!1},s=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.renderSpeed&&!e.isLive){t.next=4;break}i(),t.next=11;break;case 4:if(-1!==e.renderSpeed){t.next=9;break}return t.next=7,o();case 7:t.next=11;break;case 9:return t.next=11,a();case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{runAlgorithm:s,instantLoop:i}}var Oe=we,xe=function(){function e(){Object(he["a"])(this,e),this.adjacencyList=new Map,this.numVertex=0}return Object(fe["a"])(e,[{key:"addVertex",value:function(e){this.adjacencyList.set(e,new Map),this.numVertex++}},{key:"removeVertex",value:function(e){var t,n=Object(pe["a"])(this.adjacencyList.keys());try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r!==e){var a,i=Object(pe["a"])(this.adjacencyList.get(r).keys());try{for(i.s();!(a=i.n()).done;){a.value;this.removeEdge(r,e)}}catch(o){i.e(o)}finally{i.f()}}}}catch(o){n.e(o)}finally{n.f()}this.adjacencyList.delete(e),this.numVertex--}},{key:"addEdge",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;null!=r&&(n=r.length),this.adjacencyList.get(e).set(t,{weight:n,path:r})}},{key:"removeEdge",value:function(e,t){this.adjacencyList.get(e).delete(t)}},{key:"getEdgeWeight",value:function(e,t){return this.adjacencyList.get(e).get(t).weight}},{key:"getEdgePath",value:function(e,t){return this.adjacencyList.get(e).get(t).path}},{key:"getOutboundEdges",value:function(e){return this.adjacencyList.get(e).entries()}}]),e}(),je=xe;function ke(e){var t=new Set,n=[],r=function(r){var a,i=[-1,{weight:1/0,path:[]}],o=Object(pe["a"])(e.getOutboundEdges(r));try{for(o.s();!(a=o.n()).done;){var u=a.value;u[1].weight<i[1].weight&&!t.has(u[0])&&(n.length===e.numVertex-2||u[0]!=e.numVertex-1)&&(i=u)}}catch(s){o.e(s)}finally{o.f()}return i[0]>r&&(i[1].path=i[1].path.reverse()),i},a=function e(a){if(-1!==a){t.add(a);var i=r(a);n.push(i[1].path),e(i[0])}};return a(0),n}var Se=ke;function Ve(e,t,n){var r=0,a=0,i=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.highlightAlgoDetailCell(c[r][a],"temp2"),a++,a>=c[r].length&&(a=0,r++),t.abrupt("return",!(r<c.length-1));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=0,r=0;while(n<c.length-1)e.highlightAlgoDetailCell(c[n][r],"temp2"),r++,r>=c[n].length&&(r=0,n++);e.isPathFinding=!1;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isPathFinding){n.next=5;break}clearTimeout(a),t(),n.next=27;break;case 5:if(0!==e.renderSpeed&&!e.isLive){n.next=12;break}return clearTimeout(a),n.next=9,s();case 9:t(),n.next=27;break;case 12:if(-1!==e.renderSpeed){n.next=19;break}return clearTimeout(a),n.next=16,s();case 16:t(),n.next=27;break;case 19:return n.next=21,i();case 21:if(!n.sent){n.next=26;break}clearTimeout(a),t(),n.next=27;break;case 26:a=setTimeout((function(){return r()}),e.renderSpeed);case 27:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=setTimeout((function(){return r()}),e.renderSpeed)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.renderSpeed&&!e.isLive){t.next=5;break}return t.next=3,o();case 3:t.next=10;break;case 5:if(-1!==e.renderSpeed){t.next=8;break}t.next=10;break;case 8:return t.next=10,u();case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=t(n);return{runAlgorithm:s}}var ye=Ve,Ee=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function Me(e){var t=function(){l.addVertex(0),c.set(0,e.startingPosition);for(var t=0;t<e.flags.length;t++)l.addVertex(t+1),c.set(t+1,e.flags[t]);l.addVertex(1+e.flags.length),c.set(1+e.flags.length,e.endingPosition)},n=function(){var t=0,n=1,r=function(){var r=Object(d["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!(t>=l.numVertex-1)){r.next=2;break}return r.abrupt("return",!0);case 2:return r.t0=Oe,r.t1=e,r.next=6,e.pathAlgorithm(e,c.get(t),c.get(n));case 6:return r.t2=r.sent,r.next=9,(0,r.t0)(r.t1,r.t2).runAlgorithm();case 9:if(a=r.sent,null!==a){r.next=13;break}return e.rerenderBoard(),r.abrupt("return",!0);case 13:return l.addEdge(t,n,a.weight,a.path),l.addEdge(n,t,a.weight,a.path),n++,n>=l.numVertex&&(t++,n=t+1),r.abrupt("return",!1);case 18:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return r},r=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s){t.next=7;break}return t.next=3,h();case 3:return s=t.sent,t.abrupt("return",!1);case 7:return t.next=9,ye(e,e.linkerAlgorithm,l).runAlgorithm();case 9:return e.isPathFinding=!1,t.abrupt("return",!0);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var a=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isPathFinding){n.next=5;break}clearTimeout(i),t(),n.next=30;break;case 5:if(0!==e.renderSpeed&&!e.isLive){n.next=12;break}return clearTimeout(i),n.next=9,u();case 9:t(),n.next=30;break;case 12:if(-1!==e.renderSpeed){n.next=19;break}return clearTimeout(i),n.next=16,u();case 16:t(),n.next=30;break;case 19:return n.next=21,r();case 21:if(!n.sent){n.next=26;break}clearTimeout(i),t(),n.next=30;break;case 26:return n.next=28,Ee(Math.min(e.renderSpeed/100*2500,1e3));case 28:e.rerenderBoard(),i=setTimeout((function(){return a()}),e.renderSpeed);case 30:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=setTimeout((function(){return a()}),e.renderSpeed)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:if(t.sent){t.next=6;break}return t.abrupt("continue",0);case 6:return e.rerenderBoard(),t.next=9,ye(e,e.linkerAlgorithm,l).runAlgorithm();case 9:e.isPathFinding=!1;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.renderSpeed&&!e.isLive){t.next=5;break}return t.next=3,i();case 3:t.next=12;break;case 5:if(-1!==e.renderSpeed){t.next=10;break}return t.next=8,o();case 8:t.next=12;break;case 10:return t.next=12,a();case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(null===e.startingPosition||null===e.endingPosition)return function(){e.isPathFinding=!1};var s=!1,c=new Map,l=new je,h=n();return t(),u}var Ne=Me,ze={components:{SidebarOptions:ne},data:function(){return{tableSize:35,cellSize:27,maxFlags:5,brushValueMap:new Map,valueBrushMap:new Map,showAlgorithmDetails:!0,renderSpeed:10,isAnimating:!0,tracerMarks:[],isDragging:!1,isGridShowing:!0,isGeneratingMaze:!1,isPathFinding:!1,shouldStep:!1,stepSize:1,mazeAlgorithm:de,pathAlgorithm:ve,linkerAlgorithm:Se,isLive:!1,selectedBrush:"wall",weight:1,isDirty:!1,board:[],flags:[],pathCells:[],startingPosition:null,endingPosition:null,lastValidPosition:null}},beforeMount:function(){this.brushValueMap.set("unvisited",0),this.brushValueMap.set("wall",-1),this.brushValueMap.set("start-node",-2),this.brushValueMap.set("end-node",-3),this.brushValueMap.set("weight",-4),this.brushValueMap.set("flag",-5),this.valueBrushMap.set(0,"unvisited"),this.valueBrushMap.set(-1,"wall"),this.valueBrushMap.set(-2,"start-node"),this.valueBrushMap.set(-3,"end-node"),this.valueBrushMap.set(-4,"weight"),this.valueBrushMap.set(-5,"flag"),this.board=this.newBoard(),this.startingPosition=[(this.tableSize-1)/2,(this.tableSize-1)/2-10],this.endingPosition=[(this.tableSize-1)/2,(this.tableSize-1)/2+10]},mounted:function(){this.forceDraw(this.startingPosition,"start-node"),this.forceDraw(this.endingPosition,"end-node")},methods:{newBoard:function(){for(var e=[],t=0;t<this.tableSize;t++){for(var n=[],r=0;r<this.tableSize;r++)n.push(0);e.push(n)}return e},handleMouseDown:function(e){if(1===e.buttons&&!this.isGeneratingMaze&&!this.isPathFinding){var t=e.target.id.split("-").map((function(e){return Number(e)}));if("drag"===this.selectedBrush){if(this.isEmpty(t))return;this.isDragging=!0,this.lastValidPosition=t}else this.draw(t);this.isLive&&(this.rerenderBoard(),Ne(this)())}},handleMouseEnter:function(e){if(!this.isGeneratingMaze&&!this.isPathFinding&&1===e.buttons){var t=e.target.id.split("-").map((function(e){return Number(e)}));if("drag"===this.selectedBrush){if(null===this.lastValidPosition)return;if(!this.isEmpty(t))return;this.rerenderBoard();var n=this.valueBrushMap.get(this.board[this.lastValidPosition[0]][this.lastValidPosition[1]]);this.draw(this.lastValidPosition,"unvisited"),this.draw(t,n),this.lastValidPosition=t}else this.draw(t);this.isLive&&(this.rerenderBoard(),Ne(this)())}},handleMouseUp:function(){this.lastValidPosition=null,this.isDragging=!1},handleStartMaze:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isGeneratingMaze){e.next=2;break}return e.abrupt("return");case 2:return this.isGeneratingMaze=!0,this.rerenderBoard(),e.t0=ie,e.t1=this,e.next=8,this.mazeAlgorithm(this);case 8:return e.t2=e.sent,e.t3=function(){t.isGeneratingMaze=!1},e.next=12,(0,e.t0)(e.t1,e.t2,e.t3).runAlgorithm();case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleStartSearch:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isPathFinding){e.next=2;break}return e.abrupt("return");case 2:return this.isPathFinding=!0,this.rerenderBoard(),e.next=6,Ne(this)();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleStep:function(){this.shouldStep=!0},handleToggleLive:function(e){this.isLive=Boolean(e),this.isLive?Ne(this)():this.rerenderBoard()},isEmpty:function(e){return 0==this.board[e[0]][e[1]]},draw:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selectedBrush,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.isAnimating&&!this.isLive;if("unvisited"===t)this.forceDraw(e,t,n);else if(this.isEmpty(e)){if("end-node"===t){if(null!==this.endingPosition)return;this.endingPosition=e}else if("start-node"===t){if(null!==this.startingPosition)return;this.startingPosition=e}else if("flag"===t){if(!(this.flags.length<=6))return;this.flags.push(e)}this.forceDraw(e,t,n)}},forceDraw:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.selectedBrush,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.isAnimating&&!this.isLive,r=t+(n?"-animated":"");if(-2===this.board[e[0]][e[1]])this.startingPosition=null;else if(-3===this.board[e[0]][e[1]])this.endingPosition=null;else if(-5===this.board[e[0]][e[1]])for(var a=0;a<this.flags.length;a++)this.flags[a][0]===e[0]&&this.flags[a][1]===e[1]&&this.flags.splice(a,1);this.rerenderBoard(),this.highlightCell(e,r),this.board[e[0]][e[1]]=this.brushValueMap.get(t)},highlightCell:function(e,t){var n="".concat(e[0],"-").concat(e[1]);this.$refs[n][0].classList.value=[t]},highlightAlgoDetailCell:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.isAnimating&&!this.isLive,r=t+(n?"-animated":""),a="".concat(e[0],"-").concat(e[1]),i=this.$refs[a][0].classList.value.split(" ");i[0].includes("unvisited")&&(this.tracerMarks.push(a),this.$refs[a][0].classList.value="".concat(i[0]," ").concat(r))},fillBoard:function(e){for(var t=0;t<this.tableSize;t++)for(var n=0;n<this.tableSize;n++)this.draw([t,n],e)},rerenderBoard:function(){while(this.tracerMarks.length>0){var e=this.tracerMarks.pop();this.$refs[e][0].classList.value="unvisited"}this.tracerMarks=[]},trueRerenderBoard:function(){this.board.forEach((function(e){return console.log(e)}))},getCursorStyle:function(){return this.isGeneratingMaze||this.isPathFinding?"not-allowed":"drag"===this.selectedBrush?this.isDragging?"grabbing":"grab":"pointer"}}};n("9f4a");const Pe=Q()(ze,[["render",l]]);var Be=Pe,Re={name:"App",components:{Board:Be},data:function(){return{}},method:{}};n("32b2");const Te=Q()(Re,[["render",i]]);var Le=Te;Object(r["createApp"])(Le).mount("#app")},"5afc":function(e,t,n){},"6b70":function(e,t,n){},9e3:function(e,t,n){"use strict";n("3a42")},"9f4a":function(e,t,n){"use strict";n("1254")},f770:function(e,t){}});
//# sourceMappingURL=app.ec6c42c8.js.map