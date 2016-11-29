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
  "duration": 10929082547,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginPage()"
});
formatter.result({
  "duration": 1932759492,
  "status": "passed"
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
  "duration": 2761531169,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginPage()"
});
formatter.result({
  "duration": 194239614,
  "status": "passed"
});
});