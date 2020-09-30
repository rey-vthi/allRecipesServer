(this.webpackJsonpallrecipesapp=this.webpackJsonpallrecipesapp||[]).push([[0],{11:function(e,t,a){},18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),s=(a(23),a(11),a(1)),i=function(e){switch(e){case"ALL":return fetch("/api/getAllRecipes").then((function(e){return e.json()}));case"SALAD":return fetch("/api/getAllSalads").then((function(e){return e.json()}));case"JUICE":return fetch("/api/getAllJuice").then((function(e){return e.json()}));case"BREAKFAST":return fetch("/api/getAllBreakFast").then((function(e){return e.json()}));case"LUNCH":return fetch("/api/getAllLunch").then((function(e){return e.json()}))}},m=function(e){return function(e,t){return fetch(e,{method:"POST",body:t})}("/api/addNewRecipe",e)},u=function(){return fetch("/api/isLoggedIn").then((function(e){return e.json()}))},o=function(){return fetch("/api/profile").then((function(e){return e.json()}))},E=function(){return fetch("/api/others").then((function(e){return e.json()}))},p=function(e){return fetch("/api/getRecipe/".concat(e)).then((function(e){return e.json()}))},d=a(4),f=a(2),h=function(e){var t="/api".concat(e.path);return c.a.createElement("div",{className:"recipe"},c.a.createElement("img",{src:t,className:"recipe-image",alt:"NA"}),c.a.createElement("div",{className:"content"},c.a.createElement(d.b,{to:"recipe/".concat(e.id)},c.a.createElement("h2",null,e.name)),c.a.createElement("span",null,e.description),c.a.createElement("p",null,"By ",c.a.createElement("span",{className:"by-name"},e.by))))},v=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],r=a[1];Object(n.useEffect)((function(){i(e.category).then(r)}),[e]);var m=l.map((function(e,t){return c.a.createElement(h,{name:e.name,description:e.description,key:t,by:e.by,id:e.recipeId,path:e.path})}));return c.a.createElement("div",{className:"recipes"},m)},g=function(e){return c.a.createElement("div",null,c.a.createElement("img",{className:e.className,src:e.path,alt:"NA"}))},b=function(e){return c.a.createElement("div",{className:"left-header"},c.a.createElement(d.b,{to:"/"},c.a.createElement(g,{className:"logo",path:e.path})),c.a.createElement("div",null,c.a.createElement("h2",{style:{color:"orange",marginTop:"3vw"}},e.name)))},N=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement(b,{path:"/logo.png",className:"app-name",name:"AllRecipes"}),c.a.createElement("div",{className:"right-panel"},c.a.createElement(d.b,{to:"/recipes/add"},c.a.createElement(g,{className:"logo",path:"/addIcon.png"})),c.a.createElement(d.b,{to:"/user/profile"},c.a.createElement(g,{className:"logo",path:"/profile.png"}))))},j=function(){return c.a.createElement("div",{className:"menu-bar"},c.a.createElement("div",{className:"menu"},c.a.createElement(d.c,{exact:!0,to:"/",activeClassName:"selected",className:"not-selected"},"All")),c.a.createElement("div",{className:"menu"},c.a.createElement(d.c,{to:"/recipes/salad",activeClassName:"selected",className:"not-selected"},"Salad")),c.a.createElement("div",{className:"menu"},c.a.createElement(d.c,{to:"/recipes/juice",activeClassName:"selected",className:"not-selected"},"Juice")),c.a.createElement("div",{className:"menu"},c.a.createElement(d.c,{to:"/recipes/breakfast",activeClassName:"selected",className:"not-selected"},"Breakfast")),c.a.createElement("div",{className:"menu"},c.a.createElement(d.c,{to:"/recipes/lunch",activeClassName:"selected",className:"not-selected"},"Lunch")))},O=function(e){return c.a.createElement("div",{className:"others-list"},c.a.createElement("div",null,c.a.createElement("img",{src:e.user.url,className:"other-user-image",alt:"NA"})),c.a.createElement("div",null,c.a.createElement("span",null,e.user.name)),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){}},e.user.followingStatus?"UNFOLLOW":"FOLLOW")))},y=function(e){var t=e.info.map((function(e,t){return c.a.createElement(O,{key:t,user:e})}));return c.a.createElement("div",null,t)},S=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){o().then(l)}),[]),Object(n.useEffect)((function(){E().then(u)}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"profile-container"},c.a.createElement("div",null,c.a.createElement("img",{src:a.url,className:"profile-img",alt:"NA"})),c.a.createElement("div",{className:"details"},c.a.createElement("h1",null,a.name),c.a.createElement("p",null,"Followers: 0"),c.a.createElement("p",null,"Following: 0"))),c.a.createElement("div",null,c.a.createElement(y,{info:m})))},A=function(e){var t=Object(n.useState)(e.value),a=Object(s.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",{className:"adder"},c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){var t=e.target.value;r(t)},value:l})),c.a.createElement("div",null,c.a.createElement("img",{src:"/addIcon.png",alt:"NA",onClick:function(t){""===l&&13===t.keyCode||(e.onEnter(l),r(""))},className:"add-icon"})))},C=function(e){var t=e.list.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("li",null,e))}));return c.a.createElement("ul",null,t)},w=function(e){return c.a.createElement("div",{className:"dish-name-panel"},c.a.createElement("div",{className:"field"},c.a.createElement("span",null,e.text,": ")),c.a.createElement("div",{className:e.styler},c.a.createElement("input",{name:e.name,onChange:e.onChange,value:e.value})))},k=function(e){return c.a.createElement("div",{className:"category-adder"},c.a.createElement("div",{className:"field"},c.a.createElement("span",null,e.text,": ")),c.a.createElement("div",null,c.a.createElement("select",{name:e.name,value:e.value,onChange:e.onChange},c.a.createElement("option",{className:"options",value:"breakfast"},"Breakfast"),c.a.createElement("option",{value:"salad"},"Salad"),c.a.createElement("option",{value:"juice"},"Juice"),c.a.createElement("option",{value:"lunch"},"Lunch"))))},L=function(e){return c.a.createElement("div",{className:"multiple-input"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"field"},c.a.createElement("div",null,c.a.createElement("span",null,e.text," "))),e.list?c.a.createElement(C,{list:e.list}):""),c.a.createElement(A,{onEnter:e.onEnter,value:""}))},x=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),u=i[0],o=i[1],E=Object(n.useState)([]),p=Object(s.a)(E,2),d=p[0],f=p[1],h=Object(n.useState)(""),v=Object(s.a)(h,2),g=v[0],b=v[1],N=Object(n.useState)("breakfast"),j=Object(s.a)(N,2),O=j[0],y=j[1],S=Object(n.useState)(!1),A=Object(s.a)(S,2),C=A[0],x=A[1],I=Object(n.useState)(),B=Object(s.a)(I,2),F=B[0],R=B[1],J=function(e,t){t(e.target.value)};return c.a.createElement("div",{className:"recipe-form"},c.a.createElement("form",{onSubmit:function(e){if(""!==a&&0!==u.length&&0!==d.length&&""!==g&&null!==C&&O){R("Added Successfully"),e.preventDefault();var t=new FormData(e.target);t.append("steps",d),t.append("ingredients",u),m(t)}}},c.a.createElement(w,{styler:"dish-name",name:"name",text:"Dish",onChange:function(e){return J(e,l)},value:a}),c.a.createElement(k,{text:"Category",name:"category",value:O,onChange:function(e){return J(e,y)}}),c.a.createElement(L,{onEnter:function(e){""!==e&&o((function(t){return t.concat(e)}))},list:u,text:"Ingredients: "}),c.a.createElement(L,{onEnter:function(e){""!==e&&f((function(t){return t.concat(e)}))},text:"Steps: ",list:d}),c.a.createElement("div",{className:"description-box"},c.a.createElement("div",{className:"field"},c.a.createElement("div",null,c.a.createElement("span",null,"Description: "))),c.a.createElement("div",null,c.a.createElement("input",{name:"description",onChange:function(e){return J(e,b)},value:g}))),c.a.createElement("span",{style:{paddingRight:"9vw"}},"Image:"),c.a.createElement("input",{type:"file",name:"file",onChange:function(){return x(!0)}}),c.a.createElement("p",null),c.a.createElement("div",null,c.a.createElement("button",{className:"submit-button"},"Add"))),c.a.createElement("div",{className:"status"},F))},I=function(){var e=Object(f.f)().recipeId,t=Object(n.useState)(),a=Object(s.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(),m=Object(s.a)(i,2),u=m[0],o=m[1],E=Object(n.useState)([]),d=Object(s.a)(E,2),h=d[0],v=d[1],g=Object(n.useState)(),b=Object(s.a)(g,2),N=b[0],j=b[1],O=Object(n.useState)(),y=Object(s.a)(O,2),S=y[0],A=y[1],w=Object(n.useState)(),k=Object(s.a)(w,2),L=k[0],x=k[1],I=Object(n.useState)([]),B=Object(s.a)(I,2),F=B[0],R=B[1];Object(n.useEffect)((function(){p(e).then((function(e){var t=Object(s.a)(e,1)[0];r(t.name),o(t.by),v(t.steps),A(t.path),x(t.category),R(t.ingredients),j(t.description),x(t.category)}))}),[e]);var J="/api".concat(S);return c.a.createElement("div",{className:"recipe-container"},c.a.createElement("h1",null,l),c.a.createElement("img",{style:{width:"20vw"},src:J,alt:"NA"}),c.a.createElement("div",null,c.a.createElement("span",{className:"heading"},"Category: "),c.a.createElement("span",null,L)),c.a.createElement("div",null,c.a.createElement("span",{className:"heading"},"ingredients:"),c.a.createElement(C,{list:F})),c.a.createElement("div",null,c.a.createElement("span",{className:"heading"},"Steps:")," ",c.a.createElement(C,{list:h})),c.a.createElement("p",{className:"description-content"},N),c.a.createElement("span",{className:"by"},"By")," ",c.a.createElement("span",{className:"by-name"},u))},B=function(e){return c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement(N,null)),c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/"},c.a.createElement(j,null),c.a.createElement(v,{category:"ALL"})),c.a.createElement(f.a,{path:"/recipes/salad"},c.a.createElement(j,null),c.a.createElement(v,{category:"SALAD"})),c.a.createElement(f.a,{path:"/recipes/juice"},c.a.createElement(j,null),c.a.createElement(v,{category:"JUICE"})),c.a.createElement(f.a,{path:"/recipes/breakfast"},c.a.createElement(j,null),c.a.createElement(v,{category:"BREAKFAST"})),c.a.createElement(f.a,{path:"/recipes/lunch"},c.a.createElement(j,null),c.a.createElement(v,{category:"LUNCH"})),c.a.createElement(f.a,{path:"/recipes/add"},c.a.createElement(x,null)),c.a.createElement(f.a,{path:"/user/profile"},c.a.createElement(S,null)),c.a.createElement(f.a,{path:"/recipe/:recipeId"},c.a.createElement(I,null)),c.a.createElement(f.a,{path:"/recipes/recipe/:recipeId"},c.a.createElement(I,null))))},F=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Recipe App"),c.a.createElement("a",{href:"https://github.com/login/oauth/authorize?client_id=1d0dd614acec505180d7"},"Login through Github"))},R=function(){var e=Object(n.useState)({status:!1}),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){u().then(l)}),[]),a.status?c.a.createElement(B,null):c.a.createElement(F,null)};var J=function(){return c.a.createElement(R,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.119da3f0.chunk.js.map