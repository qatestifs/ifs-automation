@version:Release_1
@version:Sprint_01
@issue:IFS_0012
@component:FILE_UPLOAD


@Component
Feature: Verify file upload from CSS to DocM
  As a User
  I want to upload a file
  and verify the same in DOcM

  Scenario: File Upload

    Given I want to upload a file in DocM-document/upload
    When I Upload a File postFile.jpg of .05 GB
    Then the file should be available in DocM

