(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{321:function(t){t.exports=JSON.parse('[{"key":"curated","displayName":"Curated Livestream","streams":["https://www.youtube.com/embed/2i54dkv0j0M?&autoplay=1","https://player.twitch.tv/?channel=insomniac&parent=zsoulweaver.github.io"],"thumbnail":"https://i.ytimg.com/vi/2i54dkv0j0M/hqdefault_live.jpg"},{"key":"cosmicmeadow","displayName":"cosmicMEADOW","streams":["https://www.youtube.com/embed/jbIgWbhmoiE?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/jbIgWbhmoiE/hqdefault_live.jpg"},{"key":"circuitgrounds","displayName":"circuitGROUNDS","streams":["https://www.youtube.com/embed/UlvahMG-VAY?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/UlvahMG-VAY/hqdefault_live.jpg"},{"key":"kineticfield","displayName":"kineticFIELD","streams":["https://www.youtube.com/embed/KIEoXAxjthQ?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/KIEoXAxjthQ/hqdefault_live.jpg"},{"key":"basspod","displayName":"bassPOD","streams":["https://www.youtube.com/embed/qGycwZ2eNeI?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/qGycwZ2eNeI/hqdefault_live.jpg"},{"key":"neongarden","displayName":"neonGARDEN","streams":["https://www.youtube.com/embed/gyjQ4mnYx-g?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/gyjQ4mnYx-g/hqdefault.jpg"},{"key":"wasteland","displayName":"wasteLAND","streams":["https://www.youtube.com/embed/7km46x1q11U?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/7km46x1q11U/hqdefault.jpg"},{"key":"quantumvalley","displayName":"quantumVALLEY","streams":["https://www.youtube.com/embed/6tY027T96QU?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/6tY027T96QU/hqdefault.jpg"},{"key":"stereobloom","displayName":"stereoBLOOM","streams":["https://www.youtube.com/embed/ZMgyVMnORvw?&autoplay=1"],"thumbnail":"https://i.ytimg.com/vi/ZMgyVMnORvw/hqdefault.jpg"}]')},322:function(t,e,o){var content=o(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(56).default)("1cb82a7e",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";o(322)},325:function(t,e,o){var n=o(55)(!1);n.push([t.i,".quickStage[data-v-532de228]{position:absolute;display:flex;flex-wrap:wrap;z-index:10;top:0;left:1rem;opacity:0;transition:all .2s ease}.quickStage[data-v-532de228]:hover{opacity:1}@media screen and (max-width:800px){.quickStage[data-v-532de228]{display:none}}.quickStage__stage[data-v-532de228]{display:block;height:2.5rem;padding:0 1rem;border-top:none;line-height:2.5rem;color:#fff;background:var(--color-background);border-radius:0 0 .5rem .5rem;text-decoration:none;font-weight:600;transition:all .2s ease}.quickStage__stage[data-v-532de228]:hover{background:var(--color-button)}.quickStage__stage[data-v-532de228]:not(:last-child){margin-right:.25rem}",""]),t.exports=n},331:function(t,e,o){"use strict";o.r(e);var n=o(17),l=o(321),m=Object(n.b)({setup:function(){var t=Object(n.j)(),e=Object(n.a)((function(){return t.state.event.currentlyPlaying}));return{streams:l,currentlyPlaying:e}}}),r=(o(324),o(28)),component=Object(r.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"quickStage"},[t._l(t.streams,(function(e){return t._l(e.streams,(function(n,l){return o("nuxt-link",{key:n,staticClass:"quickStage__stage",attrs:{to:"/watch/"+e.key+"/"+l}},[t._v("\n      "+t._s(t.currentlyPlaying[e.key]||e.displayName+(l>=1?" ("+l+")":""))+"\n    ")])}))}))],2)}),[],!1,null,"532de228",null);e.default=component.exports}}]);