Feature: Verify the submissions

  Scenario: Submit form with valid inputs
    Given user is on the download page
    When user starts downloading
    Then the download is successfully completed
