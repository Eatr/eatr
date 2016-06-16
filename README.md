#Eatr

##Project Description
---------------------
Tinder for Eateries

##App link:
-----------
doesnt exist yet

##Planning
==========

###Wireframes

	https://docs.google.com/document/d/1l4lxUlAFzMoHDjdnE34mMCWkkUpvH4NBC4r0NEyASDw/edit?usp=sharing

###User stories

	1. User Sees menu items at all times. 
	   1. Search / Filter
	   2. Login
	   3. Shortlist

	2. User goes to home / loads app page and sees
	   1. Splash loading page for 1 / sec, then loads below pages
	      1. Icon: pac-man burger eating things around town
	   1. Modal window with swipe instructions on UI - dont show again
	   2. First restaurant shown in restaurant -short view
	      1. Which restaurant? No sorting for now
	      2. Highest rating / most swiped right?

	3. User views a restaurant: restaurant-short view
	   1. Picture of default cuisine / google image
	   2. Name of restaurant
	   3. Distance from you 
	   4. Heart and  X button 
	   5. Actions: 
	      1. User can click anything in restaurant-short view to see more information in restaurant-long view
	         * Action.type = CHANGE_VIEW_DETAIL
	      1. User can swipe right or click heart btn to remember / save 
	         * Action.type = ADD_TO_SHORTLIST
	         * Action.type = CHANGE_RESTAURANT

	4. User can swipe left or click  x button to forget and
	         * Restaurant added to forget list for this session
	         * Next restaurant loaded

	5. User clicks filter nav-button, and sees
	   1. Transition?
	   2. Filtering options: price, distance, cuisine
	   3. User can click:
	      1. Fitler by price dropdown or slider
	      2. Filter by cuisine with toggle buttons. 
	         * Boxes block view with toggles
	      1. Fitler radius with slider . min 500m, max 5km 
	      2. Actions: 
	         * Done button clicked, user is returned to new restaurant-short view with new search request made to db. 
	            1. Action.type = CHANGE_PREFS
	            2. If preferences are different from state-preferences then call the API
	            3. From API action.type = UPDATE_RESTAURANTS 

	6. User clicks shortlist / my favourites button 
	   1. User sees list of boxes with each saved restaurant 
	   2. Name, distance, cuisine,
	   3. Actions
	      1. Click box, redirected to restaurant detailed view 
	      2. Swipe left to delete, or click X button to remove from shortlist
	         * Action.type = REMOVE_FROM_SHORTLIST


	7. User clicks login button and sees a Modal window (modal-login-view) with boxes to click for logging in with 
	   1. Fb 
	   2. Twitter
	   3. User can go back by clicking X circle
	   4. Action
	      1. Redirected to provider
	      2. Success… redirected back to restaurant-short view page
	      3. Session and preferences saved in sql db
	      4. 1. User clicks on restaurant from shortlist or rest-short view and sees restaurant-long view
	   1. Same as restaurant-short view
	   2. Additionally sees: 
	      1. Address
	      2. Website
	      3. Phone 
	      4. Price
	   1. Same swipe actions and buttons as restaurant-short view. 

###learning objectives
	TBC

###MVP
	TBC

###Stretch

	- Easter egg
	- Filter short list 
	- Ban restaurant from view

##Github workflow
-----------------
- Git master role assigned each day
- Pull requests approved by gitmaster 
