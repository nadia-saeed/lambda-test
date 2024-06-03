Feature: Verify omages with alt attributes

Scenario: Verify the presence of broken images with alt attributes
    Given user opens the image page
    Then user should see a broken image with an alt text
    
    