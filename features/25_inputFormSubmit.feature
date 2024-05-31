Feature: Form Submission

  Scenario: Fill out and submit the form
    Given user opens the form page
    When user submits the form with valid data
    Then user should see the success message
