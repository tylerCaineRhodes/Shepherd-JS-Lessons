//comment in each section individually and ask the student's what the expected behavior is before running

var PropertyPerson = function(pesonName) {
  this.name = pesonName;
}

var me = new PropertyPerson('Tyler');
console.log(me);
console.log(me.name)
//----------------------------------------------------------------

var VariablePerson = function(pesonName) { //this person can't access his name
  var name = pesonName;
}

var me = new VariablePerson('Tyler');
console.log(me);
console.log(me.name)
//----------------------------------------------------------------

var VariablePersonWithMemory = function(pesonName) { //this person has rememberName property which can access scope of memory
  var name = pesonName;

  this.rememberName = function() {
    return name;
  }
}

var me = new VariablePersonWithMemory('Tyler');
console.log(me);
console.log(me.name)
console.log(me.rememberName())

//----------------------------------------------------------------
