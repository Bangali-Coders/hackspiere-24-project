// Express JS Hello World Server

import express from 'express' ;
const app = express() ;
const port = 4000 || process.env.PORT ;


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})