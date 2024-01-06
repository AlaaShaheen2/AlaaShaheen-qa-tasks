Feature: Create an Account functionality

    Scenario: Verify the user can create account successfully
        Given The user navigated to create account page
        When  Type "firstName" in the field
        And   Type "lastName" in the field
        And   Type "email" in the field
        And   Type "password" in the field
        And   Type "confirmPassword" in the field
        And   Clicks on Create an account button
        Then The Account should be created successfully
        And "Thank you for registering with Main Website Store." message will be shown