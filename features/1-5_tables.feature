Feature: Getting the data from the tables

  Scenario: User gets the data from table
    Given user opens the website
    When user chooses the relevant option
    Then user gets the data


  Scenario: User filters desired data from the table
    Given user opens the website
    When user filters the desired entry
    Then user gets the respective data if it was present


  Scenario: User filters desired data from the table
    Given user opens the website and desired ground
    When user filters the desired entry
    Then user gets the respective data if it was present
 
  Scenario: User filters desired data from the table
    Given user opens the website and desired ground
    When user chooses the relevant option
    Then user gets the respective data of all the pages

  Scenario: User searches for a desired data from the table
    Given user opens the website
    When user searches for a specific entry
    Then user gets the relevant result