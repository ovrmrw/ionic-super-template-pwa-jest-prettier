webpackJsonp([13],{136:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3);var a=n(106),o=function(){function t(t){this.http=t,this.url="https://example.com/api/v1"}return t.prototype.get=function(t,e,n){if(n||(n={params:new a.g}),e){n.params=new a.g;for(var o in e)n.params=n.params.set(o,e[o])}return this.http.get(this.url+"/"+t,n)},t.prototype.post=function(t,e,n){return this.http.post(this.url+"/"+t,e,n)},t.prototype.put=function(t,e,n){return this.http.put(this.url+"/"+t,e,n)},t.prototype.delete=function(t,e){return this.http.delete(this.url+"/"+t,e)},t.prototype.patch=function(t,e,n){return this.http.patch(this.url+"/"+t,e,n)},t}()},153:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3);var a=n(289),o=(n.n(a),n(136),function(){function t(t){this.api=t}return t.prototype.login=function(t){var e=this,n=this.api.post("login",t).share();return n.subscribe(function(t){"success"==t.status&&e._loggedIn(t)},function(t){console.error("ERROR",t)}),n},t.prototype.signup=function(t){var e=this,n=this.api.post("signup",t).share();return n.subscribe(function(t){"success"==t.status&&e._loggedIn(t)},function(t){console.error("ERROR",t)}),n},t.prototype.logout=function(){this._user=null},t.prototype._loggedIn=function(t){this._user=t.user},t}())},173:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=173},200:function(t,e,n){function a(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/cards/cards.module.ngfactory":[291,9],"../pages/content/content.module.ngfactory":[292,8],"../pages/item-create/item-create.module.ngfactory":[293,3],"../pages/item-detail/item-detail.module.ngfactory":[294,7],"../pages/list-master/list-master.module.ngfactory":[295,6],"../pages/login/login.module.ngfactory":[296,2],"../pages/menu/menu.module.ngfactory":[297,12],"../pages/search/search.module.ngfactory":[298,5],"../pages/settings/settings.module.ngfactory":[299,1],"../pages/signup/signup.module.ngfactory":[300,0],"../pages/tabs/tabs.module.ngfactory":[301,11],"../pages/tutorial/tutorial.module.ngfactory":[303,4],"../pages/welcome/welcome.module.ngfactory":[302,10]};a.keys=function(){return Object.keys(o)},a.id=200,t.exports=a},228:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return i}),n.d(e,"e",function(){return r});var a="TutorialPage",o="TabsPage",l="ListMasterPage",i="SearchPage",r="SettingsPage"},231:function(t,e,n){"use strict";function a(t){return new _.a(t,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function o(t){return r._21(0,[(t()(),r.Z(0,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,e,n){var a=!0,o=t.component;if("click"===e){a=!1!==r._13(t,6).close()&&a}if("click"===e){a=!1!==o.openPage(t.context.$implicit)&&a}return a},F.b,F.a)),r.Y(1,1097728,null,3,H.a,[B.a,Y.a,r.j,r.z,[2,I.a]],null,null),r._17(335544320,4,{contentLabel:0}),r._17(603979776,5,{_buttons:1}),r._17(603979776,6,{_icons:1}),r.Y(5,16384,null,0,L.a,[],null,null),r.Y(6,16384,null,0,O.a,[D.a],{menuClose:[0,"menuClose"]},null),(t()(),r._19(7,2,["\n          ","\n        "]))],function(t,e){t(e,6,0,"")},function(t,e){t(e,7,0,e.context.$implicit.title)})}function l(t){return r._21(0,[r._17(402653184,1,{nav:0}),(t()(),r.Z(1,0,null,null,28,"ion-menu",[["role","navigation"]],null,null,null,z.b,z.a)),r._16(6144,null,R.a,null,[K.a]),r.Y(3,245760,null,2,K.a,[D.a,r.j,Y.a,Z.a,r.z,x.a,G.l,A.a,W.a],{content:[0,"content"]},null),r._17(335544320,2,{menuContent:0}),r._17(335544320,3,{menuNav:0}),(t()(),r._19(-1,0,["\n    "])),(t()(),r.Z(7,0,null,0,10,"ion-header",[],null,null,null,null,null)),r.Y(8,16384,null,0,X.a,[Y.a,r.j,r.z,[2,q.a]],null,null),(t()(),r._19(-1,null,["\n      "])),(t()(),r.Z(10,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,U.b,U.a)),r.Y(11,49152,null,0,V.a,[Y.a,r.j,r.z],null,null),(t()(),r._19(-1,3,["\n        "])),(t()(),r.Z(13,0,null,3,2,"ion-title",[],null,null,null,J.b,J.a)),r.Y(14,49152,null,0,$.a,[Y.a,r.j,r.z,[2,V.a],[2,Q.a]],null,null),(t()(),r._19(-1,0,["Pages"])),(t()(),r._19(-1,3,["\n      "])),(t()(),r._19(-1,null,["\n    "])),(t()(),r._19(-1,0,["\n\n    "])),(t()(),r.Z(19,0,null,0,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,tt.b,tt.a)),r.Y(20,4374528,[[2,4]],0,et.a,[Y.a,Z.a,A.a,r.j,r.z,W.a,x.a,r.u,[2,q.a],[2,nt.a]],null,null),(t()(),r._19(-1,1,["\n      "])),(t()(),r.Z(22,0,null,1,5,"ion-list",[],null,null,null,null,null)),r.Y(23,16384,null,0,at.a,[Y.a,r.j,r.z,Z.a,G.l,A.a],null,null),(t()(),r._19(-1,null,["\n        "])),(t()(),r.U(16777216,null,null,1,null,o)),r.Y(26,802816,null,0,ot.h,[r.I,r.F,r.p],{ngForOf:[0,"ngForOf"]},null),(t()(),r._19(-1,null,["\n      "])),(t()(),r._19(-1,1,["\n    "])),(t()(),r._19(-1,0,["\n\n  "])),(t()(),r._19(-1,null,["\n  "])),(t()(),r.Z(31,0,null,null,2,"ion-nav",[],null,null,null,lt.b,lt.a)),r._16(6144,null,R.a,null,[it.a]),r.Y(33,4374528,[[1,4],["content",4]],0,it.a,[[2,q.a],[2,nt.a],W.a,Y.a,Z.a,r.j,r.u,r.z,r.i,G.l,rt.a,[2,st.a],A.a,r.k],{root:[0,"root"]},null)],function(t,e){var n=e.component;t(e,3,0,r._13(e,33));t(e,26,0,n.pages);t(e,33,0,n.rootPage)},function(t,e){t(e,10,0,r._13(e,11)._sbPadding);t(e,19,0,r._13(e,20).statusbarPadding,r._13(e,20)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var i=n(36),r=n(0),s=(n(3),n(106)),u=n(145),c=n(65),g=n(66),p=n(110),f=n(83),m=n(283),d=(n(137),n(88)),_=n(61),h=n(228),y=function(){function t(t,e,n,a,o,l){var i=this;this.translate=t,this.config=a,this.statusBar=o,this.splashScreen=l,this.rootPage=h.a,this.pages=[{title:"Tutorial",component:"TutorialPage"},{title:"Welcome",component:"WelcomePage"},{title:"Tabs",component:"TabsPage"},{title:"Cards",component:"CardsPage"},{title:"Content",component:"ContentPage"},{title:"Login",component:"LoginPage"},{title:"Signup",component:"SignupPage"},{title:"Master Detail",component:"ListMasterPage"},{title:"Menu",component:"MenuPage"},{title:"Settings",component:"SettingsPage"},{title:"Search",component:"SearchPage"}],e.ready().then(function(){i.statusBar.styleDefault(),i.splashScreen.hide()}),this.initTranslate()}return t.prototype.initTranslate=function(){var t=this;this.translate.setDefaultLang("en");var e=this.translate.getBrowserLang();if(e)if("zh"===e){var n=this.translate.getBrowserCultureLang();n.match(/-CN|CHS|Hans/i)?this.translate.use("zh-cmn-Hans"):n.match(/-TW|CHT|Hant/i)&&this.translate.use("zh-cmn-Hant")}else this.translate.use(this.translate.getBrowserLang());else this.translate.use("en");this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(e){t.config.set("ios","backButtonText",e.BACK_BUTTON_TEXT)})},t.prototype.openPage=function(t){this.nav.setRoot(t.component)},t}(),b=function(t){return new m.a(t,"./assets/i18n/",".json")},P=function(){return function(){}}(),v=n(50),C=n(217),w=n(218),T=n(219),S=n(220),k=n(221),M=n(222),j=n(223),E=n(224),N=n(225),F=n(141),H=n(16),B=n(14),Y=n(1),I=n(40),L=n(60),O=n(91),D=n(23),z=n(229),R=n(29),K=n(62),Z=n(4),x=n(25),G=n(6),A=n(10),W=n(9),X=n(85),q=n(5),U=n(290),V=n(35),J=n(227),$=n(59),Q=n(34),tt=n(226),et=n(22),nt=n(20),at=n(44),ot=n(12),lt=n(230),it=n(46),rt=n(28),st=n(15),ut=n(27),ct=n(96),gt=r.X({encapsulation:2,styles:[],data:{}}),pt=r.V("ng-component",y,function(t){return r._21(0,[(t()(),r.Z(0,0,null,null,1,"ng-component",[],null,null,null,l,gt)),r.Y(1,49152,null,0,y,[ut.a,Z.a,ct.a,Y.a,g.a,c.a],null,null)],null,null)},{},{},[]),ft=n(123),mt=n(18),dt=n(55),_t=n(56),ht=n(58),yt=n(57),bt=n(84),Pt=n(114),vt=n(116),Ct=n(122),wt=n(30),Tt=n(120),St=n(138),kt=n(52),Mt=n(39),jt=n(92),Et=n(72),Nt=n(128),Ft=n(125),Ht=n(89),Bt=n(174),Yt=n(136),It=n(153),Lt=n(216),Ot=n(124),Dt=n(121),zt=n(126),Rt=r.W(P,[v.b],function(t){return r._10([r._11(512,r.i,r.S,[[8,[C.a,w.a,T.a,S.a,k.a,M.a,j.a,E.a,N.a,pt]],[3,r.i],r.s]),r._11(5120,r.r,r._9,[[3,r.r]]),r._11(4608,ot.k,ot.j,[r.r,[2,ot.s]]),r._11(5120,r.b,r._0,[]),r._11(5120,r.p,r._6,[]),r._11(5120,r.q,r._7,[]),r._11(4608,i.c,i.q,[ot.c]),r._11(6144,r.D,null,[i.c]),r._11(4608,i.f,ft.a,[]),r._11(5120,i.d,function(t,e,n,a,o){return[new i.k(t,e),new i.o(n),new i.n(a,o)]},[ot.c,r.u,ot.c,ot.c,i.f]),r._11(4608,i.e,i.e,[i.d,r.u]),r._11(135680,i.m,i.m,[ot.c]),r._11(4608,i.l,i.l,[i.e,i.m]),r._11(6144,r.B,null,[i.l]),r._11(6144,i.p,null,[i.m]),r._11(4608,r.G,r.G,[r.u]),r._11(4608,i.h,i.h,[ot.c]),r._11(4608,i.i,i.i,[ot.c]),r._11(4608,s.i,s.n,[ot.c,r.w,s.l]),r._11(4608,s.o,s.o,[s.i,s.m]),r._11(5120,s.a,function(t){return[t]},[s.o]),r._11(4608,s.k,s.k,[]),r._11(6144,s.j,null,[s.k]),r._11(4608,s.h,s.h,[s.j]),r._11(6144,s.b,null,[s.h]),r._11(5120,s.f,s.p,[s.b,[2,s.a]]),r._11(4608,s.c,s.c,[s.f]),r._11(4608,mt.r,mt.r,[]),r._11(4608,mt.d,mt.d,[]),r._11(5120,dt.b,b,[s.c]),r._11(4608,_t.a,_t.b,[]),r._11(4608,ht.b,ht.a,[]),r._11(4608,yt.b,yt.a,[]),r._11(4608,bt.a,bt.a,[]),r._11(4608,ut.a,ut.a,[bt.a,dt.b,_t.a,ht.b,yt.b,ut.b,ut.c]),r._11(4608,Pt.a,Pt.a,[W.a,Y.a]),r._11(4608,vt.a,vt.a,[W.a,Y.a]),r._11(4608,Ct.a,Ct.a,[]),r._11(4608,B.a,B.a,[]),r._11(4608,wt.a,wt.a,[Z.a]),r._11(4608,x.a,x.a,[Y.a,Z.a,r.u,A.a]),r._11(4608,Tt.a,Tt.a,[W.a,Y.a]),r._11(5120,ot.f,St.c,[ot.q,[2,ot.a],Y.a]),r._11(4608,ot.e,ot.e,[ot.f]),r._11(5120,kt.b,kt.d,[W.a,kt.a]),r._11(5120,st.a,st.b,[W.a,kt.b,ot.e,Mt.b,r.i]),r._11(4608,jt.a,jt.a,[W.a,Y.a,st.a]),r._11(4608,Et.a,Et.a,[W.a,Y.a]),r._11(4608,Nt.a,Nt.a,[W.a,Y.a,st.a]),r._11(4608,Ft.a,Ft.a,[Y.a,Z.a,A.a,W.a,G.l]),r._11(4608,Ht.a,Ht.a,[W.a,Y.a]),r._11(4608,rt.a,rt.a,[Z.a,Y.a]),r._11(5120,Bt.a,Bt.c,[Bt.b]),r._11(4608,Yt.a,Yt.a,[s.c]),r._11(4608,d.a,d.a,[]),r._11(4608,It.a,It.a,[Yt.a]),r._11(4608,u.a,u.a,[]),r._11(4608,c.a,c.a,[]),r._11(4608,g.a,g.a,[]),r._11(5120,ct.a,a,[Bt.a]),r._11(512,ot.b,ot.b,[]),r._11(512,r.k,Lt.a,[]),r._11(256,Y.b,{},[]),r._11(1024,Ot.a,Ot.b,[]),r._11(1024,Z.a,Z.b,[i.b,Ot.a,r.u]),r._11(1024,Y.a,Y.c,[Y.b,Z.a]),r._11(512,A.a,A.a,[Z.a]),r._11(512,D.a,D.a,[]),r._11(512,W.a,W.a,[Y.a,Z.a,[2,D.a]]),r._11(512,G.l,G.l,[W.a]),r._11(256,kt.a,{links:[{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-create/item-create.module.ngfactory#ItemCreatePageModuleNgFactory",name:"ItemCreatePage",segment:"item-create",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-detail/item-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"ItemDetailPage",segment:"item-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-master/list-master.module.ngfactory#ListMasterPageModuleNgFactory",name:"ListMasterPage",segment:"list-master",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]}]},[]),r._11(512,r.h,r.h,[]),r._11(512,Dt.a,Dt.a,[r.h]),r._11(1024,Mt.b,Mt.c,[Dt.a,r.o]),r._11(1024,r.c,function(t,e,n,a,o,l,r,s,u,c,g,p,f){return[i.s(t),zt.a(e),Ct.b(n,a),Ft.b(o,l,r,s,u),Mt.d(c,g,p,f)]},[[2,r.t],Y.a,Z.a,A.a,Y.a,Z.a,A.a,W.a,G.l,Y.a,kt.a,Mt.b,r.u]),r._11(512,r.d,r.d,[[2,r.c]]),r._11(131584,r.f,r.f,[r.u,r.T,r.o,r.k,r.i,r.d]),r._11(512,r.e,r.e,[r.f]),r._11(512,i.a,i.a,[[3,i.a]]),r._11(512,s.e,s.e,[]),r._11(512,s.d,s.d,[]),r._11(512,f.a,f.a,[]),r._11(512,mt.p,mt.p,[]),r._11(512,mt.g,mt.g,[]),r._11(512,mt.n,mt.n,[]),r._11(512,St.a,St.a,[]),r._11(512,p.a,p.a,[]),r._11(512,P,P,[]),r._11(256,s.l,"XSRF-TOKEN",[]),r._11(256,s.m,"X-XSRF-TOKEN",[]),r._11(256,ut.c,void 0,[]),r._11(256,ut.b,void 0,[]),r._11(256,v.a,y,[]),r._11(256,ot.a,"/",[]),r._11(256,Bt.b,null,[])])});Object(r.M)(),Object(i.j)().bootstrapModuleFactory(Rt)},61:function(t,e,n){"use strict";n(136);var a=n(96);n(153);n.d(e,"a",function(){return a.a})},88:function(t,e,n){"use strict";n(3),n(0);var a=function(){return function(t){for(var e in t)this[e]=t[e]}}();n.d(e,"a",function(){return o});var o=function(){function t(){this.items=[],this.defaultItem={name:"Burt Bear",profilePic:"assets/img/speakers/bear.jpg",about:"Burt is a Bear."};for(var t=0,e=[{name:"Burt Bear",profilePic:"assets/img/speakers/bear.jpg",about:"Burt is a Bear."},{name:"Charlie Cheetah",profilePic:"assets/img/speakers/cheetah.jpg",about:"Charlie is a Cheetah."},{name:"Donald Duck",profilePic:"assets/img/speakers/duck.jpg",about:"Donald is a Duck."},{name:"Eva Eagle",profilePic:"assets/img/speakers/eagle.jpg",about:"Eva is an Eagle."},{name:"Ellie Elephant",profilePic:"assets/img/speakers/elephant.jpg",about:"Ellie is an Elephant."},{name:"Molly Mouse",profilePic:"assets/img/speakers/mouse.jpg",about:"Molly is a Mouse."},{name:"Paul Puppy",profilePic:"assets/img/speakers/puppy.jpg",about:"Paul is a Puppy."}];t<e.length;t++){this.items.push(new a(e[t]))}}return t.prototype.query=function(t){return t?this.items.filter(function(e){for(var n in t){var a=e[n];if("string"==typeof a&&a.toLowerCase().indexOf(t[n].toLowerCase())>=0)return e;if(a==t[n])return e}return null}):this.items},t.prototype.add=function(t){this.items.push(t)},t.prototype.delete=function(t){this.items.splice(this.items.indexOf(t),1)},t}()},96:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(3),n(110);var a=function(){function t(t,e){this.storage=t,this.SETTINGS_KEY="_settings",this._defaults=e}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(t.settings=e,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(e){t.settings=e})})},t.prototype._mergeDefaults=function(t){for(var e in t)e in this.settings||(this.settings[e]=t[e]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var e in t)this.settings[e]=t[e];return this.save()},t.prototype.setValue=function(t,e){return this.settings[t]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()}},[231]);