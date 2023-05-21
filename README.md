# RESTAURANT-FOOD-ORDERING-SYSTEM
 This is a web application for a restaurant food ordering system. It allows users to place food orders,update their orders and also delete their orders which are then stored in a MongoDB database and displayed on the website.
# Features
- Place food orders with name, food item, and quantity.
- Store orders in a MongoDB database.
- Display a list of all orders.
- View details of individual orders.
- Update existing orders.
- Delete orders.
# Technologies Used
- Node.js
- Express.js
- MongoDB
- Handlebars (hbs) as the templating engine
# Prerequisites

Make sure you have the following installed on your system:

- Node.js: https://nodejs.org
- MongoDB: https://www.mongodb.com
# Installation

1. Clone the repository and install the dependencies
      cd food-ordering-system
      npm install
2. Set up the MongoDB database:

- Make sure MongoDB is running on your system.
- Update the MongoDB connection URL in `server.js` 

3. Start the server and enter :
          node server.js
4. Access the application in your browser at `http://localhost:3000`.

# Usage

- On the home page, enter the name, food item, and quantity to place an order.
- The orders will be displayed below the form.
- Update an order by clicking the "Update" button on the order details page.
- Delete an order by clicking the "Delete" button on the order details page.
# Attributes used
- name - name of the customer who place the order
- food - food item what the customer place the order
- quantity - quantity of the food item placed by the customer
# index.hbs file
- The index.hbs template renders the main page of the application. It includes a form for users to place new orders and displays the existing orders as a list below the form using Handlebars iteration.
- The <form> element allows users to place a new food order. It sends a POST request to the /order route in the server to handle the submission.
- Inside the form, there are three input fields: name, food, and quantity. Users must provide values for these fields to place an order.
- The {{#each orders}} block iterates over the orders array passed from the server and displays each order as a list item (<li>). It shows the name, quantity, and food of each order.
- The CSS file (styles.css) is linked to the HTML to provide basic styling for the page. You can customize the styles in the public/css/styles.css file.
# server.js file 
- This server.js file sets up the server, connects to the database, defines the data schema, and handles the routes for the restaurant food ordering system.
- The express module is required to create an instance of the Express.js application.
- The mongoose module is required to connect to MongoDB and define the data schema and model.
- An Express application is created using express() and assigned to the app constant.
- The mongoose.connect() function is used to establish a connection to the MongoDB database named "food-ordering-system". It uses the useNewUrlParser and useUnifiedTopology options for compatibility.
- A schema is defined for the food orders using mongoose.Schema. It specifies the fields name, food, and quantity with their respective data types.
- The schema is compiled into a model called Order using mongoose.model.
- Middleware is set up using app.use(). The express.urlencoded() middleware is used to parse the request body data.
- The express.static() middleware is used to serve static files from the "public" directory, such as CSS and client-side JavaScript files.
- The templating engine is set to Handlebars (hbs) using app.set('view engine', 'hbs').
- Routes are defined using app.get() and app.post(). The root route ("/") renders the index.hbs template.
- The "/order" route handles the POST request when a user places an order. It creates a new Order document and saves it to the database. - If successful, the user is redirected to the "/orders" route.
- The "/orders" route retrieves all orders from the database using Order.find(). The orders are then passed to the index.hbs template for rendering.
- The server is started using app.listen() on port 3000. A message is logged to the console upon successful start.
# Conclusion
  In conclusion, the restaurant food ordering system project is a full-stack web application that allows users to place food orders, which are stored in a MongoDB database and displayed on the website. The project demonstrates the implementation of CRUD operations (Create, Read, Update, Delete) for managing food orders. It provides a user-friendly interface for placing orders and efficiently managing the order data.
