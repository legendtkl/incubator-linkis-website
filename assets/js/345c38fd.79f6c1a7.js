"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[6436],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=d(t),p=o,f=g["".concat(c,".").concat(p)]||g[p]||l[p]||r;return t?i.createElement(f,a(a({ref:n},u),{},{components:t})):i.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9757:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return g}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],s={title:"JDBC Engine Usage",sidebar_position:2},c="JDBC engine usage documentation",d={unversionedId:"engine_usage/jdbc",id:"version-1.0.2/engine_usage/jdbc",isDocsHomePage:!1,title:"JDBC Engine Usage",description:"This article mainly introduces the configuration, deployment and use of JDBC engine in Linkis1.0.",source:"@site/versioned_docs/version-1.0.2/engine_usage/jdbc.md",sourceDirName:"engine_usage",slug:"/engine_usage/jdbc",permalink:"/docs/latest/engine_usage/jdbc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/engine_usage/jdbc.md",tags:[],version:"1.0.2",sidebarPosition:2,frontMatter:{title:"JDBC Engine Usage",sidebar_position:2},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Hive Engine Usage",permalink:"/docs/latest/engine_usage/hive"},next:{title:"Python Engine Usage",permalink:"/docs/latest/engine_usage/python"}},u=[{value:"1. Environment configuration before using the JDBC engine",id:"1-environment-configuration-before-using-the-jdbc-engine",children:[]},{value:"2. JDBC engine configuration and deployment",id:"2-jdbc-engine-configuration-and-deployment",children:[{value:"2.1 JDBC version selection and compilation",id:"21-jdbc-version-selection-and-compilation",children:[]},{value:"2.2 JDBC engineConn deployment and loading",id:"22-jdbc-engineconn-deployment-and-loading",children:[]},{value:"2.3 JDBC engine tags",id:"23-jdbc-engine-tags",children:[]}]},{value:"3. The use of JDBC engine",id:"3-the-use-of-jdbc-engine",children:[{value:"Ready to operate",id:"ready-to-operate",children:[]},{value:"3.1 How to use Scriptis",id:"31-how-to-use-scriptis",children:[]},{value:"3.2 How to use workflow",id:"32-how-to-use-workflow",children:[]},{value:"3.3 How to use Linkis Client",id:"33-how-to-use-linkis-client",children:[]}]},{value:"4. JDBC engine user settings",id:"4-jdbc-engine-user-settings",children:[]}],l={toc:u};function g(e){var n=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jdbc-engine-usage-documentation"},"JDBC engine usage documentation"),(0,r.kt)("p",null,"This article mainly introduces the configuration, deployment and use of JDBC engine in Linkis1.0."),(0,r.kt)("h2",{id:"1-environment-configuration-before-using-the-jdbc-engine"},"1. Environment configuration before using the JDBC engine"),(0,r.kt)("p",null,"If you want to use the JDBC engine on your server, you need to prepare the JDBC connection information, such as the connection address, user name and password of the MySQL database, etc."),(0,r.kt)("h2",{id:"2-jdbc-engine-configuration-and-deployment"},"2. JDBC engine configuration and deployment"),(0,r.kt)("h3",{id:"21-jdbc-version-selection-and-compilation"},"2.1 JDBC version selection and compilation"),(0,r.kt)("p",null,"The JDBC engine does not need to be compiled by the user, and the compiled JDBC engine plug-in package can be used directly. Drivers that have been provided include MySQL, PostgreSQL, etc."),(0,r.kt)("h3",{id:"22-jdbc-engineconn-deployment-and-loading"},"2.2 JDBC engineConn deployment and loading"),(0,r.kt)("p",null,"Here you can use the default loading method to use it normally, just install it according to the standard version."),(0,r.kt)("h3",{id:"23-jdbc-engine-tags"},"2.3 JDBC engine tags"),(0,r.kt)("p",null,"Here you can use the default dml.sql to insert it and it can be used normally."),(0,r.kt)("h2",{id:"3-the-use-of-jdbc-engine"},"3. The use of JDBC engine"),(0,r.kt)("h3",{id:"ready-to-operate"},"Ready to operate"),(0,r.kt)("p",null,"You need to configure JDBC connection information, including connection address information and user name and password."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3865).Z})),(0,r.kt)("p",null,"Figure 3-1 JDBC configuration information"),(0,r.kt)("h3",{id:"31-how-to-use-scriptis"},"3.1 How to use Scriptis"),(0,r.kt)("p",null,"The way to use Scriptis is the simplest. You can go directly to Scriptis, right-click the directory and create a new JDBC script, write JDBC code and click Execute."),(0,r.kt)("p",null,"The execution principle of JDBC is to load the JDBC Driver and submit sql to the SQL server for execution and obtain the result set and return."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8902).Z})),(0,r.kt)("p",null,"Figure 3-2 Screenshot of the execution effect of JDBC"),(0,r.kt)("h3",{id:"32-how-to-use-workflow"},"3.2 How to use workflow"),(0,r.kt)("p",null,"DSS workflow also has a JDBC node, you can drag into the workflow node, then double-click to enter and edit the code, and then execute it in the form of a workflow."),(0,r.kt)("h3",{id:"33-how-to-use-linkis-client"},"3.3 How to use Linkis Client"),(0,r.kt)("p",null,"Linkis also provides a client way to call JDBC tasks, the way to call is through the SDK provided by LinkisClient. We provide java and scala two ways to call, the specific usage can refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/user_guide/sdk_manual"},"JAVA SDK Manual"),"."),(0,r.kt)("h2",{id:"4-jdbc-engine-user-settings"},"4. JDBC engine user settings"),(0,r.kt)("p",null,"JDBC user settings are mainly JDBC connection information, but it is recommended that users encrypt and manage this password and other information."))}g.isMDXComponent=!0},3865:function(e,n,t){n.Z=t.p+"assets/images/jdbc-conf-fca524f6200e360db1f8b9740e1bddf6.png"},8902:function(e,n,t){n.Z=t.p+"assets/images/jdbc-run-fe0a09fead1ca699d08b646f9908bb60.png"}}]);