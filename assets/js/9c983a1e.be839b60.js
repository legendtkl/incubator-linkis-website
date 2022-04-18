"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[9893],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,g=u["".concat(l,".").concat(d)]||u[d]||k[d]||r;return t?a.createElement(g,s(s({ref:n},p),{},{components:t})):a.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58379:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),s=["components"],o={title:"Involve SkyWaling into Linkis",sidebar_position:7},l=void 0,c={unversionedId:"deployment/involve_skywalking_into_linkis",id:"version-1.1.0/deployment/involve_skywalking_into_linkis",isDocsHomePage:!1,title:"Involve SkyWaling into Linkis",description:"This article describes how to enable SkyWalking when starting the Linkis service to facilitate subsequent distributed trace and troubleshooting.",source:"@site/versioned_docs/version-1.1.0/deployment/involve_skywalking_into_linkis.md",sourceDirName:"deployment",slug:"/deployment/involve_skywalking_into_linkis",permalink:"/docs/latest/deployment/involve_skywalking_into_linkis",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.0/deployment/involve_skywalking_into_linkis.md",tags:[],version:"1.1.0",sidebarPosition:7,frontMatter:{title:"Involve SkyWaling into Linkis",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Linkis Console Deployment",permalink:"/docs/latest/deployment/web_install"},next:{title:"DataSource",permalink:"/docs/latest/deployment/start_metadatasource"}},p=[{value:"1. Introduction to SkyWalking",id:"1-introduction-to-skywalking",children:[{value:"1.1 What is SkyWalking",id:"11-what-is-skywalking",children:[]},{value:"1.2 SkyWalking Architecture",id:"12-skywalking-architecture",children:[]}]},{value:"2. Deploy the SkyWalking backend",id:"2-deploy-the-skywalking-backend",children:[]},{value:"3. Linkis service start and enable SkyWalking",id:"3-linkis-service-start-and-enable-skywalking",children:[]},{value:"4. Result display",id:"4-result-display",children:[]}],k={toc:p};function u(e){var n=e.components,o=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article describes how to enable SkyWalking when starting the Linkis service to facilitate subsequent distributed trace and troubleshooting."),(0,r.kt)("h2",{id:"1-introduction-to-skywalking"},"1. Introduction to SkyWalking"),(0,r.kt)("h3",{id:"11-what-is-skywalking"},"1.1 What is SkyWalking"),(0,r.kt)("p",null,"SkyWalking is an open source observability platform used to collect, analyze, aggregate and visualize data from services and cloud native infrastructures. SkyWalking provides an easy way to maintain a clear view of your distributed systems, even across Clouds. It is a modern APM, specially designed for cloud native, container based distributed systems."),(0,r.kt)("h3",{id:"12-skywalking-architecture"},"1.2 SkyWalking Architecture"),(0,r.kt)("p",null,"The following figure is the overall architecture of SkyWalking."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4086).Z})),(0,r.kt)("p",null,"SkyWalking is logically split into four parts: Probes, Platform backend, Storage and UI."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Probe"),"s collect data and reformat them for SkyWalking requirements (different probes support different sources)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Platform backend")," supports data aggregation, analysis and streaming process covers traces, metrics, and logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage")," houses SkyWalking data through an open/plugable interface. You can choose an existing implementation, such as ElasticSearch, H2, MySQL, TiDB, InfluxDB, or implement your own. Patches for new storage implementors welcome!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UI")," is a highly customizable web based interface allowing SkyWalking end users to visualize and manage SkyWalking data.")),(0,r.kt)("p",null,"Using SkyWalking in Linkis requires that the user already has the Backend service and the corresponding Storage. The Probe can be integrated when the Linkis service is started. There are three main ways of Probe integration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Language based native agent"),". These agents run in target service user spaces, such as a part of user codes. For example, the SkyWalking Java agent uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"-javaagent")," command line argument to manipulate codes in runtime, where ",(0,r.kt)("inlineCode",{parentName:"li"},"manipulate")," means to change and inject user\u2019s codes. Another kind of agents uses certain hook or intercept mechanism provided by target libraries. As you can see, these agents are based on languages and libraries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service Mesh probes"),". Service Mesh probes collect data from sidecar, control plane in service mesh or proxy. In the old days, proxy is only used as an ingress of the whole cluster, but with the Service Mesh and sidecar, we can now perform observability functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3rd-party instrument library"),". SkyWalking accepts many widely used instrument libraries data formats. It analyzes the data, transfers it to SkyWalking\u2019s formats of trace, metrics or both. This feature starts with accepting Zipkin span data. See ",(0,r.kt)("a",{parentName:"li",href:"https://skywalking.apache.org/docs/main/latest/en/setup/backend/zipkin-trace"},"Receiver for Zipkin traces")," for more information.")),(0,r.kt)("p",null,"We used ",(0,r.kt)("strong",{parentName:"p"},"Language based native agent")," when Linkis integrated SkyWalking, that is, the method of java agent. Below we will show you how to enable SkyWalking in Linkis service."),(0,r.kt)("h2",{id:"2-deploy-the-skywalking-backend"},"2. Deploy the SkyWalking backend"),(0,r.kt)("p",null,"The SkyWalking backend is a prerequisite for enabling SkyWalk. The following is a brief demonstration of how to install the SkyWalking backend."),(0,r.kt)("p",null,"First download SkyWalking APM from SkyWalking's ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(16028).Z})),(0,r.kt)("p",null,"After downloading, unzip it directly, and we get the following directory structure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\nbin config config-examples LICENSE licenses logs NOTICE oap-libs README.txt tools webapp\n")),(0,r.kt)("p",null,"The backend uses the H2 in-memory database as the backend storage by default, and does not need to modify the configuration. Start as follows."),(0,r.kt)("p",null,"Start Backend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/startup.sh\n")),(0,r.kt)("p",null,"Start WebApp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash bin/webappService.sh\n")),(0,r.kt)("p",null,"The UI starts on port 8080 by default. You can also modify the listening port by modifying the webapp.yml file in the webapp directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  port: 8080\n\nspring:\n  cloud:\n    gateway:\n      routes:\n        - id: oap-route\n          uri: lb://oap-service\n          predicates:\n            - Path=/graphql/**\n    discovery:\n      client:\n        simple:\n          instances:\n            oap-service:\n              - uri: http://127.0.0.1:12800\n            # - uri: http://<oap-host-1>:<oap-port1>\n            # - uri: http://<oap-host-2>:<oap-port2>\n\n  mvc:\n    throw-exception-if-no-handler-found: true\n\n  web:\n    resources:\n      add-mappings: true\n\nmanagement:\n  server:\n    base-path: /manage\n")),(0,r.kt)("h2",{id:"3-linkis-service-start-and-enable-skywalking"},"3. Linkis service start and enable SkyWalking"),(0,r.kt)("p",null,"It is assumed here that the service deployment of Linkis is relatively clear. If it is not clear, it can be asynchronous:"),(0,r.kt)("p",null,"To start SkyWalking in Linkis, you first need to download the Java agent of SkyWalking, we can download it from the ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/downloads/"},"Downloads")," page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(98970).Z})),(0,r.kt)("p",null,"After downloading, unzip it directly, the internal file structure is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tree skywalking-agent\n$ skywalking-agent\n\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 activations\n\u2502 \u251c\u2500\u2500 apm-toolkit-kafka-activation-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 bootstrap-plugins\n\u2502 \u251c\u2500\u2500 apm-jdk-http-plugin-8.8.0.jar\n\u2502 \u2514\u2500\u2500 apm-jdk-threading-plugin-8.8.0.jar\n\u251c\u2500\u2500 config\n\u2502 \u2514\u2500\u2500 agent.config\n\u251c\u2500\u2500 licenses\n\u2502 \u2514\u2500\u2500 LICENSE-asm.txt\n\u251c\u2500\u2500 logs\n\u251c\u2500\u2500 optional-plugins\n\u2502 \u251c\u2500\u2500 apm-customize-enhance-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 optional-reporter-plugins\n\u2502 \u251c\u2500\u2500 kafka-reporter-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u251c\u2500\u2500 plugins\n\u2502 \u251c\u2500\u2500 apm-activemq-5.x-plugin-8.8.0.jar\n\u2502 \u251c\u2500\u2500 ...\n\u2514\u2500\u2500 skywalking-agent.jar\n\n")),(0,r.kt)("p",null,"Modify the configuration item ",(0,r.kt)("inlineCode",{parentName:"p"},"SKYWALKING_AGENT_PATH")," in linkis-env.sh of Linkis. Set it to the path to ",(0,r.kt)("inlineCode",{parentName:"p"},"skywalking-agent.jar"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SKYWALKING_AGENT_PATH=/path/to/skywalking-agent.jar\n")),(0,r.kt)("p",null,"Then start Linkis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bash linkis-start-all.sh\n")),(0,r.kt)("h2",{id:"4-result-display"},"4. Result display"),(0,r.kt)("p",null,"The UI port of Linkis starts at port 8080 by default. After Linkis opens SkyWalking and opens the UI, if you can see the following picture, it means success."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(62063).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6699).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(36670).Z})))}u.isMDXComponent=!0},16028:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_APM_Download-8d74253784919cf585ceaac291eb7ea4.png"},98970:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_Agent_Download-74a7666cd2ff6d33cfa8862ce341bc01.png"},4086:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_Architecture-24ff5ca3454b0bbd684f10e594af7378.png"},36670:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_Topology-9f1a2d3d9626efa5dc1c6f03edf52e32.png"},62063:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_UI_Dashboard-c7fdd2d1476e627e822105e72f53bf99.png"},6699:function(e,n,t){n.Z=t.p+"assets/images/SkyWalking_UI_Dashboard2-e02aa14b783823a4839c991f59f16121.png"}}]);