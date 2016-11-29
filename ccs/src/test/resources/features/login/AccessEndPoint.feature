@version:Release_1
@version:Sprint_02
@issue:IFS_0012
@component:CCS_INTEGRATION


@Component
Feature: CCS Access Test
  As a User
  I wan to ensure that the ccs is up and running
  so that I can use the required services

  Scenario: CCS Server Access

    When I send a get request to-
    Then I should see the response status as 200