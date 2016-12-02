$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/Login.feature");
formatter.feature({
  "line": 7,
  "name": "User Login",
  "description": "As a User\r\nI want access NewUI page\r\nso that I can login as a user",
  "id": "user-login",
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
      "name": "@issue:IFS_148"
    },
    {
      "line": 4,
      "name": "@component:LOGIN"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login as user",
  "description": "",
  "id": "user-login;login-as-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I visit frontend login page- http://localhost:4200/",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I submit my user name as \u003cuser_id\u003e and password as \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the following \u003ctype\u003e login message- \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "user-login;login-as-user;",
  "rows": [
    {
      "cells": [
        "user_id",
        "password",
        "type",
        "message"
      ],
      "line": 18,
      "id": "user-login;login-as-user;;1"
    },
    {
      "cells": [
        "ifs1_test@qa.com",
        "Test1234",
        "invalid",
        "Username or password is incorrect"
      ],
      "line": 19,
      "id": "user-login;login-as-user;;2"
    },
    {
      "cells": [
        "mj@qa.com",
        "m",
        "valid",
        "Dashboard"
      ],
      "line": 20,
      "id": "user-login;login-as-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Login as user",
  "description": "",
  "id": "user-login;login-as-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@version:Sprint_01"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    },
    {
      "line": 4,
      "name": "@component:LOGIN"
    },
    {
      "line": 3,
      "name": "@issue:IFS_148"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I visit frontend login page- http://localhost:4200/",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I submit my user name as ifs1_test@qa.com and password as Test1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the following invalid login message- Username or password is incorrect",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/",
      "offset": 29
    }
  ],
  "location": "LoginStep.visitPage(String)"
});
formatter.result({
  "duration": 9719396889,
  "error_message": "org.openqa.selenium.WebDriverException: Error loading page\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat net.common.utils.helper.SeleniumWrapper.visit(SeleniumWrapper.java:70)\r\n\tat net.hmrc.ifs.steps.login.LoginStep.visitPage(LoginStep.java:22)\r\n\tat ✽.Given I visit frontend login page- http://localhost:4200/(login/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ifs1_test@qa.com",
      "offset": 25
    },
    {
      "val": "Test1234",
      "offset": 58
    }
  ],
  "location": "LoginStep.submitLoginDetaisl(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 27
    },
    {
      "val": "Username or password is incorrect",
      "offset": 50
    }
  ],
  "location": "LoginStep.loginPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Login as user",
  "description": "",
  "id": "user-login;login-as-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@version:Sprint_01"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    },
    {
      "line": 4,
      "name": "@component:LOGIN"
    },
    {
      "line": 3,
      "name": "@issue:IFS_148"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I visit frontend login page- http://localhost:4200/",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I submit my user name as mj@qa.com and password as m",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the following valid login message- Dashboard",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:4200/",
      "offset": 29
    }
  ],
  "location": "LoginStep.visitPage(String)"
});
formatter.result({
  "duration": 1618505931,
  "error_message": "org.openqa.selenium.WebDriverException: Error loading page\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat net.common.utils.helper.SeleniumWrapper.visit(SeleniumWrapper.java:70)\r\n\tat net.hmrc.ifs.steps.login.LoginStep.visitPage(LoginStep.java:22)\r\n\tat ✽.Given I visit frontend login page- http://localhost:4200/(login/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mj@qa.com",
      "offset": 25
    },
    {
      "val": "m",
      "offset": 51
    }
  ],
  "location": "LoginStep.submitLoginDetaisl(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 27
    },
    {
      "val": "Dashboard",
      "offset": 48
    }
  ],
  "location": "LoginStep.loginPage(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("upload/FileUploadConfirmation.feature");
