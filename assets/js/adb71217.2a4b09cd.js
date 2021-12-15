"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1854],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(a,".").concat(h)]||d[h]||p[h]||c;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9847:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),i=r(3366),c=(r(7294),r(3905)),o=["components"],s={title:"CS Architecture",sidebar_position:1},a=void 0,l={unversionedId:"architecture/public_enhancement_services/context_service/context_service",id:"architecture/public_enhancement_services/context_service/context_service",isDocsHomePage:!1,title:"CS Architecture",description:"ContextService Architecture",source:"@site/docs/architecture/public_enhancement_services/context_service/context_service.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service",permalink:"/docs/next/architecture/public_enhancement_services/context_service/context_service",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/architecture/public_enhancement_services/context_service/context_service.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"CS Architecture",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"BML",permalink:"/docs/next/architecture/public_enhancement_services/bml"},next:{title:"Overview",permalink:"/docs/next/architecture/public_enhancement_services/context_service/overview"}},u=[{value:"<strong>ContextService Architecture</strong>",id:"contextservice-architecture",children:[{value:"<strong>Horizontal Division</strong>",id:"horizontal-division",children:[]},{value:"<strong>Vertical Division</strong>",id:"vertical-division",children:[]}]},{value:"<strong>UML Class Diagram</strong>",id:"uml-class-diagram",children:[]},{value:"<strong>Scheduler thread model</strong>",id:"scheduler-thread-model",children:[]}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"contextservice-architecture"},(0,c.kt)("strong",{parentName:"h2"},"ContextService Architecture")),(0,c.kt)("h3",{id:"horizontal-division"},(0,c.kt)("strong",{parentName:"h3"},"Horizontal Division")),(0,c.kt)("p",null,"Horizontally divided into three modules: Restful, Scheduler, Service"),(0,c.kt)("h4",{id:"restful-responsibilities"},"Restful Responsibilities:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Encapsulate the request as httpjob and submit it to the Scheduler\n")),(0,c.kt)("h4",{id:"scheduler-responsibilities"},"Scheduler Responsibilities:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"Find the corresponding service through the ServiceName of the httpjob protocol to execute the job\n")),(0,c.kt)("h4",{id:"service-responsibilities"},"Service Responsibilities:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"The module that actually executes the request logic, encapsulates the ResponseProtocol, and wakes up the wait thread in Restful\n")),(0,c.kt)("h3",{id:"vertical-division"},(0,c.kt)("strong",{parentName:"h3"},"Vertical Division")),(0,c.kt)("p",null,"Vertically divided into 4 modules: Listener, History, ContextId, Context:"),(0,c.kt)("h4",{id:"listener-responsibilities"},"Listener responsibilities:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Responsible for the registration and binding of the client side (write to the database and register in the CallbackEngine)")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Heartbeat interface, return Array","[ListenerCallback]"," through CallbackEngine"))),(0,c.kt)("h4",{id:"history-responsibilities"},"History Responsibilities:"),(0,c.kt)("p",null,"Create and remove history, operate Persistence for DB persistence"),(0,c.kt)("h4",{id:"contextid-responsibilities"},"ContextId Responsibilities:"),(0,c.kt)("p",null,"Mainly docking with Persistence for ContextId creation, update and removal, etc."),(0,c.kt)("h4",{id:"context-responsibility"},"Context responsibility:"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"For removal, reset and other methods, first operate Persistence for DB persistence, and update ContextCache")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Encapsulate the query condition and go to the ContextSearch module to obtain the corresponding ContextKeyValue data"))),(0,c.kt)("p",null,"The steps for requesting access are as follows:\n",(0,c.kt)("img",{src:r(6017).Z})),(0,c.kt)("h2",{id:"uml-class-diagram"},(0,c.kt)("strong",{parentName:"h2"},"UML Class Diagram")),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(9527).Z})),(0,c.kt)("h2",{id:"scheduler-thread-model"},(0,c.kt)("strong",{parentName:"h2"},"Scheduler thread model")),(0,c.kt)("p",null,"Need to ensure that Restful's thread pool is not filled"),(0,c.kt)("p",null,(0,c.kt)("img",{src:r(7125).Z})),(0,c.kt)("p",null,"The sequence diagram is as follows:\n",(0,c.kt)("img",{src:r(6638).Z})))}d.isMDXComponent=!0},6017:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-01-5b0d7f7344f7f400a13356ec948aeb6e.png"},9527:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-02-cde12874c800aa27c9c7d677a7a30e4f.png"},7125:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-03-95159d79adfcbe6ac360043ec9b419b8.png"},6638:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-service-04-d44ddd66397a140d8935e93ca5fd272a.png"}}]);