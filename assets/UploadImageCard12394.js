import{s as C,h,a as w,e as b}from"./helpers12394.js";import{aq as S,ad as U,r as v,af as V,_ as k,b as p,l as B,e as c,i as I,B as u,g as o,C as T,m as A,h as x,f as g,w as D,j as f}from"./usetoast.esm12394.js";class F{static async deleteAttachment(t){return(await S(`/attachments/${t}`)).data}}const z=U({id:"attachment",state:()=>({attachment:{}}),getters:{},actions:{async deleteAttachment(s){await F.deleteAttachment(s)}}}),L={props:{title:String,videoUrl:Boolean,dynamicClass:String},setup(s,t){const a=v({}),e=z(),m=V(),r=v(),d=s.dynamicClass?s.dynamicClass:"col-6",_=l=>{a.value.image_url={},a.value.image=l.files[0]},i=async l=>{l&&(C(),await e.deleteAttachment(l).then(()=>{h(),w(m,{message:"File deleted correctly.",title:""}),n()}).catch(y=>{h(),b(m,y)}))},n=()=>{a.value.image=null,a.value.image_url=null,r.value.files=[]};return t.expose({tmp_image:a,deleteImage:i}),{tmp_image:a,fileUpload:r,dynamicCl:d,deleteTmpImage:n,onSelectedFiles:_,deleteImage:i}}},N={class:"flex align-items-center justify-content-between"},j={class:"mb-4"},M={class:"flex"},R={key:0,class:"flex align-items-top"},q=["src"],E={key:0,class:"text-center"},Y=o("b",null,"Drag and drop file to here to upload.",-1),G=o("p",{class:"text-xs"},"(Maximum size 2 MB, 1000x1000px)",-1),H=[Y,G],J={key:0,class:"ml-4 col-5"},K={class:"field"},O=o("label",{for:"video_url"},"Video Url (YouTube, Vimeo)",-1);function P(s,t,a,e,m,r){const d=p("FileUpload"),_=p("InputText"),i=p("Card"),n=B("tooltip");return c(),I(i,{class:"h-full"},{content:u(()=>[o("div",N,[o("h2",j,T(a.title),1)]),o("div",M,[o("div",{class:A(["flex-column p-0",e.dynamicCl])},[x(d,{name:"file",url:"https://www.primefaces.org/upload.php",multiple:!1,accept:"image/*",maxFileSize:2e6,id:"logo",modelValue:e.tmp_image.image,"onUpdate:modelValue":t[1]||(t[1]=l=>e.tmp_image.image=l),customUpload:!0,onSelect:e.onSelectedFiles,onRemove:e.deleteTmpImage,fileLimit:1,ref:"fileUpload"},{content:u(()=>[e.tmp_image.image_url&&e.tmp_image.image_url.url?(c(),g("div",R,[o("img",{role:"presentation",class:"p-fileupload-file-thumbnail h-4rem w-7rem",src:e.tmp_image.image_url.url,style:{border:"1px solid rgb(0 0 0 / 6%)"}},null,8,q),D(o("i",{class:"pi pi-times p-button-icon text-red-600 cursor-pointer font-semibold icon-delete",onClick:t[0]||(t[0]=l=>e.deleteImage(e.tmp_image.image_url.id))},null,512),[[n,"Delete",void 0,{top:!0}]])])):f("",!0)]),empty:u(()=>[e.tmp_image.image_url?f("",!0):(c(),g("div",E,H))]),_:1},8,["modelValue","onSelect","onRemove"])],2),a.videoUrl?(c(),g("div",J,[o("div",K,[O,x(_,{type:"text",modelValue:e.tmp_image.video_url,"onUpdate:modelValue":t[2]||(t[2]=l=>e.tmp_image.video_url=l),class:"w-full"},null,8,["modelValue"])])])):f("",!0)])]),_:1})}const X=k(L,[["render",P]]);export{X as U,z as u};
