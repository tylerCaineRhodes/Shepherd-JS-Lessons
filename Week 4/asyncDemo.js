//----------------------------------------------------------------
//What do you think the result of running this will be? 
//run example

const first = () => {
  console.log(1);
}
const second = () => {
  console.log(2);
}
first();
second();
//----------------------------------------------------------------


//---------------------------------------------------------------- 
//What do you think the result of running this will be? 
//run example

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
//----------------------------------------------------------------
//have students work on async challenge in groups and then go over the answers below




//ANSWERS TO ASYNC CHALLENGE

//---------------------------------------------------------------- ANSWER (1)
const first = (callback) => {
  
  setTimeout(() => {
    console.log(1);
    callback();
  }, 500);
}

const second = () => {
  console.log(2);
}

first(() => second());
//----------------------------------------------------------------


//---------------------------------------------------------------- ANSWER (2)
const first = (callback) => {
  let string = ""

  setTimeout(() => {
    string += 'first'
    callback(string)
  }, 500);
}

const second = (string) => {
  string += ' second'
  console.log(string);
  return string
}

first((str) => second(str))
//----------------------------------------------------------------


//---------------------------------------------------------------- ANSWER (3)

const first = (callback) => {
  let string = "";
  if(string.length !== 0){
    callback(new Error("nope"), null);
  } else {
    setTimeout(() => {
      string += 'first'
      callback(null, string);
    }, 500);
  }
}

const second = (string) => {
  string += ' second'
  console.log(string);
}


first((err, string) => {
  if(err){
    console.log('something went wrong', err)
  } else {
    second(string)
  }
});

//---------------------------------------------------------------- promisified - ANSWER (4) 
const first = () => {
  let string = '';
  return new Promise((resolve, reject) => {
    if(string.length !== 0){
      reject('string didn\'nt start at length of zero');
    } else {
      setTimeout(() => {
        string += ' first';
        resolve(string)
      }, 500);
    }
  })
}

const second = (string) => {
  string += ' second';
  console.log(string);
}

first()
  .then(string => {
    second(string)
  })
  .catch(error => {
    console.log(error)
  });

// first().then(string => second(string)).catch(error => console.log(error))

//---------------------------------------------------------------- async await- ANSWER(5)

const first = () => {
  let string = '';
  return new Promise((resolve, reject) => {
    if(string.length !== 0){
      reject('string didn\'nt start at length of zero');
    } else {
      setTimeout(() => {
        string += ' first';
        resolve(string)
      }, 500);
    }
  })
}

const second = (string) => {
  string += ' second';
  console.log(string);
}

(async() => {
  try {
    let chunk = await first();
    return second(chunk)

  } catch (err) {
    console.error(err)
  }
})();
