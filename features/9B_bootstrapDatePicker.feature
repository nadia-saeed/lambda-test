Feature: Test bootstrap date range picker

  Scenario: User chooses dates range
    Given user opens the website
    When user chooses valid dates
    Then dates are verified as true