Feature: JQuery Dual List Box

  Scenario: Add an item from the left box to the right box
    Given user is on the dual list box page
    When user selects an item from the left box and adds
    Then the item should be in the right box
    When user clicks remove-all button
    Then all items get removed from the box