Feature: Asking about Status

  Scenario: Simple ask about status
    Given WebContext
    When User asks about status
    Then Application answers "I am working ..."