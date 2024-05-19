/*! For license information please see product.bundle.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,o=Object.create(a.prototype),c=new I(n||[]);return i(o,"_invoke",{value:O(t,r,c)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var p="suspendedStart",m="suspendedYield",g="executing",y="completed",v={};function b(){}function w(){}function x(){}var E={};f(E,s,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(M([])));k&&k!==a&&o.call(k,s)&&(E=k);var T=x.prototype=b.prototype=Object.create(E);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(a,i,c,s){var u=d(e[a],e,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(o,o):o()}})}function O(t,e,n){var a=p;return function(o,i){if(a===g)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var s=j(c,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var u=d(t,e,n);if("normal"===u.type){if(a=n.done?y:m,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a=y,n.method="throw",n.arg=u.arg)}}}function j(t,e){var n=e.method,a=t.iterator[n];if(a===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=d(a,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(o.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return w.prototype=x,i(T,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},S(_.prototype),f(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new _(h(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(T),f(T,l,"Generator"),f(T,s,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=M,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;G(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}for(var n=[{image:"./asset/fasilitas/komunitas.png",title:"Komunitas",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."},{image:"./asset/fasilitas/1on1.png",title:"1-on-1 Session",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."},{image:"./asset/fasilitas/active-learning.png",title:"Active Learning",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."},{image:"./asset/fasilitas/happy-atmosphere.png",title:"Happy Atmosphere",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."},{image:"./asset/fasilitas/tugas.png",title:"Tugas",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."},{image:"./asset/fasilitas/intensive-bootcamp.png",title:"Intensive Bootcamp",text:"Kenali banyak anggota dari komunitas alumni Edspert dari berbagai macam bidang studi."}],a=("id",new URLSearchParams(window.location.search).get("id")),o=function(){var t,n=(t=e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.get("https://be-edspert.vercel.app/api/products/");case 3:r=t.sent,n=r.data,l(n,a),p(n,a),c(n,a),u(n,a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching course details:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function c(t){r(i,a,o,c,s,"next",t)}function s(t){r(i,a,o,c,s,"throw",t)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),i=document.getElementById("banner-title"),c=function(t,e){var r=t.products[e-1];i.innerHTML=r.title},s=document.getElementById("website-title"),u=function(t,e){var r=t.products[e-1];console.log("filteredCourseTitleTab",r),s.innerHTML=r.title},l=function(t,e){var r=t.products[e-1];console.log("courses",t),console.log("courseId",e),console.log("filteredCourse",r);var n=document.querySelectorAll(".card-mentor");r.mentor.forEach((function(t,e){var a=Math.floor(8*Math.random())+1;n[e].innerHTML='\n      <div class="card" style="width: 18rem;height:25rem">\n        <img src="./asset/mentor/Avatar-'.concat(a,'.png" class="card-img-top" alt="Foto Mentor">\n        <div class="card-body">\n          <h5 class="card-title">').concat(t,'</h5>\n          <h6 class="card-title">').concat(r.mentorJabatan[e],'</h6>\n          <p class="card-text">').concat(r.mentorText[e],'</p>\n          <div class="card-sosmed">\n            <img src="./asset/twitter.png">\n            <img src="./asset/linkedin.png">\n            <img src="./asset/website.png">\n          </div>\n        </div>\n      </div>\n    ')}))},f=document.querySelectorAll(".card-facility"),h=0,d=0;d<n.length;d++)f.forEach((function(t){h<n.length&&(t.innerHTML+='\n                <div class="card" style="width: 18rem;">\n                    <img src="'.concat(n[h].image,'" class="card-img-top" alt="...">\n                    <div class="card-body">\n                        <h5 class="card-title">').concat(n[h].title,'</h5>\n                        <p class="card-text">').concat(n[h].text,"</p>\n                    </div>\n                </div>\n            "),h++)}));var p=function(t,e){var r=t.products[e-1],n=document.getElementById("materi-container");r.materi.forEach((function(t,e){var a=document.createElement("div");a.classList.add("flex","flex-column","materi-list"),a.innerHTML='\n      <h5 class="list-title">'.concat(t,'</h5>\n      <h6 class="list-text">').concat(r.materiText[e],"</h6>\n    "),n.appendChild(a)}))};o()})();