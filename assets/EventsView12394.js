import{a as z}from"./api.esm12394.js";import{o as A,u as O,c as b,af as j,r as f,a as K,ag as G,_ as P,b as d,l as H,e as w,f as E,h as n,B as u,E as M,C as g,j as V,m as I,w as F,g as B}from"./usetoast.esm12394.js";import{u as J}from"./useconfirm.esm12394.js";import"./country12394.js";import{u as U}from"./events12394.js";import{f as Q}from"./formatData12394.js";import{e as T,a as W,s as X,h as L}from"./helpers12394.js";import"./datetime12394.js";const Y={setup(){A(()=>{l.value=!0,a.value={first:0,rows:m.value.rows,sortField:null,sortOrder:null,filters:p.value},z.register("myfilter",(t,c)=>t===c),e()});const i=U(),s=J(),C=O(),o=b(()=>i.responseEvents),k=b(()=>C.getSelectedCountry),x=b(()=>i.eventsStatus),r=j(),m=f(),p=f({status:{value:"",matchMode:"contains"}}),l=f(!0),a=f(),S=f(0),_=f([{label:"My Filter",value:"myfilter"}]);function e(){l.value=!0;const t=new Map;t.set("country_id",k.value.id),t.set("status",p.value.status.value),t.set("page",a.value.page+1),t.set("per_page",a.value.rows),a.value.sortField&&(a.value.sortOrder==1?t.set("sorted_by",a.value.sortField+"_asc"):t.set("sorted_by",a.value.sortField+"_desc")),setTimeout(()=>{v(t)},Math.random()*1e3+250)}const v=async function(t){await i.fetchAllEvents(t).then(()=>{l.value=!1}).catch(c=>{l.value=!1,T(r,c)})},y=t=>{a.value=t,e()},N=t=>{a.value=t,e()},R=()=>{a.value.page=0,a.value.filters=p.value,e()},$=(t,c)=>{s.require({target:t.currentTarget,message:"Are you sure you want to remove this event?",icon:"pi pi-exclamation-triangle",accept:()=>{q(c.id)}})},q=async function(t){await i.deleteEvents(t).then(()=>{W(r,{message:"Event deleted correctly.",title:""}),e()}).catch(c=>{T(r,c)})};return{dt:m,responseEvents:o,filters:p,loading:l,totalRecords:S,lazyParams:a,loadLazyData:e,matchModes:_,eventsStatus:x,onPage:y,onSort:N,onFilter:R,toggleEdit:function(t){K.push({name:"event-detail",params:{id:t.id}})},confirmDeleteEvents:$,formatDataFromSql:Q,downloadBookings:async function(t){X();try{const h=await G({method:"get",url:`/events/${t}/download_bookings`,responseType:"blob"});var c=new Blob([h.data],{type:h.headers["content-type"]});const D=document.createElement("a");D.href=window.URL.createObjectURL(c),D.download="report_bookings.xlsx",D.click(),L()}catch(h){L(),T(r,h)}}}}};const Z={key:0},ee={key:0};function te(i,s,C,o,k,x){const r=d("Column"),m=d("Badge"),p=d("Dropdown"),l=d("Button"),a=d("DataTable"),S=d("ConfirmPopup"),_=H("tooltip");return w(),E("div",null,[n(a,{value:o.responseEvents.events,lazy:!0,paginator:!0,rows:30,filters:o.filters,"onUpdate:filters":s[0]||(s[0]=e=>o.filters=e),ref:"dt",dataKey:"id",loading:o.loading,totalRecords:o.responseEvents.total,onPage:s[1]||(s[1]=e=>o.onPage(e)),onSort:s[2]||(s[2]=e=>o.onSort(e)),onFilter:s[3]||(s[3]=e=>o.onFilter()),filterDisplay:"row",removableSort:""},{empty:u(()=>[M(" No events found. ")]),default:u(()=>[n(r,{filed:"",header:"Title"},{body:u(({data:e})=>[e.translations[e.country.default_language_code].title?(w(),E("span",Z,g(e.translations[e.country.default_language_code].title.text),1)):V("",!0)]),_:1}),n(r,{header:"Event date",field:"date",sortable:!0},{body:u(({data:e})=>[M(g(o.formatDataFromSql(e.date)),1)]),_:1}),n(r,{header:"Location",field:"location"}),n(r,{header:"Participants",field:""},{body:u(({data:e})=>[e.seats!=null?(w(),E("span",ee,g(e.participants)+"/"+g(e.seats),1)):V("",!0)]),_:1}),n(r,{header:"Status",field:"status",ref:"status",filterMatchMode:"contains",showFilterMatchModes:!1,showFilterOperator:!1,showFilterMenu:!1},{body:u(({data:e})=>[n(m,{value:e.status,class:I(["px-4 border-round-lg",e.status])},null,8,["value","class"])]),filter:u(({filterModel:e,filterCallback:v})=>[n(p,{modelValue:e.value,"onUpdate:modelValue":y=>e.value=y,options:o.eventsStatus,optionValue:"value",optionLabel:"name",onChange:y=>v(),placeholder:"Filter by status"},null,8,["modelValue","onUpdate:modelValue","options","onChange"])]),_:1},512),n(r,{header:"",style:{width:"14rem"}},{body:u(({data:e})=>[F(n(l,{type:"button",onClick:v=>o.toggleEdit(e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-pencil"},null,8,["onClick"]),[[_,"Edit",void 0,{top:!0}]]),F(n(l,{type:"button",onClick:v=>o.downloadBookings(e.id),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-download"},null,8,["onClick"]),[[_,"Download bookings",void 0,{top:!0}]]),F(n(l,{type:"button",onClick:v=>o.confirmDeleteEvents(v,e),"aria-haspopup":"true","aria-controls":"overlay_menu",class:"p-button-text p-button-rounded text-300 surface-200 mr-3",icon:"pi pi-trash"},null,8,["onClick"]),[[_,"Delete",void 0,{top:!0}]])]),_:1})]),_:1},8,["value","filters","loading","totalRecords"]),n(S)])}const oe=P(Y,[["render",te]]),ne={setup(){const i=U();return{totalEvents:b(()=>i.getTotalEvents)}},components:{EventsTable:oe}},se={class:"flex justify-content-between align-items-center"},ae={class:"uppercase"};function re(i,s,C,o,k,x){const r=d("Button"),m=d("EventsTable"),p=d("Card");return w(),E("div",null,[n(p,null,{content:u(()=>[B("div",se,[B("h1",ae,[B("span",null,g(o.totalEvents)+" Events",1)]),n(r,{label:"event",onClick:s[0]||(s[0]=l=>i.$router.push("/event-detail")),icon:"pi pi-plus",class:"mb-3"})]),n(m)]),_:1})])}const ge=P(ne,[["render",re]]);export{ge as default};
