(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/white-tile.50c05c66.svg"},function(e,t,n){e.exports=n.p+"static/media/black-tile.0bf5de19.svg"},function(e,t,n){e.exports=n.p+"static/media/yellow-tile.03ed92f1.svg"},function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),r=n.n(s),c=(n(19),n(2)),l=n(3),o=n(5),u=n(4),m=n(6),f=i.a.createContext(),h=n(8),d=(n(22),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Title"},t.loginHeader,t.title,i.a.createElement("div",{className:"Title__subtitle pt2 tc f2-ns f3 fw3"},"The Ultimate Musical Challenge"),i.a.createElement("ul",{className:"list pl0 tc"},i.a.createElement("li",{className:"pa3-ns pa2 f3-ns f4 grow hover--2",onClick:function(){t.setRoute("play")}},"Play"),i.a.createElement("li",{className:"pa3-ns pa2 f3-ns f4 grow hover--2",onClick:function(){t.setRoute("options")}},"Options"),i.a.createElement("li",{className:"pa3-ns pa2 f3-ns f4 grow hover--2",onClick:function(){t.setRoute("scores")}},"Scores"),i.a.createElement("li",{className:"pa3-ns pa2 f3-ns f4 grow hover--2",onClick:function(){t.setRoute("statistics")}},"Statistics"),i.a.createElement("li",{className:"pa3-ns pa2 f3-ns f4 grow hover--2",onClick:function(){t.setRoute("about")}},"About")))}}]),t}(a.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Register h-100 relative flex justify-center"},i.a.createElement("button",{className:"absolute bottom-2 bg-color--empty outline--none bw0 dim f3",onClick:function(){t.setRoute("title")}},"Back"))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Login h-100 relative flex justify-center"},i.a.createElement("button",{className:"absolute bottom-2 bg-color--empty outline--none bw0 dim f3",onClick:function(){t.setRoute("title")}},"Back"))}}]),t}(a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"About"},t.loginHeader,t.title,i.a.createElement("div",{className:"About__instructions pa3"},i.a.createElement("div",{className:"About__instructions-title tc b mb1 f4-ns f5"},"Instructions"),i.a.createElement("div",{className:"About__instructions-body tc f5-ns f6"},"Navigate through 50 black tiles using ASDF without stepping on a white tile")),i.a.createElement("div",{className:"About__scoring pa3"},i.a.createElement("div",{className:"About__scoring-title tc b mb1 f4-ns f5"},"Scoring"),i.a.createElement("div",{className:"About__scoring-body tc f5-ns f6"},"Your score is determined by how fast you can traverse the tiles")),i.a.createElement("div",{className:"Copyright pa3"},i.a.createElement("div",{className:"Copyright__name tc b mb1 f4-ns f5"},"Made by Trey Wallis"),i.a.createElement("div",{className:"Version tc f5-ns f6"},"1.0.0")),t.backButton)}}]),t}(a.Component),y=(n(24),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=(t.ui,t.domain,t.level);return i.a.createElement("div",{className:"Play",onKeyPress:function(e){n.handleKeyPress(e.charCode)},tabIndex:"0",ref:function(t){return e.input=t}},i.a.createElement("div",{className:"Play__background flex flex-wrap"},n.filterTiles),i.a.createElement("div",{className:"Play__timer"},i.a.createElement("div",{className:"Play__timer-text tr mt2 f3 dark-red"},n.time)))}}]),t}(a.Component)),O=Object(h.b)(y),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui,n=(e.domain,e.level);return i.a.createElement("div",{className:"GameOver"},t.loginHeader,t.title,n.wonGame?i.a.createElement("div",{className:"GameOver__text"},i.a.createElement("div",{className:"GameOver__first mt5 tc f3-ns f4"},"Congrats"),i.a.createElement("div",{className:"GameOver__second mt3 tc f2-ns f3 b"},n.lastTime,"s"),i.a.createElement("div",{className:"GameOver__third tc f3-ns f4 b"},n.tilesPerSecond," tiles per second")):i.a.createElement("div",{className:"GameOver__text"},i.a.createElement("div",{className:"GameOver__first mt5 tc f3-ns f4 b"},"Failure",i.a.createElement("br",null)," Better luck next time"),i.a.createElement("div",{className:"GameOver__score mt3 tc f4-ns f5"},"You survived ",n.lastTime,"s")),t.backButton)}}]),t}(a.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Options h-100 relative flex justify-center"},i.a.createElement("button",{className:"absolute bottom-2 bg-color--empty outline--none bw0 dim f3",onClick:function(){t.setRoute("title")}},"Back"))}}]),t}(a.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Score h-100 relative flex justify-center"},i.a.createElement("button",{className:"absolute bottom-2 bg-color--empty outline--none bw0 dim f3",onClick:function(){t.setRoute("title")}},"Back"))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.ui;e.domain;return i.a.createElement("div",{className:"Statistics h-100 relative flex justify-center"},i.a.createElement("button",{className:"absolute bottom-2 bg-color--empty outline--none bw0 dim f3",onClick:function(){t.setRoute("title")}},"Back"))}}]),t}(a.Component),w=(n(26),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ViewLayer"},i.a.createElement(f.Consumer,null,function(e){return i.a.createElement(h.a,null,function(){switch(e.ui.route){case"register":return i.a.createElement(b,{ui:e.ui});case"login":return i.a.createElement(v,{ui:e.ui});case"scores":return i.a.createElement(j,{ui:e.ui,level:e.level});case"statistics":return i.a.createElement(E,{ui:e.ui});case"options":return i.a.createElement(k,{ui:e.ui});case"about":return i.a.createElement(p,{ui:e.ui});case"gameover":return i.a.createElement(g,{ui:e.ui,level:e.level});case"play":return i.a.createElement(O,{ui:e.ui,level:e.level});default:return i.a.createElement(d,{ui:e.ui})}})}))}}]),t}(a.Component)),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return window.appprops=this.props,i.a.createElement("div",{className:"App vw-100 vh-100 flex justify-center items-center"},i.a.createElement(w,null))}}]),t}(a.Component),T=n(1),C=function(){function e(){Object(c.a)(this,e),this.route="title"}return Object(l.a)(e,[{key:"setRoute",value:function(e){this.route=e}},{key:"title",get:function(){return i.a.createElement("div",{className:"Title tc f1-ns f2 fw6 b"},"Dubstep That Tile")}},{key:"loginHeader",get:function(){return i.a.createElement("header",{className:"LoginHeader pr2 mb4 tr"},i.a.createElement("button",{className:"p2 mr1 dim bw0 f4-ns f5 bg-color--empty outline--none",onClick:function(){_.setRoute("login")}},"Login"),i.a.createElement("button",{className:"p2 dim f4-ns f5 bw0 bg-color--empty outline--none",onClick:function(){_.setRoute("register")}},"Register"))}},{key:"backButton",get:function(){return i.a.createElement("div",{className:"BackButton flex justify-center"},i.a.createElement("button",{className:"mt5 bg-color--empty outline--none bw0 dim f4-ns f5",onClick:function(){_.setRoute("title")}},"Back"))}}]),e}();Object(T.h)(C,{route:T.m});var _=window.ui=new C,R=_;Object(T.d)(function(){console.log("UI","Route",_.route)});var x=function e(){Object(c.a)(this,e),this.score_data=[{},{},{}]};Object(T.h)(x,{data:T.m});var G=new x,B=G;Object(T.d)(function(){console.log("New data:",G.data)});var S=n(11),A=n.n(S),L=n(12),P=n.n(L),M=n(13),K=n.n(M),D={id:1,svg:A.a},F={id:2,svg:P.a},H={id:0,svg:K.a},I=function(){function e(){Object(c.a)(this,e),this.startTime=0,this.currentTime=0,this.isRunning=!1,this.lastTime=0}return Object(l.a)(e,[{key:"start",value:function(){this.startTime=(new Date).getTime(),this.isRunning=!0,this.measure()}},{key:"measure",value:function(){var e=this;this.isRunning&&(this.currentTime=(new Date).getTime(),setTimeout(function(){return e.measure()},10))}},{key:"stop",value:function(){this.isRunning=!1}},{key:"reset",value:function(){this.lastTime=this.elapsed,this.startTime=0,this.currentTime=0}},{key:"elapsed",get:function(){return this.currentTime-this.startTime}},{key:"displayElapsed",get:function(){return(this.elapsed/1e3).toFixed(3)}},{key:"displayLastTime",get:function(){return(this.lastTime/1e3).toFixed(3)}}]),e}(),W=I;Object(T.h)(I,{currentTime:T.m,startTime:T.m,displayElapsed:T.e});var z=function(){function e(){Object(c.a)(this,e),this.tiles=[],this.filteredTiles=[],this.tileOffset=0,this.initializeTiles(),this.gameStarted=!1,this.wonGame=!1,this.timer=new W}return Object(l.a)(e,[{key:"getRandomNum",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"initializeTiles",value:function(){for(var e=0;e<54;e++)for(var t=this.getRandomNum(1,4),n=!1,a=0,i=0;i<4;i++){a++;var s=D.id;0===e||49===e?s=H.id:!n&&a===t&&e<49&&(s=F.id,n=!0),this.tiles[i+4*e]=s}}},{key:"handleKeyPress",value:function(e){97!==e&&115!==e&&100!==e&&102!==e||(this.gameStarted||(this.timer.start(),this.gameStarted=!0),this.checkLoseKey(e)?this.lose():(this.tileOffset++,50===this.tileOffset&&this.win()))}},{key:"handleClick",value:function(e){this.gameStarted||(this.timer.start(),this.gameStarted=!0),this.checkLoseMouse(e.target.id)?this.lose():(this.tileOffset++,50===this.tileOffset&&this.win())}},{key:"checkLoseMouse",value:function(e){return"white-12"===e||"white-13"===e||"white-14"===e||"white-15"===e}},{key:"checkLoseKey",value:function(e){switch(e){case 97:return this.filteredTiles[12]===D.id;case 115:return this.filteredTiles[13]===D.id;case 100:return this.filteredTiles[14]===D.id;case 102:return this.filteredTiles[15]===D.id;default:console.log("Key pressed",e)}}},{key:"win",value:function(){this.resetGame(),R.setRoute("gameover"),this.wonGame=!0}},{key:"lose",value:function(){this.resetGame(),R.setRoute("gameover")}},{key:"resetGame",value:function(){this.timer.stop(),this.timer.reset(),this.tileOffset=0,this.gameStarted=!1,this.wonGame=!1}},{key:"filterTiles",get:function(){var e=this;return this.filteredTiles=this.tiles.filter(function(t,n){var a=4*e.tileOffset,i=4*(e.tileOffset+4)-1;return n>=a&&n<=i}),this.filteredTiles.reverse().map(function(t,n){switch(t){case D.id:return i.a.createElement("img",{key:n,id:"white-"+n,className:"Tile",src:D.svg,onClick:function(t){e.handleClick(t)},alt:"white"});case F.id:return i.a.createElement("img",{key:n,id:"black-"+n,className:"Tile",src:F.svg,onClick:function(t){e.handleClick(t)},alt:"black"});default:return i.a.createElement("img",{key:n,id:"yellow-"+n,className:"Tile",src:H.svg,onClick:function(t){e.handleClick(t)},alt:"yellow"})}})}},{key:"time",get:function(){return"".concat(this.timer.displayElapsed,"s")}},{key:"lastTime",get:function(){return this.timer.displayLastTime}},{key:"tilesPerSecond",get:function(){return(this.lastTime/50).toFixed(3)}}]),e}();Object(T.h)(z,{tileOffset:T.m,filterTiles:T.e});var J=window.level=new z,U=J;Object(T.d)(function(){console.log("Level","tileoffset",J.tileOffset)});var V=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={ui:R,domain:B,level:U},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),t}(a.Component);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(V,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.cf64883e.chunk.js.map