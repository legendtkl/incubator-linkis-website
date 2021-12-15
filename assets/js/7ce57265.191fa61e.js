"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3979],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={title:"Path_Usage",sidebar_position:1},c=void 0,l={unversionedId:"development/development_specification/path_usage",id:"development/development_specification/path_usage",isDocsHomePage:!1,title:"Path_Usage",description:"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file.",source:"@site/docs/development/development_specification/path_usage.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/path_usage",permalink:"/docs/next/development/development_specification/path_usage",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/development_specification/path_usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Path_Usage",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/development/development_specification/overview"},next:{title:"Overview",permalink:"/docs/next/upgrade/overview"}},s=[],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please note: Linkis provides a unified Storage module, so you must follow the Linkis path specification when using the path or configuring the path in the configuration file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("strong",{parentName:"p"},"Compulsory"),"]","When using a file path, whether it is local, HDFS, or HTTP, the schema information must be included. Among them:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Scheme header for local file is: file:///;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Scheme header for HDFS is: hdfs:///;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Scheme header for HTTP is: http:///."))))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"There should be no special characters in the path. Try to use the combination of English characters, underline and numbers.")))}f.isMDXComponent=!0}}]);