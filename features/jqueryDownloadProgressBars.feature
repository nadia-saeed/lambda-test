Feature: Download Progress Bar

  Scenario: Cancels download process
    Given user is on the download page
    When user clicks on the start download button
    Then user should see download dialogue box
    When user clicks on the cancel download button
    Then the download dialogue is closed

Scenario: Complete the download process
    Given user is on the download page
    When user clicks on the start download button
    Then user should see download dialogue box
    When user clicks on the close button
    Then the complete dialogue is closed