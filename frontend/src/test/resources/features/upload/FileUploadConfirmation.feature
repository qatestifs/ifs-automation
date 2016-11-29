@version:Rlease_1e
  @version:Sprint_02
  @issue:IFS_151
  @component:FILE_UPLOAD

  @Regression
  Feature:File Upload Confirmation
  As a User
  I want to upload a file
  and get the confirmation message confirming the same

  Scenario:File Upload Confirmation message
    Given I want to upload a file
    When I upload a file UploadConfirmationFile.txt of .05 GB
    Then I should see upload confirmation message as File uploaded successfully
