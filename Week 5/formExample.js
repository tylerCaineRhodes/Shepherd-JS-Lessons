//OG FORM----------------------------------------------------------------------------

<form action='/experiment' method='post'>
  <input type='text' name='name' placeholder='First name' />
  <br></br>
  <input type='text' name='email' placeholder='email' />
  <br></br>
  <input type='password' name='password' placeholder='password' />
  <br></br>
  <button type='submit'>STILL A BUTTON</button>
</form>;

//server example
app.post('/experiment', (req, res) => {
  const { name, email, password } = req.body;
  console.log('req.body:', req.body);
  console.log('req.body.name:', name);
  console.log('req.body.email:', email);
  console.log('req.body.password:', password);
});
//USING CUSTOM FUNC------------------------------------------------------------------

  testPost(e){
    e.preventDefault()
    axios.post('/experiment', {
      name: e.target.name.value, 
      email: e.target.email.value, 
      password: e.target.password.value
    })
  }

<form onSubmit={this.testPost}>
  <input
    type='text'
    name='name'
    placeholder='First name'
  />
  <br></br>
  <input
    type='text'
    name='email'
    placeholder='email'
  />
  <br></br>
  <input
    type='password'
    name='password'
    placeholder='password'
  />
  <br></br>
  <button type='submit'>STILL A BUTTON</button>
</form>;

//SLY REACT ONCHANGE------------------------------------------------------------------

  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  PostF1(event) {
    let obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('/F1', obj) //object is body
      .then((response) => {
        console.log(response);
      })
  }

  <input
    type='text'
    name='name'
    onChange={this.handleChange}
    placeholder='First name'
  />
  <br></br>
  <input
    type='text'
    name='email'
    onChange={this.handleChange}
    placeholder='email'
  ></input>
  <br></br>
  <input
    type='password'
    name='password'
    onChange={this.handleChange}
    placeholder='password'
  ></input>
  <br></br>
  <button onClick={this.PostF1}>STILL A BUTTON</button>
