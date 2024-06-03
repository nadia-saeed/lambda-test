Feature: Test the dropdown selection

  Scenario: User selects option from the dropdown
    Given user opens the website
    When user chooses the DD option
    Then verify the chosen value


  Scenario: User selects multiple option from the dropdown
    Given user opens the website
    When user selects the options
    Then verify the chosen options
    