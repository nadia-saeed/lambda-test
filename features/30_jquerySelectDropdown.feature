Feature: Test the dropdown selection

  Scenario: User selects option from the dropdown
    Given user opens the website
    When user chooses the DD option
    Then verify the chosen value
