//ERR FIRST CALLBACK

//db.js
const getProducts = (callback) => {
  client.query(`select * from products limit 10`, (err, data) => { 
    if(err){
      console.log('nah, you can\'t get the products dawg');
      callback(err, null);
    } else {
      callback(null, data);
    }
  })
}


//server.js
app.get("/notdist", (req, res) => {
  db.getProducts((err, data) => {
    if (err) {
      console.log('nope!')
      res.sendStatus(400)
    } else {
      res.send(data);
    }
  });
});
//----------------------------------------------------------------
//PROMISIFIED

//db.js
const getProducts = () => {
  return new Promise ((resolve, reject) => {
    client.query(`select * from products limit 10`, (err, data) => {
      if(err){
        console.log('nah, you can\'t get the products dawg');
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

//server.js
app.get("/notdist", (req, res) => {
  db.getProducts()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.sendStatus(400)
    });
});
//----------------------------------------------------------------
//ASYNC AWAIT

//db.js
const getProducts = () => {
  return new Promise((resolve, reject) => {
    client.query(`select * from products limit 10`, (err, data) => {
      if (err) {
        console.log('nah, you can\'t get the products dawg');
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

//server.js
app.get("/notdist", async(req, res) => {
  try {
    const data = await db.getProducts();
    res.send(data)
    
  }catch(error){
    res.send(error)
  }
});
