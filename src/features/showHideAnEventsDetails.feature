Feature: Show/hide event details

Scenario: An event element is collapsed by default.
Given user did not select an event 
When they were shown 
Then details will be collapsed

Scenario: User can expand an event to see its details.
Given user wanted to view event details 
When he clicked on the event
Then the details will be displayed

Scenario: User can collapse an event to hide its details.
Given the details got displayed
When user clicked button "collapse" 
Then details will be collapsed