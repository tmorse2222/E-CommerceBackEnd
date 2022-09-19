# E-CommerceBackEnd
Tyler Morse<br>
E-Commerce Back End<br>
<br>
User Story:<br>
AS A manager at an internet retail company<br>
I WANT a back end for my e-commerce website that uses the latest technologies<br>
SO THAT my company can compete with other e-commerce companies<br>
<br>
Acceptance Criteria:<br>
GIVEN a functional Express.js API<br>
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file<br>
THEN I am able to connect to a database using Sequelize<br>
WHEN I enter schema and seed commands<br>
THEN a development database is created and is seeded with test data<br>
WHEN I enter the command to invoke the application<br>
THEN my server is started and the Sequelize models are synced to the MySQL database<br>
WHEN I open API GET routes in Insomnia Core for categories, products, or tags<br>
THEN the data for each of these routes is displayed in a formatted JSON<br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core<br>
THEN I am able to successfully create, update, and delete data in my database<br>
Description:<br>
This application is executed through node.js, including "mysql2", "dotenv", "express", and "sequelize". The application represents the back end of an E-Commerce application, allowing GET, POST, PUT, and DELETE requests to be made to a created API and data returned from a database created through sequelize. A link to a walkthrough video of the applications functionality can be found <a href="#">here</a>.