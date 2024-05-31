Feature: Key Press

Scenario: Enter keys and verify last key typed
Given user is on the key-press page
When user enters keys "<key>"
Then the last key typed should be "<lastKey>"

Examples:
    | key   | lastKey |
    | hello | O       |
    | world | D       |
    | pea   | A       |
    | input | T       |