
    Feature: Add a new Campaigns

    The user should be able to add a new campaigns 

Background: Navigate promotions area
 Given The user click on promotions area 
    Scenario: Verify that The user can add a new campaigns successfully
    And The user click on campaigns button
    When Click on Add New button
    And Enter name in name input field
    And Enter subject in subject input field
    And Enter body in body field
    And Click on Save button 
    Then  The new campaigns should be added successfully
