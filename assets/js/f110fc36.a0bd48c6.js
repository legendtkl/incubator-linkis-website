"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[8026],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||g[u]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Log",sidebar_position:1},s=void 0,c={unversionedId:"development/development_specification/log",id:"version-1.0.2/development/development_specification/log",isDocsHomePage:!1,title:"Log",description:"1.\t[Convention] Linkis chooses SLF4J and Log4J2 as the log printing framework, removing the logback in the Spring-Cloud package. Since SLF4J will randomly select a logging framework for binding, it is necessary to exclude bridging packages such as SLF4J-LOG4J after introducing new Maven packages in the future, otherwise log printing will be a problem. However, if the newly introduced Maven package depends on a package such as Log4J, do not exclude, otherwise the code may run with an error.",source:"@site/versioned_docs/version-1.0.2/development/development_specification/log.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/log",permalink:"/docs/latest/development/development_specification/log",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/development/development_specification/log.md",tags:[],version:"1.0.2",sidebarPosition:1,frontMatter:{title:"Log",sidebar_position:1},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Exception Throws",permalink:"/docs/latest/development/development_specification/exception_throws"},next:{title:"Path Usage",permalink:"/docs/latest/development/development_specification/path_usage"}},p=[],g={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Convention"),"]"," Linkis chooses SLF4J and Log4J2 as the log printing framework, removing the logback in the Spring-Cloud package. Since SLF4J will randomly select a logging framework for binding, it is necessary to exclude bridging packages such as SLF4J-LOG4J after introducing new Maven packages in the future, otherwise log printing will be a problem. However, if the newly introduced Maven package depends on a package such as Log4J, do not exclude, otherwise the code may run with an error.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Configuration"),"]",' The log4j2 configuration file is default to log4j2.xml and needs to be placed in the classpath. If springcloud combination is needed, "logging:config:classpath:log4j2-spring.xml"(the location of the configuration file) can be added to application.yml.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Compulsory"),"]"," The API of the logging system (log4j2, Log4j, Logback) cannot be used directly in the class. For Scala code, force inheritance from Logging traits is required. For Java, use LoggerFactory.GetLogger(getClass).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Development Convention"),"]"," Since engineConn is started by engineConnManager from the command line, we specify the path of the log configuration file on the command line, and also modify the log configuration during the code execution. In particular, redirect the engineConn log to the system's standard out. So the log configuration file for the EngineConn convention is defined in the EnginePlugin and named log4j2-engineConn.xml (this is the convention name and cannot be changed).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Compulsory"),"]"," Strictly differentiate log levels. Fatal logs should be thrown and exited using System.out(-1) when the SpringCloud application is initialized. Error-level exceptions are those that developers must care about and handle. Do not use them casually. The WARN level is the logs of user action exceptions and some logs to troubleshoot bugs later. INFO is the key process log. Debug is a mode log, write as little as possible.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Compulsory"),"]"," Requirements: Every module must have INFO level log; Every key process must have INFO level log. The daemon thread must have a WARN level log to clean up resources, etc.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Compulsory"),"]",' Exception information should include two types of information: crime scene information and exception stack information. If not, then throw it by keyword. Example: logger.error(Parameters/Objects.toString + "_" + e.getMessage(), e);'))))}d.isMDXComponent=!0}}]);