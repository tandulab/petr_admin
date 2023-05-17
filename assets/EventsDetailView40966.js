import{A as fe}from"./AudienceCard40966.js";import{u as ae,U as he}from"./UploadImageCard40966.js";import{E as ge}from"./EventContentCard40966.js";import{j as ne,s as G,h as C,a as B,e as N,k as be,d as ye,f as xe,i as ke,l as oe,g as Ce,b as Fe,c as Ve}from"./helpers40966.js";import{r as d,ac as Z,_ as $,b as p,k as se,o as a,h as Y,v as D,f as t,x as T,g as _,e as n,F as S,A as J,i as f,w as j,B as Ue,u as we,p as Ee,c as Q,n as Ie,a as Se,l as q}from"./usetoast.esm40966.js";import{u as Ae}from"./events40966.js";import{u as Te}from"./country40966.js";import{f as W,a as X}from"./formatData40966.js";import{u as De}from"./useconfirm.esm40966.js";import{v as H}from"./runtime-dom.esm-bundler40966.js";import"./group40966.js";import"./user40966.js";import"./datetime40966.js";const Le={props:{title:String,videoUrl:Boolean},setup(L,l){const s=d(),e=ae(),V=Z(),b=d(),x=d(),k=d(),F=m=>{b.value=m.files,s.value||(s.value=[])},y=(m,h)=>{m&&(G(),e.deleteAttachment(m).then(()=>{C(),B(V,{message:"File deleted correctly.",title:""}),o(h)}).catch(U=>{C(),N(V,U)}))},o=m=>{s.value.splice(m,1),s.value.length==0&&(s.value=null),x.value.files=[]},c=m=>{b.value.splice(m,1)},u=()=>s.value&&s.value.length>0?10-s.value.length:10;return l.expose({tmp_gallery:s,files:b,fileUpload:x,folder_url:k}),{tmp_gallery:s,files:b,fileUpload:x,folder_url:k,onSelectedFiles:F,deleteImage:y,formatSize:ne,deleteGalleryImage:o,deleteFile:c,checkFileLimit:u}}},Be={class:"flex align-items-center justify-content-between"},Ne={class:"mb-4"},je={class:"flex col-10"},ze={class:"col-6 flex-column p-0"},Pe={key:0},Ge=t("h4",{class:"mb-1 mt-0"},"Pending",-1),Me={class:"flex flex-wrap"},Oe={class:"flex align-items-center"},Re=["alt","src"],qe={class:"flex flex-column ml-2",style:{"font-size":"12px"}},He={class:"mb-1"},Ye={key:0,class:"mb-1 mt-3"},Je={class:"flex flex-wrap align-items-center"},Ke={key:0,class:"flex align-items-top image mx-2 my-2"},Qe=["src"],We=["onClick"],Xe={key:0,class:"text-center"},Ze=t("b",null,"Drag and drop files to here to upload.",-1),$e=t("p",{class:"text-xs"},"(You can upload a maximum of 10 images)",-1),et=[Ze,$e],tt={class:"ml-4 col-5"},lt={class:"field"},ot=t("label",{for:"folder_url"},"Folder Url",-1);function at(L,l,s,e,V,b){const x=p("Button"),k=p("FileUpload"),F=p("InputText"),y=p("Card"),o=se("tooltip");return a(),Y(y,{class:"mt-4"},{content:D(()=>[t("div",Be,[t("h2",Ne,T(s.title),1)]),t("div",je,[t("div",ze,[_(k,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!0,accept:"image/*",maxFileSize:2e6,id:"logo",modelValue:e.tmp_gallery,"onUpdate:modelValue":l[0]||(l[0]=c=>e.tmp_gallery=c),customUpload:!0,onSelect:e.onSelectedFiles,fileLimit:e.checkFileLimit(),ref:"fileUpload",disabled:e.tmp_gallery&&e.tmp_gallery.length>=10},{content:D(()=>[e.files&&e.files.length>0?(a(),n("div",Pe,[Ge,t("div",Me,[(a(!0),n(S,null,J(e.files,(c,u)=>(a(),n("div",{key:c.name+c.type+c.size,class:"card m-0 flex border-1 surface-border align-items-center justify-content-between pl-4 pr-3 py-3 w-full my-2"},[t("div",Oe,[t("img",{role:"presentation",alt:c.name,src:c.objectURL,width:"50",class:"shadow-2"},null,8,Re),t("div",qe,[t("div",He,T(c.name),1),t("div",null,T(e.formatSize(c.size)),1)])]),_(x,{icon:"pi pi-times",onClick:m=>e.deleteFile(u),class:"p-button p-component p-button-icon-only p-fileupload-file-remove p-button-text p-button-danger p-button-rounded"},null,8,["onClick"])]))),128))])])):f("",!0),e.tmp_gallery&&e.tmp_gallery[0]&&e.tmp_gallery[0].id?(a(),n(S,{key:1},[e.files&&e.files.length>0?(a(),n("h4",Ye," Completed ")):f("",!0),t("div",Je,[(a(!0),n(S,null,J(e.tmp_gallery,(c,u)=>(a(),n(S,{key:c.id},[c&&c.url?(a(),n("div",Ke,[t("img",{role:"presentation",class:"p-fileupload-file-thumbnail h-4rem w-7rem",src:c.url,style:{border:"1px solid rgb(0 0 0 / 6%)"}},null,8,Qe),j(t("i",{class:"pi pi-times p-button-icon text-red-600 cursor-pointer font-semibold icon-delete small",onClick:m=>e.deleteImage(c.id,u)},null,8,We),[[o,"Delete",void 0,{top:!0}]])])):f("",!0)],64))),128))])],64)):f("",!0)]),empty:D(()=>[e.tmp_gallery?f("",!0):(a(),n("div",Xe,et))]),_:1},8,["modelValue","onSelect","fileLimit","disabled"])]),t("div",tt,[t("div",lt,[ot,_(F,{type:"text",modelValue:e.folder_url,"onUpdate:modelValue":l[1]||(l[1]=c=>e.folder_url=c),class:"w-full"},null,8,["modelValue"])])])])]),_:1})}const nt=$(Le,[["render",at]]),st={props:{title:String,videoUrl:Boolean},setup(L,l){const s=d(),e=ae(),V=Z(),b=d(),x=d(),k=d(),F=h=>{b.value=h.files,s.value||(s.value=[])},y=(h,U)=>{h&&(G(),e.deleteAttachment(h).then(()=>{C(),B(V,{message:"File deleted correctly.",title:""}),o(U)}).catch(z=>{C(),N(V,z)}))},o=h=>{s.value.splice(h,1),s.value.length==0&&(s.value=null)},c=h=>{b.value.splice(h,1)},u=()=>s.value&&s.value.length>0?10-s.value.length:10,m=h=>h.type==="image/jpeg";return l.expose({tmp_attachment:s,files:b,fileUpload:x,folder_url:k}),{tmp_attachment:s,files:b,fileUpload:x,folder_url:k,onSelectedFiles:F,deleteImage:y,formatSize:ne,deleteGalleryImage:o,deleteFile:c,checkFileLimit:u,checkIsImage:m,getFileName:be}}};const it={class:"flex align-items-center justify-content-between"},ct={class:"mb-4"},rt={class:"flex col-10"},dt={class:"col-6 flex-column p-0"},mt={key:0},ut=t("h4",{class:"mb-1 mt-0"},"Pending",-1),_t={class:"flex flex-wrap"},vt={class:"flex align-items-center"},pt=["alt","src"],ft={key:1,class:"pi pi-file text-2xl"},ht={class:"flex flex-column ml-2",style:{"font-size":"12px"}},gt={class:"mb-1"},bt={key:0,class:"mb-1 mt-3"},yt={class:"flex flex-column"},xt={key:0,class:"flex align-items-top image mx-2 my-2"},kt=["src"],Ct={key:1,class:"file mr-2"},Ft=["href"],Vt=t("i",{class:"pi pi-file text-2xl mr-2"},null,-1),Ut=["onClick"],wt={key:0,class:"text-center"},Et=t("b",null,"Drag and drop files to here to upload.",-1),It=t("p",{class:"text-xs"},"(Maximum size 2 MB)",-1),St=[Et,It];function At(L,l,s,e,V,b){const x=p("Button"),k=p("FileUpload"),F=p("Card"),y=se("tooltip");return a(),Y(F,{class:"mt-4"},{content:D(()=>[t("div",it,[t("h2",ct,T(s.title),1)]),t("div",rt,[t("div",dt,[_(k,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!0,maxFileSize:2e6,id:"logo",modelValue:e.tmp_attachment,"onUpdate:modelValue":l[0]||(l[0]=o=>e.tmp_attachment=o),customUpload:!0,onSelect:e.onSelectedFiles,fileLimit:e.checkFileLimit(),ref:"fileUpload",disabled:e.tmp_attachment&&e.tmp_attachment.length>=10},{content:D(()=>[e.files&&e.files.length>0?(a(),n("div",mt,[ut,t("div",_t,[(a(!0),n(S,null,J(e.files,(o,c)=>(a(),n("div",{key:o.name+o.type+o.size,class:"card m-0 flex border-1 surface-border align-items-center justify-content-between pl-4 pr-3 py-3 w-full my-2"},[t("div",vt,[e.checkIsImage(o)?(a(),n("img",{key:0,role:"presentation",alt:o.name,src:o.objectURL,width:"50",class:"shadow-2"},null,8,pt)):(a(),n("i",ft)),t("div",ht,[t("div",gt,T(o.name),1),t("div",null,T(e.formatSize(o.size)),1)])]),_(x,{icon:"pi pi-times",onClick:u=>e.deleteFile(c),class:"p-button p-component p-button-icon-only p-fileupload-file-remove p-button-text p-button-danger p-button-rounded"},null,8,["onClick"])]))),128))])])):f("",!0),e.tmp_attachment&&e.tmp_attachment[0]&&e.tmp_attachment[0].id?(a(),n(S,{key:1},[e.files&&e.files.length>0?(a(),n("h4",bt," Completed ")):f("",!0),t("div",yt,[(a(!0),n(S,null,J(e.tmp_attachment,(o,c)=>(a(),n(S,{key:o.id},[o&&o.url?(a(),n("div",xt,[e.checkIsImage(o)?(a(),n("img",{key:0,role:"presentation",class:"p-fileupload-file-thumbnail h-4rem w-7rem",src:o.url,style:{border:"1px solid rgb(0 0 0 / 6%)"}},null,8,kt)):(a(),n("div",Ct,[t("a",{href:o.url,target:"_blank",class:"flex align-items-center"},[Vt,Ue(T(e.getFileName(o.url)),1)],8,Ft)])),j(t("i",{class:"pi pi-times p-button-icon text-red-600 cursor-pointer font-semibold icon-delete small",onClick:u=>e.deleteImage(o.id,c)},null,8,Ut),[[y,"Delete",void 0,{top:!0}]])])):f("",!0)],64))),128))])],64)):f("",!0)]),empty:D(()=>[e.tmp_attachment?f("",!0):(a(),n("div",wt,St))]),_:1},8,["modelValue","onSelect","fileLimit","disabled"])])])]),_:1})}const Tt=$(st,[["render",At]]),Dt={setup(){const L=d({icon:"pi pi-home",to:"/events"}),l=d(""),s=d([{label:""}]),e=d({}),V=["draft","online","archived"],b=d(""),x=d(!0),k=d(!0),F=d(!0),y=d(),o=d(),c=d(),u=d(),m=d(),h=d(!1),U=d(!1),z=we(),M=Ee(),w=Z(),g=De(),P=Ae(),ie=Te(),E=Q(()=>P.getCurrentEvent),ce=Q(()=>ie.allCountries),ee=Q(()=>z.getSelectedCountry),K=async function(r){G(),P.fetchEventsDetail(r).then(()=>{C(),re()}).catch(i=>{C(),N(w,i)})},re=function(){var r,i;if(e.value=Object.assign({},E.value),e.value.country_id=(r=e.value.country)==null?void 0:r.id,b.value=((i=e.value.country)==null?void 0:i.default_language_code)+"",e.value.date=W(E.value.date+""),e.value.bookable_from=W(E.value.bookable_from+""),e.value.bookable_to=W(E.value.bookable_to+""),ye(y,e),xe(o,e),u.value){const v=e.value.gallery_images_url;v&&v.length>0&&(u.value.tmp_gallery=v),u.value.folder_url=e.value.folder_url}if(m.value){const v=e.value.attachment_urls;v&&v.length>0&&(m.value.tmp_attachment=v)}ke(E,e)},te=function(){var O;const r=new FormData,i=Object.assign({},e.value);e.value.date&&(i.date=X(e.value.date)),e.value.bookable_from&&(i.bookable_from=X(e.value.bookable_from)),e.value.bookable_to&&(i.bookable_to=X(e.value.bookable_to));const v=o.value.tmp_image,A=u.value.files;if(v&&v.image&&(i.image=v.image),v&&v.video_url&&(i.video_url=o.value.tmp_image.video_url),A&&A.length>0&&A.length>0&&oe(A,"event[gallery_images][]",r),u.value&&(i.folder_url=u.value.folder_url),m.value){const R=m.value.files;R&&R.length>0&&R.length>0&&oe(R,"event[attachments][]",r)}return i.country_id=(O=i.country)==null?void 0:O.id,delete i.country,(l.value||i.id)&&Ce(E,i),delete i.target_all,delete i.target_clusters,delete i.target_group_ids,Fe(r,i,"event"),Ve(y,r,"event"),r},de=async function(){const r={id:e.value.id,formData:te()};P.updateEvents(r).then(()=>{C(),K(e.value.id+""),B(w,{message:"Event updated correctly.",title:""}),u.value.files=[],u.value.fileUpload.files=[],m.value.files=[],m.value.fileUpload.files=[]}).catch(i=>{C(),N(w,i)})},me=async function(){const r={formData:te()};P.createEvents(r).then(()=>{C(),K(E.value.id+""),B(w,{message:"Event created correctly.",title:""}),Se.push({name:"event-detail",params:{id:E.value.id}})}).catch(i=>{C(),N(w,i)})},ue=function(){h.value=!0,_e(),U.value?B(w,{message:"Check that you have completed the required fields.",title:"",error:!0}):(M.params.id!=""||e.value.id?de():me(),h.value=!1,G())},_e=function(){var r,i;e.value.translations&&((i=(r=e.value.country)==null?void 0:r.language_codes)==null||i.forEach(v=>{I(e.value.translations[v].title),I(e.value.translations[v].description),I(e.value.translations[v].short_description)})),I(e.value.status),I(e.value.date),I(e.value.bookable_from),I(e.value.bookable_to)},I=function(r){if(h.value)return r==""||r==null?U.value=!0:U.value=!1,U.value},le=function(){var r,i,v,A;b.value!=((r=e.value.country)==null?void 0:r.default_language_code)&&(b.value=((i=e.value.country)==null?void 0:i.default_language_code)+"",e.value.translations={},(A=(v=e.value.country)==null?void 0:v.language_codes)==null||A.forEach(O=>{e.value.translations[O]={title:null,description:null}}))},ve=r=>{g.require({target:r.currentTarget,message:"Are you sure you want to send the push notification?",icon:"pi pi-exclamation-triangle",acceptLabel:"Send",rejectLabel:"Cancel",accept:()=>{pe()}})},pe=async function(){G(),await P.sendPush(l.value).then(()=>{B(w,{message:"Notification sent correctly.",title:"",error:!0}),C()}).catch(r=>{C(),N(w,r)})};return Ie(async()=>{l.value=M.params.id+"",l.value!=""&&l.value!="undefined"?(K(l.value),s.value[0]={label:"Edit events"}):(e.value.status="draft",s.value[0]={label:"Add events"},e.value.country=ee.value,e.value.country_id=ee.value.id,le())}),{home:L,items:s,tmp_events:e,events_status:V,audienceCard:y,selectedLang:b,showCheckboxAll:x,showSelectClusters:k,showSelectGroups:F,submitForm:h,uploadImageCard:o,eventContentCard:c,galleryImageCard:u,uploadAttachmentCard:m,countries:ce,validateField:I,saveEvent:ue,setSelectedLang:le,confirmSendPush:ve}},components:{AudienceCard:fe,UploadImageCard:he,EventContentCard:ge,GalleryImageCard:nt,UploadAttachmentCard:Tt}},Lt={class:"m-4"},Bt={class:"flex justify-content-between align-items-center mb-3"},Nt={class:"flex align-items-start justify-content-between"},jt=t("h2",{class:"mb-2"},"EVENT DETAIL",-1),zt={key:0,class:"field col-2 mb-0"},Pt={key:0,class:"p-error"},Gt={class:"formgrid grid col-10 px-0 xs:col-12"},Mt={key:0,class:"field col-6 xs:col-6 flex flex-column"},Ot=t("label",{for:"name"},"Location",-1),Rt={key:0,class:"formgrid grid col-10 px-0 xs:col-12"},qt={class:"field col-3 xs:col-4"},Ht=t("label",{for:"name"},"Event date*",-1),Yt={key:0,class:"p-error"},Jt={class:"field col-3 xs:col-4"},Kt=t("label",{for:"name"},"Bookable from*",-1),Qt={key:0,class:"p-error"},Wt={class:"field col-3 xs:col-4"},Xt=t("label",{for:"name"},"Bookable to*",-1),Zt={key:0,class:"p-error"},$t={key:1,class:"formgrid grid col-10 px-0 xs:col-12"},el={class:"field col-3 flex flex-column"},tl=t("label",{for:"title"},"Available seats",-1),ll={class:"field col-3 flex flex-column"},ol=t("label",{for:"title"},"Number guests per person",-1),al={class:"field col-3 mt-4 mb-0"},nl={class:"field-checkbox"},sl=t("label",{for:"gift"},"There is a free gift",-1);function il(L,l,s,e,V,b){const x=p("Breadcrumb"),k=p("Button"),F=p("Dropdown"),y=p("InputText"),o=p("Calendar"),c=p("Checkbox"),u=p("Card"),m=p("AudienceCard"),h=p("EventContentCard"),U=p("UploadImageCard"),z=p("GalleryImageCard"),M=p("UploadAttachmentCard"),w=p("ConfirmPopup");return a(),n("div",Lt,[t("div",Bt,[_(x,{home:e.home,model:e.items,class:"mt-0 p-0"},null,8,["home","model"]),t("div",null,[_(k,{label:"Save",onClick:e.saveEvent},null,8,["onClick"]),e.tmp_events.id?(a(),Y(k,{key:0,label:"Send push",onClick:l[0]||(l[0]=g=>e.confirmSendPush(g)),class:"ml-3 p-button-outlined",icon:"pi pi-envelope"})):f("",!0)])]),_(u,null,{content:D(()=>[t("div",Nt,[jt,e.tmp_events.country?(a(),n("div",zt,[_(F,{modelValue:e.tmp_events.status,"onUpdate:modelValue":l[1]||(l[1]=g=>e.tmp_events.status=g),options:e.events_status,class:q(["w-full capitalize dropdown-status",{"p-invalid":e.validateField(e.tmp_events.status)}])},null,8,["modelValue","options","class"]),e.validateField(e.tmp_events.status)?(a(),n("small",Pt,"Campo obbligatorio.")):f("",!0)])):f("",!0)]),t("div",Gt,[e.tmp_events.country?(a(),n("div",Mt,[Ot,_(y,{id:"title",type:"text",modelValue:e.tmp_events.location,"onUpdate:modelValue":l[2]||(l[2]=g=>e.tmp_events.location=g)},null,8,["modelValue"])])):f("",!0)]),e.tmp_events.country?(a(),n("div",Rt,[t("div",qt,[Ht,_(o,{inputId:"dateformat",modelValue:e.tmp_events.date,"onUpdate:modelValue":l[3]||(l[3]=g=>e.tmp_events.date=g),dateFormat:"dd/mm/yy",manualInput:!1,class:q({"p-invalid":e.validateField(e.tmp_events.date)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.date)?(a(),n("small",Yt,"Campo obbligatorio.")):f("",!0)]),t("div",Jt,[Kt,_(o,{inputId:"dateformat",modelValue:e.tmp_events.bookable_from,"onUpdate:modelValue":l[4]||(l[4]=g=>e.tmp_events.bookable_from=g),dateFormat:"dd/mm/yy",manualInput:!1,class:q({"p-invalid":e.validateField(e.tmp_events.bookable_from)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.bookable_from)?(a(),n("small",Qt,"Campo obbligatorio.")):f("",!0)]),t("div",Wt,[Xt,_(o,{inputId:"dateformat",modelValue:e.tmp_events.bookable_to,"onUpdate:modelValue":l[5]||(l[5]=g=>e.tmp_events.bookable_to=g),dateFormat:"dd/mm/yy",manualInput:!1,class:q({"p-invalid":e.validateField(e.tmp_events.bookable_to)}),placeholder:"gg/mm/aaaa"},null,8,["modelValue","class"]),e.validateField(e.tmp_events.bookable_to)?(a(),n("small",Zt,"Campo obbligatorio.")):f("",!0)])])):f("",!0),e.tmp_events.country?(a(),n("div",$t,[t("div",el,[tl,_(y,{id:"title",type:"text",modelValue:e.tmp_events.seats,"onUpdate:modelValue":l[6]||(l[6]=g=>e.tmp_events.seats=g)},null,8,["modelValue"])]),t("div",ll,[ol,_(y,{id:"title",type:"text",modelValue:e.tmp_events.guests,"onUpdate:modelValue":l[7]||(l[7]=g=>e.tmp_events.guests=g)},null,8,["modelValue"])]),t("div",al,[t("div",nl,[_(c,{inputId:"gift",modelValue:e.tmp_events.gift,"onUpdate:modelValue":l[8]||(l[8]=g=>e.tmp_events.gift=g),binary:!0},null,8,["modelValue"]),sl])])])):f("",!0)]),_:1}),j(_(m,{ref:"audienceCard"},null,512),[[H,e.tmp_events.country]]),e.tmp_events.country&&e.selectedLang?(a(),Y(h,{key:0,selectedLang:e.selectedLang,submitForm:e.submitForm,tmp_events:e.tmp_events,ref:"eventContentCard",title:"EVENT CONTENT"},null,8,["selectedLang","submitForm","tmp_events"])):f("",!0),j(_(U,{title:"EVENT MEDIA",videoUrl:!0,ref:"uploadImageCard"},null,512),[[H,e.tmp_events.country]]),j(_(z,{title:"EVENT GALLERY",videoUrl:!1,ref:"galleryImageCard"},null,512),[[H,e.tmp_events.country&&e.tmp_events.id]]),j(_(M,{title:"EVENT ATTACHMENTS",videoUrl:!1,ref:"uploadAttachmentCard"},null,512),[[H,e.tmp_events.country&&e.tmp_events.id]]),_(w)])}const xl=$(Dt,[["render",il]]);export{xl as default};
