(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{y0NB:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS");class s{constructor(l,n){this.route=l,this.router=n}ngOnInit(){}goCourse(){this.router.navigate(["../course"],{relativeTo:this.route})}}var i=u("iInd"),r=e.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Firebase real-time database"])),(l()(),e.pb(2,0,null,null,4,"div",[["class","m-3"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["This module is only for Firebase real-time database"])),(l()(),e.pb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["If you want to test it, Click the button"])),(l()(),e.pb(7,0,null,null,0,"input",[["class","btn btn-primary"],["type","submit"],["value","Go to use Firebase"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goCourse()&&e),e}),null,null))],null,null)}function a(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-student-home",[],null,null,null,c,r)),e.ob(1,114688,null,0,s,[i.a,i.k],null,null)],(function(l,n){l(n,1,0)}),null)}var b=e.lb("app-student-home",s,a,{},{},[]),p=u("SVse");class h{constructor(l){this.db=l,this.courseMap=new Map,this.courseRef=l.list("Course"),this.subscription=l.list("Course").valueChanges().subscribe(l=>{this.courses=l}),l.object("/Course/os").valueChanges().subscribe(l=>{this.courseObj=l}),this.db.object("Course").valueChanges().subscribe(l=>{this.allCourses=l}),this.courseRef.snapshotChanges().subscribe(l=>{this.courseMap.clear(),l.forEach(l=>{let n=l.key,u=l.payload.val();this.courseMap.set(JSON.stringify(u),n)})}),this.devices$=l.list("Device").valueChanges()}ngOnDestroy(){this.subscription.unsubscribe()}add(l){this.courseRef.push({name:l.value,teacher:"Dr. add",time:"TT"}),l.value=""}updateBySet(l){let n=this.courseMap.get(JSON.stringify(l));console.log(n),console.log("db.list('Course').snapshotChanges().subscribe"),this.db.object("Course/"+n).set({name:l.name+" _ UPDATE by set"})}updateByUpdate(l){let n=Object.keys(this.allCourses).find(n=>JSON.stringify(this.allCourses[n])===JSON.stringify(l));console.log(n),console.log("this.db.object('Course').valueChanges().subscribe"),this.db.object("Course/"+n).update({name:l.name+" _ UPDATE by update"})}delete(l){let n=this.courseMap.get(JSON.stringify(l));this.db.object("Course/"+n).remove().then(l=>console.log("Deleted!")).catch(l=>console.log("Error!"))}ngOnInit(){}}var d=u("PVcy"),m=e.nb({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),e.Fb(1,null,[" Course: ",", Teacher: ",", Time: "," "])),(l()(),e.pb(2,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateBySet(l.context.$implicit)&&e),e}),null,null)),(l()(),e.Fb(-1,null,["Update by set method (destructive)"])),(l()(),e.pb(4,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateByUpdate(l.context.$implicit)&&e),e}),null,null)),(l()(),e.Fb(-1,null,["Update by update method (non-destructive)"])),(l()(),e.pb(6,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.delete(l.context.$implicit)&&e),e}),null,null)),(l()(),e.Fb(-1,null,["Delete"]))],null,(function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.teacher,n.context.$implicit.time)}))}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.Fb(1,null,[" "," "])),e.Bb(0,p.g,[])],null,(function(l,n){l(n,1,0,e.Gb(n,1,0,e.zb(n,2).transform(n.context.$implicit)))}))}function v(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.ngOnDestroy()&&e),e}),null,null)),(l()(),e.Fb(-1,null,["Go Offline"])),(l()(),e.pb(2,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,f)),e.ob(4,278528,null,0,p.k,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(5,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.Fb(6,null,[" ","\n"])),e.Bb(0,p.g,[]),(l()(),e.pb(8,0,null,null,1,"div",[["class","m-3"]],null,null,null,null,null)),(l()(),e.pb(9,0,[["inputCourse",1]],null,0,"input",[["type","text"]],null,[[null,"keyup.enter"]],(function(l,n,u){var t=!0;return"keyup.enter"===n&&(t=!1!==l.component.add(e.zb(l,9))&&t),t}),null,null)),(l()(),e.pb(10,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,2,null,y)),e.ob(12,278528,null,0,p.k,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Bb(131072,p.b,[e.h])],(function(l,n){var u=n.component;l(n,4,0,u.courses),l(n,12,0,e.Gb(n,12,0,e.zb(n,13).transform(u.devices$)))}),(function(l,n){var u=n.component;l(n,6,0,e.Gb(n,6,0,e.zb(n,7).transform(u.courseObj)))}))}function g(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-course",[],null,null,null,v,m)),e.ob(1,245760,null,0,h,[d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=e.lb("app-course",h,g,{},{},[]);class k{}u.d(n,"StudentFirebaseModuleNgFactory",(function(){return F}));var F=e.mb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,b,C]],[3,e.j],e.v]),e.yb(4608,p.m,p.l,[e.s,[2,p.s]]),e.yb(1073742336,p.c,p.c,[]),e.yb(1073742336,i.o,i.o,[[2,i.t],[2,i.k]]),e.yb(1073742336,k,k,[]),e.yb(1073742336,t,t,[]),e.yb(1024,i.i,(function(){return[[{path:"home",component:s},{path:"course",component:h},{path:"",redirectTo:"home",pathMatch:"full"}]]}),[])])}))}}]);