Feature: Iframe Interaction

Scenario: Enter iFrame and write content
Given user is on the iframe-demo-page
When user writes into the editor
Then the editor should contain text