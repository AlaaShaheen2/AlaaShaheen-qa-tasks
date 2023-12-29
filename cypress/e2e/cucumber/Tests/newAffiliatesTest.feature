Feature: Add a new affiliate

    The user should be able to add a new affiliate

Background: Navigate promotions area
 Given The user click on promotions area 
    Scenario: Verify that The user can add a new affiliate successfully
    And The user click on affiliate button
    When Click on Add New button
    And Enter first name in first name input field
    And Enter last name in last name input field
    And Enter email in emial input field
    And Select the country from country list
    And Enter the name of the region in region field 
    And Enter the name of the city in city field 
    And Enter address1 in address1 field 
    And Enter postal code in postal code field
    And Enter Phone number in Phone number field
    And Click on Save button 
    Then  The new affiliate should be added successfully

    # The new affiliate has been added successfully.
