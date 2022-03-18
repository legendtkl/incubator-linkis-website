"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4416],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Upgrade From 0.9.0 To 0.9.1 Guide",sidebar_position:0},d=void 0,s={unversionedId:"upgrade/upgrade_from_0.9.0_to_0.9.1_guide",id:"version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",isDocsHomePage:!1,title:"Upgrade From 0.9.0 To 0.9.1 Guide",description:"This article briefly introduces the precautions for upgrading Linkis from 0.9.0 to 0.9.1. Linkis has added many new functions and fixed multiple issues. If you have done version adaptation before, you do not need to install according to the new installation package. Can be upgraded through this guide",source:"@site/versioned_docs/version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide.md",sourceDirName:"upgrade",slug:"/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",permalink:"/docs/0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/upgrade/upgrade_from_0.9.0_to_0.9.1_guide.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"Upgrade From 0.9.0 To 0.9.1 Guide",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"How To Quickly Implement A New Engine",permalink:"/docs/0.11.0/development/new_engine_conn"}},p=[{value:"1 Download the corresponding upgrade package",id:"1-download-the-corresponding-upgrade-package",children:[]},{value:"2 Upgrade steps",id:"2-upgrade-steps",children:[{value:"2.1 Modules that do not need to be updated",id:"21-modules-that-do-not-need-to-be-updated",children:[]},{value:"2.2 Only modules that need to be updated",id:"22-only-modules-that-need-to-be-updated",children:[]},{value:"2.3 Add material library related packages",id:"23-add-material-library-related-packages",children:[]},{value:"2.4 Services that need to update configuration and package",id:"24-services-that-need-to-update-configuration-and-package",children:[]},{value:"2.5 Newly added services",id:"25-newly-added-services",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article briefly introduces the precautions for upgrading Linkis from 0.9.0 to 0.9.1. Linkis has added many new functions and fixed multiple issues. If you have done version adaptation before, you do not need to install according to the new installation package. Can be upgraded through this guide")),(0,i.kt)("h2",{id:"1-download-the-corresponding-upgrade-package"},"1 Download the corresponding upgrade package"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","download on the release page wedataSphere-linkis-from-0.9.0-udpdate-0.9.1.zip"),(0,i.kt)("h2",{id:"2-upgrade-steps"},"2 Upgrade steps"),(0,i.kt)("h3",{id:"21-modules-that-do-not-need-to-be-updated"},"2.1 Modules that do not need to be updated"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\nThe eureka module does not need to be updated"),(0,i.kt)("h3",{id:"22-only-modules-that-need-to-be-updated"},"2.2 Only modules that need to be updated"),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","You only need to upgrade the Linkis-related modules to 0.9.1:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"linkis-gateway"),(0,i.kt)("li",{parentName:"ol"},"linkis-resourceManager"),(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-hive-enginemanager"),(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-hive-entrance"),(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-jdbc-entrance"),(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-python-entrance"),(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-spark-entrance")),(0,i.kt)("p",null,"Upgrade steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the 0.9.0 package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip the corresponding service directory and copy the package to the corresponding lib directory"))),(0,i.kt)("p",null,"Linkis-gateway needs to modify the configuration of linkis.properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#Add parameters\nwds.linkis.gateway.conf.enable.token.auth=true\n#Modify the following parameters\nwds.linkis.gateway.conf.url.pass.auth=/dws/\n")),(0,i.kt)("p",null,"Linkis-gateway needs to copy the proxy configuration token.properties to the conf directory:"),(0,i.kt)("h3",{id:"23-add-material-library-related-packages"},"2.3 Add material library related packages"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Need to increase the module of the material library related package")),(0,i.kt)("p",null,"1.linkis-publicservice added bml support and added bml client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis-bmlclient-0.9.1.jar\nlinkis-bmlcommon-0.9.1.jar\nlinkis-gateway-httpclient-support-0.9.1.jar\nlinkis-httpclient-0.9.1.jar\n")),(0,i.kt)("p",null,"In addition, the netty package has been added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"netty-3.6.2.Final.jar\n")),(0,i.kt)("p",null,"In addition, you need to configure the gateway address in linkis.properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wds.linkis.gateway.ip=127.0.0.1\nwds.linkis.gateway.port=9001\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"linkis-ujes-python-enginemanager and linkis-ujes-spark-enginemanager added bml support and added bml client")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"linkis-bmlclient-0.9.1.jar\nlinkis-bmlcommon-0.9.1.jar\nlinkis-bml-hook-0.9.1.jar\nlinkis-gateway-httpclient-support-0.9.1.jar\nlinkis-httpclient-0.9.1.jar\n")),(0,i.kt)("p",null,"Upgrade steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the 0.9.0 package")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip the corresponding service directory and copy the package to the corresponding lib directory"))),(0,i.kt)("h3",{id:"24-services-that-need-to-update-configuration-and-package"},"2.4 Services that need to update configuration and package"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The service that needs to update the configuration and package: linkis-metadata")),(0,i.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","After decompressing the linkis-metadata installation package, you need to modify the configuration in the conf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Application.yml modify eureka address"),(0,i.kt)("li",{parentName:"ol"},"linkis.properties configure Linkis database and Hive metadata database address configuration:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"//Linkis database connection information\nwds.linkis.server.mybatis.datasource.url=jdbc:mysql://\nwds.linkis.server.mybatis.datasource.username=\nwds.linkis.server.mybatis.datasource.password=\n//Hive metabase address is not hiveServer2\nhive.meta.url=\nhive.meta.user=\nhive.meta.password=\n")),(0,i.kt)("h3",{id:"25-newly-added-services"},"2.5 Newly added services"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Newly added service: linkis-bml")),(0,i.kt)("p",null,"After downloading the linkis-bml installation package and decompressing it, modify the configuration in conf:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Application.yml modify eureka address"),(0,i.kt)("li",{parentName:"ol"},"linkis.properties configure Mybatis related configuration:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wds.linkis.server.mybatis.datasource.url=jdbc:mysql://\nwds.linkis.server.mybatis.datasource.username=\nwds.linkis.server.mybatis.datasource.password=\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Import the sql data of bml to mysql")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd db/;\nsource linkis-bml.sql\n")))}c.isMDXComponent=!0}}]);