const express = require('express')
const app = express();
const port = 8000;

const authRouter = require('./routes/auth')

app.use(express.static('public'));
app.set(('view engine', 'ejs'))

app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.render('index.ejs')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});