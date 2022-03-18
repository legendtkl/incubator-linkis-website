"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[2121],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<r;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11812:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],a={title:"Use of 0.X SDK",sidebar_position:0},l=void 0,u={unversionedId:"user_guide/X_sdk_manual",id:"version-0.11.0/user_guide/X_sdk_manual",isDocsHomePage:!1,title:"Use of 0.X SDK",description:"Linkis provides a convenient interface for calling JAVA and SCALA, which can be used only by introducing the ujes-client module",source:"@site/versioned_docs/version-0.11.0/user_guide/0.X_sdk_manual.md",sourceDirName:"user_guide",slug:"/user_guide/X_sdk_manual",permalink:"/docs/0.11.0/user_guide/X_sdk_manual",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-0.11.0/user_guide/0.X_sdk_manual.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"Use of 0.X SDK",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"Source Code Directory Structure",permalink:"/docs/0.11.0/deployment/sourcecode_hierarchical_structure"},next:{title:"Use of 1.0 SDK",permalink:"/docs/0.11.0/user_guide/1.0_sdk_manual"}},c=[{value:"1 Introduce dependent modules",id:"1-introduce-dependent-modules",children:[]},{value:"2 Java test code",id:"2-java-test-code",children:[]},{value:"3 Scala test code",id:"3-scala-test-code",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Linkis provides a convenient interface for calling JAVA and SCALA, which can be used only by introducing the ujes-client module")),(0,r.kt)("h2",{id:"1-introduce-dependent-modules"},"1 Introduce dependent modules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n  <groupId>com.webank.wedatasphere.linkis</groupId>\n  <artifactId>linkis-ujes-client</artifactId>\n  <version>0.9.3</version>\n</dependency>\n")),(0,r.kt)("h2",{id:"2-java-test-code"},"2 Java test code"),(0,r.kt)("p",null,"Establish the Java test class UJESClientImplTestJ, the specific interface meaning can be seen in the notes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.wedatasphere.linkis.ujes.test;\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.TokenAuthenticationStrategy;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfig;\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient;\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClientImpl;\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction;\nimport com.webank.wedatasphere.linkis.ujes.client.request.ResultSetAction;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobExecuteResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobInfoResult;\nimport com.webank.wedatasphere.linkis.ujes.client.response.JobProgressResult;\nimport org.apache.commons.io.IOUtils;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class UJESClientTest {\n\n    public static void main(String[] args){\n\n        String user = "hadoop";\n        String executeCode = "show databases;";\n\n        // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n        DWSClientConfig clientConfig = ((DWSClientConfigBuilder) (DWSClientConfigBuilder.newBuilder()\n                .addUJESServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the linkis server-side gateway, such as http://{ip}:{port}\n                .connectionTimeout(30000) //connectionTimeOut client connection timeout\n                .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n                .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n                .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n                .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n                .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n                .setAuthTokenKey("${username}").setAuthTokenValue("${password}"))) //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n                .setDWSVersion("v1").build(); //Linkis background protocol version, the current version is v1\n\n        // 2. Get a UJESClient through DWSClientConfig\n        UJESClient client = new UJESClientImpl(clientConfig);\n\n        try {\n            // 3. Start code execution\n            System.out.println("user: "+ user + ", code: [" + executeCode + "]");\n            Map<String, Object> startupMap = new HashMap<String, Object>();\n            startupMap.put("wds.linkis.yarnqueue", "default"); // Various startup parameters can be stored in startupMap, see linkis management console configuration\n            JobExecuteResult jobExecuteResult = client.execute(JobExecuteAction.builder()\n                    .setCreator("linkisClient-Test") //creator, the system name of the client requesting linkis, used for system-level isolation\n                    .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n                    .setEngineType((JobExecuteAction.EngineType) JobExecuteAction.EngineType$.MODULE$.HIVE()) // The execution engine type of the linkis that you want to request, such as Spark hive, etc.\n                    .setUser(user) //User, request user; used for user-level multi-tenant isolation\n                    .setStartupParams(startupMap)\n                    .build());\n            System.out.println("execId: "+ jobExecuteResult.getExecID() + ", taskId:" + jobExecuteResult.taskID());\n\n            // 4. Get the execution status of the script\n            JobInfoResult jobInfoResult = client.getJobInfo(jobExecuteResult);\n            int sleepTimeMills = 1000;\n            while(!jobInfoResult.isCompleted()) {\n                // 5. Get the execution progress of the script\n                JobProgressResult progress = client.progress(jobExecuteResult);\n                Utils.sleepQuietly(sleepTimeMills);\n                jobInfoResult = client.getJobInfo(jobExecuteResult);\n            }\n\n            // 6. Get the job information of the script\n            JobInfoResult jobInfo = client.getJobInfo(jobExecuteResult);\n            // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n            String resultSet = jobInfo.getResultSetList(client)[0];\n            // 8. Get a specific result set through a result set information\n            Object fileContents = client.resultSet(ResultSetAction.builder().setPath(resultSet).setUser(jobExecuteResult.getUser()).build()).getFileContent();\n            System.out.println("fileContents: "+ fileContents);\n\n        } catch (Exception e) {\n            e.printStackTrace();\n            IOUtils.closeQuietly(client);\n        }\n        IOUtils.closeQuietly(client);\n    }\n}\n')),(0,r.kt)("p",null,"Run the above code to interact with Linkis"),(0,r.kt)("h2",{id:"3-scala-test-code"},"3 Scala test code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package com.wedatasphere.linkis.ujes.test\n\nimport java.util.concurrent.TimeUnit\n\nimport com.webank.wedatasphere.linkis.common.utils.Utils\nimport com.webank.wedatasphere.linkis.httpclient.dws.authentication.StaticAuthenticationStrategy\nimport com.webank.wedatasphere.linkis.httpclient.dws.config.DWSClientConfigBuilder\nimport com.webank.wedatasphere.linkis.ujes.client.UJESClient\nimport com.webank.wedatasphere.linkis.ujes.client.request.JobExecuteAction.EngineType\nimport com.webank.wedatasphere.linkis.ujes.client.request.{JobExecuteAction, ResultSetAction}\nimport org.apache.commons.io.IOUtils\n\nobject UJESClientImplTest extends App {\n\n  var executeCode = "show databases;"\n  var user = "hadoop"\n\n  // 1. Configure DWSClientBuilder, get a DWSClientConfig through DWSClientBuilder\n  val clientConfig = DWSClientConfigBuilder.newBuilder()\n    .addUJESServerUrl("http://${ip}:${port}") //Specify ServerUrl, the address of the Linkis server-side gateway, such as http://{ip}:{port}\n    .connectionTimeout(30000) //connectionTimeOut client connection timeout\n    .discoveryEnabled(false).discoveryFrequency(1, TimeUnit.MINUTES) //Whether to enable registration discovery, if enabled, the newly launched Gateway will be automatically discovered\n    .loadbalancerEnabled(true) // Whether to enable load balancing, if registration discovery is not enabled, load balancing is meaningless\n    .maxConnectionSize(5) //Specify the maximum number of connections, that is, the maximum number of concurrent\n    .retryEnabled(false).readTimeout(30000) //execution failed, whether to allow retry\n    .setAuthenticationStrategy(new StaticAuthenticationStrategy()) //AuthenticationStrategy Linkis authentication method\n    .setAuthTokenKey("${username}").setAuthTokenValue("${password}") //Authentication key, generally the user name; authentication value, generally the password corresponding to the user name\n    .setDWSVersion("v1").build() //Linkis backend protocol version, the current version is v1\n\n  // 2. Get a UJESClient through DWSClientConfig\n  val client = UJESClient(clientConfig)\n  \n  try {\n    // 3. Start code execution\n    println("user: "+ user + ", code: [" + executeCode + "]")\n    val startupMap = new java.util.HashMap[String, Any]()\n    startupMap.put("wds.linkis.yarnqueue", "default") //Startup parameter configuration\n    val jobExecuteResult = client.execute(JobExecuteAction.builder()\n      .setCreator("LinkisClient-Test") //creator, requesting the system name of the Linkis client, used for system-level isolation\n      .addExecuteCode(executeCode) //ExecutionCode The code to be executed\n      .setEngineType(EngineType.SPARK) // The execution engine type of Linkis that you want to request, such as Spark hive, etc.\n      .setStartupParams(startupMap)\n      .setUser(user).build()) //User, request user; used for user-level multi-tenant isolation\n    println("execId: "+ jobExecuteResult.getExecID + ", taskId:" + jobExecuteResult.taskID)\n    \n    // 4. Get the execution status of the script\n    var jobInfoResult = client.getJobInfo(jobExecuteResult)\n    val sleepTimeMills: Int = 1000\n    while (!jobInfoResult.isCompleted) {\n      // 5. Get the execution progress of the script\n      val progress = client.progress(jobExecuteResult)\n      val progressInfo = if (progress.getProgressInfo != null) progress.getProgressInfo.toList else List.empty\n      println("progress: "+ progress.getProgress + ", progressInfo:" + progressInfo)\n      Utils.sleepQuietly(sleepTimeMills)\n      jobInfoResult = client.getJobInfo(jobExecuteResult)\n    }\n    if (!jobInfoResult.isSucceed) {\n      println("Failed to execute job: "+ jobInfoResult.getMessage)\n      throw new Exception(jobInfoResult.getMessage)\n    }\n\n    // 6. Get the job information of the script\n    val jobInfo = client.getJobInfo(jobExecuteResult)\n    // 7. Get the list of result sets (if the user submits multiple SQL at a time, multiple result sets will be generated)\n    val resultSetList = jobInfoResult.getResultSetList(client)\n    println("All result set list:")\n    resultSetList.foreach(println)\n    val oneResultSet = jobInfo.getResultSetList(client).head\n    // 8. Get a specific result set through a result set information\n    val fileContents = client.resultSet(ResultSetAction.builder().setPath(oneResultSet).setUser(jobExecuteResult.getUser).build()).getFileContent\n    println("First fileContents: ")\n    println(fileContents)\n  } catch {\n    case e: Exception => {\n      e.printStackTrace()\n    }\n  }\n  IOUtils.closeQuietly(client)\n}\n')))}d.isMDXComponent=!0}}]);