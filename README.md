# Meet App
It is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

  ## Serverless for Meet App
Concidering the project requirements this App is not going to be complex and will not need much security as the data is not supposed to be highly sensitive . Serverless Provider is conform with the programming language of the project. 
Serverless functions for the Meet App allows scaling based on demand. With serverless functions the app remains responsive regardless of level of traffic, reduce costs associated with running and maintaining servers 24/7. Payments will only be made when functions are executed. Using serverless functions I don’t need to worry about managing servers or infrastructure, I can only concentrate my workload on coding.

# Key Features:
● Filter Events by City.
● Show/Hide Event Details.
● Specify Number of Events.
● Use the App When Offline.
● Add an App Shortcut to the Home Screen.

# Project Features & Scenarios

  ## Feature 1: Filter Events By City
  User Story 1: As a user, I want to see upcoming events from all cities if I haven't searched for a specific city. User Story 2: As a user, I want to see a list of suggestions when I search for a specific city. User Story 3: As a user, I want to be able to select a city from the suggested list.
  
  Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn't searched for any city
  When user opens the app
  Then upcoming events from all cities will be displayed.

  Scenario 2: User should see a list of suggestions when they search for a city.
  Given user opens the app
  When they type already one letter in the search bar
  Then a list of suggested cities will be displayed.

  Scenario 3: User can select a city from the suggested list.
  Given user has typed in a city in the search bar
  When they select a city from the suggested list
  Then events for the selected city will be displayed.

  ## Feature 2: Show/Hide Event Details
  User Story 1: As a user, I want event details to be collapsed by default. User Story 2: As a user, I want to be able to expand an event to see its details. User Story 3: As a user, I want to be able to collapse an event to hide its details.
 
  Scenario 1: An event element is collapsed by default.
  Given user is viewing the list of events
  When they open the app
  Then event details should be collapsed by default.
  
  Scenario 2: User can expand an event to see details.
  Given user is viewing an event with collapsed details
  When they click on any event
  Then the event details will expand to show more information.
  
  Scenario 3: User can collapse an event to hide details.
  Given user is viewing an event with expanded details
  When they click on the event again
  Then the event details should collapse to hide extra information.

  ## Feature 3: Specify Number of Events
  User Story 1: As a user, I want to see 20 events by default when I haven't specified a number. User Story 2: As a user, I want to be able to change the number of events displayed.
  
  Scenario 1: When user hasn’t specified a number, 20 events are shown by default.
  Given user hasn't specified the number of events
  When they access the app
  Then 20 events will be displayed by default.

  Scenario 2: User can change the number of events displayed.
  Given user is viewing the list of events
  When they change the number of events to be displayed
  Then the events list will show the specified number of events.

  ## Feature 4: Use the App When Offline
  User Story 1: As a user, I want to see cached data when there's no internet connection. User Story 2: As a user, I want to see an error message when I change search settings if there is no internet connection.
  
  Scenario 1: Show cached data when there’s no internet connection.
  Given user opened the app before and has cached data
  When user opens the app without an internet connection
  Then the app will display cached data of the events.
  
  Scenario 2: Show error when user changes search settings (city, number of events).
  Given user has changed search settings (city, number of events)
  When there's no internet connection
  Then the app will display an error message showing the problems with the internet connection.

  ## Feature 5: Add an App Shortcut to the Home Screen
  User Story 1: As a user, I want to install the meet app as a shortcut on my home screen of my device.
  
  Scenario 1: User can install the meet app as a shortcut on their device home screen.
  Given user is accessing the app on a mobile device
  When they choose to add a shortcut to the home screen
  Then the app should be installed as a shortcut for easy access.

  ## Feature 6: Display Charts Visualizing Event Details
  User Story 1: As a user, I want to see a chart displaying the number of upcoming events in each city.
  
  Scenario 1: Show a chart with the number of upcoming events in each city. ● Display Charts Visualizing Event Details.
  Given user is viewing the events page
  When they navigate to the charts section
  Then a chart will be displayed showing the number of upcoming events in each city.


