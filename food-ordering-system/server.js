const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://sandhyamatheswaran2003:nosql@cluster0.smui8w3.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a schema and model for the food orders
const orderSchema = new mongoose.Schema({
  name: String,
  food: String,
  quantity: Number,
});

const Order = mongoose.model('Order', orderSchema);

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'hbs');

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/order', (req, res) => {
  const { name, food, quantity } = req.body;

  // Create a new order document
  const order = new Order({ name, food, quantity });

  // Save the order to the database
  order.save()
    .then(() => {
      res.redirect('/orders');
    })
    .catch((err) => {
      console.error('Failed to save order:', err);
      res.status(500).send('Failed to save order');
    });
});

app.get('/orders', (req, res) => {
  // Retrieve all orders from the database
  Order.find()
    .then((orders) => {
      res.render('index', { orders });
    })
    .catch((err) => {
      console.error('Failed to fetch orders:', err);
      res.status(500).send('Failed to fetch orders');
    });
});
// ...
// ...

// Update an order
// ...

// Update an order
app.post('/order/:id/update', (req, res) => {
  const { name, food, quantity } = req.body;
  const orderId = req.params.id;

  Order.findByIdAndUpdate(orderId, { name, food, quantity })
    .then(() => {
      res.redirect('/orders');
    })
    .catch((err) => {
      console.error('Failed to update order:', err);
      res.status(500).send('Failed to update order');
    });
});




  // Delete an order
  app.post('/order/:id/delete', (req, res) => {
    const orderId = req.params.id;
  
    Order.findByIdAndDelete(orderId)
      .then(() => {
        res.redirect('/orders');
      })
      .catch((err) => {
        console.error('Failed to delete order:', err);
        res.status(500).send('Failed to delete order');
      });
  });
  
  // ...
  
  
// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
