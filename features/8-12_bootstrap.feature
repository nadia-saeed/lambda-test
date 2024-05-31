Feature: Test the bootstrap functions

  Scenario: User downloads certain file from the website
    Given user opens the website
    When user launches single modal
    Then its relevant dialog will be displayed

  Scenario: User gets alert messages
    Given user opens the website
    When user searches for a autoclosable entry
    Then user gets the relevant alert for a specific time
    When user searches for a normal entry
    Then user gets the relevant alert to be closed manually

  Scenario: User chooses dates range
    Given user opens the website
    When user chooses valid dates
    Then dates are verified as true

  Scenario: User chooses dates range
    Given user opens the website
    When user searches for a valid item from list
    Then user should find the entry

  
  Scenario: User chooses date from the calendar
    Given user opens the calendar
    When I select the date "30-05-2024"
    Then the selected date "30-May-2024" should be in the input field