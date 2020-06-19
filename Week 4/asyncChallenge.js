//---------------------------------------------------------------- (1)
//rewrite function with the use of a callback to return 1 2
const first = () => {

  setTimeout(() => {
    console.log(1);
  }, 1000);
}

const second = () => {
  console.log(2);
}

first();
second();
//---------------------------------------------------------------- (2)
// rewrite function with the use of callback to return a value of 'first second';
const first = () => {
  let string = '';

  setTimeout(() => {
    //add 'first' to string

  }, 500);
}

const second = (string) => {
  //add 'second' to string and return

  console.log(string);
}
//---------------------------------------------------------------- (3)
//write the same thing as above except with an err-first callback
const first = () => {
  let string = "";

  if(string.length !==0){
    //throw err
  } 

  setTimeout(() => {
    string += 'first'

  }, 500);

}

const second = (string) => {
  string += ' second'
}

//---------------------------------------------------------------- (4)
//write the same thing as above except with the first as a promise
const first = () => {
  let string = "";

  if (string.length !== 0) {
    //throw err
  }

  setTimeout(() => {
    string += 'first'

  }, 500);

}

const second = (string) => {
  string += ' second'
}
//---------------------------------------------------------------- (5)
//write same thing as above except using async await
const first = () => {
  let string = "";

  if (string.length !== 0) {
    //throw err
  }

  setTimeout(() => {
    string += 'first'

  }, 500);

}

const second = (string) => {
  string += ' second'
}
//----------------------------------------------------------------
