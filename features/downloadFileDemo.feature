Feature: Test various functions

  Scenario: Download a file by clicking the download button
    Given user opens the download page
    When user clicks the download button
    Then the file should be downloaded to the downloads folder

