(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(284)},284:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(45),c=n.n(o),i=n(285),l=n(137),u=n.n(l),s=n(35),m=n(59),d=n(60),f=n(65),p=n(61),g=n(66),y={START:"start",DOING:"doing",DONE:"done",END:"end"},E="START_GAME",v="SELECT_PLAYER",h="SAVE_SCORE",b="RESET_GAME",O={PRIMARY:"#00d1b2",WARNING:"#ffdd57",DANGER:"#ff3860",INFO:"#209cee",SUCCESS:"#23d160"},w="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&category=",j=[{id:0,name:"Tess",description:"This is Tess, a travel & geography nerd",src:"img/female-glasses.png",category:22,score:5},{id:1,name:"Mingus",description:"This is Mingus, number one boardgame fan",src:"img/guy-beard.png",category:16,score:6},{id:2,name:"Borat",description:"This is Borat, he knows everything about movies",src:"img/borat.png",category:11,score:7}],S={activePlayer:0,players:j||[]},k=function(e,t){switch(t.type){case E:return Object(s.a)({},e,{status:y.DOING});case v:return Object(s.a)({},e,{activePlayer:t.payload});case h:var n=e.players.map(function(n){return n.id===e.activePlayer?Object(s.a)({},n,{myScore:t.payload,status:y.DONE}):n}),r=n.filter(function(e){return e.status===y.DONE&&e.myScore>e.score}).length===n.length?y.DONE:y.START;return Object(s.a)({},e,{status:r,players:n});case b:return Object(s.a)({},e,{activePlayer:0,status:y.START,players:j});default:return e}},A=function(e){return{startGame:function(){return e({type:E})},selectPlayer:function(t){return e({type:v,payload:t})},saveScore:function(t){return e({type:h,payload:t})},resetGame:function(){return e({type:b})}}},C=a.a.createContext(),P=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).state=Object(s.a)({},S,{dispatch:function(e){n.setState(function(t){return k(t,e)})},actions:{}}),n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.setState({actions:A(this.state.dispatch)})}},{key:"render",value:function(){var e=this.state,t=this.props.children;return a.a.createElement(C.Provider,{value:e},t)}}]),t}(r.Component),N=C;P.defaultProps={children:null};var T=n(12),x=n(13),z=n(8);function D(){var e=Object(T.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n"]);return D=function(){return e},e}var Q=Object(x.a)(z.Hero).attrs({color:"primary"})(D()),R=function(){return a.a.createElement(Q,null,a.a.createElement(z.Container,null,a.a.createElement(z.Heading,{size:2,align:"center"},"Quizzer")))},G=R;function q(){var e=Object(T.a)([""]);return q=function(){return e},e}R.defaultProps={};var I=Object(x.a)(z.Hero).attrs({color:"dark"})(q()),H=function(){return a.a.createElement(I,null,a.a.createElement(z.Container,null,"Footer"))},F=H;H.defaultProps={};var M=n(288),_=n(287),V=n(286),Y=function(e){return e&&e.players?e.players.find(function(t){return e.activePlayer===t.id}):null},B=function(e){return e?e.status===y.DONE?e.score<e.myScore?"info":"danger":"warning":null},L=function(e){return Math.floor(Math.random()*e)},W=n(67);function U(){var e=Object(T.a)(["\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  padding: 10px;\n  cursor: pointer;\n  border: solid 4px ",";\n  background-color: ",";\n"]);return U=function(){return e},e}var J=x.a.img(U(),function(e){return e.isActivePlayer?"black":O[e.color.toUpperCase()]},function(e){return O[e.color.toUpperCase()]}),$=function(e){var t=e.player,n=e.isActivePlayer,r=Object(W.a)(e,["player","isActivePlayer"]);return a.a.createElement(J,Object.assign({},r,{src:t.src,isActivePlayer:n,color:B(t)||""}))},K=$;function X(){var e=Object(T.a)(["\n"]);return X=function(){return e},e}$.defaultProps={isActivePlayer:!1};var Z=Object(x.a)(z.Button).attrs({color:"primary"})(X()),ee=function(e){var t=e.onClick,n=e.children,r=Object(W.a)(e,["onClick","children"]);return a.a.createElement(Z,Object.assign({},r,{onClick:t}),n)},te=ee;ee.defaultProps={onClick:function(){}};var ne=n(64),re=n(41),ae=function(e){var t=e.player,n=t.name||"?",r=t.myScore||0;return a.a.createElement(re.VictoryChart,{height:120,width:240,theme:re.VictoryTheme.material,domainPadding:{y:30},animate:{duration:500,onLoad:{duration:1e3}},padding:{top:10,bottom:30,left:60,right:30}},a.a.createElement(re.VictoryAxis,{tickValues:Object(ne.a)(Array(11).keys()),domain:[0,10]}),a.a.createElement(re.VictoryAxis,{dependentAxis:!0}),a.a.createElement(re.VictoryBar,{horizontal:!0,style:{data:{fill:function(e){return"you"===e.x?O.INFO:O.WARNING}}},barWidth:20,data:[{x:n,y:t.score},{x:"you",y:r}]}))},oe=ae;function ce(){var e=Object(T.a)(["\n  margin-bottom: ","rem;\n"]);return ce=function(){return e},e}function ie(){var e=Object(T.a)(["\n  width: 100%;\n  max-width: 320px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n"]);return ie=function(){return e},e}function le(){var e=Object(T.a)([""]);return le=function(){return e},e}function ue(){var e=Object(T.a)(["\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  background-color: white;\n  max-width: 400px;\n"]);return ue=function(){return e},e}ae.defaultProps={player:{name:"?"}};var se=Object(x.a)(z.Section).attrs({renderAs:"article"})(ue()),me=Object(x.a)(z.Tile).attrs({kind:"child",notification:!0})(le()),de=x.a.div(ie()),fe=x.a.div(ce(),function(e){return e.size}),pe=function(){return a.a.createElement(N.Consumer,null,function(e){var t=Y(e);return t?a.a.createElement(r.Fragment,null,e.status===y.DOING&&a.a.createElement(V.a,{to:{pathname:"/question"}}),a.a.createElement(z.Section,null,e.status===y.DONE&&a.a.createElement(r.Fragment,null,a.a.createElement(z.Tile,{notification:!0,color:"success"},a.a.createElement(z.Heading,{size:4},"Congratulations! You won all challenges!")),a.a.createElement(te,{onClick:e.actions.resetGame},"Reset game"),a.a.createElement(fe,{size:2})),a.a.createElement(r.Fragment,null,a.a.createElement(de,null,function(e){return e.players.map(function(t){return a.a.createElement(K,{key:t.id,player:t,title:t.name,isActivePlayer:e.activePlayer===t.id,onClick:function(){return e.actions.selectPlayer(t.id)}})})}(e)),a.a.createElement(me,{color:B(t)},a.a.createElement(z.Heading,{size:5},t.description||""),a.a.createElement(z.Element,null,a.a.createElement("strong",null,"Status:\xa0"),t.status===y.DONE?t.score<t.myScore?"You have defeated ".concat(t.name,"!"):"You lost against ".concat(t.name,". Try again!"):"You have not challenged ".concat(t.name," yet")),a.a.createElement(se,null,a.a.createElement(oe,{player:t})),a.a.createElement(te,{onClick:e.actions.startGame,disabled:t.status===y.DONE&&t.myScore>t.score},"Challenge ",t.name||"?"))))):null})},ge=pe;function ye(){var e=Object(T.a)(["\n  background-color: white !important;\n  ","\n  ","\n  cursor: ",";\n  transition: background-color 200ms;\n  &:hover {\n    ",";\n  }\n"]);return ye=function(){return e},e}function Ee(){var e=Object(T.a)([""]);return Ee=function(){return e},e}function ve(){var e=Object(T.a)(["\n  margin-bottom: 1rem;\n"]);return ve=function(){return e},e}pe.defaultProps={game:{players:[]}};var he=Object(x.a)(z.Hero)(ve());he.displayName="Hero";var be=Object(x.a)(z.Tile).attrs({notification:!0,color:"warning",kind:"child",renderAs:"div"})(Ee());be.displayName="Question";var Oe=Object(x.a)(z.Tile).attrs({notification:!0,renderAs:"div"})(ye(),function(e){return e.selectedanswer&&"background-color: ".concat(O.DANGER," !important;")},function(e){return e.correctanswer&&"background-color: ".concat(O.SUCCESS," !important;")},function(e){return e.answered?"normal":"pointer"},function(e){return!e.answered&&"background-color: #fdfdfd !important"});Oe.displayName="Answer";var we=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).selectAnswer=function(e,t){var r=n.state.answered,a=e===t?1:0;r||n.setState(function(t){return{answered:e,score:t.score+a}})},n.nextQuestion=function(){if(9===n.state.activeQuestion){var e=n.state.score;n.props.game.actions.saveScore(e)}else{var t=L(4);n.setState(function(e){return{activeQuestion:e.activeQuestion+1,answered:!1,correctAnswer:t}})}},n.loadQuestions=function(e){n.props.game.status===y.DOING&&(n.setState({loading:!0}),fetch("".concat(w).concat(e)).then(function(e){return e.json()}).then(function(e){if(n.setState({loading:!1}),e.response_code>0)n.setState({error:!0});else{var t=L(4);n.setState({questions:e.results,correctAnswer:t,error:!1})}}).catch(function(e){n.setState({error:!0}),console.warning("got error:",e)}))},n.renderQuestion=function(){var e=n.state,t=e.answered,o=e.questions,c=e.activeQuestion,i=e.correctAnswer,l=o[c];if(l){var u=Object(ne.a)(l.incorrect_answers);return u.splice(i,0,l.correct_answer),a.a.createElement(r.Fragment,null,a.a.createElement(z.Heading,{size:5},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:l.question}})),u.map(function(e,r){return a.a.createElement(Oe,{key:r,answered:t||void 0,selectedanswer:t&&t===r+1?1:void 0,correctanswer:t&&r===i?1:void 0,onClick:function(){return n.selectAnswer(r+1,i+1)}},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}))}))}return null},n.state={activeQuestion:0,correctAnswer:null,questions:[],answered:!1,loading:!1,error:!1,score:0},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Y(this.props.game),t=e?e.category:null;this.loadQuestions(t)}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.activeQuestion,o=e.error,c=e.answered,i=this.props.game,l=Y(i),u=l?l.category:null;return a.a.createElement(z.Section,null,o?a.a.createElement(he,{notification:!0,color:"danger"},"Error: couldn't load questions."):a.a.createElement(r.Fragment,null,i.status===y.DOING?a.a.createElement(r.Fragment,null,t?a.a.createElement(r.Fragment,null,a.a.createElement(z.Loader,null),"\xa0loading..."):a.a.createElement(r.Fragment,null,a.a.createElement(he,null,a.a.createElement(z.Heading,{size:4},"Category: ",function(e){return{5:"boardgames",7:"movies",22:"geography"}[e]||"unknown"}(u)),a.a.createElement(z.Heading,{subtitle:!0,size:5},"Question: ",n+1)),a.a.createElement(be,null,this.renderQuestion(),a.a.createElement(te,{onClick:this.nextQuestion,disabled:!c},9===n?"Return":"Next question")))):a.a.createElement(V.a,{to:{pathname:"/",state:{message:"You must first select a player to take a quiz"}}})))}}]),t}(r.Component),je=we;we.defaultProps={game:{status:y.START,activePlayer:0}};var Se=function(){return a.a.createElement(N.Consumer,null,function(e){return a.a.createElement(M.a,null,a.a.createElement(_.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(ge,e)}}),a.a.createElement(_.a,{path:"/question",render:function(t){return a.a.createElement(je,Object.assign({},t,{game:e}))}}),a.a.createElement(V.a,{to:"/"}))})},ke=Se;Se.defaultProps={location:{state:{message:null}}};n(281);function Ae(){var e=Object(T.a)([""]);return Ae=function(){return e},e}var Ce=Object(x.a)(z.Container)(Ae()),Pe=function(){return a.a.createElement(P,null,a.a.createElement(u.a,{title:"Quizzer",meta:[{name:"description",content:"quizzer is a quiz game"},{name:"keywords",content:"quiz, game, react"}]}),a.a.createElement(G,null),a.a.createElement(Ce,null,a.a.createElement(ke,null)),a.a.createElement(F,null))},Ne=Pe;Pe.defaultProps={location:{state:{message:null}}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(i.a,{basename:"/quizzer-web"},a.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,2,1]]]);
//# sourceMappingURL=main.2a768d79.chunk.js.map