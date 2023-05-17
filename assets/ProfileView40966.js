import{r as c,u as P,ac as F,c as S,n as B,_ as j,b as _,o as b,e as g,f as s,g as l,v as y,l as C,i as V}from"./usetoast.esm40966.js";import{u as T}from"./user40966.js";import{h as p,a as f,e as U}from"./helpers40966.js";const A={setup(){const x=c({icon:"pi pi-home",to:"/profile"}),a=P(),o=c({}),e=c([{label:"Profile"}]),v=T(),r=F(),i=c(!1),n=c(!1),m=S(()=>a.currentUser),u=async function(){o.value.parent&&(o.value.parent_id=o.value.parent.id);const d={user:o.value};v.updateUser(d).then(()=>{p(),f(r,{message:"Profile updated correctly.",title:""}),a.updateStoredUser(o.value)}).catch(h=>{p(),U(r,h)})},t=function(){if(n.value=!0,k(),i.value){f(r,{message:"Check that you have completed the required fields.",title:"",error:!0});return}if(o.value.password!=o.value.password_confirmation){f(r,{message:"The password and confirm password field must match.",title:"",error:!0});return}const d={user:{id:o.value.id,password:o.value.password,password_confirmation:o.value.password_confirmation}};v.changePassword(d).then(()=>{p(),f(r,{message:"Password updated correctly.",title:""})}).catch(h=>{p(),U(r,h)}),n.value=!1},w=function(d){if(n.value)return d==""||d==null?i.value=!0:i.value=!1,i.value},k=function(){w(o.value.password),w(o.value.password_confirmation)};return B(async()=>{o.value=Object.assign({},m.value),o.value.password=""}),{tmp_user:o,home:x,items:e,updateUser:u,changePwd:t,validateField:w}}},E={class:"m-4"},I={class:"flex justify-content-between align-items-center mb-3"},N=s("div",{class:"flex align-items-center justify-content-between"},[s("h2",{class:"mb-2"},"PROFILE")],-1),O={class:"formgrid grid col-10 px-0"},L={class:"field col-6"},R=s("label",{for:"name"},"Full name",-1),q={class:"field col-6"},z=s("label",{for:"name"},"Email",-1),D={class:"flex justify-content-end w-full"},W=s("div",{class:"flex align-items-center justify-content-between"},[s("h2",{class:"mb-2"},"PASSOWRD")],-1),G={class:"formgrid grid col-10 px-0"},H={class:"field col-6"},J=s("label",{for:"password"},"Password",-1),K={key:0,class:"p-error"},M={class:"field col-6"},Q=s("label",{for:"password_confirmation"},"Conferma password",-1),X={key:0,class:"p-error"},Y={class:"flex justify-content-end w-full"};function Z(x,a,o,e,v,r){const i=_("Breadcrumb"),n=_("InputText"),m=_("Button"),u=_("Card");return b(),g("div",E,[s("div",I,[l(i,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"])]),l(u,null,{content:y(()=>[N,s("div",O,[s("div",L,[R,l(n,{id:"name",type:"text",modelValue:e.tmp_user.full_name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.tmp_user.full_name=t),class:"w-full"},null,8,["modelValue"])]),s("div",q,[z,l(n,{id:"name",type:"text",modelValue:e.tmp_user.email,"onUpdate:modelValue":a[1]||(a[1]=t=>e.tmp_user.email=t),class:"w-full"},null,8,["modelValue"])]),s("div",D,[l(m,{label:"Save",onClick:e.updateUser},null,8,["onClick"])])])]),_:1}),l(u,{class:"mt-4"},{content:y(()=>[W,s("div",G,[s("div",H,[J,l(n,{id:"password",type:"password",modelValue:e.tmp_user.password,"onUpdate:modelValue":a[2]||(a[2]=t=>e.tmp_user.password=t),class:C(["w-full",{"p-invalid":e.validateField(e.tmp_user.password)}]),autocomplete:"off"},null,8,["modelValue","class"]),e.validateField(e.tmp_user.password)?(b(),g("small",K,"Campo obbligatorio.")):V("",!0)]),s("div",M,[Q,l(n,{id:"password_confirmation",type:"password",modelValue:e.tmp_user.password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=t=>e.tmp_user.password_confirmation=t),class:C(["w-full",{"p-invalid":e.validateField(e.tmp_user.password_confirmation)}])},null,8,["modelValue","class"]),e.validateField(e.tmp_user.password_confirmation)?(b(),g("small",X,"Campo obbligatorio.")):V("",!0)]),s("div",Y,[l(m,{label:"Change password",onClick:e.changePwd,class:"p-button-outlined"},null,8,["onClick"])])])]),_:1})])}const oe=j(A,[["render",Z]]);export{oe as default};
