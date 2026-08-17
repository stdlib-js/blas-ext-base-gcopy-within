"use strict";var m=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=m(function(F,R){
var O=require('@stdlib/math-base-special-fast-min/dist'),h=require('@stdlib/blas-base-gcopy/dist').ndarray;function z(n,r,a,q,u,i,c,v,o,y){var p,f,e;return n<=0||i===0||r>=n||(e=O(O(q,n)-a,n-r),e<=0)?u:(p=c+a*i,f=c+r*i,a<r+e&&r<a+e?(h(e,u,i,p,v,o,y),h(e,v,o,y,u,i,f),u):(h(e,u,i,p,u,i,f),u))}R.exports=z
});var s=m(function(G,j){
var b=require('@stdlib/strided-base-stride2offset/dist'),A=l();function B(n,r,a,q,u,i,c,v){var o=b(n,i),y=b(n,v);return A(n,r,a,q,u,i,o,c,v,y)}j.exports=B
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=s(),D=l();C(w,"ndarray",D);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
