Feature: Add a new discount

    The user should be able to add a new discount 

Background: Navigate promotions area
 Given The user click on promotions area 
    Scenario: Verify that The user can add a new discount successfully
    And The user click on discount button
    When Click on Add New button
    And Enter name in name input field
    And Choose discount type from the list
    And Enter discount amount in discount amount field
    And Click on Save button 
    Then  The new discount should be added successfully