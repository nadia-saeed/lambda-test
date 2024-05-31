Feature: Test the dropdown selection

  Scenario: User selects option from the dropdown
    Given user opens the website
    When user filters the desired entry
    Then user gets the respective data if it was present
