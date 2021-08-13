const express = require('express')
const app = express();
const port = 8000;

const methodOverride = require('method-override'); //gets method-override library

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true})); //changes response from client to JS understandable
app.use(express.static('public'));
app.set(('view engine', 'ejs'))

app.use('/auth', authRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.render('index.ejs', {
      auth: false
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});