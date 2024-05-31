Feature: Test various functions

  Scenario: User gets alert message upon context click
    Given user opens the website
    When user clicks the div
    Then user gets the alert message

Scenario: Download a file by clicking the download button
  Given user opens the download page
  When user clicks the download button
  Then the file should be downloaded to the downloads folder

