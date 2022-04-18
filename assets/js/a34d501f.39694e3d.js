"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[341],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),v=u(r),m=c,d=v["".concat(a,".").concat(m)]||v[m]||p[m]||i;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,s=new Array(i);s[0]=v;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},12797:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return v}});var n=r(87462),c=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"CS Persistence Architecture",sidebar_position:3},a=void 0,u={unversionedId:"architecture/public_enhancement_services/context_service/context_service_persistence",id:"version-1.1.0/architecture/public_enhancement_services/context_service/context_service_persistence",isDocsHomePage:!1,title:"CS Persistence Architecture",description:"CSPersistence Architecture",source:"@site/versioned_docs/version-1.1.0/architecture/public_enhancement_services/context_service/context_service_persistence.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_persistence",permalink:"/docs/latest/architecture/public_enhancement_services/context_service/context_service_persistence",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/architecture/public_enhancement_services/context_service/context_service_persistence.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"CS Persistence Architecture",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Listener Architecture",permalink:"/docs/latest/architecture/public_enhancement_services/context_service/context_service_listener"},next:{title:"CS Search Architecture",permalink:"/docs/latest/architecture/public_enhancement_services/context_service/context_service_search"}},l=[{value:"<strong>CSPersistence Architecture</strong>",id:"cspersistence-architecture",children:[{value:"Persistence UML diagram",id:"persistence-uml-diagram",children:[]}]}],p={toc:l};function v(e){var t=e.components,o=(0,c.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cspersistence-architecture"},(0,i.kt)("strong",{parentName:"h2"},"CSPersistence Architecture")),(0,i.kt)("h3",{id:"persistence-uml-diagram"},"Persistence UML diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(12376).Z})),(0,i.kt)("p",null,"The Persistence module mainly defines ContextService persistence related operations. The entities mainly include CSID, ContextKeyValue, CSResource, and CSTable."))}v.isMDXComponent=!0},12376:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-persistence-01-6579373adbc5e0e9c67b534b4a2d88c7.png"}}]);