var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{u(n.next(t))}catch(t){o(t)}}function s(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):i(t.value).then(a,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-15ec47e8.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var n=function(){function t(t,e){if(t===void 0){t=false}if(e===void 0){e=[]}this._isValid=t;this._errors=e}Object.defineProperty(t.prototype,"errors",{get:function(){return this._errors},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"isValid",{get:function(){return this._isValid},enumerable:true,configurable:true});t.prototype.hasErrors=function(){return this._errors.length>0};return t}();var i=function(){function t(){}t.prototype.validate=function(t){var e=this.getErrorsForValue(t);return new n(e.length===0,e)};t.prototype.getErrorsForValue=function(t){var e=[];if(""===t){e.push("Password cannot be empty")}if(false===/[A-Z]+/.test(t)){e.push("Password must contain at least one uppercase letter")}if(false===/[0-9]+/.test(t)){e.push("Password must contain at least one number")}return e};return t}();var o=t("validated_password_input",function(){function t(t){e(this,t);this.service=new i;this.name="name";this.placeholder="Enter your password";this.value=""}t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.state=this.service.validate(this.value);return[2,this.state.isValid]}))}))};t.prototype.componentWillLoad=function(){this.state=new n};t.prototype.handleKeyUp=function(t){var e=t.target;this.value=e.value;this.isValid()};t.prototype.renderFeedbackFragment=function(){if(this.state.hasErrors()){return r("ul",{class:"errors"},this.state.errors.map((function(t){return r("li",null,t)})))}};t.prototype.render=function(){var t=this;return r("div",{class:this.state.hasErrors()?"has-errors":""},r("label",{htmlFor:this.name},"Password"),r("input",{type:"password",name:this.name,placeholder:this.placeholder,onKeyUp:function(e){return t.handleKeyUp(e)}}),this.renderFeedbackFragment())};Object.defineProperty(t,"style",{get:function(){return":host{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:16px;line-height:32px;color:#333}label{padding:0 15px}.has-errors input{border:1px solid red}.errors{color:red}"},enumerable:true,configurable:true});return t}())}}}));