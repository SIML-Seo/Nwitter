(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(43),s=n.n(r),i=n(12),u=n(30),o=n(13),j=n(0),l=n.n(j),b=n(3),O=n(44),d=n(47),p=n(25),f=(n(60),n(40),n(19)),m=n(26),x=Object(O.a)({apiKey:"AIzaSyAHVEd9Acj76S7KkDm6_nXzplN1AuEIDko",authDomain:"nwitter-4e2b8.firebaseapp.com",databaseURL:"https://nwitter-4e2b8-default-rtdb.firebaseio.com",projectId:"nwitter-4e2b8",storageBucket:"nwitter-4e2b8.appspot.com",messagingSenderId:"989179895666",appId:"1:989179895666:web:7139c5856837c2ddb5c7eb",measurementId:"G-51B4359MYC"}),h=x,v=(Object(d.a)(x),Object(p.d)()),g=Object(f.f)(),w=Object(m.c)(),y=n(9),N=function(){var e=Object(c.useState)([""]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([""]),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(!0),O=Object(i.a)(j,2),d=O[0],f=O[1],m=Object(c.useState)(""),x=Object(i.a)(m,2),h=x[0],g=x[1],w=function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,Object(p.c)(v,n,u);case 5:c=e.sent,e.next=11;break;case 8:return e.next=10,Object(p.e)(v,n,u);case 10:c=e.sent;case 11:console.log(c),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&o(c)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:w,className:"container",children:[Object(y.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:N,className:"authInput"}),Object(y.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:N,className:"authInput"}),Object(y.jsx)("input",{type:"submit",className:"authInput authSubmit",value:d?"Create Account":"SignIn"}),h&&Object(y.jsx)("span",{className:"authError",children:h})]}),Object(y.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:d?"SignIn":"Create Account"})]})},k=n(24),I=n(31),S=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new p.b:"github"===n&&(c=new p.a),e.next=4,Object(p.f)(v,c);case 4:a=e.sent,console.log(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"authContainer",children:[Object(y.jsx)(k.a,{icon:I.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(y.jsx)(N,{}),Object(y.jsxs)("div",{className:"authBtns",children:[Object(y.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(y.jsx)(k.a,{icon:I.b})]}),Object(y.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(y.jsx)(k.a,{icon:I.a})]})]})]})},C=n(46),A=n(27),F=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(f.d)(g,"nweets","".concat(t.id)),r=Object(c.useState)(!1),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(t.text),O=Object(i.a)(j,2),d=O[0],p=O[1],x=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,Object(f.c)(a);case 4:return e.next=6,Object(m.a)(Object(m.d)(w,t.attachmentUrl));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return o((function(e){return!e}))},v=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(f.j)(a,{text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"nweet",children:u?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("form",{onSubmit:v,className:"container nweetEdit",children:[Object(y.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,autoFocus:!0,required:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(y.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(y.jsx)("span",{onClick:h,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(y.jsx)("img",{src:t.attachmentUrl}),n&&Object(y.jsxs)("div",{class:"nweet__actions",children:[Object(y.jsx)("span",{onClick:x,children:Object(y.jsx)(k.a,{icon:A.d})}),Object(y.jsx)("span",{onClick:h,children:Object(y.jsx)(k.a,{icon:A.a})})]})]})})},_=n(62),B=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),j=o[0],O=o[1],d=function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),c="",""===j){e.next=12;break}return a=Object(m.d)(w,"".concat(t.uid,"/").concat(Object(_.a)())),e.next=8,Object(m.e)(a,j,"data_url");case 8:return i=e.sent,e.next=11,Object(m.b)(i.ref);case 11:c=e.sent;case 12:return u={text:r,createAt:Date.now(),createId:t.uid,attachmentUrl:c},e.next=15,Object(f.a)(Object(f.b)(g,"nweets"),u);case 15:s(""),O("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(y.jsxs)("div",{className:"factoryInput__container",children:[Object(y.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(y.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(y.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(y.jsx)("span",{children:"Add photos"}),Object(y.jsx)(k.a,{icon:A.b})]}),Object(y.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(y.jsxs)("div",{className:"factoryForm__attachment",children:[Object(y.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(y.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return O("")},children:[Object(y.jsx)("span",{children:"Remove"}),Object(y.jsx)(k.a,{icon:A.c})]})]})]})},U=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=Object(f.i)(Object(f.b)(g,"nweets"),Object(f.h)("createAt","desc"));Object(f.g)(e,(function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(B,{userObj:t}),Object(y.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(y.jsx)(F,{nweetObj:e,isOwner:e.createId===t.uid},e.id)}))})]})},D=function(e){var t=e.userObj,n=e.refreshUser,a=Object(c.useState)(t.displayName),r=Object(i.a)(a,2),s=r[0],u=r[1],j=Object(o.f)(),O=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(f.i)(Object(f.b)(g,"nweets"),Object(f.k)("createId","==",t.uid),Object(f.h)("createAt")),e.next=3,Object(f.e)(n);case 3:e.sent.forEach((function(e){console.log(e.id,"=>",e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var d=function(){var e=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,Object(p.g)(t,{displayName:s});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(y.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},autoFocus:!0,type:"text",placeholder:"Display Name",value:s,className:"formInput"}),Object(y.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(y.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){v.signOut(),j("/"),n()},children:"Log Out"})]})},E=function(e){var t=e.userObj;return Object(y.jsx)("nav",{children:Object(y.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(y.jsx)("li",{children:Object(y.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(y.jsx)(k.a,{icon:I.c,color:"#04AAFF",size:"2x"})})}),Object(y.jsx)("li",{children:Object(y.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(y.jsx)(k.a,{icon:A.e,color:"#04AAFF",size:"2x"}),Object(y.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},z=(n(58),function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(y.jsxs)(u.a,{children:[n&&Object(y.jsx)(E,{userObj:c}),Object(y.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:Object(y.jsx)(o.c,{children:n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(o.a,{exact:!0,path:"/",element:Object(y.jsx)(U,{userObj:c})}),Object(y.jsx)(o.a,{exact:!0,path:"/profile",element:Object(y.jsx)(D,{userObj:c,refreshUser:t})})]}):Object(y.jsx)(o.a,{exact:!0,path:"/",element:Object(y.jsx)(S,{})})})})]})});var L=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(c.useEffect)((function(){v.onAuthStateChanged((function(e){o(e||null),a(!0)}))}),[]),Object(y.jsx)(y.Fragment,{children:n?Object(y.jsx)(z,{refreshUser:function(){var e=v.currentUser;o(Object.assign({},e))},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};console.log(h),s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.cbcc0dbc.chunk.js.map