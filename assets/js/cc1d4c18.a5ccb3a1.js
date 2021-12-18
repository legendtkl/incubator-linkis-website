"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[4107],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||a;return n?i.createElement(u,r(r({ref:t},c),{},{components:n})):i.createElement(u,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),r=["components"],l={title:"Compile And Package",sidebar_position:1},s=void 0,p={unversionedId:"development/linkis_compile_and_package",id:"development/linkis_compile_and_package",isDocsHomePage:!1,title:"Compile And Package",description:"1. Fully compile Linkis",source:"@site/docs/development/linkis_compile_and_package.md",sourceDirName:"development",slug:"/development/linkis_compile_and_package",permalink:"/docs/1.0.3/development/linkis_compile_and_package",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/development/linkis_compile_and_package.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Compile And Package",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Gateway Design",permalink:"/docs/1.0.3/architecture/microservice_governance_services/gateway"},next:{title:"Linkis Debug",permalink:"/docs/1.0.3/development/linkis_debug"}},c=[{value:"1. Fully compile Linkis",id:"1-fully-compile-linkis",children:[{value:"step1 Source code acquisition",id:"step1-source-code-acquisition",children:[]},{value:"step2 Compile for the first time (not the first time you can skip this step)",id:"step2-compile-for-the-first-time-not-the-first-time-you-can-skip-this-step",children:[]},{value:"step3 Execute compilation",id:"step3-execute-compilation",children:[]},{value:"step4 Obtain the installation package",id:"step4-obtain-the-installation-package",children:[]}]},{value:"2. Compile a single module",id:"2-compile-a-single-module",children:[{value:"step1 Compile for the first time (skip this step for non-first time)",id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time",children:[]},{value:"step2 Enter the corresponding module to compile",id:"step2-enter-the-corresponding-module-to-compile",children:[]},{value:"step3 Obtain the installation package",id:"step3-obtain-the-installation-package",children:[]}]},{value:"3. Compile an engine",id:"3-compile-an-engine",children:[{value:"step1 Compile for the first time (skip this step for non-first time)",id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time-1",children:[]},{value:"step2 Enter the corresponding module to compile",id:"step2-enter-the-corresponding-module-to-compile-1",children:[]},{value:"step3 Obtain the installation package",id:"step3-obtain-the-installation-package-1",children:[]}]},{value:"4. How to modify the Hadoop, Hive, and Spark versions that Linkis depends on",id:"4-how-to-modify-the-hadoop-hive-and-spark-versions-that-linkis-depends-on",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-fully-compile-linkis"},"1. Fully compile Linkis"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Compilation environment requirements"),":Must be ",(0,a.kt)("strong",{parentName:"p"},"JDK8")," or above, both ",(0,a.kt)("strong",{parentName:"p"},"Oracle/Sun")," and ",(0,a.kt)("strong",{parentName:"p"},"OpenJDK")," are supported."),(0,a.kt)("p",null,"After obtaining the project code from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"github repository")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),", use maven to compile the project installation package."),(0,a.kt)("h3",{id:"step1-source-code-acquisition"},"step1 Source code acquisition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Method 1: Obtain the source code of the project from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"github repository")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),"."),(0,a.kt)("li",{parentName:"ul"},"Method 2: Download the source code package of the required version from the ",(0,a.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"linkis official download page")," ",(0,a.kt)("a",{parentName:"li",href:"https://linkis.apache.org/download/main"},"https://linkis.apache.org/download/main"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note"),": The official recommendation is to use Hadoop-2.7.2, Hive-1.2.1, Spark-2.4.3 and Scala-2.11.12 to compile Linkis."),(0,a.kt)("p",null,"If you want to use other versions of Hadoop, Hive, Spark to compile Linkis, please refer to: ","[How to modify the version of Hadoop, Hive, Spark that Linkis depends on]"," (#4-How to modify the version of hadoophivespark that Linkis depends on)"),(0,a.kt)("h3",{id:"step2-compile-for-the-first-time-not-the-first-time-you-can-skip-this-step"},"step2 Compile for the first time (not the first time you can skip this step)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you are compiling and using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,a.kt)("h3",{id:"step3-execute-compilation"},"step3 Execute compilation"),(0,a.kt)("p",null,"Execute the following commands in the root directory of the Linkis source code package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn clean install\n\n")),(0,a.kt)("h3",{id:"step4-obtain-the-installation-package"},"step4 Obtain the installation package"),(0,a.kt)("p",null,"The compiled complete installation package is in the assembly-combined-package->target directory of the project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    #Detailed path is as follows\n    incubator-linkis-x.x.x/assembly-combined-package/target/apache-linkis-x.x.x-incubating-bin.tar.gz\n")),(0,a.kt)("h2",{id:"2-compile-a-single-module"},"2. Compile a single module"),(0,a.kt)("h3",{id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time"},"step1 Compile for the first time (skip this step for non-first time)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you are compiling and using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,a.kt)("h3",{id:"step2-enter-the-corresponding-module-to-compile"},"step2 Enter the corresponding module to compile"),(0,a.kt)("p",null,"Enter the corresponding module to compile, for example, if you want to recompile Entrance, the command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-computation-governance/linkis-entrance\n    mvn clean install\n")),(0,a.kt)("h3",{id:"step3-obtain-the-installation-package"},"step3 Obtain the installation package"),(0,a.kt)("p",null,"Obtain the installation package, there will be a compiled package in the ->target directory of the corresponding module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ls incubator-linkis-x.x.x/linkis-computation-governance/linkis-entrance/target/linkis-entrance.x.x.x.jar\n")),(0,a.kt)("h2",{id:"3-compile-an-engine"},"3. Compile an engine"),(0,a.kt)("p",null,"Here is an example of compiling the Spark engine of Linkis:"),(0,a.kt)("h3",{id:"step1-compile-for-the-first-time-skip-this-step-for-non-first-time-1"},"step1 Compile for the first time (skip this step for non-first time)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you are using it locally for the first time, you must first execute the following command in the root directory of the Linkis source code package"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    mvn -N install\n")),(0,a.kt)("h3",{id:"step2-enter-the-corresponding-module-to-compile-1"},"step2 Enter the corresponding module to compile"),(0,a.kt)("p",null,"Enter the directory where the Spark engine is located to compile and package, the command is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    mvn clean install\n")),(0,a.kt)("h3",{id:"step3-obtain-the-installation-package-1"},"step3 Obtain the installation package"),(0,a.kt)("p",null,"Obtain the installation package, there will be a compiled package in the ->target directory of the corresponding module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"   incubator-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark/target/linkis-engineplugin-spark-x.x.x.jar\n")),(0,a.kt)("p",null,"How to install Spark engine separately? Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0.3/deployment/engine_conn_plugin_installation"},"Linkis Engine Plugin Installation Document")),(0,a.kt)("h2",{id:"4-how-to-modify-the-hadoop-hive-and-spark-versions-that-linkis-depends-on"},"4. How to modify the Hadoop, Hive, and Spark versions that Linkis depends on"),(0,a.kt)("p",null,"Please note: Hadoop is a big data basic service, Linkis must rely on Hadoop for compilation;\nThis is not true for computing storage engines such as Spark and Hive. If you do not want to use a certain engine, you do not need to set the engine version or compile the engine plug-in."),(0,a.kt)("p",null,"Specifically, the way to modify the version of Hadoop is different from that of Spark, Hive and other computing engines. The following is a detailed introduction:"),(0,a.kt)("h4",{id:"how-to-modify-the-hadoop-version-that-linkis-depends-on"},"How to modify the Hadoop version that Linkis depends on?"),(0,a.kt)("p",null,"Enter the root directory of the Linkis source code package and manually modify the Hadoop version information of the pom.xml file as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x\n    vim pom.xml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n      \n        <hadoop.version>2.7.2</hadoop.version> \x3c!--\x3e Modify the Hadoop version number here <--\x3e\n        <scala.version>2.11.12</scala.version>\n        <jdk.compile.version>1.8</jdk.compile.version>\n              \n    </properties>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note: If your hadoop version is hadoop3, you need to modify the pom file of linkis-hadoop-common"),"\nBecause when the hadoop 2.8 is below, the hdfs related class is in the hadoop-hdfs module, but in hadoop 3.X the corresponding class is moved to the module hadoop-hdfs-client, you need to modify this file:"),(0,a.kt)("p",null,"pom:Linkis/linkis-commons/linkis-hadoop-common/pom.xml\nModify the dependency hadoop-hdfs to hadoop-hdfs-client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs</artifactId> \x3c!-- Just replace this line with <artifactId>hadoop-hdfs-client</artifactId>--\x3e\n        <version>${hadoop.version}</version>\n</dependency>\n Modify hadoop-hdfs to:\n <dependency>\n        <groupId>org.apache.hadoop</groupId>\n        <artifactId>hadoop-hdfs-client</artifactId>\n        <version>${hadoop.version}</version>\n</dependency>\n")),(0,a.kt)("h4",{id:"how-to-modify-the-spark-and-hive-versions-that-linkis-depends-on"},"How to modify the Spark and Hive versions that Linkis depends on?"),(0,a.kt)("p",null,"Here is an example of modifying the version of Spark. Enter the directory where the Spark engine is located, and manually modify the Spark version information in the pom.xml file, as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    cd incubator-linkis-x.x.x/linkis-engineconn-plugins/engineconn-plugins/spark\n    vim pom.xml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"    <properties>\n        <spark.version>2.4.3</spark.version> \x3c!--\x3e Modify the Spark version number here <--\x3e\n    </properties>\n")),(0,a.kt)("p",null,"Modifying the version of other engines is similar to modifying the Spark version. First, enter the directory where the relevant engine is located, and manually modify the engine version information in the pom.xml file."),(0,a.kt)("p",null,"Then please refer to ","[3. Compile an engine]"))}m.isMDXComponent=!0}}]);