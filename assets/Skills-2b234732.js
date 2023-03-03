import{a as t,j as e,m as r}from"./index-49bf8976.js";import{T as s}from"./Title-db1fa71d.js";const l=[{logo:"/js.png",completeness:"95%"},{logo:"/react.png",completeness:"70%"},{logo:"/next.png",completeness:"70%"},{logo:"/node.png",completeness:"90%"},{logo:"/mysql.png",completeness:"70%"},{logo:"/html.png",completeness:"90%"},{logo:"/css.png",completeness:"70%"},{logo:"/tailwindcss.svg",completeness:"95%"}];function c({}){return t("div",{className:"h-screen flex flex-col ",children:[e(s,{firstPart:"Ski",secondPart:"lls"}),e("div",{className:"h-full flex items-center justify-center p-4",children:e("div",{className:"flex flex-row items-center justify-center flex-wrap gap-2 md:gap-4 lg:p-16",children:l.map((o,n)=>t(r.div,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:1,delay:n*Math.random()*.1}},viewport:{once:!0},tabIndex:0,className:`\r
            \r
    h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 group\r
    rounded-full \r
    overflow-hidden\r
    relative grid place-items-center\r
    filter hover:grayscale focus:grayscale transition-all duration-100 ease-in-out\r
    border-[#74A4BC]/50 border-2\r
    `,children:[e("img",{src:o.logo,className:"h-5/6 w-5/6 rounded-full object-contain",alt:""}),e("div",{className:`\r
            opacity-0 pointer-events-none \r
            group-hover:pointer-events-auto group-hover:opacity-100\r
            group-focus:pointer-events-auto group-focus:opacity-100\r
            text-xl text-white font-bold flex items-center justify-center\r
            bg-black/50\r
            absolute inset-0 transition-opacity duration-100\r
            `,children:o.completeness})]},n))})})]})}export{c as default};
