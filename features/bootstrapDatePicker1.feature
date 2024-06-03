  Feature: Test bootstrap date picker
  
  Scenario: User chooses date from the calendar
    Given user opens the calendar
    When user selects the date
    Then the selected date should be in the input field