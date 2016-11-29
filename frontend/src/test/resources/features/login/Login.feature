@version:Release_1
@version:Sprint_01
@issue:IFS_148
@component:LOGIN

  @Regression
  Feature: User Login
  As a User
  I want access NewUI page
  so that I can login as a user

  Scenario Outline: Login as user

    Given I visit frontend login page- http://localhost:4200/
    When I submit my user name as <user_id> and password as <password>
    Then I should see the following <type> login message- <message>
    Examples:
    | user_id | password |type| message |
    |ifs1_test@qa.com|Test1234|invalid  |Username or password is incorrect|
    |mj@qa.com|m|valid    |Dashboard                    |