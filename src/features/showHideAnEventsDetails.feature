Feature: Show/Hide Event Details
Scenario: An event element is collapsed by default.
   Given user is openning the app
    When the app displays list of events
    Then the user should see the event element collapsed by default
  
  Scenario: User can expand an event to see details.
  Given user is viewing an event with collapsed details
  When they click on any show event button
  Then the event details will expand to show more information
  
  Scenario: User can collapse an event to hide details.
  Given user is viewing an event with expanded details
  When user clicks then hide event button
  Then the event details should collapse to hide extra information