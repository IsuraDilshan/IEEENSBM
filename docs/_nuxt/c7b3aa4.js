(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("2f61aa80",content,!0,{sourceMap:!1})},286:function(t,e,o){"use strict";o(22),o(327);var r={data:function(){return{Path:"",NavDrawer:!1,showNavbar:!0,lastScrollPosition:0,BackColor:"#00629B",Menu:[{Name:"Home",To:"/"},{Name:"WIE",To:"/wie"},{Name:"CS",To:"/cs"},{Name:"Events",To:"/events"},{Name:"Volunteer",To:"/volunteer"},{Name:"Blog",To:"/blog"},{Name:"EXCOM",To:"/excom"},{Name:"Membership",To:"/membership"},{Name:"Contact",To:"/contact"}]}},methods:{onScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop;console.log(t),t<0||(t>=135&&(this.showNavbar=!1),t<=115&&(this.showNavbar=!0),this.lastScrollPosition=t)},ChangeColor:function(){console.log(this.$route.name),"wie"===this.$route.name?this.BackColor="#702f8a":"cs"===this.$route.name?this.BackColor="#FFA300":this.BackColor="#00629B"}},mounted:function(){this.Path=this.$route.path.replaceAll("/",""),window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},n=(o(329),o(67)),l=o(127),c=o.n(l),v=o(426),m=o(433),d=o(195),h=o(191),f=o(159),E=o(424),w=o(427),C=o(192),_=o(157),N=o(193),k=o(121),x=o(150),I=o(428),y=o(431),S=o(425),B=o(429),V=o(430),L=o(432),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{class:{WIE:"wie"===t.Path,CS:"cs"===t.Path},attrs:{color:t.BackColor,temporary:"",app:""},model:{value:t.NavDrawer,callback:function(e){t.NavDrawer=e},expression:"NavDrawer"}},[o("v-list",[o("v-list-item",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-img",{attrs:{alt:"NSBM IEEE Student",src:"/Assets/Logos/IEEE_SB_Logo.png","max-width":"128"}})],1)],1),t._v(" "),t._l(t.Menu,(function(e){return o("v-list-item",{key:e.Name,attrs:{to:e.To,link:"",dark:""}},[o("v-list-item-title",{staticStyle:{color:"white"}},[t._v(t._s(e.Name))])],1)}))],2)],1),t._v(" "),o("header",{staticClass:"header"},[o("v-app-bar",{attrs:{"elevate-on-scroll":"",color:t.BackColor,app:"",dense:""}},[t.showNavbar?t._e():o("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(e){return o("v-tab",{key:e.Name,attrs:{to:e.To}},[t._v(t._s(e.Name))])})),1),t._v(" "),t.showNavbar?o("div",[o("v-row",{attrs:{"no-gutters":"",align:"center"}},[o("v-btn",{staticClass:"hidden-md-and-up",attrs:{icon:""},on:{click:function(e){t.NavDrawer=!0}}},[o("v-icon",{attrs:{color:"white"}},[t._v("mdi-menu")])],1),t._v(" "),o("h3",{staticClass:"white--text hidden-sm-and-up text-center"},[t._v("IEEE Student Branch - NSBM")])],1),t._v(" "),o("v-row",{staticClass:"hidden-sm-and-down",attrs:{"no-gutters":""}},[o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org",rel:"noreferrer",target:"_blank"}},[t._v("IEEE.org")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://ieeexplore.ieee.org",rel:"noreferrer"}},[t._v("IEEE "),o("i",[t._v("Xplore")]),t._v(" Digital Library")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://standards.ieee.org",rel:"noreferrer"}},[t._v("IEEE Standards")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://spectrum.ieee.org",rel:"noreferrer"}},[t._v("IEEE Spectrum")]),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/sitemap",rel:"noreferrer"}},[t._v("More Sites")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{staticClass:"IEEENoCaps",attrs:{small:"",text:"",href:"https://www.ieee.org/join"}},[t._v("Join IEEE")])],1)],1):t._e()],1)],1),t._v(" "),o("v-main",{staticClass:"grey lighten-2"},[o("v-card",{staticClass:"rounded-0",attrs:{color:t.BackColor}},[o("v-card-title",{staticClass:"hidden-sm-and-down pt-2"},[o("v-row",{attrs:{"no-gutters":"",justify:"space-between",align:"center"}},[o("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{quality:"96",format:"webp",fit:"contain",height:"64",alt:"Brand Logo",src:"/Assets/Logos/MainLogo.png"}}),t._v(" "),o("nuxt-img",{staticClass:"hidden-sm-and-down",attrs:{alt:"IEEE Logo",quality:"96",format:"webp",fit:"contain",height:"64",src:"/Assets/Logos/IEEE_Logo.png"}})],1)],1),t._v(" "),o("v-tabs",{staticClass:"hidden-sm-and-down",attrs:{"background-color":t.BackColor,dark:"","slider-size":"4"},on:{change:t.ChangeColor}},t._l(t.Menu,(function(e){return o("v-tab",{key:e.Name,attrs:{to:e.To}},[t._v(t._s(e.Name))])})),1)],1),t._v(" "),o("v-card",{staticClass:"rounded-t-0",attrs:{flat:""}},[o("nuxt")],1),t._v(" "),o("v-footer",{attrs:{color:t.BackColor}},[o("v-col",[o("v-row",{attrs:{"no-gutters":"",justify:"center"}},[o("nuxt-img",{attrs:{height:"48",alt:"MainLogo",quality:"96",format:"webp",src:"/Assets/Logos/MainLogo.png"}})],1),t._v(" "),o("v-row",{attrs:{"no-gutters":"",justify:"center"}},[o("v-btn",{staticClass:"ma-1"},[o("v-icon",[t._v("mdi-facebook")])],1),t._v(" "),o("v-btn",{staticClass:"ma-1"},[o("v-icon",[t._v("mdi-instagram")])],1),t._v(" "),o("v-btn",{staticClass:"ma-1"},[o("v-icon",[t._v("mdi-linkedin")])],1)],1),t._v(" "),o("v-row",{attrs:{"no-gutters":"",justify:"center"}},[o("kbd",[t._v("</> by IEEE Computer Society — NSBM")])])],1)],1)],1)],1)}),[],!1,null,"53c1f340",null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:m.a,VBtn:d.a,VCard:h.a,VCardTitle:f.c,VCol:E.a,VFooter:w.a,VIcon:C.a,VImg:_.a,VList:N.a,VListItem:k.a,VListItemTitle:x.a,VMain:I.a,VNavigationDrawer:y.a,VRow:S.a,VSpacer:B.a,VTab:V.a,VTabs:L.a})},291:function(t,e,o){o(292),t.exports=o(293)},329:function(t,e,o){"use strict";o(258)},330:function(t,e,o){var r=o(17)(!1);r.push([t.i,'html{overflow-y:auto}body{font-family:-apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial;margin:0;padding:0;line-height:1.5}.v-tabs-bar{background-color:hsla(0,0%,100%,0)!important;border-color:hsla(0,0%,100%,0)!important}.IEEE{background-color:#00629b!important}.IEEEFont{color:#00629b!important}.WIE{background-color:#702f8a!important}.WIEFont{color:#702f8a!important}.CS{background-color:#ffa300!important}.CSFont{color:#ffa300!important}.IEEENoCaps{text-transform:none!important;font-size:13px!important;color:#fff!important}.IEEEHand{cursor:pointer!important}.layout{max-width:760px;margin:0 auto;padding-left:20px;padding-right:20px}.header{display:flex;justify-content:space-between;align-items:center}.nav__link{margin-left:20px}',""]),t.exports=r},80:function(t,e,o){"use strict";var r={data:function(){return{}}},n=o(67),l=o(127),c=o.n(l),v=o(424),m=o(434),d=o(425),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-col",[e("v-row",{attrs:{justify:"center","no-gutters":""}},[e("nuxt-img",{attrs:{quality:"96",format:"png",fit:"contain",sizes:"sm:75vw md:50vw lg:400px",src:"/Assets/Other/404.png"}})],1)],1)],1)}),[],!1,null,"48a92b9a",null);e.a=component.exports;c()(component,{VCol:v.a,VContainer:m.a,VRow:d.a})}},[[291,14,1,15]]]);