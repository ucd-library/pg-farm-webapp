!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=69)}([function(t,e,r){"use strict";var s=Object.prototype.hasOwnProperty;function n(t,e){return s.call(t,e)}function i(t){return!(t>=55296&&t<=57343)&&(!(t>=64976&&t<=65007)&&(65535!=(65535&t)&&65534!=(65535&t)&&(!(t>=0&&t<=8)&&(11!==t&&(!(t>=14&&t<=31)&&(!(t>=127&&t<=159)&&!(t>1114111)))))))}function o(t){if(t>65535){var e=55296+((t-=65536)>>10),r=56320+(1023&t);return String.fromCharCode(e,r)}return String.fromCharCode(t)}var a=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,l=new RegExp(a.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),c=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,h=r(5);var p=/[&<>"]/,d=/[&<>"]/g,u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function f(t){return u[t]}var m=/[.?*+^$[\]\\(){}|-]/g;var _=r(1);e.lib={},e.lib.mdurl=r(6),e.lib.ucmicro=r(19),e.assign=function(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach((function(e){if(e){if("object"!=typeof e)throw new TypeError(e+"must be object");Object.keys(e).forEach((function(r){t[r]=e[r]}))}})),t},e.isString=function(t){return"[object String]"===function(t){return Object.prototype.toString.call(t)}(t)},e.has=n,e.unescapeMd=function(t){return t.indexOf("\\")<0?t:t.replace(a,"$1")},e.unescapeAll=function(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(l,(function(t,e,r){return e||function(t,e){var r=0;return n(h,e)?h[e]:35===e.charCodeAt(0)&&c.test(e)&&i(r="x"===e[1].toLowerCase()?parseInt(e.slice(2),16):parseInt(e.slice(1),10))?o(r):t}(t,r)}))},e.isValidEntityCode=i,e.fromCodePoint=o,e.escapeHtml=function(t){return p.test(t)?t.replace(d,f):t},e.arrayReplaceAt=function(t,e,r){return[].concat(t.slice(0,e),r,t.slice(e+1))},e.isSpace=function(t){switch(t){case 9:case 32:return!0}return!1},e.isWhiteSpace=function(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},e.isMdAsciiPunct=function(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},e.isPunctChar=function(t){return _.test(t)},e.escapeRE=function(t){return t.replace(m,"\\$&")},e.normalizeReference=function(t){return t=t.trim().replace(/\s+/g," "),"Ṿ"==="ẞ".toLowerCase()&&(t=t.replace(/ẞ/g,"ß")),t.toLowerCase().toUpperCase()}},function(t,e){t.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},function(t,e,r){"use strict";function s(){this.__rules__=[],this.__cache__=null}s.prototype.__find__=function(t){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1},s.prototype.__compile__=function(){var t=this,e=[""];t.__rules__.forEach((function(t){t.enabled&&t.alt.forEach((function(t){e.indexOf(t)<0&&e.push(t)}))})),t.__cache__={},e.forEach((function(e){t.__cache__[e]=[],t.__rules__.forEach((function(r){r.enabled&&(e&&r.alt.indexOf(e)<0||t.__cache__[e].push(r.fn))}))}))},s.prototype.at=function(t,e,r){var s=this.__find__(t),n=r||{};if(-1===s)throw new Error("Parser rule not found: "+t);this.__rules__[s].fn=e,this.__rules__[s].alt=n.alt||[],this.__cache__=null},s.prototype.before=function(t,e,r,s){var n=this.__find__(t),i=s||{};if(-1===n)throw new Error("Parser rule not found: "+t);this.__rules__.splice(n,0,{name:e,enabled:!0,fn:r,alt:i.alt||[]}),this.__cache__=null},s.prototype.after=function(t,e,r,s){var n=this.__find__(t),i=s||{};if(-1===n)throw new Error("Parser rule not found: "+t);this.__rules__.splice(n+1,0,{name:e,enabled:!0,fn:r,alt:i.alt||[]}),this.__cache__=null},s.prototype.push=function(t,e,r){var s=r||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:s.alt||[]}),this.__cache__=null},s.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);var r=[];return t.forEach((function(t){var s=this.__find__(t);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[s].enabled=!0,r.push(t)}),this),this.__cache__=null,r},s.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach((function(t){t.enabled=!1})),this.enable(t,e)},s.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);var r=[];return t.forEach((function(t){var s=this.__find__(t);if(s<0){if(e)return;throw new Error("Rules manager: invalid rule name "+t)}this.__rules__[s].enabled=!1,r.push(t)}),this),this.__cache__=null,r},s.prototype.getRules=function(t){return null===this.__cache__&&this.__compile__(),this.__cache__[t]||[]},t.exports=s},function(t,e,r){"use strict";function s(t,e,r){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=r,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}s.prototype.attrIndex=function(t){var e,r,s;if(!this.attrs)return-1;for(r=0,s=(e=this.attrs).length;r<s;r++)if(e[r][0]===t)return r;return-1},s.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},s.prototype.attrSet=function(t,e){var r=this.attrIndex(t),s=[t,e];r<0?this.attrPush(s):this.attrs[r]=s},s.prototype.attrGet=function(t){var e=this.attrIndex(t),r=null;return e>=0&&(r=this.attrs[e][1]),r},s.prototype.attrJoin=function(t,e){var r=this.attrIndex(t);r<0?this.attrPush([t,e]):this.attrs[r][1]=this.attrs[r][1]+" "+e},t.exports=s},function(t,e,r){"use strict";t.exports=r(13)},function(t,e,r){"use strict";t.exports=r(14)},function(t,e,r){"use strict";t.exports.encode=r(15),t.exports.decode=r(16),t.exports.format=r(17),t.exports.parse=r(18)},function(t,e){t.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},function(t,e){t.exports=/[\0-\x1F\x7F-\x9F]/},function(t,e){t.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},function(t,e,r){"use strict";var s="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",n="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",i=new RegExp("^(?:"+s+"|"+n+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),o=new RegExp("^(?:"+s+"|"+n+")");t.exports.HTML_TAG_RE=i,t.exports.HTML_OPEN_CLOSE_TAG_RE=o},function(t,e,r){"use strict";function s(t,e){var r,s,n,i,o,a=[],l=e.length;for(r=0;r<l;r++)126===(n=e[r]).marker&&-1!==n.end&&(i=e[n.end],(o=t.tokens[n.token]).type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",(o=t.tokens[i.token]).type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===t.tokens[i.token-1].type&&"~"===t.tokens[i.token-1].content&&a.push(i.token-1));for(;a.length;){for(s=(r=a.pop())+1;s<t.tokens.length&&"s_close"===t.tokens[s].type;)s++;r!==--s&&(o=t.tokens[s],t.tokens[s]=t.tokens[r],t.tokens[r]=o)}}t.exports.tokenize=function(t,e){var r,s,n,i,o=t.pos,a=t.src.charCodeAt(o);if(e)return!1;if(126!==a)return!1;if(n=(s=t.scanDelims(t.pos,!0)).length,i=String.fromCharCode(a),n<2)return!1;for(n%2&&(t.push("text","",0).content=i,n--),r=0;r<n;r+=2)t.push("text","",0).content=i+i,t.delimiters.push({marker:a,length:0,jump:r,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0},t.exports.postProcess=function(t){var e,r=t.tokens_meta,n=t.tokens_meta.length;for(s(t,t.delimiters),e=0;e<n;e++)r[e]&&r[e].delimiters&&s(t,r[e].delimiters)}},function(t,e,r){"use strict";function s(t,e){var r,s,n,i,o,a;for(r=e.length-1;r>=0;r--)95!==(s=e[r]).marker&&42!==s.marker||-1!==s.end&&(n=e[s.end],a=r>0&&e[r-1].end===s.end+1&&e[r-1].token===s.token-1&&e[s.end+1].token===n.token+1&&e[r-1].marker===s.marker,o=String.fromCharCode(s.marker),(i=t.tokens[s.token]).type=a?"strong_open":"em_open",i.tag=a?"strong":"em",i.nesting=1,i.markup=a?o+o:o,i.content="",(i=t.tokens[n.token]).type=a?"strong_close":"em_close",i.tag=a?"strong":"em",i.nesting=-1,i.markup=a?o+o:o,i.content="",a&&(t.tokens[e[r-1].token].content="",t.tokens[e[s.end+1].token].content="",r--))}t.exports.tokenize=function(t,e){var r,s,n=t.pos,i=t.src.charCodeAt(n);if(e)return!1;if(95!==i&&42!==i)return!1;for(s=t.scanDelims(t.pos,42===i),r=0;r<s.length;r++)t.push("text","",0).content=String.fromCharCode(i),t.delimiters.push({marker:i,length:s.length,jump:r,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0},t.exports.postProcess=function(t){var e,r=t.tokens_meta,n=t.tokens_meta.length;for(s(t,t.delimiters),e=0;e<n;e++)r[e]&&r[e].delimiters&&s(t,r[e].delimiters)}},function(t,e,r){"use strict";var s=r(0),n=r(21),i=r(25),o=r(26),a=r(34),l=r(48),c=r(61),h=r(6),p=r(63),d={default:r(66),zero:r(67),commonmark:r(68)},u=/^(vbscript|javascript|file|data):/,f=/^data:image\/(gif|png|jpeg|webp);/;function m(t){var e=t.trim().toLowerCase();return!u.test(e)||!!f.test(e)}var _=["http:","https:","mailto:"];function g(t){var e=h.parse(t,!0);if(e.hostname&&(!e.protocol||_.indexOf(e.protocol)>=0))try{e.hostname=p.toASCII(e.hostname)}catch(t){}return h.encode(h.format(e))}function v(t){var e=h.parse(t,!0);if(e.hostname&&(!e.protocol||_.indexOf(e.protocol)>=0))try{e.hostname=p.toUnicode(e.hostname)}catch(t){}return h.decode(h.format(e))}function y(t,e){if(!(this instanceof y))return new y(t,e);e||s.isString(t)||(e=t||{},t="default"),this.inline=new l,this.block=new a,this.core=new o,this.renderer=new i,this.linkify=new c,this.validateLink=m,this.normalizeLink=g,this.normalizeLinkText=v,this.utils=s,this.helpers=s.assign({},n),this.options={},this.configure(t),e&&this.set(e)}y.prototype.set=function(t){return s.assign(this.options,t),this},y.prototype.configure=function(t){var e,r=this;if(s.isString(t)&&!(t=d[e=t]))throw new Error('Wrong `markdown-it` preset "'+e+'", check name');if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&r.set(t.options),t.components&&Object.keys(t.components).forEach((function(e){t.components[e].rules&&r[e].ruler.enableOnly(t.components[e].rules),t.components[e].rules2&&r[e].ruler2.enableOnly(t.components[e].rules2)})),this},y.prototype.enable=function(t,e){var r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach((function(e){r=r.concat(this[e].ruler.enable(t,!0))}),this),r=r.concat(this.inline.ruler2.enable(t,!0));var s=t.filter((function(t){return r.indexOf(t)<0}));if(s.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+s);return this},y.prototype.disable=function(t,e){var r=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach((function(e){r=r.concat(this[e].ruler.disable(t,!0))}),this),r=r.concat(this.inline.ruler2.disable(t,!0));var s=t.filter((function(t){return r.indexOf(t)<0}));if(s.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+s);return this},y.prototype.use=function(t){var e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this},y.prototype.parse=function(t,e){if("string"!=typeof t)throw new Error("Input data should be a String");var r=new this.core.State(t,this,e);return this.core.process(r),r.tokens},y.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)},y.prototype.parseInline=function(t,e){var r=new this.core.State(t,this,e);return r.inlineMode=!0,this.core.process(r),r.tokens},y.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)},t.exports=y},function(t){t.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},function(t,e,r){"use strict";var s={};function n(t,e,r){var i,o,a,l,c,h="";for("string"!=typeof e&&(r=e,e=n.defaultChars),void 0===r&&(r=!0),c=function(t){var e,r,n=s[t];if(n)return n;for(n=s[t]=[],e=0;e<128;e++)r=String.fromCharCode(e),/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)n[t.charCodeAt(e)]=t[e];return n}(e),i=0,o=t.length;i<o;i++)if(a=t.charCodeAt(i),r&&37===a&&i+2<o&&/^[0-9a-f]{2}$/i.test(t.slice(i+1,i+3)))h+=t.slice(i,i+3),i+=2;else if(a<128)h+=c[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&i+1<o&&(l=t.charCodeAt(i+1))>=56320&&l<=57343){h+=encodeURIComponent(t[i]+t[i+1]),i++;continue}h+="%EF%BF%BD"}else h+=encodeURIComponent(t[i]);return h}n.defaultChars=";/?:@&=+$,-_.!~*'()#",n.componentChars="-_.!~*'()",t.exports=n},function(t,e,r){"use strict";var s={};function n(t,e){var r;return"string"!=typeof e&&(e=n.defaultChars),r=function(t){var e,r,n=s[t];if(n)return n;for(n=s[t]=[],e=0;e<128;e++)r=String.fromCharCode(e),n.push(r);for(e=0;e<t.length;e++)n[r=t.charCodeAt(e)]="%"+("0"+r.toString(16).toUpperCase()).slice(-2);return n}(e),t.replace(/(%[a-f0-9]{2})+/gi,(function(t){var e,s,n,i,o,a,l,c="";for(e=0,s=t.length;e<s;e+=3)(n=parseInt(t.slice(e+1,e+3),16))<128?c+=r[n]:192==(224&n)&&e+3<s&&128==(192&(i=parseInt(t.slice(e+4,e+6),16)))?(c+=(l=n<<6&1984|63&i)<128?"��":String.fromCharCode(l),e+=3):224==(240&n)&&e+6<s&&(i=parseInt(t.slice(e+4,e+6),16),o=parseInt(t.slice(e+7,e+9),16),128==(192&i)&&128==(192&o))?(c+=(l=n<<12&61440|i<<6&4032|63&o)<2048||l>=55296&&l<=57343?"���":String.fromCharCode(l),e+=6):240==(248&n)&&e+9<s&&(i=parseInt(t.slice(e+4,e+6),16),o=parseInt(t.slice(e+7,e+9),16),a=parseInt(t.slice(e+10,e+12),16),128==(192&i)&&128==(192&o)&&128==(192&a))?((l=n<<18&1835008|i<<12&258048|o<<6&4032|63&a)<65536||l>1114111?c+="����":(l-=65536,c+=String.fromCharCode(55296+(l>>10),56320+(1023&l))),e+=9):c+="�";return c}))}n.defaultChars=";/?:@&=+$,#",n.componentChars="",t.exports=n},function(t,e,r){"use strict";t.exports=function(t){var e="";return e+=t.protocol||"",e+=t.slashes?"//":"",e+=t.auth?t.auth+"@":"",t.hostname&&-1!==t.hostname.indexOf(":")?e+="["+t.hostname+"]":e+=t.hostname||"",e+=t.port?":"+t.port:"",e+=t.pathname||"",e+=t.search||"",e+=t.hash||""}},function(t,e,r){"use strict";function s(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var n=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,o=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,a=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(a),c=["%","/","?",";","#"].concat(l),h=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,u={javascript:!0,"javascript:":!0},f={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};s.prototype.parse=function(t,e){var r,s,i,a,l,m=t;if(m=m.trim(),!e&&1===t.split("#").length){var _=o.exec(m);if(_)return this.pathname=_[1],_[2]&&(this.search=_[2]),this}var g=n.exec(m);if(g&&(i=(g=g[0]).toLowerCase(),this.protocol=g,m=m.substr(g.length)),(e||g||m.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(l="//"===m.substr(0,2))||g&&u[g]||(m=m.substr(2),this.slashes=!0)),!u[g]&&(l||g&&!f[g])){var v,y,b=-1;for(r=0;r<h.length;r++)-1!==(a=m.indexOf(h[r]))&&(-1===b||a<b)&&(b=a);for(-1!==(y=-1===b?m.lastIndexOf("@"):m.lastIndexOf("@",b))&&(v=m.slice(0,y),m=m.slice(y+1),this.auth=v),b=-1,r=0;r<c.length;r++)-1!==(a=m.indexOf(c[r]))&&(-1===b||a<b)&&(b=a);-1===b&&(b=m.length),":"===m[b-1]&&b--;var C=m.slice(0,b);m=m.slice(b),this.parseHost(C),this.hostname=this.hostname||"";var w="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!w){var z=this.hostname.split(/\./);for(r=0,s=z.length;r<s;r++){var x=z[r];if(x&&!x.match(p)){for(var S="",k=0,M=x.length;k<M;k++)x.charCodeAt(k)>127?S+="x":S+=x[k];if(!S.match(p)){var P=z.slice(0,r),A=z.slice(r+1),E=x.match(d);E&&(P.push(E[1]),A.unshift(E[2])),A.length&&(m=A.join(".")+m),this.hostname=P.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),w&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=m.indexOf("#");-1!==L&&(this.hash=m.substr(L),m=m.slice(0,L));var H=m.indexOf("?");return-1!==H&&(this.search=m.substr(H),m=m.slice(0,H)),m&&(this.pathname=m),f[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this},s.prototype.parseHost=function(t){var e=i.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)},t.exports=function(t,e){if(t&&t instanceof s)return t;var r=new s;return r.parse(t,e),r}},function(t,e,r){"use strict";e.Any=r(7),e.Cc=r(8),e.Cf=r(20),e.P=r(1),e.Z=r(9)},function(t,e){t.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},function(t,e,r){"use strict";e.parseLinkLabel=r(22),e.parseLinkDestination=r(23),e.parseLinkTitle=r(24)},function(t,e,r){"use strict";t.exports=function(t,e,r){var s,n,i,o,a=-1,l=t.posMax,c=t.pos;for(t.pos=e+1,s=1;t.pos<l;){if(93===(i=t.src.charCodeAt(t.pos))&&0===--s){n=!0;break}if(o=t.pos,t.md.inline.skipToken(t),91===i)if(o===t.pos-1)s++;else if(r)return t.pos=c,-1}return n&&(a=t.pos),t.pos=c,a}},function(t,e,r){"use strict";var s=r(0).unescapeAll;t.exports=function(t,e,r){var n,i,o=e,a={ok:!1,pos:0,lines:0,str:""};if(60===t.charCodeAt(e)){for(e++;e<r;){if(10===(n=t.charCodeAt(e)))return a;if(62===n)return a.pos=e+1,a.str=s(t.slice(o+1,e)),a.ok=!0,a;92===n&&e+1<r?e+=2:e++}return a}for(i=0;e<r&&32!==(n=t.charCodeAt(e))&&!(n<32||127===n);)if(92===n&&e+1<r)e+=2;else{if(40===n&&i++,41===n){if(0===i)break;i--}e++}return o===e||0!==i||(a.str=s(t.slice(o,e)),a.lines=0,a.pos=e,a.ok=!0),a}},function(t,e,r){"use strict";var s=r(0).unescapeAll;t.exports=function(t,e,r){var n,i,o=0,a=e,l={ok:!1,pos:0,lines:0,str:""};if(e>=r)return l;if(34!==(i=t.charCodeAt(e))&&39!==i&&40!==i)return l;for(e++,40===i&&(i=41);e<r;){if((n=t.charCodeAt(e))===i)return l.pos=e+1,l.lines=o,l.str=s(t.slice(a+1,e)),l.ok=!0,l;10===n?o++:92===n&&e+1<r&&(e++,10===t.charCodeAt(e)&&o++),e++}return l}},function(t,e,r){"use strict";var s=r(0).assign,n=r(0).unescapeAll,i=r(0).escapeHtml,o={};function a(){this.rules=s({},o)}o.code_inline=function(t,e,r,s,n){var o=t[e];return"<code"+n.renderAttrs(o)+">"+i(t[e].content)+"</code>"},o.code_block=function(t,e,r,s,n){var o=t[e];return"<pre"+n.renderAttrs(o)+"><code>"+i(t[e].content)+"</code></pre>\n"},o.fence=function(t,e,r,s,o){var a,l,c,h,p=t[e],d=p.info?n(p.info).trim():"",u="";return d&&(u=d.split(/\s+/g)[0]),0===(a=r.highlight&&r.highlight(p.content,u)||i(p.content)).indexOf("<pre")?a+"\n":d?(l=p.attrIndex("class"),c=p.attrs?p.attrs.slice():[],l<0?c.push(["class",r.langPrefix+u]):c[l][1]+=" "+r.langPrefix+u,h={attrs:c},"<pre><code"+o.renderAttrs(h)+">"+a+"</code></pre>\n"):"<pre><code"+o.renderAttrs(p)+">"+a+"</code></pre>\n"},o.image=function(t,e,r,s,n){var i=t[e];return i.attrs[i.attrIndex("alt")][1]=n.renderInlineAsText(i.children,r,s),n.renderToken(t,e,r)},o.hardbreak=function(t,e,r){return r.xhtmlOut?"<br />\n":"<br>\n"},o.softbreak=function(t,e,r){return r.breaks?r.xhtmlOut?"<br />\n":"<br>\n":"\n"},o.text=function(t,e){return i(t[e].content)},o.html_block=function(t,e){return t[e].content},o.html_inline=function(t,e){return t[e].content},a.prototype.renderAttrs=function(t){var e,r,s;if(!t.attrs)return"";for(s="",e=0,r=t.attrs.length;e<r;e++)s+=" "+i(t.attrs[e][0])+'="'+i(t.attrs[e][1])+'"';return s},a.prototype.renderToken=function(t,e,r){var s,n="",i=!1,o=t[e];return o.hidden?"":(o.block&&-1!==o.nesting&&e&&t[e-1].hidden&&(n+="\n"),n+=(-1===o.nesting?"</":"<")+o.tag,n+=this.renderAttrs(o),0===o.nesting&&r.xhtmlOut&&(n+=" /"),o.block&&(i=!0,1===o.nesting&&e+1<t.length&&("inline"===(s=t[e+1]).type||s.hidden||-1===s.nesting&&s.tag===o.tag)&&(i=!1)),n+=i?">\n":">")},a.prototype.renderInline=function(t,e,r){for(var s,n="",i=this.rules,o=0,a=t.length;o<a;o++)void 0!==i[s=t[o].type]?n+=i[s](t,o,e,r,this):n+=this.renderToken(t,o,e);return n},a.prototype.renderInlineAsText=function(t,e,r){for(var s="",n=0,i=t.length;n<i;n++)"text"===t[n].type?s+=t[n].content:"image"===t[n].type&&(s+=this.renderInlineAsText(t[n].children,e,r));return s},a.prototype.render=function(t,e,r){var s,n,i,o="",a=this.rules;for(s=0,n=t.length;s<n;s++)"inline"===(i=t[s].type)?o+=this.renderInline(t[s].children,e,r):void 0!==a[i]?o+=a[t[s].type](t,s,e,r,this):o+=this.renderToken(t,s,e,r);return o},t.exports=a},function(t,e,r){"use strict";var s=r(2),n=[["normalize",r(27)],["block",r(28)],["inline",r(29)],["linkify",r(30)],["replacements",r(31)],["smartquotes",r(32)]];function i(){this.ruler=new s;for(var t=0;t<n.length;t++)this.ruler.push(n[t][0],n[t][1])}i.prototype.process=function(t){var e,r,s;for(e=0,r=(s=this.ruler.getRules("")).length;e<r;e++)s[e](t)},i.prototype.State=r(33),t.exports=i},function(t,e,r){"use strict";var s=/\r\n?|\n/g,n=/\0/g;t.exports=function(t){var e;e=(e=t.src.replace(s,"\n")).replace(n,"�"),t.src=e}},function(t,e,r){"use strict";t.exports=function(t){var e;t.inlineMode?((e=new t.Token("inline","",0)).content=t.src,e.map=[0,1],e.children=[],t.tokens.push(e)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}},function(t,e,r){"use strict";t.exports=function(t){var e,r,s,n=t.tokens;for(r=0,s=n.length;r<s;r++)"inline"===(e=n[r]).type&&t.md.inline.parse(e.content,t.md,t.env,e.children)}},function(t,e,r){"use strict";var s=r(0).arrayReplaceAt;function n(t){return/^<\/a\s*>/i.test(t)}t.exports=function(t){var e,r,i,o,a,l,c,h,p,d,u,f,m,_,g,v,y,b,C=t.tokens;if(t.md.options.linkify)for(r=0,i=C.length;r<i;r++)if("inline"===C[r].type&&t.md.linkify.pretest(C[r].content))for(m=0,e=(o=C[r].children).length-1;e>=0;e--)if("link_close"!==(l=o[e]).type){if("html_inline"===l.type&&(b=l.content,/^<a[>\s]/i.test(b)&&m>0&&m--,n(l.content)&&m++),!(m>0)&&"text"===l.type&&t.md.linkify.test(l.content)){for(p=l.content,y=t.md.linkify.match(p),c=[],f=l.level,u=0,h=0;h<y.length;h++)_=y[h].url,g=t.md.normalizeLink(_),t.md.validateLink(g)&&(v=y[h].text,v=y[h].schema?"mailto:"!==y[h].schema||/^mailto:/i.test(v)?t.md.normalizeLinkText(v):t.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):t.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,""),(d=y[h].index)>u&&((a=new t.Token("text","",0)).content=p.slice(u,d),a.level=f,c.push(a)),(a=new t.Token("link_open","a",1)).attrs=[["href",g]],a.level=f++,a.markup="linkify",a.info="auto",c.push(a),(a=new t.Token("text","",0)).content=v,a.level=f,c.push(a),(a=new t.Token("link_close","a",-1)).level=--f,a.markup="linkify",a.info="auto",c.push(a),u=y[h].lastIndex);u<p.length&&((a=new t.Token("text","",0)).content=p.slice(u),a.level=f,c.push(a)),C[r].children=o=s(o,e,c)}}else for(e--;o[e].level!==l.level&&"link_open"!==o[e].type;)e--}},function(t,e,r){"use strict";var s=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,n=/\((c|tm|r|p)\)/i,i=/\((c|tm|r|p)\)/gi,o={c:"©",r:"®",p:"§",tm:"™"};function a(t,e){return o[e.toLowerCase()]}function l(t){var e,r,s=0;for(e=t.length-1;e>=0;e--)"text"!==(r=t[e]).type||s||(r.content=r.content.replace(i,a)),"link_open"===r.type&&"auto"===r.info&&s--,"link_close"===r.type&&"auto"===r.info&&s++}function c(t){var e,r,n=0;for(e=t.length-1;e>=0;e--)"text"!==(r=t[e]).type||n||s.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/gm,"$1—").replace(/(^|\s)--(?=\s|$)/gm,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm,"$1–")),"link_open"===r.type&&"auto"===r.info&&n--,"link_close"===r.type&&"auto"===r.info&&n++}t.exports=function(t){var e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)"inline"===t.tokens[e].type&&(n.test(t.tokens[e].content)&&l(t.tokens[e].children),s.test(t.tokens[e].content)&&c(t.tokens[e].children))}},function(t,e,r){"use strict";var s=r(0).isWhiteSpace,n=r(0).isPunctChar,i=r(0).isMdAsciiPunct,o=/['"]/,a=/['"]/g;function l(t,e,r){return t.substr(0,e)+r+t.substr(e+1)}function c(t,e){var r,o,c,h,p,d,u,f,m,_,g,v,y,b,C,w,z,x,S,k,M;for(S=[],r=0;r<t.length;r++){for(o=t[r],u=t[r].level,z=S.length-1;z>=0&&!(S[z].level<=u);z--);if(S.length=z+1,"text"===o.type){p=0,d=(c=o.content).length;t:for(;p<d&&(a.lastIndex=p,h=a.exec(c));){if(C=w=!0,p=h.index+1,x="'"===h[0],m=32,h.index-1>=0)m=c.charCodeAt(h.index-1);else for(z=r-1;z>=0&&("softbreak"!==t[z].type&&"hardbreak"!==t[z].type);z--)if("text"===t[z].type){m=t[z].content.charCodeAt(t[z].content.length-1);break}if(_=32,p<d)_=c.charCodeAt(p);else for(z=r+1;z<t.length&&("softbreak"!==t[z].type&&"hardbreak"!==t[z].type);z++)if("text"===t[z].type){_=t[z].content.charCodeAt(0);break}if(g=i(m)||n(String.fromCharCode(m)),v=i(_)||n(String.fromCharCode(_)),y=s(m),(b=s(_))?C=!1:v&&(y||g||(C=!1)),y?w=!1:g&&(b||v||(w=!1)),34===_&&'"'===h[0]&&m>=48&&m<=57&&(w=C=!1),C&&w&&(C=g,w=v),C||w){if(w)for(z=S.length-1;z>=0&&(f=S[z],!(S[z].level<u));z--)if(f.single===x&&S[z].level===u){f=S[z],x?(k=e.md.options.quotes[2],M=e.md.options.quotes[3]):(k=e.md.options.quotes[0],M=e.md.options.quotes[1]),o.content=l(o.content,h.index,M),t[f.token].content=l(t[f.token].content,f.pos,k),p+=M.length-1,f.token===r&&(p+=k.length-1),d=(c=o.content).length,S.length=z;continue t}C?S.push({token:r,pos:h.index,single:x,level:u}):w&&x&&(o.content=l(o.content,h.index,"’"))}else x&&(o.content=l(o.content,h.index,"’"))}}}}t.exports=function(t){var e;if(t.md.options.typographer)for(e=t.tokens.length-1;e>=0;e--)"inline"===t.tokens[e].type&&o.test(t.tokens[e].content)&&c(t.tokens[e].children,t)}},function(t,e,r){"use strict";var s=r(3);function n(t,e,r){this.src=t,this.env=r,this.tokens=[],this.inlineMode=!1,this.md=e}n.prototype.Token=s,t.exports=n},function(t,e,r){"use strict";var s=r(2),n=[["table",r(35),["paragraph","reference"]],["code",r(36)],["fence",r(37),["paragraph","reference","blockquote","list"]],["blockquote",r(38),["paragraph","reference","blockquote","list"]],["hr",r(39),["paragraph","reference","blockquote","list"]],["list",r(40),["paragraph","reference","blockquote"]],["reference",r(41)],["heading",r(42),["paragraph","reference","blockquote"]],["lheading",r(43)],["html_block",r(44),["paragraph","reference","blockquote"]],["paragraph",r(46)]];function i(){this.ruler=new s;for(var t=0;t<n.length;t++)this.ruler.push(n[t][0],n[t][1],{alt:(n[t][2]||[]).slice()})}i.prototype.tokenize=function(t,e,r){for(var s,n=this.ruler.getRules(""),i=n.length,o=e,a=!1,l=t.md.options.maxNesting;o<r&&(t.line=o=t.skipEmptyLines(o),!(o>=r))&&!(t.sCount[o]<t.blkIndent);){if(t.level>=l){t.line=r;break}for(s=0;s<i&&!n[s](t,o,r,!1);s++);t.tight=!a,t.isEmpty(t.line-1)&&(a=!0),(o=t.line)<r&&t.isEmpty(o)&&(a=!0,o++,t.line=o)}},i.prototype.parse=function(t,e,r,s){var n;t&&(n=new this.State(t,e,r,s),this.tokenize(n,n.line,n.lineMax))},i.prototype.State=r(47),t.exports=i},function(t,e,r){"use strict";var s=r(0).isSpace;function n(t,e){var r=t.bMarks[e]+t.blkIndent,s=t.eMarks[e];return t.src.substr(r,s-r)}function i(t){var e,r=[],s=0,n=t.length,i=0,o=0,a=!1,l=0;for(e=t.charCodeAt(s);s<n;)96===e?a?(a=!1,l=s):i%2==0&&(a=!0,l=s):124!==e||i%2!=0||a||(r.push(t.substring(o,s)),o=s+1),92===e?i++:i=0,++s===n&&a&&(a=!1,s=l+1),e=t.charCodeAt(s);return r.push(t.substring(o)),r}t.exports=function(t,e,r,o){var a,l,c,h,p,d,u,f,m,_,g,v;if(e+2>r)return!1;if(p=e+1,t.sCount[p]<t.blkIndent)return!1;if(t.sCount[p]-t.blkIndent>=4)return!1;if((c=t.bMarks[p]+t.tShift[p])>=t.eMarks[p])return!1;if(124!==(a=t.src.charCodeAt(c++))&&45!==a&&58!==a)return!1;for(;c<t.eMarks[p];){if(124!==(a=t.src.charCodeAt(c))&&45!==a&&58!==a&&!s(a))return!1;c++}for(d=(l=n(t,e+1)).split("|"),m=[],h=0;h<d.length;h++){if(!(_=d[h].trim())){if(0===h||h===d.length-1)continue;return!1}if(!/^:?-+:?$/.test(_))return!1;58===_.charCodeAt(_.length-1)?m.push(58===_.charCodeAt(0)?"center":"right"):58===_.charCodeAt(0)?m.push("left"):m.push("")}if(-1===(l=n(t,e).trim()).indexOf("|"))return!1;if(t.sCount[e]-t.blkIndent>=4)return!1;if((u=(d=i(l.replace(/^\||\|$/g,""))).length)>m.length)return!1;if(o)return!0;for((f=t.push("table_open","table",1)).map=g=[e,0],(f=t.push("thead_open","thead",1)).map=[e,e+1],(f=t.push("tr_open","tr",1)).map=[e,e+1],h=0;h<d.length;h++)(f=t.push("th_open","th",1)).map=[e,e+1],m[h]&&(f.attrs=[["style","text-align:"+m[h]]]),(f=t.push("inline","",0)).content=d[h].trim(),f.map=[e,e+1],f.children=[],f=t.push("th_close","th",-1);for(f=t.push("tr_close","tr",-1),f=t.push("thead_close","thead",-1),(f=t.push("tbody_open","tbody",1)).map=v=[e+2,0],p=e+2;p<r&&!(t.sCount[p]<t.blkIndent)&&-1!==(l=n(t,p).trim()).indexOf("|")&&!(t.sCount[p]-t.blkIndent>=4);p++){for(d=i(l.replace(/^\||\|$/g,"")),f=t.push("tr_open","tr",1),h=0;h<u;h++)f=t.push("td_open","td",1),m[h]&&(f.attrs=[["style","text-align:"+m[h]]]),(f=t.push("inline","",0)).content=d[h]?d[h].trim():"",f.children=[],f=t.push("td_close","td",-1);f=t.push("tr_close","tr",-1)}return f=t.push("tbody_close","tbody",-1),f=t.push("table_close","table",-1),g[1]=v[1]=p,t.line=p,!0}},function(t,e,r){"use strict";t.exports=function(t,e,r){var s,n,i;if(t.sCount[e]-t.blkIndent<4)return!1;for(n=s=e+1;s<r;)if(t.isEmpty(s))s++;else{if(!(t.sCount[s]-t.blkIndent>=4))break;n=++s}return t.line=n,(i=t.push("code_block","code",0)).content=t.getLines(e,n,4+t.blkIndent,!0),i.map=[e,t.line],!0}},function(t,e,r){"use strict";t.exports=function(t,e,r,s){var n,i,o,a,l,c,h,p=!1,d=t.bMarks[e]+t.tShift[e],u=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(d+3>u)return!1;if(126!==(n=t.src.charCodeAt(d))&&96!==n)return!1;if(l=d,(i=(d=t.skipChars(d,n))-l)<3)return!1;if(h=t.src.slice(l,d),o=t.src.slice(d,u),96===n&&o.indexOf(String.fromCharCode(n))>=0)return!1;if(s)return!0;for(a=e;!(++a>=r)&&!((d=l=t.bMarks[a]+t.tShift[a])<(u=t.eMarks[a])&&t.sCount[a]<t.blkIndent);)if(t.src.charCodeAt(d)===n&&!(t.sCount[a]-t.blkIndent>=4||(d=t.skipChars(d,n))-l<i||(d=t.skipSpaces(d))<u)){p=!0;break}return i=t.sCount[e],t.line=a+(p?1:0),(c=t.push("fence","code",0)).info=o,c.content=t.getLines(e+1,a,i,!0),c.markup=h,c.map=[e,t.line],!0}},function(t,e,r){"use strict";var s=r(0).isSpace;t.exports=function(t,e,r,n){var i,o,a,l,c,h,p,d,u,f,m,_,g,v,y,b,C,w,z,x,S=t.lineMax,k=t.bMarks[e]+t.tShift[e],M=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(62!==t.src.charCodeAt(k++))return!1;if(n)return!0;for(l=u=t.sCount[e]+k-(t.bMarks[e]+t.tShift[e]),32===t.src.charCodeAt(k)?(k++,l++,u++,i=!1,b=!0):9===t.src.charCodeAt(k)?(b=!0,(t.bsCount[e]+u)%4==3?(k++,l++,u++,i=!1):i=!0):b=!1,f=[t.bMarks[e]],t.bMarks[e]=k;k<M&&(o=t.src.charCodeAt(k),s(o));)9===o?u+=4-(u+t.bsCount[e]+(i?1:0))%4:u++,k++;for(m=[t.bsCount[e]],t.bsCount[e]=t.sCount[e]+1+(b?1:0),h=k>=M,v=[t.sCount[e]],t.sCount[e]=u-l,y=[t.tShift[e]],t.tShift[e]=k-t.bMarks[e],w=t.md.block.ruler.getRules("blockquote"),g=t.parentType,t.parentType="blockquote",x=!1,d=e+1;d<r&&(t.sCount[d]<t.blkIndent&&(x=!0),!((k=t.bMarks[d]+t.tShift[d])>=(M=t.eMarks[d])));d++)if(62!==t.src.charCodeAt(k++)||x){if(h)break;for(C=!1,a=0,c=w.length;a<c;a++)if(w[a](t,d,r,!0)){C=!0;break}if(C){t.lineMax=d,0!==t.blkIndent&&(f.push(t.bMarks[d]),m.push(t.bsCount[d]),y.push(t.tShift[d]),v.push(t.sCount[d]),t.sCount[d]-=t.blkIndent);break}f.push(t.bMarks[d]),m.push(t.bsCount[d]),y.push(t.tShift[d]),v.push(t.sCount[d]),t.sCount[d]=-1}else{for(l=u=t.sCount[d]+k-(t.bMarks[d]+t.tShift[d]),32===t.src.charCodeAt(k)?(k++,l++,u++,i=!1,b=!0):9===t.src.charCodeAt(k)?(b=!0,(t.bsCount[d]+u)%4==3?(k++,l++,u++,i=!1):i=!0):b=!1,f.push(t.bMarks[d]),t.bMarks[d]=k;k<M&&(o=t.src.charCodeAt(k),s(o));)9===o?u+=4-(u+t.bsCount[d]+(i?1:0))%4:u++,k++;h=k>=M,m.push(t.bsCount[d]),t.bsCount[d]=t.sCount[d]+1+(b?1:0),v.push(t.sCount[d]),t.sCount[d]=u-l,y.push(t.tShift[d]),t.tShift[d]=k-t.bMarks[d]}for(_=t.blkIndent,t.blkIndent=0,(z=t.push("blockquote_open","blockquote",1)).markup=">",z.map=p=[e,0],t.md.block.tokenize(t,e,d),(z=t.push("blockquote_close","blockquote",-1)).markup=">",t.lineMax=S,t.parentType=g,p[1]=t.line,a=0;a<y.length;a++)t.bMarks[a+e]=f[a],t.tShift[a+e]=y[a],t.sCount[a+e]=v[a],t.bsCount[a+e]=m[a];return t.blkIndent=_,!0}},function(t,e,r){"use strict";var s=r(0).isSpace;t.exports=function(t,e,r,n){var i,o,a,l,c=t.bMarks[e]+t.tShift[e],h=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(42!==(i=t.src.charCodeAt(c++))&&45!==i&&95!==i)return!1;for(o=1;c<h;){if((a=t.src.charCodeAt(c++))!==i&&!s(a))return!1;a===i&&o++}return!(o<3)&&(n||(t.line=e+1,(l=t.push("hr","hr",0)).map=[e,t.line],l.markup=Array(o+1).join(String.fromCharCode(i))),!0)}},function(t,e,r){"use strict";var s=r(0).isSpace;function n(t,e){var r,n,i,o;return n=t.bMarks[e]+t.tShift[e],i=t.eMarks[e],42!==(r=t.src.charCodeAt(n++))&&45!==r&&43!==r||n<i&&(o=t.src.charCodeAt(n),!s(o))?-1:n}function i(t,e){var r,n=t.bMarks[e]+t.tShift[e],i=n,o=t.eMarks[e];if(i+1>=o)return-1;if((r=t.src.charCodeAt(i++))<48||r>57)return-1;for(;;){if(i>=o)return-1;if(!((r=t.src.charCodeAt(i++))>=48&&r<=57)){if(41===r||46===r)break;return-1}if(i-n>=10)return-1}return i<o&&(r=t.src.charCodeAt(i),!s(r))?-1:i}t.exports=function(t,e,r,s){var o,a,l,c,h,p,d,u,f,m,_,g,v,y,b,C,w,z,x,S,k,M,P,A,E,L,H,V,T=!1,D=!0;if(t.sCount[e]-t.blkIndent>=4)return!1;if(t.listIndent>=0&&t.sCount[e]-t.listIndent>=4&&t.sCount[e]<t.blkIndent)return!1;if(s&&"paragraph"===t.parentType&&t.tShift[e]>=t.blkIndent&&(T=!0),(P=i(t,e))>=0){if(d=!0,E=t.bMarks[e]+t.tShift[e],v=Number(t.src.substr(E,P-E-1)),T&&1!==v)return!1}else{if(!((P=n(t,e))>=0))return!1;d=!1}if(T&&t.skipSpaces(P)>=t.eMarks[e])return!1;if(g=t.src.charCodeAt(P-1),s)return!0;for(_=t.tokens.length,d?(V=t.push("ordered_list_open","ol",1),1!==v&&(V.attrs=[["start",v]])):V=t.push("bullet_list_open","ul",1),V.map=m=[e,0],V.markup=String.fromCharCode(g),b=e,A=!1,H=t.md.block.ruler.getRules("list"),z=t.parentType,t.parentType="list";b<r;){for(M=P,y=t.eMarks[b],p=C=t.sCount[b]+P-(t.bMarks[e]+t.tShift[e]);M<y;){if(9===(o=t.src.charCodeAt(M)))C+=4-(C+t.bsCount[b])%4;else{if(32!==o)break;C++}M++}if((h=(a=M)>=y?1:C-p)>4&&(h=1),c=p+h,(V=t.push("list_item_open","li",1)).markup=String.fromCharCode(g),V.map=u=[e,0],k=t.tight,S=t.tShift[e],x=t.sCount[e],w=t.listIndent,t.listIndent=t.blkIndent,t.blkIndent=c,t.tight=!0,t.tShift[e]=a-t.bMarks[e],t.sCount[e]=C,a>=y&&t.isEmpty(e+1)?t.line=Math.min(t.line+2,r):t.md.block.tokenize(t,e,r,!0),t.tight&&!A||(D=!1),A=t.line-e>1&&t.isEmpty(t.line-1),t.blkIndent=t.listIndent,t.listIndent=w,t.tShift[e]=S,t.sCount[e]=x,t.tight=k,(V=t.push("list_item_close","li",-1)).markup=String.fromCharCode(g),b=e=t.line,u[1]=b,a=t.bMarks[e],b>=r)break;if(t.sCount[b]<t.blkIndent)break;if(t.sCount[e]-t.blkIndent>=4)break;for(L=!1,l=0,f=H.length;l<f;l++)if(H[l](t,b,r,!0)){L=!0;break}if(L)break;if(d){if((P=i(t,b))<0)break}else if((P=n(t,b))<0)break;if(g!==t.src.charCodeAt(P-1))break}return(V=d?t.push("ordered_list_close","ol",-1):t.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(g),m[1]=b,t.line=b,t.parentType=z,D&&function(t,e){var r,s,n=t.level+2;for(r=e+2,s=t.tokens.length-2;r<s;r++)t.tokens[r].level===n&&"paragraph_open"===t.tokens[r].type&&(t.tokens[r+2].hidden=!0,t.tokens[r].hidden=!0,r+=2)}(t,_),!0}},function(t,e,r){"use strict";var s=r(0).normalizeReference,n=r(0).isSpace;t.exports=function(t,e,r,i){var o,a,l,c,h,p,d,u,f,m,_,g,v,y,b,C,w=0,z=t.bMarks[e]+t.tShift[e],x=t.eMarks[e],S=e+1;if(t.sCount[e]-t.blkIndent>=4)return!1;if(91!==t.src.charCodeAt(z))return!1;for(;++z<x;)if(93===t.src.charCodeAt(z)&&92!==t.src.charCodeAt(z-1)){if(z+1===x)return!1;if(58!==t.src.charCodeAt(z+1))return!1;break}for(c=t.lineMax,b=t.md.block.ruler.getRules("reference"),m=t.parentType,t.parentType="reference";S<c&&!t.isEmpty(S);S++)if(!(t.sCount[S]-t.blkIndent>3||t.sCount[S]<0)){for(y=!1,p=0,d=b.length;p<d;p++)if(b[p](t,S,c,!0)){y=!0;break}if(y)break}for(x=(v=t.getLines(e,S,t.blkIndent,!1).trim()).length,z=1;z<x;z++){if(91===(o=v.charCodeAt(z)))return!1;if(93===o){f=z;break}(10===o||92===o&&++z<x&&10===v.charCodeAt(z))&&w++}if(f<0||58!==v.charCodeAt(f+1))return!1;for(z=f+2;z<x;z++)if(10===(o=v.charCodeAt(z)))w++;else if(!n(o))break;if(!(_=t.md.helpers.parseLinkDestination(v,z,x)).ok)return!1;if(h=t.md.normalizeLink(_.str),!t.md.validateLink(h))return!1;for(a=z=_.pos,l=w+=_.lines,g=z;z<x;z++)if(10===(o=v.charCodeAt(z)))w++;else if(!n(o))break;for(_=t.md.helpers.parseLinkTitle(v,z,x),z<x&&g!==z&&_.ok?(C=_.str,z=_.pos,w+=_.lines):(C="",z=a,w=l);z<x&&(o=v.charCodeAt(z),n(o));)z++;if(z<x&&10!==v.charCodeAt(z)&&C)for(C="",z=a,w=l;z<x&&(o=v.charCodeAt(z),n(o));)z++;return!(z<x&&10!==v.charCodeAt(z))&&(!!(u=s(v.slice(1,f)))&&(i||(void 0===t.env.references&&(t.env.references={}),void 0===t.env.references[u]&&(t.env.references[u]={title:C,href:h}),t.parentType=m,t.line=e+w+1),!0))}},function(t,e,r){"use strict";var s=r(0).isSpace;t.exports=function(t,e,r,n){var i,o,a,l,c=t.bMarks[e]+t.tShift[e],h=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(35!==(i=t.src.charCodeAt(c))||c>=h)return!1;for(o=1,i=t.src.charCodeAt(++c);35===i&&c<h&&o<=6;)o++,i=t.src.charCodeAt(++c);return!(o>6||c<h&&!s(i))&&(n||(h=t.skipSpacesBack(h,c),(a=t.skipCharsBack(h,35,c))>c&&s(t.src.charCodeAt(a-1))&&(h=a),t.line=e+1,(l=t.push("heading_open","h"+String(o),1)).markup="########".slice(0,o),l.map=[e,t.line],(l=t.push("inline","",0)).content=t.src.slice(c,h).trim(),l.map=[e,t.line],l.children=[],(l=t.push("heading_close","h"+String(o),-1)).markup="########".slice(0,o)),!0)}},function(t,e,r){"use strict";t.exports=function(t,e,r){var s,n,i,o,a,l,c,h,p,d,u=e+1,f=t.md.block.ruler.getRules("paragraph");if(t.sCount[e]-t.blkIndent>=4)return!1;for(d=t.parentType,t.parentType="paragraph";u<r&&!t.isEmpty(u);u++)if(!(t.sCount[u]-t.blkIndent>3)){if(t.sCount[u]>=t.blkIndent&&(l=t.bMarks[u]+t.tShift[u])<(c=t.eMarks[u])&&(45===(p=t.src.charCodeAt(l))||61===p)&&(l=t.skipChars(l,p),(l=t.skipSpaces(l))>=c)){h=61===p?1:2;break}if(!(t.sCount[u]<0)){for(n=!1,i=0,o=f.length;i<o;i++)if(f[i](t,u,r,!0)){n=!0;break}if(n)break}}return!!h&&(s=t.getLines(e,u,t.blkIndent,!1).trim(),t.line=u+1,(a=t.push("heading_open","h"+String(h),1)).markup=String.fromCharCode(p),a.map=[e,t.line],(a=t.push("inline","",0)).content=s,a.map=[e,t.line-1],a.children=[],(a=t.push("heading_close","h"+String(h),-1)).markup=String.fromCharCode(p),t.parentType=d,!0)}},function(t,e,r){"use strict";var s=r(45),n=r(10).HTML_OPEN_CLOSE_TAG_RE,i=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+s.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(n.source+"\\s*$"),/^$/,!1]];t.exports=function(t,e,r,s){var n,o,a,l,c=t.bMarks[e]+t.tShift[e],h=t.eMarks[e];if(t.sCount[e]-t.blkIndent>=4)return!1;if(!t.md.options.html)return!1;if(60!==t.src.charCodeAt(c))return!1;for(l=t.src.slice(c,h),n=0;n<i.length&&!i[n][0].test(l);n++);if(n===i.length)return!1;if(s)return i[n][2];if(o=e+1,!i[n][1].test(l))for(;o<r&&!(t.sCount[o]<t.blkIndent);o++)if(c=t.bMarks[o]+t.tShift[o],h=t.eMarks[o],l=t.src.slice(c,h),i[n][1].test(l)){0!==l.length&&o++;break}return t.line=o,(a=t.push("html_block","",0)).map=[e,o],a.content=t.getLines(e,o,t.blkIndent,!0),!0}},function(t,e,r){"use strict";t.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(t,e,r){"use strict";t.exports=function(t,e){var r,s,n,i,o,a,l=e+1,c=t.md.block.ruler.getRules("paragraph"),h=t.lineMax;for(a=t.parentType,t.parentType="paragraph";l<h&&!t.isEmpty(l);l++)if(!(t.sCount[l]-t.blkIndent>3||t.sCount[l]<0)){for(s=!1,n=0,i=c.length;n<i;n++)if(c[n](t,l,h,!0)){s=!0;break}if(s)break}return r=t.getLines(e,l,t.blkIndent,!1).trim(),t.line=l,(o=t.push("paragraph_open","p",1)).map=[e,t.line],(o=t.push("inline","",0)).content=r,o.map=[e,t.line],o.children=[],o=t.push("paragraph_close","p",-1),t.parentType=a,!0}},function(t,e,r){"use strict";var s=r(3),n=r(0).isSpace;function i(t,e,r,s){var i,o,a,l,c,h,p,d;for(this.src=t,this.md=e,this.env=r,this.tokens=s,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",d=!1,a=l=h=p=0,c=(o=this.src).length;l<c;l++){if(i=o.charCodeAt(l),!d){if(n(i)){h++,9===i?p+=4-p%4:p++;continue}d=!0}10!==i&&l!==c-1||(10!==i&&l++,this.bMarks.push(a),this.eMarks.push(l),this.tShift.push(h),this.sCount.push(p),this.bsCount.push(0),d=!1,h=0,p=0,a=l+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}i.prototype.push=function(t,e,r){var n=new s(t,e,r);return n.block=!0,r<0&&this.level--,n.level=this.level,r>0&&this.level++,this.tokens.push(n),n},i.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]},i.prototype.skipEmptyLines=function(t){for(var e=this.lineMax;t<e&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t},i.prototype.skipSpaces=function(t){for(var e,r=this.src.length;t<r&&(e=this.src.charCodeAt(t),n(e));t++);return t},i.prototype.skipSpacesBack=function(t,e){if(t<=e)return t;for(;t>e;)if(!n(this.src.charCodeAt(--t)))return t+1;return t},i.prototype.skipChars=function(t,e){for(var r=this.src.length;t<r&&this.src.charCodeAt(t)===e;t++);return t},i.prototype.skipCharsBack=function(t,e,r){if(t<=r)return t;for(;t>r;)if(e!==this.src.charCodeAt(--t))return t+1;return t},i.prototype.getLines=function(t,e,r,s){var i,o,a,l,c,h,p,d=t;if(t>=e)return"";for(h=new Array(e-t),i=0;d<e;d++,i++){for(o=0,p=l=this.bMarks[d],c=d+1<e||s?this.eMarks[d]+1:this.eMarks[d];l<c&&o<r;){if(a=this.src.charCodeAt(l),n(a))9===a?o+=4-(o+this.bsCount[d])%4:o++;else{if(!(l-p<this.tShift[d]))break;o++}l++}h[i]=o>r?new Array(o-r+1).join(" ")+this.src.slice(l,c):this.src.slice(l,c)}return h.join("")},i.prototype.Token=s,t.exports=i},function(t,e,r){"use strict";var s=r(2),n=[["text",r(49)],["newline",r(50)],["escape",r(51)],["backticks",r(52)],["strikethrough",r(11).tokenize],["emphasis",r(12).tokenize],["link",r(53)],["image",r(54)],["autolink",r(55)],["html_inline",r(56)],["entity",r(57)]],i=[["balance_pairs",r(58)],["strikethrough",r(11).postProcess],["emphasis",r(12).postProcess],["text_collapse",r(59)]];function o(){var t;for(this.ruler=new s,t=0;t<n.length;t++)this.ruler.push(n[t][0],n[t][1]);for(this.ruler2=new s,t=0;t<i.length;t++)this.ruler2.push(i[t][0],i[t][1])}o.prototype.skipToken=function(t){var e,r,s=t.pos,n=this.ruler.getRules(""),i=n.length,o=t.md.options.maxNesting,a=t.cache;if(void 0===a[s]){if(t.level<o)for(r=0;r<i&&(t.level++,e=n[r](t,!0),t.level--,!e);r++);else t.pos=t.posMax;e||t.pos++,a[s]=t.pos}else t.pos=a[s]},o.prototype.tokenize=function(t){for(var e,r,s=this.ruler.getRules(""),n=s.length,i=t.posMax,o=t.md.options.maxNesting;t.pos<i;){if(t.level<o)for(r=0;r<n&&!(e=s[r](t,!1));r++);if(e){if(t.pos>=i)break}else t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()},o.prototype.parse=function(t,e,r,s){var n,i,o,a=new this.State(t,e,r,s);for(this.tokenize(a),o=(i=this.ruler2.getRules("")).length,n=0;n<o;n++)i[n](a)},o.prototype.State=r(60),t.exports=o},function(t,e,r){"use strict";function s(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}t.exports=function(t,e){for(var r=t.pos;r<t.posMax&&!s(t.src.charCodeAt(r));)r++;return r!==t.pos&&(e||(t.pending+=t.src.slice(t.pos,r)),t.pos=r,!0)}},function(t,e,r){"use strict";var s=r(0).isSpace;t.exports=function(t,e){var r,n,i=t.pos;if(10!==t.src.charCodeAt(i))return!1;for(r=t.pending.length-1,n=t.posMax,e||(r>=0&&32===t.pending.charCodeAt(r)?r>=1&&32===t.pending.charCodeAt(r-1)?(t.pending=t.pending.replace(/ +$/,""),t.push("hardbreak","br",0)):(t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0)):t.push("softbreak","br",0)),i++;i<n&&s(t.src.charCodeAt(i));)i++;return t.pos=i,!0}},function(t,e,r){"use strict";for(var s=r(0).isSpace,n=[],i=0;i<256;i++)n.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(t){n[t.charCodeAt(0)]=1})),t.exports=function(t,e){var r,i=t.pos,o=t.posMax;if(92!==t.src.charCodeAt(i))return!1;if(++i<o){if((r=t.src.charCodeAt(i))<256&&0!==n[r])return e||(t.pending+=t.src[i]),t.pos+=2,!0;if(10===r){for(e||t.push("hardbreak","br",0),i++;i<o&&(r=t.src.charCodeAt(i),s(r));)i++;return t.pos=i,!0}}return e||(t.pending+="\\"),t.pos++,!0}},function(t,e,r){"use strict";t.exports=function(t,e){var r,s,n,i,o,a,l=t.pos;if(96!==t.src.charCodeAt(l))return!1;for(r=l,l++,s=t.posMax;l<s&&96===t.src.charCodeAt(l);)l++;for(n=t.src.slice(r,l),i=o=l;-1!==(i=t.src.indexOf("`",o));){for(o=i+1;o<s&&96===t.src.charCodeAt(o);)o++;if(o-i===n.length)return e||((a=t.push("code_inline","code",0)).markup=n,a.content=t.src.slice(l,i).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),t.pos=o,!0}return e||(t.pending+=n),t.pos+=n.length,!0}},function(t,e,r){"use strict";var s=r(0).normalizeReference,n=r(0).isSpace;t.exports=function(t,e){var r,i,o,a,l,c,h,p,d,u="",f=t.pos,m=t.posMax,_=t.pos,g=!0;if(91!==t.src.charCodeAt(t.pos))return!1;if(l=t.pos+1,(a=t.md.helpers.parseLinkLabel(t,t.pos,!0))<0)return!1;if((c=a+1)<m&&40===t.src.charCodeAt(c)){for(g=!1,c++;c<m&&(i=t.src.charCodeAt(c),n(i)||10===i);c++);if(c>=m)return!1;for(_=c,(h=t.md.helpers.parseLinkDestination(t.src,c,t.posMax)).ok&&(u=t.md.normalizeLink(h.str),t.md.validateLink(u)?c=h.pos:u=""),_=c;c<m&&(i=t.src.charCodeAt(c),n(i)||10===i);c++);if(h=t.md.helpers.parseLinkTitle(t.src,c,t.posMax),c<m&&_!==c&&h.ok)for(d=h.str,c=h.pos;c<m&&(i=t.src.charCodeAt(c),n(i)||10===i);c++);else d="";(c>=m||41!==t.src.charCodeAt(c))&&(g=!0),c++}if(g){if(void 0===t.env.references)return!1;if(c<m&&91===t.src.charCodeAt(c)?(_=c+1,(c=t.md.helpers.parseLinkLabel(t,c))>=0?o=t.src.slice(_,c++):c=a+1):c=a+1,o||(o=t.src.slice(l,a)),!(p=t.env.references[s(o)]))return t.pos=f,!1;u=p.href,d=p.title}return e||(t.pos=l,t.posMax=a,t.push("link_open","a",1).attrs=r=[["href",u]],d&&r.push(["title",d]),t.md.inline.tokenize(t),t.push("link_close","a",-1)),t.pos=c,t.posMax=m,!0}},function(t,e,r){"use strict";var s=r(0).normalizeReference,n=r(0).isSpace;t.exports=function(t,e){var r,i,o,a,l,c,h,p,d,u,f,m,_,g="",v=t.pos,y=t.posMax;if(33!==t.src.charCodeAt(t.pos))return!1;if(91!==t.src.charCodeAt(t.pos+1))return!1;if(c=t.pos+2,(l=t.md.helpers.parseLinkLabel(t,t.pos+1,!1))<0)return!1;if((h=l+1)<y&&40===t.src.charCodeAt(h)){for(h++;h<y&&(i=t.src.charCodeAt(h),n(i)||10===i);h++);if(h>=y)return!1;for(_=h,(d=t.md.helpers.parseLinkDestination(t.src,h,t.posMax)).ok&&(g=t.md.normalizeLink(d.str),t.md.validateLink(g)?h=d.pos:g=""),_=h;h<y&&(i=t.src.charCodeAt(h),n(i)||10===i);h++);if(d=t.md.helpers.parseLinkTitle(t.src,h,t.posMax),h<y&&_!==h&&d.ok)for(u=d.str,h=d.pos;h<y&&(i=t.src.charCodeAt(h),n(i)||10===i);h++);else u="";if(h>=y||41!==t.src.charCodeAt(h))return t.pos=v,!1;h++}else{if(void 0===t.env.references)return!1;if(h<y&&91===t.src.charCodeAt(h)?(_=h+1,(h=t.md.helpers.parseLinkLabel(t,h))>=0?a=t.src.slice(_,h++):h=l+1):h=l+1,a||(a=t.src.slice(c,l)),!(p=t.env.references[s(a)]))return t.pos=v,!1;g=p.href,u=p.title}return e||(o=t.src.slice(c,l),t.md.inline.parse(o,t.md,t.env,m=[]),(f=t.push("image","img",0)).attrs=r=[["src",g],["alt",""]],f.children=m,f.content=o,u&&r.push(["title",u])),t.pos=h,t.posMax=y,!0}},function(t,e,r){"use strict";var s=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,n=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;t.exports=function(t,e){var r,i,o,a,l,c,h=t.pos;return 60===t.src.charCodeAt(h)&&(!((r=t.src.slice(h)).indexOf(">")<0)&&(n.test(r)?(a=(i=r.match(n))[0].slice(1,-1),l=t.md.normalizeLink(a),!!t.md.validateLink(l)&&(e||((c=t.push("link_open","a",1)).attrs=[["href",l]],c.markup="autolink",c.info="auto",(c=t.push("text","",0)).content=t.md.normalizeLinkText(a),(c=t.push("link_close","a",-1)).markup="autolink",c.info="auto"),t.pos+=i[0].length,!0)):!!s.test(r)&&(a=(o=r.match(s))[0].slice(1,-1),l=t.md.normalizeLink("mailto:"+a),!!t.md.validateLink(l)&&(e||((c=t.push("link_open","a",1)).attrs=[["href",l]],c.markup="autolink",c.info="auto",(c=t.push("text","",0)).content=t.md.normalizeLinkText(a),(c=t.push("link_close","a",-1)).markup="autolink",c.info="auto"),t.pos+=o[0].length,!0))))}},function(t,e,r){"use strict";var s=r(10).HTML_TAG_RE;t.exports=function(t,e){var r,n,i,o=t.pos;return!!t.md.options.html&&(i=t.posMax,!(60!==t.src.charCodeAt(o)||o+2>=i)&&(!(33!==(r=t.src.charCodeAt(o+1))&&63!==r&&47!==r&&!function(t){var e=32|t;return e>=97&&e<=122}(r))&&(!!(n=t.src.slice(o).match(s))&&(e||(t.push("html_inline","",0).content=t.src.slice(o,o+n[0].length)),t.pos+=n[0].length,!0))))}},function(t,e,r){"use strict";var s=r(5),n=r(0).has,i=r(0).isValidEntityCode,o=r(0).fromCodePoint,a=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;t.exports=function(t,e){var r,c,h=t.pos,p=t.posMax;if(38!==t.src.charCodeAt(h))return!1;if(h+1<p)if(35===t.src.charCodeAt(h+1)){if(c=t.src.slice(h).match(a))return e||(r="x"===c[1][0].toLowerCase()?parseInt(c[1].slice(1),16):parseInt(c[1],10),t.pending+=i(r)?o(r):o(65533)),t.pos+=c[0].length,!0}else if((c=t.src.slice(h).match(l))&&n(s,c[1]))return e||(t.pending+=s[c[1]]),t.pos+=c[0].length,!0;return e||(t.pending+="&"),t.pos++,!0}},function(t,e,r){"use strict";function s(t,e){var r,s,n,i,o,a,l,c,h={},p=e.length;for(r=0;r<p;r++)if((n=e[r]).length=n.length||0,n.close){for(h.hasOwnProperty(n.marker)||(h[n.marker]=[-1,-1,-1]),o=h[n.marker][n.length%3],a=-1,s=r-n.jump-1;s>o;s-=i.jump+1)if((i=e[s]).marker===n.marker&&(-1===a&&(a=s),i.open&&i.end<0&&i.level===n.level&&(l=!1,(i.close||n.open)&&(i.length+n.length)%3==0&&(i.length%3==0&&n.length%3==0||(l=!0)),!l))){c=s>0&&!e[s-1].open?e[s-1].jump+1:0,n.jump=r-s+c,n.open=!1,i.end=r,i.jump=c,i.close=!1,a=-1;break}-1!==a&&(h[n.marker][(n.length||0)%3]=a)}}t.exports=function(t){var e,r=t.tokens_meta,n=t.tokens_meta.length;for(s(0,t.delimiters),e=0;e<n;e++)r[e]&&r[e].delimiters&&s(0,r[e].delimiters)}},function(t,e,r){"use strict";t.exports=function(t){var e,r,s=0,n=t.tokens,i=t.tokens.length;for(e=r=0;e<i;e++)n[e].nesting<0&&s--,n[e].level=s,n[e].nesting>0&&s++,"text"===n[e].type&&e+1<i&&"text"===n[e+1].type?n[e+1].content=n[e].content+n[e+1].content:(e!==r&&(n[r]=n[e]),r++);e!==r&&(n.length=r)}},function(t,e,r){"use strict";var s=r(3),n=r(0).isWhiteSpace,i=r(0).isPunctChar,o=r(0).isMdAsciiPunct;function a(t,e,r,s){this.src=t,this.env=r,this.md=e,this.tokens=s,this.tokens_meta=Array(s.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[]}a.prototype.pushPending=function(){var t=new s("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t},a.prototype.push=function(t,e,r){this.pending&&this.pushPending();var n=new s(t,e,r),i=null;return r<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,r>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(i),n},a.prototype.scanDelims=function(t,e){var r,s,a,l,c,h,p,d,u,f=t,m=!0,_=!0,g=this.posMax,v=this.src.charCodeAt(t);for(r=t>0?this.src.charCodeAt(t-1):32;f<g&&this.src.charCodeAt(f)===v;)f++;return a=f-t,s=f<g?this.src.charCodeAt(f):32,p=o(r)||i(String.fromCharCode(r)),u=o(s)||i(String.fromCharCode(s)),h=n(r),(d=n(s))?m=!1:u&&(h||p||(m=!1)),h?_=!1:p&&(d||u||(_=!1)),e?(l=m,c=_):(l=m&&(!_||p),c=_&&(!m||u)),{can_open:l,can_close:c,length:a}},a.prototype.Token=s,t.exports=a},function(t,e,r){"use strict";function s(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach((function(e){e&&Object.keys(e).forEach((function(r){t[r]=e[r]}))})),t}function n(t){return Object.prototype.toString.call(t)}function i(t){return"[object Function]"===n(t)}function o(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var a={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};var l={"http:":{validate:function(t,e,r){var s=t.slice(e);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(s)?s.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,r){var s=t.slice(e);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(s)?e>=3&&":"===t[e-3]||e>=3&&"/"===t[e-3]?0:s.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,r){var s=t.slice(e);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(s)?s.match(r.re.mailto)[0].length:0}}},c="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function h(t){var e=t.re=r(62)(t.__opts__),s=t.__tlds__.slice();function a(t){return t.replace("%TLDS%",e.src_tlds)}t.onCompile(),t.__tlds_replaced__||s.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),s.push(e.src_xn),e.src_tlds=s.join("|"),e.email_fuzzy=RegExp(a(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(a(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(a(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(a(e.tpl_host_fuzzy_test),"i");var l=[];function c(t,e){throw new Error('(LinkifyIt) Invalid schema "'+t+'": '+e)}t.__compiled__={},Object.keys(t.__schemas__).forEach((function(e){var r=t.__schemas__[e];if(null!==r){var s={validate:null,link:null};if(t.__compiled__[e]=s,"[object Object]"===n(r))return!function(t){return"[object RegExp]"===n(t)}(r.validate)?i(r.validate)?s.validate=r.validate:c(e,r):s.validate=function(t){return function(e,r){var s=e.slice(r);return t.test(s)?s.match(t)[0].length:0}}(r.validate),void(i(r.normalize)?s.normalize=r.normalize:r.normalize?c(e,r):s.normalize=function(t,e){e.normalize(t)});!function(t){return"[object String]"===n(t)}(r)?c(e,r):l.push(e)}})),l.forEach((function(e){t.__compiled__[t.__schemas__[e]]&&(t.__compiled__[e].validate=t.__compiled__[t.__schemas__[e]].validate,t.__compiled__[e].normalize=t.__compiled__[t.__schemas__[e]].normalize)})),t.__compiled__[""]={validate:null,normalize:function(t,e){e.normalize(t)}};var h=Object.keys(t.__compiled__).filter((function(e){return e.length>0&&t.__compiled__[e]})).map(o).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+h+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+h+")","ig"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),function(t){t.__index__=-1,t.__text_cache__=""}(t)}function p(t,e){var r=t.__index__,s=t.__last_index__,n=t.__text_cache__.slice(r,s);this.schema=t.__schema__.toLowerCase(),this.index=r+e,this.lastIndex=s+e,this.raw=n,this.text=n,this.url=n}function d(t,e){var r=new p(t,e);return t.__compiled__[r.schema].normalize(r,t),r}function u(t,e){if(!(this instanceof u))return new u(t,e);var r;e||(r=t,Object.keys(r||{}).reduce((function(t,e){return t||a.hasOwnProperty(e)}),!1)&&(e=t,t={})),this.__opts__=s({},a,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=s({},l,t),this.__compiled__={},this.__tlds__=c,this.__tlds_replaced__=!1,this.re={},h(this)}u.prototype.add=function(t,e){return this.__schemas__[t]=e,h(this),this},u.prototype.set=function(t){return this.__opts__=s(this.__opts__,t),this},u.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;var e,r,s,n,i,o,a,l;if(this.re.schema_test.test(t))for((a=this.re.schema_search).lastIndex=0;null!==(e=a.exec(t));)if(n=this.testSchemaAt(t,e[2],a.lastIndex)){this.__schema__=e[2],this.__index__=e.index+e[1].length,this.__last_index__=e.index+e[0].length+n;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=t.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||l<this.__index__)&&null!==(r=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(i=r.index+r[1].length,(this.__index__<0||i<this.__index__)&&(this.__schema__="",this.__index__=i,this.__last_index__=r.index+r[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&null!==(s=t.match(this.re.email_fuzzy))&&(i=s.index+s[1].length,o=s.index+s[0].length,(this.__index__<0||i<this.__index__||i===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=i,this.__last_index__=o)),this.__index__>=0},u.prototype.pretest=function(t){return this.re.pretest.test(t)},u.prototype.testSchemaAt=function(t,e,r){return this.__compiled__[e.toLowerCase()]?this.__compiled__[e.toLowerCase()].validate(t,r,this):0},u.prototype.match=function(t){var e=0,r=[];this.__index__>=0&&this.__text_cache__===t&&(r.push(d(this,e)),e=this.__last_index__);for(var s=e?t.slice(e):t;this.test(s);)r.push(d(this,e)),s=s.slice(this.__last_index__),e+=this.__last_index__;return r.length?r:null},u.prototype.tlds=function(t,e){return t=Array.isArray(t)?t:[t],e?(this.__tlds__=this.__tlds__.concat(t).sort().filter((function(t,e,r){return t!==r[e-1]})).reverse(),h(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,h(this),this)},u.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),"mailto:"!==t.schema||/^mailto:/i.test(t.url)||(t.url="mailto:"+t.url)},u.prototype.onCompile=function(){},t.exports=u},function(t,e,r){"use strict";t.exports=function(t){var e={};e.src_Any=r(7).source,e.src_Cc=r(8).source,e.src_Z=r(9).source,e.src_P=r(1).source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");return e.src_pseudo_letter="(?:(?![><｜]|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|[><｜]|"+e.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+e.src_ZCc+").|\\!+(?!"+e.src_ZCc+"|[!]).|\\?(?!"+e.src_ZCc+"|[?]).)+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}},function(t,e,r){(function(t,s){var n;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(i){e&&e.nodeType,t&&t.nodeType;var o="object"==typeof s&&s;o.global!==o&&o.window!==o&&o.self;var a,l=2147483647,c=/^xn--/,h=/[^\x20-\x7E]/,p=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},u=Math.floor,f=String.fromCharCode;function m(t){throw new RangeError(d[t])}function _(t,e){for(var r=t.length,s=[];r--;)s[r]=e(t[r]);return s}function g(t,e){var r=t.split("@"),s="";return r.length>1&&(s=r[0]+"@",t=r[1]),s+_((t=t.replace(p,".")).split("."),e).join(".")}function v(t){for(var e,r,s=[],n=0,i=t.length;n<i;)(e=t.charCodeAt(n++))>=55296&&e<=56319&&n<i?56320==(64512&(r=t.charCodeAt(n++)))?s.push(((1023&e)<<10)+(1023&r)+65536):(s.push(e),n--):s.push(e);return s}function y(t){return _(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function b(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function C(t,e,r){var s=0;for(t=r?u(t/700):t>>1,t+=u(t/e);t>455;s+=36)t=u(t/35);return u(s+36*t/(t+38))}function w(t){var e,r,s,n,i,o,a,c,h,p,d,f=[],_=t.length,g=0,v=128,b=72;for((r=t.lastIndexOf("-"))<0&&(r=0),s=0;s<r;++s)t.charCodeAt(s)>=128&&m("not-basic"),f.push(t.charCodeAt(s));for(n=r>0?r+1:0;n<_;){for(i=g,o=1,a=36;n>=_&&m("invalid-input"),((c=(d=t.charCodeAt(n++))-48<10?d-22:d-65<26?d-65:d-97<26?d-97:36)>=36||c>u((l-g)/o))&&m("overflow"),g+=c*o,!(c<(h=a<=b?1:a>=b+26?26:a-b));a+=36)o>u(l/(p=36-h))&&m("overflow"),o*=p;b=C(g-i,e=f.length+1,0==i),u(g/e)>l-v&&m("overflow"),v+=u(g/e),g%=e,f.splice(g++,0,v)}return y(f)}function z(t){var e,r,s,n,i,o,a,c,h,p,d,_,g,y,w,z=[];for(_=(t=v(t)).length,e=128,r=0,i=72,o=0;o<_;++o)(d=t[o])<128&&z.push(f(d));for(s=n=z.length,n&&z.push("-");s<_;){for(a=l,o=0;o<_;++o)(d=t[o])>=e&&d<a&&(a=d);for(a-e>u((l-r)/(g=s+1))&&m("overflow"),r+=(a-e)*g,e=a,o=0;o<_;++o)if((d=t[o])<e&&++r>l&&m("overflow"),d==e){for(c=r,h=36;!(c<(p=h<=i?1:h>=i+26?26:h-i));h+=36)w=c-p,y=36-p,z.push(f(b(p+w%y,0))),c=u(w/y);z.push(f(b(c,0))),i=C(r,g,s==n),r=0,++s}++r,++e}return z.join("")}a={version:"1.4.1",ucs2:{decode:v,encode:y},decode:w,encode:z,toASCII:function(t){return g(t,(function(t){return h.test(t)?"xn--"+z(t):t}))},toUnicode:function(t){return g(t,(function(t){return c.test(t)?w(t.slice(4).toLowerCase()):t}))}},void 0===(n=function(){return a}.call(e,r,e,t))||(t.exports=n)}()}).call(this,r(64)(t),r(65))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},function(t,e,r){"use strict";t.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},function(t,e,r){"use strict";t.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},function(t,e,r){"use strict";r.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,r=null)=>{for(;e!==r;){const r=e.nextSibling;t.removeChild(e),e=r}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${o}`);class l{constructor(t,e){this.parts=[],this.element=e;const r=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,l=-1,h=0;const{strings:u,values:{length:f}}=t;for(;h<f;){const t=n.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:r}=e;let s=0;for(let t=0;t<r;t++)c(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=u[h],r=d.exec(e)[2],s=r.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const i=n.split(a);this.parts.push({type:"attribute",index:l,name:r,strings:i}),h+=i.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const s=t.parentNode,n=e.split(a),i=n.length-1;for(let e=0;e<i;e++){let r,i=n[e];if(""===i)r=p();else{const t=d.exec(i);null!==t&&c(t[2],"$lit$")&&(i=i.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),r=document.createTextNode(i)}s.insertBefore(r,t),this.parts.push({type:"node",index:++l})}""===n[i]?(s.insertBefore(p(),t),r.push(t)):t.data=n[i],h+=i}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&l!==o||(l++,e.insertBefore(p(),t)),o=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(r.push(t),l--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),h++}}else n.currentNode=s.pop()}for(const t of r)t.parentNode.removeChild(t)}}const c=(t,e)=>{const r=t.length-e.length;return r>=0&&t.slice(r)===e},h=t=>-1!==t.index,p=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:r},parts:s}=t,n=document.createTreeWalker(r,133,null,!1);let i=m(s),o=s[i],a=-1,l=0;const c=[];let h=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,i=m(s,i),o=s[i]}c.forEach(t=>t.parentNode.removeChild(t))}const f=t=>{let e=11===t.nodeType?0:1;const r=document.createTreeWalker(t,133,null,!1);for(;r.nextNode();)e++;return e},m=(t,e=-1)=>{for(let r=e+1;r<t.length;r++){const e=t[r];if(h(e))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,g=t=>"function"==typeof t&&_.has(t),v={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class b{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){let e=0;for(const r of this.__parts)void 0!==r&&r.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],r=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let i,o=0,a=0,l=n.nextNode();for(;o<r.length;)if(i=r[o],h(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=` ${i} `;class w{constructor(t,e,r,s){this.strings=t,this.values=e,this.type=r,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",r=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");r=(n>-1||r)&&-1===t.indexOf("--\x3e",n+1);const a=d.exec(t);e+=null===a?t+(r?C:o):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const z=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class S{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[];for(let t=0;t<r.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new k(this)}_getValue(){const t=this.strings,e=t.length-1;let r="";for(let s=0;s<e;s++){r+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(z(t)||!x(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||z(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class M{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}const t=this.__pendingValue;t!==v&&(z(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):x(t)?this.__commitIterable(t):t===y?(this.value=y,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const r=new b(e,t.processor,this.options),s=r._clone();r.update(t.values),this.__commitNode(s),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let r,s=0;for(const n of t)r=e[s],void 0===r&&(r=new M(this.options),e.push(r),0===s?r.appendIntoPart(this):r.insertAfterPart(e[s-1])),r.setValue(n),r.commit(),s++;s<e.length&&(e.length=s,this.clear(r&&r.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class P{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=v}}class A extends S{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends k{}let L=!1;(()=>{try{const t={get capture(){return L=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class H{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=this.__pendingValue,e=this.value,r=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||r);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(L?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let e=D.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},D.set(t.type,e));let r=e.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(i);return r=e.keyString.get(s),void 0===r&&(r=new l(t,t.getTemplateElement()),e.keyString.set(s,r)),e.stringsArray.set(t.strings,r),r}const D=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,r,s){const n=e[0];if("."===n){return new A(t,e.slice(1),r).parts}if("@"===n)return[new H(t,e.slice(1),s.eventContext)];if("?"===n)return[new P(t,e.slice(1),r)];return new S(t,e,r).parts}handleTextExpression(t){return new M(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const I=(t,...e)=>new w(t,e,"html",N),R=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const q=t=>e=>{const r=R(e.type,t);let s=D.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},D.set(r,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(i);if(n=s.keyString.get(o),void 0===n){const r=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(r,t),n=new l(e,r),s.keyString.set(o,n)}return s.stringsArray.set(e.strings,n),n},B=["html","svg"],U=new Set,j=(t,e,r)=>{U.add(t);const s=r?r.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:i}=n;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<i;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{B.forEach(e=>{const r=D.get(R(e,t));void 0!==r&&r.keyString.forEach(t=>{const{element:{content:e}}=t,r=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),u(t,r)})})})(t);const a=s.content;r?function(t,e,r=null){const{element:{content:s},parts:n}=t;if(null==r)return void s.appendChild(e);const i=document.createTreeWalker(s,133,null,!1);let o=m(n),a=0,l=-1;for(;i.nextNode();){l++;for(i.currentNode===r&&(a=f(e),r.parentNode.insertBefore(e,r));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=m(n,o);return}o=m(n,o)}}}(r,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(r){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),u(r,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const $={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:G};class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,r)=>{const s=this._attributeNameForProperty(r,e);void 0!==s&&(this._attributeToPropertyMap.set(s,r),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const r="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,r,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(r){const s=this[t];this[e]=r,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||J}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const r of e)this.createProperty(r,t[r])}}static _attributeNameForProperty(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,r=G){return r(t,e)}static _propertyValueFromAttribute(t,e){const r=e.type,s=e.converter||$,n="function"==typeof s?s:s.fromAttribute;return n?n(t,r):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const r=e.type,s=e.converter;return(s&&s.toAttribute||$.toAttribute)(t,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e,r=J){const s=this.constructor,n=s._attributeNameForProperty(t,r);if(void 0!==n){const t=s._propertyValueToAttribute(e,r);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const r=this.constructor,s=r._attributeToPropertyMap.get(t);if(void 0!==s){const t=r.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let r=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Z.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const W={};class X extends Z{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,r)=>t.reduceRight((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),s=[];r.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==W&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return W}}function K(){return I`
    <style>
      :host {
        display: block;
        max-width: 900px;
      }

      #search-input-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        padding: 30px 10px;
      }

      #search-input-wrapper .input-container {
        display: inline-block;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
      }

      #search-input {
        flex-grow: 1;
        height: 44px;
        width: 100%;
        min-width: 200px;
        max-width: 600px;
        position: relative;
        border: none;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        background-color: var(--color-white);
        color: var(--color-hint-text);
        border-right: transparent;
        border-radius: none;
      }

      #search-input-button {
        background-color:  var(--color-white);
        border: none;
        border-radius: none;
      }

      #search-input-button > iron-icon {
        color: var(--color-ucdblue70);
        font-size: 24px;
      }

      #search-dropdown-outer-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0 0 0 30px;
      }

      #search-dropdown-outer-wrapper .sort-by {
        margin-right: 10px;
        color: var(--color-aggie-blue);
        font-size: 14px;
        font-weight: bold; 
        text-align: right;
        text-transform: uppercase;
      }

      .search-dropdown-inner-wrapper {
        padding: 10px;
        white-space: nowrap;
        background-color: #002851;
      }

      #search-dropdown {
        padding: 10px 52px 10px 10px;
        color: white;
        font-size: 16px;
        background-color: var(--color-aggie-blue);
        outline-offset: 1px;
        border: none;
        border-radius: 0;

        /* padding: 2px 2px 2px 2px; */
        border: none; 
        background-image: url("/images/expand-more.svg");
        background-position: right center;
        background-repeat: no-repeat;

        -o-appearance: none;
        -ms-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      @media only screen and (max-width: 600px) {
        #search-input-wrapper {
          flex-flow: column wrap;
          padding: 15px 15px 0px 15px;
        }

        #search-input-wrapper .input-container {
          padding: 0 0 30px 0;
        }

        #search-input {
          width: 100%;
          max-width: initial;
        }

        #search-input-button {
          left: 0;
        }

        #search-dropdown-outer-wrapper {
          justify-content: flex-end;
        }
      }
    </style>

    <div id="search-input-wrapper">
      <div class="input-container">
        <input type="text" 
          id="search-input" 
          name="search-input" 
          placeholder="Search databases" 
          @keyup="${this._onInputKeyup}">
        <button id="search-input-button" type="button">
          <iron-icon class="search-icon" icon="search"></iron-icon>
        </button>
      </div>
      <div id="search-dropdown-outer-wrapper">
        <span class="sort-by">Sort&nbsp;By</span>
        <select id="search-dropdown" class="search-dropdown" dir="rtl" @change="${this._onSelectChange}">
          <option value="a-z">Name A-Z</option>
          <option value="z-a">Name Z-A</option>
        </select>
      </div>
    </div>
  `}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/X.finalized=!0,X.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,i=O.has(e),o=F&&11===e.nodeType&&!!e.host,a=o&&!U.has(s),l=a?document.createDocumentFragment():e;if(((t,e,r)=>{let s=O.get(e);void 0===s&&(n(e,e.firstChild),O.set(e,s=new M(Object.assign({templateFactory:T},r))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:q(s)},r)),a){const t=O.get(l);O.delete(l);const r=t.value instanceof b?t.value.template:void 0;j(s,l,r),n(e,e.firstChild),e.appendChild(l),O.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};const Q=!(window.ShadyDOM&&window.ShadyDOM.inUse);let tt,et;function rt(t){tt=(!t||!t.shimcssproperties)&&(Q||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(et=window.ShadyCSS.cssBuild);const st=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?tt=window.ShadyCSS.nativeCss:window.ShadyCSS?(rt(window.ShadyCSS),window.ShadyCSS=void 0):rt(window.WebComponents&&window.WebComponents.flags);const nt=tt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class it{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ot(t){return function t(e,r){let s=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;s=r.substring(t,e.start-1),s=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(s),s=s.replace(pt.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let n=e.parsedSelector=e.selector=s.trim();e.atRule=0===n.indexOf(ft),e.atRule?0===n.indexOf(ut)?e.type=lt.MEDIA_RULE:n.match(pt.keyframesRule)&&(e.type=lt.KEYFRAMES_RULE,e.keyframesName=e.selector.split(pt.multipleSpaces).pop()):0===n.indexOf(dt)?e.type=lt.MIXIN_RULE:e.type=lt.STYLE_RULE}let n=e.rules;if(n)for(let e,s=0,i=n.length;s<i&&(e=n[s]);s++)t(e,r);return e}(function(t){let e=new it;e.start=0,e.end=t.length;let r=e;for(let s=0,n=t.length;s<n;s++)if(t[s]===ct){r.rules||(r.rules=[]);let t=r,e=t.rules[t.rules.length-1]||null;r=new it,r.start=s+1,r.parent=t,r.previous=e,t.rules.push(r)}else t[s]===ht&&(r.end=s+1,r=r.parent||e);return e}(t=t.replace(pt.comments,"").replace(pt.port,"")),t)}function at(t,e,r=""){let s="";if(t.cssText||t.rules){let r=t.rules;if(r&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(dt)}(r))for(let t,n=0,i=r.length;n<i&&(t=r[n]);n++)s=at(t,e,s);else s=e?t.cssText:function(t){return function(t){return t.replace(pt.mixinApply,"").replace(pt.varApply,"")}(t=function(t){return t.replace(pt.customProp,"").replace(pt.mixinProp,"")}(t))}(t.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(t.selector&&(r+=t.selector+" "+ct+"\n"),r+=s,t.selector&&(r+=ht+"\n\n")),r}const lt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ct="{",ht="}",pt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},dt="--",ut="@media",ft="@",mt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,_t=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,gt=/@media\s(.*)/,vt=new Set;function yt(t){const e=t.textContent;if(!vt.has(e)){vt.add(e);const t=document.createElement("style");t.setAttribute("shady-unscoped",""),t.textContent=e,document.head.appendChild(t)}}function bt(t){return t.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ct(t,e){return t?("string"==typeof t&&(t=ot(t)),e&&zt(t,e),at(t,nt)):""}function wt(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=ot(t.textContent)),t.__cssRules||null}function zt(t,e,r,s){if(!t)return;let n=!1,i=t.type;if(s&&i===lt.MEDIA_RULE){let e=t.selector.match(gt);e&&(window.matchMedia(e[1]).matches||(n=!0))}i===lt.STYLE_RULE?e(t):r&&i===lt.KEYFRAMES_RULE?r(t):i===lt.MIXIN_RULE&&(n=!0);let o=t.rules;if(o&&!n)for(let t,n=0,i=o.length;n<i&&(t=o[n]);n++)zt(t,e,r,s)}function xt(t,e){let r=0;for(let s=e,n=t.length;s<n;s++)if("("===t[s])r++;else if(")"===t[s]&&0==--r)return s;return-1}window.ShadyDOM&&window.ShadyDOM.wrap;function St(t){if(void 0!==et)return et;if(void 0===t.__cssBuild){const e=t.getAttribute("css-build");if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if("css-build"===t[0])return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/(t),t.__cssBuild=e}}return t.__cssBuild||""}function kt(t){return""!==St(t)}function Mt(t,e){for(let r in e)null===r?t.style.removeProperty(r):t.style.setProperty(r,e[r])}function Pt(t,e){const r=window.getComputedStyle(t).getPropertyValue(e);return r?r.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const At=/;\s*/m,Et=/^\s*(initial)|(inherit)\s*$/,Lt=/\s*!important/;class Ht{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Vt=null;class Tt{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ht}detectMixin(t){return function(t){const e=_t.test(t)||mt.test(t);return _t.lastIndex=0,mt.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],r=t.querySelectorAll("style");for(let t=0;t<r.length;t++){const s=r[t];bt(s)?Q||(yt(s),s.parentNode.removeChild(s)):(e.push(s.textContent),s.parentNode.removeChild(s))}return e.join("").trim()}(t.content);if(e){const r=document.createElement("style");return r.textContent=e,t.content.insertBefore(r,t.content.firstChild),r}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const r=t._gatheredStyle;return r?this.transformStyle(r,e):null}transformStyle(t,e=""){let r=wt(t);return this.transformRules(r,e),t.textContent=Ct(r),r}transformCustomStyle(t){let e=wt(t);return zt(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Ct(e),e}transformRules(t,e){this._currentElement=e,zt(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(mt,(t,r,s,n)=>this._produceCssProperties(t,r,s,n,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const r={};let s=!1;return zt(e,e=>{s=s||e===t,s||e.selector===t.selector&&Object.assign(r,this._cssTextToMap(e.parsedCssText))}),r}_consumeCssProperties(t,e){let r=null;for(;r=_t.exec(t);){let s=r[0],n=r[1],i=r.index,o=i+s.indexOf("@apply"),a=i+s.length,l=t.slice(0,o),c=t.slice(a),h=e?this._fallbacksFromPreviousRules(e):{};Object.assign(h,this._cssTextToMap(l));let p=this._atApplyToCssProperties(n,h);t=`${l}${p}${c}`,_t.lastIndex=i+p.length}return t}_atApplyToCssProperties(t,e){t=t.replace(At,"");let r=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){let n,i,o;this._currentElement&&(s.dependants[this._currentElement]=!0);const a=s.properties;for(n in a)o=e&&e[n],i=[n,": var(",t,"_-_",n],o&&i.push(",",o.replace(Lt,"")),i.push(")"),Lt.test(a[n])&&i.push(" !important"),r.push(i.join(""))}return r.join("; ")}_replaceInitialOrInherit(t,e){let r=Et.exec(e);return r&&(e=r[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let r,s,n=t.split(";"),i={};for(let t,o,a=0;a<n.length;a++)t=n[a],t&&(o=t.split(":"),o.length>1&&(r=o[0].trim(),s=o.slice(1).join(":"),e&&(s=this._replaceInitialOrInherit(r,s)),i[r]=s));return i}_invalidateMixinEntry(t){if(Vt)for(let e in t.dependants)e!==this._currentElement&&Vt(e)}_produceCssProperties(t,e,r,s,n){if(r&&function t(e,r){let s=e.indexOf("var(");if(-1===s)return r(e,"","","");let n=xt(e,s+3),i=e.substring(s+4,n),o=e.substring(0,s),a=t(e.substring(n+1),r),l=i.indexOf(",");return-1===l?r(o,i.trim(),"",a):r(o,i.substring(0,l).trim(),i.substring(l+1).trim(),a)}(r,(t,e)=>{e&&this._map.get(e)&&(s=`@apply ${e};`)}),!s)return t;let i=this._consumeCssProperties(""+s,n),o=t.slice(0,t.indexOf("--")),a=this._cssTextToMap(i,!0),l=a,c=this._map.get(e),h=c&&c.properties;h?l=Object.assign(Object.create(h),a):this._map.set(e,l);let p,d,u=[],f=!1;for(p in l)d=a[p],void 0===d&&(d="initial"),h&&!(p in h)&&(f=!0),u.push(`${e}_-_${p}: ${d}`);return f&&this._invalidateMixinEntry(c),c&&(c.properties=l),r&&(o=`${t};${o}`),`${o}${u.join("; ")};`}}Tt.prototype.detectMixin=Tt.prototype.detectMixin,Tt.prototype.transformStyle=Tt.prototype.transformStyle,Tt.prototype.transformCustomStyle=Tt.prototype.transformCustomStyle,Tt.prototype.transformRules=Tt.prototype.transformRules,Tt.prototype.transformRule=Tt.prototype.transformRule,Tt.prototype.transformTemplate=Tt.prototype.transformTemplate,Tt.prototype._separator="_-_",Object.defineProperty(Tt.prototype,"invalidCallback",{get:()=>Vt,set(t){Vt=t}});var Dt=Tt;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var Ot={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Nt="_applyShimCurrentVersion",It="_applyShimNextVersion",Rt=Promise.resolve();function Ft(t){let e=Ot[t];e&&function(t){t[Nt]=t[Nt]||0,t._applyShimValidatingVersion=t._applyShimValidatingVersion||0,t[It]=(t[It]||0)+1}(e)}function qt(t){return t[Nt]===t[It]}function Bt(t){return!qt(t)&&t._applyShimValidatingVersion===t[It]}function Ut(t){t._applyShimValidatingVersion=t[It],t._validating||(t._validating=!0,Rt.then((function(){t[Nt]=t[It],t._validating=!1})))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let jt,$t=null,Gt=window.HTMLImports&&window.HTMLImports.whenReady||null;function Jt(t){requestAnimationFrame((function(){Gt?Gt(t):($t||($t=new Promise(t=>{jt=t}),"complete"===document.readyState?jt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&jt()})),$t.then((function(){t&&t()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zt="__shadyCSSCachedStyle";let Yt=null,Wt=null;class Xt{constructor(){this.customStyles=[],this.enqueued=!1,Jt(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Wt&&(this.enqueued=!0,Jt(Wt))}addCustomStyle(t){t.__seenByShadyCSS||(t.__seenByShadyCSS=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Zt])return t[Zt];let e;return e=t.getStyle?t.getStyle():t,e}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const r=t[e];if(r[Zt])continue;const s=this.getStyleForCustomStyle(r);if(s){const t=s.__appliedElement||s;Yt&&Yt(t),r[Zt]=t}}return t}}Xt.prototype.addCustomStyle=Xt.prototype.addCustomStyle,Xt.prototype.getStyleForCustomStyle=Xt.prototype.getStyleForCustomStyle,Xt.prototype.processStyles=Xt.prototype.processStyles,Object.defineProperties(Xt.prototype,{transformCallback:{get:()=>Yt,set(t){Yt=t}},validateCallback:{get:()=>Wt,set(t){let e=!1;Wt||(e=!0),Wt=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Kt=new Dt;class Qt{constructor(){this.customStyleInterface=null,Kt.invalidCallback=Ft}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Kt.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),kt(t))return;Ot[e]=t;let r=Kt.transformTemplate(t,e);t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let r=t[e],s=this.customStyleInterface.getStyleForCustomStyle(r);s&&Kt.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Mt(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,r="",s="";return e?e.indexOf("-")>-1?r=e:(s=e,r=t.getAttribute&&t.getAttribute("is")||""):(r=t.is,s=t.extends),{is:r,typeExtension:s}}(t),r=Ot[e];if((!r||!kt(r))&&r&&!qt(r)){Bt(r)||(this.prepareTemplate(r,e),Ut(r));let s=t.shadowRoot;if(s){let t=s.querySelector("style");t&&(t.__cssRules=r._styleAst,t.textContent=Ct(r._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Qt;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,r,s){t.flushCustomStyles(),t.prepareTemplate(e,r)},prepareTemplateStyles(t,e,r){window.ShadyCSS.prepareTemplate(t,e,r)},prepareTemplateDom(t,e){},styleSubtree(e,r){t.flushCustomStyles(),t.styleSubtree(e,r)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Pt(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:nt,nativeShadow:Q,cssBuild:et,disableRuntime:st},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Kt,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let te,ee,re=/(url\()([^)]*)(\))/g,se=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function ne(t,e){if(t&&se.test(t))return t;if("//"===t)return t;if(void 0===te){te=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",te="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),te)try{return new URL(t,e).href}catch(e){return t}return ee||(ee=document.implementation.createHTMLDocument("temp"),ee.base=ee.createElement("base"),ee.head.appendChild(ee.base),ee.anchor=ee.createElement("a"),ee.body.appendChild(ee.anchor)),ee.base.href=e,ee.anchor.href=t,ee.anchor.href||t}function ie(t,e){return t.replace(re,(function(t,r,s,n){return r+"'"+ne(s.replace(/["']/g,""),e)+"'"+n}))}function oe(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ae=!window.ShadyDOM||!window.ShadyDOM.inUse,le=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,ae&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let ce=window.Polymer&&window.Polymer.rootPath||oe(document.baseURI||window.location.href);let he=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let pe=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let de=window.Polymer&&window.Polymer.strictTemplatePolicy||!1;let ue=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1;let fe=window.Polymer&&window.Polymer.legacyOptimizations||!1;let me=window.Polymer&&window.Polymer.legacyWarnings||!1;let _e=window.Polymer&&window.Polymer.syncInitialRender||!1;let ge=window.Polymer&&window.Polymer.legacyUndefined||!1;let ve=window.Polymer&&window.Polymer.orderedComputed||!1;let ye=!0;let be=window.Polymer&&window.Polymer.removeNestedTemplates||!1;let Ce=window.Polymer&&window.Polymer.fastDomIf||!1;let we=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;let ze=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1;let xe=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Se=0;function ke(){}ke.prototype.__mixinApplications,ke.prototype.__mixinSet;const Me=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=Se++;return function(s){let n=s.__mixinSet;if(n&&n[r])return s;let i=e,o=i.get(s);if(!o){o=t(s),i.set(s,o);let e=Object.create(o.__mixinSet||n||null);e[r]=!0,o.__mixinSet=e}return o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Pe={},Ae={};function Ee(t,e){Pe[t]=Ae[t.toLowerCase()]=e}function Le(t){return Pe[t]||Ae[t.toLowerCase()]}class He extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=Le(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,s){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=ne(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=oe(e)}return this.__assetpath}register(t){if(t=t||this.id){if(de&&void 0!==Le(t))throw Ee(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ee(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}He.prototype.modules=Pe,customElements.define("dom-module",He);function Ve(t){return He.import(t)}function Te(t){const e=ie((t.body?t.body:t).textContent,t.baseURI),r=document.createElement("style");return r.textContent=e,r}function De(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...Oe(e[t]));return r}function Oe(t){const e=Ve(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Ie(e));const r=e.querySelector("template");r&&t.push(...Ne(r,e.assetpath)),e._styles=t}return e._styles}function Ne(t,e){if(!t._styles){const r=[],s=t.content.querySelectorAll("style");for(let t=0;t<s.length;t++){let n=s[t],i=n.getAttribute("include");i&&r.push(...De(i).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(n.textContent=ie(n.textContent,e)),r.push(n)}t._styles=r}return t._styles}function Ie(t){const e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let s=r[t];if(s.import){const t=s.import,r=s.hasAttribute("shady-unscoped");if(r&&!t._unscopedStyle){const e=Te(t);e.setAttribute("shady-unscoped",""),t._unscopedStyle=e}else t._style||(t._style=Te(t));e.push(r?t._unscopedStyle:t._style)}}return e}function Re(t){let e=Ve(t);if(e&&void 0===e._cssText){let t=Fe(e),r=e.querySelector("template");r&&(t+=function(t,e){let r="";const s=Ne(t,e);for(let t=0;t<s.length;t++){let e=s[t];e.parentNode&&e.parentNode.removeChild(e),r+=e.textContent}return r}(r,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function Fe(t){let e="",r=Ie(t);for(let t=0;t<r.length;t++)e+=r[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const qe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Be(t){return t.indexOf(".")>=0}function Ue(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function je(t,e){return 0===t.indexOf(e+".")}function $e(t,e){return 0===e.indexOf(t+".")}function Ge(t,e,r){return e+r.slice(t.length)}function Je(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let s=t[r].toString().split(".");for(let t=0;t<s.length;t++)e.push(s[t])}return e.join(".")}return t}function Ze(t){return Array.isArray(t)?Je(t).split("."):t.toString().split(".")}function Ye(t,e,r){let s=t,n=Ze(e);for(let t=0;t<n.length;t++){if(!s)return;s=s[n[t]]}return r&&(r.path=n.join(".")),s}function We(t,e,r){let s=t,n=Ze(e),i=n[n.length-1];if(n.length>1){for(let t=0;t<n.length-1;t++){if(s=s[n[t]],!s)return}s[i]=r}else s[e]=r;return n.join(".")}const Xe={},Ke=/-[a-z]/g,Qe=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function tr(t){return Xe[t]||(Xe[t]=t.indexOf("-")<0?t:t.replace(Ke,t=>t[1].toUpperCase()))}function er(t){return Xe[t]||(Xe[t]=t.replace(Qe,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let rr=0,sr=0,nr=[],ir=0,or=!1,ar=document.createTextNode("");new window.MutationObserver((function(){or=!1;const t=nr.length;for(let e=0;e<t;e++){let t=nr[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}nr.splice(0,t),sr+=t})).observe(ar,{characterData:!0});const lr={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},cr={run:t=>(or||(or=!0,ar.textContent=ir++),nr.push(t),rr++),cancel(t){const e=t-sr;if(e>=0){if(!nr[e])throw new Error("invalid async handle: "+t);nr[e]=null}}},hr=cr,pr=Me(t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let s=this.__data[t],n=this._shouldPropertyChange(t,e,s);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=s),this.__data[t]=e,this.__dataPending[t]=e),n}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,hr.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,s){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,s)}_attributeToProperty(t,e,r){if(!this.__serializing){const s=this.__dataAttributes,n=s&&s[t]||t;this[n]=this._deserializeValue(e,r||this.constructor.typeForProperty(n))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const s=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=qe(t)),void 0===s?t.removeAttribute(r):t.setAttribute(r,s)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}),dr={};let ur=HTMLElement.prototype;for(;ur;){let t=Object.getOwnPropertyNames(ur);for(let e=0;e<t.length;e++)dr[t[e]]=!0;ur=Object.getPrototypeOf(ur)}const fr=Me(t=>{const e=pr(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(tr(t[e]))}static attributeNameForProperty(t){return er(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const r=this;r.hasAttribute(t)||this._valueToNodeAttribute(r,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+t)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!dr[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),mr={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let _r=!1,gr=!1;function vr(t){(function(){if(!_r){_r=!0;const t=document.createElement("textarea");t.placeholder="a",gr=t.placeholder===t.textContent}return gr})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}function yr(t){let e=t.getAttribute("is");if(e&&mr[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;)t.setAttribute(r.attributes[0].name,r.attributes[0].value),r.removeAttribute(r.attributes[0].name)}return t}function br(t,e){let r=e.parentInfo&&br(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,s=0;t;t=t.nextSibling)if(e.parentIndex===s++)return t}function Cr(t,e,r,s){s.id&&(e[s.id]=r)}function wr(t,e,r){if(r.events&&r.events.length)for(let s,n=0,i=r.events;n<i.length&&(s=i[n]);n++)t._addMethodEventListenerToNode(e,s.name,s.value,t)}function zr(t,e,r,s){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=s)}const xr=Me(t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let s=!1,n=t;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(e.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(n,e,r)||s,vr(n),n.firstChild&&this._parseTemplateChildNodes(n,e,r),n.hasAttributes&&n.hasAttributes()&&(s=this._parseTemplateNodeAttributes(n,e,r)||s),s||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let s,n=t.firstChild,i=0;n;n=s){if("template"==n.localName&&(n=yr(n)),s=n.nextSibling,n.nodeType===Node.TEXT_NODE){let r=s;for(;r&&r.nodeType===Node.TEXT_NODE;)n.textContent+=r.textContent,s=r.nextSibling,t.removeChild(r),r=s;if(e.stripWhiteSpace&&!n.textContent.trim()){t.removeChild(n);continue}}let o={parentIndex:i,parentInfo:r};this._parseTemplateNode(n,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),n.parentNode&&i++}}static _parseTemplateNestedTemplate(t,e,r){let s=t,n=this._parseTemplate(s,e);return(n.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),r.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,r){let s=!1,n=Array.from(t.attributes);for(let i,o=n.length-1;i=n[o];o--)s=this._parseTemplateNodeAttribute(t,e,r,i.name,i.value)||s;return s}static _parseTemplateNodeAttribute(t,e,r,s,n){return"on-"===s.slice(0,3)?(t.removeAttribute(s),r.events=r.events||[],r.events.push({name:s.slice(3),value:n}),!0):"id"===s&&(r.id=n,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,s=e.content||t.content,n=document.importNode(s,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let i=n.nodeList=new Array(r.length);n.$={};for(let t,s=0,o=r.length;s<o&&(t=r[s]);s++){let r=i[s]=br(n,t);Cr(0,n.$,r,t),zr(0,r,t,e),wr(this,r,t)}return n=n,n}_addMethodEventListenerToNode(t,e,r,s){let n=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(s=s||t,0,r);return this._addEventListenerToNode(t,e,n),n}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Sr=0;const kr=[],Mr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Pr=/[A-Z]/;function Ar(t,e,r){let s=t[e];if(s){if(!t.hasOwnProperty(e)&&(s=t[e]=Object.create(t[e]),r))for(let t in s){let e=s[t],r=s[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else s=t[e]={};return s}function Er(t,e,r,s,n,i){if(e){let o=!1;const a=Sr++;for(let l in r){let c=e[n?Ue(l):l];if(c)for(let e,h=0,p=c.length;h<p&&(e=c[h]);h++)e.info&&e.info.lastRun===a||n&&!Hr(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,r,s,e.info,n,i),o=!0)}return o}return!1}function Lr(t,e,r,s,n,i,o,a){let l=!1,c=e[o?Ue(s):s];if(c)for(let e,h=0,p=c.length;h<p&&(e=c[h]);h++)e.info&&e.info.lastRun===r||o&&!Hr(s,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,s,n,i,e.info,o,a),l=!0);return l}function Hr(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!je(r,t))||!(!e.wildcard||!$e(r,t))}return!0}function Vr(t,e,r,s,n){let i="string"==typeof n.method?t[n.method]:n.method,o=n.property;i?i.call(t,t.__data[o],s[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Tr(t,e,r){let s=Ue(e);if(s!==e){return Dr(t,er(s)+"-changed",r[e],e),!0}return!1}function Dr(t,e,r,s){let n={value:r,queueProperty:!0};s&&(n.path=s),qe(t).dispatchEvent(new CustomEvent(e,{detail:n}))}function Or(t,e,r,s,n,i){let o=(i?Ue(e):e)!=e?e:null,a=o?Ye(t,o):t.__data[e];o&&void 0===a&&(a=r[e]),Dr(t,n.eventName,a,o)}function Nr(t,e,r,s,n){let i=t.__data[e];he&&(i=he(i,n.attrName,"attribute",t)),t._propertyToAttribute(e,n.attrName,i)}function Ir(t,e,r,s){let n=t[Mr.COMPUTE];if(n)if(ve){Sr++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[Mr.COMPUTE];let s,{counts:n,ready:i,total:o}=function(t){const e=t.__computeInfo,r={},s=t[Mr.COMPUTE],n=[];let i=0;for(let t in e){const s=e[t];i+=r[t]=s.args.filter(t=>!t.literal).length+(s.dynamicFn?1:0)}for(let t in s)e[t]||n.push(t);return{counts:r,ready:n,total:i}}(t);for(;s=i.shift();){e.set(s,e.size);const t=r[s];t&&t.forEach(t=>{const e=t.info.methodInfo;--o,0==--n[e]&&i.push(e)})}if(0!==o){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),o=[];for(let t in e)Fr(t,n,o,i,s);let a;for(;a=o.shift();)qr(t,"",e,r,a)&&Fr(a.methodInfo,n,o,i,s);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;Er(t,n,i,r,s);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const Rr=(t,e,r)=>{let s=0,n=e.length-1,i=-1;for(;s<=n;){const o=s+n>>1,a=r.get(e[o].methodInfo)-r.get(t.methodInfo);if(a<0)s=o+1;else{if(!(a>0)){i=o;break}n=o-1}}i<0&&(i=n+1),e.splice(i,0,t)},Fr=(t,e,r,s,n)=>{const i=e[n?Ue(t):t];if(i)for(let e=0;e<i.length;e++){const o=i[e];o.info.lastRun===Sr||n&&!Hr(t,o.trigger)||(o.info.lastRun=Sr,Rr(o.info,r,s))}};function qr(t,e,r,s,n){let i=Zr(t,e,r,s,n);if(i===kr)return!1;let o=n.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,i,!0):(t[o]=i,!1)}function Br(t,e,r,s,n,i,o){r.bindings=r.bindings||[];let a={kind:s,target:n,parts:i,literal:o,isCompound:1!==i.length};if(r.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||er(n)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let s=a.parts[r];s.compoundIndex=r,Ur(t,e,a,s,l)}}function Ur(t,e,r,s,n){if(!s.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let i=s.dependencies,o={index:n,binding:r,part:s,evaluator:t};for(let r=0;r<i.length;r++){let s=i[r];"string"==typeof s&&(s=Qr(s),s.wildcard=!0),t._addTemplatePropertyEffect(e,s.rootProperty,{fn:jr,info:o,trigger:s})}}}function jr(t,e,r,s,n,i,o){let a=o[n.index],l=n.binding,c=n.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=r[e];e=Ge(c.source,l.target,e),a._setPendingPropertyOrPath(e,s,!1,!0)&&t._enqueueClient(a)}else{let o=n.evaluator._evaluateBinding(t,c,e,r,s,i);o!==kr&&function(t,e,r,s,n){n=function(t,e,r,s){if(r.isCompound){let n=t.__dataCompoundStorage[r.target];n[s.compoundIndex]=e,e=n.join("")}"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,n,r,s),he&&(n=he(n,r.target,r.kind,e));if("attribute"==r.kind)t._valueToNodeAttribute(e,n,r.target);else{let s=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[s]?e[Mr.READ_ONLY]&&e[Mr.READ_ONLY][s]||e._setPendingProperty(s,n)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,s,n)}}(t,a,l,c,o)}}function $r(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),s=e.parts,n=new Array(s.length);for(let t=0;t<s.length;t++)n[t]=s[t].literal;let i=e.target;r[i]=n,e.literal&&"property"==e.kind&&("className"===i&&(t=qe(t)),t[i]=e.literal)}}function Gr(t,e,r){if(r.listenerEvent){let s=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,s,n){let i,o=t.detail,a=o&&o.path;a?(s=Ge(r,s,a),i=o&&o.value):i=t.currentTarget[r],i=n?!i:i,e[Mr.READ_ONLY]&&e[Mr.READ_ONLY][s]||!e._setPendingPropertyOrPath(s,i,!0,Boolean(a))||o&&o.queueProperty||e._invalidateProperties()}(t,e,r.target,s.source,s.negate)}))}}function Jr(t,e,r,s,n,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:n,dynamicFn:i};for(let n,i=0;i<e.args.length&&(n=e.args[i]);i++)n.literal||t._addPropertyEffect(n.rootProperty,r,{fn:s,info:o,trigger:n});return i&&t._addPropertyEffect(e.methodName,r,{fn:s,info:o}),o}function Zr(t,e,r,s,n){let i=t._methodHost||t,o=i[n.methodName];if(o){let s=t._marshalArgs(n.args,e,r);return s===kr?kr:o.apply(i,s)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Yr=[],Wr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Xr(t){let e="";for(let r=0;r<t.length;r++){e+=t[r].literal||""}return e}function Kr(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Yr};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let r=Qr(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function Qr(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},s=e[0];switch("-"===s&&(s=e[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=Ue(e),r.structured=Be(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function ts(t,e,r){let s=Ye(t,r);return void 0===s&&(s=e[r]),s}function es(t,e,r,s){const n={indexSplices:s};ge&&!t._overrideLegacyUndefined&&(e.splices=n),t.notifyPath(r+".splices",n),t.notifyPath(r+".length",e.length),ge&&!t._overrideLegacyUndefined&&(n.indexSplices=[])}function rs(t,e,r,s,n,i){es(t,e,r,[{index:s,addedCount:n,removed:i,object:e,type:"splice"}])}const ss=Me(t=>{const e=xr(fr(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Mr}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ns.length){let t=ns[ns.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Mr.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==Mr.READ_ONLY);let s=Ar(this,e,!0)[t];s||(s=this[e][t]=[]),s.push(r)}_removePropertyEffect(t,e,r){let s=Ar(this,e,!0)[t],n=s.indexOf(r);n>=0&&s.splice(n,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Mr.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Mr.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Mr.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Mr.COMPUTE)}_setPendingPropertyOrPath(t,e,r,s){if(s||Ue(Array.isArray(t)?t[0]:t)!==t){if(!s){let r=Ye(this,t);if(!(t=We(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let s=t.__dataLinkedPaths;if(s){let n;for(let i in s){let o=s[i];$e(i,e)?(n=Ge(i,o,e),t._setPendingPropertyOrPath(n,r,!0,!0)):$e(o,e)&&(n=Ge(o,i,e),t._setPendingPropertyOrPath(n,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=qe(t)),t[e]=r)}_setPendingProperty(t,e,r){let s=this.__dataHasPaths&&Be(t),n=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,n[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),s?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(s||this[Mr.NOTIFY]&&this[Mr.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[Mr.READ_ONLY]&&this[Mr.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let s,n=this.__dataHasPaths;this.__dataHasPaths=!1,Ir(this,e,r,n),s=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,n),this._flushClients(),Er(this,this[Mr.REFLECT],e,r,n),Er(this,this[Mr.OBSERVE],e,r,n),s&&function(t,e,r,s,n){let i,o,a=t[Mr.NOTIFY],l=Sr++;for(let o in e)e[o]&&(a&&Lr(t,a,l,o,r,s,n)||n&&Tr(t,o,r))&&(i=!0);i&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,s,e,r,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[Mr.PROPAGATE]&&Er(this,this[Mr.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,s){const n=(e,s)=>{Er(this,t.propertyEffects,e,r,s,t.nodeList);for(let n=t.firstChild;n;n=n.nextSibling)this._runEffectsForTemplate(n,e,r,s)};t.runEffects?t.runEffects(n,e,s):n(e,s)}linkPaths(t,e){t=Je(t),e=Je(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=Je(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};es(this,Ye(this,t,r),r.path,e)}get(t,e){return Ye(e||this,t)}set(t,e,r){r?We(r,t,e):this[Mr.READ_ONLY]&&this[Mr.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},s=Ye(this,t,r),n=s.length,i=s.push(...e);return e.length&&rs(this,s,r.path,n,e.length,[]),i}pop(t){let e={path:""},r=Ye(this,t,e),s=Boolean(r.length),n=r.pop();return s&&rs(this,r,e.path,r.length,0,[n]),n}splice(t,e,r,...s){let n,i={path:""},o=Ye(this,t,i);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),n=2===arguments.length?o.splice(e):o.splice(e,r,...s),(s.length||n.length)&&rs(this,o,i.path,e,s.length,n),n}shift(t){let e={path:""},r=Ye(this,t,e),s=Boolean(r.length),n=r.shift();return s&&rs(this,r,e.path,0,0,[n]),n}unshift(t,...e){let r={path:""},s=Ye(this,t,r),n=s.unshift(...e);return e.length&&rs(this,s,r.path,0,e.length,[]),n}notifyPath(t,e){let r;if(1==arguments.length){let s={path:""};e=Ye(this,t,s),r=s.path}else r=Array.isArray(t)?Je(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,Mr.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let s={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,Mr.OBSERVE,{fn:Vr,info:s,trigger:{name:t}}),r&&this._addPropertyEffect(e,Mr.OBSERVE,{fn:Vr,info:s,trigger:{name:e}})}_createMethodObserver(t,e){let r=Kr(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");Jr(this,r,Mr.OBSERVE,Zr,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Mr.NOTIFY,{fn:Or,info:{eventName:er(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Mr.REFLECT,{fn:Nr,info:{attrName:e}})}_createComputedProperty(t,e,r){let s=Kr(e);if(!s)throw new Error("Malformed computed expression '"+e+"'");const n=Jr(this,s,Mr.COMPUTE,qr,t,r);Ar(this,"__computeInfo")[t]=n}_marshalArgs(t,e,r){const s=this.__data,n=[];for(let i=0,o=t.length;i<o;i++){let{name:o,structured:a,wildcard:l,value:c,literal:h}=t[i];if(!h)if(l){const t=$e(o,e),n=ts(s,r,t?e:o);c={path:t?e:o,value:n,base:t?Ye(s,o):n}}else c=a?ts(s,r,o):s[o];if(ge&&!this._overrideLegacyUndefined&&void 0===c&&t.length>1)return kr;n[i]=c}return n}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),s=this.__preBoundTemplateInfo==r;if(!s)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=s,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,s=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=s,s?s.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let s=t.propertyEffects=t.propertyEffects||{};(s[e]=s[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),ns.push(this);let r=super._stampTemplate(t,e);if(ns.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:s}=e;if(s.length)for(let e=0;e<s.length;e++){let n=s[e],i=r[e],o=n.bindings;if(o)for(let e=0;e<o.length;e++){let r=o[e];$r(i,r),Gr(i,t,r)}i.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:s,parent:n}=e;r?r.nextSibling=s:n&&(n.firstChild=s),s?s.previousSibling=r:n&&(n.lastChild=r),e.nextSibling=e.previousSibling=null;let i=e.childNodes;for(let t=0;t<i.length;t++){let e=i[t];qe(qe(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,s){let n=e._parseTemplateNode.call(this,t,r,s);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=Xr(e)||" ",Br(this,r,s,"text","textContent",e),n=!0)}return n}static _parseTemplateNodeAttribute(t,r,s,n,i){let o=this._parseBindings(i,r);if(o){let e=n,i="property";Pr.test(n)?i="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),i="attribute");let a=Xr(o);return a&&"attribute"==i&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"attribute"==i&&"disable-upgrade$"==e&&t.setAttribute(n,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===i&&(n=tr(n)),Br(this,r,s,i,n,o,a),!0}return e._parseTemplateNodeAttribute.call(this,t,r,s,n,i)}static _parseTemplateNestedTemplate(t,r,s){let n=e._parseTemplateNestedTemplate.call(this,t,r,s);const i=t.parentNode,o=s.templateInfo,a="dom-if"===i.localName,l="dom-repeat"===i.localName;be&&(a||l)&&(i.removeChild(t),(s=s.parentInfo).templateInfo=o,s.noted=!0,n=!1);let c=o.hostProps;if(Ce&&a)c&&(r.hostProps=Object.assign(r.hostProps||{},c),be||(s.parentInfo.noted=!0));else{let t="{";for(let e in c){Br(this,r,s,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}}return n}static _parseBindings(t,e){let r,s=[],n=0;for(;null!==(r=Wr.exec(t));){r.index>n&&s.push({literal:t.slice(n,r.index)});let i=r[1][0],o=Boolean(r[2]),a=r[3].trim(),l=!1,c="",h=-1;"{"==i&&(h=a.indexOf("::"))>0&&(c=a.substring(h+2),a=a.substring(0,h),l=!0);let p=Kr(a),d=[];if(p){let{args:t,methodName:r}=p;for(let e=0;e<t.length;e++){let r=t[e];r.literal||d.push(r)}let s=e.dynamicFns;(s&&s[r]||p.static)&&(d.push(r),p.dynamicFn=!0)}else d.push(a);s.push({source:a,mode:i,negate:o,customEvent:l,signature:p,dependencies:d,event:c}),n=Wr.lastIndex}if(n&&n<t.length){let e=t.substring(n);e&&s.push({literal:e})}return s.length?s:null}static _evaluateBinding(t,e,r,s,n,i){let o;return o=e.signature?Zr(t,r,s,0,e.signature):r!=e.source?Ye(t,e.source):i&&Be(r)?Ye(t,r):t.__data[r],e.negate&&(o=!o),o}}}),ns=[];const is=[];function os(t){is.push(t)}const as=Me(t=>{const e=pr(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof n?e:null}function s(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let r in t){const s=t[r];e[r]="function"==typeof s?{type:s}:s}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class n extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){os(this.prototype);const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.prototype._addPropertyToAttributeMap(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=s(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,s(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),ls=window.ShadyCSS&&window.ShadyCSS.cssBuild,cs=Me(t=>{const e=as(ss(t));function r(t,e,r,s){if(!ls){const n=e.content.querySelectorAll("style"),i=Ne(e),o=function(t){let e=Ve(t);return e?Ie(e):[]}(r),a=e.content.firstElementChild;for(let r=0;r<o.length;r++){let n=o[r];n.textContent=t._processStyleText(n.textContent,s),e.content.insertBefore(n,a)}let l=0;for(let e=0;e<i.length;e++){let r=i[e],o=n[l];o!==r?(r=r.cloneNode(!0),o.parentNode.insertBefore(r,o)):l++,r.textContent=t._processStyleText(r.textContent,s)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),xe&&ls&&le){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach(t=>{e+=t.textContent,t.parentNode.removeChild(t)}),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}}return class extends e{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):fe||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let i in t)e=this.prototype,r=i,s=t[i],n=t,s.computed&&(s.readOnly=!0),s.computed&&(e._hasReadOnlyEffect(r)?console.warn(`Cannot redefine computed property '${r}'.`):e._createComputedProperty(r,s.computed,n)),s.readOnly&&!e._hasReadOnlyEffect(r)?e._createReadOnlyProperty(r,!s.computed):!1===s.readOnly&&e._hasReadOnlyEffect(r)&&console.warn(`Cannot make readOnly property '${r}' non-readOnly.`),s.reflectToAttribute&&!e._hasReflectEffect(r)?e._createReflectedProperty(r):!1===s.reflectToAttribute&&e._hasReflectEffect(r)&&console.warn(`Cannot make reflected property '${r}' non-reflected.`),s.notify&&!e._hasNotifyEffect(r)?e._createNotifyingProperty(r):!1===s.notify&&e._hasNotifyEffect(r)&&console.warn(`Cannot make notify property '${r}' non-notify.`),s.observer&&e._createPropertyObserver(r,s.observer,n[s.observer]),e._addPropertyToAttributeMap(r);var e,r,s,n}static createObservers(t,e){const r=this.prototype;for(let s=0;s<t.length;s++)r._createMethodObserver(t[s],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!de||ue)&&(e=He.import(t,"template"),de&&!e))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+t);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=oe(t.url);else{const t=He.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=ce,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let s=e[r];"value"in s&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=s)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return ie(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const s=this.importPath;r(this,e,t,s?ne(s):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=qe(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),_e&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=ne(this.importPath)),ne(t,e)}static _parseTemplateContent(t,r,s){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,s)}static _addTemplatePropertyEffect(t,r,s){return!me||r in this._properties||s.info.part.signature&&s.info.part.signature.static||s.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,s)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class hs{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,ps.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ps.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,r){return t instanceof hs?t._cancelAsync():t=new hs,t.setConfig(e,r),t}}let ps=new Set;const ds=function(t){ps.add(t)},us=function(){const t=Boolean(ps.size);return ps.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let fs="string"==typeof document.head.style.touchAction,ms="__polymerGesturesHandled",_s="__polymerGesturesTouchAction",gs=["mousedown","mousemove","mouseup","click"],vs=[0,1,4,2],ys=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function bs(t){return gs.indexOf(t)>-1}let Cs=!1;function ws(t){if(!bs(t)&&"touchend"!==t)return fs&&Cs&&pe?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Cs=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let zs=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const xs=[],Ss={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ks={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ms(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let r=t.getRootNode();if(t.id){let s=r.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<s.length;t++)e.push(s[t])}}return e}let Ps=function(t){let e=t.sourceCapabilities;var r;if((!e||e.firesTouchEvents)&&(t[ms]={skip:!0},"click"===t.type)){let e=!1,s=Ts(t);for(let t=0;t<s.length;t++){if(s[t].nodeType===Node.ELEMENT_NODE)if("label"===s[t].localName)xs.push(s[t]);else if(r=s[t],Ss[r.localName]){let r=Ms(s[t]);for(let t=0;t<r.length;t++)e=e||xs.indexOf(r[t])>-1}if(s[t]===Ls.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function As(t){let e=zs?["click"]:gs;for(let r,s=0;s<e.length;s++)r=e[s],t?(xs.length=0,document.addEventListener(r,Ps,!0)):document.removeEventListener(r,Ps,!0)}function Es(t){let e=t.type;if(!bs(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!ys&&(e=vs[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let Ls={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Hs(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function Vs(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}ye&&document.addEventListener("touchend",(function(t){if(!ye)return;Ls.mouse.mouseIgnoreJob||As(!0),Ls.mouse.target=Ts(t)[0],Ls.mouse.mouseIgnoreJob=hs.debounce(Ls.mouse.mouseIgnoreJob,lr.after(2500),(function(){As(),Ls.mouse.target=null,Ls.mouse.mouseIgnoreJob=null}))}),!!Cs&&{passive:!0});const Ts=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Ds={},Os=[];function Ns(t){const e=Ts(t);return e.length>0?e[0]:t.target}function Is(t){let e,r=t.type,s=t.currentTarget.__polymerGestures;if(!s)return;let n=s[r];if(n){if(!t[ms]&&(t[ms]={},"touch"===r.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===r&&1===t.touches.length&&(Ls.touch.id=e.identifier),Ls.touch.id!==e.identifier)return;fs||"touchstart"!==r&&"touchmove"!==r||function(t){let e=t.changedTouches[0],r=t.type;if("touchstart"===r)Ls.touch.x=e.clientX,Ls.touch.y=e.clientY,Ls.touch.scrollDecided=!1;else if("touchmove"===r){if(Ls.touch.scrollDecided)return;Ls.touch.scrollDecided=!0;let r=function(t){let e="auto",r=Ts(t);for(let t,s=0;s<r.length;s++)if(t=r[s],t[_s]){e=t[_s];break}return e}(t),s=!1,n=Math.abs(Ls.touch.x-e.clientX),i=Math.abs(Ls.touch.y-e.clientY);t.cancelable&&("none"===r?s=!0:"pan-x"===r?s=i>n:"pan-y"===r&&(s=n>i)),s?t.preventDefault():js("track")}}(t)}if(e=t[ms],!e.skip){for(let r,s=0;s<Os.length;s++)r=Os[s],n[r.name]&&!e[r.name]&&r.flow&&r.flow.start.indexOf(t.type)>-1&&r.reset&&r.reset();for(let s,i=0;i<Os.length;i++)s=Os[i],n[s.name]&&!e[s.name]&&(e[s.name]=!0,s[r](t))}}}function Rs(t,e,r){return!!Ds[e]&&(function(t,e,r){let s=Ds[e],n=s.deps,i=s.name,o=t.__polymerGestures;o||(t.__polymerGestures=o={});for(let e,r,s=0;s<n.length;s++)e=n[s],zs&&bs(e)&&"click"!==e||(r=o[e],r||(o[e]=r={_count:0}),0===r._count&&t.addEventListener(e,Is,ws(e)),r[i]=(r[i]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),s.touchAction&&Bs(t,s.touchAction)}(t,e,r),!0)}function Fs(t,e,r){return!!Ds[e]&&(function(t,e,r){let s=Ds[e],n=s.deps,i=s.name,o=t.__polymerGestures;if(o)for(let e,r,s=0;s<n.length;s++)e=n[s],r=o[e],r&&r[i]&&(r[i]=(r[i]||1)-1,r._count=(r._count||1)-1,0===r._count&&t.removeEventListener(e,Is,ws(e)));t.removeEventListener(e,r)}(t,e,r),!0)}function qs(t){Os.push(t);for(let e=0;e<t.emits.length;e++)Ds[t.emits[e]]=t}function Bs(t,e){fs&&t instanceof HTMLElement&&cr.run(()=>{t.style.touchAction=e}),t[_s]=e}function Us(t,e,r){let s=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=r,qe(t).dispatchEvent(s),s.defaultPrevented){let t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function js(t){let e=function(t){for(let e,r=0;r<Os.length;r++){e=Os[r];for(let r,s=0;s<e.emits.length;s++)if(r=e.emits[s],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function $s(t,e,r,s){e&&Us(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:s,prevent:function(t){return js(t)}})}function Gs(t,e,r){if(t.prevent)return!1;if(t.started)return!0;let s=Math.abs(t.x-e),n=Math.abs(t.y-r);return s>=5||n>=5}function Js(t,e,r){if(!e)return;let s,n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],o=i.x-t.x,a=i.y-t.y,l=0;n&&(s=i.x-n.x,l=i.y-n.y),Us(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:r,hover:function(){return function(t,e){let r=document.elementFromPoint(t,e),s=r;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let n=s;if(s=s.shadowRoot.elementFromPoint(t,e),n===s)break;s&&(r=s)}return r}(r.clientX,r.clientY)}})}function Zs(t,e,r){let s=Math.abs(e.clientX-t.x),n=Math.abs(e.clientY-t.y),i=Ns(r||e);!i||ks[i.localName]&&i.hasAttribute("disabled")||(isNaN(s)||isNaN(n)||s<=25&&n<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=Ns(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let r=e.getBoundingClientRect(),s=t.pageX,n=t.pageY;return!(s>=r.left&&s<=r.right&&n>=r.top&&n<=r.bottom)}return!1}(e))&&(t.prevent||Us(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}qs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Vs(this.info)},mousedown:function(t){if(!Es(t))return;let e=Ns(t),r=this;Hs(this.info,(function(t){Es(t)||($s("up",e,t),Vs(r.info))}),(function(t){Es(t)&&$s("up",e,t),Vs(r.info)})),$s("down",e,t)},touchstart:function(t){$s("down",Ns(t),t.changedTouches[0],t)},touchend:function(t){$s("up",Ns(t),t.changedTouches[0],t)}}),qs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Vs(this.info)},mousedown:function(t){if(!Es(t))return;let e=Ns(t),r=this,s=function(t){let s=t.clientX,n=t.clientY;Gs(r.info,s,n)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&js("tap"),r.info.addMove({x:s,y:n}),Es(t)||(r.info.state="end",Vs(r.info)),e&&Js(r.info,e,t),r.info.started=!0)};Hs(this.info,s,(function(t){r.info.started&&s(t),Vs(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Ns(t),r=t.changedTouches[0],s=r.clientX,n=r.clientY;Gs(this.info,s,n)&&("start"===this.info.state&&js("tap"),this.info.addMove({x:s,y:n}),Js(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Ns(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),Js(this.info,e,r))}}),qs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Es(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Es(t)&&Zs(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Zs(this.info,t.changedTouches[0],t)}});const Ys=Me(t=>class extends t{_addEventListenerToNode(t,e,r){Rs(t,e,r)||super._addEventListenerToNode(t,e,r)}_removeEventListenerFromNode(t,e,r){Fs(t,e,r)||super._removeEventListenerFromNode(t,e,r)}}),Ws=/:host\(:dir\((ltr|rtl)\)\)/g,Xs=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ks=/:dir\((?:ltr|rtl)\)/,Qs=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),tn=[];let en=null,rn="";function sn(){rn=document.documentElement.getAttribute("dir")}function nn(t){if(!t.__autoDirOptOut){t.setAttribute("dir",rn)}}function on(){sn(),rn=document.documentElement.getAttribute("dir");for(let t=0;t<tn.length;t++)nn(tn[t])}const an=Me(t=>{Qs||en||(sn(),en=new MutationObserver(on),en.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=fr(t);class r extends e{static _processStyleText(t,r){return t=e._processStyleText.call(this,t,r),!Qs&&Ks.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=e.replace(Ws,':host([dir="$1"])'),e=e.replace(Xs,':host([dir="$2"]) $1'),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(en&&en.takeRecords().length&&on(),tn.push(this),nn(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=tn.indexOf(this);t>-1&&tn.splice(t,1)}}}return r.__activateDir=!1,r});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ln(){document.body.removeAttribute("unresolved")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function cn(t,e,r){return{index:t,removed:e,addedCount:r}}"interactive"===document.readyState||"complete"===document.readyState?ln():window.addEventListener("DOMContentLoaded",ln);function hn(t,e,r,s,n,i){let o,a=0,l=0,c=Math.min(r-e,i-n);if(0==e&&0==n&&(a=function(t,e,r){for(let s=0;s<r;s++)if(!dn(t[s],e[s]))return s;return r}(t,s,c)),r==t.length&&i==s.length&&(l=function(t,e,r){let s=t.length,n=e.length,i=0;for(;i<r&&dn(t[--s],e[--n]);)i++;return i}(t,s,c-a)),n+=a,i-=l,(r-=l)-(e+=a)==0&&i-n==0)return[];if(e==r){for(o=cn(e,[],0);n<i;)o.removed.push(s[n++]);return[o]}if(n==i)return[cn(e,[],r-e)];let h=function(t){let e=t.length-1,r=t[0].length-1,s=t[e][r],n=[];for(;e>0||r>0;){if(0==e){n.push(2),r--;continue}if(0==r){n.push(3),e--;continue}let i,o=t[e-1][r-1],a=t[e-1][r],l=t[e][r-1];i=a<l?a<o?a:o:l<o?l:o,i==o?(o==s?n.push(0):(n.push(1),s=o),e--,r--):i==a?(n.push(3),e--,s=a):(n.push(2),r--,s=l)}return n.reverse(),n}(function(t,e,r,s,n,i){let o=i-n+1,a=r-e+1,l=new Array(o);for(let t=0;t<o;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let r=1;r<o;r++)for(let i=1;i<a;i++)if(dn(t[e+i-1],s[n+r-1]))l[r][i]=l[r-1][i-1];else{let t=l[r-1][i]+1,e=l[r][i-1]+1;l[r][i]=t<e?t:e}return l}(t,e,r,s,n,i));o=void 0;let p=[],d=e,u=n;for(let t=0;t<h.length;t++)switch(h[t]){case 0:o&&(p.push(o),o=void 0),d++,u++;break;case 1:o||(o=cn(d,[],0)),o.addedCount++,d++,o.removed.push(s[u]),u++;break;case 2:o||(o=cn(d,[],0)),o.addedCount++,d++;break;case 3:o||(o=cn(d,[],0)),o.removed.push(s[u]),u++}return o&&p.push(o),p}function pn(t,e){return hn(t,0,t.length,e,0,e.length)}function dn(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function un(t){return"slot"===t.localName}let fn=class{static getFlattenedNodes(t){const e=qe(t);return un(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>un(t)?qe(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){un(this._target)?this._listenSlots([this._target]):qe(this._target).children&&(this._listenSlots(qe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){un(this._target)?this._unlistenSlots([this._target]):qe(this._target).children&&(this._unlistenSlots(qe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,cr.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=pn(e,this._effectiveNodes);for(let e,s=0;s<r.length&&(e=r[s]);s++)for(let r,s=0;s<e.removed.length&&(r=e.removed[s]);s++)t.removedNodes.push(r);for(let s,n=0;n<r.length&&(s=r[n]);n++)for(let r=s.index;r<s.index+s.addedCount;r++)t.addedNodes.push(e[r]);this._effectiveNodes=e;let s=!1;return(t.addedNodes.length||t.removedNodes.length)&&(s=!0,this.callback.call(this._target,t)),s}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];un(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];un(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mn=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=us()}while(t||e)},_n=Element.prototype,gn=_n.matches||_n.matchesSelector||_n.mozMatchesSelector||_n.msMatchesSelector||_n.oMatchesSelector||_n.webkitMatchesSelector,vn=function(t,e){return gn.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class yn{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new fn(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(qe(this.node).contains(t))return!0;let e=t,r=t.ownerDocument;for(;e&&e!==r&&e!==this.node;)e=qe(e).parentNode||qe(e).host;return e===this.node}getOwnerRoot(){return qe(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?qe(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=qe(this.node).assignedSlot;for(;e;)t.push(e),e=qe(e).assignedSlot;return t}importNode(t,e){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return qe(r).importNode(t,e)}getEffectiveChildNodes(){return fn.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),r=[];for(let s,n=0,i=e.length;n<i&&(s=e[n]);n++)s.nodeType===Node.ELEMENT_NODE&&vn(s,t)&&r.push(s);return r}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function bn(t,e){for(let r=0;r<e.length;r++){let s=e[r];Object.defineProperty(t,s,{get:function(){return this.node[s]},configurable:!0})}}class Cn{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}yn.prototype.cloneNode,yn.prototype.appendChild,yn.prototype.insertBefore,yn.prototype.removeChild,yn.prototype.replaceChild,yn.prototype.setAttribute,yn.prototype.removeAttribute,yn.prototype.querySelector,yn.prototype.querySelectorAll,yn.prototype.parentNode,yn.prototype.firstChild,yn.prototype.lastChild,yn.prototype.nextSibling,yn.prototype.previousSibling,yn.prototype.firstElementChild,yn.prototype.lastElementChild,yn.prototype.nextElementSibling,yn.prototype.previousElementSibling,yn.prototype.childNodes,yn.prototype.children,yn.prototype.classList,yn.prototype.textContent,yn.prototype.innerHTML;let wn=yn;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(yn.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=yn.prototype[e])}),bn(t.prototype,["classList"]),wn=t,Object.defineProperties(Cn.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&zn(t).getOwnerRoot(),r=this.path;for(let t=0;t<r.length;t++){const s=r[t];if(zn(s).getOwnerRoot()===e)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let r=0;r<e.length;r++){let s=e[r];t[s]=function(){return this.node[s].apply(this.node,arguments)}}}(yn.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),bn(yn.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let r=0;r<e.length;r++){let s=e[r];Object.defineProperty(t,s,{get:function(){return this.node[s]},set:function(t){this.node[s]=t},configurable:!0})}}(yn.prototype,["textContent","innerHTML","className"]);const zn=function(t){if((t=t||document)instanceof wn)return t;if(t instanceof Cn)return t;let e=t.__domApi;return e||(e=t instanceof Event?new Cn(t):new wn(t),t.__domApi=e),e},xn=window.ShadyDOM,Sn=window.ShadyCSS;function kn(t,e){return qe(t).getRootNode()===e}
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
const Mn=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};Me(t=>{const e=cs(t);let r=Mn(e);return class extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return r.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}attributeChangedCallback(t,e,r,s){"disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,qe(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(t,e,r,s)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});let Pn=window.ShadyCSS;const An=Me(t=>{const e=Ys(cs(t)),r=ls?e:an(e),s=Mn(r),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends r{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(t,e,r){(this.__dataAttributes&&this.__dataAttributes[t]||"disable-upgrade"===t)&&this.attributeChangedCallback(t,e,r,null)}setAttribute(t,e){if(ze&&!this._legacyForceObservedAttributes){const r=this.getAttribute(t);super.setAttribute(t,e),this.__attributeReaction(t,r,String(e))}else super.setAttribute(t,e)}removeAttribute(t){if(ze&&!this._legacyForceObservedAttributes){const e=this.getAttribute(t);super.removeAttribute(t),this.__attributeReaction(t,e,null)}else super.removeAttribute(t)}static get observedAttributes(){return ze&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],os(this.prototype)),this.__observedAttributes):s.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(t){return super._canApplyPropertyDefault(t)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(t))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(t,e,r,s){e!==r&&("disable-upgrade"==t?this.__isUpgradeDisabled&&null==r&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,qe(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(t,e,r,s),this.attributeChanged(t,e,r)))}attributeChanged(t,e,r){}_initializeProperties(){if(fe&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let t=Object.getPrototypeOf(this);t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ze&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const t=this.attributes;for(let e=0,r=t.length;e<r;e++){const r=t[e];this.__attributeReaction(r.name,null,r.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,r){this._propertyToAttribute(t,e,r)}serializeValueToAttribute(t,e,r){this._valueToNodeAttribute(r||this,t,e)}extend(t,e){if(!t||!e)return t||e;let r=Object.getOwnPropertyNames(e);for(let s,n=0;n<r.length&&(s=r[n]);n++){let r=Object.getOwnPropertyDescriptor(e,s);r&&Object.defineProperty(t,s,r)}return t}mixin(t,e){for(let r in e)t[r]=e[r];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,r){r=r||{},e=null==e?{}:e;let s=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});s.detail=e;let n=r.node||this;return qe(n).dispatchEvent(s),s}listen(t,e,r){t=t||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),n=s.get(t);n||(n={},s.set(t,n));let i=e+r;n[i]||(n[i]=this._addMethodEventListenerToNode(t,e,r,this))}unlisten(t,e,r){t=t||this;let s=this.__boundListeners&&this.__boundListeners.get(t),n=e+r,i=s&&s[n];i&&(this._removeEventListenerFromNode(t,e,i),s[n]=null)}setScrollDirection(t,e){Bs(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=qe(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=zn(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return zn(this).getEffectiveChildNodes()}queryDistributedElements(t){return zn(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let r,s=0;r=t[s];s++)r.nodeType!==Node.COMMENT_NODE&&e.push(r.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?zn(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&qe(this).contains(t)&&qe(this).getRootNode()===qe(t).getRootNode()}isLocalDescendant(t){return this.root===qe(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!xn||!Sn)return null;if(!xn.handlesDynamicScoping)return null;const r=Sn.ScopingShim;if(!r)return null;const s=r.scopeForNode(t),n=qe(t).getRootNode(),i=t=>{if(!kn(t,n))return;const e=Array.from(xn.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const i=e[t];if(!kn(i,n))continue;const o=r.currentScopeForNode(i);o!==s&&(""!==o&&r.unscopeNode(i,o),r.scopeNode(i,s))}};if(i(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const r=t[e];for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&i(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return Pn.getComputedStyleValue(this,t)}debounce(t,e,r){return this._debouncers=this._debouncers||{},this._debouncers[t]=hs.debounce(this._debouncers[t],r>0?lr.after(r):cr,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?lr.run(t.bind(this),e):~cr.run(t.bind(this))}cancelAsync(t){t<0?cr.cancel(~t):lr.cancel(t)}create(t,e){let r=document.createElement(t);if(e)if(r.setProperties)r.setProperties(e);else for(let t in e)r[t]=e[t];return r}elementMatches(t,e){return vn(e||this,t)}toggleAttribute(t,e){let r=this;return 3===arguments.length&&(r=arguments[2]),1==arguments.length&&(e=!r.hasAttribute(t)),e?(qe(r).setAttribute(t,""),!0):(qe(r).removeAttribute(t),!1)}toggleClass(t,e,r){r=r||this,1==arguments.length&&(e=!r.classList.contains(t)),e?r.classList.add(t):r.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,r,s){s=s||this,this.transform("translate3d("+t+","+e+","+r+")",s)}arrayDelete(t,e){let r;if(Array.isArray(t)){if(r=t.indexOf(e),r>=0)return t.splice(r,1)}else{if(r=Ye(this,t).indexOf(e),r>=0)return this.splice(t,r,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i}),En={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Ln={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Hn=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Ln);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Vn(t,e,r,s){!function(t,e,r){const s=t._noAccessors,n=Object.getOwnPropertyNames(t);for(let i=0;i<n.length;i++){let o=n[i];if(!(o in r))if(s)e[o]=t[o];else{let r=Object.getOwnPropertyDescriptor(t,o);r&&(r.configurable=!0,Object.defineProperty(e,o,r))}}}(e,t,s);for(let t in En)e[t]&&(r[t]=r[t]||[],r[t].push(e[t]))}function Tn(t,e){for(const r in e){const s=t[r],n=e[r];t[r]=!("value"in n)&&s&&"value"in s?Object.assign({value:s.value},n):n}}const Dn=An(HTMLElement);function On(t,e,r){let s;const n={};class i extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let t,e=0;e<s.length;e++)t=s[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(s)for(let t=0;t<s.length;t++)Tn(e,s[t].properties);return Tn(e,t.properties),e}static get observers(){let e=[];if(s)for(let t,r=0;r<s.length;r++)t=s[r],t.observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=n.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=i.prototype;if(!t.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",t))){t.__hasRegisterFinished=!0,super._registered(),fe&&o(t);const e=Object.getPrototypeOf(this);let r=n.beforeRegister;if(r)for(let t=0;t<r.length;t++)r[t].call(e);if(r=n.registered,r)for(let t=0;t<r.length;t++)r[t].call(e)}}_applyListeners(){super._applyListeners();const t=n.listeners;if(t)for(let e=0;e<t.length;e++){const r=t[e];if(r)for(let t in r)this._addMethodEventListenerToNode(this,t,r[t])}}_ensureAttributes(){const t=n.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const r=t[e];for(let t in r)this._ensureAttribute(t,r[t])}super._ensureAttributes()}ready(){super.ready();let t=n.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=n.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=n.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,r){super.attributeChanged();let s=n.attributeChanged;if(s)for(let n=0;n<s.length;n++)s[n].call(this,t,e,r)}}if(r){Array.isArray(r)||(r=[r]);let t=e.prototype.behaviors;s=function t(e,r,s){r=r||[];for(let n=e.length-1;n>=0;n--){let i=e[n];i?Array.isArray(i)?t(i,r):r.indexOf(i)<0&&(!s||s.indexOf(i)<0)&&r.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return r}(r,null,t),i.prototype.behaviors=t?t.concat(r):s}const o=e=>{s&&function(t,e,r){for(let s=0;s<e.length;s++)Vn(t,e[s],r,Hn)}(e,s,n),Vn(e,t,n,Ln)};return fe||o(i.prototype),i.generatedFrom=t,i}const Nn=function(t){let e;return e="function"==typeof t?t:Nn.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function In(t,e,r,s,n){let i;n&&(i="object"==typeof r&&null!==r,i&&(s=t.__dataTemp[e]));let o=s!==r&&(s==s||r==r);return i&&o&&(t.__dataTemp[e]=r),o}Nn.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let r=e?e(Dn):Dn;return r=On(t,r,t.behaviors),r.is=r.prototype.is=t.is,r};const Rn=Me(t=>class extends t{_shouldPropertyChange(t,e,r){return In(this,t,e,r,!0)}}),Fn=Me(t=>class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,r){return In(this,t,e,r,this.mutableData)}});Rn._mutablePropertyChange=In;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let qn=null;function Bn(){return qn}Bn.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Bn,writable:!0}});const Un=ss(Bn),jn=Rn(Un);const $n=ss(class{});function Gn(t,e){for(let r=0;r<e.length;r++){let s=e[r];if(Boolean(t)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)t?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(t)s.__polymerReplaced__=document.createComment("hidden-slot"),qe(qe(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const t=s.__polymerReplaced__;t&&qe(qe(t).parentNode).replaceChild(s,t)}else s.style&&(t?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=t,s._showHideChildren&&s._showHideChildren(t)}}class Jn extends $n{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,r(t)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,e,r)}}_showHideChildren(t){Gn(t,this.children)}_setUnmanagedPropertyToNode(t,e,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,e,r)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Jn.prototype.__dataHost,Jn.prototype.__templatizeOptions,Jn.prototype._methodHost,Jn.prototype.__templatizeOwner,Jn.prototype.__hostProps;const Zn=Rn(Jn);function Yn(t){let e=t.__dataHost;return e&&e._methodHost||e}function Wn(t,e,r){let s=r.mutableData?Zn:Jn;ti.mixin&&(s=ti.mixin(s));let n=class extends s{};return n.prototype.__templatizeOptions=r,n.prototype._bindTemplate(t),function(t,e,r,s){let n=r.hostProps||{};for(let e in s.instanceProps){delete n[e];let r=s.notifyInstanceProp;r&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Qn(e,r)})}if(s.forwardHostProp&&e.__dataHost)for(let e in n)r.hasHostProps||(r.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,r){t.__dataHost._setPendingPropertyOrPath("_host_"+e,r[e],!0,!0)}})}(n,t,e,r),n}function Xn(t,e,r,s){let n=r.forwardHostProp;if(n&&e.hasHostProps){const a="template"==t.localName;let l=e.templatizeTemplateClass;if(!l){if(a){let t=r.mutableData?jn:Un;class s extends t{}l=e.templatizeTemplateClass=s}else{const r=t.constructor;class s extends r{}l=e.templatizeTemplateClass=s}let i=e.hostProps;for(let t in i)l.prototype._addPropertyEffect("_host_"+t,l.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Kn(t,n)}),l.prototype._createNotifyingProperty("_host_"+t);me&&s&&function(t,e,r){const s=r.constructor._properties,{propertyEffects:n}=t,{instanceProps:i}=e;for(let t in n)if(!(s[t]||i&&i[t])){const e=n[t];for(let r=0;r<e.length;r++){const{part:s}=e[r].info;if(!s.signature||!s.signature.static){console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(e,r,s)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),a)o=l,qn=i=t,Object.setPrototypeOf(i,o.prototype),new o,qn=null,t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,l.prototype);const r=e.hostProps;for(let e in r)if(e="_host_"+e,e in t){const r=t[e];delete t[e],t.__data[e]=r}}}var i,o}function Kn(t,e){return function(t,r,s){e.call(t.__templatizeOwner,r.substring("_host_".length),s[r])}}function Qn(t,e){return function(t,r,s){e.call(t.__templatizeOwner,t,r,s[r])}}function ti(t,e,r){if(de&&!Yn(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(r=r||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let s=(e?e.constructor:Jn)._parseTemplate(t),n=s.templatizeInstanceClass;n||(n=Wn(t,s,r),s.templatizeInstanceClass=n);const i=Yn(t);Xn(t,s,r,i);let o=class extends n{};return o.prototype._methodHost=i,o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=s.hostProps,o=o,o}function ei(t,e){let r;for(;e;)if(r=e.__dataHost?e:e.__templatizeInstance){if(r.__dataHost==t)return r;e=r.__dataHost}else e=qe(e).parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ri=!1;function si(){if(fe&&!ae){if(!ri){ri=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ni=Ys(Fn(ss(HTMLElement)));customElements.define("dom-bind",class extends ni{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),de)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,r,s){this.mutableData=!0}connectedCallback(){si()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){qe(qe(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let e=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class ii{constructor(t){this.value=t.toString()}toString(){return this.value}}function oi(t){if(t instanceof ii)return t.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+t)}const ai=function(t,...e){const r=document.createElement("template");return r.innerHTML=e.reduce((e,r,s)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof ii)return oi(t);throw new Error("non-template value passed to Polymer's html function: "+t)}(r)+t[s+1],t[0]),r},li=cs(HTMLElement),ci=Fn(li);class hi extends ci{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!we,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),si()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=qe(qe(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=ti(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(t,e){let r=this.__instances;for(let s,n=0;n<r.length&&(s=r[n]);n++)s.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,r){if((s=this.as)===(n=e)||je(s,n)||$e(s,n)){let s=t[this.itemsIndexAs];e==this.as&&(this.items[s]=r);let n=Ge(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,e);this.notifyPath(n,r)}var s,n}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,r=this.__getMethodHost();return function(){return r[e].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let r=0;r<e.length;r++)0===t.indexOf(e[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=hs.debounce(this.__renderDebouncer,e>0?lr.after(e):cr,t.bind(this)),ds(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),mn()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),r=this.__calculateLimit(e.length);this.__updateInstances(t,r,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),we&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=r;return this.__filterFn&&(e=e.filter((e,r,s)=>this.__filterFn(t[e],r,s))),this.__sortFn&&e.sort((e,r)=>this.__sortFn(t[e],t[r])),e}__calculateLimit(t){let e=t;const r=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),s=Math.max(e-r,0),this.__chunkCount=s||1):(s=Math.min(Math.max(t-r,0),this.__chunkCount),e=Math.min(r+s,t)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,r){const s=this.__itemsIdxToInstIdx={};let n;for(n=0;n<e;n++){let e=this.__instances[n],i=r[n],o=t[i];s[i]=n,e?(e._setPendingProperty(this.as,o),e._setPendingProperty(this.indexAs,n),e._setPendingProperty(this.itemsIndexAs,i),e._flushProperties()):this.__insertInstance(o,n,i)}for(let t=this.__instances.length-1;t>=n;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const r=qe(e.root);for(let t=0;t<e.children.length;t++){let s=e.children[t];r.appendChild(s)}return e}__attachInstance(t,e){let r=this.__instances[t];e.insertBefore(r.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,r){let s={};return s[this.as]=t,s[this.indexAs]=e,s[this.itemsIndexAs]=r,new this.__ctor(s)}__insertInstance(t,e,r){const s=this.__stampInstance(t,e,r);let n=this.__instances[e+1],i=n?n.children[0]:this;return qe(qe(this).parentNode).insertBefore(s.root,i),this.__instances[e]=s,s}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let r=t.slice(6),s=r.indexOf("."),n=s<0?r:r.substring(0,s);if(n==parseInt(n,10)){let t=s<0?"":r.substring(s+1);this.__handleObservedPaths(t);let i=this.__itemsIdxToInstIdx[n],o=this.__instances[i];if(o){let r=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(r,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return ei(this.template,t)}}customElements.define(hi.is,hi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class pi extends li{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=hs.debounce(this.__renderDebouncer,cr,()=>this.__render()),ds(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=qe(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||qe(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),si()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let e=t._templateInfo?t:qe(t).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(!qe(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let t=qe(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length){if(qe(this).previousSibling!==e[e.length-1])for(let r,s=0;s<e.length&&(r=e[s]);s++)qe(t).insertBefore(r,this)}}else{if(!t)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){mn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),we&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const di=Ce?class extends pi{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const e=this.__dataHost||this;if(de&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=e._bindTemplate(this.__template,!0);r.runEffects=(t,e,r)=>{let s=this.__syncInfo;if(this.if)s&&(this.__syncInfo=null,this._showHideChildren(),e=Object.assign(s.changedProps,e)),t(e,r);else if(this.__instance)if(s||(s=this.__syncInfo={runEffects:t,changedProps:{}}),r)for(const t in e){const e=Ue(t);s.changedProps[e]=this.__dataHost[e]}else Object.assign(s.changedProps,e)},this.__instance=e._stampTemplate(this.__template,r),qe(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Gn(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class extends pi{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=ti(this.__template,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Ue(t)]=!0))}})),this.__instance=new this.__ctor,qe(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=qe(t[0]).parentNode;if(e){e=qe(e);for(let r,s=0;s<t.length&&(r=t[s]);s++)e.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(di.is,di);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let ui=Me(t=>{let e=cs(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let r=e.path;if(r==JSCompiler_renameProperty("items",this)){let r=e.base||[],s=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),s){let t=pn(r,s);this.__applySplices(t)}this.__lastItems=r,this.__lastMulti=t}else if(e.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(e.value.indexSplices);else{let t=r.slice((JSCompiler_renameProperty("items",this)+".").length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let r=0;r<t.length;r++){let s=t[r];e.forEach((t,r)=>{t<s.index||(t>=s.index+s.removed.length?e.set(r,t+s.addedCount-s.removed.length):e.set(r,-1))});for(let t=0;t<s.addedCount;t++){let r=s.index+t;e.has(this.items[r])&&e.set(this.items[r],r)}}this.__updateLinks();let r=0;e.forEach((t,s)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null,e.delete(s)):r++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((r,s)=>{e==t++&&this.deselect(s)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let r;this.__selectedMap.delete(t),this.multi&&(r=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),r,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(li);class fi extends ui{static get is(){return"array-selector"}static get template(){return null}}customElements.define(fi.is,fi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const mi=new Xt;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,r){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,r){},styleSubtree(t,e){mi.processStyles(),Mt(t,e)},styleElement(t){mi.processStyles()},styleDocument(t){mi.processStyles(),Mt(document.body,t)},getComputedStyleValue:(t,e)=>Pt(t,e),flushCustomStyles(){},nativeCss:nt,nativeShadow:Q,cssBuild:et,disableRuntime:st}),window.ShadyCSS.CustomStyleInterface=mi;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const _i=window.ShadyCSS.CustomStyleInterface;class gi extends HTMLElement{constructor(){super(),this._style=null,_i.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute("include");return e&&(t.removeAttribute("include"),t.textContent=function(t){let e=t.trim().split(/\s+/),r="";for(let t=0;t<e.length;t++)r+=Re(e[t]);return r}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let vi;window.customElements.define("custom-style",gi),vi=Rn._mutablePropertyChange;Boolean;const yi=An(HTMLElement).prototype,bi=ai`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;bi.setAttribute("style","display: none;"),document.head.appendChild(bi.content);var Ci=document.createElement("style");Ci.textContent="[hidden] { display: none !important; }",document.head.appendChild(Ci);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class wi{constructor(t){wi[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return wi.types[t]&&wi.types[t][e]}set value(t){var e=this.type,r=this.key;e&&r&&(e=wi.types[e]=wi.types[e]||{},null==t?delete e[r]:e[r]=t)}get list(){if(this.type){var t=wi.types[this.type];return t?Object.keys(t).map((function(t){return zi[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}wi[" "]=function(){},wi.types={};var zi=wi.types;Nn({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,r){var s=new wi({type:t,key:e});return void 0!==r&&r!==s.value?s.value=r:this.value!==s.value&&(this.value=s.value),s},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new wi({type:this.type,key:t}).value}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Nn({_template:ai`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:yi.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&zn(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,zn(this.root).appendChild(this._img))}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Nn({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new wi({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var r=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(r){var s=zn(t.root||t);return s.insertBefore(r,s.childNodes[0]),t._svgIcon=r}return null},removeIcon:function(t){t._svgIcon&&(zn(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return zn(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,r){if(t){var s=t.cloneNode(!0),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=s.getAttribute("viewBox")||"0 0 "+e+" "+e,o="pointer-events: none; display: block; width: 100%; height: 100%;";return r&&s.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),n.setAttribute("viewBox",i),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("focusable","false"),n.style.cssText=o,n.appendChild(s).removeAttribute("id"),n}return null}});
/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const xi=ai`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(xi.content);function Si(){return I`

<style>
  :host {
    display: block;
    width: 100%;
    max-width: 960px;
  }

  app-database-list-item {
    margin-bottom: 30px;
  }
</style>

<div style="padding: 10px;">
${this.databases.map(t=>I`
  <app-database-list-item .database="${t}"></app-database-list-item>
`)}
</div>

`}function ki(){return I`

<style>
  :host {
    display: block;
    width: 100%;
    max-width: 960px;
  }

  a {
    cursor: pointer;
    color: var(--color-ucdblue70);
    font-weight: bold;
    text-decoration: underline;
  }

  p {
    margin: 8px 0;
    line-height: 23px;
  }

  pre {
    background-color: var(--color-ucdgold30);
    overflow: auto;
  }

  h2 {
    margin-top: 0;
    font-size: 28px;
    color: var(--color-black90);
    margin-bottom: 8px;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 18px;
    color: var(--color-black90);
  }

  #content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: var(--color-white);
  }

  .top-row {
    display: flex;
    flex-direction: row;
  }

  .top-row .left-side-content {
    flex: 1;
  }

  .image-wrapper {
    padding: 0 0 20px 20px;
  }

  iron-icon.description {
    padding-right: 4px;
    color: var(--color-ucdblue20);
    font-size: 24px;
    vertical-align: text-top;
  }

  .abstract {
    font-size: 16px;
    color: var(--color-black90);
    margin-bottom: 8px;
  }

  .description {
    margin-bottom: 8px;
  }

  .info-group {
    font-size: 16px;
    color: var(--color-black90);
  }

  .info-group > div {
    margin-bottom: 6px;
  }

  table {
    margin: 18px 0 24px 0;
    border-collapse: collapse;
  }
  table tr td {
    padding-bottom: 6px;
  }
  table tr td:nth-child(2) {
    padding-left: 10px;
    font-weight: bold;
  }

  .connection-examples-toggle {
    margin-left: -6px;
    cursor: pointer;
  }

  .connection-examples-toggle iron-icon[class="arrow-drop-down"] {
    transform: rotate(-90deg);
    color: var(--color-aggie-gold);
    vertical-align: text-bottom;
  }

  .connection-examples-toggle iron-icon[class="arrow-drop-down"][open] {
    transform: rotate(0deg);
  }

  .connection-examples {
    margin-top: 8px;
    padding: 20px;
    background-color: var(--color-ucdgold10);
  }

  .connection-examples > h4,
  .connection-examples .info-group > pre,
  .connection-examples .info-group {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .connection-examples > h4:first-of-type {
    margin-top: 0;
  }

  .connection-examples .info-group {
    margin-top: 6px;
    margin-bottom: 24px;
  }

  .connection-examples .info-group pre {
    padding: 10px;
  }

  .connection-examples .info-group > em {
    display: block;
    margin-top: 4px;
    margin-bottom: 6px;
  }

  .note {
    font-size: italic;
  }

  @media only screen and (max-width: 600px) {
    #content-wrapper {
      margin: 15px;
      padding: 15px;
    }

    .image-wrapper {
      padding: 0 0 20px 20px;
    }
  }
</style>  

<div id="content-wrapper">
  <div class="content">
    <div class="top-row">
      <div class="left-side-content">
        <h2>${this.database.CLUSTER_NAME}</h2>

        <div 
          ?hidden="${!this.database.ABSTRACT}" 
          class="abstract">${this.database.ABSTRACT}
        </div>

        <div ?hidden="${!this.database.DESCRIPTION}">
          <iron-icon class="description" icon="description"></iron-icon>
            <a @click="${this._onViewDocClicked}">View Documentation</a>
        </div>
      </div>
      <div class="image-wrapper">
        <app-db-icon type="${this.database.THEME}" size="75" ></app-db-icon>
      </div>
    </div>

    <h3>Rest API Access via <a href="http://postgrest.org/en/v7.0.0/api.html" target="_blank">PostgREST</a></h3>
    <div class="info-group">
      <div>
        PostgREST URL: <a href="${this.database.PGR_URL}" target="_blank">${this.database.PGR_URL}</a>
      </div>
      <div>
        API Playground via Swagger.io: 
        <a href="https://editor.swagger.io/?url=${this.database.PGR_URL}" target="_blank">API Playground</a>
      </div>
    </div>

    <h3 style="margin-top:24px">Database Connection Information</h3>
    <div style="font-style:italic">PostgreSQL Version: ${this.database.PG_VERSION}</div>
    <table>
      <tr>
        <td>Host</td>
        <td>${this.database.CLUSTER_NAME}.${window.location.hostname}</td>
      </tr>
      <tr>
        <td>Port</td>
        <td>${this.database.PG_FARM_REPL_PORT}</td>
      </tr>
      <tr>
        <td>Database</td>
        <td>${this.database.PGR_DATABASE}</td>
      </tr>
      <tr>
        <td>Username</td>
        <td>${this.database.PGR_USER}</td>
      </tr>
      <tr>
        <td>Password</td>
        <td>${this.database.PGR_PASSWORD}</td>
      </tr>
    </table>

    <h3 tabindex="1" @click="${this._onConnectionToggleClicked}" class="connection-examples-toggle">
      <iron-icon class="arrow-drop-down" icon="arrow-drop-down" ?open="${this.connectionHelpOpen}"></iron-icon>
      Connection Examples
    </h3>

    <div class="connection-examples" ?hidden="${!this.connectionHelpOpen}">
      <h4>JDBC Connection String</h4>
      <div class="info-group">
        <pre>jdbc:postgresql://${this.database.CLUSTER_NAME}.${window.location.hostname}:${this.database.PG_FARM_REPL_PORT}/${this.database.PGR_DATABASE}?user=${this.database.PGR_USER}&password=${this.database.PGR_PASSWORD}&ssl=true</pre>
      </div>

      <h4><a href="https://www.postgresql.org/docs/current/app-psql.html" target="_blank">psql</a> Connection Command</h4>
      <div class="info-group">
        <pre>psql -h ${this.database.CLUSTER_NAME}.${window.location.hostname} -p ${this.database.PG_FARM_REPL_PORT} -U ${this.database.PGR_USER} ${this.database.PGR_DATABASE}</pre>
      </div>

      <h4>R Connection</h4>
      <div class="info-group">
        <em>
          Using the <a href="https://cran.r-project.org/web/packages/RPostgres/index.html" target="_blank">RPostgres</a> library
        </em>
      <pre>
con <- DBI::dbConnect(
  RPostgres::Postgres(), 
  dbname = "${this.database.PGR_DATABASE}",
  host = "${this.database.CLUSTER_NAME}.${window.location.hostname}", 
  port = ${this.database.PG_FARM_REPL_PORT},
  user = "${this.database.PGR_USER}",
  password = "${this.database.PGR_PASSWORD}"
)</pre>
    </div>

    <h4>Python Connection</h4>
    <div class="info-group">
      <em>
        Using the <a href="https://pypi.org/project/psycopg2/" target="_blank">psycopg2</a> library
      </em>
      <pre>
PGHOST="${this.database.CLUSTER_NAME}.${window.location.hostname}"
PGDATABASE="${this.database.PGR_DATABASE}"
PGPORT="${this.database.PG_FARM_REPL_PORT}"
PGUSER="${this.database.PGR_USER}"
PGPASSWORD="${this.database.PGR_PASSWORD}"

conn_string = ("host={} port={} dbname={} user={} password={}") \
  .format(PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD)
conn=psycopg2.connect(conn_string)

# Bonus. Read into Pandas dataframe
# sql_command = "SELECT * from {}.{} limit 10".format(SOME_SCHEMA, SOME_TABLE)
# frame = pd.read_sql(sql_command, conn)</pre>
    </div>

    <h4 style="margin-bottom: 4px">SSL</h4>
    <span class="note">Note: Only secure SSL connections are allowed to the database</span>
  </div>
</div>
`}function Mi(){return I`

<style>
  :host {
    display: inline-block;
  }
</style>

<img src="${this.url}" />
`}customElements.define("app-search-box",class extends X{static get properties(){return{databases:{type:Array}}}constructor(){super(),this.render=K.bind(this),this.databases=Object.values(APP_CONFIG.databases)}_onInputKeyup(t){this.filter=t.currentTarget.value,this._sendUpdate()}_onSelectChange(t){this.sort=t.currentTarget.value,this._sendUpdate()}_sendUpdate(){window.dispatchEvent(new CustomEvent("search",{detail:{filter:new RegExp(this.filter||".*","i"),sort:this.sort||"a-z"}}))}});const Pi={weather:{name:"cloud-sun-solid.svg",color:"var(--color-putah-creek)"},wine:{name:"wine-glass-alt-solid.svg",color:"var(--color-double-decker)"},default:{name:"database-solid.svg",color:"var(--color-aggie-gold)"}};customElements.define("app-db-icon",class extends X{static get properties(){return{size:{type:Number},type:{type:String},url:{type:String},color:{type:String}}}constructor(){super(),this.render=Mi.bind(this),this.size=50,this.url="/images/"+Pi.default.name,this.style.backgroundColor=Pi.default.color}updated(t){if(t.has("type")&&(Pi[this.type]?(this.url="/images/"+Pi[this.type].name,this.style.backgroundColor=Pi[this.type].color):(this.url="/images/"+Pi.default.name,this.style.backgroundColor=Pi.default.color)),t.has("size")){let t=this.shadowRoot.querySelector("img"),e=Math.floor(.7*this.size)+"px";t.style.height=e,t.style.width=e,this.style.borderRadius=this.size+"px",this.style.height=e,this.style.width=e,this.style.padding=Math.floor(this.size/2*.3)+"px"}}});new(r(4));customElements.define("app-database-list-item",class extends X{static get properties(){return{database:{type:Object},connectionHelpOpen:{type:Boolean}}}constructor(){super(),this.render=ki.bind(this),this.connectionHelpOpen=!1,this.database={CLUSTER_NAME:"",DESCRIPTION:"",PGR_DATABASE:"",PGR_PASSWORD:"",PGR_SCHEMA:"",PGR_URL:"",PGR_USER:"",PG_FARM_CONTROLLER_PORT:"",PG_FARM_PGR_PORT:"",PG_FARM_REPL_PORT:"",PG_FARM_VERSION:"",PG_VERSION:""}}_onConnectionToggleClicked(){this.connectionHelpOpen=!this.connectionHelpOpen}_onViewDocClicked(){document.querySelector("app-description-popup").show(this.database)}});const Ai={"a-z":t=>t.sort((t,e)=>t.CLUSTER_NAME<e.CLUSTER_NAME?-1:1),"z-a":t=>t.sort((t,e)=>t.CLUSTER_NAME>e.CLUSTER_NAME?-1:1)};function Ei(){return I`
<style>
  :host {
    display: block;
    background-color: var(--color-aggie-blue);
    line-height: 24px;
    color: white;
    padding: 60px 0 35px 0
  }
  * {
    box-sizing: border-box;
  }
  a, a:visited {
    color: var(--color-white);
  }
  footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  }

  .layout {
    display: flex;
    max-width: 900px;
    width: 100%;
  }
  .layout.center {
    align-items: center;
  }

  .layout .lib-addr-info {
    width: 250px;
  }
  .layout .online-strategy {
    flex: 1;
    padding-left: 10px;
  }
  .layout .online-strategy h3 {
    margin-top: 0;
  }
  .layout .logo-line {
    border-top: 1px solid rgba(255,255,255,0.25);
    flex: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
  li:after {
    content: "|";
    padding: 0 10px;
  }
  li:last-child:after {
    content: "";
    padding: 0;
  }

  @media(max-width: 600px) {
    .layout.top {
      display: block;
      padding-left: 30px;
    }
    .layout .online-strategy {
      padding-left: 0;
    }
  }
</style>

<footer>
  <div class="layout top">
    <div class="lib-addr-info">
      <div style="margin-bottom: 30px;">
        <a href="https://www.library.ucdavis.edu" target="_blank">
          <img src="/images/ucd-logo-main-new-white.png" alt="UC Davis Library logo" />
        </a>
      </div>
      <div>
        <p>
          UC Davis Library<br />
          100 NW Quad<br />
          University of California, Davis<br />
          Davis, CA 95616<br />
          (530) 752-8792<br />
          <a href="mailto:library@ucdavis.edu">library@ucdavis.edu</a>
        </p>
      </div>
    </div>

    <div class="online-strategy">
      <h3>Development Team</h3>
      <div>
        The <a href="https://www.library.ucdavis.edu/service/online-strategy-2/">Online Strategy team at the UC Davis Library</a> repositions Library data for the digital age.
      </div>
    </div>
  </div>

  <div class="layout center" style="margin: 64px 0">
    <div class="logo-line"></div>
    <div style="padding: 0 32px;">
      <a href="https://www.ucdavis.edu/">
        <img src="/images/uc-logo-white.svg" style="height:40px" alt="UC Davis logo" />
      </a>
    </div>
    <div class="logo-line"></div>
  </div>

  <div style="text-align: center;">
    <a href="https://www.ucdavis.edu/">University of California, Davis</a>, One Shields Avenue, Davis, CA 95616 | 530-752-1011
  </div>

  <div style="text-align:center; margin: 15px 0">
    <ul>
      <li><a href="mailto:library@ucdavis.edu">Questions or comments?</a></li>
      <li><a href="http://ucdavis.edu/help/privacy-accessibility.html">Privacy & Accessibility</a></li>
      <li><a href="http://occr.ucdavis.edu/poc/">Principles of Community</a></li>
      <li><a href="http://www.universityofcalifornia.edu/">University of California</a></li>
    </ul>
  </div>

  <div>
    Copyright © The Regents of the University of California, Davis campus. 
    All rights reserved.
  </div>
</footer>`}customElements.define("app-database-list",class extends X{static get properties(){return{databases:{type:Array}}}constructor(){super(),this.render=Si.bind(this);let t=Object.values(APP_CONFIG.databases);Ai["a-z"](t),this.databases=t,window.addEventListener("search",t=>this._onSearch(t.detail))}_onSearch(t){let e=Object.values(APP_CONFIG.databases).filter(e=>e.CLUSTER_NAME.match(t.filter)||(e.ABSTRACT||"").match(t.filter)||(e.DESCRIPTION||"").match(t.filter));Ai[t.sort](e),this.databases=e}});function Li(){return I`

<style>
  :host {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }

  .layout {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 200px;
    max-width:600px;
    padding: 15px;
    /* min-height: 300px; */
    max-height: calc(100% - 40px);
  }

  .header {
    display: flex;
    height: 50px;
    align-items: center;
  }

  .header .title {
    color: var(--color-black90);
    font-size: 22px;
    font-weight: bold;
  }

  #description-md {
    flex: 1;
    overflow: auto;
  }

  iron-icon[icon="close"] {
    cursor: pointer;
  }

</style>  

<div class="layout">
  <div class="content">
      <div class="header">
        <app-db-icon type="${this.theme}" size="50"></app-db-icon>
        <div style="flex:1; padding-left:10px">
          <div style="color: var(--color-ucdblue70)">DOCUMENTATION</div>
          <div class="title">${this.title}</div>
        </div>
        <div style="height: 50px">
          <iron-icon icon="close" tabindex="1" @click="${this.hide}"></iron-icon>
        </div>
      </div>
      <div id="description-md"></div>
  </div>
</div>

`}customElements.define("app-footer",class extends X{static get properties(){return{}}constructor(){super(),this.render=Ei.bind(this)}});var Hi=r(4);const Vi=new(r.n(Hi).a);customElements.define("app-description-popup",class extends X{static get properties(){return{title:{type:String},theme:{type:String}}}constructor(){super(),this.render=Li.bind(this),this.title="",this.theme="",window.addEventListener("resize",()=>this.resize())}firstUpdated(){this.parentElement.removeChild(this),document.body.appendChild(this)}resize(){this.visible&&(this.style.display="block",console.log(window.scrollY),this.style.top=window.scrollY,this.style.bottom=document.body.offsetHeight-(window.innerHeight+window.scrollY),document.body.style.overflow="hidden",document.body.style.position="relative")}show(t){this.shadowRoot.querySelector("#description-md").innerHTML=Vi.render(t.DESCRIPTION),this.title=t.CLUSTER_NAME,this.theme=t.THEME,this.visible=!0,this.resize()}hide(){this.visible=!1,this.style.display="none",document.body.style.overflow="auto",document.body.style.position="initial"}})}]);