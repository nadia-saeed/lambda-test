Feature: File Download Demo

  Scenario: Generate a file with entered text
    Given user is on the file download demo page
    When user enters text into the textbox and generate that
    Then the download button gets clickable
    When user clicks the download button
    Then a file with the name "Lambdainfo.txt" should be downloaded containing the typed text
