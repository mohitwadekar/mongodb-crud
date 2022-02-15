# mongodb-crud

This is CRUD (Create Read Update Delete) app which a user can bring in use with the help of MongoDB and Node.js.
To use this app, a user should install MongoDB and Postman softwares in system for local database access and localhost calling respectively. 
In order to use this app, user should install following modules on terminal(I have used VS Code):-
1) npm install express
2) npm install -g nodemon
3) npm install mongoose

There are 4 localhost calls on postman which are as follows.


for New Entry : (POST request on postman)
http://localhost:3000/tasks/

for Reading any Entry : (GET request on postman)
http://localhost:3000/tasks/id

for Updating Entry : (PATCH request on postman)
http://localhost:3000/tasks/id with the JSON data updations

for Deleting Entry : (DELETE request on postman)
http://localhost:3000/tasks/id 
