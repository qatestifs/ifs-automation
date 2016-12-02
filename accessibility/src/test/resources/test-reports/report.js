$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/LoginAccessibility.feature");
formatter.feature({
  "line": 7,
  "name": "Accessible user journey",
  "description": "As a tester\r\nI want to test the login page for accessibility issues\r\nSo that I can be sure that it does not contain critical\r\naccessibility issues",
  "id": "accessible-user-journey",
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
      "line": 6,
      "name": "@Accessibility"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "Login Accessibility issues",
  "description": "",
  "id": "accessible-user-journey;login-accessibility-issues",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I navigate to login page http://localhost:4200/",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I want to capture the accessibility issues on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/",
      "offset": 25
    }
  ],
  "location": "LoginStep.visitPage(String)"
});
formatter.result({
  "duration": 13151358584,
  "error_message": "org.openqa.selenium.WebDriverException: Error loading page\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d1736, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: d8bd9b51-43c5-430a-a936-bd2561fe35d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat net.common.utils.helper.SeleniumWrapper.openAccessibilityDriver(SeleniumWrapper.java:62)\r\n\tat net.hmrc.ifs.accessibility.steps.login.LoginStep.visitPage(LoginStep.java:21)\r\n\tat ✽.Given I navigate to login page http://localhost:4200/(login/LoginAccessibility.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.loginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("upload/UploadAccessibility.feature");
formatter.feature({
  "line": 7,
  "name": "Accessible user journey",
  "description": "As a tester\r\nI want to test the login page for accessibility issues\r\nSo that I can be sure that it does not contain critical\r\naccessibility issues",
  "id": "accessible-user-journey",
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
      "name": "@issue:IFS_0014"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 6,
      "name": "@Accessibility"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "Upload Accessibility issues",
  "description": "",
  "id": "accessible-user-journey;upload-accessibility-issues",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I navigate to upload page http://localhost:4200/upload",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I want to capture the accessibility issues on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/upload",
      "offset": 26
    }
  ],
  "location": "LoginStep.visitUploadPage(String)"
});
formatter.result({
  "duration": 4051789424,
  "error_message": "org.openqa.selenium.WebDriverException: Error loading page\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d1736, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: d8bd9b51-43c5-430a-a936-bd2561fe35d4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat net.common.utils.helper.SeleniumWrapper.openAccessibilityDriver(SeleniumWrapper.java:62)\r\n\tat net.hmrc.ifs.accessibility.steps.login.LoginStep.visitUploadPage(LoginStep.java:26)\r\n\tat ✽.Given I navigate to upload page http://localhost:4200/upload(upload/UploadAccessibility.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStep.loginPage()"
});
formatter.result({
  "status": "skipped"
});
});