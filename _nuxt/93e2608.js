(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{321:function(t){t.exports=JSON.parse('[{"key":"curated","displayName":"Curated Livestream","streams":["https://www.youtube.com/embed/2i54dkv0j0M?&autoplay=1","https://player.twitch.tv/?channel=insomniac&parent=zsoulweaver.github.io"],"thumbnail":"https://i.ytimg.com/vi/2i54dkv0j0M/hqdefault_live.jpg"},{"key":"cosmicmeadow","displayName":"cosmicMEADOW","streams":["https://www.youtube.com/embed/jbIgWbhmoiE?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/jbIgWbhmoiE/hqdefault_live.jpg"},{"key":"circuitgrounds","displayName":"circuitGROUNDS","streams":["https://www.youtube.com/embed/UlvahMG-VAY?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/UlvahMG-VAY/hqdefault_live.jpg"},{"key":"kineticfield","displayName":"kineticFIELD","streams":["https://www.youtube.com/embed/KIEoXAxjthQ?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/KIEoXAxjthQ/hqdefault_live.jpg"},{"key":"basspod","displayName":"bassPOD","streams":["https://www.youtube.com/embed/qGycwZ2eNeI?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/qGycwZ2eNeI/hqdefault_live.jpg"},{"key":"neongarden","displayName":"neonGARDEN","streams":["https://www.youtube.com/embed/gyjQ4mnYx-g?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/gyjQ4mnYx-g/hqdefault.jpg"},{"key":"wasteland","displayName":"wasteLAND","streams":["https://www.youtube.com/embed/7km46x1q11U?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/7km46x1q11U/hqdefault.jpg"},{"key":"quantumvalley","displayName":"quantumVALLEY","streams":["https://www.youtube.com/embed/6tY027T96QU?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/6tY027T96QU/hqdefault.jpg"},{"key":"stereobloom","displayName":"stereoBLOOM","streams":["https://www.youtube.com/embed/ZMgyVMnORvw?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/ZMgyVMnORvw/hqdefault.jpg"}]')},323:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("42efd051",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r(323)},327:function(t,e,r){var n=r(55)(!1);n.push([t.i,".streamList__stream[data-v-eb29cf06]{display:flex;flex-wrap:wrap;padding:1rem;border-radius:.2rem;background:var(--color-background-alt)}.streamList__stream[data-v-eb29cf06]:not(:last-child){margin-bottom:1rem}.streamList__image[data-v-eb29cf06]{width:10rem;min-width:10rem;border-radius:.5rem;overflow:hidden;margin-right:1rem}@media screen and (max-width:1000px){.streamList__image[data-v-eb29cf06]{display:none}}.streamList__image img[data-v-eb29cf06]{width:100%;height:100%;transform:scale(1.4)}.streamList__name[data-v-eb29cf06]{margin:0 0 1rem}.streamList__actions[data-v-eb29cf06]{display:flex;flex-wrap:wrap}.streamList__button[data-v-eb29cf06]{border-radius:.25rem;background:var(--color-button);color:#fff;text-decoration:none;padding:.75rem 2rem;font-weight:600;margin-top:.5rem}.streamList__button[data-v-eb29cf06]:not(:last-child){margin-right:.5rem}.streamList__currentArtist[data-v-eb29cf06]{margin-bottom:.5rem}.streamList__currentArtist span[data-v-eb29cf06]{font-weight:600}",""]),t.exports=n},330:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("580fa967",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";r.r(e);var n=r(17),m=r(321),o=r(120),l=Object(n.b)({setup:function(){var t=Object(n.j)(),e=Object(n.a)((function(){return t.state.event.currentlyPlaying}));return{schedule:o,streams:m,currentlyPlaying:e}}}),c=(r(326),r(28)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"streamList"},t._l(t.streams,(function(e){return r("div",{key:e.key,staticClass:"streamList__stream"},[r("div",{staticClass:"streamList__image"},[r("img",{attrs:{src:e.thumbnail,alt:""}})]),t._v(" "),r("div",[r("h1",{staticClass:"streamList__name"},[t._v("\n        "+t._s(e.displayName)+"\n      ")]),t._v(" "),void 0!==t.currentlyPlaying[e.key]?r("p",{staticClass:"streamList__currentArtist"},[t._v("\n        Currently playing: "),r("span",[t._v(t._s(t.currentlyPlaying[e.key]||"Unknown"))])]):t._e(),t._v(" "),r("div",{staticClass:"streamList__actions"},[t._l(e.streams,(function(n,m){return r("nuxt-link",{key:n,staticClass:"streamList__button",attrs:{to:"/watch/"+e.key+"/"+m}},[t._v("\n          Watch\n        ")])})),t._v(" "),void 0!==t.schedule[e.key]?r("nuxt-link",{staticClass:"streamList__button",attrs:{to:"/schedule/"+e.key}},[t._v("\n          Schedule\n        ")]):t._e()],2)])])})),0)}),[],!1,null,"eb29cf06",null);e.default=component.exports},337:function(t,e,r){"use strict";r(330)},338:function(t,e,r){var n=r(55)(!1);n.push([t.i,".index[data-v-62e8d648]{padding:2rem}.index__link[data-v-62e8d648]{color:#fff}",""]),t.exports=n},342:function(t,e,r){"use strict";r.r(e);r(337);var n=r(28),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index"},[r("h1",[t._v("Welcome to EDC Las Vegas 2021")]),t._v(" "),t._m(0),t._v(" "),r("StreamList")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    Site Designed by\n    "),r("a",{staticClass:"index__link",attrs:{href:"https://twitter.com/zSoulweaver",target:"_blank"}},[t._v("Soul")]),t._v("\n    , Hope you enjoy <3\n  ")])}],!1,null,"62e8d648",null);e.default=component.exports;installComponents(component,{StreamList:r(332).default})}}]);