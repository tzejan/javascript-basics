var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Write a JavaScript function which accept a number as input and insert dashes (-) between each two even numbers. (Sample input: 025486, Sample output: 0-254-8-6)

function addDashes(numString) {
  var result = [];
  for (i = 0; i < numString.length-1; i++){
    result.push(numString[i]);
    if (parseInt(numString[i]) % 2 == 0 && parseInt(numString[i+1]) % 2 == 0){
      result.push('-');
    }
  }
  result.push(numString[numString.length-1]);
  return result.join('');
}

assertEquals(addDashes("025486"), "0-254-8-6"); // check that your function works as expected
assertEquals(addDashes('111246777'), '1112-4-6777'); // uncomment this and run program. if test passes, uncomment subsequent tests one by one
assertEquals(addDashes('0021100'), '0-0-2110-0');
assertEquals(addDashes(''), ''); // uncomment this line and add 2-3 more test cases. Do the same for all remaining functions
assertEquals(addDashes('0'), '0');
assertEquals(addDashes('2468'), '2-4-6-8');
assertEquals(addDashes('1357'), '1357');

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem(arr) {
  var counts = [];
  arr.forEach( (e) => {
    if (!(e in counts)){
      counts[e] = 0;
    }
    counts[e] += 1;
  });

  var highest = Object.keys(counts)[0];
  for (var k in counts){
    if (counts[k] > counts[highest]){
      highest = k;
    }
  }
  return highest;
}
// uncomment the following test to run it
assertEquals(mostFrequentItem(['a', 'a', 'b']), 'a');
assertEquals(mostFrequentItem(['a', 'b', 'b', 'b', 'c', 'a', 'b', 'a', 'b']), 'b');
assertEquals(mostFrequentItem(['yes', 'yes', 'no', 'no', 'yes']), 'yes');
assertEquals(mostFrequentItem([]), undefined);
assertEquals(mostFrequentItem(['yes', 'yes', 'no', 'no', 'yes', 'no']), 'yes');

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function removeDuplicateItems(arr) {
  var result = [];
  arr.forEach( (e) => {
    if (typeof(e) == "string") {
      if (!result.includes(e.toLowerCase())){
        result.push(e.toLowerCase());
      }
    }
    else if (!result.includes(e)){
      result.push(e);
    }
  });
  
  return result;
}

assertEquals(removeDuplicateItems([1, 1, 'a']), [1, 'a'])
assertEquals(removeDuplicateItems([1, 1, 'a', 'A']), [1, 'a'])
assertEquals(removeDuplicateItems([1, 'a', 'A', 'b', 'B', 2, 2]), [1, 'a', 'b', 2])

/* ---------------------- EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function union(arr1, arr2) {
  var result = arr1.slice();
  arr2.forEach( (e) => {
    if (!result.includes(e)){
      result.push(e);
    }
  });
  // sorting based on a compare function for numbers. a<b returns -1, a>b returns 1
  result.sort(function(a, b) {
    return a - b;
  });
  return result;
}

assertEquals(union([1, 2], [2, 3]), [1, 2, 3])
assertEquals(union([1, 2, 3], [100, 2, 1, 10]), [1, 2, 3, 10, 100])

/* ---------------------- EXERCISE 5 ---------------------- */
// Write a Javascript function to compute sum of a union. (Hint: Reuse the union() function which you wrote!) (Sample input: intersection([1, 2, 3], [1, 2]), expected output: 3)
function unionSum(arr1, arr2) {
  var result = 0;
  for (var e of union(arr1, arr2)){
    result += e;
  }
  return result;
}
assertEquals(unionSum([1, 2, 3], [1, 2]), 6)
assertEquals(unionSum([1, 2, 3, 4], [2, 3, 4]), 10)
assertEquals(unionSum([2000, 50, 551, 550, 23], [551, 50, 23]), 3174)
