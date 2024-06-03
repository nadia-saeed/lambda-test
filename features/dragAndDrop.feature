Feature: Drag and Drop Demo

  Scenario: Dragging items to the drop area
    Given user is on the drag and drop demo page
    When user drags Draggable item to the drop area
    Then the Draggable item should be listed in the Dropped Items List
    