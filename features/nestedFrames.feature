Feature: Nested Frames Testing

  Scenario: Test content in nested frames
    Given user is on the nested frames page
    When user switches to the top frame
    Then user should see the text "Top"
    When user switches to the middle frame
    Then user should see the text "Middle"
    When user switches to the left frame
    Then user should see the text "Left"
    When user switches to the right frame
    Then user should see the text "Right"
