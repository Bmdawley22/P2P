const express = require('express')
const app = express();
const port = 8000;

const authRouter = require('./routes/auth')


app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});