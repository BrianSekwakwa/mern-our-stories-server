<h2>Our Stories</h2>

This is the server side code for "Our Stories" application

<h3>APIs</h3>

GET
- / - Welcome page to our server
- /stories - get all stories from our database
- /stories/:id - get one story based on its id

POST
- /stories - Create a new story

PATCH
- /stories/:id - Update an existing story with new information
- /stories/likes/:id - Update our like count on each individual story
- /stories/dislikes/:id - Update our like count on each individual story

DELETE
- /stories/:id - Delete a story from our database
