(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(22),s=c(7),n=c(2),i=(c(31),c(32),c(33),c(15)),b=c.n(i),j=c(3),r=function(){var e=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(s.c,{to:"/",className:e,children:"Home"}),Object(j.jsx)(s.c,{to:"/tabs",className:e,children:"Tabs"})]})})}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)(n.b,{})})]})},l=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},d=function(e){var t,c=e.tabs,a=Object(n.r)().tabId,i=null===(t=c.find((function(e){return e.id===a})))||void 0===t?void 0:t.content;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:c.map((function(e){var t=e.id,c=e.title;return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t===a}),children:Object(j.jsx)(s.b,{to:"/tabs/".concat(t),children:c})},t)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:i||"Please select a tab"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})};Object(a.createRoot)(document.getElementById("root")).render(Object(j.jsx)(s.a,{children:Object(j.jsx)(n.e,{children:Object(j.jsxs)(n.c,{path:"/",element:Object(j.jsx)(r,{}),children:[Object(j.jsx)(n.c,{index:!0,element:Object(j.jsx)(l,{})}),Object(j.jsx)(n.c,{path:"/home",element:Object(j.jsx)(n.a,{to:"/"})}),Object(j.jsxs)(n.c,{path:"tabs",children:[Object(j.jsx)(n.c,{index:!0,element:Object(j.jsx)(d,{tabs:o})}),Object(j.jsx)(n.c,{path:":tabId",element:Object(j.jsx)(d,{tabs:o})})]}),Object(j.jsx)(n.c,{path:"*",element:Object(j.jsx)(x,{})})]})})}))}},[[35,1,2]]]);
//# sourceMappingURL=main.c8e8a523.chunk.js.map