import{j as e,L as d,c as i}from"./index-Dn9HgVtz.js";const g={primary:{background:"bg-[#1075b8]",foreground:"text-[#fff]",active:"active:bg-[#2081ff]"},warning:{background:"bg-[#fef148]",foreground:"text-[#0c4a6e]",active:""},error:{background:"bg-[#ff4d4f]",foreground:"text-[#fff]",active:"active:bg-[#ff7875]"},black:{background:"bg-[#000000]",foreground:"text-[#fff]",active:"active:bg-[#333333]"},white:{background:"bg-[#ffffff]",foreground:"text-[#000000]",active:"active:bg-[#f0f0f0]"}},m=({text:o,type:r,to:l,color:c="primary",rounded:t,action:f})=>{const u=g[c]||{},{background:n="",foreground:s="",active:a=""}=u;return r==="link"?e.jsxs(d,{className:i("group relative inline-flex items-center overflow-hidden capitalize px-8 py-3 focus:outline-none focus:ring",n,s,a,t?"rounded":""),to:l??"#!",children:[e.jsx("span",{className:"absolute -start-full transition-all group-hover:start-4",children:e.jsx("svg",{className:"size-5 rtl:rotate-180",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})}),e.jsx("span",{className:"text-sm font-semibold transition-all group-hover:ms-4",children:o})]}):e.jsxs("button",{className:i("group relative inline-flex items-center overflow-hidden px-8 py-3 focus:outline-none focus:ring",n,s,a,t?"rounded":""),type:r,onClick:f,children:[e.jsx("span",{className:"absolute -start-full transition-all group-hover:start-4",children:e.jsx("svg",{className:"size-5 rtl:rotate-180",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})})}),e.jsx("span",{className:"text-sm font-medium transition-all group-hover:ms-4",children:o})]})},p=m;export{p as B};
