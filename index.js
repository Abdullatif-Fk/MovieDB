const express =require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => res.send('ok'))


app.get('/test', (req, res) => {
    //return res.send('ok');

    res.send(
      {
           status:200,
           message:"ok"
      }
  )


  });
  app.get('/time', (req, res) => {
    //return res.send('ok');
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    res.send(
      {status:200, message:time}
  )

  
  });
   
  app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });
   
  app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
   
  app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });
  app.listen(PORT ,()=>console.log(`Connected to ${PORT}`))