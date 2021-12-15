"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4065],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"CS Cache Architecture",sidebar_position:3},s=void 0,l={unversionedId:"architecture/public_enhancement_services/context_service/context_service_cache",id:"version-1.0.2/architecture/public_enhancement_services/context_service/context_service_cache",isDocsHomePage:!1,title:"CS Cache Architecture",description:"CSCache Architecture",source:"@site/versioned_docs/version-1.0.2/architecture/public_enhancement_services/context_service/context_service_cache.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_cache",permalink:"/docs/architecture/public_enhancement_services/context_service/context_service_cache",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.0.2/architecture/public_enhancement_services/context_service/context_service_cache.md",tags:[],version:"1.0.2",sidebarPosition:3,frontMatter:{title:"CS Cache Architecture",sidebar_position:3},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/public_enhancement_services/context_service/overview"},next:{title:"CS Client Design",permalink:"/docs/architecture/public_enhancement_services/context_service/context_service_client"}},p=[{value:"<strong>CSCache Architecture</strong>",id:"cscache-architecture",children:[{value:"<strong>issues that need resolving</strong>",id:"issues-that-need-resolving",children:[]},{value:"1.1. Memory structure needs to be solved:",id:"11-memory-structure-needs-to-be-solved",children:[]},{value:"1.2 Loading and parsing problems to be solved:",id:"12-loading-and-parsing-problems-to-be-solved",children:[]},{value:"1.3 Metric and cleaning mechanism need to solve the problem:",id:"13-metric-and-cleaning-mechanism-need-to-solve-the-problem",children:[]}]},{value:"<strong>ContextCache Architecture</strong>",id:"contextcache-architecture",children:[]},{value:"<strong>ContextCache storage structure design</strong>",id:"contextcache-storage-structure-design",children:[]},{value:"<strong>ContextCache UML Class Diagram Design</strong>",id:"contextcache-uml-class-diagram-design",children:[]},{value:"<strong>ContextCache Timing Diagram</strong>",id:"contextcache-timing-diagram",children:[]},{value:"<strong>KeyWord parsing logic</strong>",id:"keyword-parsing-logic",children:[]}],h={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cscache-architecture"},(0,a.kt)("strong",{parentName:"h2"},"CSCache Architecture")),(0,a.kt)("h3",{id:"issues-that-need-resolving"},(0,a.kt)("strong",{parentName:"h3"},"issues that need resolving")),(0,a.kt)("h3",{id:"11-memory-structure-needs-to-be-solved"},"1.1. Memory structure needs to be solved:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support splitting by ContextType: speed up storage and query performance")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support splitting according to different ContextID: Need to complete ContextID, see metadata isolation")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support LRU: Recycle according to specific algorithm")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support searching by keywords: Support indexing by keywords")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support indexing: support indexing directly through ContextKey")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support traversal: need to support traversal according to ContextID and ContextType"))),(0,a.kt)("h3",{id:"12-loading-and-parsing-problems-to-be-solved"},"1.2 Loading and parsing problems to be solved:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support parsing ContextValue into memory data structure: It is necessary to complete the parsing of ContextKey and value to find the corresponding keywords.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Need to interface with the Persistence module to complete the loading and analysis of the ContextID content"))),(0,a.kt)("h3",{id:"13-metric-and-cleaning-mechanism-need-to-solve-the-problem"},"1.3 Metric and cleaning mechanism need to solve the problem:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When JVM memory is not enough, it can be cleaned based on memory usage and frequency of use")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support statistics on the memory usage of each ContextID")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Support statistics on the frequency of use of each ContextID"))),(0,a.kt)("h2",{id:"contextcache-architecture"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache Architecture")),(0,a.kt)("p",null,"The architecture of ContextCache is shown in the following figure:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3137).Z})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ContextService: complete the provision of external interfaces, including additions, deletions, and changes;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cache: complete the storage of context information, map storage through ContextKey and ContextValue")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Index: The established keyword index, which stores the mapping between the keywords of the context information and the ContextKey;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Parser: complete the keyword analysis of the context information;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"LoadModule completes the loading of information from the persistence layer when the ContextCache does not have the corresponding ContextID information;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"AutoClear: When the Jvm memory is insufficient, complete the on-demand cleaning of ContextCache;")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Listener: Metric information for the mobile phone ContextCache, such as memory usage and access times."))),(0,a.kt)("h2",{id:"contextcache-storage-structure-design"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache storage structure design")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3669).Z})),(0,a.kt)("p",null,"The storage structure of ContextCache is divided into three layers:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ContextCache:")," stores the mapping relationship between ContextID and ContextIDValue, and can complete the recovery of ContextID according to the LRU algorithm;"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ContextIDValue:")," CSKeyValueContext that has stored all context information and indexes of ContextID. And count the memory and usage records of ContestID."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CSKeyValueContext:")," Contains the CSInvertedIndexSet index set that stores and supports keywords according to type, and also contains the storage set CSKeyValueMapSet that stores ContextKey and ContextValue."),(0,a.kt)("p",null,"CSInvertedIndexSet: categorize and store keyword indexes through CSType"),(0,a.kt)("p",null,"CSKeyValueMapSet: categorize and store context information through CSType"),(0,a.kt)("h2",{id:"contextcache-uml-class-diagram-design"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache UML Class Diagram Design")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9016).Z})),(0,a.kt)("h2",{id:"contextcache-timing-diagram"},(0,a.kt)("strong",{parentName:"h2"},"ContextCache Timing Diagram")),(0,a.kt)("p",null,"The following figure draws the overall process of using ContextID, KeyWord, and ContextType to check the corresponding ContextKeyValue in ContextCache.\n",(0,a.kt)("img",{src:n(3992).Z})),(0,a.kt)("p",null,"Note: The ContextIDValueGenerator will go to the persistence layer to pull the Array","[ContextKeyValue]"," of the ContextID, and parse the ContextKeyValue key storage index and content through ContextKeyValueParser."),(0,a.kt)("p",null,"The other interface processes provided by ContextCacheService are similar, so I won't repeat them here."),(0,a.kt)("h2",{id:"keyword-parsing-logic"},(0,a.kt)("strong",{parentName:"h2"},"KeyWord parsing logic")),(0,a.kt)("p",null,"The specific entity bean of ContextValue needs to use the annotation \\@keywordMethod on the corresponding get method that can be used as the keyword. For example, the getTableName method of Table must be annotated with \\@keywordMethod."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4404).Z})),(0,a.kt)("p",null,"When ContextKeyValueParser parses ContextKeyValue, it scans all the annotations modified by KeywordMethod of the specific object passed in and calls the get method to obtain the returned object toString, which will be parsed through user-selectable rules and stored in the keyword collection. Rules have separators, and regular expressions"),(0,a.kt)("p",null,"Precautions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The annotation will be defined to the core module of cs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The modified Get method cannot take parameters")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The toSting method of the return object of the Get method must return the keyword"))))}d.isMDXComponent=!0},3137:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-01-f88da12027f01881d55746cb0ea160e4.png"},3669:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-02-141cbbb9fd040b22838d97aa342ceaa8.png"},9016:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-03-f43df4b6ed2844192de9058e9bc0d376.png"},3992:function(e,t,n){t.Z=n.p+"assets/images/linkis-contextservice-cache-04-0a5c853730499dbb674bb4e172cc88d6.png"},4404:function(e,t){t.Z="data:image/png;base64,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"}}]);