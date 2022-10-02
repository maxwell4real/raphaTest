@login
Feature: Login feature

  Scenario Outline: As a new user I want to login successfully
    Given I am on heroku login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>


    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
