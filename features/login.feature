Feature: Login functionality

Feature: Login functionality

  Scenario Outline: As a user, I can login successfully with valid credentials

    Given I am on the "https://www.saucedemo.com" page
    When I login with <username> and <password>
    Then I am redirected to inventory page

    Examples:
      | username                 | password      |
      | standard_user            | secret_sauce  |
      | problem_user             | secret_sauce  |
      | performance_glitch_user  | secret_sauce  |

  Scenario: As a user, I cannot login with locked user credentials

    Given I am on the "https://www.saucedemo.com" page
    When I login with locked_out_user and secret_sauce
    Then I should see error message saying "Epic sadface: Sorry, this user has been locked out."
     