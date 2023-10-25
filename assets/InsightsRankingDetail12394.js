import{o as R,q as T,u as S,c as k,af as q,r as u,a as E,_ as w,b as d,e as b,f as x,h as l,B as _,E as C,C as D,g as h,i as F,j as M}from"./usetoast.esm12394.js";import{u as $}from"./insight12394.js";import{e as I,o as P,n as V}from"./helpers12394.js";const j={setup(){R(()=>{n.value=!0,s.value={first:0,rows:r.value.rows,sortField:null,sortOrder:null},y()});const t=T(),i=$(),c=S(),o=k(()=>i.getRankingDetail),p=k(()=>c.getSelectedCountry),f=q(),r=u(),n=u(!0),s=u(),m=u(0),B=u([{label:"My Filter",value:"myfilter"}]);function y(){n.value=!0;const e=new Map;v(e),e.set("page",s.value.page+1),e.set("per_page",s.value.rows),s.value.sortField&&(s.value.sortOrder==1?e.set("sorted_by",s.value.sortField+"_asc"):e.set("sorted_by",s.value.sortField+"_desc")),setTimeout(()=>{N(e)},Math.random()*1e3+250)}const v=function(e){var a=t.params.cluster;a=="workshop"&&(a="user"),a=="distributor"&&(a="dealer"),t.params.user_id&&e.set("user_id",t.params.user_id),e.set("year",t.params.year),e.set("cluster",a),e.set("quarter",t.params.quarter),e.set("country_id",p.value.id)},N=async function(e){await i.fetchClusterDetail(e).then(()=>{n.value=!1}).catch(a=>{n.value=!1,I(f,a)})};return{dt:r,responseRanking:o,loading:n,totalRecords:m,lazyParams:s,matchModes:B,route:t,toggleEdit:function(e){let a={year:t.params.year,cluster:t.params.cluster,quarter:t.params.quarter};e.name&&(a.company=e.name),(e.user_role=="dealer"||t.params.cluster=="agent"&&e.user_role=="agent")&&(a.user_id=e.user_id),e.user_role=="agent"&&t.params.cluster=="distributor"&&(a.user_id=t.params.user_id,a.second_user_id=e.user_id),t.params.cluster=="distributor"&&e.user_role=="agent"&&(a.user_name=e.name,a.company=t.params.company);let g=t.name;t.name=="ranking"?g="sub-ranking":g="ranking",E.push({name:g,params:a})},loadLazyData:y,setParams:v,formatNumber:P}}};function A(t,i,c,o,p,f){const r=d("Column"),n=d("DataTable"),s=d("ConfirmPopup");return b(),x("div",null,[l(n,{value:o.responseRanking,paginator:!0,rows:30,ref:"dt",dataKey:"id",loading:o.loading,removableSort:""},{empty:_(()=>[C(" No ranking found. ")]),default:_(()=>[l(r,{field:"sellout_code",header:"Sellout code",ref:"sellout_code"},null,512),l(r,{field:"company_name",header:"Company",ref:"company_name"},null,512),l(r,{field:"brand",header:"Brand",ref:"brand"},null,512),l(r,{header:"Target",ref:"value"},{body:_(({data:m})=>[C(D(m.value)+" "+D(m.unit),1)]),_:1},512)]),_:1},8,["value","loading"]),l(s)])}const z=w(j,[["render",A]]),K={setup(){R(()=>{V(i,c)});const t=u({icon:"pi pi-home",to:"/dashboard"}),i=u([{label:"Ranking Detail"}]),c=T();return{items:i,route:c,home:t}},components:{RankingDetailTable:z}},L={class:"m-4"},O={class:"flex justify-content-between align-items-center mb-3"},U=h("div",{class:"flex align-items-start justify-content-between"},[h("h1",{class:"mb-4 uppercase"},"RANKING DETAIL")],-1);function G(t,i,c,o,p,f){const r=d("Breadcrumb"),n=d("RankingDetailTable"),s=d("Card");return b(),x("div",L,[h("div",O,[l(r,{home:o.home,model:o.items,class:"mt-0 p-0"},null,8,["home","model"])]),l(s,null,{content:_(()=>[U,o.items?(b(),F(n,{key:0,ref:"rankingDetailTable"},null,512)):M("",!0)]),_:1})])}const X=w(K,[["render",G]]);export{X as default};
