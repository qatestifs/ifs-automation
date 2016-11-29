$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/AccessEndPoint.feature");
formatter.feature({
  "line": 8,
  "name": "CCS Access Test",
  "description": "As a User\r\nI wan to ensure that the ccs is up and running\r\nso that I can use the required services",
  "id": "ccs-access-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@version:Release_1"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_0012"
    },
    {
      "line": 4,
      "name": "@component:CCS_INTEGRATION"
    },
    {
      "line": 7,
      "name": "@Component"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "CCS Server Access",
  "description": "",
  "id": "ccs-access-test;ccs-server-access",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I send a get request to-",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the response status as 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "ServiceAuthenticationStep.sendGetRequest(String)"
});
formatter.result({
  "duration": 4951519584,
  "error_message": "java.lang.RuntimeException: Some exception during recording fields\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:52)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeFilterChain(RequestSpecificationImpl.groovy:978)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1436)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:150)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.execute(RequestSpecificationDecorated.java:225)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:46)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:25)\r\n\tat net.hmrc.ccs.steps.authentication.ServiceAuthenticationStep.sendGetRequest(ServiceAuthenticationStep.java:15)\r\n\tat ✽.When I send a get request to-(login/AccessEndPoint.feature:15)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.connect0(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:79)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:345)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:120)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:179)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:328)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:612)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:447)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:884)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:82)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:1787)\r\n\tat com.jayway.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:482)\r\n\tat com.jayway.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:431)\r\n\tat com.jayway.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1269)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1108)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:149)\r\n\tat com.jayway.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:31)\r\n\tat com.jayway.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.log.RequestLoggingFilter.filter(RequestLoggingFilter.java:101)\r\n\tat net.serenitybdd.rest.filters.FieldsRecordingFilter.filter(FieldsRecordingFilter.java:40)\r\n\tat com.jayway.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:141)\r\n\tat com.jayway.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:49)\r\n\tat com.jayway.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeFilterChain(RequestSpecificationImpl.groovy:978)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1436)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:93)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:325)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1212)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1021)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:812)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:48)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:58)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:52)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:154)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:182)\r\n\tat com.jayway.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:150)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.execute(RequestSpecificationDecorated.java:225)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:46)\r\n\tat net.serenitybdd.rest.decorators.request.RequestSpecificationDecorated.get(RequestSpecificationDecorated.java:25)\r\n\tat net.hmrc.ccs.steps.authentication.ServiceAuthenticationStep.sendGetRequest(ServiceAuthenticationStep.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:697)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:1004)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:728)\r\n\tat org.testng.TestRunner.run(TestRunner.java:629)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:132)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:112)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:99)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:147)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 36
    }
  ],
  "location": "ServiceAuthenticationStep.verifyResponse(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login/LoginAuthentication.feature");
formatter.feature({
  "line": 9,
  "name": "Verify Login Authentication in CCS",
  "description": "As a User\r\nI want Authentication user login in DocM\r\nso that I can confirm that user exists is the system",
  "id": "verify-login-authentication-in-ccs",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@version:Release_1"
    },
    {
      "line": 2,
      "name": "@version:Sprint_01"
    },
    {
      "line": 3,
      "name": "@issue:IFS_0011"
    },
    {
      "line": 4,
      "name": "@component:LOGIN"
    },
    {
      "line": 7,
      "name": "@Component"
    },
    {
      "line": 8,
      "name": "@pending"
    }
  ]
});
formatter.scenario({
  "line": 14,
  "name": "Login Authentication",
  "description": "",
  "id": "verify-login-authentication-in-ccs;login-authentication",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I have the following user details",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 17
    },
    {
      "cells": [
        "mj@qa.com",
        "m"
      ],
      "line": 18
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I login as a user",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "my details should be authenticated",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAuthenticationStep.getUser(GetUserDetails\u003e)"
});
formatter.result({
  "duration": 20200263,
  "status": "passed"
});
formatter.match({
  "location": "LoginAuthenticationStep.verifyUser()"
});
formatter.result({
  "duration": 132444715,
  "status": "passed"
});
formatter.match({
  "location": "LoginAuthenticationStep.userVerified()"
});
formatter.result({
  "duration": 172140317,
  "status": "passed"
});
formatter.uri("upload/UploadVerification.feature");
formatter.feature({
  "line": 9,
  "name": "Verify file upload from CSS to DocM",
  "description": "As a User\r\nI want to upload a file\r\nand verify the same in DOcM",
  "id": "verify-file-upload-from-css-to-docm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@version:Release_1"
    },
    {
      "line": 2,
      "name": "@version:Sprint_01"
    },
    {
      "line": 3,
      "name": "@issue:IFS_0012"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 7,
      "name": "@Component"
    },
    {
      "line": 8,
      "name": "@pending"
    }
  ]
});
formatter.scenario({
  "line": 14,
  "name": "File Upload",
  "description": "",
  "id": "verify-file-upload-from-css-to-docm;file-upload",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I want to upload a file in DocM-",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I Upload a File",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the file should be available in DocM",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 32
    }
  ],
  "location": "UploadConfirmationStep.fileUpload(String)"
});
formatter.result({
  "duration": 1592426,
  "status": "passed"
});
formatter.match({
  "location": "UploadConfirmationStep.upload()"
});
formatter.result({
  "duration": 22292889,
  "status": "passed"
});
formatter.match({
  "location": "UploadConfirmationStep.confirmUpload()"
});
formatter.result({
  "duration": 42134,
  "status": "passed"
});
});