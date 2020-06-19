//object we're going to manipulate 
var haircutTyler = {
  body: 'dirty',
};
// //---------------------------------------------------------------------------------------------------------

var takeShower = function () {
  // console.log('ope!')
  this.body = 'clean';
  console.log('this -->', this)
  console.log(haircutTyler)
};
// //---------------------------------------------------------------------------------------------------------
haircutTyler.takeShower = takeShower;

//what does this func do when invoked? 
haircutTyler.takeShower();
console.log(haircutTyler);

//how about this?
takeShower.call(haircutTyler);

//how about this one?
var showerDuration = 10000;

setTimeout(takeShower, showerDuration)
console.log(haircutTyler)

//---------------------------------------------------------------------------------------------------------
setTimeout(haircutTyler.takeShower(), showerDuration)
//---------------------------------------------------------------------------------------------------------
setTimeout(haircutTyler.takeShower, showerDuration)
//---------------------------------------------------------------------------------------------------------
setTimeout(takeShower.bind(haircutTyler), showerDuration)
//---------------------------------------------------------------------------------------------------------
setTimeout(() => {
  haircutTyler.takeShower()
}, showerDuration)

setTimeout(function(){
  console.log(this)
},0)


setTimeout(() => {
  console.log(this)
},0)

//---------------------------------------------------------------------------------------------------------
setTimeout(function(){
  haircutTyler.takeShower()
}, showerDuration);

//---------------------------------------------------------------------------------------------------------
setTimeout(() => {
  haircutTyler.takeShower()
}, showerDuration);
//---------------------------------------------------------------------------------------------------------

setTimeout(function(){
  takeShower.call(haircutTyler)
}, showerDuration);
//---------------------------------------------------------------------------------------------------------
console.log(haircutTyler);
//---------------------------------------------------------------------------------------------------------
const wait = (cb) => {
  setTimeout(function(){
    haircutTyler.takeShower();
    cb(haircutTyler)
  }, 1000)

}
const print = (obj) => {
  console.log(obj)
}

wait((result) => {
  print(result)
});
