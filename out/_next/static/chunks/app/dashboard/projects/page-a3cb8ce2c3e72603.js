(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{2703:(e,t,s)=>{Promise.resolve().then(s.bind(s,2782))},2782:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var l=s(5155);s(2115);var a=s(8756),r=s(2981),u=s(9519);let n=()=>{let{data:e,isLoading:t,error:s}=(0,a.A)({itemQuantity:10});return t?(0,l.jsx)("p",{className:"p-[300px]",children:"Loading..."}):s?(0,l.jsxs)("div",{children:["Error: ",s]}):(0,l.jsx)(r.A,{data:e,category:u.h.projects})}},8756:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var l=s(2115),a=s(189);function r(e){let{itemQuantity:t}=e,[s,r]=(0,l.useState)([]),[u,n]=(0,l.useState)(!0),[i,c]=(0,l.useState)(null),[f,o]=(0,l.useState)("all"),[d,p]=(0,l.useState)([]),[h,S]=(0,l.useState)([]);return(0,l.useEffect)(()=>{n(!0),(0,a.g)("projects",t).then(e=>{let{collectionData:t,error:s}=e;null!==s?c(s):(r(t),p(["All",...new Set(t.flatMap(e=>e.skills))].map(e=>e.toLowerCase())))}).finally(()=>{n(!1)})},[]),(0,l.useEffect)(()=>{if(s){let e="all"===f?s:s.filter(e=>e.skills.includes(f.toLowerCase()));S(t=>t===e?t:e)}},[s,f]),{data:s,filteredProjects:h,selectedSkill:f,setSelectedSkill:o,isLoading:u,error:i,allSkills:d}}}},e=>{var t=t=>e(e.s=t);e.O(0,[611,167,903,565,183,441,517,358],()=>t(2703)),_N_E=e.O()}]);