import{q as r,o as s,c as i,a as t,t as a,_ as c,F as p,s as g,b as l,v as m}from"./DIdaT3oj.js";const h={class:"judge"},f=["src"],j={class:"judge__name"},v={class:"judge__position"},b={class:"judge__about"},y=r({__name:"JudgeCard",props:{image:{},name:{},position:{},about:{}},setup(d){return(e,u)=>(s(),i("div",h,[t("img",{class:"judge__img",src:e.image,width:"150",height:"150",alt:""},null,8,f),t("p",j,a(e.name),1),t("p",v,a(e.position),1),t("p",b,a(e.about),1)]))}}),I=c(y,[["__scopeId","data-v-2edc79fd"]]),x={class:"judges"},A={class:"judges__cards"},C=r({__name:"judges",setup(d){const e=[{image:"/img/photo-1.jpg",name:"Stanislav Zazhogin",position:"Lead Software Engineer",about:"Red Hat Certified Architect (RHCA) with 10+ years of expertise in designing and implementing scalable, fault-tolerant distributed systems, leveraging cloud computing, Infrastructure as Code (IaC), and advanced container orchestration."},{image:"/img/photo-2.jpg",name:"Alexandr Vishniakov",position:"Senior Architect",about:"IT expert with 15+ years of experience in system architecture, cloud computing and modern delivery practices. A leader in designing resilient infrastructure, scalable and automated solutions."},{image:"/img/photo-3.jpg",name:"Iuliia Kozlova",position:"Lead Quality Assurance Engineer",about:"IT expert with 4+ years of experience in quality assurance, specializing in security and performance optimization. ISTQB certified and a member of the American Software Testing Qualifications Board."}];return(u,n)=>{const _=I;return s(),i("div",x,[n[0]||(n[0]=t("h1",{class:"judges__title"},"Judges",-1)),t("div",A,[(s(),i(p,null,g(e,o=>l(_,m({key:o.name,ref_for:!0},o),null,16)),64))])])}}}),S=c(C,[["__scopeId","data-v-84d125cd"]]);export{S as default};
