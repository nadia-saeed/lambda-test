Feature: Search List

  Scenario: Search for Jonathan Oakes
    Given user opens the data list filter page
    When user searches for "Jonathan Oakes"
    Then user should see "Company Name: Oakes Ltd"
    And user should see "Name: Jonathan Oakes"
    And user should see "Title: Founder"

  Scenario: Search for Catherine Pearce
    Given user opens the data list filter page
    When user searches for "Catherine Pearce"
    Then user should see "Company Name: Pearce Workwear Ltd"
    And user should see "Name: Catherine Pearce"
    And user should see "Title: Manager"

  Scenario: Search for Dwayne Portland
    Given user opens the data list filter page
    When user searches for "Dwayne Portland"
    Then user should see "Company Name: Portland Instruments Ltd"
    And user should see "Name: Dwayne Portland"
    And user should see "Title: Tester"