Feature: Popup Windows

Scenario: Open certain page
    Given user is on the popup modal page
    When user clicks on the button
    Then a new window should open
    When user enters any Url
    Then a new url containing window should open