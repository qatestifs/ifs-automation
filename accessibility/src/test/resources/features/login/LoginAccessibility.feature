@version:Release_1
@version:Sprint_01
@issue:IFS_0011
@component:LOGIN

@Accessibility
Feature: Accessible user journey
  As a tester
  I want to test the login page for accessibility issues
  So that I can be sure that it does not contain critical
  accessibility issues

  Scenario:Login Accessibility issues
    Given I navigate to login page http://localhost:4200/
    Then I want to capture the accessibility issues on the page