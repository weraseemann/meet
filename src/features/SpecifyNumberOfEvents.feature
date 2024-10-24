Feature: Specify Number of Events
Scenario: When user hasn’t specified a number, 32 events are shown by default.
  Given user access the app 
  When they haven't specified the number of events
  Then 32 events will be displayed by default

Scenario: User can change the number of events displayed.
  Given user is viewing the list of events
  When they change the number of events to be displayed
  Then the events list will show the specified number of events