const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT||5000;
app.use(cors())

const categories = require('./data/foods-category.json');
const food = require('./data/food.json');


app.get('/', (req, res) => {
  res.send('Chef Recipe hunter is running')
})

app.get('/food',(req,res)=>{
    res.send(food);
});

app.get('/food/:id',(req,res)=>{
    const id = req.params.id;
    const selectedFood = food.find(f=>f.id === id);
    res.send(selectedFood)
})



app.get('/categories',(req,res)=>{
res.send(categories)
});








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})