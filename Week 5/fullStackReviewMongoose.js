//student solution from the full stack review, using mongoose
let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //map out an array of promises, each one resolving if the repo is succssfully added to the db and rejecting if there
  //is an error inserting the repo
  let promises = repos.map((repo) => {
    //create a model instance for each entry.
    const dbEntry = new Repo({
      repoId: repo.id,
      name: repo.name,
      author: repo.owner.login,
      link: repo.html_url,
      watchers: repo.watchers_count,
      forks: repo.forks_count,
      stargazers: repo.stargazers_count,
    });
    //return the promise to the promises array
    return new Promise((resolve, reject) => {
      //save the current repo into the mongoDB
      dbEntry.save((err) => {
        if (err) {
          //if there is an error, reject
          console.log(
            `Error saving Repo to DB, repoID: ${repo.id}, error: ${err}`
          );
          reject(err);
        } else {
          //if no errors, resolve. We don't need to pass any information. We just need it to resolve for
          //our Promise.all
          resolve();
        }
      });
    });
  });
  //the overall function will return a promise too.
  return new Promise((resolve, reject) => {
    //if every repo successfully saved to the db, Promise.all should resolve (value is irrelevant here)
    Promise.all(promises)
      .then((results) => {
        console.log('All promises passed');
        resolve(true);
      })
      .catch((err) => {
        //I also resolve if there is an error. Because it is actually desired to fail sometimes (if there is
        //a duplicate entry). To signal a failure, we return false instead of true
        console.log('At least one promise failed to save');
        resolve(false);
      });
  });
};
//---------------------------------------------------------------------------------------------------------

db.save(results)
  .then(results => {
    //may be desirable to use the true/false response here to notify the client what happened
    res.status(200).send(results)
  })
  .catch(err => {
    //we actually would not expect this code to execute since our promise always resolves
    res.status(500).send('Error saving to DB');
  });

//---------------------------------------------------------------------------------------------------------
//example DB query from fullstack review sprint, using mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

const RepoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  username: String,
  url: String,
  reponame: String,
});

const Repo = mongoose.model('Repo', RepoSchema);

let saveStuff = async (data, cb) => {
  //delete current db collection
  Repo.collection.drop();

 //iterate over recieved data from API
  for (let i = 0; i < data.length; i++) {
    try {
      let insertThing = await new Repo({
        id: data[i].id,
        username: data[i].owner.login,
        url: data[i].html_url,
        reponame: data[i].name,
      });
      //save each obj
      await insertThing.save();

    } catch (error) {
      console.log('something went wrong in posting');
      return cb(err);
    }
  }

  //if succesful, fetch all the stuff you just saved and res.send
  Repo.find({})
    .then((data) => {
      cb(null, data);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports.saveStuff = saveStuff;
//---------------------------------------------------------------------------------------------------------
//github.js from fullstack review, with axios and request demo

const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (username, callback) => {
  let options = {
    method: 'get',
    url: `https://api.github.com/users/${username}/repos?`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`,
    },
  };
  //request(//adress@url) --- response
  // axios(options)
  // .then((res) => {
  //   callback(null, res)
  // })
  // .catch(err => callback(err))
  request(options, function (err, response, body) {
    if (err) {
      console.log('err from request');
      callback(err, null);
    } else {
      callback(null, JSON.parse(body));
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;
