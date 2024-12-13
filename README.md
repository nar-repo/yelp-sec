# yelp-sec


 :point_down:  Demonstration  :point_down:


https://github.com/nar-repo/yelp-sec/assets/121608118/10982094-59f2-444f-9917-1d8dfec65bba

# Restaurant Finder Microservice

Introduction

This microservice is designed to help users find restaurants near their current location based on a specific dish they're craving. It leverages the power of Google Maps API to accurately pinpoint user location and suggest nearby eateries.

Key Features

User-Centric: Prioritizes the user experience by providing a simple and intuitive interface.
Real-time Location: Utilizes HTML5 Geolocation API to determine the user's current location.
Google Maps Integration: Leverages Google Maps API to fetch detailed information about nearby restaurants, including reviews, ratings, and photos.

Frontend: HTML5, CSS, JavaScript
Backend: Node.js
API: Google Maps API
How it Works

User Input: The user enters the desired dish name.
Location Acquisition: The browser's geolocation API is used to obtain the user's current latitude and longitude.
API Request: A request is sent to the Google Maps API with the user's location and the dish name as parameters.
Data Processing: The API response is parsed to extract relevant information about nearby restaurants.
UI Rendering: The extracted data is displayed on the user interface, including restaurant names, addresses, ratings, and links to their Google Maps profiles.

