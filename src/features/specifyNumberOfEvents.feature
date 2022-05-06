Feature: SPECIFY NUMBER OF EVENTS

    Scenario: When user hasn`t specified a number, 32 is the default number.
        Given the user did not specify the number of events to be displayed
        When events are displayed
        Then 32 events will be displayed by default

    Scenario: User can change the number of events they want to see.
        Given the user wants to see a certain number of events on the screen
        When he specifies the number of events
        Then this number of events will be displayed