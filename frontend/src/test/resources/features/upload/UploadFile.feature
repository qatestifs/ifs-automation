@version:Release_1
@version:Sprint_02
@issue:IFS_150
@component:FILE_UPLOAD

@Regression
Feature:File To Upload
  As a User
  I want to select a file
  and upload required file

  Scenario Outline:Upload A file
    Given I want to upload a file
    When I upload a file <file_type> of <file_size> GB
    Then the file should get uploaded
    Examples:
    |file_type|file_size|
    |FileToUpload.doc|.00|
    |FileToUpload.html|.01|
    |FileToUpload.ps|.02|
    |FileToUpload.exe|.023|
    |FileToUpload.pdf|.034|
    |FileToUpload.mp3|.04|
    |FileToUpload.pdf|.07|
