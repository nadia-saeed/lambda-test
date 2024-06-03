Feature: Mouse Hover Demo
@current
  Scenario: Hover over buttons and images
    Given user is on the mouse hover demo page
    When user hovers over the green Hover Me button
    Then green Hover Me button should change color
    When user hovers over the Link Hover button
    Then the Link Hover button should change color