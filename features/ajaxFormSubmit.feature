Feature: Verify the submissions

  Scenario: Submit form with valid inputs
    Given user is on the form submit demo page
    When user submits the form
    Then user gets a response message
