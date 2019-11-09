(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{195:function(e,n,t){"use strict";t.r(n);var r,i,o,a,s,u,c,d,f,l,g,h,p,m,v,b,k,C,y,w=function(){function e(e){var n=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return n._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return n._stopWorker()})}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,n=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this._getClient().then(function(n){e=n}).then(function(e){return n._worker.withSyncedResources(t)}).then(function(n){return e})},e}();!function(e){e.create=function(e,n){return{line:e,character:n}},e.is=function(e){var n=e;return G.objectLiteral(n)&&G.number(n.line)&&G.number(n.character)}}(r||(r={})),function(e){e.create=function(e,n,t,i){if(G.number(e)&&G.number(n)&&G.number(t)&&G.number(i))return{start:r.create(e,n),end:r.create(t,i)};if(r.is(e)&&r.is(n))return{start:e,end:n};throw new Error("Range#create called with invalid arguments["+e+", "+n+", "+t+", "+i+"]")},e.is=function(e){var n=e;return G.objectLiteral(n)&&r.is(n.start)&&r.is(n.end)}}(i||(i={})),function(e){e.create=function(e,n){return{uri:e,range:n}},e.is=function(e){var n=e;return G.defined(n)&&i.is(n.range)&&(G.string(n.uri)||G.undefined(n.uri))}}(o||(o={})),function(e){e.create=function(e,n,t,r){return{targetUri:e,targetRange:n,targetSelectionRange:t,originSelectionRange:r}},e.is=function(e){var n=e;return G.defined(n)&&i.is(n.targetRange)&&G.string(n.targetUri)&&(i.is(n.targetSelectionRange)||G.undefined(n.targetSelectionRange))&&(i.is(n.originSelectionRange)||G.undefined(n.originSelectionRange))}}(a||(a={})),function(e){e.create=function(e,n,t,r){return{red:e,green:n,blue:t,alpha:r}},e.is=function(e){var n=e;return G.number(n.red)&&G.number(n.green)&&G.number(n.blue)&&G.number(n.alpha)}}(s||(s={})),function(e){e.create=function(e,n){return{range:e,color:n}},e.is=function(e){var n=e;return i.is(n.range)&&s.is(n.color)}}(u||(u={})),function(e){e.create=function(e,n,t){return{label:e,textEdit:n,additionalTextEdits:t}},e.is=function(e){var n=e;return G.string(n.label)&&(G.undefined(n.textEdit)||m.is(n))&&(G.undefined(n.additionalTextEdits)||G.typedArray(n.additionalTextEdits,m.is))}}(c||(c={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(d||(d={})),function(e){e.create=function(e,n,t,r,i){var o={startLine:e,endLine:n};return G.defined(t)&&(o.startCharacter=t),G.defined(r)&&(o.endCharacter=r),G.defined(i)&&(o.kind=i),o},e.is=function(e){var n=e;return G.number(n.startLine)&&G.number(n.startLine)&&(G.undefined(n.startCharacter)||G.number(n.startCharacter))&&(G.undefined(n.endCharacter)||G.number(n.endCharacter))&&(G.undefined(n.kind)||G.string(n.kind))}}(f||(f={})),function(e){e.create=function(e,n){return{location:e,message:n}},e.is=function(e){var n=e;return G.defined(n)&&o.is(n.location)&&G.string(n.message)}}(l||(l={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(g||(g={})),function(e){e.create=function(e,n,t,r,i,o){var a={range:e,message:n};return G.defined(t)&&(a.severity=t),G.defined(r)&&(a.code=r),G.defined(i)&&(a.source=i),G.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var n=e;return G.defined(n)&&i.is(n.range)&&G.string(n.message)&&(G.number(n.severity)||G.undefined(n.severity))&&(G.number(n.code)||G.string(n.code)||G.undefined(n.code))&&(G.string(n.source)||G.undefined(n.source))&&(G.undefined(n.relatedInformation)||G.typedArray(n.relatedInformation,l.is))}}(h||(h={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={title:e,command:n};return G.defined(t)&&t.length>0&&(i.arguments=t),i},e.is=function(e){var n=e;return G.defined(n)&&G.string(n.title)&&G.string(n.command)}}(p||(p={})),function(e){e.replace=function(e,n){return{range:e,newText:n}},e.insert=function(e,n){return{range:{start:e,end:e},newText:n}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var n=e;return G.objectLiteral(n)&&G.string(n.newText)&&i.is(n.range)}}(m||(m={})),function(e){e.create=function(e,n){return{textDocument:e,edits:n}},e.is=function(e){var n=e;return G.defined(n)&&E.is(n.textDocument)&&Array.isArray(n.edits)}}(v||(v={})),function(e){e.create=function(e,n){var t={kind:"create",uri:e};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"create"===n.kind&&G.string(n.uri)&&(void 0===n.options||(void 0===n.options.overwrite||G.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||G.boolean(n.options.ignoreIfExists)))}}(b||(b={})),function(e){e.create=function(e,n,t){var r={kind:"rename",oldUri:e,newUri:n};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),r},e.is=function(e){var n=e;return n&&"rename"===n.kind&&G.string(n.oldUri)&&G.string(n.newUri)&&(void 0===n.options||(void 0===n.options.overwrite||G.boolean(n.options.overwrite))&&(void 0===n.options.ignoreIfExists||G.boolean(n.options.ignoreIfExists)))}}(k||(k={})),function(e){e.create=function(e,n){var t={kind:"delete",uri:e};return void 0===n||void 0===n.recursive&&void 0===n.ignoreIfNotExists||(t.options=n),t},e.is=function(e){var n=e;return n&&"delete"===n.kind&&G.string(n.uri)&&(void 0===n.options||(void 0===n.options.recursive||G.boolean(n.options.recursive))&&(void 0===n.options.ignoreIfNotExists||G.boolean(n.options.ignoreIfNotExists)))}}(C||(C={})),function(e){e.is=function(e){var n=e;return n&&(void 0!==n.changes||void 0!==n.documentChanges)&&(void 0===n.documentChanges||n.documentChanges.every(function(e){return G.string(e.kind)?b.is(e)||k.is(e)||C.is(e):v.is(e)}))}}(y||(y={}));var _,E,x,S,I,A,T,M,P,R,F,j,D,L,O,W,N,U=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,n){this.edits.push(m.insert(e,n))},e.prototype.replace=function(e,n){this.edits.push(m.replace(e,n))},e.prototype.delete=function(e){this.edits.push(m.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var n=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach(function(e){if(v.is(e)){var t=new U(e.edits);n._textEditChanges[e.textDocument.uri]=t}}):e.changes&&Object.keys(e.changes).forEach(function(t){var r=new U(e.changes[t]);n._textEditChanges[t]=r}))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(E.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var n=e;if(!(r=this._textEditChanges[n.uri])){var t={textDocument:n,edits:i=[]};this._workspaceEdit.documentChanges.push(t),r=new U(i),this._textEditChanges[n.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new U(i),this._textEditChanges[e]=r}return r},e.prototype.createFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(b.create(e,n))},e.prototype.renameFile=function(e,n,t){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(k.create(e,n,t))},e.prototype.deleteFile=function(e,n){this.checkDocumentChanges(),this._workspaceEdit.documentChanges.push(C.create(e,n))},e.prototype.checkDocumentChanges=function(){if(!this._workspaceEdit||!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.")}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var n=e;return G.defined(n)&&G.string(n.uri)}}(_||(_={})),function(e){e.create=function(e,n){return{uri:e,version:n}},e.is=function(e){var n=e;return G.defined(n)&&G.string(n.uri)&&(null===n.version||G.number(n.version))}}(E||(E={})),function(e){e.create=function(e,n,t,r){return{uri:e,languageId:n,version:t,text:r}},e.is=function(e){var n=e;return G.defined(n)&&G.string(n.uri)&&G.string(n.languageId)&&G.number(n.version)&&G.string(n.text)}}(x||(x={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(S||(S={})),function(e){e.is=function(n){var t=n;return t===e.PlainText||t===e.Markdown}}(S||(S={})),function(e){e.is=function(e){var n=e;return G.objectLiteral(e)&&S.is(n.kind)&&G.string(n.value)}}(I||(I={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(A||(A={})),function(e){e.PlainText=1,e.Snippet=2}(T||(T={})),function(e){e.create=function(e){return{label:e}}}(M||(M={})),function(e){e.create=function(e,n){return{items:e||[],isIncomplete:!!n}}}(P||(P={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var n=e;return G.string(n)||G.objectLiteral(n)&&G.string(n.language)&&G.string(n.value)}}(R||(R={})),function(e){e.is=function(e){var n=e;return!!n&&G.objectLiteral(n)&&(I.is(n.contents)||R.is(n.contents)||G.typedArray(n.contents,R.is))&&(void 0===e.range||i.is(e.range))}}(F||(F={})),function(e){e.create=function(e,n){return n?{label:e,documentation:n}:{label:e}}}(j||(j={})),function(e){e.create=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var i={label:e};return G.defined(n)&&(i.documentation=n),G.defined(t)?i.parameters=t:i.parameters=[],i}}(D||(D={})),function(e){e.Text=1,e.Read=2,e.Write=3}(L||(L={})),function(e){e.create=function(e,n){var t={range:e};return G.number(n)&&(t.kind=n),t}}(O||(O={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(W||(W={})),function(e){e.create=function(e,n,t,r,i){var o={name:e,kind:n,location:{uri:r,range:t}};return i&&(o.containerName=i),o}}(N||(N={}));var V,K,z,H,q,B=function(){return function(){}}();!function(e){e.create=function(e,n,t,r,i,o){var a={name:e,detail:n,kind:t,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var n=e;return n&&G.string(n.name)&&G.number(n.kind)&&i.is(n.range)&&i.is(n.selectionRange)&&(void 0===n.detail||G.string(n.detail))&&(void 0===n.deprecated||G.boolean(n.deprecated))&&(void 0===n.children||Array.isArray(n.children))}}(B||(B={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(V||(V={})),function(e){e.create=function(e,n){var t={diagnostics:e};return void 0!==n&&null!==n&&(t.only=n),t},e.is=function(e){var n=e;return G.defined(n)&&G.typedArray(n.diagnostics,h.is)&&(void 0===n.only||G.typedArray(n.only,G.string))}}(K||(K={})),function(e){e.create=function(e,n,t){var r={title:e};return p.is(n)?r.command=n:r.edit=n,void 0!==t&&(r.kind=t),r},e.is=function(e){var n=e;return n&&G.string(n.title)&&(void 0===n.diagnostics||G.typedArray(n.diagnostics,h.is))&&(void 0===n.kind||G.string(n.kind))&&(void 0!==n.edit||void 0!==n.command)&&(void 0===n.command||p.is(n.command))&&(void 0===n.edit||y.is(n.edit))}}(z||(z={})),function(e){e.create=function(e,n){var t={range:e};return G.defined(n)&&(t.data=n),t},e.is=function(e){var n=e;return G.defined(n)&&i.is(n.range)&&(G.undefined(n.command)||p.is(n.command))}}(H||(H={})),function(e){e.create=function(e,n){return{tabSize:e,insertSpaces:n}},e.is=function(e){var n=e;return G.defined(n)&&G.number(n.tabSize)&&G.boolean(n.insertSpaces)}}(q||(q={}));var J=function(){return function(){}}();!function(e){e.create=function(e,n,t){return{range:e,target:n,data:t}},e.is=function(e){var n=e;return G.defined(n)&&i.is(n.range)&&(G.undefined(n.target)||G.string(n.target))}}(J||(J={}));var $,Q;!function(e){e.create=function(e,n,t,r){return new X(e,n,t,r)},e.is=function(e){var n=e;return!!(G.defined(n)&&G.string(n.uri)&&(G.undefined(n.languageId)||G.string(n.languageId))&&G.number(n.lineCount)&&G.func(n.getText)&&G.func(n.positionAt)&&G.func(n.offsetAt))},e.applyEdits=function(e,n){for(var t=e.getText(),r=function e(n,t){if(n.length<=1)return n;var r=n.length/2|0,i=n.slice(0,r),o=n.slice(r);e(i,t),e(o,t);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=t(i[a],o[s]);n[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)n[u++]=i[a++];for(;s<o.length;)n[u++]=o[s++];return n}(n,function(e,n){var t=e.range.start.line-n.range.start.line;return 0===t?e.range.start.character-n.range.start.character:t}),i=t.length,o=r.length-1;o>=0;o--){var a=r[o],s=e.offsetAt(a.range.start),u=e.offsetAt(a.range.end);if(!(u<=i))throw new Error("Overlapping edit");t=t.substring(0,s)+a.newText+t.substring(u,t.length),i=s}return t}}($||($={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(Q||(Q={}));var G,X=function(){function e(e,n,t,r){this._uri=e,this._languageId=n,this._version=t,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var n=this.offsetAt(e.start),t=this.offsetAt(e.end);return this._content.substring(n,t)}return this._content},e.prototype.update=function(e,n){this._content=e.text,this._version=n,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],n=this._content,t=!0,r=0;r<n.length;r++){t&&(e.push(r),t=!1);var i=n.charAt(r);t="\r"===i||"\n"===i,"\r"===i&&r+1<n.length&&"\n"===n.charAt(r+1)&&r++}t&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var n=this.getLineOffsets(),t=0,i=n.length;if(0===i)return r.create(0,e);for(;t<i;){var o=Math.floor((t+i)/2);n[o]>e?i=o:t=o+1}var a=t-1;return r.create(a,e-n[a])},e.prototype.offsetAt=function(e){var n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;var t=n[e.line],r=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(t+e.character,r),t)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var n=Object.prototype.toString;e.defined=function(e){return"undefined"!==typeof e},e.undefined=function(e){return"undefined"===typeof e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===n.call(e)},e.number=function(e){return"[object Number]"===n.call(e)},e.func=function(e){return"[object Function]"===n.call(e)},e.objectLiteral=function(e){return null!==e&&"object"===typeof e},e.typedArray=function(e,n){return Array.isArray(e)&&e.every(n)}}(G||(G={}));monaco.Uri;var Y=monaco.Range,Z=function(){function e(e,n,t){var r=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var i=function(e){var n,t=e.getModeId();t===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent(function(){clearTimeout(n),n=setTimeout(function(){return r._doValidate(e.uri,t)},500)}),r._doValidate(e.uri,t))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var n=e.uri.toString(),t=r._listener[n];t&&(t.dispose(),delete r._listener[n])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel(function(e){o(e),r._resetSchema(e.uri)})),this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)})),this._disposables.push(t.onDidChange(function(e){monaco.editor.getModels().forEach(function(e){e.getModeId()===r._languageId&&(o(e),i(e))})})),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(o),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then(function(n){n.resetSchema(e.toString())})},e.prototype._doValidate=function(e,n){this._worker(e).then(function(t){return t.doValidation(e.toString()).then(function(t){var r=t.map(function(e){return function(e,n){var t="number"===typeof n.code?String(n.code):n.code;return{severity:ee(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:t,source:n.source}}(0,e)}),i=monaco.editor.getModel(e);i&&i.getModeId()===n&&monaco.editor.setModelMarkers(i,n,r)})}).then(void 0,function(e){console.error(e)})},e}();function ee(e){switch(e){case g.Error:return monaco.MarkerSeverity.Error;case g.Warning:return monaco.MarkerSeverity.Warning;case g.Information:return monaco.MarkerSeverity.Info;case g.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function ne(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function te(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function re(e){if(e)return new Y(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ie(e){var n=monaco.languages.CompletionItemKind;switch(e){case A.Text:return n.Text;case A.Method:return n.Method;case A.Function:return n.Function;case A.Constructor:return n.Constructor;case A.Field:return n.Field;case A.Variable:return n.Variable;case A.Class:return n.Class;case A.Interface:return n.Interface;case A.Module:return n.Module;case A.Property:return n.Property;case A.Unit:return n.Unit;case A.Value:return n.Value;case A.Enum:return n.Enum;case A.Keyword:return n.Keyword;case A.Snippet:return n.Snippet;case A.Color:return n.Color;case A.File:return n.File;case A.Reference:return n.Reference}return n.Property}function oe(e){if(e)return{range:re(e.range),text:e.newText}}var ae=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,n,t,r){var i=e.uri;return this._worker(i).then(function(e){return e.doComplete(i.toString(),ne(n))}).then(function(t){if(t){var r=e.getWordUntilPosition(n),i=new Y(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),o=t.items.map(function(e){var n={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:i,kind:ie(e.kind)};return e.textEdit&&(n.range=re(e.textEdit.range),n.insertText=e.textEdit.newText),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(oe)),e.insertTextFormat===T.Snippet&&(n.insertTextRules=monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet),n});return{isIncomplete:t.isIncomplete,suggestions:o}}})},e}();function se(e){return"string"===typeof e?{value:e}:(n=e)&&"object"===typeof n&&"string"===typeof n.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var n}function ue(e){if(e)return Array.isArray(e)?e.map(se):[se(e)]}var ce=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.doHover(r.toString(),ne(n))}).then(function(e){if(e)return{range:re(e.range),contents:ue(e.contents)}})},e}();function de(e){var n=monaco.languages.SymbolKind;switch(e){case W.File:return n.Array;case W.Module:return n.Module;case W.Namespace:return n.Namespace;case W.Package:return n.Package;case W.Class:return n.Class;case W.Method:return n.Method;case W.Property:return n.Property;case W.Field:return n.Field;case W.Constructor:return n.Constructor;case W.Enum:return n.Enum;case W.Interface:return n.Interface;case W.Function:return n.Function;case W.Variable:return n.Variable;case W.Constant:return n.Constant;case W.String:return n.String;case W.Number:return n.Number;case W.Boolean:return n.Boolean;case W.Array:return n.Array}return n.Function}var fe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentSymbols(t.toString())}).then(function(e){if(e)return e.map(function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:de(e.kind),range:re(e.location.range),selectionRange:re(e.location.range),tags:[]}})})},e}();function le(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var ge,he=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.format(r.toString(),null,le(n)).then(function(e){if(e&&0!==e.length)return e.map(oe)})})},e}(),pe=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t,r){var i=e.uri;return this._worker(i).then(function(e){return e.format(i.toString(),te(n),le(t)).then(function(e){if(e&&0!==e.length)return e.map(oe)})})},e}(),me=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,n){var t=e.uri;return this._worker(t).then(function(e){return e.findDocumentColors(t.toString())}).then(function(e){if(e)return e.map(function(e){return{color:e.color,range:re(e.range)}})})},e.prototype.provideColorPresentations=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.getColorPresentations(r.toString(),n.color,te(n.range))}).then(function(e){if(e)return e.map(function(e){var n={label:e.label};return e.textEdit&&(n.textEdit=oe(e.textEdit)),e.additionalTextEdits&&(n.additionalTextEdits=e.additionalTextEdits.map(oe)),n})})},e}(),ve=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,n,t){var r=e.uri;return this._worker(r).then(function(e){return e.provideFoldingRanges(r.toString(),n)}).then(function(e){if(e)return e.map(function(e){var n={start:e.startLine+1,end:e.endLine+1};return"undefined"!==typeof e.kind&&(n.kind=function(e){switch(e){case d.Comment:return monaco.languages.FoldingRangeKind.Comment;case d.Imports:return monaco.languages.FoldingRangeKind.Imports;case d.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),n})})},e}();function be(e,n){void 0===n&&(n=!1);var t=0,r=e.length,i="",o=0,a=16,s=0,u=0,c=0,d=0,f=0;function l(n,r){for(var i=0,o=0;i<n||!r;){var a=e.charCodeAt(t);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}t++,i++}return i<n&&(o=-1),o}function g(){if(i="",f=0,o=t,u=s,d=c,t>=r)return o=r,a=17;var n=e.charCodeAt(t);if(ke(n)){do{t++,i+=String.fromCharCode(n),n=e.charCodeAt(t)}while(ke(n));return a=15}if(Ce(n))return t++,i+=String.fromCharCode(n),13===n&&10===e.charCodeAt(t)&&(t++,i+="\n"),s++,c=t,a=14;switch(n){case 123:return t++,a=1;case 125:return t++,a=2;case 91:return t++,a=3;case 93:return t++,a=4;case 58:return t++,a=6;case 44:return t++,a=5;case 34:return t++,i=function(){for(var n="",i=t;;){if(t>=r){n+=e.substring(i,t),f=2;break}var o=e.charCodeAt(t);if(34===o){n+=e.substring(i,t),t++;break}if(92!==o){if(o>=0&&o<=31){if(Ce(o)){n+=e.substring(i,t),f=2;break}f=6}t++}else{if(n+=e.substring(i,t),++t>=r){f=2;break}switch(o=e.charCodeAt(t++)){case 34:n+='"';break;case 92:n+="\\";break;case 47:n+="/";break;case 98:n+="\b";break;case 102:n+="\f";break;case 110:n+="\n";break;case 114:n+="\r";break;case 116:n+="\t";break;case 117:var a=l(4,!0);a>=0?n+=String.fromCharCode(a):f=4;break;default:f=5}i=t}}return n}(),a=10;case 47:var g=t-1;if(47===e.charCodeAt(t+1)){for(t+=2;t<r&&!Ce(e.charCodeAt(t));)t++;return i=e.substring(g,t),a=12}if(42===e.charCodeAt(t+1)){t+=2;for(var p=r-1,m=!1;t<p;){var v=e.charCodeAt(t);if(42===v&&47===e.charCodeAt(t+1)){t+=2,m=!0;break}t++,Ce(v)&&(13===v&&10===e.charCodeAt(t)&&t++,s++,c=t)}return m||(t++,f=1),i=e.substring(g,t),a=13}return i+=String.fromCharCode(n),t++,a=16;case 45:if(i+=String.fromCharCode(n),++t===r||!ye(e.charCodeAt(t)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var n=t;if(48===e.charCodeAt(t))t++;else for(t++;t<e.length&&ye(e.charCodeAt(t));)t++;if(t<e.length&&46===e.charCodeAt(t)){if(!(++t<e.length&&ye(e.charCodeAt(t))))return f=3,e.substring(n,t);for(t++;t<e.length&&ye(e.charCodeAt(t));)t++}var r=t;if(t<e.length&&(69===e.charCodeAt(t)||101===e.charCodeAt(t)))if((++t<e.length&&43===e.charCodeAt(t)||45===e.charCodeAt(t))&&t++,t<e.length&&ye(e.charCodeAt(t))){for(t++;t<e.length&&ye(e.charCodeAt(t));)t++;r=t}else f=3;return e.substring(n,r)}(),a=11;default:for(;t<r&&h(n);)t++,n=e.charCodeAt(t);if(o!==t){switch(i=e.substring(o,t)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(n),t++,a=16}}function h(e){if(ke(e)||Ce(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){t=e,i="",o=0,a=16,f=0},getPosition:function(){return t},scan:n?function(){var e;do{e=g()}while(e>=12&&e<=15);return e}:g,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return t-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-d},getTokenError:function(){return f}}}function ke(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function Ce(e){return 10===e||13===e||8232===e||8233===e}function ye(e){return e>=48&&e<=57}!function(e){e.DEFAULT={allowTrailingComma:!1}}(ge||(ge={}));var we=be;function _e(e){return{getInitialState:function(){return new De(null,null,!1)},tokenize:function(n,t,r,i){return function(e,n,t,r,i){void 0===r&&(r=0);var o=0,a=!1;switch(t.scanError){case 2:n='"'+n,o=1;break;case 1:n="/*"+n,o=2}var s,u,c=we(n),d=t.lastWasColon;u={tokens:[],endState:t.clone()};for(;;){var f=r+c.getPosition(),l="";if(17===(s=c.scan()))break;if(f===r+c.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+n.substr(c.getPosition(),3));switch(a&&(f-=o),a=o>0,s){case 1:case 2:l=Ee,d=!1;break;case 3:case 4:l=xe,d=!1;break;case 6:l=Se,d=!0;break;case 5:l=Ie,d=!1;break;case 8:case 9:l=Ae,d=!1;break;case 7:l=Te,d=!1;break;case 10:l=d?Me:Re,d=!1;break;case 11:l=Pe,d=!1}if(e)switch(s){case 12:l=je;break;case 13:l=Fe}u.endState=new De(t.getStateData(),c.getTokenError(),d),u.tokens.push({startIndex:f,scopes:l})}return u}(e,n,t,r)}}}var Ee="delimiter.bracket.json",xe="delimiter.array.json",Se="delimiter.colon.json",Ie="delimiter.comma.json",Ae="keyword.json",Te="keyword.json",Me="string.value.json",Pe="number.json",Re="string.key.json",Fe="comment.block.json",je="comment.line.json",De=function(){function e(e,n,t){this._state=e,this.scanError=n,this.lastWasColon=t}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(n){return n===this||!!(n&&n instanceof e)&&(this.scanError===n.scanError&&this.lastWasColon===n.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function Le(e){var n=[],t=[],r=new w(e);n.push(r);var i=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.getLanguageServiceWorker.apply(r,e)};function o(){var n=e.languageId,r=e.modeConfiguration;We(t),r.documentFormattingEdits&&t.push(monaco.languages.registerDocumentFormattingEditProvider(n,new he(i))),r.documentRangeFormattingEdits&&t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(n,new pe(i))),r.completionItems&&t.push(monaco.languages.registerCompletionItemProvider(n,new ae(i))),r.hovers&&t.push(monaco.languages.registerHoverProvider(n,new ce(i))),r.documentSymbols&&t.push(monaco.languages.registerDocumentSymbolProvider(n,new fe(i))),r.tokens&&t.push(monaco.languages.setTokensProvider(n,_e(!0))),r.colors&&t.push(monaco.languages.registerColorProvider(n,new me(i))),r.foldingRanges&&t.push(monaco.languages.registerFoldingRangeProvider(n,new ve(i))),r.diagnostics&&t.push(new Z(n,i,e))}o(),n.push(monaco.languages.setLanguageConfiguration(e.languageId,Ne));var a=e.modeConfiguration;return e.onDidChange(function(e){e.modeConfiguration!==a&&(a=e.modeConfiguration,o())}),n.push(Oe(t)),Oe(n)}function Oe(e){return{dispose:function(){return We(e)}}}function We(e){for(;e.length;)e.pop().dispose()}t.d(n,"setupMode",function(){return Le});var Ne={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);
//# sourceMappingURL=63.5b9652f3.chunk.js.map