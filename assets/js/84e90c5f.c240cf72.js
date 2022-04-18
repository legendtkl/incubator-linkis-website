"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[732],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,c(c({ref:t},l),{},{components:r})):n.createElement(h,c({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},71664:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],a={title:"RPC Module",sidebar_position:2},s=void 0,u={unversionedId:"architecture/commons/rpc",id:"version-1.1.0/architecture/commons/rpc",isDocsHomePage:!1,title:"RPC Module",description:"1 Overview",source:"@site/versioned_docs/version-1.1.0/architecture/commons/rpc.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/rpc",permalink:"/docs/latest/architecture/commons/rpc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/commons/rpc.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"RPC Module",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Message Scheduler Module",permalink:"/docs/latest/architecture/commons/message_scheduler"},next:{title:"Overview",permalink:"/docs/latest/architecture/computation_governance_services/overview"}},l=[{value:"1 Overview",id:"1-overview",children:[]},{value:"2. Architecture description",id:"2-architecture-description",children:[]},{value:"2.1. Architecture design diagram",id:"21-architecture-design-diagram",children:[]},{value:"2.2. Module description",id:"22-module-description",children:[]}],d={toc:l};function p(e){var t=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-overview"},"1 Overview"),(0,o.kt)("p",null,"The call of HTTP interface between Feign-based microservices can only satisfy a simple A microservice instance that randomly selects a service instance in B microservices according to simple rules, and if this B microservice instance wants to asynchronously return information To the caller, it is simply impossible to achieve.\nAt the same time, because Feign only supports simple service selection rules, it cannot forward the request to the specified microservice instance, and cannot broadcast a request to all instances of the recipient microservice."),(0,o.kt)("h2",{id:"2-architecture-description"},"2. Architecture description"),(0,o.kt)("h2",{id:"21-architecture-design-diagram"},"2.1. Architecture design diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Linkis RPC architecture diagram",src:r(25524).Z})),(0,o.kt)("h2",{id:"22-module-description"},"2.2. Module description"),(0,o.kt)("p",null,"The functions of the main modules are introduced as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Eureka: service registration center, user management service, service discovery."),(0,o.kt)("li",{parentName:"ul"},"Sender: Service request interface, the sender uses Sender to request service from the receiver."),(0,o.kt)("li",{parentName:"ul"},"Receiver: The service request receives the corresponding interface, and the receiver responds to the service through this interface."),(0,o.kt)("li",{parentName:"ul"},"Interceptor: Sender will pass the user's request to the interceptor. The interceptor intercepts the request and performs additional functional processing on the request. The broadcast interceptor is used to broadcast operations on the request, the retry interceptor is used to retry the processing of failed requests, and the cache interceptor is used to read and cache simple and unchanged requests. , And the default interceptor that provides the default implementation."),(0,o.kt)("li",{parentName:"ul"},"Decoder, Encoder: used for request encoding and decoding."),(0,o.kt)("li",{parentName:"ul"},"Feign: is a lightweight framework for http request calls, a declarative WebService client program, used for Linkis-RPC bottom communication."),(0,o.kt)("li",{parentName:"ul"},"Listener: monitor module, mainly used to monitor broadcast requests.")))}p.isMDXComponent=!0},25524:function(e,t,r){t.Z=r.p+"assets/images/linkis-rpc-6f940d04ce7c039d0e8ca787d3bed98c.png"}}]);