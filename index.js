const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT||5000;
app.use(cors())

const categories = require('./data/chef.json');
const food = require('./data/food.json');
const recipe = require('./data/recipe.json');


app.get('/', (req, res) => {
  res.send('Chef Recipe hunter is running')
})
app.get('/recipe', (req, res) => {
  res.send(recipe);
})

app.get('/food',(req,res)=>{
    res.send(food);
});

app.get('/food/:id',(req,res)=>{
    const id = req.params.id;
    const selectedFood = food.find(f=>f.id === id);
    res.send(selectedFood)
})

app.get('/categories/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const categoryFood = food.filter(fd => parseInt(fd.category_id) === id);
      res.send(categoryFood);
  
})
app.get('/categories',(req,res)=>{
res.send(categories)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})