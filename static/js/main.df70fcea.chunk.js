(this["webpackJsonpdata-stor"]=this["webpackJsonpdata-stor"]||[]).push([[0],{118:function(e,t,c){},119:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},127:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(39),i=c.n(n),l=(c(37),c(2)),s=c(8),r=c(11),o=c(0),u=function(e){var t=e.xScale,c=e.innerHeight,a=e.tickFormat;return t.ticks().map((function(e){return Object(o.jsxs)("g",{className:"tick",transform:"translate(".concat(t(e),",0)"),children:[Object(o.jsx)("line",{y2:c,stroke:"black"}),Object(o.jsx)("text",{dy:"0.71em",style:{textAnchor:"middle"},y:c+4,children:a(e)})]},e)}))},j=function(e){var t=e.yScale;return t.domain().map((function(e){return Object(o.jsx)("g",{className:"tick",children:Object(o.jsx)("text",{dy:"0.32em",x:-4,y:t(e)+t.bandwidth()/2,style:{textAnchor:"end"},children:e},e)})}))},b=function(e){var t=e.data,c=e.xScale,a=e.yScale,n=e.xValue,i=e.yValue,l=e.tooltipFormat;return t.map((function(e){return Object(o.jsx)("rect",{className:"mark",x:0,y:a(i(e)),width:c(n(e)),height:a.bandwidth(),children:Object(o.jsx)("title",{children:l(n(e))})},i(e))}))},d=(c(118),function(e){var t=e.options,c=e.id,a=e.selectedValue,n=e.onSelectedValueChange;return Object(o.jsx)("select",{id:c,onChange:function(e){return n(e.target.value)},children:t.map((function(e){var t=e.value,n=e.label;return Object(o.jsx)("option",{value:t,selected:t===a,children:n},c)}))})}),m=10,h=20,x=150,O=230,f=function(e){return e.Country},p=function(e){return e.Population},v=Object(r.b)(".2s"),N=function(e){return v(e).replace("G","B")},g=[{value:"drop-option",label:"--choose continent--"},{value:"africa",label:"Africa"},{value:"asia",label:"Asia"},{value:"australia",label:"Australia"},{value:"europe",label:"Europe"},{value:"s-america",label:"South America"},{value:"n-america",label:"North America"}],y=function(){var e=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){Object(r.a)("https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv",(function(e){return e.Population=1e3*+e[2010],e})).then((function(e){n(e.slice(0,10))}))}),[]),c}(),t=Object(a.useState)("Africa"),c=Object(s.a)(t,2),n=c[0],i=c[1];if(console.log(n),!e)return Object(o.jsx)("pre",{children:"Loading..."});var l=500-m-x,v=960-O-h,y=Object(r.d)().paddingInner(.1).domain(e.map(f)).range([0,l]),k=Object(r.e)().domain([0,Object(r.c)(e,p)]).range([0,v]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"World Population "}),Object(o.jsx)("div",{className:"dropdown",children:Object(o.jsx)(d,{options:g,id:"continent-select",selectedValue:n,onSelectedValueChange:i})}),Object(o.jsx)("svg",{width:960,height:500,children:Object(o.jsxs)("g",{transform:"translate(".concat(O,",").concat(m," )"),children:[Object(o.jsx)(u,{xScale:k,innerHeight:l,tickFormat:N}),Object(o.jsx)(j,{yScale:y}),Object(o.jsx)("text",{className:"axis-label",x:v/2,y:l+55,textAnchor:"middle",children:"Population"}),Object(o.jsx)(b,{data:e,yScale:y,xScale:k,xValue:p,yValue:f,tooltipFormat:N})]})})]})},k=[{title:"world population",url:"/stories/#1",cName:"story-links",tech:"D3.js"},{title:"food prices",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Diplomacy map",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Climate",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Climate",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Climate",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Climate",url:"/stories",cName:"story-links",tech:"Tableu"},{title:"Climate",url:"/stories",cName:"story-links",tech:"Tableu"}],S=(c(119),function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"row container",children:k.map((function(e,t){return Object(o.jsxs)("div",{className:"column card",children:[Object(o.jsx)("div",{className:"preview"}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("a",{className:e.cName,href:e.url,children:e.title}),Object(o.jsxs)("p",{className:"tech",children:["Developed using ",e.tech]})]})]},t)}))}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"#",component:y}),Object(o.jsx)(l.a,{exact:!0,path:"#",component:y})]})]})}),C=c(13),w=[{title:"Home",url:"/",component:"Home",cName:"nav-links"},{title:"Stories",url:"/stories",component:"Stories",cName:"nav-links"},{title:"Blog",url:"#",cName:"nav-links"},{title:"sign-up",url:"#",cName:"nav-links-mobile"}],A=(c(125),c(126),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("nav",{className:"NavbarItems",children:[Object(o.jsx)("h1",{className:"navbar-logo",children:Object(o.jsx)("a",{children:"Data  Stories"})}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(e){n(!c)},children:Object(o.jsx)("i",{className:c?"fas fa-times":"fas fa-bars"})}),Object(o.jsx)("ul",{className:c?"nav-menu active":"nav-menu",children:w.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)(C.b,{className:e.cName,to:e.url,children:e.title})},t)}))})]})}),F=function(){return Object(o.jsxs)("main",{children:[Object(o.jsx)(A,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(o.jsx)(l.a,{exact:!0,path:"/stories",component:y})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),i(e),l(e)}))};i.a.render(Object(o.jsx)(C.a,{basename:"/data-stories/",children:Object(o.jsx)(F,{})}),document.getElementById("root")),T()},37:function(e,t,c){}},[[127,1,2]]]);
//# sourceMappingURL=main.df70fcea.chunk.js.map