const waitFunc = (i) => {
  return new Promise (resolve => {
    setTimeout(() => {
      console.log('waited two seconds -->', i);
      resolve()
    }, 2000);
  })
};

const getNum = (num) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(num)
    }, 3000)
  })
}
//----------------------------------------------------------------
const loopThatWaits = async() => {
  console.log('start')

  for (let i = 0; i <= 10; i++){
    await waitFunc(i);
    console.log(`waited and now continuing`);
  }
  console.log('end');
}
loopThatWaits()

//----------------------------------------------------------------
const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//use a map and then filter/reduce the results
const mapThatWaits = async() => {
  console.log('start')

  const awaitedNums = nums.map(async num => {
    const result = await getNum(num);
    return result;
  })
  const allNums = await Promise.all(awaitedNums);
  console.log(allNums);
  console.log('end')
};
mapThatWaits()
//----------------------------------------------------------------

const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//use a map and then filter/reduce the results
const reduceThatWaits = async () => {
  console.log('start');

  const reduced = await nums.reduce(async(acc, num) => {
    //runs much faster if the await for acc is after the await for the num
    const result = await getNum(num);
    const currentAcc = await acc;
    return result + currentAcc;
  }, 0);

  console.log(reduced);
  console.log('end');
};
reduceThatWaits();
//----------------------------------------------------------------
