
  const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

const { match } = require('assert');
const express =require('express');
const { isNumber } = require('util');
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
      res.status(500).send({status:500, error:true, message:"you have to provide a search"})
      //res.status(500).send('Not found');
  // return new ResponseEntity(httpStatus.INTERNAL_SERVER_ERROR)
    }
    
    
    else if(value!==""){

    res.send({status:200, message:"ok", data: value})
    }

  });
  
  app.get('/movies/create', (req, res) => {res.send('create')})

  app.get('/movies/read', (req, res) => {
    //let mouvies=req.params.movies;
    res.send({status:200, data:movies })
  
  })
  app.get('/movies/read/by-date', (req, res) => {
    //let mouvies=req.params.movies;
    

    res.send({status:200, data:movies.sort((a,b)=> a.year-b.year )
    
    
    
    
    })
  
  })
  app.get('/movies/read/by-rating', (req, res) => {
    //let mouvies=req.params.movies;
    

    res.send({status:200, data:movies.sort((a,b)=> b.rating-a.rating )
    
    
    
    
    })
  
  })
  app.get('/movies/read/by-title', (req, res) => {
    //let mouvies=req.params.movies;
    

    res.send({status:200, data:movies.sort((a,b)=> a.title.localeCompare(b.title ))
    
    
    
    
    })
  
  })
  

  app.get('/movies/read/id/:index', (req, res) => {
    //let mouvies=req.params.movies;
    const i =req.params.index;
    if(i<0||i>movies.length){
      res.status(404).send({status:404, error:true, message:'the movie '+i+' does not exist'})

    }else{
      res.send({status:200, data:movies[i] })
    }
    
  
  })

  app.get('/movies/add', (req, res) => { 
    //res.send('create')
    var url=require("url");
    var yearvalidate=/^[0-9]{4}$/;
    var ratingvalidatefloat=/^[-+]?[0-9]+\.[0-9]+$/;
    var ratingvalidateint=/^[0-9]$/;


    var parsedurl= url.parse(req.url,true);
    var title=req.query.title;
    var year=req.query.year;
    var rating=req.query.rating;

    //console.log(year)

  /*if(yearvalidate.test(parsedurl.query.year)){
    res.send({status:200, data:"TRUE" })
  }else{
    res.send({status:200, data:"FALSE" })

  }*/
  if(title===""||!yearvalidate.test(parsedurl.query.year)||year===""){
    res.status(403).send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    
  }else{
    if(rating===""){
      const movie={
        title:title.toString() ,year:parseInt(year),rating:4
      }
      movies.push(movie);
      res.send(movies)

    }else if(ratingvalidatefloat.test(parsedurl.query.rating)||ratingvalidateint.test(parsedurl.query.rating)){
      const movie={
        title:title.toString() ,year:parseInt(year),rating:parseFloat(rating)
      }
      movies.push(movie);
      res.send(movies)

    }
  }


  
  })
  app.get('/movies/delete/:idm', (req, res) => {
    var idm =req.params.idm;
    var index=parseInt(idm)
    if(Number.isInteger(index)){
     // res.send(id+1)
    if(index>=0 && index<movies.length){
       //console.log(index);
       
       movies.splice(index,1);
       res.send(movies);
      
        
      // movies.pop();
       
      }
      
    }
    



  })
app.get("/movies/update/:id",(req,res)=> {
  var url=require("url");
  var parsedurl= url.parse(req.url,true);

  //var ratingvalidatefloat=/^[-+]?[0-9]+\.[0-9]+$/;
  var ratingvalidateint=/^[0-9]$/;
  var yearvalidate=/^[0-9]{4}$/;
  var id =req.params.id;
  var title=req.query.title;
  var rating=parseFloat(req.query.rating);
  var year=req.query.year;
  id=parseInt(id);
  if(title!=""){
    movies[id].title=title;
  }
  
   if(rating!=""&& ratingvalidateint.test(parsedurl.query.rating)){
    movies[id].rating=parseFloat(rating);
    //console.group(rating)

  }
  if(yearvalidate.test(parsedurl.query.year)&&year!=""){
    movies[id].year=year;
  }

  res.send(movies);

})


  app.get('/movies/update', (req, res) => {res.send('update')})
  //app.get('/movies/delete', (req, res) => {res.send('delete')})


  


   
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
