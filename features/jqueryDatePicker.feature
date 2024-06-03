Feature: Date Range Picker

  Scenario: User selects a date range
    Given user is on the JQuery Date Picker demo page
    When user selects a starting date
    Then the selected starting date should be displayed correctly
    When user selects the ending date
    Then the selected ending date should be displayed correctly