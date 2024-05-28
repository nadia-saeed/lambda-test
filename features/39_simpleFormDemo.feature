Feature: Simple Form Demo
@current
Scenario: Verify the results
Given user opens the page
When user enters message
Then the exact message is displayed
When user enters two numbers for the calculations
Then the correct answer is displayed
