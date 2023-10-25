import{A as ce}from"./AudienceCard12394.js";import{U as me}from"./UploadImageCard12394.js";import{E as ue,G as ve,U as _e}from"./UploadAttachmentCard12394.js";import{r,u as fe,q as pe,af as ge,c as O,n as be,a as he,_ as ye,b as d,e as m,f,g as l,h as i,i as Z,j as v,B as $,w,m as A,C as Ce}from"./usetoast.esm12394.js";import{u as ke}from"./events12394.js";import{u as Ee}from"./country12394.js";import{a as S,s as z,h,e as L,f as xe,g as Ve,d as Te,i as ee,u as Ae,b as Ue,c as Fe}from"./helpers12394.js";import{f as H,a as M}from"./formatData12394.js";import{u as Ie}from"./useconfirm.esm12394.js";import{v as N}from"./runtime-dom.esm-bundler12394.js";import"./group12394.js";import"./user12394.js";import"./datetime12394.js";const De={setup(){const R=r({icon:"pi pi-home",to:"/events"}),o=r(""),U=r([{label:""}]),e=r({}),Y=["draft","online","archived"],V=r(""),B=r(!0),k=r(!0),j=r(!0),y=r(),p=r(),P=r(),c=r(),_=r(),E=r(!1),x=r(!1),G=fe(),F=pe(),u=ge(),n=Ie(),T=ke(),te=Ee(),g=O(()=>T.getCurrentEvent),ae=O(()=>te.allCountries),J=O(()=>G.getSelectedCountry),q=async function(a){z(),T.fetchEventsDetail(a).then(()=>{h(),oe()}).catch(t=>{h(),L(u,t)})},oe=function(){var a,t;if(e.value=Object.assign({},g.value),e.value.country_id=(a=e.value.country)==null?void 0:a.id,V.value=((t=e.value.country)==null?void 0:t.default_language_code)+"",e.value.date=H(g.value.date+""),e.value.bookable_from=H(g.value.bookable_from+""),e.value.bookable_to=H(g.value.bookable_to+""),xe(y,e),Ve(p,e),c.value){const s=e.value.gallery_images_url;s&&s.length>0&&(c.value.tmp_gallery=s),c.value.folder_url=e.value.folder_url}if(_.value){const s=e.value.attachment_urls;s&&s.length>0&&(_.value.tmp_attachment=s)}Te(g,e)},K=function(){var I,X;const a=new FormData,t=Object.assign({},e.value);e.value.date&&(t.date=M(e.value.date)),e.value.bookable_from&&(t.bookable_from=M(e.value.bookable_from)),e.value.bookable_to&&(t.bookable_to=M(e.value.bookable_to));const s=p.value.tmp_image,C=c.value.files;if(s&&s.image&&(t.image=s.image),s&&(t.video_url=(I=p.value.tmp_image)==null?void 0:I.video_url),C&&C.length>0&&C.length>0&&ee(C,"event[gallery_images][]",a),c.value&&(t.folder_url=c.value.folder_url),_.value){const D=_.value.files;D&&D.length>0&&D.length>0&&ee(D,"event[attachments][]",a)}return t.country_id=(X=t.country)==null?void 0:X.id,delete t.country,(o.value||t.id)&&Ae(g,t),delete t.target_all,delete t.target_clusters,delete t.target_group_ids,Ue(a,t,"event"),Fe(y,a,"event"),a},le=async function(){const a={id:e.value.id,formData:K()};T.updateEvents(a).then(()=>{h(),q(e.value.id+""),S(u,{message:"Event updated correctly.",title:""}),c.value.files=[],c.value.fileUpload.files=[],_.value.files=[],_.value.fileUpload.files=[]}).catch(t=>{h(),L(u,t)})},ne=async function(){const a={formData:K()};T.createEvents(a).then(()=>{h(),q(g.value.id+""),S(u,{message:"Event created correctly.",title:""}),he.push({name:"event-detail",params:{id:g.value.id}})}).catch(t=>{h(),L(u,t)})},se=function(){E.value=!0,ie(),x.value?S(u,{message:"Check that you have completed the required fields.",title:"",error:!0}):(F.params.id!=""||e.value.id?le():ne(),E.value=!1,z())},ie=function(){var a,t;e.value.translations&&((t=(a=e.value.country)==null?void 0:a.language_codes)==null||t.forEach(s=>{b(e.value.translations[s].title),b(e.value.translations[s].description),b(e.value.translations[s].short_description)})),b(e.value.status),b(e.value.date),b(e.value.bookable_from),b(e.value.bookable_to)},b=function(a){if(E.value)return a==""||a==null?x.value=!0:x.value=!1,x.value},Q=function(){var a,t,s,C;V.value!=((a=e.value.country)==null?void 0:a.default_language_code)&&(V.value=((t=e.value.country)==null?void 0:t.default_language_code)+"",e.value.translations={},(C=(s=e.value.country)==null?void 0:s.language_codes)==null||C.forEach(I=>{e.value.translations[I]={title:null,description:null}}))},re=a=>{n.require({group:"push",target:a.currentTarget,message:"Are you sure you want to send the push notification?",icon:"pi pi-exclamation-triangle",acceptLabel:"Send",rejectLabel:"Cancel"})},W=function(){var a=document.getElementsByClassName("p-confirm-popup-reject")[0];a.click()},de=async function(){z(),await T.sendPush(o.value).then(()=>{S(u,{message:"Notification sent correctly.",title:"",error:!1}),W(),h()}).catch(a=>{h(),L(u,a)})};return be(async()=>{o.value=F.params.id+"",o.value!=""&&o.value!="undefined"?(q(o.value),U.value[0]={label:"Edit events"}):(e.value.status="draft",U.value[0]={label:"Add events"},e.value.country=J.value,e.value.country_id=J.value.id,Q())}),{home:R,items:U,tmp_events:e,events_status:Y,audienceCard:y,selectedLang:V,showCheckboxAll:B,showSelectClusters:k,showSelectGroups:j,submitForm:E,uploadImageCard:p,eventContentCard:P,galleryImageCard:c,uploadAttachmentCard:_,countries:ae,validateField:b,saveEvent:se,setSelectedLang:Q,confirmSendPush:re,closePopup:W,sendPush:de}},components:{AudienceCard:ce,UploadImageCard:me,EventContentCard:ue,GalleryImageCard:ve,UploadAttachmentCard:_e}};const we={class:"m-4"},Se={class:"flex justify-content-between align-items-center mb-3"},Le={class:"flex align-items-start justify-content-between"},Ne=l("h2",{class:"mb-2"},"EVENT DETAIL",-1),Be={key:0,class:"field col-2 mb-0"},je={key:0,class:"p-error"},Pe={class:"formgrid grid col-10 px-0 xs:col-12"},Ge={key:0,class:"field col-6 xs:col-6 flex flex-column"},qe=l("label",{for:"name"},"Location",-1),Oe={key:0,class:"formgrid grid col-10 px-0 xs:col-12"},ze={class:"field col-3 xs:col-4"},He=l("label",{for:"name"},"Event date*",-1),Me={key:0,class:"p-error"},Re={class:"field col-3 xs:col-4"},Ye=l("label",{for:"name"},"Bookable from*",-1),Je={key:0,class:"p-error"},Ke={class:"field col-3 xs:col-4"},Qe=l("label",{for:"name"},"Bookable to*",-1),We={key:0,class:"p-error"},Xe={key:1,class:"formgrid grid col-10 px-0 xs:col-12"},Ze={class:"field col-3 flex flex-column"},$e=l("label",{for:"title"},"Available seats",-1),et={class:"field col-3 flex flex-column"},tt=l("label",{for:"title"},"Number guests per person",-1),at={class:"field col-3 mt-4 mb-0"},ot={class:"field-checkbox"},lt=l("label",{for:"gift"},"There is a free gift",-1),nt={class:"flex p-3 align-items-center"},st={class:"pl-2"},it={class:"flex align-items-center pb-3 justify-content-end"};function rt(R,o,U,e,Y,V){const B=d("Breadcrumb"),k=d("Button"),j=d("Dropdown"),y=d("InputText"),p=d("Calendar"),P=d("Checkbox"),c=d("Card"),_=d("AudienceCard"),E=d("EventContentCard"),x=d("UploadImageCard"),G=d("GalleryImageCard"),F=d("UploadAttachmentCard"),u=d("ConfirmPopup");return m(),f("div",we,[l("div",Se,[i(B,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"]),l("div",null,[e.tmp_events.id?(m(),Z(k,{key:0,label:"Send push",onClick:o[0]||(o[0]=n=>e.confirmSendPush(n)),class:"mr-3 p-button-outlined",icon:"pi pi-envelope"})):v("",!0),i(k,{label:"Save",onClick:e.saveEvent},null,8,["onClick"])])]),i(c,null,{content:$(()=>[l("div",Le,[Ne,e.tmp_events.country?(m(),f("div",Be,[i(j,{modelValue:e.tmp_events.status,"onUpdate:modelValue":o[1]||(o[1]=n=>e.tmp_events.status=n),options:e.events_status,class:A(["w-full capitalize dropdown-status",{"p-invalid":e.validateField(e.tmp_events.status)}])},null,8,["modelValue","options","class"]),e.validateField(e.tmp_events.status)?(m(),f("small",je,"Campo obbligatorio.")):v("",!0)])):v("",!0)]),l("div",Pe,[e.tmp_events.country?(m(),f("div",Ge,[qe,i(y,{id:"title",type:"text",modelValue:e.tmp_events.location,"onUpdate:modelValue":o[2]||(o[2]=n=>e.tmp_events.location=n)},null,8,["modelValue"])])):v("",!0)]),e.tmp_events.country?(m(),f("div",Oe,[l("div",ze,[He,i(p,{inputId:"dateformat",modelValue:e.tmp_events.date,"onUpdate:modelValue":o[3]||(o[3]=n=>e.tmp_events.date=n),dateFormat:"dd/mm/yy",manualInput:!1,class:A({"p-invalid":e.validateField(e.tmp_events.date)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.date)?(m(),f("small",Me,"Campo obbligatorio.")):v("",!0)]),l("div",Re,[Ye,i(p,{inputId:"dateformat",modelValue:e.tmp_events.bookable_from,"onUpdate:modelValue":o[4]||(o[4]=n=>e.tmp_events.bookable_from=n),dateFormat:"dd/mm/yy",manualInput:!1,class:A({"p-invalid":e.validateField(e.tmp_events.bookable_from)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.bookable_from)?(m(),f("small",Je,"Campo obbligatorio.")):v("",!0)]),l("div",Ke,[Qe,i(p,{inputId:"dateformat",modelValue:e.tmp_events.bookable_to,"onUpdate:modelValue":o[5]||(o[5]=n=>e.tmp_events.bookable_to=n),dateFormat:"dd/mm/yy",manualInput:!1,class:A({"p-invalid":e.validateField(e.tmp_events.bookable_to)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.bookable_to)?(m(),f("small",We,"Campo obbligatorio.")):v("",!0)])])):v("",!0),e.tmp_events.country?(m(),f("div",Xe,[l("div",Ze,[$e,i(y,{id:"title",type:"text",modelValue:e.tmp_events.seats,"onUpdate:modelValue":o[6]||(o[6]=n=>e.tmp_events.seats=n)},null,8,["modelValue"])]),l("div",et,[tt,i(y,{id:"title",type:"text",modelValue:e.tmp_events.guests,"onUpdate:modelValue":o[7]||(o[7]=n=>e.tmp_events.guests=n)},null,8,["modelValue"])]),l("div",at,[l("div",ot,[i(P,{inputId:"gift",modelValue:e.tmp_events.gift,"onUpdate:modelValue":o[8]||(o[8]=n=>e.tmp_events.gift=n),binary:!0},null,8,["modelValue"]),lt])])])):v("",!0)]),_:1}),w(i(_,{ref:"audienceCard"},null,512),[[N,e.tmp_events.country]]),e.tmp_events.country&&e.selectedLang?(m(),Z(E,{key:0,selectedLang:e.selectedLang,submitForm:e.submitForm,tmp_events:e.tmp_events,ref:"eventContentCard",title:"EVENT CONTENT"},null,8,["selectedLang","submitForm","tmp_events"])):v("",!0),w(i(x,{title:"EVENT MEDIA",videoUrl:!0,ref:"uploadImageCard",class:"mt-3",dynamicClass:"col-5"},null,512),[[N,e.tmp_events.country]]),w(i(G,{title:"EVENT GALLERY",videoUrl:!0,ref:"galleryImageCard"},null,512),[[N,e.tmp_events.country&&e.tmp_events.id]]),w(i(F,{title:"EVENT ATTACHMENTS",videoUrl:!1,ref:"uploadAttachmentCard"},null,512),[[N,e.tmp_events.country&&e.tmp_events.id]]),i(u,{group:"push",id:"push"},{message:$(n=>[l("div",nt,[l("i",{class:A(n.message.icon),style:{"font-size":"1.5rem"}},null,2),l("p",st,Ce(n.message.message),1)]),l("div",it,[i(k,{label:"Cancel",class:"mr-3 p-button-text text-500",onClick:e.closePopup},null,8,["onClick"]),i(k,{label:"Send",class:"mr-4",onClick:e.sendPush},null,8,["onClick"])])]),_:1})])}const kt=ye(De,[["render",rt]]);export{kt as default};
