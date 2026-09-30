import{_ as xc,C as Cc,r as Bo,F as Dc,g as kc,a as Nc,b as Mc,L as jt,c as Oc,d as ze,S as Fc,e as Lc,i as Ja,f as Nr,h as Uc}from"./firebase-auth-5b5f3abb.js";var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ye,Xa;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,E,A){for(var _=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)_[Ut-2]=arguments[Ut];return g.prototype[E].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)T[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)T[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],E=I.g[2];var A=I.g[3],_=g+(A^y&(E^A))+T[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[1]+3905402710&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[3]+3250441966&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[5]+1200080426&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[7]+4249261313&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[9]+2336552879&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[11]+2304563134&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(A^y&(E^A))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=A+(E^g&(y^E))+T[13]+4254626195&4294967295,A=g+(_<<12&4294967295|_>>>20),_=E+(y^A&(g^y))+T[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=y+(g^E&(A^g))+T[15]+1236535329&4294967295,y=E+(_<<22&4294967295|_>>>10),_=g+(E^A&(y^E))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[6]+3225465664&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[0]+3921069994&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[10]+38016083&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[4]+3889429448&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[14]+3275163606&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[8]+1163531501&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(E^A&(y^E))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=A+(y^E&(g^y))+T[2]+4243563512&4294967295,A=g+(_<<9&4294967295|_>>>23),_=E+(g^y&(A^g))+T[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=y+(A^g&(E^A))+T[12]+2368359562&4294967295,y=E+(_<<20&4294967295|_>>>12),_=g+(y^E^A)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[8]+2272392833&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[14]+4259657740&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[4]+1272893353&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[10]+3200236656&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[0]+3936430074&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[6]+76029189&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(y^E^A)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=A+(g^y^E)+T[12]+3873151461&4294967295,A=g+(_<<11&4294967295|_>>>21),_=E+(A^g^y)+T[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=y+(E^A^g)+T[2]+3299628645&4294967295,y=E+(_<<23&4294967295|_>>>9),_=g+(E^(y|~A))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[7]+1126891415&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[5]+4237533241&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[3]+2399980690&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[1]+2240044497&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[15]+4264355552&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[13]+1309151649&4294967295,y=E+(_<<21&4294967295|_>>>11),_=g+(E^(y|~A))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=A+(y^(g|~E))+T[11]+3174756917&4294967295,A=g+(_<<10&4294967295|_>>>22),_=E+(g^(A|~y))+T[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=y+(A^(E|~g))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+A&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,T=this.B,E=this.h,A=0;A<g;){if(E==0)for(;A<=y;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<g;)if(T[E++]=I.charCodeAt(A++),E==this.blockSize){i(this,T),E=0;break}}else for(;A<g;)if(T[E++]=I[A++],E==this.blockSize){i(this,T),E=0;break}}this.h=E,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)I[y++]=this.g[g]>>>T&255;return I};function o(I,g){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function a(I,g){this.h=g;for(var y=[],T=!0,E=I.length-1;0<=E;E--){var A=I[E]|0;T&&A==g||(y[E]=A,T=!1)}this.g=y}var u={};function c(I){return-128<=I&&128>I?o(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(d(-I));for(var g=[],y=1,T=0;I>=y;T++)g[T]=I/y|0,y*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return x(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),T=p,E=0;E<I.length;E+=8){var A=Math.min(8,I.length-E),_=parseInt(I.substring(E,E+A),g);8>A?(A=d(Math.pow(g,A)),T=T.j(A).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var p=c(0),R=c(1),V=c(16777216);r=a.prototype,r.m=function(){if(k(this))return-x(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D(this))return"0";if(k(this))return"-"+x(this).toString(I);for(var g=d(Math.pow(I,6)),y=this,T="";;){var E=H(y,g).g;y=K(y,E.j(g));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=E,D(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function D(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function k(I){return I.h==-1}r.l=function(I){return I=K(this,I),k(I)?-1:D(I)?0:1};function x(I){for(var g=I.g.length,y=[],T=0;T<g;T++)y[T]=~I.g[T];return new a(y,~I.h).add(R)}r.abs=function(){return k(this)?x(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0,E=0;E<=g;E++){var A=T+(this.i(E)&65535)+(I.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);T=_>>>16,A&=65535,_&=65535,y[E]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function K(I,g){return I.add(x(g))}r.j=function(I){if(D(this)||D(I))return p;if(k(this))return k(I)?x(this).j(x(I)):x(x(this).j(I));if(k(I))return x(this.j(x(I)));if(0>this.l(V)&&0>I.l(V))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<I.g.length;E++){var A=this.i(T)>>>16,_=this.i(T)&65535,Ut=I.i(E)>>>16,un=I.i(E)&65535;y[2*T+2*E]+=_*un,q(y,2*T+2*E),y[2*T+2*E+1]+=A*un,q(y,2*T+2*E+1),y[2*T+2*E+1]+=_*Ut,q(y,2*T+2*E+1),y[2*T+2*E+2]+=A*Ut,q(y,2*T+2*E+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function q(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function U(I,g){this.g=I,this.h=g}function H(I,g){if(D(g))throw Error("division by zero");if(D(I))return new U(p,p);if(k(I))return g=H(x(I),g),new U(x(g.g),x(g.h));if(k(g))return g=H(I,x(g)),new U(x(g.g),g.h);if(30<I.g.length){if(k(I)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=R,T=g;0>=T.l(I);)y=tt(y),T=tt(T);var E=$(y,1),A=$(T,1);for(T=$(T,2),y=$(y,2);!D(T);){var _=A.add(T);0>=_.l(I)&&(E=E.add(y),A=_),T=$(T,1),y=$(y,1)}return g=K(I,E.j(g)),new U(E,g)}for(E=p;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=d(y),_=A.j(g);k(_)||0<_.l(I);)y-=T,A=d(y),_=A.j(g);D(A)&&(A=R),E=E.add(A),I=K(I,_)}return new U(E,I)}r.A=function(I){return H(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function tt(I){for(var g=I.g.length+1,y=[],T=0;T<g;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function $(I,g){var y=g>>5;g%=32;for(var T=I.g.length-y,E=[],A=0;A<T;A++)E[A]=0<g?I.i(A+y)>>>g|I.i(A+y+1)<<32-g:I.i(A+y);return new a(E,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xa=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ye=a}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});var Ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ya,Cn,Za,Rr,Ui,tu,eu,nu;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ir=="object"&&Ir];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function i(s,l){if(l)t:{var h=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in h))break t;h=h[v]}s=s[s.length-1],f=h[s],l=l(f),l!=f&&l!=null&&t(h,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var h=0,f=!1,v={next:function(){if(!f&&h<s.length){var P=h++;return{value:l(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,h){return s.call.apply(s.bind,arguments)}function p(s,l,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(l,v)}}return function(){return s.apply(l,arguments)}}function R(s,l,h){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,R.apply(null,arguments)}function V(s,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,l){function h(){}h.prototype=l.prototype,s.aa=l.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,v,P){for(var C=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)C[Z-2]=arguments[Z];return l.prototype[v].apply(f,C)}}function k(s){const l=s.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=s[f];return h}return[]}function x(s,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const v=s.length||0,P=f.length||0;s.length=v+P;for(let C=0;C<P;C++)s[v+C]=f[C]}else s.push(f)}}class K{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(s){return/^[\s\xa0]*$/.test(s)}function U(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function H(s){return H[" "](s),s}H[" "]=function(){};var tt=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function $(s,l,h){for(const f in s)l.call(h,s[f],f,s)}function I(s,l){for(const h in s)l.call(void 0,s[h],h,s)}function g(s){const l={};for(const h in s)l[h]=s[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,l){let h,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(h in f)s[h]=f[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function E(s){var l=1;s=s.split(":");const h=[];for(;0<l&&s.length;)h.push(s.shift()),l--;return s.length&&h.push(s.join(":")),h}function A(s){u.setTimeout(()=>{throw s},0)}function _(){var s=ci;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Ut{constructor(){this.h=this.g=null}add(l,h){const f=un.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var un=new K(()=>new Jl,s=>s.reset());class Jl{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,cn=!1,ci=new Ut,Ls=()=>{const s=u.Promise.resolve(void 0);ln=()=>{s.then(Xl)}};var Xl=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(h){A(h)}var l=un;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}cn=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Yl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return s}();function hn(s,l){if(gt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(tt){t:{try{H(l.nodeName);var v=!0;break t}catch{}v=!1}v||(l=null)}}else h=="mouseover"?l=s.fromElement:h=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Zl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&hn.aa.h.call(this)}}D(hn,gt);var Zl={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),tc=0;function ec(s,l,h,f,v){this.listener=s,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=v,this.key=++tc,this.da=this.fa=!1}function er(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function nr(s){this.src=s,this.g={},this.h=0}nr.prototype.add=function(s,l,h,f,v){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var C=di(s,l,f,v);return-1<C?(l=s[C],h||(l.fa=!1)):(l=new ec(l,this.src,P,!!f,v),l.fa=h,s.push(l)),l};function hi(s,l){var h=l.type;if(h in s.g){var f=s.g[h],v=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=v)&&Array.prototype.splice.call(f,v,1),P&&(er(l),s.g[h].length==0&&(delete s.g[h],s.h--))}}function di(s,l,h,f){for(var v=0;v<s.length;++v){var P=s[v];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==f)return v}return-1}var fi="closure_lm_"+(1e6*Math.random()|0),mi={};function Us(s,l,h,f,v){if(f&&f.once)return qs(s,l,h,f,v);if(Array.isArray(l)){for(var P=0;P<l.length;P++)Us(s,l[P],h,f,v);return null}return h=yi(h),s&&s[dn]?s.K(l,h,d(f)?!!f.capture:!!f,v):Bs(s,l,h,!1,f,v)}function Bs(s,l,h,f,v,P){if(!l)throw Error("Invalid event type");var C=d(v)?!!v.capture:!!v,Z=pi(s);if(Z||(s[fi]=Z=new nr(s)),h=Z.add(l,h,f,C,P),h.proxy)return h;if(f=nc(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)Yl||(v=C),v===void 0&&(v=!1),s.addEventListener(l.toString(),f,v);else if(s.attachEvent)s.attachEvent(Ks(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function nc(){function s(h){return l.call(s.src,s.listener,h)}const l=rc;return s}function qs(s,l,h,f,v){if(Array.isArray(l)){for(var P=0;P<l.length;P++)qs(s,l[P],h,f,v);return null}return h=yi(h),s&&s[dn]?s.L(l,h,d(f)?!!f.capture:!!f,v):Bs(s,l,h,!0,f,v)}function js(s,l,h,f,v){if(Array.isArray(l))for(var P=0;P<l.length;P++)js(s,l[P],h,f,v);else f=d(f)?!!f.capture:!!f,h=yi(h),s&&s[dn]?(s=s.i,l=String(l).toString(),l in s.g&&(P=s.g[l],h=di(P,h,f,v),-1<h&&(er(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete s.g[l],s.h--)))):s&&(s=pi(s))&&(l=s.g[l.toString()],s=-1,l&&(s=di(l,h,f,v)),(h=-1<s?l[s]:null)&&gi(h))}function gi(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[dn])hi(l.i,s);else{var h=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(h,f,s.capture):l.detachEvent?l.detachEvent(Ks(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=pi(l))?(hi(h,s),h.h==0&&(h.src=null,l[fi]=null)):er(s)}}}function Ks(s){return s in mi?mi[s]:mi[s]="on"+s}function rc(s,l){if(s.da)s=!0;else{l=new hn(l,this);var h=s.listener,f=s.ha||s.src;s.fa&&gi(s),s=h.call(f,l)}return s}function pi(s){return s=s[fi],s instanceof nr?s:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(s){return typeof s=="function"?s:(s[_i]||(s[_i]=function(l){return s.handleEvent(l)}),s[_i])}function pt(){zt.call(this),this.i=new nr(this),this.M=this,this.F=null}D(pt,zt),pt.prototype[dn]=!0,pt.prototype.removeEventListener=function(s,l,h,f){js(this,s,l,h,f)};function Tt(s,l){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new gt(l,s);else if(l instanceof gt)l.target=l.target||s;else{var v=l;l=new gt(f,s),T(l,v)}if(v=!0,h)for(var P=h.length-1;0<=P;P--){var C=l.g=h[P];v=rr(C,f,!0,l)&&v}if(C=l.g=s,v=rr(C,f,!0,l)&&v,v=rr(C,f,!1,l)&&v,h)for(P=0;P<h.length;P++)C=l.g=h[P],v=rr(C,f,!1,l)&&v}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var h=s.g[l],f=0;f<h.length;f++)er(h[f]);delete s.g[l],s.h--}}this.F=null},pt.prototype.K=function(s,l,h,f){return this.i.add(String(s),l,!1,h,f)},pt.prototype.L=function(s,l,h,f){return this.i.add(String(s),l,!0,h,f)};function rr(s,l,h,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var v=!0,P=0;P<l.length;++P){var C=l[P];if(C&&!C.da&&C.capture==h){var Z=C.listener,dt=C.ha||C.src;C.fa&&hi(s.i,C),v=Z.call(dt,f)!==!1&&v}}return v&&!f.defaultPrevented}function Gs(s,l,h){if(typeof s=="function")h&&(s=R(s,h));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function zs(s){s.g=Gs(()=>{s.g=null,s.i&&(s.i=!1,zs(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class ic extends zt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:zs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(s){zt.call(this),this.h=s,this.g={}}D(fn,zt);var Qs=[];function $s(s){$(s.g,function(l,h){this.g.hasOwnProperty(h)&&gi(l)},s),s.g={}}fn.prototype.N=function(){fn.aa.N.call(this),$s(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ii=u.JSON.stringify,sc=u.JSON.parse,oc=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ti(){}Ti.prototype.h=null;function Ws(s){return s.h||(s.h=s.i())}function Hs(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){gt.call(this,"d")}D(Ei,gt);function vi(){gt.call(this,"c")}D(vi,gt);var ue={},Js=null;function ir(){return Js=Js||new pt}ue.La="serverreachability";function Xs(s){gt.call(this,ue.La,s)}D(Xs,gt);function gn(s){const l=ir();Tt(l,new Xs(l))}ue.STAT_EVENT="statevent";function Ys(s,l){gt.call(this,ue.STAT_EVENT,s),this.stat=l}D(Ys,gt);function Et(s){const l=ir();Tt(l,new Ys(l,s))}ue.Ma="timingevent";function Zs(s,l){gt.call(this,ue.Ma,s),this.size=l}D(Zs,gt);function pn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function _n(){this.g=!0}_n.prototype.xa=function(){this.g=!1};function ac(s,l,h,f,v,P){s.info(function(){if(s.g)if(P)for(var C="",Z=P.split("&"),dt=0;dt<Z.length;dt++){var W=Z[dt].split("=");if(1<W.length){var _t=W[0];W=W[1];var yt=_t.split("_");C=2<=yt.length&&yt[1]=="type"?C+(_t+"="+W+"&"):C+(_t+"=redacted&")}}else C=null;else C=P;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+l+`
`+h+`
`+C})}function uc(s,l,h,f,v,P,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+l+`
`+h+`
`+P+" "+C})}function Ce(s,l,h,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+cc(s,h)+(f?" "+f:"")})}function lc(s,l){s.info(function(){return"TIMEOUT: "+l})}_n.prototype.info=function(){};function cc(s,l){if(!s.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var P=v[0];if(P!="noop"&&P!="stop"&&P!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return Ii(h)}catch{return l}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},to={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wi;function or(){}D(or,Ti),or.prototype.g=function(){return new XMLHttpRequest},or.prototype.i=function(){return{}},wi=new or;function Qt(s,l,h,f){this.j=s,this.i=l,this.l=h,this.R=f||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eo}function eo(){this.i=null,this.g="",this.h=!1}var no={},Ai={};function Ri(s,l,h){s.L=1,s.v=cr(Bt(l)),s.m=h,s.P=!0,ro(s,null)}function ro(s,l){s.F=Date.now(),ar(s),s.A=Bt(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),yo(h.i,"t",f),s.C=0,h=s.j.J,s.h=new eo,s.g=Oo(s.j,h?l:null,!s.m),0<s.O&&(s.M=new ic(R(s.Y,s,s.g),s.O)),l=s.U,h=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Qs[0]=v.toString()),v=Qs);for(var P=0;P<v.length;P++){var C=Us(h,v[P],f||l.handleEvent,!1,l.h||l);if(!C)break;l.g[C.key]=C}l=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),gn(),ac(s.i,s.u,s.A,s.l,s.R,s.m)}Qt.prototype.ca=function(s){s=s.target;const l=this.M;l&&qt(s)==3?l.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)t:{const yt=qt(this.g);var l=this.g.Ba();const Ne=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||yt!=4||l==7||(l==8||0>=Ne?gn(3):gn(2)),Pi(this);var h=this.g.Z();this.X=h;e:if(io(this)){var f=Ro(this.g);s="";var v=f.length,P=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){le(this),yn(this);var C="";break e}this.h.i=new u.TextDecoder}for(l=0;l<v;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(P&&l==v-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=h==200,uc(this.i,this.u,this.A,this.l,this.R,yt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,dt=this.g;if((Z=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Z)){var W=Z;break e}}W=null}if(h=W)Ce(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vi(this,h);else{this.o=!1,this.s=3,Et(12),le(this),yn(this);break t}}if(this.P){h=!0;let Mt;for(;!this.J&&this.C<C.length;)if(Mt=hc(this,C),Mt==Ai){yt==4&&(this.s=4,Et(14),h=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==no){this.s=4,Et(15),Ce(this.i,this.l,C,"[Invalid Chunk]"),h=!1;break}else Ce(this.i,this.l,Mt,null),Vi(this,Mt);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),h=!1),this.o=this.o&&h,!h)Ce(this.i,this.l,C,"[Invalid Chunked Response]"),le(this),yn(this);else if(0<C.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),ki(_t),_t.M=!0,Et(11))}}else Ce(this.i,this.l,C,null),Vi(this,C);yt==4&&le(this),this.o&&!this.J&&(yt==4?Do(this.j,this):(this.o=!1,ar(this)))}else Sc(this.g),h==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),le(this),yn(this)}}}catch{}finally{}};function io(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function hc(s,l){var h=s.C,f=l.indexOf(`
`,h);return f==-1?Ai:(h=Number(l.substring(h,f)),isNaN(h)?no:(f+=1,f+h>l.length?Ai:(l=l.slice(f,f+h),s.C=f+h,l)))}Qt.prototype.cancel=function(){this.J=!0,le(this)};function ar(s){s.S=Date.now()+s.I,so(s,s.I)}function so(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=pn(R(s.ba,s),l)}function Pi(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(lc(this.i,this.A),this.L!=2&&(gn(),Et(17)),le(this),this.s=2,yn(this)):so(this,this.S-s)};function yn(s){s.j.G==0||s.J||Do(s.j,s)}function le(s){Pi(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,$s(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Vi(s,l){try{var h=s.j;if(h.G!=0&&(h.g==s||Si(h.h,s))){if(!s.K&&Si(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)pr(h),mr(h);else break t;Di(h),Et(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=pn(R(h.Za,h),6e3));if(1>=uo(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else he(h,11)}else if((s.K||h.g==s)&&pr(h),!q(l))for(v=h.Da.g.parse(l),l=0;l<v.length;l++){let W=v[l];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const _t=W[3];_t!=null&&(h.la=_t,h.j.info("VER="+h.la));const yt=W[4];yt!=null&&(h.Aa=yt,h.j.info("SVER="+h.Aa));const Ne=W[5];Ne!=null&&typeof Ne=="number"&&0<Ne&&(f=1.5*Ne,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Mt=s.g;if(Mt){const yr=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yr){var P=f.h;P.g||yr.indexOf("spdy")==-1&&yr.indexOf("quic")==-1&&yr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(bi(P,P.h),P.h=null))}if(f.D){const Ni=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ni&&(f.ya=Ni,et(f.I,f.D,Ni))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var C=s;if(f.qa=Mo(f,f.J?f.ia:null,f.W),C.K){lo(f.h,C);var Z=C,dt=f.L;dt&&(Z.I=dt),Z.B&&(Pi(Z),ar(Z)),f.g=C}else xo(f);0<h.i.length&&gr(h)}else W[0]!="stop"&&W[0]!="close"||he(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?he(h,7):Ci(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}gn(4)}catch{}}var dc=class{constructor(s,l){this.g=s,this.map=l}};function oo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function uo(s){return s.h?1:s.g?s.g.size:0}function Si(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function bi(s,l){s.g?s.g.add(l):s.h=l}function lo(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}oo.prototype.cancel=function(){if(this.i=co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function co(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const h of s.g.values())l=l.concat(h.D);return l}return k(s.i)}function fc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(c(s)){for(var l=[],h=s.length,f=0;f<h;f++)l.push(s[f]);return l}l=[],h=0;for(f in s)l[h++]=s[f];return l}function mc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(c(s)||typeof s=="string"){var l=[];s=s.length;for(var h=0;h<s;h++)l.push(h);return l}l=[],h=0;for(const f in s)l[h++]=f;return l}}}function ho(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(c(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var h=mc(s),f=fc(s),v=f.length,P=0;P<v;P++)l.call(void 0,f[P],h&&h[P],s)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gc(s,l){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),v=null;if(0<=f){var P=s[h].substring(0,f);v=s[h].substring(f+1)}else P=s[h];l(P,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ce(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ce){this.h=s.h,ur(this,s.j),this.o=s.o,this.g=s.g,lr(this,s.s),this.l=s.l;var l=s.i,h=new En;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),mo(this,h),this.m=s.m}else s&&(l=String(s).match(fo))?(this.h=!1,ur(this,l[1]||"",!0),this.o=In(l[2]||""),this.g=In(l[3]||"",!0),lr(this,l[4]),this.l=In(l[5]||"",!0),mo(this,l[6]||"",!0),this.m=In(l[7]||"")):(this.h=!1,this.i=new En(null,this.h))}ce.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Tn(l,go,!0),":");var h=this.g;return(h||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Tn(l,go,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(Tn(h,h.charAt(0)=="/"?yc:_c,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",Tn(h,Tc)),s.join("")};function Bt(s){return new ce(s)}function ur(s,l,h){s.j=h?In(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function lr(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function mo(s,l,h){l instanceof En?(s.i=l,Ec(s.i,s.h)):(h||(l=Tn(l,Ic)),s.i=new En(l,s.h))}function et(s,l,h){s.i.set(l,h)}function cr(s){return et(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function In(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Tn(s,l,h){return typeof s=="string"?(s=encodeURI(s).replace(l,pc),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function pc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var go=/[#\/\?@]/g,_c=/[#\?:]/g,yc=/[#\?]/g,Ic=/[#\?@]/g,Tc=/#/g;function En(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function $t(s){s.g||(s.g=new Map,s.h=0,s.i&&gc(s.i,function(l,h){s.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=En.prototype,r.add=function(s,l){$t(this),this.i=null,s=De(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(l),this.h+=1,this};function po(s,l){$t(s),l=De(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function _o(s,l){return $t(s),l=De(s,l),s.g.has(l)}r.forEach=function(s,l){$t(this),this.g.forEach(function(h,f){h.forEach(function(v){s.call(l,v,f,this)},this)},this)},r.na=function(){$t(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const v=s[f];for(let P=0;P<v.length;P++)h.push(l[f])}return h},r.V=function(s){$t(this);let l=[];if(typeof s=="string")_o(this,s)&&(l=l.concat(this.g.get(De(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)l=l.concat(s[h])}return l},r.set=function(s,l){return $t(this),this.i=null,s=De(this,s),_o(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},r.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function yo(s,l,h){po(s,l),0<h.length&&(s.i=null,s.g.set(De(s,l),k(h)),s.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const P=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var v=P;C[f]!==""&&(v+="="+encodeURIComponent(String(C[f]))),s.push(v)}}return this.i=s.join("&")};function De(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function Ec(s,l){l&&!s.j&&($t(s),s.i=null,s.g.forEach(function(h,f){var v=f.toLowerCase();f!=v&&(po(this,f),yo(this,v,h))},s)),s.j=l}function vc(s,l){const h=new _n;if(u.Image){const f=new Image;f.onload=V(Wt,h,"TestLoadImage: loaded",!0,l,f),f.onerror=V(Wt,h,"TestLoadImage: error",!1,l,f),f.onabort=V(Wt,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=V(Wt,h,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function wc(s,l){const h=new _n,f=new AbortController,v=setTimeout(()=>{f.abort(),Wt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(v),P.ok?Wt(h,"TestPingServer: ok",!0,l):Wt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(v),Wt(h,"TestPingServer: error",!1,l)})}function Wt(s,l,h,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(h)}catch{}}function Ac(){this.g=new oc}function Rc(s,l,h){const f=h||"";try{ho(s,function(v,P){let C=v;d(v)&&(C=Ii(v)),l.push(f+P+"="+encodeURIComponent(C))})}catch(v){throw l.push(f+"type="+encodeURIComponent("_badmap")),v}}function hr(s){this.l=s.Ub||null,this.j=s.eb||!1}D(hr,Ti),hr.prototype.g=function(){return new dr(this.l,this.j)},hr.prototype.i=function(s){return function(){return s}}({});function dr(s,l){pt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(dr,pt),r=dr.prototype,r.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,wn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Io(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Io(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?vn(this):wn(this),this.readyState==3&&Io(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,vn(this))},r.Qa=function(s){this.g&&(this.response=s,vn(this))},r.ga=function(){this.g&&vn(this)};function vn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,wn(s)}r.setRequestHeader=function(s,l){this.u.append(s,l)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=l.next();return s.join(`\r
`)};function wn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(dr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function To(s){let l="";return $(s,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function xi(s,l,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=To(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):et(s,l,h))}function ot(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(ot,pt);var Pc=/^https?$/i,Vc=["POST","PUT"];r=ot.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wi.g(),this.v=this.o?Ws(this.o):Ws(wi),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(P){Eo(this,P);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)h.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())h.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Vc,l,void 0))||f||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,C]of h)this.g.setRequestHeader(P,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){Eo(this,P)}};function Eo(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,vo(s),fr(s)}function vo(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),fr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?wo(this):this.bb())},r.bb=function(){wo(this)};function wo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||qt(s)!=4||s.Z()!=2)){if(s.u&&qt(s)==4)Gs(s.Ea,0,s);else if(Tt(s,"readystatechange"),qt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var f;if(f=C===0){var v=String(s.D).match(fo)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),f=!Pc.test(v?v.toLowerCase():"")}h=f}if(h)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var P=2<qt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",vo(s)}}finally{fr(s)}}}}function fr(s,l){if(s.g){Ao(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Tt(s,"ready");try{h.onreadystatechange=f}catch{}}}function Ao(s){s.I&&(u.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function qt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),sc(l)}};function Ro(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Sc(s){const l={};s=(s.g&&2<=qt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(q(s[f]))continue;var h=E(s[f]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[v]||[];l[v]=P,P.push(h)}I(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(s,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||l}function Po(s){this.Aa=0,this.i=[],this.j=new _n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=An("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=An("baseRetryDelayMs",5e3,s),this.cb=An("retryDelaySeedMs",1e4,s),this.Wa=An("forwardChannelMaxRetries",2,s),this.wa=An("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oo(s&&s.concurrentRequestLimit),this.Da=new Ac,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Po.prototype,r.la=8,r.G=1,r.connect=function(s,l,h,f){Et(0),this.W=s,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Mo(this,null,this.W),gr(this)};function Ci(s){if(Vo(s),s.G==3){var l=s.U++,h=Bt(s.I);if(et(h,"SID",s.K),et(h,"RID",l),et(h,"TYPE","terminate"),Rn(s,h),l=new Qt(s,s.j,l),l.L=2,l.v=cr(Bt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=Oo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ar(l)}No(s)}function mr(s){s.g&&(ki(s),s.g.cancel(),s.g=null)}function Vo(s){mr(s),s.u&&(u.clearTimeout(s.u),s.u=null),pr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function gr(s){if(!ao(s.h)&&!s.s){s.s=!0;var l=s.Ga;ln||Ls(),cn||(ln(),cn=!0),ci.add(l,s),s.B=0}}function bc(s,l){return uo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=pn(R(s.Ga,s,l),ko(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Qt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(v.H=P,P=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=bo(this,v,l),h=Bt(this.I),et(h,"RID",s),et(h,"CVER",22),this.D&&et(h,"X-HTTP-Session-Id",this.D),Rn(this,h),P&&(this.O?l="headers="+encodeURIComponent(String(To(P)))+"&"+l:this.m&&xi(h,this.m,P)),bi(this.h,v),this.Ua&&et(h,"TYPE","init"),this.P?(et(h,"$req",l),et(h,"SID","null"),v.T=!0,Ri(v,h,null)):Ri(v,h,l),this.G=2}}else this.G==3&&(s?So(this,s):this.i.length==0||ao(this.h)||So(this))};function So(s,l){var h;l?h=l.l:h=s.U++;const f=Bt(s.I);et(f,"SID",s.K),et(f,"RID",h),et(f,"AID",s.T),Rn(s,f),s.m&&s.o&&xi(f,s.m,s.o),h=new Qt(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),l&&(s.i=l.D.concat(s.i)),l=bo(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),bi(s.h,h),Ri(h,f,l)}function Rn(s,l){s.H&&$(s.H,function(h,f){et(l,f,h)}),s.l&&ho({},function(h,f){et(l,f,h)})}function bo(s,l,h){h=Math.min(s.i.length,h);var f=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let P=-1;for(;;){const C=["count="+h];P==-1?0<h?(P=v[0].g,C.push("ofs="+P)):P=0:C.push("ofs="+P);let Z=!0;for(let dt=0;dt<h;dt++){let W=v[dt].g;const _t=v[dt].map;if(W-=P,0>W)P=Math.max(0,v[dt].g-100),Z=!1;else try{Rc(_t,C,"req"+W+"_")}catch{f&&f(_t)}}if(Z){f=C.join("&");break t}}}return s=s.i.splice(0,h),l.D=s,f}function xo(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;ln||Ls(),cn||(ln(),cn=!0),ci.add(l,s),s.v=0}}function Di(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=pn(R(s.Fa,s),ko(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Co(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=pn(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),mr(this),Co(this))};function ki(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Co(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Bt(s.qa);et(l,"RID","rpc"),et(l,"SID",s.K),et(l,"AID",s.T),et(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&et(l,"TO",s.ja),et(l,"TYPE","xmlhttp"),Rn(s,l),s.m&&s.o&&xi(l,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=cr(Bt(l)),h.m=null,h.P=!0,ro(h,s)}r.Za=function(){this.C!=null&&(this.C=null,mr(this),Di(this),Et(19))};function pr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Do(s,l){var h=null;if(s.g==l){pr(s),ki(s),s.g=null;var f=2}else if(Si(s.h,l))h=l.D,lo(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var v=s.B;f=ir(),Tt(f,new Zs(f,h)),gr(s)}else xo(s);else if(v=l.s,v==3||v==0&&0<l.X||!(f==1&&bc(s,l)||f==2&&Di(s)))switch(h&&0<h.length&&(l=s.h,l.i=l.i.concat(h)),v){case 1:he(s,5);break;case 4:he(s,10);break;case 3:he(s,6);break;default:he(s,2)}}}function ko(s,l){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*l}function he(s,l){if(s.j.info("Error code "+l),l==2){var h=R(s.fb,s),f=s.Xa;const v=!f;f=new ce(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ur(f,"https"),cr(f),v?vc(f.toString(),h):wc(f.toString(),h)}else Et(2);s.G=0,s.l&&s.l.sa(l),No(s),Vo(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function No(s){if(s.G=0,s.ka=[],s.l){const l=co(s.h);(l.length!=0||s.i.length!=0)&&(x(s.ka,l),x(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Mo(s,l,h){var f=h instanceof ce?Bt(h):new ce(h);if(f.g!="")l&&(f.g=l+"."+f.g),lr(f,f.s);else{var v=u.location;f=v.protocol,l=l?l+"."+v.hostname:v.hostname,v=+v.port;var P=new ce(null);f&&ur(P,f),l&&(P.g=l),v&&lr(P,v),h&&(P.l=h),f=P}return h=s.D,l=s.ya,h&&l&&et(f,h,l),et(f,"VER",s.la),Rn(s,f),f}function Oo(s,l,h){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ot(new hr({eb:h})):new ot(s.pa),l.Ha(s.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}r=Fo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function _r(){}_r.prototype.g=function(s,l){return new St(s,l)};function St(s,l){pt.call(this),this.g=new Po(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!q(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new ke(this)}D(St,pt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Ci(this.g)},St.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Ii(s),s=h);l.i.push(new dc(l.Ya++,s)),l.G==3&&gr(l)},St.prototype.N=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,St.aa.N.call(this)};function Lo(s){Ei.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const h in l){s=h;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}D(Lo,Ei);function Uo(){vi.call(this),this.status=1}D(Uo,vi);function ke(s){this.g=s}D(ke,Fo),ke.prototype.ua=function(){Tt(this.g,"a")},ke.prototype.ta=function(s){Tt(this.g,new Lo(s))},ke.prototype.sa=function(s){Tt(this.g,new Uo)},ke.prototype.ra=function(){Tt(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,nu=function(){return new _r},eu=function(){return ir()},tu=ue,Ui={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Rr=sr,to.COMPLETE="complete",Za=to,Hs.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Cn=Hs,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Ya=ot}).apply(typeof Ir<"u"?Ir:typeof self<"u"?self:typeof window<"u"?window:{});const jo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Lc("@firebase/firestore");function Ue(){return Ee.logLevel}function b(r,...t){if(Ee.logLevel<=jt.DEBUG){const e=t.map(is);Ee.debug(`Firestore (${rn}): ${r}`,...e)}}function vt(r,...t){if(Ee.logLevel<=jt.ERROR){const e=t.map(is);Ee.error(`Firestore (${rn}): ${r}`,...e)}}function ve(r,...t){if(Ee.logLevel<=jt.WARN){const e=t.map(is);Ee.warn(`Firestore (${rn}): ${r}`,...e)}}function is(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+r;throw vt(t),new Error(t)}function F(r,t){r||O()}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Dc{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class qc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class jc{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){F(this.o===void 0);let n=this.i;const i=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=o;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(F(typeof n.accessToken=="string"),new ru(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return F(t===null||typeof t=="string"),new ft(t)}}class Kc{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gc{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Kc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){F(this.o===void 0);const n=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(F(typeof e.token=="string"),this.R=e.token,new zc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=$c(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function j(r,t){return r<t?-1:r>t?1:0}function Qe(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}function su(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new st(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new st(0,0))}static max(){return new L(new st(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return qn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qn?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=t.get(i),a=e.get(i);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class J extends qn{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Wc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends qn{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return Wc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new M(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new M(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(n+=u,i++):(o(),i++)}if(o(),a)throw new M(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.path=t}static fromPath(t){return new N(J.fromString(t))}static fromName(t){return new N(J.fromString(t).popFirst(5))}static empty(){return new N(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new N(new J(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}function Bi(r){return r.fields.find(t=>t.kind===2)}function fe(r){return r.fields.filter(t=>t.kind!==2)}Mr.UNKNOWN_ID=-1;class Pr{constructor(t,e){this.fieldPath=t,this.kind=e}}class jn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new jn(0,xt.min())}}function Hc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new st(e+1,0):new st(e,n));return new xt(i,N.empty(),t)}function ou(r){return new xt(r.readTime,r.key,-1)}class xt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xt(L.min(),N.empty(),-1)}static max(){return new xt(L.max(),N.empty(),-1)}}function ss(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=N.comparator(r.documentKey,t.documentKey),e!==0?e:j(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==au)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let i=0,o=0,a=!1;t.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&e()},c=>n(c))}),a=!0,o===i&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(i=>i?w.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new w((n,i)=>{const o=t.length,a=new Array(o);let u=0;for(let c=0;c<o;c++){const d=c;e(t[d]).next(m=>{a[d]=m,++u,u===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new w((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Zt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new On(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=os(n.target.error);this.V.reject(new On(t,i))}}static open(t,e,n,i){try{return new $r(e,t.transaction(i,n))}catch(o){throw new On(e,o)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(b("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Xc(e)}}class te{constructor(t,e,n){this.name=t,this.version=e,this.p=n,te.S(Nr())===12.2&&vt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return b("SimpleDb","Removing database:",t),me(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Uc())return!1;if(te.v())return!0;const t=Nr(),e=te.S(t),n=0<e&&e<10,i=lu(t),o=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||o)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.C)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const a=o.target.result;e(a)},i.onblocked=()=>{n(new On(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const a=o.target.error;a.name==="VersionError"?n(new M(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new M(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new On(t,a))},i.onupgradeneeded=o=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const a=o.target.result;this.p.O(a,i.transaction,o.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const o=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=$r.open(this.db,t,o?"readonly":"readwrite",n),c=i(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return c.catch(()=>{}),await u.m,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(b("SimpleDb","Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lu(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Jc{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return me(this.B.delete())}}class On extends M{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function se(r){return r.name==="IndexedDbTransactionError"}class Xc{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),me(n)}add(t){return b("SimpleDb","ADD",this.store.name,t,t),me(this.store.add(t))}get(t){return me(this.store.get(t)).next(e=>(e===void 0&&(e=null),b("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return b("SimpleDb","DELETE",this.store.name,t),me(this.store.delete(t))}count(){return b("SimpleDb","COUNT",this.store.name),me(this.store.count())}U(t,e){const n=this.options(t,e),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(n.range);return new w((a,u)=>{o.onerror=c=>{u(c.target.error)},o.onsuccess=c=>{a(c.target.result)}})}{const o=this.cursor(n),a=[];return this.W(o,(u,c)=>{a.push(c)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((i,o)=>{n.onerror=a=>{o(a.target.error)},n.onsuccess=a=>{i(a.target.result)}})}j(t,e){b("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const i=this.cursor(n);return this.W(i,(o,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.W(i,e)}Y(t){const e=this.cursor({});return new w((n,i)=>{e.onerror=o=>{const a=os(o.target.error);i(a)},e.onsuccess=o=>{const a=o.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new w((i,o)=>{t.onerror=a=>{o(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void i();const c=new Jc(u),d=e(u.primaryKey,u.value,c);if(d instanceof w){const m=d.catch(p=>(c.done(),w.reject(p)));n.push(m)}c.isDone?i():c.K===null?u.continue():u.continue(c.K)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function me(r){return new w((t,e)=>{r.onsuccess=n=>{const i=n.target.result;t(i)},r.onerror=n=>{const i=os(n.target.error);e(i)}})}let Ko=!1;function os(r){const t=te.S(Nr());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ko||(Ko=!0,setTimeout(()=>{throw n},0)),n}}return r}class Yc{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){b("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{b("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){se(e)?b("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await be(e)}await this.X(6e4)})}}class Zc{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let i=e,o=!0;return w.doWhile(()=>o===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return b("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,i).next(u=>{i-=u,n.add(a)});o=!1})).next(()=>e-i)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(i=>this.localStore.localDocuments.getNextDocuments(t,e,i,n).next(o=>{const a=o.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(i,o)).next(u=>(b("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((i,o)=>{const a=ou(o);ss(a,n)>0&&(n=a)}),new xt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ct.oe=-1;function Wr(r){return r==null}function Kn(r){return r===0&&1/r==-1/0}function th(r){return typeof r=="number"&&Number.isInteger(r)&&!Kn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Go(t)),t=eh(r.get(e),t);return Go(t)}function eh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Go(r){return r+""}function Ot(r){const t=r.length;if(F(t>=2),t===2)return F(r.charAt(0)===""&&r.charAt(1)===""),J.emptyPath();const e=t-2,n=[];let i="";for(let o=0;o<t;){const a=r.indexOf("",o);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(o,a);let c;i.length===0?c=u:(i+=u,c=i,i=""),n.push(c);break;case"":i+=r.substring(o,a),i+="\0";break;case"":i+=r.substring(o,a+1);break;default:O()}o=a+2}return new J(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(r,t){return[r,wt(t)]}function cu(r,t,e){return[r,wt(t),e]}const nh={},rh=["prefixPath","collectionGroup","readTime","documentId"],ih=["prefixPath","collectionGroup","documentId"],sh=["collectionGroup","readTime","prefixPath","documentId"],oh=["canonicalId","targetId"],ah=["targetId","path"],uh=["path","targetId"],lh=["collectionId","parent"],ch=["indexId","uid"],hh=["uid","sequenceNumber"],dh=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fh=["indexId","uid","orderedDocumentKey"],mh=["userId","collectionPath","documentId"],gh=["userId","collectionPath","largestBatchId"],ph=["userId","collectionGroup","largestBatchId"],hu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_h=[...hu,"documentOverlays"],du=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fu=du,as=[...fu,"indexConfiguration","indexState","indexEntries"],yh=as,Ih=[...as,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends uu{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function ct(r,t){const e=B(r);return te.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function sn(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function mu(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tr(this.root,t,this.comparator,!0)}}class Tr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??mt.RED,this.left=i??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new mt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,i,o){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $o(this.data.getIterator())}getIteratorFrom(t){return new $o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Y(this.comparator);return e.data=t,e}}class $o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Me(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new Y(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qe(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new gu("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Th=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(r){if(F(!!r),typeof r=="string"){let t=0;const e=Th.exec(r);if(F(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ne(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ls(r){const t=r.mapValue.fields.__previous_value__;return us(t)?ls(t):t}function Gn(r){const t=Gt(r.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e,n,i,o,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}class we{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new we("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof we&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Sr={nullValue:"NULL_VALUE"};function Ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?us(r)?4:pu(r)?9007199254740991:Hr(r)?10:11:O()}function Lt(r,t){if(r===t)return!0;const e=Ae(r);if(e!==Ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Gn(r).isEqual(Gn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Gt(i.timestampValue),u=Gt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ne(i.bytesValue).isEqual(ne(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return nt(i.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return nt(i.integerValue)===nt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=nt(i.doubleValue),u=nt(o.doubleValue);return a===u?Kn(a)===Kn(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return Qe(r.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Qo(a)!==Qo(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Lt(a[c],u[c])))return!1;return!0}(r,t);default:return O()}}function zn(r,t){return(r.values||[]).find(e=>Lt(e,t))!==void 0}function re(r,t){if(r===t)return 0;const e=Ae(r),n=Ae(t);if(e!==n)return j(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,t.booleanValue);case 2:return function(o,a){const u=nt(o.integerValue||o.doubleValue),c=nt(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(r,t);case 3:return Wo(r.timestampValue,t.timestampValue);case 4:return Wo(Gn(r),Gn(t));case 5:return j(r.stringValue,t.stringValue);case 6:return function(o,a){const u=ne(o),c=ne(a);return u.compareTo(c)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const m=j(u[d],c[d]);if(m!==0)return m}return j(u.length,c.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const u=j(nt(o.latitude),nt(a.latitude));return u!==0?u:j(nt(o.longitude),nt(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ho(r.arrayValue,t.arrayValue);case 10:return function(o,a){var u,c,d,m;const p=o.fields||{},R=a.fields||{},V=(u=p.value)===null||u===void 0?void 0:u.arrayValue,D=(c=R.value)===null||c===void 0?void 0:c.arrayValue,k=j(((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Ho(V,D)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Yt.mapValue&&a===Yt.mapValue)return 0;if(o===Yt.mapValue)return 1;if(a===Yt.mapValue)return-1;const u=o.fields||{},c=Object.keys(u),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let p=0;p<c.length&&p<m.length;++p){const R=j(c[p],m[p]);if(R!==0)return R;const V=re(u[c[p]],d[m[p]]);if(V!==0)return V}return j(c.length,m.length)}(r.mapValue,t.mapValue);default:throw O()}}function Wo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return j(r,t);const e=Gt(r),n=Gt(t),i=j(e.seconds,n.seconds);return i!==0?i:j(e.nanos,n.nanos)}function Ho(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=re(e[i],n[i]);if(o)return o}return j(e.length,n.length)}function $e(r){return ji(r)}function ji(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Gt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ne(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return N.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ji(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ji(e.fields[a])}`;return i+"}"}(r.mapValue):O()}function cs(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ki(r){return!!r&&"integerValue"in r}function Qn(r){return!!r&&"arrayValue"in r}function Jo(r){return!!r&&"nullValue"in r}function Xo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function br(r){return!!r&&"mapValue"in r}function Hr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Fn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return sn(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Fn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Fn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function pu(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const _u={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function vh(r){return"nullValue"in r?Sr:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?cs(we.empty(),N.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Hr(r)?_u:{mapValue:{}}:O()}function wh(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?cs(we.empty(),N.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?_u:"mapValue"in r?Hr(r)?{mapValue:{}}:Yt:O()}function Yo(r,t){const e=re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Zo(r,t){const e=re(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!br(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fn(e)}setAll(t){let e=it.emptyPath(),n={},i=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,i),n={},i=[],e=u.popLast()}a?n[u.lastSegment()]=Fn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());br(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){sn(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Pt(Fn(this.value))}}function yu(r){const t=[];return sn(r.fields,(e,n)=>{const i=new it([e]);if(br(n)){const o=yu(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e,n,i,o,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,L.min(),L.min(),L.min(),Pt.empty(),0)}static newFoundDocument(t,e,n,i){return new at(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new at(t,2,e,L.min(),L.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,L.min(),L.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e){this.position=t,this.inclusive=e}}function ta(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=N.comparator(N.fromName(a.referenceValue),e.key):n=re(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ea(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Lt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ah(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{}class z extends Iu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Rh(t,e,n):e==="array-contains"?new Sh(t,n):e==="in"?new Ru(t,n):e==="not-in"?new bh(t,n):e==="array-contains-any"?new xh(t,n):new z(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ph(t,n):new Vh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(re(e,this.value)):e!==null&&Ae(this.value)===Ae(e)&&this.matchesComparison(re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X extends Iu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new X(t,e)}matches(t){return He(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function He(r){return r.op==="and"}function Gi(r){return r.op==="or"}function hs(r){return Tu(r)&&He(r)}function Tu(r){for(const t of r.filters)if(t instanceof X)return!1;return!0}function zi(r){if(r instanceof z)return r.field.canonicalString()+r.op.toString()+$e(r.value);if(hs(r))return r.filters.map(t=>zi(t)).join(",");{const t=r.filters.map(e=>zi(e)).join(",");return`${r.op}(${t})`}}function Eu(r,t){return r instanceof z?function(n,i){return i instanceof z&&n.op===i.op&&n.field.isEqual(i.field)&&Lt(n.value,i.value)}(r,t):r instanceof X?function(n,i){return i instanceof X&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,u)=>o&&Eu(a,i.filters[u]),!0):!1}(r,t):void O()}function vu(r,t){const e=r.filters.concat(t);return X.create(e,r.op)}function wu(r){return r instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`}(r):r instanceof X?function(e){return e.op.toString()+" {"+e.getFilters().map(wu).join(" ,")+"}"}(r):"Filter"}class Rh extends z{constructor(t,e,n){super(t,e,n),this.key=N.fromName(n.referenceValue)}matches(t){const e=N.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ph extends z{constructor(t,e){super(t,"in",e),this.keys=Au("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Vh extends z{constructor(t,e){super(t,"not-in",e),this.keys=Au("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Au(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>N.fromName(n.referenceValue))}class Sh extends z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qn(e)&&zn(e.arrayValue,this.value)}}class Ru extends z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&zn(this.value.arrayValue,e)}}class bh extends z{constructor(t,e){super(t,"not-in",e)}matches(t){if(zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!zn(this.value.arrayValue,e)}}class xh extends z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>zn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e=null,n=[],i=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Qi(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Ch(r,t,e,n,i,o,a)}function Re(r){const t=B(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>zi(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>$e(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>$e(n)).join(",")),t.ue=e}return t.ue}function Hn(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ah(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Eu(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!ea(r.startAt,t.startAt)&&ea(r.endAt,t.endAt)}function Fr(r){return N.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Lr(r,t){return r.filters.filter(e=>e instanceof z&&e.field.isEqual(t))}function na(r,t,e){let n=Sr,i=!0;for(const o of Lr(r,t)){let a=Sr,u=!0;switch(o.op){case"<":case"<=":a=vh(o.value);break;case"==":case"in":case">=":a=o.value;break;case">":a=o.value,u=!1;break;case"!=":case"not-in":a=Sr}Yo({value:n,inclusive:i},{value:a,inclusive:u})<0&&(n=a,i=u)}if(e!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(t)){const a=e.position[o];Yo({value:n,inclusive:i},{value:a,inclusive:e.inclusive})<0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}function ra(r,t,e){let n=Yt,i=!0;for(const o of Lr(r,t)){let a=Yt,u=!0;switch(o.op){case">=":case">":a=wh(o.value),u=!1;break;case"==":case"in":case"<=":a=o.value;break;case"<":a=o.value,u=!1;break;case"!=":case"not-in":a=Yt}Zo({value:n,inclusive:i},{value:a,inclusive:u})>0&&(n=a,i=u)}if(e!==null){for(let o=0;o<r.orderBy.length;++o)if(r.orderBy[o].field.isEqual(t)){const a=e.position[o];Zo({value:n,inclusive:i},{value:a,inclusive:e.inclusive})>0&&(n=a,i=e.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e=null,n=[],i=[],o=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Dh(r,t,e,n,i,o,a,u){return new Jr(r,t,e,n,i,o,a,u)}function Xr(r){return new Jr(r)}function ia(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kh(r){return r.collectionGroup!==null}function Ln(r){const t=B(r);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Y(it.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Or(o,n))}),e.has(it.keyField().canonicalString())||t.ce.push(new Or(it.keyField(),n))}return t.ce}function kt(r){const t=B(r);return t.le||(t.le=Nh(t,Ln(r))),t.le}function Nh(r,t){if(r.limitType==="F")return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Or(i.field,o)});const e=r.endAt?new We(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new We(r.startAt.position,r.startAt.inclusive):null;return Qi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function $i(r,t,e){return new Jr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Yr(r,t){return Hn(kt(r),kt(t))&&r.limitType===t.limitType}function Pu(r){return`${Re(kt(r))}|lt:${r.limitType}`}function Be(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>wu(i)).join(", ")}]`),Wr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>$e(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>$e(i)).join(",")),`Target(${n})`}(kt(r))}; limitType=${r.limitType})`}function Jn(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):N.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of Ln(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,u,c){const d=ta(a,u,c);return a.inclusive?d<=0:d<0}(n.startAt,Ln(n),i)||n.endAt&&!function(a,u,c){const d=ta(a,u,c);return a.inclusive?d>=0:d>0}(n.endAt,Ln(n),i))}(r,t)}function Mh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Vu(r){return(t,e)=>{let n=!1;for(const i of Ln(r)){const o=Oh(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Oh(r,t,e){const n=r.field.isKeyField()?N.comparator(t.key,e.key):function(o,a,u){const c=a.data.field(o),d=u.data.field(o);return c!==null&&d!==null?re(c,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return mu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=new rt(N.comparator);function bt(){return Fh}const Su=new rt(N.comparator);function Dn(...r){let t=Su;for(const e of r)t=t.insert(e.key,e);return t}function bu(r){let t=Su;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ft(){return Un()}function xu(){return Un()}function Un(){return new oe(r=>r.toString(),(r,t)=>r.isEqual(t))}const Lh=new rt(N.comparator),Uh=new Y(N.comparator);function G(...r){let t=Uh;for(const e of r)t=t.add(e);return t}const Bh=new Y(j);function qh(){return Bh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kn(t)?"-0":t}}function Cu(r){return{integerValue:""+r}}function jh(r,t){return th(t)?Cu(t):ds(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this._=void 0}}function Kh(r,t,e){return r instanceof Je?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&us(o)&&(o=ls(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):r instanceof Xe?ku(r,t):r instanceof Ye?Nu(r,t):function(i,o){const a=Du(i,o),u=sa(a)+sa(i.Pe);return Ki(a)&&Ki(i.Pe)?Cu(u):ds(i.serializer,u)}(r,t)}function Gh(r,t,e){return r instanceof Xe?ku(r,t):r instanceof Ye?Nu(r,t):e}function Du(r,t){return r instanceof $n?function(n){return Ki(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Je extends Zr{}class Xe extends Zr{constructor(t){super(),this.elements=t}}function ku(r,t){const e=Mu(t);for(const n of r.elements)e.some(i=>Lt(i,n))||e.push(n);return{arrayValue:{values:e}}}class Ye extends Zr{constructor(t){super(),this.elements=t}}function Nu(r,t){let e=Mu(t);for(const n of r.elements)e=e.filter(i=>!Lt(i,n));return{arrayValue:{values:e}}}class $n extends Zr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function sa(r){return nt(r.integerValue||r.doubleValue)}function Mu(r){return Qn(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e){this.field=t,this.transform=e}}function zh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof Xe&&i instanceof Xe||n instanceof Ye&&i instanceof Ye?Qe(n.elements,i.elements,Lt):n instanceof $n&&i instanceof $n?Lt(n.Pe,i.Pe):n instanceof Je&&i instanceof Je}(r.transform,t.transform)}class Qh{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ti{}function Fu(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ei(r.key,Vt.none()):new on(r.key,r.data,Vt.none());{const e=r.data,n=Pt.empty();let i=new Y(it.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new ae(r.key,n,new Dt(i.toArray()),Vt.none())}}function $h(r,t,e){r instanceof on?function(i,o,a){const u=i.value.clone(),c=aa(i.fieldTransforms,o,a.transformResults);u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ae?function(i,o,a){if(!xr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=aa(i.fieldTransforms,o,a.transformResults),c=o.data;c.setAll(Lu(i)),c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Bn(r,t,e,n){return r instanceof on?function(o,a,u,c){if(!xr(o.precondition,a))return u;const d=o.value.clone(),m=ua(o.fieldTransforms,c,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ae?function(o,a,u,c){if(!xr(o.precondition,a))return u;const d=ua(o.fieldTransforms,c,a),m=a.data;return m.setAll(Lu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(r,t,e,n):function(o,a,u){return xr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Wh(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=Du(n.transform,i||null);o!=null&&(e===null&&(e=Pt.empty()),e.set(n.field,o))}return e||null}function oa(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Qe(n,i,(o,a)=>zh(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class on extends ti{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ae extends ti{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Lu(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function aa(r,t,e){const n=new Map;F(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,u=t.data.field(o.field);n.set(o.field,Gh(a,u,e[i]))}return n}function ua(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,Kh(o,a,t))}return n}class ei extends ti{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Uu extends ti{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&$h(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Bn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Bn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=xu();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(i.key)?null:u;const c=Fu(a,u);c!==null&&n.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&Qe(this.mutations,t.mutations,(e,n)=>oa(e,n))&&Qe(this.baseMutations,t.baseMutations,(e,n)=>oa(e,n))}}class ms{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){F(t.mutations.length===n.length);let i=function(){return Lh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new ms(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,Q;function Jh(r){switch(r){default:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Bu(r){if(r===void 0)return vt("GRPC error has no .code"),S.UNKNOWN;switch(r){case ut.OK:return S.OK;case ut.CANCELLED:return S.CANCELLED;case ut.UNKNOWN:return S.UNKNOWN;case ut.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ut.INTERNAL:return S.INTERNAL;case ut.UNAVAILABLE:return S.UNAVAILABLE;case ut.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ut.NOT_FOUND:return S.NOT_FOUND;case ut.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ut.ABORTED:return S.ABORTED;case ut.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ut.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(Q=ut||(ut={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new ye([4294967295,4294967295],0);function la(r){const t=Xh().encode(r),e=new Xa;return e.update(t),new Uint8Array(e.digest())}function ca(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ye([e,n],0),new ye([i,o],0)]}class ps{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new kn(`Invalid padding: ${e}`);if(n<0)throw new kn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new kn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new kn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ye.fromNumber(this.Ie)}Ee(t,e,n){let i=t.add(e.multiply(ye.fromNumber(n)));return i.compare(Yh)===1&&(i=new ye([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=la(t),[n,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);if(!this.de(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ps(o,i,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=la(t),[n,i]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(n,i,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Xn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ni(L.min(),i,new rt(j),bt(),G())}}class Xn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Xn(n,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e,n,i){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=i}}class qu{constructor(t,e){this.targetId=t,this.me=e}}class ju{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ha{constructor(){this.fe=0,this.ge=fa(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),n=G();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O()}}),new Xn(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=fa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,F(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zh{constructor(t){this.Le=t,this.Be=new Map,this.ke=bt(),this.qe=da(),this.Qe=new rt(j)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,n=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Fr(o))if(n===0){const a=new N(o.path);this.Ue(e,a,at.newNoDocument(a,L.min()))}else F(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),c=u?this.Xe(u,t,a):1;if(c!==0){this.je(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,u;try{a=ne(n).toUint8Array()}catch(c){if(c instanceof gu)return ve("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new ps(a,i,o)}catch(c){return ve(c instanceof kn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Fr(u.target)){const c=new N(u.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,at.newNoDocument(c,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let n=G();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const i=new ni(t,e,this.Qe,this.ke,n);return this.ke=bt(),this.qe=da(),this.Qe=new rt(j),i}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ha,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Y(j),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ha),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function da(){return new rt(N.comparator)}function fa(){return new rt(N.comparator)}const td=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ed=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nd=(()=>({and:"AND",or:"OR"}))();class rd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Wi(r,t){return r.useProto3Json||Wr(t)?t:{value:t}}function Ze(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ku(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function id(r,t){return Ze(r,t.toTimestamp())}function At(r){return F(!!r),L.fromTimestamp(function(e){const n=Gt(e);return new st(n.seconds,n.nanos)}(r))}function _s(r,t){return Hi(r,t).canonicalString()}function Hi(r,t){const e=function(i){return new J(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Gu(r){const t=J.fromString(r);return F(Zu(t)),t}function Ur(r,t){return _s(r.databaseId,t.path)}function Ie(r,t){const e=Gu(t);if(e.get(1)!==r.databaseId.projectId)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new N($u(e))}function zu(r,t){return _s(r.databaseId,t)}function Qu(r){const t=Gu(r);return t.length===4?J.emptyPath():$u(t)}function Ji(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $u(r){return F(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ma(r,t,e){return{name:Ur(r,t),fields:e.value.mapValue.fields}}function sd(r,t,e){const n=Ie(r,t.name),i=At(t.updateTime),o=t.createTime?At(t.createTime):L.min(),a=new Pt({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,i,o,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function od(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(F(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(F(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?S.UNKNOWN:Bu(d.code);return new M(m,d.message||"")}(a);e=new ju(n,i,o,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Ie(r,n.document.name),o=At(n.document.updateTime),a=n.document.createTime?At(n.document.createTime):L.min(),u=new Pt({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(i,o,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Cr(d,m,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Ie(r,n.document),o=n.readTime?At(n.readTime):L.min(),a=at.newNoDocument(i,o),u=n.removedTargetIds||[];e=new Cr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Ie(r,n.document),o=n.removedTargetIds||[];e=new Cr([],o,i,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new Hh(i,o),u=n.targetId;e=new qu(u,a)}}return e}function Br(r,t){let e;if(t instanceof on)e={update:ma(r,t.key,t.value)};else if(t instanceof ei)e={delete:Ur(r,t.key)};else if(t instanceof ae)e={update:ma(r,t.key,t.data),updateMask:dd(t.fieldMask)};else{if(!(t instanceof Uu))return O();e={verify:Ur(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const u=a.transform;if(u instanceof Je)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Xe)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ye)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof $n)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:id(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function Xi(r,t){const e=t.currentDocument?function(o){return o.updateTime!==void 0?Vt.updateTime(At(o.updateTime)):o.exists!==void 0?Vt.exists(o.exists):Vt.none()}(t.currentDocument):Vt.none(),n=t.updateTransforms?t.updateTransforms.map(i=>function(a,u){let c=null;if("setToServerValue"in u)F(u.setToServerValue==="REQUEST_TIME"),c=new Je;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];c=new Xe(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];c=new Ye(m)}else"increment"in u?c=new $n(a,u.increment):O();const d=it.fromServerFormat(u.fieldPath);return new Ou(d,c)}(r,i)):[];if(t.update){t.update.name;const i=Ie(r,t.update.name),o=new Pt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(c){const d=c.fieldPaths||[];return new Dt(d.map(m=>it.fromServerFormat(m)))}(t.updateMask);return new ae(i,o,a,e,n)}return new on(i,o,e,n)}if(t.delete){const i=Ie(r,t.delete);return new ei(i,e)}if(t.verify){const i=Ie(r,t.verify);return new Uu(i,e)}return O()}function ad(r,t){return r&&r.length>0?(F(t!==void 0),r.map(e=>function(i,o){let a=i.updateTime?At(i.updateTime):At(o);return a.isEqual(L.min())&&(a=At(o)),new Qh(a,i.transformResults||[])}(e,t))):[]}function Wu(r,t){return{documents:[zu(r,t.path)]}}function Hu(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=zu(r,i);const o=function(d){if(d.length!==0)return Yu(X.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(R){return{field:qe(R.field),direction:ld(R.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Wi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:i}}function Ju(r){let t=Qu(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){F(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(p){const R=Xu(p);return R instanceof X&&hs(R)?R.getFilters():[R]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(R=>function(D){return new Or(je(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let u=null;e.limit&&(u=function(p){let R;return R=typeof p=="object"?p.value:p,Wr(R)?null:R}(e.limit));let c=null;e.startAt&&(c=function(p){const R=!!p.before,V=p.values||[];return new We(V,R)}(e.startAt));let d=null;return e.endAt&&(d=function(p){const R=!p.before,V=p.values||[];return new We(V,R)}(e.endAt)),Dh(t,i,a,o,u,"F",c,d)}function ud(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Xu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=je(e.unaryFilter.field);return z.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=je(e.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=je(e.unaryFilter.field);return z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=je(e.unaryFilter.field);return z.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return z.create(je(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return X.create(e.compositeFilter.filters.map(n=>Xu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function ld(r){return td[r]}function cd(r){return ed[r]}function hd(r){return nd[r]}function qe(r){return{fieldPath:r.canonicalString()}}function je(r){return it.fromServerFormat(r.fieldPath)}function Yu(r){return r instanceof z?function(e){if(e.op==="=="){if(Xo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NAN"}};if(Jo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NAN"}};if(Jo(e.value))return{unaryFilter:{field:qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qe(e.field),op:cd(e.op),value:e.value}}}(r):r instanceof X?function(e){const n=e.getFilters().map(i=>Yu(i));return n.length===1?n[0]:{compositeFilter:{op:hd(e.op),filters:n}}}(r):O()}function dd(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zu(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,n,i,o=L.min(),a=L.min(),u=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this.ct=t}}function fd(r,t){let e;if(t.document)e=sd(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=N.fromSegments(t.noDocument.path),i=Ve(t.noDocument.readTime);e=at.newNoDocument(n,i),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=N.fromSegments(t.unknownDocument.path),i=Ve(t.unknownDocument.version);e=at.newUnknownDocument(n,i)}}return t.readTime&&e.setReadTime(function(i){const o=new st(i[0],i[1]);return L.fromTimestamp(o)}(t.readTime)),e}function ga(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:qr(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(o,a){return{name:Ur(o,a.key),fields:a.data.value.mapValue.fields,updateTime:Ze(o,a.version.toTimestamp()),createTime:Ze(o,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Pe(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:Pe(t.version)}}return n}function qr(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Pe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ve(r){const t=new st(r.seconds,r.nanoseconds);return L.fromTimestamp(t)}function ge(r,t){const e=(t.baseMutations||[]).map(o=>Xi(r.ct,o));for(let o=0;o<t.mutations.length-1;++o){const a=t.mutations[o];if(o+1<t.mutations.length&&t.mutations[o+1].transform!==void 0){const u=t.mutations[o+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(o+1,1),++o}}const n=t.mutations.map(o=>Xi(r.ct,o)),i=st.fromMillis(t.localWriteTimeMs);return new fs(t.batchId,i,e,n)}function Nn(r){const t=Ve(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Ve(r.lastLimboFreeSnapshotVersion):L.min();let n;return n=function(o){return o.documents!==void 0}(r.query)?function(o){return F(o.documents.length===1),kt(Xr(Qu(o.documents[0])))}(r.query):function(o){return kt(Ju(o))}(r.query),new Kt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function el(r,t){const e=Pe(t.snapshotVersion),n=Pe(t.lastLimboFreeSnapshotVersion);let i;i=Fr(t.target)?Wu(r.ct,t.target):Hu(r.ct,t.target)._t;const o=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Re(t.target),readTime:e,resumeToken:o,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function nl(r){const t=Ju({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$i(t,t.limit,"L"):t}function Mi(r,t){return new gs(t.largestBatchId,Xi(r.ct,t.overlayMutation))}function pa(r,t){const e=t.path.lastSegment();return[r,wt(t.path.popLast()),e]}function _a(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Pe(n.readTime),documentKey:wt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{getBundleMetadata(t,e){return ya(t).get(e).next(n=>{if(n)return function(o){return{id:o.bundleId,createTime:Ve(o.createTime),version:o.version}}(n)})}saveBundleMetadata(t,e){return ya(t).put(function(i){return{bundleId:i.id,createTime:Pe(At(i.createTime)),version:i.version}}(e))}getNamedQuery(t,e){return Ia(t).get(e).next(n=>{if(n)return function(o){return{name:o.name,query:nl(o.bundledQuery),readTime:Ve(o.readTime)}}(n)})}saveNamedQuery(t,e){return Ia(t).put(function(i){return{name:i.name,readTime:Pe(At(i.readTime)),bundledQuery:i.bundledQuery}}(e))}}function ya(r){return ct(r,"bundles")}function Ia(r){return ct(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new ri(t,n)}getOverlay(t,e){return Pn(t).get(pa(this.userId,e)).next(n=>n?Mi(this.serializer,n):null)}getOverlays(t,e){const n=Ft();return w.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){const i=[];return n.forEach((o,a)=>{const u=new gs(e,a);i.push(this.ht(t,u))}),w.waitFor(i)}removeOverlaysForBatchId(t,e,n){const i=new Set;e.forEach(a=>i.add(wt(a.getCollectionPath())));const o=[];return i.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);o.push(Pn(t).j("collectionPathOverlayIndex",u))}),w.waitFor(o)}getOverlaysForCollection(t,e,n){const i=Ft(),o=wt(e),a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,Number.POSITIVE_INFINITY],!0);return Pn(t).U("collectionPathOverlayIndex",a).next(u=>{for(const c of u){const d=Mi(this.serializer,c);i.set(d.getKey(),d)}return i})}getOverlaysForCollectionGroup(t,e,n,i){const o=Ft();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Pn(t).J({index:"collectionGroupOverlayIndex",range:u},(c,d,m)=>{const p=Mi(this.serializer,d);o.size()<i||p.largestBatchId===a?(o.set(p.getKey(),p),a=p.largestBatchId):m.done()}).next(()=>o)}ht(t,e){return Pn(t).put(function(i,o,a){const[u,c,d]=pa(o,a.mutation.key);return{userId:o,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Br(i.ct,a.mutation)}}(this.serializer,this.userId,e))}}function Pn(r){return ct(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{Pt(t){return ct(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next(e=>{const n=e==null?void 0:e.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(nt(t.integerValue));else if("doubleValue"in t){const n=nt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),Kn(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),typeof n=="string"&&(n=Gt(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(ne(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?pu(t)?this.dt(e,Number.MAX_SAFE_INTEGER):Hr(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):O()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const i of Object.keys(n))this.Vt(i,e),this.Tt(n[i],e)}wt(t,e){var n,i;const o=t.fields||{};this.dt(e,53);const a="value",u=((i=(n=o[a].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(e,15),e.At(nt(u)),this.Vt(a,e),this.Tt(o[a],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const i of n)this.Tt(i,e)}yt(t,e){this.dt(e,37),N.fromName(t).path.forEach(n=>{this.dt(e,60),this.Dt(n,e)})}dt(t,e){t.At(e)}ft(t){t.At(2)}}pe.vt=new pe;function pd(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function Ta(r){const t=64-function(n){let i=0;for(let o=0;o<8;++o){const a=pd(255&n[o]);if(i+=a,a!==8)break}return i}(r);return Math.ceil(t/8)}class _d{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=e.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=e.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(t){const e=this.qt(t),n=Ta(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=255&e[i]}Kt(t){const e=this.qt(t),n=Ta(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=e.length-n;i<e.length;++i)this.buffer[this.position++]=~(255&e[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=function(o){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,o,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let i=1;i<e.length;++i)e[i]^=n?255:0;return e}Ft(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class yd{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class Id{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class Vn{constructor(){this.jt=new _d,this.Ht=new yd(this.jt),this.Jt=new Id(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return t===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e,n,i){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=i}Zt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new _e(this.indexId,this.documentKey,this.arrayValue,n)}}function Ht(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Ea(r.arrayValue,t.arrayValue),e!==0?e:(e=Ea(r.directionalValue,t.directionalValue),e!==0?e:N.comparator(r.documentKey,t.documentKey)))}function Ea(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t){this.Xt=new Y((e,n)=>it.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(t){if(F(t.collectionGroup===this.collectionId),this.nn)return!1;const e=Bi(t);if(e!==void 0&&!this.sn(e))return!1;const n=fe(t);let i=new Set,o=0,a=0;for(;o<n.length&&this.sn(n[o]);++o)i=i.add(n[o].fieldPath.canonicalString());if(o===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!i.has(u.field.canonicalString())){const c=n[o];if(!this.on(u,c)||!this._n(this.en[a++],c))return!1}++o}for(;o<n.length;++o){const u=n[o];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let t=new Y(it.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Pr(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Pr(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Pr(n.field,n.dir==="asc"?0:1)));return new Mr(Mr.UNKNOWN_ID,this.collectionId,e,jn.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(r){var t,e;if(F(r instanceof z||r instanceof X),r instanceof z){if(r instanceof Ru){const i=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(o=>z.create(r.field,"==",o)))||[];return X.create(i,"or")}return r}const n=r.filters.map(i=>rl(i));return X.create(n,r.op)}function Td(r){if(r.getFilters().length===0)return[];const t=ts(rl(r));return F(il(t)),Yi(t)||Zi(t)?[t]:t.getFilters()}function Yi(r){return r instanceof z}function Zi(r){return r instanceof X&&hs(r)}function il(r){return Yi(r)||Zi(r)||function(e){if(e instanceof X&&Gi(e)){for(const n of e.getFilters())if(!Yi(n)&&!Zi(n))return!1;return!0}return!1}(r)}function ts(r){if(F(r instanceof z||r instanceof X),r instanceof z)return r;if(r.filters.length===1)return ts(r.filters[0]);const t=r.filters.map(n=>ts(n));let e=X.create(t,r.op);return e=jr(e),il(e)?e:(F(e instanceof X),F(He(e)),F(e.filters.length>1),e.filters.reduce((n,i)=>ys(n,i)))}function ys(r,t){let e;return F(r instanceof z||r instanceof X),F(t instanceof z||t instanceof X),e=r instanceof z?t instanceof z?function(i,o){return X.create([i,o],"and")}(r,t):wa(r,t):t instanceof z?wa(t,r):function(i,o){if(F(i.filters.length>0&&o.filters.length>0),He(i)&&He(o))return vu(i,o.getFilters());const a=Gi(i)?i:o,u=Gi(i)?o:i,c=a.filters.map(d=>ys(d,u));return X.create(c,"or")}(r,t),jr(e)}function wa(r,t){if(He(t))return vu(t,r.getFilters());{const e=t.filters.map(n=>ys(r,n));return X.create(e,"or")}}function jr(r){if(F(r instanceof z||r instanceof X),r instanceof z)return r;const t=r.getFilters();if(t.length===1)return jr(t[0]);if(Tu(r))return r;const e=t.map(i=>jr(i)),n=[];return e.forEach(i=>{i instanceof z?n.push(i):i instanceof X&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:X.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.un=new Is}addToCollectionParentIndex(t,e){return this.un.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(xt.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Is{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Y(J.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Y(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Uint8Array(0);class vd{constructor(t,e){this.databaseId=e,this.cn=new Is,this.ln=new oe(n=>Re(n),(n,i)=>Hn(n,i)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.cn.add(e)});const o={collectionId:n,parent:wt(i)};return Aa(t).put(o)}return w.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[su(e),""],!1,!0);return Aa(t).U(i).next(o=>{for(const a of o){if(a.collectionId!==e)break;n.push(Ot(a.parent))}return n})}addFieldIndex(t,e){const n=Sn(t),i=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(c=>[c.fieldPath.canonicalString(),c.kind])}}(e);delete i.indexId;const o=n.add(i);if(e.indexState){const a=Fe(t);return o.next(u=>{a.put(_a(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return o.next()}deleteFieldIndex(t,e){const n=Sn(t),i=Fe(t),o=Oe(t);return n.delete(e.indexId).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>o.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=Sn(t),n=Oe(t),i=Fe(t);return e.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(t,e){return w.forEach(this.hn(e),n=>this.getIndexType(t,n).next(i=>{if(i===0||i===1){const o=new va(n).an();if(o!=null)return this.addFieldIndex(t,o)}}))}getDocumentsMatchingTarget(t,e){const n=Oe(t);let i=!0;const o=new Map;return w.forEach(this.hn(e),a=>this.Pn(t,a).next(u=>{i&&(i=!!u),o.set(a,u)})).next(()=>{if(i){let a=G();const u=[];return w.forEach(o,(c,d)=>{b("IndexedDbIndexManager",`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(c)} to execute ${Re(e)}`);const m=function(U,H){const tt=Bi(H);if(tt===void 0)return null;for(const $ of Lr(U,tt.fieldPath))switch($.op){case"array-contains-any":return $.value.arrayValue.values||[];case"array-contains":return[$.value]}return null}(d,c),p=function(U,H){const tt=new Map;for(const $ of fe(H))for(const I of Lr(U,$.fieldPath))switch(I.op){case"==":case"in":tt.set($.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return tt.set($.fieldPath.canonicalString(),I.value),Array.from(tt.values())}return null}(d,c),R=function(U,H){const tt=[];let $=!0;for(const I of fe(H)){const g=I.kind===0?na(U,I.fieldPath,U.startAt):ra(U,I.fieldPath,U.startAt);tt.push(g.value),$&&($=g.inclusive)}return new We(tt,$)}(d,c),V=function(U,H){const tt=[];let $=!0;for(const I of fe(H)){const g=I.kind===0?ra(U,I.fieldPath,U.endAt):na(U,I.fieldPath,U.endAt);tt.push(g.value),$&&($=g.inclusive)}return new We(tt,$)}(d,c),D=this.In(c,d,R),k=this.In(c,d,V),x=this.Tn(c,d,p),K=this.En(c.indexId,m,D,R.inclusive,k,V.inclusive,x);return w.forEach(K,q=>n.G(q,e.limit).next(U=>{U.forEach(H=>{const tt=N.fromSegments(H.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))})}))}).next(()=>u)}return w.resolve(null)})}hn(t){let e=this.ln.get(t);return e||(t.filters.length===0?e=[t]:e=Td(X.create(t.filters,"and")).map(n=>Qi(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.ln.set(t,e),e)}En(t,e,n,i,o,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,o.length),d=c/(e!=null?e.length:1),m=[];for(let p=0;p<c;++p){const R=e?this.dn(e[p/d]):Er,V=this.An(t,R,n[p%d],i),D=this.Rn(t,R,o[p%d],a),k=u.map(x=>this.An(t,R,x,!0));m.push(...this.createRange(V,D,k))}return m}An(t,e,n,i){const o=new _e(t,N.empty(),e,n);return i?o:o.Zt()}Rn(t,e,n,i){const o=new _e(t,N.empty(),e,n);return i?o.Zt():o}Pn(t,e){const n=new va(e),i=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,i).next(o=>{let a=null;for(const u of o)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const i=this.hn(e);return w.forEach(i,o=>this.Pn(t,o).next(a=>{a?n!==0&&a.fields.length<function(c){let d=new Y(it.comparator),m=!1;for(const p of c.filters)for(const R of p.getFlattenedFilters())R.field.isKeyField()||(R.op==="array-contains"||R.op==="array-contains-any"?m=!0:d=d.add(R.field));for(const p of c.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)}(o)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&i.length>1&&n===2?1:n)}Vn(t,e){const n=new Vn;for(const i of fe(t)){const o=e.data.field(i.fieldPath);if(o==null)return null;const a=n.Yt(i.kind);pe.vt.It(o,a)}return n.zt()}dn(t){const e=new Vn;return pe.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new Vn;return pe.vt.It(cs(this.databaseId,e),n.Yt(function(o){const a=fe(o);return a.length===0?0:a[a.length-1].kind}(t))),n.zt()}Tn(t,e,n){if(n===null)return[];let i=[];i.push(new Vn);let o=0;for(const a of fe(t)){const u=n[o++];for(const c of i)if(this.fn(e,a.fieldPath)&&Qn(u))i=this.gn(i,a,u);else{const d=c.Yt(a.kind);pe.vt.It(u,d)}}return this.pn(i)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const i=[...t],o=[];for(const a of n.arrayValue.values||[])for(const u of i){const c=new Vn;c.seed(u.zt()),pe.vt.It(a,c.Yt(e.kind)),o.push(c)}return o}fn(t,e){return!!t.filters.find(n=>n instanceof z&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=Sn(t),i=Fe(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(o=>{const a=[];return w.forEach(o,u=>i.get([u.indexId,this.uid]).next(c=>{a.push(function(m,p){const R=p?new jn(p.sequenceNumber,new xt(Ve(p.readTime),new N(Ot(p.documentKey)),p.largestBatchId)):jn.empty(),V=m.fields.map(([D,k])=>new Pr(it.fromServerFormat(D),k));return new Mr(m.indexId,m.collectionGroup,V,R)}(u,c))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,i)=>{const o=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return o!==0?o:j(n.collectionGroup,i.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const i=Sn(t),o=Fe(t);return this.yn(t).next(a=>i.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,c=>o.put(_a(c.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(i,o)=>{const a=n.get(i.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,i.collectionGroup)).next(u=>(n.set(i.collectionGroup,u),w.forEach(u,c=>this.wn(t,i,c).next(d=>{const m=this.Sn(o,c);return d.isEqual(m)?w.resolve():this.bn(t,o,c,d,m)}))))})}Dn(t,e,n,i){return Oe(t).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,i){return Oe(t).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const i=Oe(t);let o=new Y(Ht);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},(a,u)=>{o=o.add(new _e(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>o)}Sn(t,e){let n=new Y(Ht);const i=this.Vn(e,t);if(i==null)return n;const o=Bi(e);if(o!=null){const a=t.data.field(o.fieldPath);if(Qn(a))for(const u of a.arrayValue.values||[])n=n.add(new _e(e.indexId,t.key,this.dn(u),i))}else n=n.add(new _e(e.indexId,t.key,Er,i));return n}bn(t,e,n,i,o){b("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(c,d,m,p,R){const V=c.getIterator(),D=d.getIterator();let k=Me(V),x=Me(D);for(;k||x;){let K=!1,q=!1;if(k&&x){const U=m(k,x);U<0?q=!0:U>0&&(K=!0)}else k!=null?q=!0:K=!0;K?(p(x),x=Me(D)):q?(R(k),k=Me(V)):(k=Me(V),x=Me(D))}}(i,o,Ht,u=>{a.push(this.Dn(t,e,n,u))},u=>{a.push(this.vn(t,e,n,u))}),w.waitFor(a)}yn(t){let e=1;return Fe(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,o)=>{o.done(),e=i.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>Ht(a,u)).filter((a,u,c)=>!u||Ht(a,c[u-1])!==0);const i=[];i.push(t);for(const a of n){const u=Ht(a,t),c=Ht(a,e);if(u===0)i[0]=t.Zt();else if(u>0&&c<0)i.push(a),i.push(a.Zt());else if(c>0)break}i.push(e);const o=[];for(let a=0;a<i.length;a+=2){if(this.Cn(i[a],i[a+1]))return[];const u=[i[a].indexId,this.uid,i[a].arrayValue,i[a].directionalValue,Er,[]],c=[i[a+1].indexId,this.uid,i[a+1].arrayValue,i[a+1].directionalValue,Er,[]];o.push(IDBKeyRange.bound(u,c))}return o}Cn(t,e){return Ht(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Ra)}getMinOffset(t,e){return w.mapArray(this.hn(e),n=>this.Pn(t,n).next(i=>i||O())).next(Ra)}}function Aa(r){return ct(r,"collectionParents")}function Oe(r){return ct(r,"indexEntries")}function Sn(r){return ct(r,"indexConfiguration")}function Fe(r){return ct(r,"indexState")}function Ra(r){F(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;ss(i,t)<0&&(t=i),e<i.largestBatchId&&(e=i.largestBatchId)}return new xt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Rt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Rt(t,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(r,t,e){const n=r.store("mutations"),i=r.store("documentMutations"),o=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.J({range:a},(m,p,R)=>(u++,R.delete()));o.push(c.next(()=>{F(u===1)}));const d=[];for(const m of e.mutations){const p=cu(t,m.key.path,e.batchId);o.push(i.delete(p)),d.push(m.key)}return w.waitFor(o).next(()=>d)}function Kr(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(41943040,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);class ii{constructor(t,e,n,i){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(t,e,n,i){F(t.uid!=="");const o=t.isAuthenticated()?t.uid:"";return new ii(o,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).J({index:"userMutationsIndex",range:n},(i,o,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const o=Ke(t),a=Jt(t);return a.add({}).next(u=>{F(typeof u=="number");const c=new fs(u,e,n,i),d=function(V,D,k){const x=k.baseMutations.map(q=>Br(V.ct,q)),K=k.mutations.map(q=>Br(V.ct,q));return{userId:D,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:x,mutations:K}}(this.serializer,this.userId,c),m=[];let p=new Y((R,V)=>j(R.canonicalString(),V.canonicalString()));for(const R of i){const V=cu(this.userId,R.key.path,u);p=p.add(R.key.path.popLast()),m.push(a.put(d)),m.push(o.put(V,nh))}return p.forEach(R=>{m.push(this.indexManager.addToCollectionParentIndex(t,R))}),t.addOnCommittedListener(()=>{this.Fn[u]=c.keys()}),w.waitFor(m).next(()=>c)})}lookupMutationBatch(t,e){return Jt(t).get(e).next(n=>n?(F(n.userId===this.userId),ge(this.serializer,n)):null)}Mn(t,e){return this.Fn[e]?w.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const i=n.keys();return this.Fn[e]=i,i}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let o=null;return Jt(t).J({index:"userMutationsIndex",range:i},(a,u,c)=>{u.userId===this.userId&&(F(u.batchId>=n),o=ge(this.serializer,u)),c.done()}).next(()=>o)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Jt(t).J({index:"userMutationsIndex",range:e,reverse:!0},(i,o,a)=>{n=o.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Jt(t).U("userMutationsIndex",e).next(n=>n.map(i=>ge(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Vr(this.userId,e.path),i=IDBKeyRange.lowerBound(n),o=[];return Ke(t).J({range:i},(a,u,c)=>{const[d,m,p]=a,R=Ot(m);if(d===this.userId&&e.path.isEqual(R))return Jt(t).get(p).next(V=>{if(!V)throw O();F(V.userId===this.userId),o.push(ge(this.serializer,V))});c.done()}).next(()=>o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(j);const i=[];return e.forEach(o=>{const a=Vr(this.userId,o.path),u=IDBKeyRange.lowerBound(a),c=Ke(t).J({range:u},(d,m,p)=>{const[R,V,D]=d,k=Ot(V);R===this.userId&&o.path.isEqual(k)?n=n.add(D):p.done()});i.push(c)}),w.waitFor(i).next(()=>this.xn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,o=Vr(this.userId,n),a=IDBKeyRange.lowerBound(o);let u=new Y(j);return Ke(t).J({range:a},(c,d,m)=>{const[p,R,V]=c,D=Ot(R);p===this.userId&&n.isPrefixOf(D)?D.length===i&&(u=u.add(V)):m.done()}).next(()=>this.xn(t,u))}xn(t,e){const n=[],i=[];return e.forEach(o=>{i.push(Jt(t).get(o).next(a=>{if(a===null)throw O();F(a.userId===this.userId),n.push(ge(this.serializer,a))}))}),w.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return sl(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.On(e.batchId)}),w.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(t,i))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),i=[];return Ke(t).J({range:n},(o,a,u)=>{if(o[0]===this.userId){const c=Ot(o[1]);i.push(c)}else u.done()}).next(()=>{F(i.length===0)})})}containsKey(t,e){return ol(t,this.userId,e)}Nn(t){return al(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ol(r,t,e){const n=Vr(t,e.path),i=n[1],o=IDBKeyRange.lowerBound(n);let a=!1;return Ke(r).J({range:o,H:!0},(u,c,d)=>{const[m,p,R]=u;m===t&&p===i&&(a=!0),d.done()}).next(()=>a)}function Jt(r){return ct(r,"mutations")}function Ke(r){return ct(r,"documentMutations")}function al(r){return ct(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Se(0)}static kn(){return new Se(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next(e=>{const n=new Se(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.qn(t).next(e=>L.fromTimestamp(new st(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.qn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.qn(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.Qn(t,i)))}addTargetData(t,e){return this.Kn(t,e).next(()=>this.qn(t).next(n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>Le(t).delete(e.targetId)).next(()=>this.qn(t)).next(n=>(F(n.targetCount>0),n.targetCount-=1,this.Qn(t,n)))}removeTargets(t,e,n){let i=0;const o=[];return Le(t).J((a,u)=>{const c=Nn(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(i++,o.push(this.removeTargetData(t,c)))}).next(()=>w.waitFor(o)).next(()=>i)}forEachTarget(t,e){return Le(t).J((n,i)=>{const o=Nn(i);e(o)})}qn(t){return Va(t).get("targetGlobalKey").next(e=>(F(e!==null),e))}Qn(t,e){return Va(t).put("targetGlobalKey",e)}Kn(t,e){return Le(t).put(el(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Re(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let o=null;return Le(t).J({range:i,index:"queryTargetsIndex"},(a,u,c)=>{const d=Nn(u);Hn(e,d.target)&&(o=d,c.done())}).next(()=>o)}addMatchingKeys(t,e,n){const i=[],o=Xt(t);return e.forEach(a=>{const u=wt(a.path);i.push(o.put({targetId:n,path:u})),i.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(i)}removeMatchingKeys(t,e,n){const i=Xt(t);return w.forEach(e,o=>{const a=wt(o.path);return w.waitFor([i.delete([n,a]),this.referenceDelegate.removeReference(t,n,o)])})}removeMatchingKeysForTargetId(t,e){const n=Xt(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=Xt(t);let o=G();return i.J({range:n,H:!0},(a,u,c)=>{const d=Ot(a[1]),m=new N(d);o=o.add(m)}).next(()=>o)}containsKey(t,e){const n=wt(e.path),i=IDBKeyRange.bound([n],[su(n)],!1,!0);let o=0;return Xt(t).J({index:"documentTargetsIndex",H:!0,range:i},([a,u],c,d)=>{a!==0&&(o++,d.done())}).next(()=>o>0)}ot(t,e){return Le(t).get(e).next(n=>n?Nn(n):null)}}function Le(r){return ct(r,"targets")}function Va(r){return ct(r,"targetGlobal")}function Xt(r){return ct(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa([r,t],[e,n]){const i=j(r,e);return i===0?j(t,n):i}class Ad{constructor(t){this.Un=t,this.buffer=new Y(Sa),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Sa(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Rd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){b("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){se(e)?b("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await be(e)}await this.Hn(3e5)})}}class Pd{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ct.oe);const n=new Ad(e);return this.Jn.forEachTarget(t,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(t,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Pa)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pa):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,i,o,a,u,c,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(t,i))).next(p=>(n=p,u=Date.now(),this.removeTargets(t,n,e))).next(p=>(o=p,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(p=>(d=Date.now(),Ue()<=jt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:p})))}}function Vd(r,t){return new Pd(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e){this.db=t,this.garbageCollector=Vd(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,(n,i)=>e(i))}addReference(t,e,n){return vr(t,n)}removeReference(t,e,n){return vr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return vr(t,e)}nr(t,e){return function(i,o){let a=!1;return al(i).Y(u=>ol(i,u,o).next(c=>(c&&(a=!0),w.resolve(!c)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let o=0;return this.tr(t,(a,u)=>{if(u<=e){const c=this.nr(t,a).next(d=>{if(!d)return o++,n.getEntry(t,a).next(()=>(n.removeEntry(a,L.min()),Xt(t).delete(function(p){return[0,wt(p.path)]}(a))))});i.push(c)}}).next(()=>w.waitFor(i)).next(()=>n.apply(t)).next(()=>o)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return vr(t,e)}tr(t,e){const n=Xt(t);let i,o=Ct.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:c,sequenceNumber:d})=>{a===0?(o!==Ct.oe&&e(new N(Ot(i)),o),o=d,i=c):o=Ct.oe}).next(()=>{o!==Ct.oe&&e(new N(Ot(i)),o)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function vr(r,t){return Xt(r).put(function(n,i){return{targetId:0,path:wt(n.path),sequenceNumber:i}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.changes=new oe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return de(t).put(n)}removeEntry(t,e,n){return de(t).delete(function(o,a){const u=o.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],qr(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.rr(t,n)))}getEntry(t,e){let n=at.newInvalidDocument(e);return de(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(bn(e))},(i,o)=>{n=this.ir(e,o)}).next(()=>n)}sr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return de(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(bn(e))},(i,o)=>{n={document:this.ir(e,o),size:Kr(o)}}).next(()=>n)}getEntries(t,e){let n=bt();return this._r(t,e,(i,o)=>{const a=this.ir(i,o);n=n.insert(i,a)}).next(()=>n)}ar(t,e){let n=bt(),i=new rt(N.comparator);return this._r(t,e,(o,a)=>{const u=this.ir(o,a);n=n.insert(o,u),i=i.insert(o,Kr(a))}).next(()=>({documents:n,ur:i}))}_r(t,e,n){if(e.isEmpty())return w.resolve();let i=new Y(Ca);e.forEach(c=>i=i.add(c));const o=IDBKeyRange.bound(bn(i.first()),bn(i.last())),a=i.getIterator();let u=a.getNext();return de(t).J({index:"documentKeyIndex",range:o},(c,d,m)=>{const p=N.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Ca(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.$(bn(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,i,o){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),qr(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return de(t).U(IDBKeyRange.bound(u,c,!0)).next(d=>{o==null||o.incrementDocumentReadCount(d.length);let m=bt();for(const p of d){const R=this.ir(N.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);R.isFoundDocument()&&(Jn(e,R)||i.has(R.key))&&(m=m.insert(R.key,R))}return m})}getAllFromCollectionGroup(t,e,n,i){let o=bt();const a=xa(e,n),u=xa(e,xt.max());return de(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(c,d,m)=>{const p=this.ir(N.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);o=o.insert(p.key,p),o.size===i&&m.done()}).next(()=>o)}newChangeBuffer(t){return new xd(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return ba(t).get("remoteDocumentGlobalKey").next(e=>(F(!!e),e))}rr(t,e){return ba(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const n=fd(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(L.min())))return n}return at.newInvalidDocument(t)}}function ll(r){return new bd(r)}class xd extends ul{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new oe(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(t){const e=[];let n=0,i=new Y((o,a)=>j(o.canonicalString(),a.canonicalString()));return this.changes.forEach((o,a)=>{const u=this.lr.get(o);if(e.push(this.cr.removeEntry(t,o,u.readTime)),a.isValidDocument()){const c=ga(this.cr.serializer,a);i=i.add(o.path.popLast());const d=Kr(c);n+=d-u.size,e.push(this.cr.addEntry(t,o,c))}else if(n-=u.size,this.trackRemovals){const c=ga(this.cr.serializer,a.convertToNoDocument(L.min()));e.push(this.cr.addEntry(t,o,c))}}),i.forEach(o=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,o))}),e.push(this.cr.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next(n=>(this.lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.cr.ar(t,e).next(({documents:n,ur:i})=>(i.forEach((o,a)=>{this.lr.set(o,{size:a,readTime:n.get(o).readTime})}),n))}}function ba(r){return ct(r,"remoteDocumentGlobal")}function de(r){return ct(r,"remoteDocumentsV14")}function bn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function xa(r,t){const e=t.documentKey.path.toArray();return[r,qr(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Ca(r,t){const e=r.path.toArray(),n=t.path.toArray();let i=0;for(let o=0;o<e.length-2&&o<n.length-2;++o)if(i=j(e[o],n[o]),i)return i;return i=j(e.length,n.length),i||(i=j(e[e.length-2],n[n.length-2]),i||j(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&Bn(n.mutation,i,Dt.empty(),st.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,G()).next(()=>n))}getLocalViewOfDocuments(t,e,n=G()){const i=Ft();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=Dn();return o.forEach((u,c)=>{a=a.insert(u,c.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=Ft();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,G()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,i){let o=bt();const a=Un(),u=function(){return Un()}();return e.forEach((c,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ae)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Bn(m.mutation,d,m.mutation.getFieldMask(),st.now())):a.set(d.key,Dt.empty())}),this.recalculateAndSaveOverlays(t,o).next(c=>(c.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var p;return u.set(d,new Cd(m,(p=a.get(d))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(t,e){const n=Un();let i=new rt((a,u)=>a-u),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(c=>{const d=e.get(c);if(d===null)return;let m=n.get(c)||Dt.empty();m=u.applyToLocalView(d,m),n.set(c,m);const p=(i.get(u.batchId)||G()).add(c);i=i.insert(u.batchId,p)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,m=c.value,p=xu();m.forEach(R=>{if(!o.has(R)){const V=Fu(e.get(R),n.get(R));V!==null&&p.set(R,V),o=o.add(R)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return N.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):w.resolve(Ft());let u=-1,c=o;return a.next(d=>w.forEach(d,(m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),o.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{c=c.insert(m,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,c,d,G())).next(m=>({batchId:u,changes:bu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new N(e)).next(n=>{let i=Dn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=Dn();return this.indexManager.getCollectionParents(t,o).next(u=>w.forEach(u,c=>{const d=function(p,R){return new Jr(R,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,c.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((p,R)=>{a=a.insert(p,R)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((c,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))});let u=Dn();return a.forEach((c,d)=>{const m=o.get(c);m!==void 0&&Bn(m.mutation,d,Dt.empty(),st.now()),Jn(e,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return w.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(i){return{name:i.name,query:nl(i.bundledQuery),readTime:At(i.readTime)}}(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.overlays=new rt(N.comparator),this.Ir=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ft();return w.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.ht(t,e,o)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const i=Ft(),o=e.length+1,a=new N(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&c.largestBatchId>n&&i.set(c.getKey(),c)}return w.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=Ft(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Ft(),c=o.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=i)););return w.resolve(u)}ht(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new gs(e,n));let o=this.Ir.get(e);o===void 0&&(o=G(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.Tr=new Y(ht.Er),this.dr=new Y(ht.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new ht(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new ht(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new N(new J([])),n=new ht(e,t),i=new ht(e,t+1),o=[];return this.dr.forEachInRange([n,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new N(new J([])),n=new ht(e,t),i=new ht(e,t+1);let o=G();return this.dr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ht(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ht{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return N.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||N.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new Y(ht.Er)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fs(o,e,n,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new ht(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.vr(n),o=i<0?0:i;return w.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ht(e,0),i=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],a=>{const u=this.Dr(a.wr);o.push(u)}),w.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Y(j);return e.forEach(i=>{const o=new ht(i,0),a=new ht(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{n=n.add(u.wr)})}),w.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;N.isDocumentKey(o)||(o=o.child(""));const a=new ht(new N(o),0);let u=new Y(j);return this.br.forEachWhile(c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.wr)),!0)},a),w.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach(n=>{const i=this.Dr(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){F(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return w.forEach(e.mutations,i=>{const o=new ht(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new ht(e,0),i=this.br.firstAfterOrEqual(n);return w.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.Mr=t,this.docs=function(){return new rt(N.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=bt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():at.newInvalidDocument(i))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=bt();const a=e.path,u=new N(a.child("")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ss(ou(m),n)<=0||(i.has(m.key)||Jn(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return w.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O()}Or(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Fd(this)}getSize(t){return w.resolve(this.size)}}class Fd extends ul{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.cr.addEntry(t,i)):this.cr.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.persistence=t,this.Nr=new oe(e=>Re(e),Hn),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ts,this.targetCount=0,this.kr=Se.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,i)=>e(i)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),w.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Se(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.Kn(e),w.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),w.waitFor(o).next(()=>i)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),w.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Ct(0),this.Kr=!1,this.Kr=!0,this.$r=new Nd,this.referenceDelegate=t(this),this.Ur=new Ld(this),this.indexManager=new Ed,this.remoteDocumentCache=function(i){return new Od(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new tl(e),this.Gr=new Dd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new kd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Md(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const i=new Ud(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(t,e){return w.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Ud extends uu{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Jr=new Ts,this.Yr=null}static Zr(t){return new si(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),w.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Xr,n=>{const i=N.fromPath(n);return this.ei(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return w.or([()=>w.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.serializer=t}O(t,e,n,i){const o=new $r("createOrUpgrade",e);n<1&&i>=1&&(function(c){c.createObjectStore("owner")}(t),function(c){c.createObjectStore("mutationQueues",{keyPath:"userId"}),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zo,{unique:!0}),c.createObjectStore("documentMutations")}(t),Da(t),function(c){c.createObjectStore("remoteDocuments")}(t));let a=w.resolve();return n<3&&i>=3&&(n!==0&&(function(c){c.deleteObjectStore("targetDocuments"),c.deleteObjectStore("targets"),c.deleteObjectStore("targetGlobal")}(t),Da(t)),a=a.next(()=>function(c){const d=c.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:L.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(o))),n<4&&i>=4&&(n!==0&&(a=a.next(()=>function(c,d){return d.store("mutations").U().next(m=>{c.deleteObjectStore("mutations"),c.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zo,{unique:!0});const p=d.store("mutations"),R=m.map(V=>p.put(V));return w.waitFor(R)})}(t,o))),a=a.next(()=>{(function(c){c.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&i>=5&&(a=a.next(()=>this.ni(o))),n<6&&i>=6&&(a=a.next(()=>(function(c){c.createObjectStore("remoteDocumentGlobal")}(t),this.ri(o)))),n<7&&i>=7&&(a=a.next(()=>this.ii(o))),n<8&&i>=8&&(a=a.next(()=>this.si(t,o))),n<9&&i>=9&&(a=a.next(()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&i>=10&&(a=a.next(()=>this.oi(o))),n<11&&i>=11&&(a=a.next(()=>{(function(c){c.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(c){c.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&i>=12&&(a=a.next(()=>{(function(c){const d=c.createObjectStore("documentOverlays",{keyPath:mh});d.createIndex("collectionPathOverlayIndex",gh,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",ph,{unique:!1})})(t)})),n<13&&i>=13&&(a=a.next(()=>function(c){const d=c.createObjectStore("remoteDocumentsV14",{keyPath:rh});d.createIndex("documentKeyIndex",ih),d.createIndex("collectionGroupIndex",sh)}(t)).next(()=>this._i(t,o)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(a=a.next(()=>this.ai(t,o))),n<15&&i>=15&&(a=a.next(()=>function(c){c.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),c.createObjectStore("indexState",{keyPath:ch}).createIndex("sequenceNumberIndex",hh,{unique:!1}),c.createObjectStore("indexEntries",{keyPath:dh}).createIndex("documentKeyIndex",fh,{unique:!1})}(t))),n<16&&i>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),n<17&&i>=17&&(a=a.next(()=>{(function(c){c.createObjectStore("globals",{keyPath:"name"})})(t)})),a}ri(t){let e=0;return t.store("remoteDocuments").J((n,i)=>{e+=Kr(i)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(i=>w.forEach(i,o=>{const a=IDBKeyRange.bound([o.userId,-1],[o.userId,o.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>w.forEach(u,c=>{F(c.userId===o.userId);const d=ge(this.serializer,c);return sl(t,o.userId,d).next(()=>{})}))}))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(i=>{const o=[];return n.J((a,u)=>{const c=new J(a),d=function(p){return[0,wt(p)]}(c);o.push(e.get(d).next(m=>m?w.resolve():(p=>e.put({targetId:0,path:wt(p),sequenceNumber:i.highestListenSequenceNumber}))(c)))}).next(()=>w.waitFor(o))})}si(t,e){t.createObjectStore("collectionParents",{keyPath:lh});const n=e.store("collectionParents"),i=new Is,o=a=>{if(i.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:wt(c)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const c=new J(a);return o(c.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,c],d)=>{const m=Ot(u);return o(m.popLast())}))}oi(t){const e=t.store("targets");return e.J((n,i)=>{const o=Nn(i),a=el(this.serializer,o);return e.put(a)})}_i(t,e){const n=e.store("remoteDocuments"),i=[];return n.J((o,a)=>{const u=e.store("remoteDocumentsV14"),c=function(p){return p.document?new N(J.fromString(p.document.name).popFirst(5)):p.noDocument?N.fromSegments(p.noDocument.path):p.unknownDocument?N.fromSegments(p.unknownDocument.path):O()}(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};i.push(u.put(d))}).next(()=>w.waitFor(i))}ai(t,e){const n=e.store("mutations"),i=ll(this.serializer),o=new hl(si.Zr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(c=>{var d;let m=(d=u.get(c.userId))!==null&&d!==void 0?d:G();ge(this.serializer,c).keys().forEach(p=>m=m.add(p)),u.set(c.userId,m)}),w.forEach(u,(c,d)=>{const m=new ft(d),p=ri.lt(this.serializer,m),R=o.getIndexManager(m),V=ii.lt(m,this.serializer,R,o.referenceDelegate);return new cl(i,V,p,R).recalculateAndSaveOverlaysForDocumentKeys(new qi(e,Ct.oe),c).next()})})}}function Da(r){r.createObjectStore("targetDocuments",{keyPath:ah}).createIndex("documentTargetsIndex",uh,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",oh,{unique:!0}),r.createObjectStore("targetGlobal")}const Oi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Es{constructor(t,e,n,i,o,a,u,c,d,m,p=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=o,this.window=a,this.document=u,this.ci=d,this.li=m,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=R=>Promise.resolve(),!Es.D())throw new M(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Sd(this,i),this.Ai=e+"main",this.serializer=new tl(c),this.Ri=new te(this.Ai,this.hi,new Bd(this.serializer)),this.$r=new gd,this.Ur=new wd(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ll(this.serializer),this.Gr=new md,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,m===!1&&vt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(S.FAILED_PRECONDITION,Oi);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Ur.getHighestSequenceNumber(t))}).then(t=>{this.Qr=new Ct(t,this.ci)}).then(()=>{this.Kr=!0}).catch(t=>(this.Ri&&this.Ri.close(),Promise.reject(t)))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>wr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(t).next(e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(t)).next(e=>this.isPrimary&&!e?this.bi(t).next(()=>!1):!!e&&this.Di(t).next(()=>!0))).catch(t=>{if(se(t))return b("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.ui.enqueueRetryable(()=>this.di(t)),this.isPrimary=t})}wi(t){return xn(t).get("owner").next(e=>w.resolve(this.vi(e)))}Ci(t){return wr(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=ct(e,"clientMetadata");return n.U().next(i=>{const o=this.xi(i,18e5),a=i.filter(u=>o.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?w.resolve(!0):xn(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new M(S.FAILED_PRECONDITION,Oi);return!1}}return!(!this.networkEnabled||!this.inForeground)||wr(t).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const o=!this.networkEnabled&&i.networkEnabled,a=!this.inForeground&&i.inForeground,u=this.networkEnabled===i.networkEnabled;if(o||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&b("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new qi(t,Ct.oe);return this.bi(e).next(()=>this.Ci(e))}),this.Ri.close(),this.qi()}xi(t,e){return t.filter(n=>this.Mi(n.updateTimeMs,e)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",t=>wr(t).U().next(e=>this.xi(e,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return ii.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new vd(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return ri.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){b("IndexedDbPersistence","Starting transaction:",t);const i=e==="readonly"?"readonly":"readwrite",o=function(c){return c===17?Ih:c===16?yh:c===15?as:c===14?fu:c===13?du:c===12?_h:c===11?hu:void O()}(this.hi);let a;return this.Ri.runTransaction(t,i,o,u=>(a=new qi(u,this.Qr?this.Qr.next():Ct.oe),e==="readwrite-primary"?this.wi(a).next(c=>!!c||this.Si(a)).next(c=>{if(!c)throw vt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new M(S.FAILED_PRECONDITION,au);return n(a)}).next(c=>this.Di(a).next(()=>c)):this.Ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Ki(t){return xn(t).get("owner").next(e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new M(S.FAILED_PRECONDITION,Oi)})}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return xn(t).put("owner",e)}static D(){return te.D()}bi(t){const e=xn(t);return e.get("owner").next(n=>this.vi(n)?(b("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):w.resolve())}Mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(vt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;Ja()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=((e=this.Vi)===null||e===void 0?void 0:e.getItem(this.Oi(t)))!==null;return b("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return vt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){vt("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function xn(r){return ct(r,"owner")}function wr(r){return ct(r,"clientMetadata")}function qd(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=i}static Wi(t,e){let n=G(),i=G();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new vs(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ja()?8:lu(Nr())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.Yi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new jd;return this.Xi(t,e,a).next(u=>{if(o.result=u,this.zi)return this.es(t,e,a,u.size)})}).next(()=>o.result)}es(t,e,n,i){return n.documentReadCount<this.ji?(Ue()<=jt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",Be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),w.resolve()):(Ue()<=jt.DEBUG&&b("QueryEngine","Query:",Be(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Ue()<=jt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",Be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):w.resolve())}Yi(t,e){if(ia(e))return w.resolve(null);let n=kt(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=$i(e,null,"F"),n=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=G(...o);return this.Ji.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(c=>{const d=this.ts(e,u);return this.ns(e,d,a,c.readTime)?this.Yi(t,$i(e,null,"F")):this.rs(t,d,e,c)}))})))}Zi(t,e,n,i){return ia(e)||i.isEqual(L.min())?w.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const a=this.ts(e,o);return this.ns(e,a,n,i)?w.resolve(null):(Ue()<=jt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Be(e)),this.rs(t,a,e,Hc(i,-1)).next(u=>u))})}ts(t,e){let n=new Y(Vu(t));return e.forEach((i,o)=>{Jn(t,o)&&(n=n.add(o))}),n}ns(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(t,e,n){return Ue()<=jt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",Be(e)),this.Ji.getDocumentsMatchingQuery(t,e,xt.min(),n)}rs(t,e,n,i){return this.Ji.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e,n,i){this.persistence=t,this.ss=e,this.serializer=i,this.os=new rt(j),this._s=new oe(o=>Re(o),Hn),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cl(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function fl(r,t,e,n){return new Kd(r,t,e,n)}async function ml(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],u=[];let c=G();for(const d of i){a.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return e.localDocuments.getDocuments(n,c).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Gd(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,m){const p=d.batch,R=p.keys();let V=w.resolve();return R.forEach(D=>{V=V.next(()=>m.getEntry(c,D)).next(k=>{const x=d.docVersions.get(D);F(x!==null),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),V.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let c=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function gl(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function zd(r,t){const e=B(r),n=t.snapshotVersion;let i=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});i=e.os;const u=[];t.targetChanges.forEach((m,p)=>{const R=i.get(p);if(!R)return;u.push(e.Ur.removeMatchingKeys(o,m.removedDocuments,p).next(()=>e.Ur.addMatchingKeys(o,m.addedDocuments,p)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(p)!==null?V=V.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(m.resumeToken,n)),i=i.insert(p,V),function(k,x,K){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,V,m)&&u.push(e.Ur.updateTargetData(o,V))});let c=bt(),d=G();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Qd(o,a,t.documentUpdates).next(m=>{c=m.Ps,d=m.Is})),!n.isEqual(L.min())){const m=e.Ur.getLastRemoteSnapshotVersion(o).next(p=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));u.push(m)}return w.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,c,d)).next(()=>c)}).then(o=>(e.os=i,o))}function Qd(r,t,e){let n=G(),i=G();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=bt();return e.forEach((u,c)=>{const d=o.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(L.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):b("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Ps:a,Is:i}})}function $d(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Wd(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ur.getTargetData(n,t).next(o=>o?(i=o,w.resolve(i)):e.Ur.allocateTargetId(n).next(a=>(i=new Kt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function es(r,t,e){const n=B(r),i=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!se(a))throw a;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(i.target)}function ka(r,t,e){const n=B(r);let i=L.min(),o=G();return n.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,m){const p=B(c),R=p._s.get(m);return R!==void 0?w.resolve(p.os.get(R)):p.Ur.getTargetData(d,m)}(n,a,kt(t)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next(c=>{o=c})}).next(()=>n.ss.getDocumentsMatchingQuery(a,t,e?i:L.min(),e?o:G())).next(u=>(Hd(n,Mh(t),u),{documents:u,Ts:o})))}function Hd(r,t,e){let n=r.us.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(t,n)}class Na{constructor(){this.activeTargetIds=qh()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pl{constructor(){this.so=new Na,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Na,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar=null;function Fi(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class Zd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(e,n,i,o,a){const u=Fi(),c=this.xo(e,n.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${u}:`,c,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(e,c,d,i).then(m=>(b("RestConnection",`Received RPC '${e}' ${u}: `,m),m),m=>{throw ve("RestConnection",`RPC '${e}' ${u} failed with error: `,m,"url: ",c,"request:",i),m})}Lo(e,n,i,o,a,u){return this.Mo(e,n,i,o,a)}Oo(e,n,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),i&&i.headers.forEach((o,a)=>e[a]=o)}xo(e,n){const i=Xd[e];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,i){const o=Fi();return new Promise((a,u)=>{const c=new Ya;c.setWithCredentials(!0),c.listenOnce(Za.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Rr.NO_ERROR:const m=c.getResponseJson();b(It,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case Rr.TIMEOUT:b(It,`RPC '${t}' ${o} timed out`),u(new M(S.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const p=c.getStatus();if(b(It,`RPC '${t}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let R=c.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const D=function(x){const K=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(V.status);u(new M(D,V.message))}else u(new M(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new M(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(It,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);b(It,`RPC '${t}' ${o} sending request:`,i),c.send(e,"POST",d,n,15)})}Bo(t,e,n){const i=Fi(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=nu(),u=eu(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const m=o.join("");b(It,`Creating RPC '${t}' stream ${i}: ${m}`,c);const p=a.createWebChannel(m,c);let R=!1,V=!1;const D=new Yd({Io:x=>{V?b(It,`Not sending because RPC '${t}' stream ${i} is closed:`,x):(R||(b(It,`Opening RPC '${t}' stream ${i} transport.`),p.open(),R=!0),b(It,`RPC '${t}' stream ${i} sending:`,x),p.send(x))},To:()=>p.close()}),k=(x,K,q)=>{x.listen(K,U=>{try{q(U)}catch(H){setTimeout(()=>{throw H},0)}})};return k(p,Cn.EventType.OPEN,()=>{V||(b(It,`RPC '${t}' stream ${i} transport opened.`),D.yo())}),k(p,Cn.EventType.CLOSE,()=>{V||(V=!0,b(It,`RPC '${t}' stream ${i} transport closed`),D.So())}),k(p,Cn.EventType.ERROR,x=>{V||(V=!0,ve(It,`RPC '${t}' stream ${i} transport errored:`,x),D.So(new M(S.UNAVAILABLE,"The operation could not be completed")))}),k(p,Cn.EventType.MESSAGE,x=>{var K;if(!V){const q=x.data[0];F(!!q);const U=q,H=U.error||((K=U[0])===null||K===void 0?void 0:K.error);if(H){b(It,`RPC '${t}' stream ${i} received error:`,H);const tt=H.status;let $=function(y){const T=ut[y];if(T!==void 0)return Bu(T)}(tt),I=H.message;$===void 0&&($=S.INTERNAL,I="Unknown error status: "+tt+" with message "+H.message),V=!0,D.So(new M($,I)),p.close()}else b(It,`RPC '${t}' stream ${i} received:`,q),D.bo(q)}}),k(u,tu.STAT_EVENT,x=>{x.stat===Ui.PROXY?b(It,`RPC '${t}' stream ${i} detected buffering proxy`):x.stat===Ui.NOPROXY&&b(It,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.wo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){return typeof window<"u"?window:null}function Dr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(r){return new rd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,e-n);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,n,i,o,a,u,c){this.ui=t,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _l(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(vt(e.toString()),vt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===e&&this.P_(n,i)},n=>{t(()=>{const i=new M(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ef extends yl{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=od(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?At(a.readTime):L.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Ji(this.serializer),e.addTarget=function(o,a){let u;const c=a.target;if(u=Fr(c)?{documents:Wu(o,c)}:{query:Hu(o,c)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ku(o,a.resumeToken);const d=Wi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=Ze(o,a.snapshotVersion.toTimestamp());const d=Wi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=ud(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Ji(this.serializer),e.removeTarget=t,this.a_(e)}}class nf extends yl{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return F(!!t.streamToken),this.lastStreamToken=t.streamToken,F(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){F(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=ad(t.writeResults,t.commitTime),n=At(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Ji(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Br(this.serializer,n))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(t,Hi(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(S.UNKNOWN,o.toString())})}Lo(t,e,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(t,Hi(e,n),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(S.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(vt(e),this.D_=!1):b("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{n.enqueueAndForget(async()=>{xe(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=B(c);d.L_.add(4),await Yn(d),d.q_.set("Unknown"),d.L_.delete(4),await ai(d)}(this))})}),this.q_=new sf(n,i)}}async function ai(r){if(xe(r))for(const t of r.B_)await t(!0)}async function Yn(r){for(const t of r.B_)await t(!1)}function Il(r,t){const e=B(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),Ps(e)?Rs(e):an(e).r_()&&As(e,t))}function ws(r,t){const e=B(r),n=an(e);e.N_.delete(t),n.r_()&&Tl(e,t),e.N_.size===0&&(n.r_()?n.o_():xe(e)&&e.q_.set("Unknown"))}function As(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}an(r).A_(t)}function Tl(r,t){r.Q_.xe(t),an(r).R_(t)}function Rs(r){r.Q_=new Zh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),an(r).start(),r.q_.v_()}function Ps(r){return xe(r)&&!an(r).n_()&&r.N_.size>0}function xe(r){return B(r).L_.size===0}function El(r){r.Q_=void 0}async function af(r){r.q_.set("Online")}async function uf(r){r.N_.forEach((t,e)=>{As(r,t)})}async function lf(r,t){El(r),Ps(r)?(r.q_.M_(t),Rs(r)):r.q_.set("Unknown")}async function cf(r,t,e){if(r.q_.set("Online"),t instanceof ju&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(r,t)}catch(n){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Gr(r,n)}else if(t instanceof Cr?r.Q_.Ke(t):t instanceof qu?r.Q_.He(t):r.Q_.We(t),!e.isEqual(L.min()))try{const n=await gl(r.localStore);e.compareTo(n)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=o.N_.get(d);m&&o.N_.set(d,m.withResumeToken(c.resumeToken,a))}}),u.targetMismatches.forEach((c,d)=>{const m=o.N_.get(c);if(!m)return;o.N_.set(c,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Tl(o,c);const p=new Kt(m.target,c,d,m.sequenceNumber);As(o,p)}),o.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){b("RemoteStore","Failed to raise snapshot:",n),await Gr(r,n)}}async function Gr(r,t,e){if(!se(t))throw t;r.L_.add(1),await Yn(r),r.q_.set("Offline"),e||(e=()=>gl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await ai(r)})}function vl(r,t){return t().catch(e=>Gr(r,e,t))}async function Zn(r){const t=B(r),e=ie(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;hf(t);)try{const i=await $d(t.localStore,n);if(i===null){t.O_.length===0&&e.o_();break}n=i.batchId,df(t,i)}catch(i){await Gr(t,i)}wl(t)&&Al(t)}function hf(r){return xe(r)&&r.O_.length<10}function df(r,t){r.O_.push(t);const e=ie(r);e.r_()&&e.V_&&e.m_(t.mutations)}function wl(r){return xe(r)&&!ie(r).n_()&&r.O_.length>0}function Al(r){ie(r).start()}async function ff(r){ie(r).p_()}async function mf(r){const t=ie(r);for(const e of r.O_)t.m_(e.mutations)}async function gf(r,t,e){const n=r.O_.shift(),i=ms.from(n,t,e);await vl(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Zn(r)}async function pf(r,t){t&&ie(r).V_&&await async function(n,i){if(function(a){return Jh(a)&&a!==S.ABORTED}(i.code)){const o=n.O_.shift();ie(n).s_(),await vl(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Zn(n)}}(r,t),wl(r)&&Al(r)}async function Oa(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const n=xe(e);e.L_.add(3),await Yn(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ai(e)}async function _f(r,t){const e=B(r);t?(e.L_.delete(2),await ai(e)):t||(e.L_.add(2),await Yn(e),e.q_.set("Unknown"))}function an(r){return r.K_||(r.K_=function(e,n,i){const o=B(e);return o.w_(),new ef(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:af.bind(null,r),Ro:uf.bind(null,r),mo:lf.bind(null,r),d_:cf.bind(null,r)}),r.B_.push(async t=>{t?(r.K_.s_(),Ps(r)?Rs(r):r.q_.set("Unknown")):(await r.K_.stop(),El(r))})),r.K_}function ie(r){return r.U_||(r.U_=function(e,n,i){const o=B(e);return o.w_(),new nf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ff.bind(null,r),mo:pf.bind(null,r),f_:mf.bind(null,r),g_:gf.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Zn(r)):(await r.U_.stop(),r.O_.length>0&&(b("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,u=new Vs(t,e,a,i,o);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ss(r,t){if(vt("AsyncQueue",`${t}: ${r}`),se(r))return new M(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.comparator=t?(e,n)=>t(e,n)||N.comparator(e.key,n.key):(e,n)=>N.comparator(e.key,n.key),this.keyedMap=Dn(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Ge(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ge;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.W_=new rt(N.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class tn{constructor(t,e,n,i,o,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new tn(t,e,Ge.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Yr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class If{constructor(){this.queries=La(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const i=B(e),o=i.queries;i.queries=La(),o.forEach((a,u)=>{for(const c of u.j_)c.onError(n)})})(this,new M(S.ABORTED,"Firestore shutting down"))}}function La(){return new oe(r=>Pu(r),Yr)}async function Tf(r,t){const e=B(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.H_()&&t.J_()&&(n=2):(o=new yf,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(i,!0);break;case 1:o.z_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const u=Ss(a,`Initialization of query '${Be(t.query)}' failed`);return void t.onError(u)}e.queries.set(i,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&bs(e)}async function Ef(r,t){const e=B(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.j_.indexOf(t);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=t.J_()?0:1:!o.H_()&&t.J_()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function vf(r,t){const e=B(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(n=!0);a.z_=i}}n&&bs(e)}function wf(r,t,e){const n=B(r),i=n.queries.get(t);if(i)for(const o of i.j_)o.onError(e);n.queries.delete(t)}function bs(r){r.Y_.forEach(t=>{t.next()})}var ns,Ua;(Ua=ns||(ns={})).ea="default",Ua.Cache="cache";class Af{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new tn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.key=t}}class Pl{constructor(t){this.key=t}}class Rf{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=Vu(t),this.Ra=new Ge(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Fa,i=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,p)=>{const R=i.get(m),V=Jn(this.query,p)?p:null,D=!!R&&this.mutatedKeys.has(R.key),k=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let x=!1;R&&V?R.data.isEqual(V.data)?D!==k&&(n.track({type:3,doc:V}),x=!0):this.ga(R,V)||(n.track({type:2,doc:V}),x=!0,(c&&this.Aa(V,c)>0||d&&this.Aa(V,d)<0)&&(u=!0)):!R&&V?(n.track({type:0,doc:V}),x=!0):R&&!V&&(n.track({type:1,doc:R}),x=!0,(c||d)&&(u=!0)),x&&(V?(a=a.add(V),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ra:a,fa:n,ns:u,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((m,p)=>function(V,D){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return k(V)-k(D)}(m.type,p.type)||this.Aa(m.doc,p.doc)),this.pa(n),i=i!=null&&i;const u=e&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,d=c!==this.Ea;return this.Ea=c,a.length!==0||d?{snapshot:new tn(this.query,t.Ra,o,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fa,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=G(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new Pl(n))}),this.da.forEach(n=>{t.has(n)||e.push(new Rl(n))}),e}ba(t){this.Ta=t.Ts,this.da=G();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return tn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Pf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Vf{constructor(t){this.key=t,this.va=!1}}class Sf{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new oe(u=>Pu(u),Yr),this.Ma=new Map,this.xa=new Set,this.Oa=new rt(N.comparator),this.Na=new Map,this.La=new Ts,this.Ba={},this.ka=new Map,this.qa=Se.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bf(r,t,e=!0){const n=Dl(r);let i;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Vl(n,t,e,!0),i}async function xf(r,t){const e=Dl(r);await Vl(e,t,!0,!1)}async function Vl(r,t,e,n){const i=await Wd(r.localStore,kt(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let u;return n&&(u=await Cf(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&Il(r.remoteStore,i),u}async function Cf(r,t,e,n,i){r.Ka=(p,R,V)=>async function(k,x,K,q){let U=x.view.ma(K);U.ns&&(U=await ka(k.localStore,x.query,!1).then(({documents:I})=>x.view.ma(I,U)));const H=q&&q.targetChanges.get(x.targetId),tt=q&&q.targetMismatches.get(x.targetId)!=null,$=x.view.applyChanges(U,k.isPrimaryClient,H,tt);return qa(k,x.targetId,$.wa),$.snapshot}(r,p,R,V);const o=await ka(r.localStore,t,!0),a=new Rf(t,o.Ts),u=a.ma(o.documents),c=Xn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(u,r.isPrimaryClient,c);qa(r,e,d.wa);const m=new Pf(t,e,a);return r.Fa.set(t,m),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function Df(r,t,e){const n=B(r),i=n.Fa.get(t),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(a=>!Yr(a,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await es(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ws(n.remoteStore,i.targetId),rs(n,i.targetId)}).catch(be)):(rs(n,i.targetId),await es(n.localStore,i.targetId,!0))}async function kf(r,t){const e=B(r),n=e.Fa.get(t),i=e.Ma.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ws(e.remoteStore,n.targetId))}async function Nf(r,t,e){const n=kl(r);try{const i=await function(a,u){const c=B(a),d=st.now(),m=u.reduce((V,D)=>V.add(D.key),G());let p,R;return c.persistence.runTransaction("Locally write mutations","readwrite",V=>{let D=bt(),k=G();return c.cs.getEntries(V,m).next(x=>{D=x,D.forEach((K,q)=>{q.isValidDocument()||(k=k.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(V,D)).next(x=>{p=x;const K=[];for(const q of u){const U=Wh(q,p.get(q.key).overlayedDocument);U!=null&&K.push(new ae(q.key,U,yu(U.value.mapValue),Vt.exists(!0)))}return c.mutationQueue.addMutationBatch(V,d,K,u)}).next(x=>{R=x;const K=x.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(V,x.batchId,K)})}).then(()=>({batchId:R.batchId,changes:bu(p)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,u,c){let d=a.Ba[a.currentUser.toKey()];d||(d=new rt(j)),d=d.insert(u,c),a.Ba[a.currentUser.toKey()]=d}(n,i.batchId,e),await tr(n,i.changes),await Zn(n.remoteStore)}catch(i){const o=Ss(i,"Failed to persist write");e.reject(o)}}async function Sl(r,t){const e=B(r);try{const n=await zd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Na.get(o);a&&(F(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?F(a.va):i.removedDocuments.size>0&&(F(a.va),a.va=!1))}),await tr(e,n,t)}catch(n){await be(n)}}function Ba(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Fa.forEach((o,a)=>{const u=a.view.Z_(t);u.snapshot&&i.push(u.snapshot)}),function(a,u){const c=B(a);c.onlineState=u;let d=!1;c.queries.forEach((m,p)=>{for(const R of p.j_)R.Z_(u)&&(d=!0)}),d&&bs(c)}(n.eventManager,t),i.length&&n.Ca.d_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Mf(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Na.get(t),o=i&&i.key;if(o){let a=new rt(N.comparator);a=a.insert(o,at.newNoDocument(o,L.min()));const u=G().add(o),c=new ni(L.min(),new Map,new rt(j),a,u);await Sl(n,c),n.Oa=n.Oa.remove(o),n.Na.delete(t),xs(n)}else await es(n.localStore,t,!1).then(()=>rs(n,t,e)).catch(be)}async function Of(r,t){const e=B(r),n=t.batch.batchId;try{const i=await Gd(e.localStore,t);xl(e,n,null),bl(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await tr(e,i)}catch(i){await be(i)}}async function Ff(r,t,e){const n=B(r);try{const i=await function(a,u){const c=B(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,u).next(p=>(F(p!==null),m=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(n.localStore,t);xl(n,t,e),bl(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await tr(n,i)}catch(i){await be(i)}}function bl(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function xl(r,t,e){const n=B(r);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ba[n.currentUser.toKey()]=i}}function rs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach(n=>{r.La.containsKey(n)||Cl(r,n)})}function Cl(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(ws(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),xs(r))}function qa(r,t,e){for(const n of e)n instanceof Rl?(r.La.addReference(n.key,t),Lf(r,n)):n instanceof Pl?(b("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||Cl(r,n.key)):O()}function Lf(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(b("SyncEngine","New document in limbo: "+e),r.xa.add(n),xs(r))}function xs(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new N(J.fromString(t)),n=r.qa.next();r.Na.set(n,new Vf(e)),r.Oa=r.Oa.insert(e,n),Il(r.remoteStore,new Kt(kt(Xr(e.path)),n,"TargetPurposeLimboResolution",Ct.oe))}}async function tr(r,t,e){const n=B(r),i=[],o=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach((u,c)=>{a.push(n.Ka(c,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){i.push(d);const p=vs.Wi(c.targetId,d);o.push(p)}}))}),await Promise.all(a),n.Ca.d_(i),await async function(c,d){const m=B(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>w.forEach(d,R=>w.forEach(R.$i,V=>m.persistence.referenceDelegate.addReference(p,R.targetId,V)).next(()=>w.forEach(R.Ui,V=>m.persistence.referenceDelegate.removeReference(p,R.targetId,V)))))}catch(p){if(!se(p))throw p;b("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const R=p.targetId;if(!p.fromCache){const V=m.os.get(R),D=V.snapshotVersion,k=V.withLastLimboFreeSnapshotVersion(D);m.os=m.os.insert(R,k)}}}(n.localStore,o))}async function Uf(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const n=await ml(e.localStore,t);e.currentUser=t,function(o,a){o.ka.forEach(u=>{u.forEach(c=>{c.reject(new M(S.CANCELLED,a))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await tr(e,n.hs)}}function Bf(r,t){const e=B(r),n=e.Na.get(t);if(n&&n.va)return G().add(n.key);{let i=G();const o=e.Ma.get(t);if(!o)return i;for(const a of o){const u=e.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Dl(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Mf.bind(null,t),t.Ca.d_=vf.bind(null,t.eventManager),t.Ca.$a=wf.bind(null,t.eventManager),t}function kl(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Of.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ff.bind(null,t),t}class Wn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=oi(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return fl(this.persistence,new dl,t.initialUser,this.serializer)}Ga(t){return new hl(si.Zr,this.serializer)}Wa(t){return new pl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wn.provider={build:()=>new Wn};class qf extends Wn{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await kl(this.Ja.syncEngine),await Zn(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(t){return fl(this.persistence,new dl,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Rd(n,t.asyncQueue,e)}Ha(t,e){const n=new Zc(e,this.persistence);return new Yc(t.asyncQueue,n)}Ga(t){const e=qd(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new Es(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,tf(),Dr(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new pl}}class zr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ba(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uf.bind(null,this.syncEngine),await _f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new If}()}createDatastore(t){const e=oi(t.databaseInfo.databaseId),n=function(o){return new Zd(o)}(t.databaseInfo);return function(o,a,u,c){return new rf(o,a,u,c)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,u){return new of(n,i,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ba(this.syncEngine,e,0),function(){return Ma.D()?new Ma:new Jd}())}createSyncEngine(t,e){return function(i,o,a,u,c,d,m){const p=new Sf(i,o,a,u,c,d);return m&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);b("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Yn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}zr.provider={build:()=>new zr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):vt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{b("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(b("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ss(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Li(r,t){r.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ml(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ja(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Gf(r);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Oa(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Oa(t.remoteStore,i)),r._onlineComponents=t}async function Gf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Li(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ve("Error using user provided cache. Falling back to memory cache: "+e),await Li(r,new Wn)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Li(r,new Wn);return r._offlineComponents}async function Nl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await ja(r,r._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await ja(r,new zr))),r._onlineComponents}function zf(r){return Nl(r).then(t=>t.syncEngine)}async function Ka(r){const t=await Nl(r),e=t.eventManager;return e.onListen=bf.bind(null,t.syncEngine),e.onUnlisten=Df.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=xf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=kf.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(r,t,e){if(!e)throw new M(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Qf(r,t,e,n){if(t===!0&&n===!0)throw new M(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function za(r){if(!N.isDocumentKey(r))throw new M(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Qa(r){if(N.isDocumentKey(r))throw new M(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Cs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function Te(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Cs(r);throw new M(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new M(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new M(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ml((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ui{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $a({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $a(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Bc;switch(n.type){case"firstParty":return new Gc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ga.get(e);n&&(b("ComponentProvider","Removing Datastore"),Ga.delete(e),n.terminate())}(this),Promise.resolve()}}function $f(r,t,e,n={}){var i;const o=(r=Te(r,ui))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),n.mockUserToken){let u,c;if(typeof n.mockUserToken=="string")u=n.mockUserToken,c=ft.MOCK_USER;else{u=Oc(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new M(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ft(d)}r._authCredentials=new qc(new ru(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new li(this.firestore,t,this._query)}}class Nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class ee extends li{constructor(t,e,n){super(t,e,Xr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new N(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function gm(r,t,...e){if(r=ze(r),Ol("collection","path",t),r instanceof ui){const n=J.fromString(t,...e);return Qa(n),new ee(r,null,n)}{if(!(r instanceof Nt||r instanceof ee))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return Qa(n),new ee(r.firestore,null,n)}}function Wf(r,t,...e){if(r=ze(r),arguments.length===1&&(t=iu.newId()),Ol("doc","path",t),r instanceof ui){const n=J.fromString(t,...e);return za(n),new Nt(r,null,new N(n))}{if(!(r instanceof Nt||r instanceof ee))throw new M(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return za(n),new Nt(r.firestore,r instanceof ee?r.converter:null,new N(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _l(this,"async_queue_retry"),this.Vu=()=>{const n=Dr();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=Dr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Dr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Zt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!se(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw vt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const i=Vs.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Ha(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class en extends ui{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Wa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wa(t),this._firestoreClient=void 0,await t}}}function pm(r,t){const e=typeof r=="object"?r:kc(),n=typeof r=="string"?r:t||"(default)",i=Nc(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Mc("firestore");o&&$f(i,...o)}return i}function Fl(r){if(r._terminated)throw new M(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ll(r),r._firestoreClient}function Ll(r){var t,e,n;const i=r._freezeSettings(),o=function(u,c,d,m){return new Eh(u,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ml(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Kf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(r._componentsProvider))}function _m(r,t){ve("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();return Hf(r,zr.provider,{build:n=>new qf(n,e.cacheSizeBytes,t==null?void 0:t.forceOwnership)}),Promise.resolve()}function Hf(r,t,e){if((r=Te(r,en))._firestoreClient||r._terminated)throw new M(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new M(S.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:t,_offline:e},Ll(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nn(lt.fromBase64String(t))}catch(e){throw new M(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new nn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=/^__.*__$/;class Xf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ae(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}function Ul(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Os{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Os(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.Ou(t),i}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Qr(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Ul(this.Cu)&&Jf.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class Yf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||oi(t)}Qu(t,e,n,i=!1){return new Os({Cu:t,methodName:e,qu:n,path:it.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zf(r){const t=r._freezeSettings(),e=oi(r._databaseId);return new Yf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function tm(r,t,e,n,i,o={}){const a=r.Qu(o.merge||o.mergeFields?2:0,t,e,i);Kl("Data must be an object, but it was:",a,n);const u=ql(n,a);let c,d;if(o.merge)c=new Dt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const p of o.mergeFields){const R=em(t,p,e);if(!a.contains(R))throw new M(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);rm(m,R)||m.push(R)}c=new Dt(m),d=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=a.fieldTransforms;return new Xf(new Pt(u),c,d)}class Fs extends ks{_toFieldTransform(t){return new Ou(t.path,new Je)}isEqual(t){return t instanceof Fs}}function Bl(r,t){if(jl(r=ze(r)))return Kl("Unsupported field value:",t,r),ql(r,t);if(r instanceof ks)return function(n,i){if(!Ul(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const u of n){let c=Bl(u,i.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=ze(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return jh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=st.fromDate(n);return{timestampValue:Ze(i.serializer,o)}}if(n instanceof st){const o=new st(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ze(i.serializer,o)}}if(n instanceof Ns)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof nn)return{bytesValue:Ku(i.serializer,n._byteString)};if(n instanceof Nt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:_s(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ms)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw u.Bu("VectorValues must only contain numeric values.");return ds(u.serializer,c)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${Cs(n)}`)}(r,t)}function ql(r,t){const e={};return mu(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(r,(n,i)=>{const o=Bl(i,t.Mu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function jl(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Ns||r instanceof nn||r instanceof Nt||r instanceof ks||r instanceof Ms)}function Kl(r,t,e){if(!jl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Cs(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function em(r,t,e){if((t=ze(t))instanceof Ds)return t._internalPath;if(typeof t=="string")return Gl(r,t);throw Qr("Field path arguments must be of type string or ",r,!1,void 0,e)}const nm=new RegExp("[~\\*/\\[\\]]");function Gl(r,t,e){if(t.search(nm)>=0)throw Qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ds(...t.split("."))._internalPath}catch{throw Qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Qr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(o||a)&&(c+=" (found",o&&(c+=` in field ${n}`),a&&(c+=` in document ${i}`),c+=")"),new M(S.INVALID_ARGUMENT,u+r+c)}function rm(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new im(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ql("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class im extends zl{data(){return super.data()}}function Ql(r,t){return typeof t=="string"?Gl(r,t):t instanceof Ds?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class om{convertValue(t,e="none"){switch(Ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return sn(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>nt(a.doubleValue));return new Ms(o)}convertGeoPoint(t){return new Ns(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ls(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Gn(t));default:return null}}convertTimestamp(t){const e=Gt(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);F(Zu(n));const i=new we(n.get(1),n.get(3)),o=new N(n.popFirst(5));return i.isEqual(e)||vt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $l extends zl{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ql("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class kr extends $l{data(t={}){return super.data(t)}}class um{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Mn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new kr(this._firestore,this._userDataWriter,n.key,n,new Mn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const c=new kr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Mn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const c=new kr(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Mn(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:lm(u.type),doc:c,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function lm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Wl extends om{constructor(t){super(),this.firestore=t}convertBytes(t){return new nn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function ym(r){return Hl(Te(r.firestore,en),[new ei(r._key,Vt.none())])}function Im(r,t){const e=Te(r.firestore,en),n=Wf(r),i=am(r.converter,t);return Hl(e,[tm(Zf(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Vt.exists(!1))]).then(()=>n)}function Tm(r,...t){var e,n,i;r=ze(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ha(t[a])||(o=t[a],a++);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ha(t[a])){const p=t[a];t[a]=(e=p.next)===null||e===void 0?void 0:e.bind(p),t[a+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),t[a+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,d,m;if(r instanceof Nt)d=Te(r.firestore,en),m=Xr(r._key.path),c={next:p=>{t[a]&&t[a](cm(d,r,p))},error:t[a+1],complete:t[a+2]};else{const p=Te(r,li);d=Te(p.firestore,en),m=p._query;const R=new Wl(d);c={next:V=>{t[a]&&t[a](new um(d,R,p,V))},error:t[a+1],complete:t[a+2]},sm(r._query)}return function(R,V,D,k){const x=new jf(k),K=new Af(V,x,D);return R.asyncQueue.enqueueAndForget(async()=>Tf(await Ka(R),K)),()=>{x.Za(),R.asyncQueue.enqueueAndForget(async()=>Ef(await Ka(R),K))}}(Fl(d),m,u,c)}function Hl(r,t){return function(n,i){const o=new Zt;return n.asyncQueue.enqueueAndForget(async()=>Nf(await zf(n),i,o)),o.promise}(Fl(r),t)}function cm(r,t,e){const n=e.docs.get(t._key),i=new Wl(r);return new $l(r,i,t._key,n,new Mn(e.hasPendingWrites,e.fromCache),t.converter)}function Em(){return new Fs("serverTimestamp")}(function(t,e=!0){(function(i){rn=i})(Fc),xc(new Cc("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new en(new jc(n.getProvider("auth-internal")),new Qc(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new we(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Bo(jo,"4.7.3",t),Bo(jo,"4.7.3","esm2017")})();export{Wf as a,Im as b,gm as c,ym as d,_m as e,pm as g,Tm as o,Em as s};
