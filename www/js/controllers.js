angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, $stateParams){
  
  
  var CLIENT_ID = '524459381731-894is12erlildf1p7557v857bh5lcbu1';
  var API_KEY = 'AIzaSyBVqJFW84XaJb5FB8SX11UHvcbFCc1XjIE';

  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  var authorizeButton = document.getElementById('authorize-button');
  var signoutButton = document.getElementById('signout-button');

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);    
  }

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  function initClient() {
   
    
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      // authorizeButton.onclick = handleAuthClick;
      // signoutButton.onclick = handleSignoutClick;
    });
  }

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      // authorizeButton.style.display = 'none';
      // signoutButton.style.display = 'block';
      listUpcomingEvents()
    } else {
      // authorizeButton.style.display = 'block';
      // signoutButton.style.display = 'none';
    }
  }
  /**
   * Append a pre element to the body containing the given message
   * as its text node. Used to display the results of the API call.
   *
   * @param {string} message Text to be placed in pre element.
   */

  appendPre = function(message) {
       
     
  }

  /**
   * Print the summary and start datetime/date of the next ten events in
   * the authorized user's calendar. If no events are found an
   * appropriate message is printed.
   */

  listUpcomingEvents = function() { 
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    }).then(events = function(response) {
      var events = response.result.items;
      console.log('event', events);
      $scope.events = events;
      appendPre('Upcoming events:');
      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          var event = events[i];
          var when = event.start.dateTime;
          if (!when) {
            when = event.start.date;
          }
        appendPre(event.summary + ' (' + when + ')')
        }
      } else {
        appendPre('No upcoming events found.');
      }
    });
  } 
  
handleClientLoad()

  updateSigninStatus() 
    
})


.controller('DashCtrl', function($scope, $stateParams, $http){
  
  
    $scope.result = [];
    $http.get('http://localhost:3000/audios.json')
      .success(function(data){
       
       // console.log('test', data); // for browser console
        $scope.result = data; // for UI
        console.log('data sus', $scope.result);
      })
      .error(function(data){
        console.log('data error');
      })
      .then(function(result){
        things = result.data;
      });

    })