formatter.feature({
  "line": 7,
  "name": "File Upload Confirmation",
  "description": "As a User\r\nI want to upload a file\r\nand get the confirmation message confirming the same",
  "id": "file-upload-confirmation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@version:Rlease_1e"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_151"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "File Upload Confirmation message",
  "description": "",
  "id": "file-upload-confirmation;file-upload-confirmation-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file UploadConfirmationFile.txt of .05 GB",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see upload confirmation message as File uploaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1224027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UploadConfirmationFile.txt",
      "offset": 16
    },
    {
      "val": ".05",
      "offset": 46
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 2372616901,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file UploadConfirmationFile.txt of .05 GB(upload/FileUploadConfirmation.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "File uploaded successfully",
      "offset": 44
    }
  ],
  "location": "FileUploadStep.uploadConfirmationForUpload(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("upload/SelectFile.feature");
formatter.feature({
  "line": 7,
  "name": "Select A File To Upload",
  "description": "As a User\r\nI want to select a file\r\nso that I can upload the file in to DoCM",
  "id": "select-a-file-to-upload",
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
      "name": "@issue:IFS_149"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "Select A file",
  "description": "",
  "id": "select-a-file-to-upload;select-a-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select a file SelectFileToUpload.pdf of .04 GB",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file SelectFileToUpload.pdf should be available for upload",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 993375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SelectFileToUpload.pdf",
      "offset": 16
    },
    {
      "val": ".04",
      "offset": 42
    }
  ],
  "location": "SelectFileStep.selectFile(String,String)"
});
formatter.result({
  "duration": 1964378970,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.SelectFileStep.selectFile(SelectFileStep.java:23)\r\n\tat ✽.When I select a file SelectFileToUpload.pdf of .04 GB(upload/SelectFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "SelectFileToUpload.pdf",
      "offset": 9
    }
  ],
  "location": "SelectFileStep.fileShouldBeAvailable(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Verify Meta Data",
  "description": "",
  "id": "select-a-file-to-upload;verify-meta-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I should see the following metadata details",
  "rows": [
    {
      "cells": [
        "CustomerId",
        "SourceSystem",
        "ContentType",
        "UploadDate"
      ],
      "line": 20
    },
    {
      "cells": [
        "MJ B",
        "angular app",
        "application/pdf",
        ""
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SelectFileStep.getMetaDataDetails(MetaData\u003e)"
});
formatter.result({
  "duration": 22970767,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #customerId\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dcustomerId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.VerifyMetaData.setCustomerId(VerifyMetaData.java:20)\r\n\tat net.hmrc.ifs.page.upload.VerifyMetaData.verifyMetaData(VerifyMetaData.java:40)\r\n\tat net.hmrc.ifs.steps.upload.SelectFileStep.getMetaDataDetails(SelectFileStep.java:34)\r\n\tat ✽.Then I should see the following metadata details(upload/SelectFile.feature:19)\r\n",
  "status": "failed"
});
formatter.uri("upload/UpdateFile.feature");
formatter.feature({
  "line": 7,
  "name": "File Update file Upload",
  "description": "As a User\r\nI want to update the uploaded file\r\nand get the confirmation message confirming the same",
  "id": "file-update-file-upload",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@version:Rlease_1e"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_151"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "File Upload",
  "description": "",
  "id": "file-update-file-upload;file-upload",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.pdf of .09 GB",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see upload confirmation message as File uploaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 804315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.pdf",
      "offset": 16
    },
    {
      "val": ".09",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 3772376309,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.pdf of .09 GB(upload/UpdateFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "File uploaded successfully",
      "offset": 44
    }
  ],
  "location": "FileUploadStep.uploadConfirmationForUpload(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "File Update",
  "description": "",
  "id": "file-update-file-upload;file-update",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I upload a file FIleUpdate.pdf of .69 GB",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I should see upload confirmation message as File uploaded successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 854550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIleUpdate.pdf",
      "offset": 16
    },
    {
      "val": ".69",
      "offset": 34
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 30555137944,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FIleUpdate.pdf of .69 GB(upload/UpdateFile.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "File uploaded successfully",
      "offset": 44
    }
  ],
  "location": "FileUploadStep.uploadConfirmationForUpload(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("upload/UploadFile.feature");
formatter.feature({
  "line": 7,
  "name": "File To Upload",
  "description": "As a User\r\nI want to select a file\r\nand upload required file",
  "id": "file-to-upload",
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
      "name": "@issue:IFS_150"
    },
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file \u003cfile_type\u003e of \u003cfile_size\u003e GB",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "file-to-upload;upload-a-file;",
  "rows": [
    {
      "cells": [
        "file_type",
        "file_size"
      ],
      "line": 17,
      "id": "file-to-upload;upload-a-file;;1"
    },
    {
      "cells": [
        "FileToUpload.doc",
        ".00"
      ],
      "line": 18,
      "id": "file-to-upload;upload-a-file;;2"
    },
    {
      "cells": [
        "FileToUpload.html",
        ".01"
      ],
      "line": 19,
      "id": "file-to-upload;upload-a-file;;3"
    },
    {
      "cells": [
        "FileToUpload.ps",
        ".02"
      ],
      "line": 20,
      "id": "file-to-upload;upload-a-file;;4"
    },
    {
      "cells": [
        "FileToUpload.exe",
        ".023"
      ],
      "line": 21,
      "id": "file-to-upload;upload-a-file;;5"
    },
    {
      "cells": [
        "FileToUpload.pdf",
        ".034"
      ],
      "line": 22,
      "id": "file-to-upload;upload-a-file;;6"
    },
    {
      "cells": [
        "FileToUpload.mp3",
        ".04"
      ],
      "line": 23,
      "id": "file-to-upload;upload-a-file;;7"
    },
    {
      "cells": [
        "FileToUpload.pdf",
        ".07"
      ],
      "line": 24,
      "id": "file-to-upload;upload-a-file;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.doc of .00 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1004177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.doc",
      "offset": 16
    },
    {
      "val": ".00",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 447961017,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.doc of .00 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.html of .01 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 985812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.html",
      "offset": 16
    },
    {
      "val": ".01",
      "offset": 37
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 450297796,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.html of .01 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.ps of .02 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1157047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.ps",
      "offset": 16
    },
    {
      "val": ".02",
      "offset": 35
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 977166437,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.ps of .02 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.exe of .023 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1134359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.exe",
      "offset": 16
    },
    {
      "val": ".023",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 882153078,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.exe of .023 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.pdf of .034 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1664807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.pdf",
      "offset": 16
    },
    {
      "val": ".034",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 1436189612,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.pdf of .034 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.mp3 of .04 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1143002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.mp3",
      "offset": 16
    },
    {
      "val": ".04",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 1933265128,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.mp3 of .04 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Upload A file",
  "description": "",
  "id": "file-to-upload;upload-a-file;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@component:FILE_UPLOAD"
    },
    {
      "line": 2,
      "name": "@version:Sprint_02"
    },
    {
      "line": 3,
      "name": "@issue:IFS_150"
    },
    {
      "line": 6,
      "name": "@Regression"
    },
    {
      "line": 1,
      "name": "@version:Release_1"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to upload a file",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I upload a file FileToUpload.pdf of .07 GB",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the file should get uploaded",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.getPage()"
});
formatter.result({
  "duration": 1141381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FileToUpload.pdf",
      "offset": 16
    },
    {
      "val": ".07",
      "offset": 36
    }
  ],
  "location": "FileUploadStep.upload(String,String)"
});
formatter.result({
  "duration": 2755448434,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #browseFile\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ajay\u0027, ip: \u0027192.168.0.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20161019084923, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d7032, browserVersion\u003d49.0.2, platformVersion\u003d10.0, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt, device\u003ddesktop}]\nSession ID: 657dbf6e-eb33-4dda-9de3-9d0cce70f090\n*** Element info: {Using\u003did, value\u003dbrowseFile}\r\n\tat sun.reflect.GeneratedConstructorAccessor38.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat net.common.utils.locator.LocateElement.ById(LocateElement.java:18)\r\n\tat net.hmrc.ifs.page.upload.FileUpload.selectFile(FileUpload.java:27)\r\n\tat net.hmrc.ifs.steps.upload.FileUploadStep.upload(FileUploadStep.java:22)\r\n\tat ✽.When I upload a file FileToUpload.pdf of .07 GB(upload/UploadFile.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "status": "skipped"
});
});