
  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

const express =require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {res.send('ok')})


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

  app.get('/hello/:id', (req, res) => {
    //return res.send('ok');

    res.send(
      {
           status:200,
           message:"Hello, "+req.params.id
      }
  )


  });


  app.get('/search', (req, res) => {
    //return res.send('ok');
    let value =req.query.s;
    
    if(value ===""){
      res.send({status:500, error:true, message:"you have to provide a search"})
      res.status(500)
  // return new ResponseEntity(httpStatus.INTERNAL_SERVER_ERROR)
    }
    
    
    else if(value!==""){

    res.send({status:200, message:"ok", data: value})
    }

  });
  
  app.get('/movies/create', (req, res) => {res.send('read')})
  app.get('/movies/read', (req, res) => {
    //let mouvies=req.params.movies;
    res.send({status:200, data:movies })
  
  })
  app.get('/movies/update', (req, res) => {res.send('update')})
  app.get('/movies/delete', (req, res) => {res.send('delete')})


  


   
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
