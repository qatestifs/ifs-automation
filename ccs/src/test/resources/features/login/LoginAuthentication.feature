@version:Release_1
@version:Sprint_01
@issue:IFS_0011
@component:LOGIN


@Component
Feature: Verify Login Authentication in CCS
  As a User
  I want Authentication user login in DocM
  so that I can confirm that user exists is the system

  Scenario:Login Authentication

    Given I have the following user details
      |user|password|
      |mj@qa.com|m|
    When I login as a user
    Then my details should be authenticated