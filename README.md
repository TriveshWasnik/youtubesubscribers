# Get Youtube Subscribers

in this project, we have made 3 api

1. GET [http://localhost:3000/subscribers](http://localhost:3000/subscribers) Response with an array of subscribers(an Object)
2. GET [http://localhost:3000/subscribers/names](http://localhost:3000/subscribers/names) Response with an array of subscribers(an Object with only two fields name and subscribedChannel)
3. GET [http://localhost:3000/subscribers/:id](http://localhost:3000/subscribers/:id) Response with a subscriber*(an object)* with given id.

Response with status code 400 and Error message ({message: error.message}) if id does not match

## download and run (Backend)

download and run the Boiler Plate of this project from Almabetter.it change the name is backend folder and stored in "GETYOUTUBESUBSCRIBER" project Folder.

open the file src/app.js file and write the apis for

1. Get all Youtube Subscribers
2. Get all Youtube Subscribers but display only their name and subscribedChannel
3. get only one subscriber by ID
