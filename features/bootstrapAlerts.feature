Feature: Test Bootstrap Alerts
  Scenario: User gets alert messages
    Given user opens the website
    When user searches for a autoclosable entry
    Then user gets the relevant alert for a specific time
    When user searches for a normal entry
    Then user gets the relevant alert to be closed manually

