import{e as V,r as L}from"./usetoast.esm96104.js";import{u as M}from"./useconfirm.esm96104.js";import{u as T}from"./product96104.js";import{f as j}from"./formatData96104.js";import{e as C,a as k,s as z,h as D}from"./helpers96104.js";import{a as I}from"./api.esm96104.js";import{ad as K,c as N,r as f,_ as S,a as m,i as U,o as w,b as P,f as c,q as y,y as F,w as A,e as g,t as E,j as O,h as G}from"./_plugin-vue_export-helper96104.js";import{w as H}from"./runtime-dom.esm-bundler96104.js";import"./datetime96104.js";const J={setup(x,t){K(()=>{s.value={first:0,rows:p.value.rows,sortField:null,sortOrder:null,filters:r.value},I.register("myfilter",(l,_)=>l===_),a()});const i=T(),e=M(),b=N(()=>i.allProducts),o=V(),p=f(),s=f(),u=f(!0),v=f([{label:"My Filter",value:"myfilter"}]),r=f({name:{value:"",matchMode:"contains"}});function a(){u.value=!0,setTimeout(()=>{n()},Math.random()*1e3+250)}const n=async function(){const l=new Map;l.set("name",r.value.name.value),await i.fetchAllProducts(l).then(()=>{u.value=!1}).catch(_=>{u.value=!1,C(o,_)})},d=(l,_)=>{_.users_counter>0?e.require({target:l.currentTarget,message:"The product cannot be deleted because there are associated users.",icon:"pi pi-exclamation-triangle",rejectClass:"hidden",acceptClass:"hidden"}):e.require({target:l.currentTarget,message:"Are you sure you want to remove this product?",icon:"pi pi-exclamation-triangle",accept:()=>{h(_.id)}})},h=async function(l){await i.deleteProduct(l).then(()=>{k(o,{message:"Product deleted correctly.",title:""}),a()}).catch(_=>{C(o,_)})},B=()=>{s.value.page=0,s.value.filters=r.value,a()},q=function(l){L.push({name:"product-detail",params:{id:l.id}})};return t.expose({loadLazyData:a}),{dt:p,lazyParams:s,products:b,loading:u,matchModes:v,filters:r,loadLazyData:a,toggleEdit:q,confirmDeleteProduct:d,formatDataFromSql:j,onFilter:B}}};const Q={class:"col-5 col-xs-12 col-md-12"};function R(x,t,i,e,b,o){const p=m("InputText"),s=m("Column"),u=m("Button"),v=m("DataTable"),r=m("ConfirmPopup"),a=U("tooltip");return w(),P("div",Q,[c(v,{value:e.products,lazy:!0,loading:e.loading,ref:"dt",dataKey:"id",onFilter:t[0]||(t[0]=n=>e.onFilter()),filterDisplay:"row",filters:e.filters,"onUpdate:filters":t[1]||(t[1]=n=>e.filters=n)},{empty:y(()=>[F(" No products found. ")]),default:y(()=>[c(s,{field:"name",header:"Name",filterMatchMode:"contains",ref:"name",sortable:!1,showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{filter:y(({filterModel:n,filterCallback:d})=>[c(p,{type:"text",modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,onKeydown:H(h=>d(),["enter"]),class:"p-column-filter",placeholder:"Filter by name"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1},512),c(s,{header:"",style:{width:"9rem"}},{body:y(({data:n})=>[A(c(u,{type:"button",onClick:d=>e.confirmDeleteProduct(d,n),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-trash"},null,8,["onClick"]),[[a,"Delete",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","loading","filters"]),c(r)])}const W=S(J,[["render",R]]),X={setup(){const x=T(),t=M(),i=f({}),e=V(),b=T(),o=f(!1),p=f(!1),s=f(),u=N(()=>x.getTotalProducts),v=()=>{t.require({group:"templating",header:"New Product",accept:()=>{if(o.value=!0,a(i.value.name))o.value=!1,r();else{o.value=!1,n();return}},reject:()=>{o.value=!1,p.value=!1,r()},acceptLabel:"Save",rejectLabel:"Cancel"})},r=function(){i.value.name=""},a=function(d){return o.value?d==""||d==null:!1},n=async function(){z();const d={product:i.value};b.createProduct(d).then(()=>{D(),k(e,{message:"Product created correctly.",title:""}),s.value.loadLazyData(),o.value=!1,r()}).catch(h=>{D(),C(e,h),o.value=!1})};return{totalProduct:u,confirm:t,tmp_product:i,productsTable:s,showTemplate:v,validateField:a,isVisible:p}},components:{ProductsTable:W}},Y={class:"flex justify-content-between align-items-center"},Z={class:"uppercase"},$={key:0},ee={key:1},te={class:"formgrid grid col-12"},oe={class:"field col-12 flex p-0 flex-column"},ae=g("label",{for:"name"},[F("Name "),g("span",{class:"uppercase"}),F("*")],-1),se={key:0,class:"p-error"};function re(x,t,i,e,b,o){const p=m("Button"),s=m("ProductsTable"),u=m("InputText"),v=m("ConfirmDialog"),r=m("Card");return w(),P("div",null,[c(r,null,{content:y(()=>[g("div",Y,[g("h1",Z,[e.totalProduct==1?(w(),P("span",$," 1 Product")):(w(),P("span",ee,E(e.totalProduct)+" Products",1))]),c(p,{label:"product",onClick:t[0]||(t[0]=a=>e.showTemplate()),icon:"pi pi-plus",class:"mb-3"})]),c(s,{ref:"productsTable"},null,512),c(v,{group:"templating",style:{width:"20vw"}},{message:y(()=>[g("div",te,[g("div",oe,[ae,c(u,{id:"name",type:"text",modelValue:e.tmp_product.name,"onUpdate:modelValue":t[1]||(t[1]=a=>e.tmp_product.name=a),class:O(["w-full",{"p-invalid":e.validateField(e.tmp_product.name)}]),require:""},null,8,["modelValue","class"]),e.validateField(e.tmp_product.name)?(w(),P("small",se,"Campo obbligatorio.")):G("",!0)])])]),_:1})]),_:1})])}const _e=S(X,[["render",re]]);export{_e as default};
