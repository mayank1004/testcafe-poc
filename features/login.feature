Feature: Login Feature 

    As a visitor I'd like sign into t:connect app

Background: navigae to page
Given the user navigate to t:connect

@e2e
Scenario: User shall login successfully
    When user is signed with personal user credential
    Then user is signed in
    