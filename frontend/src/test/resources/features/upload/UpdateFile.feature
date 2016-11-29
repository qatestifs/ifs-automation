@version:Rlease_1e
@version:Sprint_02
@issue:IFS_151
@component:FILE_UPLOAD

@Regression
Feature:File Update file Upload
  As a User
  I want to update the uploaded file
  and get the confirmation message confirming the same

  Scenario:File Upload
    Given I want to upload a file
    When I upload a file FileToUpload.pdf of .09 GB
    Then I should see upload confirmation message as File uploaded successfully

  Scenario:File Update
    Given I want to upload a file
    When I upload a file FIleUpdate.pdf of .69 GB
    Then I should see upload confirmation message as File uploaded successfully