import{f as o,g as t,o as r,c as p,d,_ as g}from"./app-30af622c.js";const l=["href","title"],_=["src","alt"],i=o({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(a){const e=a,n=t(()=>`https://www.npmjs.com/package/${e.package}`),c=t(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),s=t(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(c.value)}`);return(m,u)=>(r(),p("a",{class:"npm-badge",href:n.value,title:a.package,target:"_blank",rel:"noopener noreferrer"},[d("img",{src:s.value,alt:a.package},null,8,_)],8,l))}});const k=g(i,[["__scopeId","data-v-c758b2a0"],["__file","NpmBadge.vue"]]);export{k as default};