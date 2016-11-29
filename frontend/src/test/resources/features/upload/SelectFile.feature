@version:Release_1
@version:Sprint_01
@issue:IFS_149
@component:FILE_UPLOAD

  @Regression
  Feature:Select A File To Upload
  As a User
  I want to select a file
  so that I can upload the file in to DoCM

  Scenario:Select A file
    Given I want to upload a file
    When I select a file SelectFileToUpload.pdf of .04 GB
    Then the file SelectFileToUpload.pdf should be available for upload

    Scenario:Verify Meta Data

      Then I should see the following metadata details
        |CustomerId| SourceSystem |ContentType |UploadDate |
        |MJ B|angular app|application/pdf||