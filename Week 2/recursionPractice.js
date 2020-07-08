//solutions to challenge problems
const reverse = (arr) => {
  result = [];

  if (arr.length === 0) { //base case
    return result;
  }

  result.push(arr.pop());
  return result.concat(reverse(arr));
}
//---------------------------------------------------------------------------------------------------------
const reverse = (arr) => {
  let result = [];

  const recurse = (arr) => {
    if (arr.length === 0) {
      return;
    }

    result.push(arr.pop());
    recurse(arr);
  }
  
  recurse(arr);

  return result;
}
//---------------------------------------------------------------------------------------------------------
const countVowels = (string) => {
  let count = 0;

  if (string.length === 0){
    return count;
  }

  const str = string.toLowerCase();

  if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || 
      str[0] === 'o' || str[0]  === 'u') {
    count++;
  }
  return count += countVowels(str.slice(1))
}
//---------------------------------------------------------------------------------------------------------
const countVowels = (string) => {
  let count = 0;

  const recurse = (string) => {
    if (string.length === 0) {
      return count;
    }
    
    const str = string.toLowerCase();

    if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' ||
        str[0] === 'o' || str[0] === 'u') {
      count++;
    }

    recurse(str.slice(1));
  }

  recurse(string);

  return count;
}

console.log(countVowels('abcdEfg'))
//---------------------------------------------------------------------------------------------------------
const findCombosOfRoy = (string) => {
  let combos = [];
  let emptyStr = '';

  const recurse = (current) => {
    if (current.length === string.length) {
      combos.push(current);
      current.substring(0, current.length - 1);
      return;
    }

    for (let i = 0; i < string.length; i++) {
      recurse(current + string[i]);
    }
  };
  recurse(emptyStr);
  return combos;
};

console.log(findCombosOfRoy('ROY'));
//---------------------------------------------------------------------------------------------------------
const everyComboArray = (...args) => {
  let combined = [],
    n = args.length,
    answer = [];

  combined = combined.concat(...args).join('');

  const buildABear = (bear, remainder) => {
    if (bear.length === n) {
      answer.push(bear);
      return;
    }
    for (let i = 0; i < remainder.length; i++) {
      buildABear(
        bear + remainder[i],
        remainder.slice(0, i) + remainder.slice(i + 1)
      );
    }
  };
  buildABear('', combined);
  return answer;
};

var array1 = ['I'];
var array2 = ['A', 'B'];
var array3 = ['X', 'Y'];
var array4 = ['t', 'r', 'q'];

console.log(everyComboArray(array1, array2, array3, array4));
//---------------------------------------------------------------------------------------------------------
window.countNQueensSolutions = function (n) {
  var board = new Board({ n: n });

  var solutionCount = 0;

  const recurse = (row) => {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  recurse(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
//---------------------------------------------------------------------------------------------------------
window.findNQueensSolution = function (n) {
  var board = new Board({ n: n });

  const recurse = (row) => {
    if (row === n) return board.rows();

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        let result = recurse(row + 1);
        if (result) {
          return result;
        }
      }
      board.togglePiece(row, i);
    }
  };
  let solution = recurse(0);
  // If no solution exists, return the original unaltered board
  solution = solution || board.rows();

  console.log(
    'Single solution for ' + n + ' queens:',
    JSON.stringify(solution)
  );
  return solution;
};
//---------------------------------------------------------------------------------------------------------
