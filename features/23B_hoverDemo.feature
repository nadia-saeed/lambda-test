Feature: Mouse Hover Demo

  Scenario: Hover over buttons and images
    Given user is on the mouse hover demo page
    When user hovers over the image with the caption No Effect only content show
    Then the caption should be visible