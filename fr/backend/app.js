const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });

app.get('/api/products', async (req, res) => {
    res.json(
        {
            success:true,
            message:"order works",
        }
    );
  });

  // Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));