Feature: Checkbox Demo

  Scenario: Check single checkbox
    Given user opens the checkbox demo page
    When user checks the single checkbox
    Then user should see "Checked"


  Scenario: Check multiple checkboxes
    Given user opens the checkbox demo page
    When user checks multiple checkboxes
    Then user should see all checkboxes checked
