import{j as e}from"./index-Dn9HgVtz.js";import{B as d}from"./Button-yeYjnd3P.js";import{A as h}from"./ArrowLink-CHUTro2V.js";import{U as m}from"./UnstyledLink-DhQZhRg6.js";function j({imageUrl:i,tag:t,title:a,description:o,price:n,onClick:r,slug:s,children:l}){return e.jsxs("div",{id:"card",className:"relative w-full h-auto rounded-xl border-2 border-primary bg-white p-4",children:[e.jsx("div",{className:"absolute -top-9 left-1/2 transform -translate-x-1/2 bg-primary border-2 border-primary rounded-full p-3",children:e.jsx("img",{src:i,width:30,height:30,alt:`Image ${a}`,className:"object-scale-down w-8 h-8"})}),t&&e.jsx("p",{className:"absolute z-[20] -top-4 end-0 px-1 w-fit h-auto rounded-2xl border-2 border-amber-500 bg-white",children:t}),e.jsx("h3",{className:"pt-6 text-center font-bold text-2xl",children:a}),e.jsx("p",{className:"text-start p-5 min-h-32",children:o}),r&&e.jsx(h,{href:"#card",direction:"right",className:"my-4",onClick:r,children:"Learn More"}),e.jsx("h4",{className:"py-3 text-center font-bold",children:n}),s?e.jsx(m,{to:`/services/career-development/${s}`,children:e.jsx(d,{children:"Lihat Lebih Banyak"})}):r&&e.jsx(d,{onClick:r,children:"Lihat Lebih Banyak"}),l]})}export{j as C};