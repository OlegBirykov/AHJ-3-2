!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=1)}([function(e,t,s){},function(e,t,s){"use strict";s.r(t);s(0);class n{constructor(e,t){this.name=e,this.callback=t,this.createTask()}createTask(){this.element=document.createElement("li"),this.element.classList.add("task"),this.element.innerHTML=`\n      <p class="task-name">\n        ${this.name}\n      </p>\n      <p class="check-box">\n      </p>\n    `,this.checkBox=this.element.querySelector(".check-box"),this.checkBox.addEventListener("click",()=>{this.checkBox.textContent="V"===this.checkBox.textContent?"":"V",this.callback()})}get pinned(){return"V"===this.checkBox.textContent}}new class{constructor(e){this.form=e.querySelector("form"),this.filterText=e.querySelector(".filter-text"),this.filterError=e.querySelector(".filter-error"),this.pinnedTasks=e.querySelector(".pinned-tasks .tasks"),this.noPinnedTasks=e.querySelector(".pinned-tasks .no-tasks"),this.allTasks=e.querySelector(".all-tasks .tasks"),this.noAllTasks=e.querySelector(".all-tasks .no-tasks")}init(){this.form.addEventListener("submit",e=>this.onSubmit(e)),this.filterText.addEventListener("input",()=>this.onInput()),this.tasks=[],this.redraw()}redraw(){var e,t;this.pinnedTasks.innerHTML="",this.allTasks.innerHTML="",(e=this.tasks,t=this.filterText.value,e.filter(e=>e.pinned||!e.name.toLowerCase().indexOf(t.toLowerCase()))).forEach(e=>{e.pinned?this.pinnedTasks.appendChild(e.element):this.allTasks.appendChild(e.element)}),this.pinnedTasks.innerHTML?this.noPinnedTasks.classList.remove("show"):this.noPinnedTasks.classList.add("show"),this.allTasks.innerHTML?this.noAllTasks.classList.remove("show"):this.noAllTasks.classList.add("show")}onSubmit(e){e.preventDefault(),this.filterText.value?(this.tasks.push(new n(this.filterText.value,()=>this.onClick())),this.filterText.value="",this.filterError.classList.remove("show"),this.redraw()):this.filterError.classList.add("show")}onInput(){this.redraw()}onClick(){this.redraw()}}(document.querySelector(".wrapper")).init()}]);