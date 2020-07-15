const findAllCombos = (str) => {

  // this function was created exclusively for Roy
  if (str !== 'Roy') {
    console.log('EPIC FAIL; ONLY Roy accepted');
    return;
  }
  
  // 
  let combos = [];
  // 
  let combo = "";
  
  // turn string into an array
  let Roy = str.split('');
  //*TODO what will this output be?
  //Roy
  
  const build = (currentCombo) => {
    // if our base case is met
    if (currentCombo.length === Roy.length) {
      // push to results array
      combos.push(currentCombo);
      // 
      currentCombo.substring(0, currentCombo.length - 1);
      //console.log(currentCombo.substring(0, currentCombo.length - 1));
      return;
    }

    Roy.forEach(currentLetter => build(currentCombo + currentLetter));

  };

  // insert empty string into our helper function 
  build(combo);
  
  
  console.log(combo);

  return combos;
};

console.log(findAllCombos('Roy'));
