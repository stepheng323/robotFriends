(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=(a(24),a(25),a(6)),i=a.n(s),l=a(9),m=(a(27),function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=180x200"),alt:"robots"}),r.a.createElement("div",{className:"user-info"},r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))}),u=a(7),h=function(e){var t=e.robots.map((function(e){return r.a.createElement(u.b,{to:"/robot/".concat(e.id)},r.a.createElement(m,{key:e.id,id:e.id,name:e.name,email:e.email}))}));return r.a.createElement("div",{className:"cardlist"},t)},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"input",type:"search",placeholder:"Search Robots",onChange:t}))},p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),m=s[0],u=s[1];Object(n.useEffect)((function(){p()}),[]);var p=function(){var e,t;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=a.sent,a.next=5,i.a.awrap(e.json());case 5:t=a.sent,c(t);case 7:case"end":return a.stop()}}))},b=a.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Robot Friends"),r.a.createElement(d,{searchChange:function(e){u(e.target.value)}}),r.a.createElement(h,{robots:b}))},b=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(l.a)(a,2),o=c[0],s=c[1],m=Object(n.useState)(""),h=Object(l.a)(m,2),d=h[0],p=h[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var e,a,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.params.id,r.next=3,i.a.awrap(fetch("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:return a=r.sent,r.next=6,i.a.awrap(a.json());case 6:n=r.sent,p("https://robohash.org/".concat(e,"?size=200x200")),s(n);case 9:case"end":return r.stop()}}))},f=o.name,E=o.username,v=o.email,w=o.phone,y=o.website;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/"},r.a.createElement("h1",{className:"header"},"Robot Friends")),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"detailsHeader"},r.a.createElement("h2",null,"Robot Friends")),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:d,alt:"robots"})),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,f),r.a.createElement("p",null,"My nickname is ",E," my email is ",v," and phone is ",w,". i am a robot from the future, i have come to teach you certain things about the universe. you can call me on my phone or visit my website ",y,". Dont tell anyone about me, i am the only surviving robot in my clan"),r.a.createElement(u.b,null,r.a.createElement("button",{className:"btn"},"Visit website"))))))},f=a(5),E=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{path:"/",exact:!0,component:p}),r.a.createElement(f.a,{path:"/robot/:id",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c4f426d6.chunk.js.map