(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{293:function(t){t.exports=JSON.parse('[{"key":"cm","displayName":"cosmicMEADOW","streams":["https://www.youtube.com/embed/1JXa7iYnyi0?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/1JXa7iYnyi0/hqdefault_live.jpg"},{"key":"cg","displayName":"circuitGROUNDS","streams":["https://www.youtube.com/embed/slYmVzlJuyc?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/slYmVzlJuyc/hqdefault_live.jpg"},{"key":"kf","displayName":"kineticFIELD","streams":["https://www.youtube.com/embed/xyzMGR8OFFE?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/xyzMGR8OFFE/hqdefault_live.jpg"},{"key":"bp","displayName":"bassPOD","streams":["https://www.youtube.com/embed/aHFc7ARpDFY?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/aHFc7ARpDFY/hqdefault_live.jpg"}]')},294:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("0d86f333",content,!0,{sourceMap:!1})},295:function(t,e,r){"use strict";r(294)},296:function(t,e,r){var n=r(45)(!1);n.push([t.i,".streamList__stream[data-v-0c63082e]{display:flex;padding:1rem;border-radius:.2rem;background:var(--color-background-alt)}.streamList__stream[data-v-0c63082e]:not(:last-child){margin-bottom:1rem}.streamList__image[data-v-0c63082e]{width:100%;max-width:15rem;border-radius:.5rem;overflow:hidden;margin-right:1rem}.streamList__image img[data-v-0c63082e]{width:100%;height:100%;transform:scale(1.4)}.streamList__name[data-v-0c63082e]{margin:0 0 1rem}.streamList__watchButton[data-v-0c63082e]{display:inline-block;border-radius:.25rem;background:var(--color-button);color:#fff;text-decoration:none;padding:1rem 2rem}",""]),t.exports=n},298:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("26bc9097",content,!0,{sourceMap:!1})},299:function(t,e,r){"use strict";r.r(e);var n=r(44),c=r(293),l=Object(n.b)({setup:function(){return{streams:c}}}),m=(r(295),r(32)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"streamList"},t._l(t.streams,(function(e){return r("div",{key:e.key,staticClass:"streamList__stream"},[r("div",{staticClass:"streamList__image"},[r("img",{attrs:{src:e.thumbnail,alt:""}})]),t._v(" "),r("div",[r("h1",{staticClass:"streamList__name"},[t._v("\n        "+t._s(e.displayName)+"\n      ")]),t._v(" "),r("nuxt-link",{staticClass:"streamList__watchButton",attrs:{to:"/watch/"+e.key}},[t._v("\n        Watch\n      ")])],1)])})),0)}),[],!1,null,"0c63082e",null);e.default=component.exports},302:function(t,e,r){"use strict";r(298)},303:function(t,e,r){var n=r(45)(!1);n.push([t.i,".index[data-v-609b7ebf]{padding:2rem}",""]),t.exports=n},305:function(t,e,r){"use strict";r.r(e);r(302);var n=r(32),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index"},[e("StreamList")],1)}),[],!1,null,"609b7ebf",null);e.default=component.exports;installComponents(component,{StreamList:r(299).default})}}]);