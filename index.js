const express =require('express');
const app = express();
const PORT = 3000;


/*app.get('/', (req, res) => res.send('ok'))


*/
app.get('/', (req, res) => {
    return res.send('ok');
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