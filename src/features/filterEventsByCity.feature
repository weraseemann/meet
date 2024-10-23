Feature: Filter events by City 
Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn't searched for any city
  When user opens the app
  Then upcoming events from all cities will be displayed

  Scenario: User should see a list of suggestions when they search for a city.
  Given user opens the app
  When they type already one letter in the search bar
  Then a list of suggested cities will be displayed

  Scenario: User can select a city from the suggested list.
  Given user has typed in a city in the search bar
  And the list of suggested cities is showing
  When they select a city from the suggested list
  Then events for the selected city will be displayed

  
