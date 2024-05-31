Feature: Slider Demo

  Scenario: Adjust sliders and verify their values
    Given user opens the slider demo page
    
    When user sets the slider with default value 15 to 50
    Then user should see the value of the slider with default value 15 as 50
    When user sets the slider with default value 25 to 60
    Then user should see the value of the slider with default value 25 as 60
    When user sets the slider with default value 40 to 70
    Then user should see the value of the slider with default value 40 as 70
    When user sets the slider with default value 20 to 30
    Then user should see the value of the slider with default value 20 as 30
    
    When user sets the slider with default value 30 to 40
    Then user should see the value of the slider with default value 30 as 40
    When user sets the slider with default value 80 to 90
    Then user should see the value of the slider with default value 80 as 90
