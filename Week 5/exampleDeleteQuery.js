  //REQ.QUERY-------------------------------------------------------------
  
  deleteTask(id) {
    Axios.delete(`/tasks/?id=${id}`)
    .then(() => {
      this.getToDos();
    })
    .catch((err) => console.log('couldn\'t delet task from client -->', err));
  };

  app.delete("/tasks/", (req, res) => {
  deleteTask(req.query.id, (err, data) => {
    if (err) {
      console.log("err in deleting task in server");
      res.sendStatus(500);
    } else {
      res.send(data);
    };
  });
});

const deleteTask = (id, callback) => {
  connection.query(`delete from tasks where id = '${id}'`, (err, data) => {
    if (err) {
      console.log('something went wrong with deleting a task in the query');
      callback(err, null);
    } else {
      callback(null, data);
    };
  });
};
//http://localhost:1234/tasks?id=5


 //REQ.PARAMS-------------------------------------------------------------

  deleteTask(id) {
    Axios.delete(`/tasks/${id}`)
    .then(() => {
      this.getToDos();
    })
    .catch((err) => console.log('couldn\'t delet task from client -->', err));
  };

  app.delete("/tasks/:id", (req, res) => {
  deleteTask(req.params.id, (err, data) => {
    if (err) {
      console.log("err in deleting task in server");
      res.sendStatus(500);
    } else {
      res.send(data);
    };
  });
});

//http://localhost:1234/tasks/5


 //REQ.BODY-------------------------------------------------------------

  deleteTask(id) {
    Axios.delete(`/tasks/`, {
      data :{relevantInfo: id}
    })
    .then(() => {
      this.getToDos();
    })
    .catch((err) => console.log('couldn\'t delet task from client -->', err));
  };

  app.delete("/tasks/", (req, res) => {
  deleteTask(req.body.relevantInfo, (err, data) => {
    if (err) {
      console.log("err in deleting task in server");
      res.sendStatus(500);
    } else {
      res.send(data);
    };
  });
});
