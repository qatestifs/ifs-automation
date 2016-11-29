@version:Release_1
@version:Sprint_02
@issue:IFS_0014
@component:FILE_UPLOAD

@Accessibility
Feature: Accessible user journey
  As a tester
  I want to test the login page for accessibility issues
  So that I can be sure that it does not contain critical
  accessibility issues

  Scenario:Upload Accessibility issues
    Given I navigate to upload page http://localhost:4200/upload
    Then I want to capture the accessibility issues on the page