(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{136:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(25),o=(n(44),n(3)),i=n(6),s=n(5),c=n(2),l=n(4),u=n(20),d=n(12),p=(n(45),n(19)),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.createElement("nav",{id:"navigationBar"},r.createElement("button",{onClick:function(){return history.back()}},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon"},r.createElement("use",{xlinkHref:"".concat(p,"#nav-back")})),r.createElement("span",null,"Back")),r.createElement("small",null,this.props.name),r.createElement("div",{className:"hidden"}))}}]),t}(r.Component),m=n(13),b=n.n(m),f=n(18),g=(n(48),n(19)),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).slider=r.createRef(),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.historyLength,a=t.currentTime,o=t.onCurrentTimeChange;return console.log("historyLength",n),r.createElement("section",{className:"component-slider"},r.createElement("button",{disabled:!this.props.enabled||a<=0,onClick:function(){return o(a-1)}},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon"},r.createElement("use",{xlinkHref:"".concat(g,"#history-back")}))),r.createElement("section",{className:"wrapper"},r.createElement("input",{ref:this.slider,type:"range",min:0,max:n,value:a,disabled:!this.props.enabled,onChange:function(){return o(e.getSliderValue())}})),r.createElement("button",{disabled:!this.props.enabled||a>=n,onClick:function(){return o(a+1)}},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon"},r.createElement("use",{xlinkHref:"".concat(g,"#history-forward")}))))}},{key:"getSliderValue",value:function(){return this.slider.current?parseInt(this.slider.current.value,10):0}}]),t}(r.Component),v=n(21),k=(n(49),n(38)),S=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).name="SatVisAssertionError",n}return Object(l.a)(t,e),t}(Object(k.a)(Error));function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e)throw new S("Assertion failed: "+(t||""))}var x=n(50),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={metaPressed:!1},n.markers=new Set,n.network=null,n.networkNodes=new v.DataSet([]),n.networkEdges=new v.DataSet([]),n.graphContainer=r.createRef(),n.dragStartEvent=null,n.cachedChangeNodesEvent=void 0,n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.generateNetwork(),this.updateNetwork(!1,this.props.layout),this.network.fit()}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(e){this.updateNetwork(!1,this.props.layout)}},{key:"render",value:function(){return r.createElement("section",{className:"component-graph",ref:this.graphContainer},r.createElement("canvas",null))}},{key:"generateNetwork",value:function(){var e=this;console.log("I am Graph. I receive:",this.props),E(this.graphContainer.current),E(!this.network),this.network=new v.Network(this.graphContainer.current,{nodes:this.networkNodes,edges:this.networkEdges},{physics:!1,interaction:{multiselect:!1},layout:{hierarchical:{direction:"UD",sortMethod:"directed"}}}),this.network.on("click",function(){var t=Object(f.a)(b.a.mark(function t(n){var r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.nodes.length>0?(E(1===n.nodes.length),r=n.nodes[0],console.log("clickedNodeId",e.props.tree[r]),e.props.onNodeSelectionChange(n.nodes)):e.props.onNodeSelectionChange([]);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"updateNetwork",value:function(e,t){if("SatVis"==t)this.visLayout(this.props.tree);else if("PobVis"==t){var n=this.PobVisLayout();this.visLayout(n)}}},{key:"PobVisLayout",value:function(){var e=JSON.parse(JSON.stringify(this.props.tree)),t=-100;this.props.nodeSelection.length>0&&(t=e[this.props.nodeSelection[0]].exprID),console.log("currentNodeExprID:",t);new Array,new Array;for(var n in e){var r=e[n];if("EType.EXP_POB"==r.event_type){var a=e[r.parent],o=a.children,i=!1,s=void 0,c=!0,l=!1,u=void 0;try{for(var d,p=o[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=e[d.value];if(h.nodeID!=r.nodeID&&h.exprID==r.exprID){i=!0,s=h;break}}}catch(w){l=!0,u=w}finally{try{c||null==p.return||p.return()}finally{if(l)throw u}}if(i){r.to_be_vis=!1;var m=!0,b=!1,f=void 0;try{for(var g,y=r.children[Symbol.iterator]();!(m=(g=y.next()).done);m=!0){var v=g.value;e[v].parent=s.nodeID,s.children.push(v)}}catch(w){b=!0,f=w}finally{try{m||null==y.return||y.return()}finally{if(b)throw f}}var k=new Array,S=!0,E=!1,x=void 0;try{for(var O,N=o[Symbol.iterator]();!(S=(O=N.next()).done);S=!0){var C=O.value;C!=r.nodeID&&k.push(C)}}catch(w){E=!0,x=w}finally{try{S||null==N.return||N.return()}finally{if(E)throw x}}a.children=k}}else r.to_be_vis=!1}return e}},{key:"visLayout",value:function(e){var t=-100;this.props.nodeSelection.length>0&&(t=e[this.props.nodeSelection[0]].exprID),console.log("currentNodeExprID:",t);var n=new Array,r=new Array,a=0;for(var o in e){var i=e[o];if(i.to_be_vis){var s=void 0;s=i.exprID==t?this.toVisNode(i,"sameExprID"):i.nodeID>this.props.currentTime?this.toVisNode(i,"activated"):this.toVisNode(i,"passive"),n.push(s);var c=this.toVisEdge(a,i.parent,i.nodeID,!1);r.push(c),a++}}this.networkNodes.clear(),this.networkNodes.add(n),this.networkEdges.clear(),this.networkEdges.add(r)}},{key:"toVisNode",value:function(e,t){var n=x[t],r=this.props.nodeSelection.includes(e.nodeID);return{id:e.nodeID,labelHighlightBold:!1,shape:"box",color:{border:r?n.markedStyle.border:n.defaultStyle.border,background:r?n.markedStyle.background:n.defaultStyle.background,highlight:{border:n.highlightStyle.border,background:n.highlightStyle.background}}}}},{key:"toVisEdge",value:function(e,t,n,r){return{id:e,arrows:"to",color:{color:"#dddddd",highlight:"#f8cfc1"},from:t,to:n,smooth:!1,hidden:r}}}]),t}(r.Component),N=n(34);n.n(N).a.setAppElement("#root");var C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.createElement("main",null,r.createElement(O,{tree:this.props.tree,onNodeSelectionChange:this.props.onNodeSelectionChange,nodeSelection:this.props.nodeSelection,currentTime:this.props.currentTime,layout:this.props.layout,PobLemmasMap:this.props.PobLemmasMap}),r.createElement(y,{historyLength:this.props.historyLength,currentTime:this.props.currentTime,onCurrentTimeChange:this.props.onCurrentTimeChange,enabled:!0}))}}]),t}(r.Component),w=(n(61),n(62),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).keep=!1,n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="type:"+this.props.node.event_type+" level:"+this.props.node.level,t=new Array;if("EType.EXP_POB"==this.props.node.event_type&&(t.push(r.createElement("h2",{key:"lemma-title"}," Lemmas summerization ")),this.props.node.exprID in this.props.PobLemmasMap)){var n=this.props.PobLemmasMap[this.props.node.exprID],a=!0,o=!1,i=void 0;try{for(var s,c=n[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=s.value;t.push(r.createElement("h2",{key:"lemma-header-"+l[0]},"ExprID: ",l[0],", From: ",l[1]," to ",l[2])),t.push(r.createElement("pre",{key:"lemma-expr-"+l[0]},this.props.ExprMap[l[0]]))}}catch(u){o=!0,i=u}finally{try{a||null==c.return||c.return()}finally{if(o)throw i}}}return r.createElement("section",{className:"component-node-details details"},r.createElement("article",null,r.createElement("h2",null,"Node ",r.createElement("strong",null,this.props.node.nodeID,", "),"Expr ",r.createElement("strong",null," ",this.props.node.exprID," "),", Parent ",r.createElement("strong",null," ",this.props.node.pobID,"  ")),r.createElement("h3",null,e),r.createElement("pre",null,this.props.node.expr)),r.createElement("article",null,t))}}]),t}(r.Component)),j=n(19),I=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;if(1===this.props.nodeSelection.length){var t=this.props.tree[this.props.nodeSelection[0]];e=r.createElement(w,{node:t,PobLemmasMap:this.props.PobLemmasMap,ExprMap:this.props.ExprMap,layout:this.props.layout})}else e=r.createElement("section",{className:"component-node-details overview"},r.createElement("small",{id:"nodeInfo"}," ",r.createElement("strong",null,"".concat(this.props.nodeSelection.length," nodes")," ")," selected"));return r.createElement("aside",null,r.createElement("article",null,r.createElement("section",{className:"component-node-menu"},r.createElement("button",{title:"SatVis",onClick:this.props.SatVisLayout},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon big"},r.createElement("use",{xlinkHref:"".concat(j,"#node-parents")}))),r.createElement("button",{title:"PobVis",onClick:this.props.PobVisLayout},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon big"},r.createElement("use",{xlinkHref:"".concat(j,"#node-children")}))))),e)}}]),t}(r.Component),D=(n(63),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={state:"waiting",trees:[],message:"",nodeSelection:[],currentTime:0,layout:"SatVis",PobLemmasMap:{},ExprMap:{}},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t,n=this.state,a=n.state,o=n.trees,i=(n.message,n.nodeSelection),s=n.currentTime,c=n.layout,l=n.PobLemmasMap,u=n.ExprMap;if("loaded"===a||"loaded select"===a){E(o.length>0),e=o[o.length-1];var d=Object.keys(e).length;t=r.createElement(C,{tree:e,onNodeSelectionChange:this.updateNodeSelection.bind(this),nodeSelection:i,historyLength:d,currentTime:s,onCurrentTimeChange:this.updateCurrentTime.bind(this),layout:c,PobLemmasMap:l})}else t=r.createElement("main",null,r.createElement("section",{className:"slider-placeholder"}));return r.createElement("div",{className:"app"},t,r.createElement(I,{tree:e,nodeSelection:i,onUpdateNodeSelection:this.updateNodeSelection.bind(this),SatVisLayout:this.setSatVisLayout.bind(this),PobVisLayout:this.setPobVisLayout.bind(this),PobLemmasMap:l,ExprMap:u,layout:c}))}},{key:"componentDidMount",value:function(){var e=Object(f.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runVampire(this.props.problem,this.props.spacerUserOptions,this.props.mode);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"runVampire",value:function(){var e=Object(f.a)(b.a.mark(function e(t,n,r){var a,o,i,s,c,l,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({state:"waiting",message:"Waiting for Vampire..."}),e.next=3,fetch("manualcs"===r?"http://localhost:5000/spacer/startmanualcs":"http://localhost:5000/spacer/start",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({file:t,spacerUserOptions:n})});case 3:return a=e.sent,e.prev=4,e.next=7,a.json();case 7:o=e.sent,console.log("backend response:",o),"success"===o.status?(i=o.nodes_list,s="manualcs"==r&&"running"===o.spacerState?"loaded select":"loaded",c=this.buildPobLemmasMap(i),l=this.buildExprMap(i),this.setState({trees:[i],message:"blah",state:s,PobLemmasMap:c,ExprMap:l})):(E("error"===o.status),E(void 0!==(u=o.message)&&null!==u),this.setState({state:"error",message:u})),e.next=17;break;case 12:if(e.prev=12,e.t0=e.catch(4),"SatVisAssertionError"!==e.t0.name){e.next=16;break}throw e.t0;case 16:this.setState({state:"error",message:"Error: ".concat(e.t0.message)});case 17:case"end":return e.stop()}},e,this,[[4,12]])}));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"buildPobLemmasMap",value:function(e){var t=new Map;for(var n in e){var r=e[n];t[r.exprID]=r.expr}var a={};for(var o in e){var i=e[o];if("EType.ADD_LEM"==i.event_type){var s=i.exprID,c=i.level,l=i.pobID;l in a||(a[l]=new Array);var u=!1,d=!0,p=!1,h=void 0;try{for(var m,b=a[l][Symbol.iterator]();!(d=(m=b.next()).done);d=!0){var f=m.value;if(f[0]==s){u=!0;var g=f[1];(c>f[2]||"oo"==c)&&(f[2]=c),c<g&&(f[1]=c);break}}}catch(y){p=!0,h=y}finally{try{d||null==b.return||b.return()}finally{if(p)throw h}}u||a[i.pobID].push([s,c,c])}}return a}},{key:"buildExprMap",value:function(e){var t=new Map;for(var n in e){var r=e[n];t[r.exprID]=r.expr}return t}},{key:"updateNodeSelection",value:function(e){this.setState({nodeSelection:e})}},{key:"updateCurrentTime",value:function(e){var t=this.state.trees;E(t.length>0);t[t.length-1];console.log(e),this.setState({currentTime:e})}},{key:"setPobVisLayout",value:function(){this.setState({layout:"PobVis"})}},{key:"setSatVisLayout",value:function(){this.setState({layout:"SatVis"})}}]),t}(r.Component)),P=(n(64),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.createElement("div",{id:"appWrapper"},r.createElement(h,{name:this.props.name}),r.createElement(D,{problem:this.props.problem,spacerUserOptions:this.props.spacerUserOptions,mode:this.props.mode,hideBracketsAssoc:this.props.hideBracketsAssoc,nonStrictForNegatedStrictInequalities:this.props.nonStrictForNegatedStrictInequalities,orientClauses:this.props.orientClauses}))}}]),t}(r.Component)),L=(n(65),n(37)),A=n(19),V=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).isChromeOrFirefox=navigator.userAgent.indexOf("Chrome")>-1||navigator.userAgent.indexOf("Firefox")>-1,n.fileUpload=r.createRef(),n.monacoDiv=r.createRef(),n.monaco=null,n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.isChromeOrFirefox&&(this.monaco=L.a.create(this.monacoDiv.current,{lineNumbers:"off",roundedSelection:!1,scrollBeyondLastLine:!1,scrollBeyondLastColumn:0,minimap:{enabled:!1},renderLineHighlight:"none",hideCursorInOverviewRuler:!0,links:!1,overviewRulerBorder:!1,automaticLayout:!0,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"wordWrapColumn"}),this.monaco.setValue(this.props.problem),this.monaco.getModel().onDidChangeContent(function(){e.props.onChangeProblem(e.monaco.getModel().getValue())}))}},{key:"componentDidUpdate",value:function(e){E(this.isChromeOrFirefox),this.props.problem!==e.problem&&this.monaco.setValue(this.props.problem)}},{key:"render",value:function(){return this.isChromeOrFirefox?r.createElement("section",{className:"component-menu"},r.createElement("h1",null,"Spacer Visualization"),r.createElement("section",{className:"editor"},r.createElement("div",{className:"editor-spacer"},r.createElement("main",null,r.createElement("div",{className:"headline-wrapper"},r.createElement("h2",null,"Input"),r.createElement("small",{className:"file-name"},this.props.problemName),r.createElement("button",{title:"Pick a new file",onClick:this.chooseFile.bind(this)},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon big"},r.createElement("use",{xlinkHref:"".concat(A,"#graph-upload")})))),r.createElement("input",{ref:this.fileUpload,type:"file",onChange:this.uploadEncoding.bind(this)}),r.createElement("div",{ref:this.monacoDiv,className:"monaco"})),r.createElement("aside",null,r.createElement("fieldset",{className:"options-card"},r.createElement("h3",null,"Z3 Options"),r.createElement("ul",null,r.createElement("li",null,r.createElement("label",{htmlFor:"userOptions",className:"form-label"},"Additional Spacer options"),r.createElement("input",{id:"userOptions",type:"text",onChange:this.changeSpacerUserOptions.bind(this),value:this.props.spacerUserOptions}))))))),r.createElement("section",{className:"run-menu"},r.createElement(u.b,{to:"/proof/",className:"fake-button"},"Solve"))):r.createElement("section",{className:"unsupported-message"},r.createElement("svg",{viewBox:"0 0 24 24",className:"icon"},r.createElement("use",{xlinkHref:"".concat(A,"#alert-triangle")})),r.createElement("span",null,"Your current browser is not supported. Please use Chrome or Firefox!"))}},{key:"chooseFile",value:function(){this.fileUpload.current&&this.fileUpload.current.click()}},{key:"uploadEncoding",value:function(e){var t=this;if(null!==e.target.files&&e.target.files.length>0){var n=e.target.files[0],r=new FileReader;r.onloadend=function(){var e=r.result?r.result:"";t.props.onChangeProblem(e),t.props.onChangeProblemName(n.name),n.name.endsWith(".smt")||n.name.endsWith(".smtlib")||n.name.endsWith(".smt2")||n.name.endsWith(".smtlib2")?t.props.onChangeInputSyntax("smtlib"):n.name.endsWith(".tptp")&&t.props.onChangeInputSyntax("tptp")},r.readAsText(n)}}},{key:"changeSpacerUserOptions",value:function(e){var t=e.target.value;this.props.onChangeSpacerUserOptions(t)}},{key:"changeTextArea",value:function(e){var t=e.target.value;this.props.onChangeProblem(t)}},{key:"changeHideBracketsAssoc",value:function(e){var t=e.target.checked;this.props.onChangeHideBracketsAssoc(t)}},{key:"changeNonStrictForNegatedStrictInequalities",value:function(e){var t=e.target.checked;this.props.onChangeNonStrictForNegatedStrictInequalities(t)}},{key:"changeInputSyntax",value:function(e){var t=e.target.value;this.props.onChangeInputSyntax(t)}},{key:"changeOrientClauses",value:function(e){var t=e.target.checked;this.props.onChangeOrientClauses(t)}}]),t}(r.Component),M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={problem:"",problemName:"",inputSyntax:"smtlib",spacerUserOptions:"fp.spacer.max_level=4",hideBracketsAssoc:!0,nonStrictForNegatedStrictInequalities:!0,orientClauses:!0},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.createElement(u.a,null,r.createElement(d.a,{path:"/",exact:!0,render:function(){return r.createElement(V,{problem:e.state.problem,problemName:e.state.problemName,inputSyntax:e.state.inputSyntax,spacerUserOptions:e.state.spacerUserOptions,hideBracketsAssoc:e.state.hideBracketsAssoc,nonStrictForNegatedStrictInequalities:e.state.nonStrictForNegatedStrictInequalities,orientClauses:e.state.orientClauses,onChangeProblem:e.changeProblem.bind(e),onChangeProblemName:e.changeProblemName.bind(e),onChangeInputSyntax:e.changeInputSyntax.bind(e),onChangeSpacerUserOptions:e.changeSpacerUserOptions.bind(e),onChangeHideBracketsAssoc:e.changeHideBracketsAssoc.bind(e),onChangeNonStrictForNegatedStrictInequalities:e.changeNonStrictForNegatedStrictInequalities.bind(e),onChangeOrientClauses:e.changeOrientClauses.bind(e)})}}),r.createElement(d.a,{path:"/proof/",render:function(){return e.appComponent("proof")}}),r.createElement(d.a,{path:"/saturation/",render:function(){return e.appComponent("saturation")}}),r.createElement(d.a,{path:"/manualcs/",render:function(){return e.appComponent("manualcs")}}))}},{key:"appComponent",value:function(e){"smtlib"===this.state.inputSyntax||this.state.inputSyntax;var t="".concat(this.state.spacerUserOptions);return r.createElement(P,{name:this.state.problemName,mode:e,problem:this.state.problem,spacerUserOptions:t,hideBracketsAssoc:this.state.hideBracketsAssoc,nonStrictForNegatedStrictInequalities:this.state.nonStrictForNegatedStrictInequalities,orientClauses:this.state.orientClauses})}},{key:"changeProblem",value:function(e){this.setState({problem:e})}},{key:"changeProblemName",value:function(e){this.setState({problemName:e})}},{key:"changeSpacerUserOptions",value:function(e){this.setState({spacerUserOptions:e})}},{key:"changeHideBracketsAssoc",value:function(e){this.setState({hideBracketsAssoc:e})}},{key:"changeNonStrictForNegatedStrictInequalities",value:function(e){this.setState({nonStrictForNegatedStrictInequalities:e})}},{key:"changeInputSyntax",value:function(e){this.setState({inputSyntax:e})}},{key:"changeOrientClauses",value:function(e){this.setState({orientClauses:e})}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.render(r.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},19:function(e,t,n){e.exports=n.p+"static/media/all.cd5d2510.svg"},39:function(e,t,n){e.exports=n(136)},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e){e.exports={hidden:{hidden:!0,markedStyle:{border:"#ffffff00",background:"#ffffff00"},highlightStyle:{border:"#ffffff00",background:"#ffffff00"},shape:"box",text:"#ffffff00",defaultStyle:{border:"#ffffff00",background:"#ffffff00"}},"preprocessing-deleted":{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#8cd1c9",background:"#abe0d1"}},preprocessing:{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#8cd1c9",background:"#abe0d1"}},conjecture:{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#009988",background:"#44bb99"}},"theory-axiom-deleted":{hidden:!1,markedStyle:{border:"#f8adc8",background:"#ffdde3"},highlightStyle:{border:"#f8cfc1",background:"#f8cfc1"},shape:"box",text:"#999999",defaultStyle:{border:"#b4c8dd",background:"#c8ddf1"}},"theory-axiom":{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#4477aa",background:"#77aadd"}},deleted:{hidden:!1,markedStyle:{border:"#f8adc8",background:"#ffdde3"},highlightStyle:{border:"#f8cfc1",background:"#f8cfc1"},shape:"box",text:"#999999",defaultStyle:{border:"#f1f1f1",background:"#f8f8f8"}},passive:{hidden:!1,markedStyle:{border:"#f8adc8",background:"#ffdde3"},highlightStyle:{border:"#f8cfc1",background:"#f8cfc1"},shape:"box",text:"#000000",defaultStyle:{border:"#FF3232",background:"#FF5959"}},"activated-deleted":{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#bbbbbb",background:"#dddddd"}},activated:{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#bbbbbb",background:"#dddddd"}},"boundary-hidden":{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#4477aa",background:"#77aadd"}},boundary:{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#4477aa",background:"#77aadd"}},sameExprID:{hidden:!1,markedStyle:{border:"#ee3377",background:"#ffaabb"},highlightStyle:{border:"#ee8866",background:"#ee8866"},shape:"box",text:"#000000",defaultStyle:{border:"#4477aa",background:"#77aadd"}}}},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){}},[[39,2,3]]]);
//# sourceMappingURL=main.34b649d2.chunk.js.map