Feature: Getting the data from the tables

  Scenario: User filters desired data from the table
    Given user is on the table sort and search page
    When user searches for a specific entry
    Then user gets the relevant result