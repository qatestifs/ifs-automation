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
  "duration": 13457584948,
  "status": "passed"
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
  "duration": 1883876700,
  "status": "passed"
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
  "duration": 106651938,
  "status": "passed"
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
  "duration": 1491017224,
  "status": "passed"
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
  "duration": 142262723,
  "status": "passed"
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
  "duration": 2196891855,
  "status": "passed"
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
  "duration": 1615452677,
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
  "duration": 2706784820,
  "status": "passed"
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
  "duration": 2075215596,
  "status": "passed"
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
  "duration": 1630552622,
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
  "duration": 2123822899,
  "status": "passed"
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
  "duration": 55352421,
  "status": "passed"
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
  "duration": 2215613108,
  "status": "passed"
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
  "duration": 1804715154,
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
  "duration": 4425127143,
  "status": "passed"
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
  "duration": 2101605118,
  "status": "passed"
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
  "duration": 1938586858,
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
  "duration": 32528132385,
  "status": "passed"
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
  "duration": 2083911271,
  "status": "passed"
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
  "duration": 1510900925,
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
  "duration": 649562867,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2054667484,
  "status": "passed"
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
  "duration": 1813874297,
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
  "duration": 943178854,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2043946707,
  "status": "passed"
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
  "duration": 1685042930,
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
  "duration": 1205787394,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2069350957,
  "status": "passed"
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
  "duration": 1694352780,
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
  "duration": 1257767526,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2269458451,
  "status": "passed"
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
  "duration": 1643790597,
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
  "duration": 1514721555,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2048212438,
  "status": "passed"
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
  "duration": 2137642639,
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
  "duration": 1935200525,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2059102289,
  "status": "passed"
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
  "duration": 1737055472,
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
  "duration": 3049384070,
  "status": "passed"
});
formatter.match({
  "location": "SelectFileStep.uploadAFile()"
});
formatter.result({
  "duration": 2044248123,
  "status": "passed"
});
});