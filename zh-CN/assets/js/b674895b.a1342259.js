"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4939],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},39697:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528",sidebar_position:3},p=void 0,u={unversionedId:"architecture/ujes/asynchronous_thread_pool",id:"version-0.11.0/architecture/ujes/asynchronous_thread_pool",isDocsHomePage:!1,title:"\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528",description:"UJES\u5982\u4f55\u5b9e\u73b0\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/ujes/asynchronous_thread_pool.md",sourceDirName:"architecture/ujes",slug:"/architecture/ujes/asynchronous_thread_pool",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/asynchronous_thread_pool",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/ujes/asynchronous_thread_pool.md",tags:[],version:"0.11.0",sidebarPosition:3,frontMatter:{title:"\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Spark\u5f15\u64ce\u7684\u6587\u4ef6\u5bfc\u5165\u5bfc\u51fa",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/file_import_and_export_structure"},next:{title:"Linkis \u7f16\u8bd1\u6253\u5305",permalink:"/zh-CN/docs/0.11.0/development/compile_and_package"}},l=[{value:"1 \u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528\u7684\u4f18\u52bf",id:"1-\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528\u7684\u4f18\u52bf",children:[]},{value:"2 \u5982\u4f55\u5b9e\u73b0",id:"2-\u5982\u4f55\u5b9e\u73b0",children:[]}],s={toc:l};function m(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"UJES\u5982\u4f55\u5b9e\u73b0\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528")),(0,a.kt)("h2",{id:"1-\u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528\u7684\u4f18\u52bf"},"1 \u5168\u5f02\u6b65\u7ebf\u7a0b\u6c60\u8c03\u7528\u7684\u4f18\u52bf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"5\u5927\u5f02\u6b65\u6d88\u606f\u961f\u5217\u548c\u7ebf\u7a0b\u6c60")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Job\u6bcf\u6b21\u5360\u7528\u7ebf\u7a0b\u4e0d\u52301\u6beb\u79d2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u4e2a\u5165\u53e3\u53ef\u627f\u63a5\u8d851\u4e07+TPS\u5e38\u9a7b\u578bJob\u8bf7\u6c42"))),(0,a.kt)("h2",{id:"2-\u5982\u4f55\u5b9e\u73b0"},"2 \u5982\u4f55\u5b9e\u73b0"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5168\u5f02\u6b65\u8c03\u7528\u7ebf\u7a0b\u6c60",src:r(92745).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u63d0\u9ad8\u4e0a\u5c42\u7684\u8bf7\u6c42\u541e\u5410\u80fd\u529b\uff1f")),(0,a.kt)("p",{parentName:"li"},"Entrance\u7684WebSocket\u5904\u7406\u5668\uff0c\u5185\u7f6e\u4e00\u4e2a\u5904\u7406\u7ebf\u7a0b\u6c60\u548c\u5904\u7406\u961f\u5217\uff0c\u63a5\u6536Spring Cloud Gateway\u8def\u7531\u8f6c\u53d1\u7684\u4e0a\u5c42\u8bf7\u6c42\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u4fdd\u8bc1\u4e0d\u540c\u7cfb\u7edf\u4e0d\u540c\u7528\u6237\u7684\u6267\u884c\u8bf7\u6c42\uff0c\u4e92\u76f8\u9694\u79bb\uff1f")),(0,a.kt)("p",{parentName:"li"},"Entrance\u7684Job\u8c03\u5ea6\u6c60\uff0c\u6bcf\u4e2a\u7cfb\u7edf\u7684\u6bcf\u4e2a\u7528\u6237\uff0c\u90fd\u6709\u4e00\u4e2a\u4e13\u7528\u7ebf\u7a0b\uff0c\u4fdd\u8bc1\u9694\u79bb\u5ea6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u4fdd\u8bc1Job\u6267\u884c\u9ad8\u6548\uff1f")),(0,a.kt)("p",{parentName:"li"},"Job\u6267\u884c\u6c60\uff0c\u53ea\u7528\u4e8e\u63d0\u4ea4Job\uff0c\u4e00\u65e6Job\u63d0\u4ea4\u7ed9\u4e86Engine\u7aef\uff0c\u5219\u7acb\u9a6c\u653e\u5165Job\u6267\u884c\u961f\u5217\uff0c\u4fdd\u8bc1\u6bcf\u4e2aJob\u5360\u7528\u6267\u884c\u6c60\u7ebf\u7a0b\u7684\u65f6\u95f4\u4e0d\u8d85\u8fc71\u6beb\u79d2\u3002"),(0,a.kt)("p",{parentName:"li"},"RPC\u8bf7\u6c42\u63a5\u6536\u6c60\uff0c\u7528\u4e8e\u63a5\u6536\u548c\u5904\u7406Engine\u7aef\u63a8\u6765\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u548c\u7ed3\u679c\u96c6\uff0c\u5e76\u5b9e\u65f6\u66f4\u65b0Job\u7684\u76f8\u5173\u4fe1\u606f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5b9e\u65f6\u5c06Job\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u72b6\u6001\u63a8\u7ed9\u4e0a\u5c42\u7cfb\u7edf\uff1f")),(0,a.kt)("p",{parentName:"li"},"WebSocket\u53d1\u9001\u6c60\uff0c\u4e13\u95e8\u7528\u4e8e\u5904\u7406Job\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u548c\u72b6\u6001\uff0c\u5c06\u4fe1\u606f\u63a8\u7ed9\u4e0a\u5c42\u7cfb\u7edf\u3002"))))}m.isMDXComponent=!0},92745:function(e,t,r){t.Z=r.p+"assets/images/fully_asynchronous_call_thread_pool-caf5167951b6d1ef3b43c22fd1493431.png"}}]);