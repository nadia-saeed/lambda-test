Feature: Nested Frames Testing
@current
  Scenario: Verify text in nested frames using data table
    Given I am on the nested frames page
    When I switch to the following frames:
      | frame        | parentFrame |
      | frame-top    |             |
      | frame-left   | frame-top   |
      | frame-bottom |             |
      | frame-middle | frame-top   |
      | frame-right  | frame-top   |
    Then I should see the following text in frames:
      | frame        | expectedText |
      | frame-left   | Left         |
      | frame-bottom | Bottom       |
      | frame-middle | Middle       |
      | frame-right  | Right        |
